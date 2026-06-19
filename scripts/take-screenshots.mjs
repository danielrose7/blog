import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "portfolio");

const sites = [
  { name: "citrus", url: "https://www.citrus.surf/" },
  { name: "tote", url: "https://tote.tools/" },
  { name: "arborbridge", url: "https://www.arborbridge.com/" },
  { name: "tcs-classes", url: "https://www.thecodingspace.com/classes" },
];

async function run() {
  const browser = await puppeteer.launch({ headless: true });

  for (const site of sites) {
    console.log(`Screenshotting ${site.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
    await page.screenshot({
      path: path.join(outDir, `${site.name}.png`),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    await page.close();
    console.log(`  -> ${site.name}.png`);
  }

  await browser.close();
  console.log("Done!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
