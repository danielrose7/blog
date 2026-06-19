---
title: "Easy Realtime in Serverless Cloud"
date: "2026-06-19"
image: "/images/gifs/easy-realtime-serverless.svg"
imageWidth: 640
imageHeight: 400
slug: easy-realtime-serverless
layout: stacked
---

Added real-time sync to [Tote](https://tote.tools) in about 10 minutes. Two things made it that fast.

First, [Ably's](https://ably.com/) onboarding — a short series of structured questions plus a free-text field, likely AI-driven, that ends with a specific product recommendation rather than a docs dump. Landed on the Ably Postgres Connector without having to figure that out myself.

Second, feeding the [Neon real-time comments guide](https://neon.com/guides/real-time-comments) URL directly into a prompt. The guide covers the full stack; the model had everything it needed to generate working code on the first try.

The pattern underneath is a **transactional outbox** — the write and the notification are one atomic database transaction, so there's no case where they fall out of sync. Postgres is the handoff between the stateless (Vercel) and stateful (Ably) halves of the architecture.

Total surface area: 1 Drizzle migration, 1 UI form, 2 ENV vars.
