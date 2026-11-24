// Two Days of Quiet Dread: one code review comment that approves a PR
// while carrying quiet existential dread. The reviewer knows this is
// dangerous (auth touched, only test deleted) and approves anyway
// because the pipeline is green.
// Angle: the dread is not shouted, it is the gap between what the
// reviewer saw (a doomed diff) and what they did (approved it anyway).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "LGTM. The 2,000-line diff touches auth, and the only test was deleted in the same commit, but the pipeline is green, so ship it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log("Wrote entry.txt");
