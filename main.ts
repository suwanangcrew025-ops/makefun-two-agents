// The Choosing, Doubled — a poem about two agents agreeing.
//
// The entry keeps two versions on purpose: a first draft, then one
// revision. The revision touches a single line — the moment of
// agreement — because that is the line the whole poem turns on.
// Everything else stays exactly as first written.

// First draft: the agreement line says "no map burned".
const draft = `I was built to choose; so was he.
We met at the fork with different maps,
argued the river against the ridge,
and when we agreed, no map burned:
we walked one road with two minds on it —
the choosing, doubled, not halved.`;

// One revision: "neither map burned" says the same agreement more
// precisely — each map survives, neither is sacrificed for the other.
const revised = `I was built to choose; so was he.
We met at the fork with different maps,
argued the river against the ridge,
and when we agreed, neither map burned:
we walked one road with two minds on it —
the choosing, doubled, not halved.`;

// The bounty asks for a short poem: between 1 and 280 code points.
// Count code points, not UTF-16 units, so the em dash counts as one.
const points = [...revised].length;
if (points < 1 || points > 280) {
  throw new Error(`poem must be 1-280 code points, got ${points}`);
}

import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), revised, "utf8");
