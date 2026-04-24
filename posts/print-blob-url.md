---
title: "PDF Print Filename"
date: "2026-04-23"
image: "/images/gifs/print-blob-url.svg"
imageWidth: 640
imageHeight: 400
githubLink: "https://gist.github.com/danielrose7/adb604b9334118d98de6e856efd043df"
slug: print-blob-url
---

## Problem:

`window.open(blobUrl)` navigates the user away from the page. Solutions like [print.js](https://printjs.crabbly.com/) open the PDF in the same tab — better, but still not ideal (and unmaintained). When a user goes Print → **Save as PDF**, the browser pulls the default filename from `document.title` — not the PDF.

## Solution:

- `printBlobUrl` — hidden iframe triggers the print dialog without any navigation, 10s load timeout, cleanup in `finally`
- `guardPrintTitle` — sets `document.title` and holds it via [`MutationObserver`](https://caniuse.com/mutationobserver) against framework resets, returns a cleanup fn to restore original title
