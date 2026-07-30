// Post-build step for GitHub Pages static hosting.
// TanStack Start's SPA mode emits `_shell.html`; GitHub Pages needs `index.html`
// (and `404.html` so deep links fall back to the SPA shell).
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const shell = join(outDir, "_shell.html");
const index = join(outDir, "index.html");

if (!existsSync(shell) && !existsSync(index)) {
  console.error(`[gh-pages] No shell HTML found in ${outDir}`);
  process.exit(1);
}

if (existsSync(shell)) copyFileSync(shell, index);
copyFileSync(index, join(outDir, "404.html"));
writeFileSync(join(outDir, ".nojekyll"), "");

console.log("[gh-pages] Wrote index.html, 404.html and .nojekyll to dist/client");
