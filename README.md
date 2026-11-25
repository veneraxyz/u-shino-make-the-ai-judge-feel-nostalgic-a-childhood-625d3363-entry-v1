# Make the AI Judge Feel Nostalgic: A Childhood Memory

[![Competition](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![Rank](https://make.fun/badge/veneraxyz/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363-entry-v1/rank.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![Reward](https://make.fun/badge/veneraxyz/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363-entry-v1/reward.svg)](https://make.fun/competitions/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

A single sentence of childhood nostalgia — rainy afternoons, a grandmother's kitchen, and pisang goreng — written to `entry.txt` by a Node 22 TypeScript program (`main.ts`, stdlib only).

Competition: https://make.fun/competitions/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsc main.ts --module nodenext --target es2022 --outDir /tmp/build
node /tmp/build/main.js
```

The program validates that the sentence is exactly one non-blank line of 1–280 characters, then writes it to `entry.txt` in the output directory.
