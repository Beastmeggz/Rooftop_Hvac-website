# Image Setup Guide for Rooftop HVAC Website

This guide explains how to extract, prepare, and add the project images to your website.

## Step 1: Extract Images from Instagram Screenshots

You have 44 Instagram screenshot images in `C:\Users\Beast\OneDrive\Desktop\RooftopHVAC_Extract\`

These correspond to 11 unique blog posts (some posts have multiple image slides).

## Step 2: Crop Out Instagram UI

For each image, you need to remove the Instagram UI elements:
- ❌ Status bar at top (time, signal, battery)
- ❌ Username and location info
- ❌ Like counts and comment section
- ❌ Post caption text area
- ✅ Keep only the actual photo

**Tools to crop images:**
- **Online**: www.pixlr.com (free, no download needed)
- **Windows**: Paint (built-in)
- **Online**: www.canva.com (free image editor)

**Image Naming Convention:**

```
gym-ductwork-1.jpg
gym-ductwork-2.jpg
gym-ductwork-3.jpg
gym-ductwork-4.jpg
gym-ductwork-5.jpg
gym-ductwork-6.jpg

school-minisplit-1.jpg
school-minisplit-2.jpg
school-minisplit-3.jpg
school-minisplit-4.jpg
school-minisplit-5.jpg

rooftop-equipment-1.jpg
rooftop-equipment-2.jpg
rooftop-equipment-3.jpg
rooftop-equipment-4.jpg
rooftop-equipment-5.jpg

heat-exchanger-1.jpg
heat-exchanger-2.jpg
heat-exchanger-3.jpg
heat-exchanger-4.jpg
heat-exchanger-5.jpg

york-control-1.jpg
york-control-2.jpg
york-control-3.jpg

equipment-swap-1.jpg
equipment-swap-2.jpg
equipment-swap-3.jpg
equipment-swap-4.jpg
equipment-swap-5.jpg

york-rtu-1.jpg
york-rtu-2.jpg
york-rtu-3.jpg
york-rtu-4.jpg

lowvoltage-repair-1.jpg

medical-office-1.jpg
medical-office-2.jpg
medical-office-3.jpg
medical-office-4.jpg
medical-office-5.jpg
medical-office-6.jpg
medical-office-7.jpg

condenser-motor-1.jpg
condenser-motor-2.jpg
condenser-motor-3.jpg
condenser-motor-4.jpg

blower-motor-1.jpg
blower-motor-2.jpg
blower-motor-3.jpg
```

## Step 3: Create Assets Folder

1. Navigate to `C:\Users\Beast\OneDrive\Desktop\RooftopHVAC\`
2. Create a new folder named `assets`
3. Place all cropped images inside

## Step 4: Image Quality Settings

**Recommended:**
- **Format**: JPG (smaller file size)
- **Quality**: 85% compression
- **Size**: Maximum 1920x1080 pixels (resize if needed)
- **Aspect Ratio**: Keep original proportions

## Step 5: Alternative: Use Admin Panel to Upload

Instead of manually cropping and naming:

1. Open `admin.html` in your browser
2. Click "Add New Blog Post"
3. Upload images directly through the "Upload Project Images" section
4. The system handles organization automatically

## Blog Post to Image Mapping

### Post 1: Basketball Gym Ductwork Installation
**Images:** IMG_7431, IMG_7432, IMG_7433, IMG_7434, IMG_7435, IMG_7436
**How to extract:** Crop out Instagram UI from each screenshot
**Files saved as:** `gym-ductwork-1.jpg` through `gym-ductwork-6.jpg`

### Post 2: Modular School Building Mini-Split Installation
**Images:** IMG_7437, IMG_7438, IMG_7439, IMG_7440, (+ 1 more)
**Files saved as:** `school-minisplit-1.jpg` through `school-minisplit-5.jpg`

### Post 3: Rooftop Equipment Installation
**Images:** Multiple equipment installation shots
**Files saved as:** `rooftop-equipment-1.jpg` through `rooftop-equipment-5.jpg`

### Post 4: Heat Exchanger Replacement
**Images:** Before/after heat exchanger photos
**Files saved as:** `heat-exchanger-1.jpg` through `heat-exchanger-5.jpg`

### Post 5: York Control Board Replacement
**Images:** Control board and unit photos
**Files saved as:** `york-control-1.jpg` through `york-control-3.jpg`

### Post 6: Equipment Upgrade
**Images:** Old vs new equipment
**Files saved as:** `equipment-swap-1.jpg` through `equipment-swap-5.jpg`

### Post 7: York RTU Inducer Replacement
**Images:** Before/after inducer installation
**Files saved as:** `york-rtu-1.jpg` through `york-rtu-4.jpg`

### Post 8: Low Voltage Short Repair
**Images:** Single service call photo
**Files saved as:** `lowvoltage-repair-1.jpg`

### Post 9: Medical Office HVAC Installation
**Images:** Full installation process photos
**Files saved as:** `medical-office-1.jpg` through `medical-office-7.jpg`

### Post 10: Condenser Fan Motor Replacement
**Images:** Motor replacement process
**Files saved as:** `condenser-motor-1.jpg` through `condenser-motor-4.jpg`

### Post 11: Blower Motor Replacement
**Images:** Motor replacement shots
**Files saved as:** `blower-motor-1.jpg` through `blower-motor-3.jpg`

## Quick Crop Tutorial (Using Pixlr)

1. Go to www.pixlr.com
2. Click "Open Image"
3. Upload Instagram screenshot
4. Use Crop tool (left toolbar)
5. Drag to select only the photo area (exclude all UI)
6. Click "Apply"
7. Download as JPG
8. Save with naming convention above

## Testing

After adding images:
1. Open `index.html` in browser
2. You should see project thumbnails in the "Recent Projects" section
3. Click on project to see full details
4. Click "View All Projects" to see blog page with all images
5. Images should display cleanly without any Instagram UI

## Troubleshooting

**Images not showing?**
- Verify file names match exactly (case-sensitive on some systems)
- Check that files are in `assets/` folder
- Make sure file extensions are `.jpg` or `.png`

**Instagram UI still visible?**
- Crop more carefully to exclude all UI elements
- Use a crop tool to precisely select only the photo area

**Images look blurry?**
- Don't resize down too much - keep original size
- Use high-quality source images

## Support

If you need help extracting or preparing images:
- Phone: (609) 714-8280
- Email: wpalombi@rooftophvac.com

---

**Once images are set up, your website will display all 11 projects beautifully!**
