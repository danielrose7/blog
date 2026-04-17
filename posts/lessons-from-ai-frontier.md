---
title: "Lessons from the AI Frontier"
date: "2026-03-06"
image: "/images/gifs/lessons-from-ai-frontier.svg"
imageWidth: 640
imageHeight: 400
externalLink: "https://danielrose7.github.io/slides/2026-03-06-lessons-from-ai-frontier.html"
externalLinkText: "View Slides"
slug: lessons-from-ai-frontier
layout: stacked
---

A talk on designing AI agent systems. The core thesis: **curate ruthlessly** — across context, tools, and output.

## Curate your context

Context isn't about less or more — it's about the *right* context, carefully chosen. An average LLM context holds 200k tokens. If you expose 800 endpoints, you've burned a quarter of memory just saying hello. Think in checkpoints, not threads — summaries and decisions beat raw conversation history. And remember training data has a cutoff: tell it to web search.

## Tools ≠ utils

Good engineering says: small, composable functions. That's bad tool design. Exposing `getColumns()`, `setFilter()`, `setSortBy()`, `applyChanges()` makes the agent into fragile glue across multi-step chains. Instead, design for outcomes: `buildView(intent)`. One tool = one agent story. 5–15 tools, not 800.

## Curate your output

AI output doesn't need to match what the product needs — build a translation layer. In the case study (a data grid assistant for nursery staff), asking the LLM to produce exact MUI column configs was unreliable. The fix: let AI return *semantic categories* (identifying, relevant, insight, hidden) and let deterministic code translate that into the exact shape. Pure functions, unit tested — `mergeAIColumnVisibility()` and `anchorSystemColumns()`.

## The pattern

Humans bring ideas, experience, and edge-case intuition. AI brings scale, tirelessness, and bulk implementation. The bridge between them is curated context, outcome-shaped tools, and a tested translation layer.
