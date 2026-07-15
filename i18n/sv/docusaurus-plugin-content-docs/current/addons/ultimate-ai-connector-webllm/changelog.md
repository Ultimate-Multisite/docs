---
title: Ultimate AI Connector för WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector för WebLLM Changelog

## Version 1.1.0 — Släppt den 2026-04-09 {#version-110--released-on-2026-04-09}

* Nytt: Flytande chattwidget med statusindikator i admin-fältet — alla inloggade användare kan skicka prompts till LLM:en i webbläsaren direkt från front-end.
* Nytt: SharedWorker-runtime — MLC-motorn kör nu i en SharedWorker, vilket gör att flera flikar delar en GPU-session istället för att konkurrera om den.
* Nytt: apiFetch middleware interceptor — WordPress REST-förfrågningar som matchar AI Client SDK-mönstret dirigeras transparent till den lokala WebLLM-mäklaren, vilket eliminerar behovet av en loopback HTTP-rundtur.
* Nytt: Widget-inställningar i Connector-panelen för att växla chattwidgeten och konfigurera beteendet för automatisk prompting.
* Fix: Tvingar fram IndexedDB cache backend så att nedladdningar av modellvikter överlever HuggingFace xet CDN-omdirigeringar som bryter den standard Cache API-vägen.
* Fix: Hoppar över överstyrningen av context_window KV-cache för inbäddningsmodeller (de har ingen decoder, och överstyrningen orsakade ett fel vid körning).
* Fix: Annonserar den kandidatmodell som ska starta kallt i /webllm/v1/models innan arbetarfliken har laddats, så att SDK-användare ser en modell direkt.
* Fix: Kopplar WebLLM till filtret wpai_preferred_text_models så att AI Experiments-funktionen dirigeras till webbläsarens motor när en modell är konfigurerad.
* Förbättrat: Fixar för cache-busting, innehållsnormalisering och hårdvaru-referenser som upptäcktes under end-to-end-testning.

## Version 1.0.0 — Initial Release {#version-100--initial-release}
