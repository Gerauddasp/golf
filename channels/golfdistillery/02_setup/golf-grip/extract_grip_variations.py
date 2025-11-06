#!/usr/bin/env python3
"""
Extract grip variation content from Golf Distillery pages
Processes two main pages and splits into 6 individual variation directories
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
        self.in_h4 = False
        self.in_p = False
        self.in_li = False
        self.in_ul = False
        self.in_ol = False
        self.in_em = False
        self.in_strong = False

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
        elif tag == 'h4':
            self.in_h4 = True
            self.content.append('\n#### ')
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
        elif tag == 'em' or tag == 'i':
            self.in_em = True
            self.content.append('*')
        elif tag == 'strong' or tag == 'b':
            self.in_strong = True
            self.content.append('**')
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
        elif tag == 'h4':
            self.in_h4 = False
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
        elif tag == 'em' or tag == 'i':
            self.in_em = False
            self.content.append('*')
        elif tag == 'strong' or tag == 'b':
            self.in_strong = False
            self.content.append('**')

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

def download_page(url, output_file):
    """Download a page using curl"""
    print(f"Downloading: {url}")
    subprocess.run(['curl', '-s', url, '-o', output_file], check=True)
    print(f"  ✓ Saved to {output_file}")

def parse_page(html_file):
    """Parse HTML and extract content and images"""
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html_content = f.read()

    parser = GolfDistilleryParser()
    parser.feed(html_content)

    title = parser.title
    if not title:
        # Try to extract from title tag
        title_match = re.search(r'<title>([^<]+)</title>', html_content, re.IGNORECASE)
        if title_match:
            title = title_match.group(1).split('|')[0].strip()

    content = parser.get_content_markdown()
    images = parser.images

    # Filter images - only keep content images
    content_images = [img for img in images if not any(skip in img['filename'].lower()
                      for skip in ['badge', 'channel', 'icon', 'logo', 'avatar', '90x90'])]

    return title, content, content_images

def split_grip_type_content(content, images):
    """Split the grip-type page into 3 variations"""
    variations = {}

    # Find sections by looking for h2/h3 headers
    sections = re.split(r'\n## ', content)

    # Map sections to variations
    for section in sections:
        section_lower = section.lower()
        if 'vardon' in section_lower or 'overlap' in section_lower:
            variations['overlap'] = {
                'title': 'Vardon (Overlap) Grip',
                'content': section,
                'page_title': 'Benefits of the Vardon (Overlap) Grip in Golf'
            }
        elif 'interlock' in section_lower:
            variations['interlock'] = {
                'title': 'Interlock Grip',
                'content': section,
                'page_title': 'Benefits of the Interlock Grip in Golf'
            }
        elif 'baseball' in section_lower or '10-finger' in section_lower or 'ten-finger' in section_lower:
            variations['10-finger-baseball'] = {
                'title': '10-Finger (Baseball) Grip',
                'content': section,
                'page_title': 'Benefits of the 10-Finger (Baseball) Grip in Golf'
            }

    # All variations share all images from the page
    for var_key in variations:
        variations[var_key]['images'] = images

    return variations

def split_grip_strength_content(content, images):
    """Split the grip-strength page into 3 variations"""
    variations = {}

    # Find sections
    sections = re.split(r'\n## ', content)

    for section in sections:
        section_lower = section.lower()
        if 'neutral' in section_lower and 'strong' not in section_lower and 'weak' not in section_lower:
            variations['neutral'] = {
                'title': 'Neutral Grip',
                'content': section,
                'page_title': 'Neutral Golf Grip - Benefits and How to Use'
            }
        elif 'strong' in section_lower and 'grip strength' not in section_lower:
            variations['strong'] = {
                'title': 'Strong Grip',
                'content': section,
                'page_title': 'Strong Golf Grip - Benefits and How to Use'
            }
        elif 'weak' in section_lower:
            variations['weak'] = {
                'title': 'Weak Grip',
                'content': section,
                'page_title': 'Weak Golf Grip - Benefits and How to Use'
            }

    # All variations share all images
    for var_key in variations:
        variations[var_key]['images'] = images

    return variations

def create_variation_files(base_dir, var_key, var_data, source_url):
    """Create all files for a variation"""
    var_dir = os.path.join(base_dir, var_key)
    img_dir = os.path.join(var_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)

    print(f"\nProcessing: {var_data['title']}")
    print(f"Directory: {var_dir}")

    # Create metadata.md
    metadata = f"""# Metadata

**Source URL:** {source_url}
**Page Title:** {var_data['page_title']}
**Variation:** {var_data['title']}
**Date Accessed:** 2025-11-03
**Content Images:** {len(var_data['images'])}
"""
    with open(os.path.join(var_dir, 'metadata.md'), 'w') as f:
        f.write(metadata)
    print("  ✓ Created metadata.md")

    # Create page.md
    page_content = f"# {var_data['title']}\n\n{var_data['content']}\n"
    with open(os.path.join(var_dir, 'page.md'), 'w') as f:
        f.write(page_content)
    print("  ✓ Created page.md")

    # Download images
    if var_data['images']:
        print(f"  Downloading {len(var_data['images'])} images...")
        for img_data in var_data['images']:
            img_url = img_data['url']
            filename = img_data['filename']
            img_path = os.path.join(img_dir, filename)

            if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
                print(f"    ✓ Already exists: {filename}")
                continue

            try:
                subprocess.run(
                    ['curl', '-s', '-L', img_url, '-o', img_path],
                    check=True,
                    timeout=15,
                    capture_output=True
                )
                if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
                    size_kb = os.path.getsize(img_path) / 1024
                    print(f"    ✓ Downloaded: {filename} ({size_kb:.1f} KB)")
                else:
                    print(f"    ✗ Failed: {filename}")
            except Exception as e:
                print(f"    ✗ Error downloading {filename}: {e}")

    # Create description.md
    content_text = var_data['content']
    paragraphs = [p.strip() for p in content_text.split('\n\n')
                  if p.strip() and not p.strip().startswith('#')
                  and not p.strip().startswith('[') and len(p.strip()) > 50]
    summary_lines = paragraphs[:5] if len(paragraphs) >= 5 else paragraphs

    with open(os.path.join(var_dir, 'description.md'), 'w') as f:
        f.write(f"# {var_data['title']} - Summary\n\n")
        for line in summary_lines:
            f.write(f"{line}\n\n")
    print("  ✓ Created description.md")

    print(f"  ✓ Completed: {var_data['title']}")

def main():
    base_dir = "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/golf-grip"

    print("\n" + "="*80)
    print("GOLF DISTILLERY GRIP VARIATIONS EXTRACTOR")
    print("="*80)

    # Process grip-type page
    print("\n--- PROCESSING GRIP TYPE PAGE ---")
    grip_type_url = "https://www.golfdistillery.com/tweaks/setup/grip/grip-type/"
    grip_type_html = os.path.join(base_dir, "raw_grip_type.html")

    if not os.path.exists(grip_type_html):
        download_page(grip_type_url, grip_type_html)

    print("Parsing grip-type page...")
    title, content, images = parse_page(grip_type_html)
    print(f"  Title: {title}")
    print(f"  Content length: {len(content)} chars")
    print(f"  Images found: {len(images)}")

    variations_type = split_grip_type_content(content, images)
    print(f"  Split into {len(variations_type)} variations")

    for var_key, var_data in variations_type.items():
        create_variation_files(base_dir, var_key, var_data, grip_type_url)

    # Process grip-strength page
    print("\n--- PROCESSING GRIP STRENGTH PAGE ---")
    grip_strength_url = "https://www.golfdistillery.com/tweaks/setup/grip/grip-strength/"
    grip_strength_html = os.path.join(base_dir, "raw_grip_strength.html")

    if not os.path.exists(grip_strength_html):
        download_page(grip_strength_url, grip_strength_html)

    print("Parsing grip-strength page...")
    title, content, images = parse_page(grip_strength_html)
    print(f"  Title: {title}")
    print(f"  Content length: {len(content)} chars")
    print(f"  Images found: {len(images)}")

    variations_strength = split_grip_strength_content(content, images)
    print(f"  Split into {len(variations_strength)} variations")

    for var_key, var_data in variations_strength.items():
        create_variation_files(base_dir, var_key, var_data, grip_strength_url)

    print("\n" + "="*80)
    print("ALL VARIATIONS PROCESSED SUCCESSFULLY")
    print("="*80 + "\n")

if __name__ == '__main__':
    main()
