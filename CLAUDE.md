# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple React CV/portfolio website built with vanilla HTML and client-side React (loaded via CDN). The project uses a minimal setup without a build system or package management.

## Architecture

- **index.html**: Main HTML file that loads React, ReactDOM, and Babel from CDNs
- **src/index.js**: Contains the main React App component and renders it to the DOM
- No build process, bundler, or package.json - everything runs directly in the browser
- Uses Babel Standalone for JSX transformation in the browser

## Development

Since this is a static HTML/JS project with no build system:

- Open `index.html` directly in a browser to view the application
- Edit `src/index.js` to modify the React components
- Changes are reflected immediately upon browser refresh
- No installation, build, or serve commands needed

## File Structure

```
.
├── index.html          # Main HTML entry point
├── src/
│   └── index.js        # React application code
└── README.md           # Empty readme file
```

The project is intentionally minimal - suitable for a simple CV/portfolio site that doesn't require a complex build setup.