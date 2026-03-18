/**
 * Converts all HEIC/HEIF files in public/gallery to JPEG.
 * Run: node scripts/convert-heic-to-jpg.cjs
 * Then use the .jpg paths in src/data/gallery.ts for instant loading.
 */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

// Dynamic require so we don't load heic-convert at parse time (optional dep)
function getConverter() {
  try {
    return require("heic-convert");
  } catch {
    console.warn("heic-convert not installed. Run: npm install heic-convert --save-dev");
    process.exit(1);
  }
}

const GALLERY_DIR = path.join(__dirname, "..", "public", "gallery");

async function main() {
  const files = await readdir(GALLERY_DIR);
  const heicFiles = files.filter(
    (f) => f.endsWith(".heic") || f.endsWith(".HEIC")
  );
  if (heicFiles.length === 0) {
    console.log("No HEIC files found in public/gallery.");
    return;
  }

  const convert = getConverter();
  console.log(`Converting ${heicFiles.length} HEIC file(s) to JPEG...`);

  for (const file of heicFiles) {
    const base = file.replace(/\.heic$/i, "");
    const jpgPath = path.join(GALLERY_DIR, `${base}.jpg`);
    const heicPath = path.join(GALLERY_DIR, file);

    try {
      const inputBuffer = await readFile(heicPath);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: "JPEG",
        quality: 0.85,
      });
      await writeFile(jpgPath, outputBuffer);
      console.log(`  ${file} → ${base}.jpg`);
    } catch (err) {
      console.error(`  ${file}: ${err.message}`);
    }
  }

  console.log("Done. Update src/data/gallery.ts to use .jpg paths for these images.");
}

main();
