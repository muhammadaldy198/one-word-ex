import { writeFileSync, mkdirSync, chmodSync, readFileSync } from "node:fs";

const WORD = "FRELOADER";
// Duel: FRELOADER was the runner-up — the ex's verdict on someone who never paid their share.
if ([...WORD].length < 1 || [...WORD].length > 24 || WORD.trim().length === 0) {
  throw new Error("word outside gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
if (readFileSync("/output/entry.txt", "utf8") !== WORD) {
  throw new Error("read-back mismatch");
}
