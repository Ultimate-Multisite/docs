---
title: "Ultimate AI Connector for WebLLM Changelog"
sidebar_position: 99
---

# Ultimate AI Connector for WebLLM Changelog

## Version 1.1.0 — Released on 2026-04-09

* New: Floating chat widget with admin-bar status indicator — any logged-in user can prompt the browser-side LLM directly from the front end.
* New: SharedWorker runtime — the MLC engine now runs in a SharedWorker so multiple tabs share one GPU session instead of fighting over it.
* New: apiFetch middleware interceptor — WordPress REST requests that match the AI Client SDK pattern are transparently routed to the local WebLLM broker, no loopback HTTP round-trip needed.
* New: Widget settings UI in the Connector panel for toggling the chat widget and configuring auto-prompt behaviour.
* Fix: Force IndexedDB cache backend so model weight downloads survive HuggingFace xet CDN redirects that break the default Cache API path.
* Fix: Skip the context_window KV-cache override for embedding models (they have no decoder and the override caused a runtime error).
* Fix: Advertise the cold-start candidate model in /webllm/v1/models before the worker tab has loaded, so SDK consumers see a model immediately.
* Fix: Hook WebLLM into the wpai_preferred_text_models filter so the AI Experiments feature routes to the browser engine when a model is configured.
* Improved: Cache-busting, content normalisation, and hardware-reference fixes surfaced during end-to-end testing.

## Version 1.0.0 — Initial Release
