# Rooftop HVAC Website

A professional, modern website for Rooftop HVAC with integrated blog portfolio system.

## Features

✅ **Professional Homepage** with hero section and services overview
✅ **Blog/Portfolio System** - Display all HVAC projects with clean image galleries
✅ **Admin Panel** - Add, edit, and manage blog posts with image uploads
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Clean Image Display** - No Instagram UI or metadata visible
✅ **Contact Integration** - Full contact information and inquiry forms

## File Structure

```
RooftopHVAC/
├── index.html          # Main homepage
├── blog.html           # Blog gallery page
├── admin.html          # Admin panel for managing posts
├── blog-data.js        # All blog posts data
├── assets/             # Images folder (create this)
│   ├── gym-ductwork-*.jpg
│   ├── school-minisplit-*.jpg
│   ├── rooftop-equipment-*.jpg
│   └── ... (all other project images)
└── README.md           # This file
```

## Setup Instructions

### 1. Create Assets Folder
```bash
mkdir assets
```

### 2. Add Your Images
- Extract all images from the Instagram Dropbox download
- Crop out any Instagram UI (remove status bar, username, post info)
- Keep only the actual project/HVAC images
- Save them to the `assets/` folder with naming convention:
  - `gym-ductwork-1.jpg`, `gym-ductwork-2.jpg`, etc.
  - `school-minisplit-1.jpg`, `school-minisplit-2.jpg`, etc.

### 3. Open Website Locally
Simply open `index.html` in your web browser to view the site.

### 4. Manage Blog Posts
- Go to `admin.html` to add new blog posts
- Upload images for each post
- Fill in title, date, location, category, and description
- Posts are saved locally in your browser (localStorage)

## Blog Post Structure

Each blog post contains:
- **Title** - Project name
- **Date** - When the project was completed
- **Location** - Service area (city, state)
- **Category** - Service type (Installation, Repair, Upgrade, etc.)
- **Description** - Full project details
- **Images** - Multiple photos (no Instagram UI)

## Current Blog Posts

### 1. Basketball Gym Ductwork Installation
- Location: Dover, New Jersey
- 6 images | June 17, 2025

### 2. Modular School Building Mini-Split Installation
- Location: North Jersey  
- 5 images | May 19, 2025

### 3. Rooftop Equipment Installation
- Location: Millville, New Jersey
- 5 images | May 11, 2025

### 4. Heat Exchanger Replacement - Winter Emergency
- Location: Burlington, New Jersey
- 5 images | February 24, 2025

### 5. York Control Board (UCB) Replacement
- Location: Moorestown, New Jersey
- 3 images | December 5, 2024

### 6. Equipment Upgrade - Daiken & Carrier Swap
- Location: Mount Laurel, New Jersey
- 5 images | October 6, 2024

### 7. York RTU Inducer Replacement
- Location: Mount Laurel, New Jersey
- 4 images | September 29, 2024

### 8. Low Voltage Short Repair
- Location: West Grove, Pennsylvania
- 1 image | September 19, 2024

### 9. Complete Medical Office HVAC Installation
- Location: Vineland, New Jersey
- 7 images | September 10, 2024

### 10. Condenser Fan Motor Replacement
- Location: Philadelphia, Pennsylvania
- 4 images | September 2, 2024

### 11. Dual Shaft Blower Motor Replacement
- Location: New Jersey
- 3 images | August 27, 2024

## How to Use

### Viewing the Website
1. Open `index.html` in browser
2. Browse services
3. Click "View Our Work" to see portfolio
4. Click any project to see full details and all images

### Managing Blog Posts (Admin)
1. Open `admin.html` in browser
2. Fill in post details
3. Upload images
4. Click "Add Post"
5. Post appears immediately on blog

### Deploy to Production

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### Option 3: Traditional Hosting
- Upload files via FTP to your web host
- Ensure all files are in same directory
- Visit your domain

## Customization

### Change Logo
- Edit the logo in `index.html` (search for "logo-sphere")
- The current logo is a CSS-generated blue sphere with lines

### Change Colors
Edit `:root` variables in `index.html`:
```css
:root {
    --primary: #2c5aa0;      /* Blue */
    --accent: #f4b860;        /* Gold */
    --dark: #1a1a1a;
    --light: #f8f9fa;
}
```

### Update Contact Info
- Phone: (609) 714-8280
- Email: wpalombi@rooftophvac.com
- Address: PO Box 153, Medford, NJ 08055
- Hours: Monday-Friday, 9am-6pm

## Notes

- Images are stored locally in browser (localStorage) - they persist across sessions
- For production, upload images to a CDN or server and update paths
- Blog posts can be filtered by category
- Mobile-responsive design adapts to all screen sizes
- No external dependencies needed - pure HTML, CSS, JavaScript

## Support

For questions about setup or customization, contact:
- Phone: (609) 714-8280
- Email: wpalombi@rooftophvac.com

---

**Built for Rooftop HVAC | Professional HVAC Services in New Jersey**
