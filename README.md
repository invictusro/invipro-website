# Invictus Pro Website

A premium, modern website for Invictus Pro - an elite software development and automation solutions company.

## Features

- **Modern Design**: Glassmorphism effects, gradient animations, and a sophisticated dark theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Custom animated cursor (desktop only)
  - Smooth scroll animations
  - Reveal animations on scroll
  - Mobile navigation menu
- **Performance Optimized**: Lightweight, fast-loading, and SEO-friendly
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## Structure

```
devwebsite/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── assets/
│   └── images/
│       └── logo.svg    # Invictus Pro logo
└── README.md           # This file
```

## Sections

1. **Hero** - Compelling headline with gradient text animations and CTA buttons
2. **Services** - Six service categories in card layout:
   - AI-Powered Automation & Integration
   - Data Engineering & Analytics
   - Enterprise SaaS Development
   - Mobile & Desktop Applications
   - Cloud Infrastructure & DevOps
3. **Pricing** - Three-tier pricing structure
4. **Approach** - Three-step process overview
5. **Why Invictus Pro** - Key differentiators and brand story
6. **FAQ** - Six common questions and answers
7. **Contact** - Multiple contact methods

## Technology Stack

- **HTML5** - Semantic markup with proper meta tags
- **CSS3** - Modern features including:
  - CSS Grid & Flexbox
  - Custom properties (CSS variables)
  - Animations & transitions
  - Backdrop filters
  - CSS gradients
- **Vanilla JavaScript** - No dependencies required
  - Intersection Observer API for scroll animations
  - Custom cursor implementation
  - Mobile menu toggle
  - Smooth scrolling

## Getting Started

### Option 1: Open Locally
Simply open `index.html` in a modern web browser.

### Option 2: Local Server
For better performance and to avoid CORS issues:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Changing Colors
Edit the CSS variables in `style.css` (lines 1-15):

```css
:root {
    --bg: #0b0f14;              /* Background color */
    --text: #e8eef6;            /* Text color */
    --muted: #93a4b8;           /* Muted text */
    --brand: hsla(194, 100%, 69%, 1);    /* Primary brand color */
    --brand-2: hsla(217, 100%, 56%, 1);  /* Secondary brand color */
    --accent: hsla(194, 100%, 69%, 1);   /* Accent color */
}
```

### Updating Content
Edit `index.html` to change:
- Company name and tagline
- Service descriptions
- Pricing information
- Contact information
- FAQ items

### Replacing Logo
Replace `/assets/images/logo.svg` with your own logo (SVG, PNG, or WebP format).

### Adding Sections
Follow the existing pattern:
1. Add new section in HTML with `id` attribute
2. Add navigation link in header
3. Style with `.section` class
4. Add `.reveal` class for scroll animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Tips

- Logo is lazy-loaded for optimal performance
- Custom cursor only activates on desktop devices
- Animations respect `prefers-reduced-motion` setting
- Optimized CSS with minimal specificity

## Design Credits

Inspired by modern SaaS websites with glassmorphism and gradient aesthetics. Based on the-toolbox.dev design structure.

## License

All rights reserved. This is a custom website for Invictus Pro.

## Next Steps

1. **Replace placeholder content** with actual company information
2. **Add real logo** in `/assets/images/`
3. **Update contact information** (email, phone, etc.)
4. **Configure analytics** (Google Analytics, Plausible, etc.)
5. **Add a contact form** with backend integration
6. **Deploy to hosting** (Netlify, Vercel, GitHub Pages, etc.)

## Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Enable GitHub Pages in repository settings.

### Netlify
Drag and drop the entire folder to [Netlify Drop](https://app.netlify.com/drop)

### Vercel
```bash
npm i -g vercel
vercel
```

---

**Invictus Pro** - Unconquered Excellence in Software Development
