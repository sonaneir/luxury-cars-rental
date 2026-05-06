# Luxury Cars Rental

A static multi-page website for a premium luxury car rental service. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

## Live Pages

- **Home** (`index.html`) — hero section, services overview, client testimonial, CTA
- **Catalogue** (`catalogue.html`) — full luxury fleet with pricing and reservation
- **About** (`about.html`) — company story, fleet info, statistics

## Features

- Responsive design (desktop, tablet, mobile)
- Sticky navigation with backdrop blur
- Reservation modal with form validation
- Smooth fade-in animations on scroll
- Premium typography (Playfair Display + Inter)
- Refined color palette with gold accents

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript
- Google Fonts

## Project Structure

```
final_project/
├── index.html              # Landing page
├── catalogue.html          # Car catalogue
├── about.html              # About page
├── modal.js                # Reservation modal logic
├── styles/
│   ├── styles-landing.css  # Shared base + landing styles
│   ├── styles-catalogue.css
│   ├── styles-about.css
│   └── styles-modal.css
└── content/                # Images
```

## Getting Started

No build process required. Just open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Fleet

- Bentley Flying Spur — from $1,200 / day
- Mercedes AMG GT — from $950 / day
- Rolls-Royce Ghost — from $2,000 / day
- Lamborghini Urus — from $1,500 / day
- Porsche 911 — from $800 / day
- Ferrari Roma — from $1,800 / day

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses `backdrop-filter` and CSS Grid.

## License

Educational project.