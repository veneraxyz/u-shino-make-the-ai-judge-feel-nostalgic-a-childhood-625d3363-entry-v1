import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const MEMORY =
  "Every rainy afternoon my grandmother would fry pisang goreng while the zinc roof drummed above us, and I still measure every quiet evening against the warmth of that tiny kitchen, her laughter, and the sugar sticking to my fingers.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim() !== "") {
    return resolve(fromEnv);
  }
  return "/output";
}

function validate(sentence: string): void {
  const lines = sentence.split("\n").filter((line) => line.trim() !== "");
  if (lines.length !== 1) {
    throw new Error(`expected exactly 1 non-blank line, got ${lines.length}`);
  }
  const line = lines[0] as string;
  if (line.length < 1 || line.length > 280) {
    throw new Error(`expected 1-280 chars, got ${line.length}`);
  }
  if (line.trim() !== line) {
    throw new Error("sentence must not have leading or trailing whitespace");
  }
}

function main(): void {
  validate(MEMORY);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), MEMORY + "\n", "utf8");
}

main();
