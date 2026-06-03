# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A comprehensive transit systems quiz web application built with vanilla JavaScript and Vite. Tests user knowledge of vehicle models, routes, stations, and operations across 20+ North American transit agencies including heavy rail, commuter rail, light rail, and bus systems. Features configurable difficulty levels, multiple question categories, and timed quiz format.

## Transit Agencies Covered

**New Jersey/New York:**
- NJ Transit (bus, rail, light rail)
- MTA NYC (subway, bus)
- Metro-North Railroad
- Long Island Railroad (LIRR)
- Westchester Bee-Line (bus)

**Canada:**
- TTC - Toronto Transit Commission (subway, streetcar, bus)
- MiWay - Mississauga Transit (bus)
- Edmonton Transit Service (bus, LRT)
- TransLink / Coast Mountain Bus Company (SkyTrain, bus)

**Pennsylvania:**
- SEPTA - Southeastern Pennsylvania Transportation Authority (subway, regional rail, trolley, bus)

**Washington DC/Maryland/Virginia:**
- WMATA - Washington Metro (Metrorail, Metrobus)
- MTA Maryland / MARC (commuter rail)
- GRTC - Greater Richmond Transit Company (bus)

**Florida:**
- Tri-Rail (commuter rail)

**National:**
- Amtrak (intercity rail)

**California:**
- BART - Bay Area Rapid Transit (heavy rail)
- LA Metro (rail, bus)
- MUNI - San Francisco Municipal Railway (light rail, bus, historic streetcars)

**Illinois:**
- CTA - Chicago Transit Authority ('L' trains, bus)
- PACE (suburban bus)
- Metra (commuter rail)

## Quiz Categories

1. **Vehicle Models (Text)** - Identify bus/train models from text descriptions
   - Questions about manufacturers, model names, and vehicle types
   - Example: "What bus model is most common in NYC's fleet?" → "Nova LFS"

2. **Vehicle Models (Images)** - Visual vehicle identification from placeholder images
   - Images organized by agency in `/public/images/vehicles/[agency]/`
   - Example: [Image of R160] "What NYC Subway car model is this?" → "R160"

3. **Routes & Destinations** - Route numbers, line colors, and terminus information
   - Example: "Where does the NYC A train terminate in Manhattan?" → "207th Street"
   - Example: "What color is the BART line to SFO?" → "Yellow"

4. **Rush Hour Routing** - Express routing and peak service variations
   - Focuses on systems with complex express patterns (NJ Transit, Metra, CTA, Metro-North)
   - Example: "Which CTA lines run express during rush hour?" → "Red Line, Purple Line"

5. **Stations & Stops** - Major stations, transfer points, and terminals
   - Example: "What is the busiest station in the NYC Subway?" → "Times Square"
   - Example: "What station is the main transfer point between BART and Caltrain?" → "Millbrae"

6. **Line Identification** - Transit line colors and designations
   - Only applicable to color-coded systems (BART, WMATA, LA Metro, TTC, CTA, MUNI)
   - Example: "What color is WMATA's line to Dulles Airport?" → "Silver"

## Development Commands

```bash
# Start development server (runs on 0.0.0.0:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate placeholder images (Node script)
node generate-placeholders.js
```

## Architecture

### Core Files

- `index.html` - Contains all three screens (start, game, results) with screen visibility controlled by JavaScript
- `main.js` - Main application logic: state management, screen transitions, quiz flow, timer, and answer validation
- `data.js` - Quiz data structured by category (6 transit categories) and difficulty (easy, medium, hard)
- `style.css` - Complete styling with CSS custom properties, responsive design, and animations
- `generate-placeholders.js` - Node script to generate SVG placeholder images for vehicles and stations organized by agency

### State Management

The application uses a single `gameState` object in `main.js` that tracks:
- Difficulty level and selected categories
- Current question index and generated questions array
- Score, timing (timePerQuestion, timeRemaining), and timer interval
- User answers history for results display

### Screen Flow

Three main screens controlled by adding/removing the `active` class:
1. **Start Screen** - Settings selection (difficulty, categories, question count, time limit)
2. **Game Screen** - Question display, answer input, timer, and feedback
3. **Results Screen** - Final score, accuracy percentage, and detailed answer review

### Quiz Data Structure

Questions in `data.js` follow this format:
```javascript
{
  question: "What bus model is most common in NYC's fleet?",
  answers: ["nova lfs", "nova bus lfs"],  // Multiple valid answers supported
  category: "vehicle-models-text",
  agency: "mta-nyc",  // For reference/potential filtering
  image: "/images/vehicles/mta-nyc/nova-lfs.png"  // Optional, for image-based questions
}
```

**Categories:**
- `vehicle-models-text` - Text-based vehicle identification
- `vehicle-models-images` - Image-based vehicle identification
- `routes` - Route numbers and destinations
- `rush-hour-routing` - Express routing patterns
- `stations-stops` - Station identification
- `line-identification` - Line colors and names

**Difficulty Guidelines:**
- **Easy**: Major routes (A train, Red Line), common vehicles (Nova LFS, R160), famous stations (Times Square, Union Station), main line colors
- **Medium**: Local routes, specific model variants, secondary stations, branch lines  
- **Hard**: Rush hour express routing, rare/vintage vehicles, obscure stops, historical designations

### Answer Validation

Uses fuzzy matching via `normalizeAnswer()` and `checkAnswer()` functions:
- Case-insensitive comparison
- Removes punctuation and normalizes whitespace
- Supports partial matches and multiple acceptable answers
- Works excellently for transit-specific answers:
  - Route numbers: "166" matches "Route 166"
  - Station names: "Times Square" matches "Times Square - 42nd Street"
  - Model abbreviations: "LFS" matches "Nova Bus LFS"

### Image System

Placeholder images stored in agency-organized directories:

```
public/images/
  vehicles/
    nj-transit/
      nova-lfs.png
      bombardier-multilevel.png
      alp46.png
    mta-nyc/
      r160.png
      r211.png
      nova-lfs.png
    [agency-slug]/
      [vehicle-model].png
  stations/
    nj-transit/
      newark-penn.png
      hoboken.png
    mta-nyc/
      times-square.png
      grand-central.png
    [agency-slug]/
      [station-name].png
```

The `generate-placeholders.js` script creates SVG placeholders with:
- Vehicle emojis: 🚌 (bus), 🚆 (train), 🚊 (light rail), 🚂 (locomotive)
- Station emoji: 🚉
- Agency brand colors as gradients
- Agency name and model/station name labels

These should be replaced with actual photos for production use.

## Build System

Vite 6.0 configured to bind to all network interfaces (`0.0.0.0`) with `allowedHosts: true` for external access during development.

## Content Strategy

Approximately 200-300 questions distributed across:
- 20+ transit agencies
- 6 question categories  
- 3 difficulty levels

Focus on iconic, distinctive, and interesting elements of each system to create engaging gameplay while educating users about North American transit.
