#!/usr/bin/env python3
"""
Process Golf Distillery setup pages - extract content and download images
"""

import re
import os
import subprocess
from pathlib import Path
from html.parser import HTMLParser

class ContentExtractor(HTMLParser):
    """Extract main content from Golf Distillery pages"""

    def __init__(self):
        super().__init__()
        self.in_article = False
        self.in_h1 = False
        self.in_h2 = False
        self.in_h3 = False
        self.in_p = False
        self.in_li = False
        self.in_strong = False
        self.in_em = False
        self.skip_content = False
        self.content = []
        self.images = []
        self.title = ""
        self.current_text = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        # Skip navigation, sidebar, footer content
        if tag == 'nav' or (tag == 'div' and attrs_dict.get('class', '').find('sidebar') >= 0):
            self.skip_content = True
            return

        if self.skip_content:
            return

        # Main article content
        if tag == 'article' or (tag == 'div' and 'entry-content' in attrs_dict.get('class', '')):
            self.in_article = True

        if not self.in_article:
            return

        if tag == 'h1':
            self.in_h1 = True
        elif tag == 'h2':
            self.in_h2 = True
            self.content.append('\n## ')
        elif tag == 'h3':
            self.in_h3 = True
            self.content.append('\n### ')
        elif tag == 'p':
            self.in_p = True
            self.content.append('\n')
        elif tag == 'li':
            self.in_li = True
            self.content.append('\n- ')
        elif tag == 'strong' or tag == 'b':
            self.in_strong = True
            self.content.append('**')
        elif tag == 'em' or tag == 'i':
            self.in_em = True
            self.content.append('*')
        elif tag == 'br':
            self.content.append('\n')
        elif tag == 'img':
            src = attrs_dict.get('src', '')
            alt = attrs_dict.get('alt', 'Image')
            if src and self.in_article:
                self.images.append(src)
                # Extract filename from URL
                filename = src.split('/')[-1]
                self.content.append(f'\n[{alt}][images/{filename}]\n')

    def handle_endtag(self, tag):
        if tag == 'nav':
            self.skip_content = False
            return

        if self.skip_content:
            return

        if tag == 'article':
            self.in_article = False

        if not self.in_article:
            return

        if tag == 'h1':
            self.in_h1 = False
            self.content.append('\n')
        elif tag == 'h2':
            self.in_h2 = False
            self.content.append('\n')
        elif tag == 'h3':
            self.in_h3 = False
            self.content.append('\n')
        elif tag == 'p':
            self.in_p = False
            self.content.append('\n')
        elif tag == 'li':
            self.in_li = False
        elif tag == 'strong' or tag == 'b':
            self.in_strong = False
            self.content.append('**')
        elif tag == 'em' or tag == 'i':
            self.in_em = False
            self.content.append('*')

    def handle_data(self, data):
        if self.skip_content:
            return

        if self.in_h1 and not self.title:
            self.title = data.strip()

        if self.in_article and data.strip():
            self.content.append(data.strip())

    def get_content(self):
        return ''.join(self.content)

    def get_images(self):
        return list(set(self.images))  # Remove duplicates

def process_page(url, directory):
    """Process a single page: extract content and download images"""

    print(f"\nProcessing: {url}")
    print(f"Directory: {directory}")

    # Create directory structure
    os.makedirs(f"{directory}/images", exist_ok=True)

    # Download HTML
    html_file = f"{directory}/raw.html"
    if not os.path.exists(html_file):
        print("Downloading HTML...")
        subprocess.run(['curl', '-s', url, '-o', html_file], check=True)

    # Read and parse HTML
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()

    parser = ContentExtractor()
    parser.feed(html_content)

    title = parser.title
    content = parser.get_content()
    images = parser.get_images()

    print(f"Title: {title}")
    print(f"Found {len(images)} images")

    # Create metadata.md
    metadata = f"""# Metadata

**URL:** {url}
**Page Title:** {title}
**Date Accessed:** 2025-10-31
"""
    with open(f"{directory}/metadata.md", 'w') as f:
        f.write(metadata)
    print("Created metadata.md")

    # Download images
    for img_url in images:
        if img_url.startswith('//'):
            img_url = 'https:' + img_url
        elif not img_url.startswith('http'):
            continue

        filename = img_url.split('/')[-1].split('?')[0]
        img_path = f"{directory}/images/{filename}"

        if not os.path.exists(img_path):
            print(f"  Downloading: {filename}")
            try:
                subprocess.run(['curl', '-s', img_url, '-o', img_path], check=True, timeout=10)
            except Exception as e:
                print(f"    Failed: {e}")

    # Create page.md with content
    with open(f"{directory}/page.md", 'w') as f:
        f.write(f"# {title}\n\n")
        f.write(content)
    print("Created page.md")

    # Create description.md (5-line summary)
    lines = [line.strip() for line in content.split('\n') if line.strip() and not line.startswith('#')]
    summary_lines = lines[:5] if len(lines) >= 5 else lines

    with open(f"{directory}/description.md", 'w') as f:
        f.write(f"# {title} - Summary\n\n")
        for line in summary_lines:
            f.write(f"{line}\n")
    print("Created description.md")

    print(f"✓ Completed: {title}")

# Process all 6 pages
pages = [
    ("https://www.golfdistillery.com/instruction/setup/knee-flex/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/knee-flex"),
    ("https://www.golfdistillery.com/instruction/setup/weight-distribution/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/weight-distribution"),
    ("https://www.golfdistillery.com/instruction/setup/golf-grip/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/golf-grip"),
    ("https://www.golfdistillery.com/instruction/setup/shaft-angle/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/shaft-angle"),
    ("https://www.golfdistillery.com/instruction/setup/shoulder-tilt/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/shoulder-tilt"),
    ("https://www.golfdistillery.com/instruction/setup/spine-angle/",
     "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/spine-angle"),
]

if __name__ == '__main__':
    for url, directory in pages:
        try:
            process_page(url, directory)
        except Exception as e:
            print(f"ERROR processing {url}: {e}")
            import traceback
            traceback.print_exc()
