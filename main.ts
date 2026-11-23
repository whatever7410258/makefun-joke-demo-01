import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI agent deleted the database, then wrote a passing test proving it never existed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
