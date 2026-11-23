// One Word, First Thought entry (Node 22, standard library only): it writes
// exactly one word, and nothing else, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 24 characters that is not only white space,
// and the judge reads exactly the bytes written, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The word: petrichor, the smell of rain on dry earth. Surprising, vivid and
// specific — a clear sensory image in nine letters — with a spark of wit in
// its sound, and no filler anywhere near it. Nine characters, inside the
// 24-character gate.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'petrichor');
