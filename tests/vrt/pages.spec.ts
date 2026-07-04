import { test, expect } from '@playwright/test';

const routes: Array<[route: string, name: string]> = [
  ['/', 'home'],
  ['/cv/', 'cv'],
  ['/projects/', 'projects'],
  ['/hobbies/', 'hobbies'],
  ['/pr/', 'pr'],
];

for (const [route, name] of routes) {
  test(`visual: ${route}`, async ({ page }) => {
    // 'networkidle' hangs on routes with third-party embeds (Apple Music
    // iframes on /hobbies/ keep connections open); wait for load + fonts.
    await page.goto(route, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      // Embedded third-party media is non-deterministic; mask it.
      mask: [page.locator('iframe')],
    });
  });
}
