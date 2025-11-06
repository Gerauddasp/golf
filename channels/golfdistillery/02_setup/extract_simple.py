#!/usr/bin/env python3
"""
Extract content from Golf Distillery pages using standard library only
"""

import os
import subprocess
import re
from html.parser import HTMLParser

class GolfDistilleryParser(HTMLParser):
    """Parse Golf Distillery HTML pages"""

    def __init__(self):
        super().__init__()
        self.reset_state()

    def reset_state(self):
        self.title = ""
        self.content = []
        self.images = []

        # State tracking
        self.in_entry_content = 0
        self.in_sidebar = 0
        self.in_navigation = 0
        self.in_footer = 0

        self.in_h1 = False
        self.in_h2 = False
        self.in_h3 = False
        self.in_p = False
        self.in_li = False
        self.in_ul = False
        self.in_ol = False

        self.current_tag_stack = []

    def is_in_main_content(self):
        """Check if we're in the main content area"""
        return self.in_entry_content > 0 and self.in_sidebar == 0 and self.in_navigation == 0 and self.in_footer == 0

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        classes = attrs_dict.get('class', '').lower()
        id_attr = attrs_dict.get('id', '').lower()

        self.current_tag_stack.append(tag)

        # Track content areas
        if 'entry-content' in classes or 'post-content' in classes or tag == 'article':
            self.in_entry_content += 1

        # Skip areas
        if tag == 'nav' or 'sidebar' in classes or 'navigation' in classes or 'menu' in classes or tag == 'footer':
            if 'sidebar' in classes:
                self.in_sidebar += 1
            if tag == 'nav' or 'navigation' in classes or 'menu' in classes:
                self.in_navigation += 1
            if tag == 'footer':
                self.in_footer += 1

        if not self.is_in_main_content():
            return

        # Content tags
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
        elif tag == 'ul':
            self.in_ul = True
        elif tag == 'ol':
            self.in_ol = True
        elif tag == 'li':
            self.in_li = True
            self.content.append('\n- ')
        elif tag == 'br':
            self.content.append(' ')
        elif tag == 'img':
            src = attrs_dict.get('src', '')
            alt = attrs_dict.get('alt', 'Image')
            if src and 'golfdistillery.com' in src:
                self.images.append({
                    'url': src,
                    'alt': alt,
                    'filename': src.split('/')[-1].split('?')[0]
                })
                filename = src.split('/')[-1].split('?')[0]
                # Only add image reference if it's a content image (not tiny icons/badges)
                if not any(skip in src.lower() for skip in ['badge', 'icon', 'logo', 'avatar', 'channel-']):
                    self.content.append(f'\n[{alt}][images/{filename}]\n')

    def handle_endtag(self, tag):
        if self.current_tag_stack and self.current_tag_stack[-1] == tag:
            self.current_tag_stack.pop()

        # Track content areas
        if tag == 'article' or tag == 'div':
            if self.in_entry_content > 0:
                self.in_entry_content -= 1

        # Skip areas
        if tag == 'div':
            if self.in_sidebar > 0:
                self.in_sidebar -= 1
        if tag == 'nav':
            if self.in_navigation > 0:
                self.in_navigation -= 1
        if tag == 'footer':
            if self.in_footer > 0:
                self.in_footer -= 1

        if not self.is_in_main_content():
            return

        if tag == 'h1':
            self.in_h1 = False
            self.content.append('\n\n')
        elif tag == 'h2':
            self.in_h2 = False
            self.content.append('\n\n')
        elif tag == 'h3':
            self.in_h3 = False
            self.content.append('\n\n')
        elif tag == 'p':
            self.in_p = False
            self.content.append('\n\n')
        elif tag == 'ul':
            self.in_ul = False
            self.content.append('\n')
        elif tag == 'ol':
            self.in_ol = False
            self.content.append('\n')
        elif tag == 'li':
            self.in_li = False

    def handle_data(self, data):
        # Get title from h1
        if self.in_h1 and not self.title:
            self.title = data.strip()

        if not self.is_in_main_content():
            return

        # Add text content
        text = data.strip()
        if text:
            # Skip common navigation/UI text
            skip_phrases = ['related articles', 'more from', 'recommended', 'follow us', 'subscribe']
            if not any(phrase in text.lower() for phrase in skip_phrases):
                self.content.append(text + ' ')

    def get_content_markdown(self):
        """Get final markdown content"""
        text = ''.join(self.content)
        # Clean up excessive whitespace
        text = re.sub(r'\n{3,}', '\n\n', text)
        text = re.sub(r' {2,}', ' ', text)
        return text.strip()

def process_page(url, directory):
    """Process a single page: extract content and download images"""

    print(f"\n{'='*80}")
    print(f"Processing: {url}")
    print(f"Directory: {directory}")
    print('='*80)

    # Create directory structure
    os.makedirs(f"{directory}/images", exist_ok=True)

    # Download HTML if not exists
    html_file = f"{directory}/raw.html"
    if not os.path.exists(html_file):
        print("Downloading HTML...")
        subprocess.run(['curl', '-s', url, '-o', html_file], check=True)
    else:
        print("Using existing HTML file...")

    # Read and parse HTML
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()

    # Parse the HTML
    parser = GolfDistilleryParser()
    parser.feed(html_content)

    title = parser.title
    if not title:
        # Try to extract from title tag
        title_match = re.search(r'<title>([^<]+)</title>', html_content, re.IGNORECASE)
        if title_match:
            title = title_match.group(1).split('|')[0].strip()

    print(f"Title: {title}")

    content = parser.get_content_markdown()
    images = parser.images

    # Filter images - only keep content images (not badges/icons)
    content_images = [img for img in images if not any(skip in img['filename'].lower() for skip in ['badge', 'channel', 'icon', 'logo', 'avatar', '90x90'])]

    print(f"Found {len(content_images)} content images (filtered from {len(images)} total)")

    # Create metadata.md
    metadata = f"""# Metadata

**URL:** {url}
**Page Title:** {title}
**Date Accessed:** 2025-10-31
**Content Images:** {len(content_images)}
"""
    with open(f"{directory}/metadata.md", 'w') as f:
        f.write(metadata)
    print("✓ Created metadata.md")

    # Download images
    if content_images:
        print(f"\nDownloading {len(content_images)} images...")
        for img_data in content_images:
            img_url = img_data['url']
            filename = img_data['filename']
            img_path = f"{directory}/images/{filename}"

            if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
                print(f"  ✓ Already exists: {filename}")
                continue

            print(f"  Downloading: {filename}")
            try:
                result = subprocess.run(
                    ['curl', '-s', '-L', img_url, '-o', img_path],
                    check=True,
                    timeout=15,
                    capture_output=True
                )
                # Check if file was created and has content
                if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
                    size_kb = os.path.getsize(img_path) / 1024
                    print(f"    ✓ Success ({size_kb:.1f} KB)")
                else:
                    print(f"    ✗ Failed (file too small or empty)")
            except Exception as e:
                print(f"    ✗ Error: {e}")

    # Create page.md with content
    page_content = f"# {title}\n\n{content}\n"
    with open(f"{directory}/page.md", 'w') as f:
        f.write(page_content)
    print("✓ Created page.md")

    # Create description.md (first 5 substantial paragraphs)
    paragraphs = [p.strip() for p in content.split('\n\n') if p.strip() and not p.strip().startswith('#') and not p.strip().startswith('[') and len(p.strip()) > 50]
    summary_lines = paragraphs[:5] if len(paragraphs) >= 5 else paragraphs

    with open(f"{directory}/description.md", 'w') as f:
        f.write(f"# {title} - Summary\n\n")
        for i, line in enumerate(summary_lines, 1):
            f.write(f"{line}\n\n")
    print("✓ Created description.md")

    print(f"\n{'✓'*40}")
    print(f"COMPLETED: {title}")
    print(f"Content size: {len(content)} characters")
    print(f"{'✓'*40}\n")

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
    print("\n" + "="*80)
    print("GOLF DISTILLERY CONTENT EXTRACTOR (Standard Library)")
    print("="*80)

    for url, directory in pages:
        try:
            process_page(url, directory)
        except Exception as e:
            print(f"\n✗ ERROR processing {url}:")
            print(f"  {e}")
            import traceback
            traceback.print_exc()

    print("\n" + "="*80)
    print("ALL PAGES PROCESSED")
    print("="*80 + "\n")
