#!/usr/bin/env python3
"""
Extract content from Golf Distillery pages using BeautifulSoup
"""

import os
import subprocess
from pathlib import Path

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Installing beautifulsoup4...")
    subprocess.run(['pip3', 'install', 'beautifulsoup4'], check=True)
    from bs4 import BeautifulSoup

def clean_text(text):
    """Clean up extracted text"""
    # Remove excessive whitespace
    text = ' '.join(text.split())
    return text

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

    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract title from h1 or title tag
    title = ""
    h1_tag = soup.find('h1')
    if h1_tag:
        title = clean_text(h1_tag.get_text())
    if not title:
        title_tag = soup.find('title')
        if title_tag:
            title = clean_text(title_tag.get_text()).split('|')[0].strip()

    print(f"Title: {title}")

    # Find main content - try multiple selectors
    content_div = (
        soup.find('div', class_='entry-content') or
        soup.find('article') or
        soup.find('div', class_='post-content') or
        soup.find('main')
    )

    if not content_div:
        print("ERROR: Could not find main content area!")
        return

    # Extract all images from main content
    images = []
    for img in content_div.find_all('img'):
        src = img.get('src', '')
        if src and 'golfdistillery.com' in src:
            images.append({
                'url': src,
                'alt': img.get('alt', 'Image'),
                'filename': src.split('/')[-1].split('?')[0]
            })

    print(f"Found {len(images)} content images")

    # Build markdown content
    markdown_lines = [f"# {title}\n"]

    # Process content elements
    for element in content_div.children:
        if not element.name:
            continue

        # Skip navigation and sidebar elements
        if element.name in ['nav', 'aside'] or (element.get('class') and any(c in str(element.get('class')) for c in ['sidebar', 'navigation', 'menu', 'widget'])):
            continue

        if element.name == 'h2':
            text = clean_text(element.get_text())
            if text:
                markdown_lines.append(f"\n## {text}\n")

        elif element.name == 'h3':
            text = clean_text(element.get_text())
            if text:
                markdown_lines.append(f"\n### {text}\n")

        elif element.name == 'p':
            # Check if paragraph contains an image
            img_in_p = element.find('img')
            if img_in_p:
                src = img_in_p.get('src', '')
                if src and 'golfdistillery.com' in src:
                    alt = img_in_p.get('alt', 'Image')
                    filename = src.split('/')[-1].split('?')[0]
                    markdown_lines.append(f"\n[{alt}][images/{filename}]\n")
            else:
                text = clean_text(element.get_text())
                if text and len(text) > 10:  # Skip very short paragraphs (likely nav/misc)
                    markdown_lines.append(f"\n{text}\n")

        elif element.name == 'ul':
            for li in element.find_all('li', recursive=False):
                text = clean_text(li.get_text())
                if text:
                    markdown_lines.append(f"- {text}\n")
            markdown_lines.append("\n")

        elif element.name == 'ol':
            for i, li in enumerate(element.find_all('li', recursive=False), 1):
                text = clean_text(li.get_text())
                if text:
                    markdown_lines.append(f"{i}. {text}\n")
            markdown_lines.append("\n")

        elif element.name in ['div', 'section']:
            # Check for images in divs
            for img in element.find_all('img'):
                src = img.get('src', '')
                if src and 'golfdistillery.com' in src:
                    alt = img.get('alt', 'Image')
                    filename = src.split('/')[-1].split('?')[0]
                    markdown_lines.append(f"\n[{alt}][images/{filename}]\n")

    content = ''.join(markdown_lines)

    # Create metadata.md
    metadata = f"""# Metadata

**URL:** {url}
**Page Title:** {title}
**Date Accessed:** 2025-10-31
**Images Found:** {len(images)}
"""
    with open(f"{directory}/metadata.md", 'w') as f:
        f.write(metadata)
    print("✓ Created metadata.md")

    # Download images
    print(f"\nDownloading {len(images)} images...")
    for img_data in images:
        img_url = img_data['url']
        filename = img_data['filename']
        img_path = f"{directory}/images/{filename}"

        if os.path.exists(img_path):
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
            if os.path.exists(img_path) and os.path.getsize(img_path) > 0:
                print(f"    ✓ Success ({os.path.getsize(img_path)} bytes)")
            else:
                print(f"    ✗ Failed (empty file)")
        except Exception as e:
            print(f"    ✗ Error: {e}")

    # Create page.md with content
    with open(f"{directory}/page.md", 'w') as f:
        f.write(content)
    print("✓ Created page.md")

    # Create description.md (5-line summary from first paragraphs)
    paragraphs = [line.strip() for line in content.split('\n') if line.strip() and not line.startswith('#') and not line.startswith('[') and len(line.strip()) > 50]
    summary_lines = paragraphs[:5] if len(paragraphs) >= 5 else paragraphs

    with open(f"{directory}/description.md", 'w') as f:
        f.write(f"# {title} - Summary\n\n")
        for line in summary_lines:
            f.write(f"{line}\n\n")
    print("✓ Created description.md")

    print(f"\n{'✓'*40}")
    print(f"COMPLETED: {title}")
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
    print("GOLF DISTILLERY CONTENT EXTRACTOR")
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
