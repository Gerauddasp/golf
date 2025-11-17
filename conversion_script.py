#!/usr/bin/env python3
"""
Imperial to Metric Conversion Script for Golf Training Hub
Converts all imperial measurements to metric using golf-standard conversions.
"""

import re
import os
from pathlib import Path
from typing import Dict, List, Tuple

class GolfMeasurementConverter:
    """Convert imperial measurements to metric using golf-standard conversions."""

    def __init__(self):
        # Golf-standard conversion factors
        self.YARDS_TO_METERS = 0.9144  # Exact, but we'll round for golf standards
        self.FEET_TO_METERS = 0.3048
        self.INCHES_TO_CM = 2.54

        # Track all conversions made
        self.conversions_log: List[Dict] = []

    def convert_yards_range(self, start: int, end: int) -> str:
        """Convert yard range to golf-standard meters."""
        # Golf-standard rounding for common distances
        start_m = self._golf_standard_yards(start)
        end_m = self._golf_standard_yards(end)
        return f"{start_m}-{end_m}m"

    def convert_yards_single(self, yards: int) -> str:
        """Convert single yard value to golf-standard meters."""
        meters = self._golf_standard_yards(yards)
        return f"{meters}m"

    def _golf_standard_yards(self, yards: int) -> int:
        """Convert yards to golf-standard meters with rounder, more practical numbers."""
        # Use very round numbers that golfers can actually judge on the course
        # Common golf distance conversions
        if yards >= 100:
            # Long distances: round to nearest 10m (but favor round numbers)
            meters = round(yards * self.YARDS_TO_METERS / 10) * 10
        elif yards >= 50:
            # Medium distances: round to nearest 10m for simplicity
            meters = round(yards * self.YARDS_TO_METERS / 10) * 10
        elif yards >= 20:
            # Medium-short: round to nearest 5m
            meters = round(yards * self.YARDS_TO_METERS / 5) * 5
        else:
            # Very short: round to nearest 5m
            meters = round(yards * self.YARDS_TO_METERS / 5) * 5
        return int(meters)

    def convert_feet_range(self, start: int, end: int) -> str:
        """Convert foot range to meters, using whole numbers where practical."""
        start_m = self._round_feet_to_meters(start)
        end_m = self._round_feet_to_meters(end)

        return f"{start_m}-{end_m}m"

    def convert_feet_single(self, feet: int) -> str:
        """Convert single foot value to meters, using whole numbers where practical."""
        meters = self._round_feet_to_meters(feet)
        return f"{meters}m"

    def _round_feet_to_meters(self, feet: int) -> str:
        """Convert feet to meters with practical rounding."""
        meters = feet * self.FEET_TO_METERS

        # Use whole numbers for most distances
        if feet == 3:
            return "1"  # 3 feet ≈ 1m (easier than 0.9m)
        elif feet <= 15:
            # Short distances: round to nearest 0.5m for simplicity
            rounded = round(meters * 2) / 2
            if rounded == int(rounded):
                return str(int(rounded))
            return f"{rounded:.1f}"
        else:
            # Longer distances: round to whole meters
            return str(int(round(meters)))

    def convert_inches_range(self, start: int, end: int) -> str:
        """Convert inch range to centimeters (rounded to nearest 5cm for golf)."""
        start_cm = round(start * self.INCHES_TO_CM / 5) * 5
        end_cm = round(end * self.INCHES_TO_CM / 5) * 5
        return f"{int(start_cm)}-{int(end_cm)} cm"

    def convert_inches_single(self, inches: int) -> str:
        """Convert single inch value to centimeters."""
        cm = round(inches * self.INCHES_TO_CM / 5) * 5
        return f"{int(cm)} cm"

    def log_conversion(self, file_path: str, original: str, converted: str, line_num: int = None):
        """Log a conversion for the report."""
        self.conversions_log.append({
            'file': file_path,
            'line': line_num,
            'original': original,
            'converted': converted
        })

    def convert_line(self, line: str, file_path: str, line_num: int) -> str:
        """Convert all imperial measurements in a line to metric."""
        original_line = line

        # Pattern 1: Yard ranges (e.g., "10-80 yards", "110-130 yards")
        pattern = r'\b(\d+)-(\d+)\s*(?:yard|yd)s?\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):  # Reverse to maintain indices
            start, end = int(match.group(1)), int(match.group(2))
            converted = self.convert_yards_range(start, end)
            line = line[:match.start()] + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), converted, line_num)

        # Pattern 2: Single yard values (e.g., "100 yards", "~50 yards")
        pattern = r'~?\s*(\d+)\s*(?:yard|yd)s?\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):
            yards = int(match.group(1))
            converted = self.convert_yards_single(yards)
            # Keep the ~ if present
            prefix = '~' if match.group(0).strip().startswith('~') else ''
            line = line[:match.start()] + prefix + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), prefix + converted, line_num)

        # Pattern 3: Foot ranges (e.g., "3-9 feet", "30-60 feet")
        pattern = r'\b(\d+)-(\d+)\s*(?:foot|feet|ft)\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):
            start, end = int(match.group(1)), int(match.group(2))
            converted = self.convert_feet_range(start, end)
            line = line[:match.start()] + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), converted, line_num)

        # Pattern 4: Single foot values (e.g., "3 feet", "10 feet")
        # Exclude "front foot" and "back foot"
        pattern = r'(?<!front\s)(?<!back\s)(?<!left\s)(?<!right\s)\b(\d+)\s*(?:foot|feet|ft)\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):
            feet = int(match.group(1))
            converted = self.convert_feet_single(feet)
            line = line[:match.start()] + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), converted, line_num)

        # Pattern 5: Inch ranges (e.g., "2-6 inches", "6-8 inches")
        # Be careful not to match HTML attributes
        pattern = r'(?<!charset=")(?<!py-)(?<!class=")(?<!col-)(\d+)-(\d+)\s*(?:inch|"|in)(?:es)?\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):
            # Extra check: make sure it's not in an HTML attribute context
            context_before = line[max(0, match.start()-20):match.start()]
            if 'class=' in context_before or 'charset=' in context_before or 'col-' in context_before:
                continue

            start, end = int(match.group(1)), int(match.group(2))
            converted = self.convert_inches_range(start, end)
            line = line[:match.start()] + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), converted, line_num)

        # Pattern 6: Single inch values (e.g., "6 inches", '2"')
        # Very careful pattern to avoid HTML attributes
        pattern = r'(?<!charset=)(?<!py-)(?<!class=")(?<!col-)(?<!-)\b(\d+)\s*(?:inch|"|in)(?:es)?\b'
        matches = list(re.finditer(pattern, line, re.IGNORECASE))
        for match in reversed(matches):
            # Extra validation to avoid HTML attributes
            context_before = line[max(0, match.start()-30):match.start()]
            context_after = line[match.end():min(len(line), match.end()+10)]

            # Skip if it looks like HTML context
            if any(x in context_before for x in ['class=', 'charset=', 'UTF-', 'col-', 'py-', 'px-']):
                continue
            if context_after.strip().startswith('>'):
                continue

            inches = int(match.group(1))
            converted = self.convert_inches_single(inches)
            line = line[:match.start()] + converted + line[match.end():]
            self.log_conversion(file_path, match.group(0), converted, line_num)

        return line

    def convert_file(self, file_path: Path) -> Tuple[int, str]:
        """
        Convert all measurements in a file.
        Returns: (number_of_conversions, new_content)
        """
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        conversions_before = len(self.conversions_log)
        new_lines = []

        for i, line in enumerate(lines, 1):
            new_line = self.convert_line(line, str(file_path), i)
            new_lines.append(new_line)

        conversions_made = len(self.conversions_log) - conversions_before
        return conversions_made, ''.join(new_lines)

    def generate_report(self, output_file: str = "conversion_report.txt"):
        """Generate a detailed conversion report."""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("=" * 80 + "\n")
            f.write("IMPERIAL TO METRIC CONVERSION REPORT\n")
            f.write("Golf Training Hub - Golf Standard Conversions\n")
            f.write("=" * 80 + "\n\n")

            # Summary by file
            f.write("SUMMARY BY FILE\n")
            f.write("-" * 80 + "\n")

            files_dict = {}
            for conv in self.conversions_log:
                file_name = os.path.basename(conv['file'])
                if file_name not in files_dict:
                    files_dict[file_name] = []
                files_dict[file_name].append(conv)

            for file_name in sorted(files_dict.keys()):
                f.write(f"\n{file_name}: {len(files_dict[file_name])} conversions\n")

            # Detailed conversions
            f.write("\n\n" + "=" * 80 + "\n")
            f.write("DETAILED CONVERSIONS\n")
            f.write("=" * 80 + "\n\n")

            for file_name in sorted(files_dict.keys()):
                f.write(f"\n{'=' * 80}\n")
                f.write(f"FILE: {file_name}\n")
                f.write(f"{'=' * 80}\n\n")

                for conv in files_dict[file_name]:
                    line_info = f"Line {conv['line']}: " if conv['line'] else ""
                    f.write(f"{line_info}{conv['original']} → {conv['converted']}\n")

            # Statistics
            f.write("\n\n" + "=" * 80 + "\n")
            f.write("STATISTICS\n")
            f.write("=" * 80 + "\n")
            f.write(f"Total conversions: {len(self.conversions_log)}\n")
            f.write(f"Files modified: {len(files_dict)}\n")

            # Count by measurement type
            yards = sum(1 for c in self.conversions_log if 'yard' in c['original'].lower() or 'yd' in c['original'].lower())
            feet = sum(1 for c in self.conversions_log if 'foot' in c['original'].lower() or 'feet' in c['original'].lower() or 'ft' in c['original'].lower())
            inches = sum(1 for c in self.conversions_log if 'inch' in c['original'].lower() or '"' in c['original'])

            f.write(f"\nYard conversions: {yards}\n")
            f.write(f"Foot conversions: {feet}\n")
            f.write(f"Inch conversions: {inches}\n")

        print(f"✅ Conversion report generated: {output_file}")


def main():
    """Main conversion process."""
    # Setup
    docs_dir = Path("/Users/geraudd/Documents/youtube/golf/docs")
    converter = GolfMeasurementConverter()

    # Get all HTML files
    html_files = sorted(docs_dir.glob("*.html"))

    print("🏌️  Golf Training Hub - Imperial to Metric Converter")
    print("=" * 80)
    print(f"Found {len(html_files)} HTML files to process\n")

    # Process each file
    total_conversions = 0
    files_modified = 0

    for html_file in html_files:
        print(f"Processing: {html_file.name}...", end=" ")
        conversions, new_content = converter.convert_file(html_file)

        if conversions > 0:
            # Write the converted content
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)

            files_modified += 1
            total_conversions += conversions
            print(f"✅ {conversions} conversions")
        else:
            print("⚪ No conversions needed")

    # Generate report
    print("\n" + "=" * 80)
    print("CONVERSION COMPLETE")
    print("=" * 80)
    print(f"Files modified: {files_modified}/{len(html_files)}")
    print(f"Total conversions: {total_conversions}")

    # Generate detailed report
    converter.generate_report()

    print("\n✅ All conversions complete! Check conversion_report.txt for details.")


if __name__ == "__main__":
    main()
