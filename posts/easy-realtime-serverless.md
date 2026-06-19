---
title: "Easy Realtime in Serverless Cloud"
date: "2026-06-19"
image: "/images/gifs/easy-realtime-serverless.svg"
imageWidth: 640
imageHeight: 400
slug: easy-realtime-serverless
---

Added real-time sync to [Tote](https://usetote.com) in about 10 minutes by feeding the [Neon real-time comments guide](https://neon.com/guides/real-time-comments) URL directly into a prompt. The pattern it produced: a **transactional outbox**.

Every write opens a Postgres transaction that applies the change *and* inserts a row into `ably_outbox` — both commit or neither does. No case where a write succeeds but clients aren't notified, or a notification arrives before the data exists.

A trigger fires `pg_notify` on each insert. The [Ably Postgres Connector](https://ably.com/) runs `LISTEN` against Neon outside of Vercel, claims the outbox row, and publishes to the right channel. Ably fans it out over WebSocket.

On the client, a hook calls `queryClient.invalidateQueries()` on each message — no payload parsing, no local state merge. Data marked stale, TanStack Query refetches. Database stays the single source of truth.

Postgres is the handoff between the stateless (Vercel) and stateful (Ably) halves of the architecture — which is why this pattern works on a serverless platform at all.

Total surface area: 1 Drizzle migration, 1 UI form, 2 ENV vars.
