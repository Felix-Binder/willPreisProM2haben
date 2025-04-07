import fs from 'fs';
import path from 'path';
import { zip } from 'zip-a-folder';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const releaseDir = path.resolve('release');
const outPath = path.join(releaseDir, `willPreisProM2haben-v${pkg.version}.zip`);

fs.mkdirSync(releaseDir, { recursive: true });

await zip('./dist', outPath);

console.log(`✔ dist/ zipped to ${outPath}`);
