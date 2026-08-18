import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const COMPRESSION_QUALITY = 80; // High quality webp
const MAX_WIDTH = 1920;

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      // Look for large png/jpg files
      if ((ext === '.png' || ext === '.jpg' || ext === '.jpeg') && stat.size > 500 * 1024) {
        console.log(`Compressing ${filePath} (${Math.round(stat.size / 1024)} KB)`);
        
        // Generate new webp filename
        const webpPath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
        
        try {
          const image = sharp(filePath);
          const metadata = await image.metadata();
          
          let pipeline = image;
          
          if (metadata.width > MAX_WIDTH) {
             pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
          }

          await pipeline
            .webp({ quality: COMPRESSION_QUALITY, effort: 6 })
            .toFile(webpPath);
            
          const newStat = fs.statSync(webpPath);
          console.log(` -> Created ${webpPath} (${Math.round(newStat.size / 1024)} KB)`);
          
          // Delete original
          fs.unlinkSync(filePath);
          console.log(` -> Deleted original ${filePath}`);
          
          // Replace references in the code
          replaceInCode(filePath.replace(PUBLIC_DIR, '').replace(/\\/g, '/'), webpPath.replace(PUBLIC_DIR, '').replace(/\\/g, '/'));

        } catch (e) {
          console.error(`Error processing ${filePath}:`, e);
        }
      }
    }
  }
}

// Function to replace extensions in codebase
function replaceInCode(oldPath, newPath) {
    console.log(`Replacing ${oldPath} with ${newPath} in codebase...`);
    const APP_DIR = path.join(process.cwd(), 'app');
    const SECTIONS_DIR = path.join(process.cwd(), 'sections');
    const COMPONENTS_DIR = path.join(process.cwd(), 'components');
    const CONSTANTS_DIR = path.join(process.cwd(), 'constants');
    
    // Convert to forward slashes for matching in JS/TS
    const searchStr = oldPath.replace(/\\/g, '/');
    const replaceStr = newPath.replace(/\\/g, '/');
    
    // We also might need to match URI encoded names if used? Mostly they are typed exactly.
    // E.g. "/facilities/Reception Area Image.png" -> "/facilities/Reception Area Image.webp"

    [APP_DIR, SECTIONS_DIR, COMPONENTS_DIR, CONSTANTS_DIR].forEach(dir => {
        if (!fs.existsSync(dir)) return;
        
        function walkSrc(srcDir) {
            const files = fs.readdirSync(srcDir);
            for (const file of files) {
                const filePath = path.join(srcDir, file);
                const stat = fs.statSync(filePath);
                if (stat.isDirectory()) {
                    walkSrc(filePath);
                } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
                    let content = fs.readFileSync(filePath, 'utf-8');
                    // We split by searchStr to ensure we only replace exact matches
                    if (content.includes(searchStr)) {
                        content = content.split(searchStr).join(replaceStr);
                        fs.writeFileSync(filePath, content, 'utf-8');
                        console.log(`  -> Updated ${filePath}`);
                    }
                    
                    // Also handle URL encoded versions
                    const encodedSearch = encodeURI(searchStr);
                    const encodedReplace = encodeURI(replaceStr);
                    if (encodedSearch !== searchStr && content.includes(encodedSearch)) {
                        content = content.split(encodedSearch).join(encodedReplace);
                        fs.writeFileSync(filePath, content, 'utf-8');
                        console.log(`  -> Updated (URI encoded) ${filePath}`);
                    }
                }
            }
        }
        walkSrc(dir);
    });
}

console.log("Starting image optimization...");
walkDir(PUBLIC_DIR).then(() => {
    console.log("Optimization complete!");
});
