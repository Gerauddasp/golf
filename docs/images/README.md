# Golf Grip Images

## Current Status
The website currently uses placeholder visualizations for grip demonstrations. To add the actual Instagram images:

## Instagram Links Provided
1. **V's Pointing Image**: https://www.instagram.com/p/DDGTaM2tA7c/
2. **Knuckles Counting Image**: https://www.instagram.com/p/DD_iHBszxsT/

## How to Add Real Images

### Step 1: Download Images
1. Visit the Instagram links above
2. Download/save the images
3. Name them:
   - `vs-pointing.jpg` for the V's visualization
   - `knuckles-grip.jpg` for the knuckles counting image

### Step 2: Optimize Images
- Resize to max width: 800px
- Compress to under 200KB each
- Maintain aspect ratio
- Save as JPG for best compression

### Step 3: Update app.js
Replace the placeholder divs in `/docs/app.js`:

For Knuckles (around line 73):
```html
<img src="images/knuckles-grip.jpg" alt="Knuckles counting visualization" loading="lazy">
```

For V's Pointing (around line 103):
```html
<img src="images/vs-pointing.jpg" alt="V's pointing visualization" loading="lazy">
```

## Current Placeholder
The site currently shows colored gradient boxes with emoji icons as placeholders. These work well for demonstration but actual grip photos would be more instructional.

## Features Implemented
- ✅ Clickable camera icon (📷) to show/hide images
- ✅ Smooth animation when revealing images
- ✅ Mobile-optimized display
- ✅ Toggle button changes to "✕ Hide" when image is visible
- ✅ Images are hidden by default to save screen space