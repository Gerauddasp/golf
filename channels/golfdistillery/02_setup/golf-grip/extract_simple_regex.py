#!/usr/bin/env python3
"""
Extract grip variations using simple regex approach
"""

import os
import subprocess
import re

def extract_content_and_images(html_file):
    """Extract content and images using regex"""
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Find entry-content div
    start = html.find('<div class="entry-content"')
    if start == -1:
        print(f"ERROR: No entry-content found in {html_file}")
        return "", []

    end = html.find('</article>', start)
    if end == -1:
        end = len(html)

    content_html = html[start:end]

    # Extract title from <title> tag
    title_match = re.search(r'<title>([^<]+)</title>', html, re.IGNORECASE)
    title = title_match.group(1).split('|')[0].strip() if title_match else "Unknown Title"

    # Build markdown content
    content = []

    # Extract all content in order (h2, h3, p, img)
    # Find all tags in order
    tag_pattern = r'<(h2|h3|p|img)([^>]*)>(.*?)</\1>|<img([^>]*)/?>'

    for match in re.finditer(tag_pattern, content_html, re.DOTALL):
        tag = match.group(1) if match.group(1) else 'img'
        attrs = match.group(2) if match.group(2) else match.group(4)
        inner = match.group(3) if match.group(3) else ''

        if tag == 'h2':
            text = re.sub(r'<[^>]+>', '', inner).strip()
            text = text.replace('&#8211;', '–')
            if text and len(text) > 2:
                content.append(f'\n## {text}\n')

        elif tag == 'h3':
            text = re.sub(r'<[^>]+>', '', inner).strip()
            if text and len(text) > 2 and 'video tips' not in text.lower():
                content.append(f'\n### {text}\n')

        elif tag == 'p':
            text = re.sub(r'<[^>]+>', '', inner).strip()
            text = text.replace('&#8211;', '–').replace('&nbsp;', ' ')
            text = text.replace('&#8217;', "'").replace('&#8220;', '"').replace('&#8221;', '"')
            if text and len(text) > 15:
                content.append(f'\n{text}\n')

        elif tag == 'img':
            src_match = re.search(r'src="([^"]+)"', attrs)
            alt_match = re.search(r'alt="([^"]*)"', attrs)
            if src_match:
                src = src_match.group(1)
                alt = alt_match.group(1) if alt_match else 'Image'
                filename = src.split('/')[-1].split('?')[0]

                # Skip small icons/badges
                if not any(skip in src.lower() for skip in ['badge', 'channel', 'icon', 'logo', 'avatar', '90x90']):
                    if '300x300' in filename or 'grip' in filename.lower():
                        content.append(f'\n[{alt}][images/{filename}]\n')

    # Extract images
    images = []
    for match in re.finditer(r'<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"', content_html):
        src = match.group(1)
        alt = match.group(2)
        filename = src.split('/')[-1].split('?')[0]

        # Only keep content images
        if not any(skip in src.lower() for skip in ['badge', 'channel', 'icon', 'logo', 'avatar', '90x90']):
            if '300x300' in filename or 'grip' in filename.lower():
                images.append({'url': src, 'alt': alt, 'filename': filename})

    markdown = ''.join(content).strip()

    # Clean up excessive line breaks
    markdown = re.sub(r'\n{4,}', '\n\n', markdown)

    return title, markdown, images

def split_by_h2_sections(content):
    """Split content by h2 headers"""
    sections = {}

    # Split by ## headers
    parts = re.split(r'\n## ', content)

    for part in parts[1:]:  # Skip first empty part
        lines = part.split('\n', 1)
        if len(lines) >= 2:
            header = lines[0].strip()
            body = lines[1].strip() if len(lines) > 1 else ''
            sections[header] = body

    return sections

def create_grip_type_variations(title, content, images, source_url, base_dir):
    """Create 3 variations from grip-type page"""
    sections = split_by_h2_sections(content)

    variations = {
        'overlap': {
            'title': 'Vardon (Overlap) Grip',
            'page_title': 'Vardon (Overlap) Grip - Golf Distillery',
            'content': '',
            'dir_name': 'overlap'
        },
        'interlock': {
            'title': 'Interlock Grip',
            'page_title': 'Interlock Grip - Golf Distillery',
            'content': '',
            'dir_name': 'interlock'
        },
        '10-finger-baseball': {
            'title': 'Baseball (10-Finger) Grip',
            'page_title': 'Baseball (10-Finger) Grip - Golf Distillery',
            'content': '',
            'dir_name': '10-finger-baseball'
        }
    }

    # Map sections to variations
    for header, body in sections.items():
        header_lower = header.lower()
        if 'vardon' in header_lower or ('overlap' in header_lower and 'vardon' in header_lower):
            variations['overlap']['content'] = f"## {header}\n\n{body}"
        elif 'interlock' in header_lower:
            variations['interlock']['content'] = f"## {header}\n\n{body}"
        elif 'baseball' in header_lower or '10 finger' in header_lower:
            variations['10-finger-baseball']['content'] = f"## {header}\n\n{body}"

    # Add general intro and "which grip" section to all
    intro_content = content.split('\n## ')[0].strip()
    which_grip = ""
    for header, body in sections.items():
        if 'which grip' in header.lower():
            which_grip = f"\n\n## {header}\n\n{body}"

    for var_key in variations:
        if intro_content:
            variations[var_key]['content'] = intro_content + "\n\n" + variations[var_key]['content']
        if which_grip:
            variations[var_key]['content'] += which_grip
        variations[var_key]['images'] = images  # All share same images
        create_variation_files(base_dir, variations[var_key], source_url)

def create_grip_strength_variations(title, content, images, source_url, base_dir):
    """Create 3 variations from grip-strength page"""
    sections = split_by_h2_sections(content)

    variations = {
        'neutral': {
            'title': 'Neutral Grip',
            'page_title': 'Neutral Grip - Golf Distillery',
            'content': '',
            'dir_name': 'neutral'
        },
        'strong': {
            'title': 'Strong Grip',
            'page_title': 'Strong Grip - Golf Distillery',
            'content': '',
            'dir_name': 'strong'
        },
        'weak': {
            'title': 'Weak Grip',
            'page_title': 'Weak Grip - Golf Distillery',
            'content': '',
            'dir_name': 'weak'
        }
    }

    # Map sections
    for header, body in sections.items():
        header_lower = header.lower()
        if 'neutral' in header_lower and 'grip' in header_lower:
            variations['neutral']['content'] = f"## {header}\n\n{body}"
        elif 'strong' in header_lower and 'grip' in header_lower:
            variations['strong']['content'] = f"## {header}\n\n{body}"
        elif 'weak' in header_lower and 'grip' in header_lower:
            variations['weak']['content'] = f"## {header}\n\n{body}"

    # Add intro to all
    intro_content = content.split('\n## ')[0].strip()

    for var_key in variations:
        if intro_content:
            variations[var_key]['content'] = intro_content + "\n\n" + variations[var_key]['content']
        variations[var_key]['images'] = images
        create_variation_files(base_dir, variations[var_key], source_url)

def create_variation_files(base_dir, var_data, source_url):
    """Create all files for one variation"""
    var_dir = os.path.join(base_dir, var_data['dir_name'])
    img_dir = os.path.join(var_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"Creating: {var_data['title']}")
    print(f"Directory: {var_dir}")
    print('='*60)

    # metadata.md
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

    # page.md
    page_content = f"# {var_data['title']}\n\n{var_data['content']}\n"
    with open(os.path.join(var_dir, 'page.md'), 'w') as f:
        f.write(page_content)
    print(f"  ✓ Created page.md ({len(var_data['content'])} chars)")

    # Download images
    print(f"  Downloading {len(var_data['images'])} images...")
    for img_data in var_data['images']:
        img_url = img_data['url']
        filename = img_data['filename']
        img_path = os.path.join(img_dir, filename)

        if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
            print(f"    ✓ Exists: {filename}")
            continue

        try:
            subprocess.run(['curl', '-s', '-L', img_url, '-o', img_path],
                         check=True, timeout=15, capture_output=True)
            if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
                size_kb = os.path.getsize(img_path) / 1024
                print(f"    ✓ Downloaded: {filename} ({size_kb:.1f} KB)")
            else:
                print(f"    ✗ Failed: {filename}")
        except Exception as e:
            print(f"    ✗ Error: {filename} - {e}")

    # description.md - first 5 good paragraphs
    paragraphs = [p.strip() for p in var_data['content'].split('\n\n')
                  if p.strip() and not p.strip().startswith('#')
                  and not p.strip().startswith('[') and len(p.strip()) > 50]
    summary_lines = paragraphs[:5] if len(paragraphs) >= 5 else paragraphs

    with open(os.path.join(var_dir, 'description.md'), 'w') as f:
        f.write(f"# {var_data['title']} - Summary\n\n")
        for line in summary_lines:
            f.write(f"{line}\n\n")
    print("  ✓ Created description.md")
    print(f"  ✓ COMPLETED: {var_data['title']}")

def main():
    base_dir = "/Users/geraudd/Documents/youtube/golf/channels/golfdistillery/02_setup/golf-grip"

    print("\n" + "="*80)
    print("GOLF DISTILLERY GRIP VARIATIONS EXTRACTOR (Simple Regex)")
    print("="*80)

    # Process grip-type page
    print("\n--- PROCESSING GRIP TYPE PAGE ---")
    grip_type_url = "https://www.golfdistillery.com/tweaks/setup/grip/grip-type/"
    grip_type_html = os.path.join(base_dir, "raw_grip_type.html")

    if not os.path.exists(grip_type_html):
        print(f"Downloading {grip_type_url}...")
        subprocess.run(['curl', '-s', grip_type_url, '-o', grip_type_html], check=True)

    title, content, images = extract_content_and_images(grip_type_html)
    print(f"Title: {title}")
    print(f"Content: {len(content)} characters")
    print(f"Images: {len(images)}")

    create_grip_type_variations(title, content, images, grip_type_url, base_dir)

    # Process grip-strength page
    print("\n--- PROCESSING GRIP STRENGTH PAGE ---")
    grip_strength_url = "https://www.golfdistillery.com/tweaks/setup/grip/grip-strength/"
    grip_strength_html = os.path.join(base_dir, "raw_grip_strength.html")

    if not os.path.exists(grip_strength_html):
        print(f"Downloading {grip_strength_url}...")
        subprocess.run(['curl', '-s', grip_strength_url, '-o', grip_strength_html], check=True)

    title, content, images = extract_content_and_images(grip_strength_html)
    print(f"Title: {title}")
    print(f"Content: {len(content)} characters")
    print(f"Images: {len(images)}")

    create_grip_strength_variations(title, content, images, grip_strength_url, base_dir)

    print("\n" + "="*80)
    print("ALL 6 VARIATIONS CREATED SUCCESSFULLY!")
    print("="*80 + "\n")

if __name__ == '__main__':
    main()
