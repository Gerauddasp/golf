#!/usr/bin/env python3
"""
Fix spacing issues after conversion.
Adds spaces before metric measurements where they're missing.
"""

import re
from pathlib import Path

def fix_spacing(content: str) -> tuple[str, int]:
    """Fix spacing issues in converted content."""
    fixes = 0

    # Fix missing space before meter measurements
    # Pattern: word/letter followed immediately by number + m
    pattern = r'([a-zA-Z])(\d+(?:\.\d+)?m)\b'
    matches = re.findall(pattern, content)
    if matches:
        content = re.sub(pattern, r'\1 \2', content)
        fixes += len(matches)

    # Fix missing space before centimeter measurements
    pattern = r'([a-zA-Z])(\d+(?:-\d+)?\s*cm)\b'
    matches = re.findall(pattern, content)
    if matches:
        content = re.sub(pattern, r'\1 \2', content)
        fixes += len(matches)

    return content, fixes

def main():
    docs_dir = Path("/Users/geraudd/Documents/youtube/golf/docs")
    html_files = sorted(docs_dir.glob("*.html"))

    print("🔧 Fixing spacing issues...")
    print("=" * 80)

    total_fixes = 0
    files_fixed = 0

    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content, fixes = fix_spacing(content)

        if fixes > 0:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"{html_file.name}: {fixes} spacing fixes")
            total_fixes += fixes
            files_fixed += 1

    print("=" * 80)
    print(f"✅ Fixed {total_fixes} spacing issues in {files_fixed} files")

if __name__ == "__main__":
    main()
