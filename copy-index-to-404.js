import { existsSync, copyFileSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths to index.html and 404.html
const buildDir = resolve(__dirname, 'dist'); // Adjust if your build output directory is different
const indexPath = join(buildDir, 'index.html');
const notFoundPath = join(buildDir, '404.html');

// Ensure the build directory exists
if (existsSync(indexPath)) {
    // Copy index.html to 404.html
    copyFileSync(indexPath, notFoundPath);
    console.log('404.html has been created from index.html');
} else {
    console.error('index.html does not exist. Did you run the build?');
}
