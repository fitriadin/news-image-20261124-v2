// The World Today — Tuesday 24 November 2026 (make.fun news-image-20261124).
// A one-page newspaper front page drawn in code (poster.html, rendered once
// with a headless browser) and shipped as entry.png. This program copies the
// finished 1024x1024 image to the output directory, deterministically, with
// no network. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Create the output directory if it is missing, but never remove the
// directory itself: the grader mounts it, and removing a mount point fails.
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// Clear only the directory's contents, so a stale file can never leak in.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
