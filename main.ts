// Entry for "Weirdest Job Title: Blind Judge Showdown"
// Writes the weirdest job title to /output/entry.txt
// A real-sounding coordinator job with one gloriously odd twist:
// reuniting left socks with their lost partners is specific enough
// to picture the person doing it, and funny on the first read.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Left Sock Reunion Coordinator";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
