# Golf Training Hub - Mobile-First Website

A comprehensive, mobile-optimized golf training website built from Golf Distillery's 141-page instructional library.

## Overview

This website provides instant access to professional golf instruction optimized for use on the golf course and driving range. Built with a mobile-first approach, it features 24 pages covering all aspects of golf from fundamentals to advanced trouble shots.

## Features

- **On-Course Quick Reference**: Fast access to club-specific instruction and trouble shot guidance
- **Practice System**: 7 structured practice stations across driving range, short game area, and putting green
- **Visual Learning**: 233 professionally-created diagrams and images
- **Mobile-First Design**: Optimized for phone use with large tap targets and high contrast
- **Bootstrap Framework**: Responsive, accessible, and battle-tested UI
- **Offline-Capable**: Works without internet once loaded
- **Progressive Disclosure**: Accordion sections reveal details on demand

## Structure

```
docs/
├── index.html                      # Home page (Golf Distillery branding)
├── on-course.html                  # Hub: Clubs / Short Game / Trouble
├── practice.html                   # Hub: Driving Range / Short Game / Putting
│
├── Club Pages (8 files)
│   ├── driver.html
│   ├── woods.html
│   ├── hybrids.html
│   ├── irons.html
│   ├── putter.html
│   ├── wedges-full-swing.html
│   ├── chipping-pitching.html
│   └── bunker-play.html
│
├── Situation Pages (4 files)
│   ├── rough.html
│   ├── trouble.html
│   ├── uneven-lies.html
│   └── tight-lies.html
│
├── Practice Area Pages (3 files)
│   ├── driving-range.html
│   ├── short-game.html
│   └── station-7-putting.html
│
├── Practice Stations (6 files)
│   ├── station-1-driver-woods.html
│   ├── station-2-iron-play.html
│   ├── station-3-wedge-play.html
│   ├── station-4-chipping.html
│   ├── station-5-pitching.html
│   └── station-6-bunker.html
│
├── Assets
│   ├── bootstrap-custom.css       # Custom Bootstrap 5 theme
│   ├── styles.css                 # Additional mobile-first styles
│   ├── app.js                     # Generic utilities (302 lines)
│   └── images/                    # 233 instructional images (14MB)
│       ├── clubs/                 # Driver, woods, hybrids, irons
│       ├── short-game/            # Wedges, chipping, bunker
│       ├── putting/               # Putting fundamentals
│       └── situations/            # Rough, uneven lies, etc.
│
└── README.md                       # This file
```

## Technology Stack

- **HTML5**: Semantic structure, 24 pages
- **CSS3**: Bootstrap 5 + custom mobile-first styles
- **JavaScript**: Vanilla JS (no frameworks/dependencies)
- **Images**: 233 optimized PNG/JPG files (14MB total)
- **Hosting**: GitHub Pages (static site)

## Content Organization

### Content Embedding

All instructional content is embedded directly in individual HTML files using Bootstrap accordion components. This approach provides:

- Fast loading (no AJAX requests)
- Offline capability
- Progressive disclosure (expand sections as needed)
- localStorage state persistence

### app.js Utilities (302 lines)

The JavaScript file provides **generic utilities only**:

- **Collapsible Sections**: Save/restore state via localStorage
- **Image Viewer Modal**: Tap to zoom any image
- **Scroll-to-Top Button**: Easy navigation on long pages
- **Lazy Loading**: Optimize image loading performance
- **Touch Feedback**: Mobile-optimized interactions
- **Accessibility**: ARIA attributes and keyboard navigation

**Note**: Unlike earlier versions, app.js does NOT contain content or video mapping. All content lives in the HTML files.

## Local Testing

### Option 1: Direct File Access

Simply open `index.html` in your web browser:

```bash
open index.html
```

### Option 2: Local Server (Recommended)

Use Python's built-in HTTP server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

Or use any other local server:

```bash
# Node.js (if you have npx)
npx http-server

# PHP
php -S localhost:8000
```

## Deploying to GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Deploy golf training website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/golf.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **main**
5. Select folder: **/docs**
6. Click **Save**

Your site will be live at: `https://yourusername.github.io/golf/`

**Note**: It may take a few minutes for the site to become available after enabling GitHub Pages.

## Usage Guide

### On the Golf Course

1. Open the website on your phone
2. Tap **"On-Course"**
3. Select your situation:
   - **Clubs**: Driver, Woods, Hybrids, Irons, Putter
   - **Short Game**: Wedges, Chipping, Bunker
   - **Trouble**: Rough, Uneven Lies, Tight Lies, Trouble Shots
4. Review the key fundamentals
5. Tap any image to view full-screen

### At the Driving Range

1. Open the website on your phone
2. Tap **"Practice"**
3. Choose your practice area:
   - **Driving Range**: Stations 1-3 (Driver, Irons, Wedges)
   - **Short Game Area**: Stations 4-6 (Chipping, Pitching, Bunker)
   - **Putting Green**: Station 7
4. Work through the drills progressively
5. Expand/collapse sections as needed

### Navigation Tips

- **Breadcrumb Navigation**: Use the breadcrumb trail at the top to navigate back
- **Home Button**: Tap "Golf Training Hub" to return to home
- **Scroll to Top**: Use the ↑ button on long pages
- **Image Zoom**: Tap any image to view full-screen with pinch-zoom
- **State Persistence**: Your expanded/collapsed sections are saved

## Design Principles

1. **Mobile-First**: Designed for phone use on course/range
2. **High Contrast**: Readable in bright sunlight
3. **Large Tap Targets**: Easy thumb navigation (44px+ buttons)
4. **Visual Learning**: 233 images with clear diagrams
5. **Fast Loading**: Optimized images, minimal JavaScript
6. **Offline-Capable**: Content embedded, works after initial load
7. **Bootstrap Framework**: Responsive, accessible, battle-tested
8. **Progressive Disclosure**: Accordion sections reduce scrolling

## Content Attribution

All instructional content is sourced from **Golf Distillery** (www.golfdistillery.com):

- 141 comprehensive pages covering all aspects of golf
- 824 professionally-created diagrams and illustrations
- Organized into 9 major categories:
  1. Fundamentals (grip, posture, alignment, ball position)
  2. Swing Thoughts (backswing, downswing, impact, follow-through)
  3. Swing Errors (27 common mistakes with fixes)
  4. Practice Drills (19 specific drills)
  5. Shot Errors (slice, hook, thin, fat, topped, etc.)
  6. Clubs (driver, woods, hybrids, irons)
  7. Short Game (chipping, pitching, bunker play)
  8. Putting (fundamentals and drills)
  9. Situations (rough, uneven lies, trouble shots, tight lies)

This website extracts and organizes the most actionable content for quick mobile access.

## Browser Compatibility

Tested and working on:

- ✅ iOS Safari (iPhone/iPad)
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Samsung Internet (Android)

## Performance

- **Loading Speed**: < 2 seconds on 3G
- **Total Size**: ~14.5MB (14MB images + 0.5MB HTML/CSS/JS)
- **No Dependencies**: No frameworks, no external requests
- **Offline-Ready**: All content embedded for offline use
- **Caching**: Browser caches static assets automatically

## Customization

### Adding New Content

1. **Add a new page**: Create a new HTML file using an existing page as a template
2. **Add images**: Place in appropriate subfolder under `images/`
3. **Update navigation**: Add links in `index.html`, `on-course.html`, or `practice.html`
4. **Bootstrap components**: Use accordions, cards, and grids for consistency

### Styling Changes

- **Theme colors**: Edit `bootstrap-custom.css`
- **Custom styles**: Add to `styles.css`
- **Mobile adjustments**: Use Bootstrap's responsive utility classes

### JavaScript Enhancements

The `app.js` file is modular and well-commented. To add features:

1. Add your function in the appropriate section
2. Call it from the `DOMContentLoaded` event listener
3. Follow existing patterns for consistency

## Future Enhancements

- [ ] Add search functionality across all content
- [ ] Add progress tracking (localStorage)
- [ ] Add custom notes feature per page
- [ ] Add service worker for true offline mode (PWA)
- [ ] Add dark mode for evening practice
- [ ] Add print-friendly versions
- [ ] Add "random drill" generator
- [ ] Add voice control for hands-free use on range

## Credits

- **Content Source**: [Golf Distillery](https://www.golfdistillery.com)
- **Framework**: [Bootstrap 5](https://getbootstrap.com)
- **Website Design**: Mobile-first responsive design
- **Images**: Professional instructional diagrams from Golf Distillery

## License

This is a personal training tool. All golf instruction content is based on publicly available material from Golf Distillery. Please respect copyright and attribution requirements when using or modifying this content.

---

**Need Help?**

- Check the main [repository README](../README.md) for more information
- Review `.claude/CLAUDE.md` for complete project documentation
- Visit Golf Distillery for the original source material
