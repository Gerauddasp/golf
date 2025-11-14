# Golf Training Hub - Development Guide

## Repository Structure

```
golf/
├── docs/                    # Website (24 HTML pages) - Golf Distillery content
│   ├── *.html              # Bootstrap 5 + embedded content
│   ├── app.js              # Utilities only (collapsibles, image viewer, etc.)
│   ├── styles.css          # Mobile-first CSS
│   └── images/             # 233 images (14MB)
│
└── channels/               # Reference materials (NOT in website)
    ├── golfdistillery/     # PRIMARY SOURCE (141 pages, 824 images)
    ├── andrew-cullen-pga/  # 52 videos (processed)
    ├── athletic-motion-golf/ # 92 videos (processed)
    ├── classic-golf-swing/ # 5 videos (processed)
    └── me-and-my-golf/     # 15 videos (processed)
```

## Key Facts

- **Website Source**: Golf Distillery (100% of website content)
- **YouTube Channels**: Reference materials only, not integrated
- **Content Location**: Embedded in HTML files (Bootstrap accordions)
- **app.js**: Generic utilities only (302 lines)
- **Navigation**: 24 pages (On-Course: 12 pages, Practice: 10 pages, Home: 2 pages)

## Website Structure

**On-Course** (on-course.html) → 8 clubs + 4 situations
**Practice** (practice.html) → 7 stations across 3 areas

## Tech Stack

- HTML5 + Bootstrap 5
- Vanilla JavaScript (no dependencies)
- Mobile-first responsive design
- GitHub Pages ready

## Local Testing

```bash
cd docs && python3 -m http.server 8000
```

## Deployment

```bash
git push origin main
# Enable GitHub Pages: Settings → Pages → main branch → /docs folder
```
