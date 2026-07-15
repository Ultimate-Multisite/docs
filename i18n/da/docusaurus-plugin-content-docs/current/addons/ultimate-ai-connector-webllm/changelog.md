---
title: Ændringslog for Ultimate AI Connector til WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector til WebLLM Changelog

## Version 1.1.0 — Udgivet den 2026-04-09 {#version-110--released-on-2026-04-09}

* Nyt: Flydende chat-widget med statusindikator i admin-bar — enhver indlogget bruger kan prompte browser-side LLM direkte fra front end.
* Nyt: SharedWorker runtime — MLC-engine kører nu i en SharedWorker, så flere faner deler én GPU-session i stedet for at kæmpe om den.
* Nyt: apiFetch middleware-interceptor — WordPress REST-anmodninger, der matcher AI Client SDK-mønsteret, routes transparent til den lokale WebLLM-broker, uden behov for loopback HTTP-rundtur.
* Nyt: Widget-indstillings-UI i Connector-panelet til at slå chat-widget til/fra og konfigurere auto-prompt-adfærd.
* Rettelse: Tving IndexedDB-cache-backend, så downloads af modelvægte overlever HuggingFace xet CDN-omdirigeringer, der ødelægger standard Cache API-stien.
* Rettelse: Spring context_window KV-cache-tilsidesættelsen over for embedding-modeller (de har ingen decoder, og tilsidesættelsen forårsagede en runtime-fejl).
* Rettelse: Annoncér cold-start-kandidatmodellen i /webllm/v1/models, før worker-fanen er indlæst, så SDK-forbrugere ser en model med det samme.
* Rettelse: Hook WebLLM ind i wpai_preferred_text_models-filteret, så AI Experiments-funktionen routes til browser-engine, når en model er konfigureret.
* Forbedret: Cache-busting, indholdsnormalisering og hardware-reference-rettelser, der kom frem under end-to-end-test.

## Version 1.0.0 — Første udgivelse {#version-100--initial-release}
