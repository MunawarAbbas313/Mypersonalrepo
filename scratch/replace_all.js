import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.md', '.txt', '.mjs'];
const excludeDirs = ['node_modules', '.git', 'dist', '.output', '.gemini'];

const replacements = [
  // Emails
  { from: /airconnectionisb1@gmail\.com/gi, to: 'alarbabtravels@gmail.com' },
  
  // Phone numbers
  { from: /03335457255/g, to: '0315323811 / 03099923232' },
  { from: /923335457255/g, to: '92315323811' },
  
  // Address variations
  { 
    from: /Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area, Islamabad 44000/gi, 
    to: 'office no # 306 B , 3rd Floor , Ginnaz Center, Jinnah Avenue , Blue Area Islamabad' 
  },
  { 
    from: /Office number 1, Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area/gi, 
    to: 'office no # 306 B , 3rd Floor , Ginnaz Center, Jinnah Avenue , Blue Area' 
  },
  { 
    from: /Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area, Islamabad 44000, Pakistan/gi, 
    to: 'office no # 306 B , 3rd Floor , Ginnaz Center, Jinnah Avenue , Blue Area Islamabad' 
  },
  { 
    from: /Rajput Plaza plot number 53, near PIA office, AKM Fazal-ul-Haq Rd, Block E, Blue Area/gi, 
    to: 'office no # 306 B , 3rd Floor , Ginnaz Center, Jinnah Avenue , Blue Area' 
  },
  { 
    from: /Rajput plaza, Fazal-e-haq road, Near PIA office, Blue area/gi, 
    to: 'Ginnaz Center, Jinnah Avenue, Blue Area' 
  },

  // Company Name Variations
  { from: /Air connection Travel and Tours/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Air Connection Travel and Tours/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Air Connection Travel & Tours/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Airconnection Travel and Tours/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Airconnection Travel & Tours/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /AIR CONNECTION TRAVEL AND TOURS/gi, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /AIR CONNECTION/g, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Air Connection/g, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Air connection/g, to: 'AL ARBAB TRAVEL AND TOURS' },
  { from: /Airconnection/g, to: 'AL ARBAB TRAVEL AND TOURS' },

  // Social handle replacements
  { from: /airconnection\.travels/g, to: 'alarbabtravels' },
  { from: /airconnection/g, to: 'alarbabtravels' }
];

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!excludeDirs.includes(entry.name)) {
        processDirectory(fullPath);
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext) && entry.name !== 'replace_all.js') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = content;

        for (const r of replacements) {
          modified = modified.replace(r.from, r.to);
        }

        if (modified !== content) {
          fs.writeFileSync(fullPath, modified, 'utf8');
          console.log(`Updated: ${path.relative(rootDir, fullPath)}`);
        }
      }
    }
  }
}

console.log('Starting search and replace...');
processDirectory(path.join(rootDir, 'src'));
processDirectory(path.join(rootDir, 'public'));
if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  let content = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  let modified = content;
  for (const r of replacements) {
    modified = modified.replace(r.from, r.to);
  }
  if (modified !== content) {
    fs.writeFileSync(path.join(rootDir, 'index.html'), modified, 'utf8');
    console.log('Updated: index.html');
  }
}

console.log('Search and replace completed.');
