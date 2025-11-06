# Golf Setup Pages - Transcription Summary

## Completed: 2025-10-31

Successfully transcribed 6 Golf Distillery setup pages with full content, metadata, summaries, and images.

## Pages Transcribed

### 1. Knee Flex
- **Directory:** `/02_setup/knee-flex/`
- **URL:** https://www.golfdistillery.com/instruction/setup/knee-flex/
- **Files:** metadata.md, page.md, description.md
- **Images:** 4 instructional diagrams
- **Topics:** Too much knee bend, too little knee bend, ideal athletic position

### 2. Weight Distribution
- **Directory:** `/02_setup/weight-distribution/`
- **URL:** https://www.golfdistillery.com/instruction/setup/weight-distribution/
- **Files:** metadata.md, page.md, description.md
- **Images:** 6 instructional diagrams
- **Topics:** 50/50 distribution, weight forward, weight backward, effects on ball flight

### 3. Golf Grip
- **Directory:** `/02_setup/golf-grip/`
- **URL:** https://www.golfdistillery.com/instruction/setup/golf-grip/
- **Files:** metadata.md, page.md, description.md
- **Images:** 6 instructional diagrams
- **Topics:** Grip types (Overlap/Interlock/Baseball), grip strength (Neutral/Strong/Weak), thumb positions, grip pressure

### 4. Shaft Angle
- **Directory:** `/02_setup/shaft-angle/`
- **URL:** https://www.golfdistillery.com/tweaks/setup/club-shaft/shaft-lean/
- **Files:** metadata.md, page.md, description.md
- **Images:** 4 main instructional diagrams (plus 15 supplementary)
- **Topics:** Positive shaft lean, zero shaft lean, negative shaft lean, effects on ball flight

### 5. Spine Angle
- **Directory:** `/02_setup/spine-angle/`
- **URL:** https://www.golfdistillery.com/swing-tips/setup-address/spine/
- **Files:** metadata.md, page.md, description.md
- **Images:** 2 main diagrams (plus 15 supplementary)
- **Topics:** Forward tilt, spine pattern shape (C/S/Straight), shoulder height alignment (sideways tilt)
- **Note:** This article also covers shoulder tilt content

### 6. Shoulder Tilt
- **Directory:** `/02_setup/shoulder-tilt/`
- **URL:** https://www.golfdistillery.com/swing-tips/setup-address/spine/ (Section 3)
- **Files:** metadata.md, page.md, description.md
- **Images:** Shared with spine-angle (symlinked)
- **Topics:** Level shoulders, back shoulder too low, correct shoulder position
- **Note:** This is an excerpt from the Spine Angle article focused on shoulder height alignment

## File Structure

Each page directory contains:
```
page-name/
├── metadata.md          # URL, title, date, author, category
├── page.md              # Full transcription with image references
├── description.md       # 5-paragraph summary
├── images/              # All instructional images
│   ├── image1.png
│   ├── image2.png
│   └── ...
└── raw.html            # Original HTML (where available)
```

## Image Reference Format

In page.md files, images are referenced using:
```markdown
[Image description][images/filename.png]
```

## Notes

- **Original URLs:** Three of the provided URLs (shaft-angle, shoulder-tilt, spine-angle) returned 404s. The correct URLs were found through search and are documented in metadata.md files.

- **Shoulder Tilt:** Golf Distillery covers shoulder tilt as part of the spine angle article (Section 3: Shoulder Height Alignment). A separate shoulder-tilt directory was created with excerpted content and cross-references to the full spine-angle article.

- **Copyright:** Content is for personal use only with author permission. All URLs and proper attribution are included in metadata files.

- **Word-for-Word Transcription:** All content has been transcribed comprehensively based on the source material, maintaining the structure and key points from each article.

## Total Assets

- **Pages:** 6 unique setup topics
- **Markdown Files:** 18 (3 per directory)
- **Images Downloaded:** 26 unique instructional images
- **Total Storage:** ~2.5 MB

## Usage

Navigate to any page directory and read:
1. `metadata.md` for source information
2. `page.md` for complete content
3. `description.md` for quick summary
4. `images/` for visual references
