---
title: Ultimate AI Connector voor WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector voor WebLLM Wijzigingslogboek

## Versie 1.1.0 — Uitgebracht op 2026-04-09

* Nieuw: Zwevend chatwidget met statusindicator in de adminbalk — elke ingelogde gebruiker kan de browser-side LLM rechtstreeks vanaf de front-end aansturen met een prompt.
* Nieuw: SharedWorker runtime — de MLC engine draait nu in een SharedWorker, waardoor meerdere tabbladen één GPU-sessie delen in plaats van elkaar te blokkeren.
* Nieuw: apiFetch middleware interceptor — WordPress REST-verzoeken die het AI Client SDK-patroon matchen, worden transparant doorgestuurd naar de lokale WebLLM broker, waardoor er geen loopback HTTP round-trip nodig is.
* Nieuw: UI voor widget-instellingen in het Connector-paneel om het chatwidget in- en uit te schakelen en het gedrag van de auto-prompt te configureren.
* Fix: Force IndexedDB cache backend, zodat modelgewichtsdownloads overleven bij HuggingFace xet CDN redirects die het standaard Cache API-pad breken.
* Fix: Overslaan van de context_window KV-cache override voor embedding-modellen (ze hebben geen decoder en de override veroorzaakte een runtime-fout).
* Fix: Het modelkandida voor koude start wordt nu in /webllm/v1/models geadverteerd voordat het worker-tabblad geladen is, zodat SDK-gebruikers direct een model zien.
* Fix: WebLLM is gekoppeld aan de wpai_preferred_text_models filter, zodat de AI Experiments functie naar de browser-engine wordt gerouteerd wanneer een model is geconfigureerd.
* Verbeterd: Cache-busting, content normalisatie en hardware-referentie-fixes zijn gevonden tijdens end-to-end testen.

## Versie 1.0.0 — Initiële Release
