# Andrew Cullen PGA - Golf Training Website

A personal, mobile-optimized golf training website built from Andrew Cullen's 52 video lessons.

## Features

- **On-Course Quick Reference**: Fast club-by-club guide for use on the golf course
- **Practice Hub**: Structured warm-up and station-based practice system
- **YouTube Video Links**: Direct links to relevant video lessons
- **Mobile-First Design**: Optimized for use at the driving range and on the course
- **Offline-Ready**: Works without internet once loaded

## Structure

```
docs/
├── index.html       # Home page with main navigation
├── on-course.html   # Club selector and quick reference
├── practice.html    # Warm-up and practice stations
├── styles.css       # Mobile-first responsive styling
└── app.js          # Navigation and content logic
```

## Local Testing

Simply open `index.html` in your web browser:

```bash
open docs/index.html
```

Or use a local server:

```bash
cd docs
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deploying to GitHub Pages

### Option 1: Using GitHub UI

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main` and folder: `/docs`
5. Click "Save"
6. Your site will be live at: `https://yourusername.github.io/golf/`

### Option 2: Using Git Commands

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Golf training website"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/golf.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings as described in Option 1.

## Usage

### On the Course
1. Open the website on your phone
2. Tap "On-Course"
3. Select your club
4. Review the key thoughts (pick ONE)

### At the Driving Range
1. Open the website on your phone
2. Tap "Practice"
3. Complete the 10-minute warm-up
4. Choose your station (Driver, Irons, Chipping, Putting, etc.)
5. Work through the drills at your skill level

## Content Organization

### On-Course Content
- Driver (G.R.I.P.S. mnemonic)
- Fairway Woods (S.W.E.E.P. mnemonic)
- Hybrids (B.L.E.N.D. mnemonic)
- Irons (C.E.P.S. mnemonic)
- Wedges/Chipping (S.A.C.T. mnemonic)
- Putter (F.A.V.E.S. mnemonic)

### Practice Stations
- Warm-Up (10 minutes, 3 phases)
- Driver - Distance & Accuracy
- Iron Play - Pure Striking
- Chipping - Short Game
- Putting Fundamentals
- Wedges - Full Swing
- Bunker Play

## Customization

### Adding New Content

Edit `docs/app.js`:

1. **Add new club content**: Edit the `clubContent` object
2. **Add new drills**: Edit the `stationContent` object
3. **Update video references**: Edit the `videoMap` object

### Adding Timestamps

To add video timestamps to drills, update the drill content:

```javascript
<p><em>Reference: Video 3 at 2:35</em></p>
```

The system will automatically generate timestamped YouTube links.

## Browser Compatibility

- ✅ iOS Safari
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## Performance

- Fast loading (< 2 seconds on 3G)
- No dependencies or frameworks
- All content embedded for offline use
- Total size: ~40KB (excluding images)

## Credits

- **Instructor**: Andrew Cullen PGA
- **Channel**: [Andrew Cullen PGA on YouTube](https://www.youtube.com/@AndrewCullenPGA)
- **Based on**: 52 comprehensive video lessons

## License

This is a personal training tool. All golf instruction content is based on publicly available YouTube videos by Andrew Cullen PGA.
