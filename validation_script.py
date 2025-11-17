#!/usr/bin/env python3
"""
Validation Script for Imperial to Metric Conversion
Verifies that all conversions were done correctly and consistently.
"""

import re
from pathlib import Path
from typing import Dict, List, Tuple

class ConversionValidator:
    """Validate that imperial measurements have been properly converted."""

    def __init__(self):
        self.issues: List[Dict] = []
        self.stats = {
            'files_checked': 0,
            'imperial_found': 0,
            'metric_found': 0,
            'html_integrity_ok': 0,
        }

    def check_for_imperial(self, content: str, file_path: str) -> List[str]:
        """
        Check for any remaining imperial measurements.
        Returns list of found imperial measurements.
        """
        found = []

        # Yard patterns
        yard_pattern = r'\b\d+\s*(?:yard|yd)s?\b'
        yard_matches = re.findall(yard_pattern, content, re.IGNORECASE)
        if yard_matches:
            found.extend(yard_matches)
            self.issues.append({
                'file': file_path,
                'type': 'YARDS_REMAINING',
                'matches': yard_matches
            })

        # Foot patterns (exclude "front foot", "back foot", etc.)
        foot_pattern = r'(?<!front\s)(?<!back\s)(?<!left\s)(?<!right\s)(?<!lead\s)(?<!trail\s)\b\d+\s*(?:foot|feet|ft)\b'
        foot_matches = re.findall(foot_pattern, content, re.IGNORECASE)
        if foot_matches:
            found.extend(foot_matches)
            self.issues.append({
                'file': file_path,
                'type': 'FEET_REMAINING',
                'matches': foot_matches
            })

        # Inch patterns (very careful to exclude HTML attributes)
        lines = content.split('\n')
        inch_matches = []
        for line in lines:
            # Skip lines that are clearly HTML attributes
            if 'charset=' in line or 'UTF-8' in line:
                continue

            # Look for inch patterns
            inch_pattern = r'(?<!charset=)(?<!py-)(?<!class=")(?<!col-)\b\d+\s*(?:inch|")(?:es)?\b'
            matches = re.findall(inch_pattern, line)

            # Filter out false positives
            for match in matches:
                context_idx = line.find(match)
                if context_idx > 0:
                    context_before = line[max(0, context_idx-30):context_idx]
                    context_after = line[context_idx+len(match):min(len(line), context_idx+len(match)+20)]

                    # Skip if it's clearly HTML
                    if any(x in context_before for x in ['class=', 'charset=', 'UTF-', 'col-', 'py-', 'px-']):
                        continue
                    if any(x in context_after for x in ['>', 'col-', 'px-', 'py-']):
                        continue

                    inch_matches.append(match)

        if inch_matches:
            found.extend(inch_matches)
            self.issues.append({
                'file': file_path,
                'type': 'INCHES_REMAINING',
                'matches': inch_matches
            })

        if found:
            self.stats['imperial_found'] += len(found)

        return found

    def check_for_metric(self, content: str) -> Dict[str, int]:
        """
        Check for metric measurements and count them.
        Returns dict with counts of each metric type.
        """
        counts = {
            'meters': 0,
            'centimeters': 0,
        }

        # Meter patterns (e.g., "100m", "3.5m", "10-20m")
        meter_pattern = r'\b\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?m\b'
        counts['meters'] = len(re.findall(meter_pattern, content))

        # Centimeter patterns (e.g., "15 cm", "15-20 cm")
        cm_pattern = r'\b\d+(?:-\d+)?\s*cm\b'
        counts['centimeters'] = len(re.findall(cm_pattern, content, re.IGNORECASE))

        self.stats['metric_found'] += counts['meters'] + counts['centimeters']

        return counts

    def check_html_integrity(self, content: str, file_path: str) -> bool:
        """
        Verify HTML structure is intact.
        Checks for basic HTML validity.
        """
        issues_found = []

        # Check for balanced tags
        opening_tags = len(re.findall(r'<(?!/)(?!!)[a-zA-Z][^>]*>', content))
        closing_tags = len(re.findall(r'</[a-zA-Z][^>]*>', content))
        self_closing = len(re.findall(r'<[a-zA-Z][^>]*/>', content))

        # Basic check (not perfect but catches major issues)
        if abs(opening_tags - closing_tags - self_closing) > 10:  # Allow small variance
            issues_found.append(f"Potential tag imbalance: {opening_tags} opening, {closing_tags} closing")

        # Check for broken attributes (common conversion error)
        broken_attr = re.findall(r'(?:class|id|charset)="\s*\d+m', content)
        if broken_attr:
            issues_found.append(f"Broken HTML attributes detected: {broken_attr[:3]}")

        # Check for essential HTML structure
        if '<html' not in content.lower():
            issues_found.append("Missing <html> tag")
        if '<body' not in content.lower():
            issues_found.append("Missing <body> tag")

        if issues_found:
            self.issues.append({
                'file': file_path,
                'type': 'HTML_INTEGRITY',
                'issues': issues_found
            })
            return False

        self.stats['html_integrity_ok'] += 1
        return True

    def validate_file(self, file_path: Path) -> Dict:
        """
        Validate a single file.
        Returns validation results.
        """
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        results = {
            'file': str(file_path.name),
            'imperial_remaining': [],
            'metric_counts': {},
            'html_valid': True
        }

        # Check for remaining imperial
        results['imperial_remaining'] = self.check_for_imperial(content, str(file_path.name))

        # Count metric measurements
        results['metric_counts'] = self.check_for_metric(content)

        # Check HTML integrity
        results['html_valid'] = self.check_html_integrity(content, str(file_path.name))

        self.stats['files_checked'] += 1

        return results

    def generate_report(self, validation_results: List[Dict], output_file: str = "validation_report.txt"):
        """Generate validation report."""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("=" * 80 + "\n")
            f.write("IMPERIAL TO METRIC CONVERSION - VALIDATION REPORT\n")
            f.write("=" * 80 + "\n\n")

            # Overall Statistics
            f.write("OVERALL STATISTICS\n")
            f.write("-" * 80 + "\n")
            f.write(f"Files checked: {self.stats['files_checked']}\n")
            f.write(f"Metric measurements found: {self.stats['metric_found']}\n")
            f.write(f"Imperial measurements remaining: {self.stats['imperial_found']}\n")
            f.write(f"Files with HTML integrity: {self.stats['html_integrity_ok']}/{self.stats['files_checked']}\n")

            # Status
            f.write("\n")
            if self.stats['imperial_found'] == 0 and self.stats['html_integrity_ok'] == self.stats['files_checked']:
                f.write("✅ STATUS: VALIDATION PASSED - All conversions successful!\n")
            else:
                f.write("⚠️  STATUS: ISSUES FOUND - See details below\n")

            # Issues by file
            if self.issues:
                f.write("\n" + "=" * 80 + "\n")
                f.write("ISSUES FOUND\n")
                f.write("=" * 80 + "\n\n")

                for issue in self.issues:
                    f.write(f"\nFile: {issue['file']}\n")
                    f.write(f"Issue Type: {issue['type']}\n")

                    if 'matches' in issue:
                        f.write(f"Matches found: {', '.join(issue['matches'][:10])}\n")
                        if len(issue['matches']) > 10:
                            f.write(f"... and {len(issue['matches']) - 10} more\n")

                    if 'issues' in issue:
                        for i in issue['issues']:
                            f.write(f"  - {i}\n")

            # Detailed results per file
            f.write("\n" + "=" * 80 + "\n")
            f.write("DETAILED RESULTS PER FILE\n")
            f.write("=" * 80 + "\n\n")

            for result in validation_results:
                f.write(f"\n{result['file']}\n")
                f.write("-" * 80 + "\n")
                f.write(f"Metric measurements: {result['metric_counts']['meters']}m, {result['metric_counts']['centimeters']} cm\n")
                f.write(f"HTML valid: {'✅ Yes' if result['html_valid'] else '❌ No'}\n")

                if result['imperial_remaining']:
                    f.write(f"⚠️  Imperial remaining: {len(result['imperial_remaining'])} instances\n")
                    f.write(f"   Examples: {', '.join(result['imperial_remaining'][:5])}\n")
                else:
                    f.write("✅ No imperial measurements remaining\n")

            # Metric measurement breakdown
            f.write("\n" + "=" * 80 + "\n")
            f.write("METRIC MEASUREMENT BREAKDOWN\n")
            f.write("=" * 80 + "\n\n")

            total_meters = sum(r['metric_counts']['meters'] for r in validation_results)
            total_cm = sum(r['metric_counts']['centimeters'] for r in validation_results)

            f.write(f"Total meter measurements: {total_meters}\n")
            f.write(f"Total centimeter measurements: {total_cm}\n")
            f.write(f"Total metric measurements: {total_meters + total_cm}\n")

        print(f"✅ Validation report generated: {output_file}")


def main():
    """Main validation process."""
    docs_dir = Path("/Users/geraudd/Documents/youtube/golf/docs")
    validator = ConversionValidator()

    print("🔍 Golf Training Hub - Conversion Validator")
    print("=" * 80)

    # Get all HTML files
    html_files = sorted(docs_dir.glob("*.html"))
    print(f"Validating {len(html_files)} HTML files\n")

    # Validate each file
    all_results = []
    for html_file in html_files:
        print(f"Validating: {html_file.name}...", end=" ")
        result = validator.validate_file(html_file)
        all_results.append(result)

        if result['imperial_remaining']:
            print(f"⚠️  {len(result['imperial_remaining'])} imperial measurements remaining")
        elif not result['html_valid']:
            print("⚠️  HTML integrity issues")
        else:
            print(f"✅ {result['metric_counts']['meters']}m + {result['metric_counts']['centimeters']} cm found")

    # Generate report
    print("\n" + "=" * 80)
    print("VALIDATION SUMMARY")
    print("=" * 80)
    print(f"Files validated: {validator.stats['files_checked']}")
    print(f"Metric measurements: {validator.stats['metric_found']}")
    print(f"Imperial remaining: {validator.stats['imperial_found']}")

    if validator.stats['imperial_found'] == 0:
        print("\n✅ SUCCESS: All imperial measurements converted!")
    else:
        print(f"\n⚠️  WARNING: {validator.stats['imperial_found']} imperial measurements still found")

    # Generate detailed report
    validator.generate_report(all_results)

    print(f"\n✅ Validation complete! Check validation_report.txt for details.")

    # Return exit code
    return 0 if validator.stats['imperial_found'] == 0 else 1


if __name__ == "__main__":
    exit(main())
