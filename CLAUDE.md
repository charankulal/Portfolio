# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Charan K, a full-stack developer. The portfolio is built as a static website using vanilla HTML, CSS, and JavaScript with no build system or framework dependencies.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, vanilla JavaScript
- **Libraries**:
  - jQuery (for DOM manipulation and smooth scrolling)
  - Typed.js (for animated typing effect)
  - Bootstrap 5.3.2 (for styling and responsive components)
  - Font Awesome (for icons)
- **Development Server**: Live Server (VSCode extension, port 5501)

## Project Structure

The repository contains two main HTML pages:
- `index.html` - Main landing page with About, Skills, Portfolio preview (top 3 projects), and Contact sections
- `project_page.html` - Comprehensive project showcase featuring top 15 curated projects across:
  - AI/ML Projects (Vision Transformers, Deep Learning, Machine Learning)
  - Mobile Development (React Native, Flutter, Android)
  - Web Applications (React, Django, MERN stack)
  - With prominent GitHub CTA button to explore all 83+ repositories

All pages share the same stylesheet (`style.css`) and JavaScript file (`app.js`).

## Key Architecture Patterns

### Navigation Structure
- Navigation menu is consistent across all pages with links to sections and pages
- Internal links use hash anchors (#about, #my-works, #contact-me, #projects)
- Cross-page navigation between main portfolio and comprehensive projects page
- Smooth scrolling implemented via jQuery for all anchor links
- Back-to-top button appears after scrolling 550px
- Projects page features top 15 curated projects with GitHub CTA for remaining projects

### Styling Architecture
The CSS follows a component-based approach:
- **Global styles**: Typography (Poppins font), reset styles
- **Layout components**: `.header`, `.navbar`, `.container`
- **Section-specific styles**: `.about-me`, `.portfolio`, `.contact`, `.skills-bar`
- **Responsive design**: Media queries for mobile (<500px), tablet (501-768px), and desktop (769-1200px)
- **Color scheme**:
  - Primary: `#25b79f` (teal)
  - Dark: `#07374a` (navy)
  - Light: `#f0f0e6` (off-white)

### JavaScript Features
- **Navbar behavior**: Adds "solid" class when scrolled >550px
- **Smooth scrolling**: All anchor links animate to their targets (200ms duration)
- **Typed animation**: Auto-rotating text displaying roles ("Engineer", "Full Stack developer", "Android Developer", etc.)

## Development Workflow

### Running the Site Locally
1. Use VSCode Live Server extension (configured to port 5501)
2. Right-click any HTML file and select "Open with Live Server"
3. The site will open at `http://localhost:5501/`

### Making Changes
- **Content updates**: Edit the HTML files directly
- **Styling changes**: Modify `style.css`
- **Interactive features**: Update `app.js`
- No build step required - changes are immediately visible with Live Server auto-reload

## Common Modifications

### Adding a New Project to project_page.html
Projects are displayed in a grid layout (`.rows` with 3 columns on desktop). Each project card includes:
- Badge indicating tech stack category (position-absolute top-0)
- GitHub stats image or screenshot
- Title, description, and tech stack details
- "View source" button linking to GitHub repository

### Updating Skills Section
Skills are displayed with animated progress bars in `index.html:82-143`. To modify:
1. Update the skill name in `.bar .info span`
2. Adjust progress width in CSS (e.g., `.progress-line .java { width: 80%; }`)
3. Update percentage display in `::after` pseudo-element

### Modifying Color Scheme
The three primary colors are used throughout:
- `#25b79f` - Headers, highlights, call-to-action elements
- `#07374a` - Text, navbar when solid, dark sections
- `#f0f0e6` - Light text on dark backgrounds

Search and replace these hex values to rebrand the entire site.

## Git Workflow

- Main branch: `master`
- Recent commits focus on content updates (bio, project lists) and styling refinements
- No CI/CD pipeline - changes to master are immediately deployable

## External Resources

All images are hosted on PostImg CDN (`i.postimg.cc`)
- Profile picture: `https://i.postimg.cc/XJ3xJJV9/DP-removebg-preview.png`
- Project screenshots are embedded directly in HTML

## Responsive Design Notes

The site is fully responsive with breakpoints at:
- **Mobile** (<500px): Single column layout, reduced font sizes, stacked project cards
- **Tablet** (501-768px): Similar to mobile with slightly larger fonts
- **Desktop** (769-1200px): Skills centered, work arrows hidden
- **Landscape orientation** (height <500px): Adjusted header height

The `.work-arrow` elements are hidden on smaller screens and replaced with `.work-arrow-2` for better mobile UX.
