import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('public/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

manifest.version = pkg.version;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`✔ manifest.json version updated to ${pkg.version}`);
