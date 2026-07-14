import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch();
const errors = [];

async function inspect(name, viewport) {
  const page = await browser.newPage({ viewportSize: viewport, reducedMotion: 'reduce' });
  page.on('pageerror', (error) => errors.push(`${name}: ${error.message}`));
  await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `artifacts/site-${name}.png`, fullPage: true });

  const state = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    brokenImages: [...document.images]
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.src),
    mainExists: Boolean(document.querySelector('main#content')),
    navLabel: document.querySelector('nav')?.getAttribute('aria-label'),
  }));
  if (state.scrollWidth > state.clientWidth + 1) errors.push(`${name}: horizontal overflow`);
  if (state.brokenImages.length) errors.push(`${name}: broken images ${state.brokenImages.join(', ')}`);
  if (!state.mainExists || !state.navLabel) errors.push(`${name}: missing main landmark or nav label`);

  await page.keyboard.press('Tab');
  const firstFocus = await page.evaluate(() => document.activeElement?.className || '');
  if (!String(firstFocus).includes('skip-link')) errors.push(`${name}: skip link is not first focus target`);
  await page.close();
}

await mkdir('artifacts', { recursive: true });
await inspect('desktop', { width: 1440, height: 1000 });
await inspect('mobile', { width: 390, height: 844 });
await browser.close();

if (errors.length) {
  throw new Error(errors.join('\n'));
}
