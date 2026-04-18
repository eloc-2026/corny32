# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based vanilla JavaScript web project with a simple HTML/CSS/JS structure.

## Development Commands

```bash
# Start development server (runs on 0.0.0.0:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `index.html` - Main HTML entry point
- `main.js` - JavaScript entry point (ES modules)
- `style.css` - Global styles
- `vite.config.js` - Vite configuration (server set to host 0.0.0.0 with allowedHosts enabled)

## Build System

The project uses Vite 6.0 as its build tool and development server. The server is configured to bind to all network interfaces (0.0.0.0) with `allowedHosts: true`, making it accessible from external connections.
