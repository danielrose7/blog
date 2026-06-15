---
title: "Calendly Embed Pre-loader"
date: "2026-06-15"
image: "/images/gifs/calendly-embeded-preloader-june-15-2026.gif"
imageWidth: 640
imageHeight: 514
codepenLink: "https://codepen.io/editor/bloom-dan/pen/019e6f5a-070b-7234-a8b2-f3520ca08c20"
slug: calendly-embed-preloader
---

Plantiful uses [Calendly](https://calendly.com/) for booking demos via an embedded widget script — which requires a network request that can take a moment.

Calendly's widget emits a `postMessage` event when it's ready. Listen for that to show a simple loader, then remove it from the DOM once the actual widget comes in.

See it live at [plantiful.ai/book-a-demo](https://plantiful.ai/book-a-demo)
