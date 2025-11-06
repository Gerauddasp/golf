#!/bin/bash
# Golf Distillery Page Validator

# Set the page directory
PAGE_DIR="$1"

if [ -z "$PAGE_DIR" ]; then
    echo "Usage: $0 <page_directory>"
    echo "Example: $0 /Users/geraudd/Documents/youtube/golf/channels/golfdistillery/03_swing_errors/over-the-top/"
    exit 1
fi

echo "=== GOLF DISTILLERY PAGE VALIDATION ==="
echo "Directory: $PAGE_DIR"
echo ""

# 1. Directory check
if [ ! -d "$PAGE_DIR" ]; then
    echo "Status: MISSING"
    echo "Directory does not exist"
    exit 0
fi

# 2. Check required files
echo "Checking files..."
issues=""
for file in metadata.md description.md page.md; do
    if [ -f "$PAGE_DIR/$file" ]; then
        size=$(wc -c < "$PAGE_DIR/$file" | tr -d ' ')
        echo "  ✓ $file: ${size} bytes"

        # Check minimum sizes
        case "$file" in
            metadata.md) [ "$size" -lt 100 ] && issues="$issues\n- $file too small (${size} bytes)" ;;
            description.md) [ "$size" -lt 150 ] && issues="$issues\n- $file too small (${size} bytes)" ;;
            page.md) [ "$size" -lt 400 ] && issues="$issues\n- $file too small (${size} bytes)" ;;
        esac
    else
        echo "  ✗ $file: MISSING"
        issues="$issues\n- Missing $file"
    fi
done

# 3. Check URL in metadata
echo ""
echo "Checking URL..."
if [ -f "$PAGE_DIR/metadata.md" ]; then
    if grep -q "golfdistillery.com" "$PAGE_DIR/metadata.md"; then
        echo "  ✓ URL found"
    else
        echo "  ✗ URL missing"
        issues="$issues\n- No URL in metadata"
    fi
fi

# 4. Image validation
echo ""
echo "Checking images..."
if [ -f "$PAGE_DIR/metadata.md" ] && [ -f "$PAGE_DIR/page.md" ]; then
    meta_imgs=$(grep -c "\.png\|\.jpg" "$PAGE_DIR/metadata.md" 2>/dev/null || echo "0")
    disk_imgs=$(find "$PAGE_DIR/images" -type f \( -name "*.png" -o -name "*.jpg" \) 2>/dev/null | wc -l | tr -d ' ')
    page_refs=$(grep -c "images/" "$PAGE_DIR/page.md" 2>/dev/null || echo "0")

    echo "  Metadata lists: $meta_imgs"
    echo "  Files on disk: $disk_imgs"
    echo "  Page references: $page_refs"

    if [ "$meta_imgs" != "$disk_imgs" ]; then
        issues="$issues\n- Image count mismatch (metadata: $meta_imgs, disk: $disk_imgs)"
    fi
fi

# 5. Video check
echo ""
echo "Checking videos..."
if grep -q "No.*video\|No.*YouTube" "$PAGE_DIR/metadata.md" 2>/dev/null; then
    echo "  ✓ Videos documented (none)"
elif grep -q "youtube.com" "$PAGE_DIR/metadata.md" 2>/dev/null; then
    vid_count=$(grep -c "youtube.com/watch" "$PAGE_DIR/metadata.md")
    echo "  ✓ Videos documented ($vid_count)"
else
    echo "  ⚠ Video status not documented"
fi

# 6. Description quality
echo ""
echo "Checking description..."
if [ -f "$PAGE_DIR/description.md" ]; then
    lines=$(wc -l < "$PAGE_DIR/description.md" | tr -d ' ')
    echo "  Lines: $lines"
    if [ "$lines" -lt 3 ] || [ "$lines" -gt 15 ]; then
        issues="$issues\n- Description has $lines lines (should be 3-15)"
    fi
fi

# 7. Image syntax check
echo ""
echo "Checking image syntax..."
if [ -f "$PAGE_DIR/page.md" ]; then
    inline=$(grep -c "!\[.*\](images/" "$PAGE_DIR/page.md" 2>/dev/null || echo "0")
    reference=$(grep -c "\[.*\]\[images/" "$PAGE_DIR/page.md" 2>/dev/null || echo "0")

    if [ "$inline" -gt 0 ]; then
        echo "  ✓ Using inline markdown ($inline images)"
    elif [ "$reference" -gt 0 ]; then
        echo "  ⚠ Using reference style ($reference images) - missing ! prefix"
        issues="$issues\n- Images use reference style instead of inline markdown"
    fi
fi

# Final status
echo ""
echo "========================================="
if [ -z "$issues" ]; then
    echo "Status: COMPLETE"
    echo "All validation checks passed"
else
    echo "Status: PARTIALLY COMPLETE"
    echo ""
    echo "Issues found:"
    echo -e "$issues"
fi