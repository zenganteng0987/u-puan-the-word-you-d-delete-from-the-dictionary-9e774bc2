import { mkdirSync, writeFileSync } from "node:fs";

// The word to erase from the dictionary forever: delete "tomorrow" and
// there is no tomorrow left — everything is due today.
const entry = "tomorrow";
const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(entry);
