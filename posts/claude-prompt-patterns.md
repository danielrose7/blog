---
title: "Claude Prompt Patterns"
date: "2026-04-17"
image: "/images/gifs/claude-prompt-patterns.svg"
imageWidth: 640
imageHeight: 400
githubLink: "https://gist.github.com/danielrose7/8dfe9bbe852945b602994cc2c123ecaa"
slug: claude-prompt-patterns
---

A cheat sheet of patterns for writing effective Claude prompts, based on Anthropic guidance as of spring 2026.

- **XML tags** as semantic boundaries between prompt sections (context, task, rules, schema)
- **Include the JSON schema** directly rather than describing the shape you want
- **Positive framing** over "do not" — tell the model what to do, not what to avoid
- **Explain why** constraints exist — Claude generalizes from motivation better than from bare rules
- **Few-shot examples** are the highest-leverage fix for inconsistent output
- **Data first, task after** in long prompts for better attention
- **System prompt** for persona and persistent constraints; **user prompt** for per-call context and data
