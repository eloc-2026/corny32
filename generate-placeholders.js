import fs from 'fs';
import path from 'path';

// Character names
const characters = {
  easy: ['mario', 'link', 'pikachu', 'kirby', 'donkey-kong', 'samus', 'fox', 'yoshi', 'sonic', 'bowser', 'peach', 'zelda', 'luigi', 'inkling'],
  medium: ['ness', 'captain-falcon', 'marth', 'pit', 'olimar', 'villager', 'wii-fit-trainer', 'little-mac', 'shulk', 'ryu', 'cloud', 'bayonetta', 'ridley', 'king-k-rool', 'isabelle'],
  hard: ['roy', 'lucas', 'ike', 'robin', 'corrin', 'simon', 'richter', 'king-dedede', 'meta-knight', 'palutena', 'joker', 'hero', 'banjo-kazooie', 'terry', 'byleth', 'min-min', 'steve', 'sephiroth']
};

// Stage names
const stages = {
  easy: ['battlefield', 'final-destination', 'peachs-castle', 'hyrule-castle', 'kongo-jungle', 'pokemon-stadium', 'green-hill-zone', 'delfino-plaza', 'yoshis-island', 'new-donk-city'],
  medium: ['onett', 'mute-city', 'corneria', 'brinstar', 'fountain-of-dreams', 'skyworld', 'warioware', 'norfair', 'castle-siege', 'skyloft', 'boxing-ring', 'gaur-plain'],
  hard: ['suzaku-castle', 'midgar', 'umbra-clock-tower', 'great-plateau-tower', 'new-pork-city', 'palutenas-temple', 'draculas-castle', 'mementos', 'spiral-mountain', 'kof-stadium', 'garreg-mach', 'spring-stadium', 'minecraft-world', 'northern-cave']
};

// Color schemes
const characterColors = ['#e63946', '#457b9d', '#06d6a0', '#ffd166', '#ef476f', '#f77f00', '#8338ec', '#3a86ff'];
const stageColors = ['#2a9d8f', '#e76f51', '#264653', '#e9c46a', '#f4a261', '#2b2d42', '#8d99ae', '#edf2f4'];

function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function formatName(name) {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateSVG(name, color, type) {
  const displayName = formatName(name);
  const emoji = type === 'character' ? '🎮' : '🏟️';

  return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#grad-${name})"/>
  <text x="250" y="200" font-family="Arial, sans-serif" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  <text x="250" y="280" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${displayName}</text>
  <text x="250" y="320" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">Super Smash Bros.</text>
</svg>`;
}

// Create directories
const dirs = ['public/images/characters', 'public/images/stages'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate character images
console.log('Generating character placeholders...');
let count = 0;
Object.values(characters).forEach(charList => {
  charList.forEach(char => {
    const color = getRandomColor(characterColors);
    const svg = generateSVG(char, color, 'character');
    fs.writeFileSync(`public/images/characters/${char}.png.svg`, svg);
    // Also create a .png file that's actually SVG (browsers will render it)
    fs.writeFileSync(`public/images/characters/${char}.png`, svg);
    count++;
  });
});
console.log(`✓ Created ${count} character placeholders`);

// Generate stage images
console.log('Generating stage placeholders...');
count = 0;
Object.values(stages).forEach(stageList => {
  stageList.forEach(stage => {
    const color = getRandomColor(stageColors);
    const svg = generateSVG(stage, color, 'stage');
    fs.writeFileSync(`public/images/stages/${stage}.png.svg`, svg);
    fs.writeFileSync(`public/images/stages/${stage}.png`, svg);
    count++;
  });
});
console.log(`✓ Created ${count} stage placeholders`);

console.log('\n✓ All placeholder images created!');
console.log('Note: These are SVG placeholders. Replace them with actual PNG/JPG images for better visuals.');
