# ⚡ ELECTRIC SURF CAMINO WEBSITE

## Overview

Interactive website showcasing the Electric Surf Camino pilgrimage routes, gear setup, philosophy, and Europe-specific optimizations for hitting castles, raves, and red light districts.

## Features

### 🌊 Route Visualization
- **Seattle → Cabo** - The shakedown pilgrimage (1,200+ miles)
- **Norway → Ibiza** - The proving ground pilgrimage (2,000+ miles)
- Interactive route tabs with phase breakdowns
- Canvas-based route visualizations showing journey checkpoints

### 🏔️ Europe Optimization
Comprehensive guide for maximizing the Norway → Ibiza route with:

#### Castles & Historic Sites
- Neuschwanstein (Bavaria)
- Chambord (Loire Valley)
- Bran Castle (Transylvania)
- Hohensalzburg (Austria)
- Alhambra (Granada)

#### Raves & Electronic Music Venues
- Berlin Techno Scene (Berghain, Tresor)
- Amsterdam Electronic Music
- Ibiza DJ Culture
- Prague Underground
- Barcelona Summer Festivals

#### Red Light Districts & Bohemian Culture
- Amsterdam Red Light District + Canals
- Berlin Kreuzberg (Art/Counter-culture)
- Hamburg Reeperbahn
- Prague Old Town
- Barcelona Gothic Quarter

### ⚙️ Gear Configuration
Complete kit documentation including:
- Stark Varg EX white dirtbike
- LIND Canvas electric surfboard
- LIND battery/jet backpack (70-85 lbs loaded)
- Fjallraven Greenland waxed expedition kit
- Troy Lee Designs white helmet
- Vivobarefoot Jungle ESC boots
- Minimal content capture stack (Oakley Meta Vanguard, HoverAir AQUA)

### 📚 Philosophy & Golden Rules
- 25 commandments for the pilgrimage
- Mission identity & optimization priorities
- Core formula for trip design
- Loadout doctrine & ruthless kit requirements

## Structure

```
electric-surf-camino-site/
├── index.html        # Main page with all content
├── styles.css        # Responsive styling
├── script.js         # Interactive features & route visualization
└── README.md         # This file
```

## Design Principles

- **Responsive Design**: Works on desktop, tablet, mobile
- **Dark/Light Theme**: Professional navigation with content-rich cards
- **Interactive Elements**: Route switching, smooth scrolling, hover effects
- **Information Architecture**: Logical flow from overview → routes → optimization → gear → philosophy

## Key Sections

1. **Hero** - Mission statement and core identity
2. **Routes** - Tabbed interface for both pilgrimages
3. **Europe Optimization** - Detailed guide for cultural attractions
4. **Gear** - Complete loadout specification
5. **Philosophy** - 25 golden rules and mission framework

## Route Phases

### Seattle → Cabo (5 Phases)
1. Seattle → Oregon (200 mi)
2. Oregon Coast/Inland (250 mi)
3. Northern California (300 mi)
4. Central/Southern California (250 mi)
5. Baja to Cabo (350 mi)

### Norway → Ibiza (5 Phases)
1. Norway Fjords (300 mi)
2. Scandinavia to Europe (350 mi)
3. Central Europe Transit (450 mi)
4. Alps/Lakes (350 mi)
5. Mediterranean → Ibiza (550 mi)

## Europe Optimization: Phase 3 Highlight

The **Raves/Castles Corridor** is the centerpiece of European optimization:

- **Amsterdam** (Days 1-2): Red Light District + Canals + Electronic clubs
- **Berlin** (Days 3-4): Techno capital + Underground scene + Lake Müggel
- **Prague** (Day 5): Bohemian culture + Historic center + Vltava river
- **Salzburg/Hallstatt** (Days 6-7): Austrian lakes + Mountain passes
- **Bavaria/Neuschwanstein** (Days 8-9): Castle route + Alpine lakes

## Daily SOP Integration

Website supports the documented daily structure:
- Morning: Inspection & slow start (20-35 miles)
- Midday: Charging stops as recovery (3-4 hours)
- Water block: LIND sessions (1-2 hours)
- Evening: Secure arrival, charging setup, rest

## Content System

The website supports multi-format content:
- Short-form clips (TikTok, Reels)
- Route/charging documentation
- Gear teardowns and modifications
- Daily recaps
- Festival/rave livestreams

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Grid/Flexbox responsive layout
- **Canvas API**: Route visualization
- **Vanilla JavaScript**: No external dependencies (except Chart.js optional)
- **Mobile First**: Responsive design

## Customization

### Adding New Optimization Points
Edit the `.optimization-card` sections in `index.html` to add:
- Additional castle routes
- New rave venues
- Alternative cultural attractions
- Regional charging networks

### Updating Route Data
Modify the phase data in route containers:
- Distance: `phase-distance`
- Duration: Add to phase-timeline
- Objectives: Update `info-card` content

### Color Scheme
Adjust `:root` CSS variables for branding:
- `--accent-blue`: Primary color (#4a90e2)
- `--accent-orange`: Secondary color (#f5a623)
- `--accent-red`: Highlight color (#e74c3c)

## Future Enhancements

- Interactive map integration (Mapbox, Leaflet)
- Real charging node database
- Live telemetry data from routes
- Festival calendar integration
- Community contributed spot database
- AR experience overlays

## The Vision

This website documents a unique adventure format:
- Electric propulsion (silent, powerful)
- Water access (glassy canals, alpine lakes, coastal breaks)
- Cultural immersion (hostels, raves, historic sites)
- Slow travel philosophy (40-70 mi/day baseline)
- Memory density optimization (not distance)

**Core motto:** Ride. Charge. Ruck. Shred. Recover. Repeat.

---

*Electric Surf Camino is not a normal moto tour, not a normal surf trip, and not a normal EV trip. It is slow water pilgrimage compressed into electric dirtbike form.*
