import fs from 'fs';
import path from 'path';

// Transit agency data
const agencies = {
  'nj-transit': { name: 'NJ Transit', color: '#00a94f' },
  'mta-nyc': { name: 'MTA NYC', color: '#0039a6' },
  'bee-line': { name: 'Bee-Line', color: '#ffc20e' },
  'ttc': { name: 'TTC', color: '#da291c' },
  'miway': { name: 'MiWay', color: '#0077c8' },
  'edmonton': { name: 'Edmonton Transit', color: '#0c5ba0' },
  'translink': { name: 'TransLink', color: '#0761a5' },
  'septa': { name: 'SEPTA', color: '#f58220' },
  'wmata': { name: 'WMATA', color: '#e51937' },
  'mta-maryland': { name: 'MTA Maryland', color: '#0075bf' },
  'grtc': { name: 'GRTC', color: '#009fda' },
  'tri-rail': { name: 'Tri-Rail', color: '#0066cc' },
  'amtrak': { name: 'Amtrak', color: '#005480' },
  'metro-north': { name: 'Metro-North', color: '#0039a6' },
  'lirr': { name: 'LIRR', color: '#00a1de' },
  'bart': { name: 'BART', color: '#ffffff' },
  'la-metro': { name: 'LA Metro', color: '#a05da5' },
  'cta': { name: 'CTA', color: '#009fd4' },
  'pace': { name: 'PACE', color: '#003d7a' },
  'metra': { name: 'Metra', color: '#005eb8' },
  'muni': { name: 'MUNI', color: '#c5003e' }
};

// Vehicle models by agency
const vehiclesByAgency = {
  'nj-transit': ['nova-lfs', 'mci-d4500', 'bombardier-multilevel', 'alp46', 'alp45dp'],
  'mta-nyc': ['nova-lfs', 'new-flyer-xd60', 'r160', 'r211', 'r32', 'r188'],
  'ttc': ['flexity-outlook', 'toronto-rocket', 't1'],
  'bart': ['fleet-of-the-future', 'legacy-fleet'],
  'cta': ['5000-series', '2400-series'],
  'wmata': ['7000-series'],
  'la-metro': ['siemens-p3010'],
  'translink': ['mark-i', 'mark-iii'],
  'septa': ['kawasaki-lrv', 'silverliner-v'],
  'metro-north': ['m8'],
  'lirr': ['m9'],
  'muni': ['breda-lrv'],
  'pace': ['new-flyer-xd40'],
  'metra': ['highliner'],
  'edmonton': ['flexity-freedom'],
  'amtrak': ['acela']
};

// Stations by agency
const stationsByAgency = {
  'nj-transit': ['newark-penn', 'hoboken', 'secaucus'],
  'mta-nyc': ['times-square', 'grand-central', 'penn-station'],
  'metro-north': ['grand-central'],
  'bart': ['embarcadero', 'sfo'],
  'wmata': ['metro-center', 'dulles-airport'],
  'cta': ['state-lake', 'ohare'],
  'ttc': ['bloor-yonge', 'union-station'],
  'septa': ['city-hall', '30th-street'],
  'la-metro': ['7th-street', 'santa-monica'],
  'translink': ['waterfront'],
  'metra': ['union-station'],
  'amtrak': ['union-station'],
  'muni': ['embarcadero']
};

function getVehicleEmoji(model) {
  const lowerModel = model.toLowerCase();
  if (lowerModel.includes('bus') || lowerModel.includes('nova') || lowerModel.includes('flyer') || lowerModel.includes('mci')) {
    return '🚌';
  } else if (lowerModel.includes('streetcar') || lowerModel.includes('flexity') || lowerModel.includes('trolley') || lowerModel.includes('lrv')) {
    return '🚊';
  } else if (lowerModel.includes('locomotive') || lowerModel.includes('alp')) {
    return '🚂';
  } else {
    return '🚆'; // Default train
  }
}

function formatName(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateVehicleSVG(model, agencySlug) {
  const agency = agencies[agencySlug];
  const displayName = formatName(model);
  const emoji = getVehicleEmoji(model);
  const color = agency.color;

  return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${model}-${agencySlug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#grad-${model}-${agencySlug})"/>
  <text x="250" y="180" font-family="Arial, sans-serif" font-size="80" fill="white" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  <text x="250" y="280" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${displayName}</text>
  <text x="250" y="320" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="middle">${agency.name}</text>
  <text x="250" y="350" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.7)" text-anchor="middle" dominant-baseline="middle">Vehicle Model</text>
</svg>`;
}

function generateStationSVG(station, agencySlug) {
  const agency = agencies[agencySlug];
  const displayName = formatName(station);
  const emoji = '🚉';
  const color = agency.color;

  return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${station}-${agencySlug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#grad-${station}-${agencySlug})"/>
  <text x="250" y="180" font-family="Arial, sans-serif" font-size="80" fill="white" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  <text x="250" y="280" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${displayName}</text>
  <text x="250" y="320" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.9)" text-anchor="middle" dominant-baseline="middle">${agency.name}</text>
  <text x="250" y="350" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.7)" text-anchor="middle" dominant-baseline="middle">Station</text>
</svg>`;
}

// Create base directories
console.log('Creating directory structure...');
const baseVehicleDir = 'public/images/vehicles';
const baseStationDir = 'public/images/stations';

if (!fs.existsSync(baseVehicleDir)) {
  fs.mkdirSync(baseVehicleDir, { recursive: true });
}
if (!fs.existsSync(baseStationDir)) {
  fs.mkdirSync(baseStationDir, { recursive: true });
}

// Generate vehicle images by agency
console.log('\nGenerating vehicle placeholders...');
let vehicleCount = 0;
Object.entries(vehiclesByAgency).forEach(([agencySlug, vehicles]) => {
  const agencyDir = path.join(baseVehicleDir, agencySlug);
  if (!fs.existsSync(agencyDir)) {
    fs.mkdirSync(agencyDir, { recursive: true });
  }

  vehicles.forEach(vehicle => {
    const svg = generateVehicleSVG(vehicle, agencySlug);
    fs.writeFileSync(path.join(agencyDir, `${vehicle}.svg`), svg);
    vehicleCount++;
  });
  console.log(`  ✓ Created ${vehicles.length} vehicle placeholders for ${agencies[agencySlug].name}`);
});
console.log(`\n✓ Total vehicle placeholders: ${vehicleCount}`);

// Generate station images by agency
console.log('\nGenerating station placeholders...');
let stationCount = 0;
Object.entries(stationsByAgency).forEach(([agencySlug, stations]) => {
  const agencyDir = path.join(baseStationDir, agencySlug);
  if (!fs.existsSync(agencyDir)) {
    fs.mkdirSync(agencyDir, { recursive: true });
  }

  stations.forEach(station => {
    const svg = generateStationSVG(station, agencySlug);
    fs.writeFileSync(path.join(agencyDir, `${station}.svg`), svg);
    stationCount++;
  });
  console.log(`  ✓ Created ${stations.length} station placeholders for ${agencies[agencySlug].name}`);
});
console.log(`\n✓ Total station placeholders: ${stationCount}`);

console.log('\n✅ All placeholder images created!');
console.log(`\nDirectory structure:`);
console.log(`  public/images/vehicles/ (${vehicleCount} images across ${Object.keys(vehiclesByAgency).length} agencies)`);
console.log(`  public/images/stations/ (${stationCount} images across ${Object.keys(stationsByAgency).length} agencies)`);
console.log('\nNote: These are SVG placeholders. Replace them with actual PNG/JPG images for better visuals.');
