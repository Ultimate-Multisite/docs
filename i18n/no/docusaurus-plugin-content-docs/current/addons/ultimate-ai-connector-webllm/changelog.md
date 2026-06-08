---
title: Ultimate AI Connector for WebLLM Endringslogg
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Endringslogg

## Versjon 1.1.0 — Utgitt 2026-04-09

* Nytt: Flytende chat-widget med statusindikator i admin-baren — enhver innlogget bruker kan gi prompt til LLM-en i nettleseren direkte fra front-enden.
* Nytt: SharedWorker runtime — MLC-motoren kjører nå i en SharedWorker, slik at flere faner deler én GPU-økt i stedet for å kjempe om den.
* Nytt: apiFetch middleware interceptor — WordPress REST-forespørsler som matcher AI Client SDK-mønsteret, blir transparent viderutsendt til den lokale WebLLM-brokeren, uten behov for en loopback HTTP-rundtur.
* Nytt: UI for widget-innstillinger i Connector-panelet for å veksle chat-widgeten og konfigurere atferden ved automatisk prompting.
* Fix: Tvinger IndexedDB cache-backend slik at nedlastinger av modellvekter overlever HuggingFace xet CDN-omdirigeringer som bryter standard Cache API-sti.
* Fix: Hopper over kontekstvindu KV-cache-overstyringen for embedding-modeller (de har ingen dekoder, og overstyringen forårsaket en kjøretidsfeil).
* Fix: Annonserer den kandidatmodellen for kaldstart i /webllm/v1/models før worker-fanen har lastet, slik at SDK-brukerne ser en modell umiddelbart.
* Fix: Knytter WebLLM til filteret wpai_preferred_text_models, slik at AI Experiments-funksjonen rutes til nettlesermotoren når en modell er konfigurert.
* Forbedret: Cache-busting, innholdsnormalisering og maskinvare-referanse-fikser som ble avdekket under ende-til-ende-testing.

## Versjon 1.0.0 — Første utgivelse
