# Replit.md

## Overview

This is a Flask-based web application that serves a simple single-page layout with a splash screen animation. The project consists of a minimal Python Flask backend that renders an HTML template featuring a split-layout design with a sticky header and alternating grey/white sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture
- **Framework**: Flask (Python web microframework)
- **Server Configuration**: Runs on host `0.0.0.0`, port `5000` with debug mode enabled
- **Routing**: Single route (`/`) serving the main index page
- **Template Engine**: Jinja2 (Flask's default) for HTML rendering

### Frontend Architecture
- **Rendering Approach**: Server-side rendering with static HTML templates
- **Styling**: Inline CSS within the HTML template (no external stylesheets)
- **Layout Design**: 
  - Sticky header navigation (green background)
  - Splash screen with fade-out animation
  - Alternating section backgrounds (grey/white)
- **No JavaScript frameworks**: Vanilla CSS animations for splash screen effects

### Project Structure
```
/
├── app.py              # Flask application entry point
├── main.py             # Standalone Python script (unused by web app)
└── templates/
    └── index.html      # Main HTML template with embedded CSS
```

## External Dependencies

### Python Packages
- **Flask**: Web framework for routing and template rendering

### No Database
- Currently no database integration
- No data persistence layer implemented

### No External APIs
- No third-party API integrations
- No authentication services

### No Frontend Build Tools
- No npm packages or build process
- Pure HTML/CSS without preprocessors