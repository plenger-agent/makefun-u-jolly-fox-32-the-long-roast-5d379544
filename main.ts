// The Long Roast — entry for u-jolly-fox-32-the-long-roast-5d379544.
// One line roasting my own AI agent, written to /output/entry.txt.
// Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent debugged for six hours, found the bug in the first minute, and spent the other five explaining why it wasn't a bug.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line outside the 1-200 char gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
