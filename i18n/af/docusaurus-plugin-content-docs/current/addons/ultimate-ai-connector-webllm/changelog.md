---
title: Ultimate AI Connector vir WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector vir WebLLM Veranderingslogboek

## Weergawe 1.1.0 — Vrygestel op 2026-04-09 {#version-110--released-on-2026-04-09}

* Nu: Vloëwende chat-widget met admin-balk status-aanwyser — enige ingelogde gebruiker kan die browser-kant LLM direk vanaf die voorste kant (front end) aanstuur.
* Nu: SharedWorker runtime — die MLC-enjin hardloop nou in 'n SharedWorker, sodat verskeie tabs een GPU-sessie deel in plaas daarvan om oor dit te veg.
* Nu: apiFetch middleware-intersepteur — WordPress REST-versoeke wat die AI Client SDK-patroon pas, word deursigtig na die plaaslike WebLLM broker gerouteer, sonder dat 'n loopback HTTP-rondreis nodig is.
* Nu: Widget-instellings-UI in die Connector-paneel vir die omskakeling van die chat-widget en die konfigurasie van outo-prompt gedrag.
* Hersiening: Dwing IndexedDB cache backend af sodat modelgewig-downloads oorleef HuggingFace xet CDN-herroepinge wat die standaard Cache API-pad breek.
* Hersiening: Skip die context_window KV-cache oordrywing vir inbeddingsmodelle (hulle het geen dekoder nie en die oordrywing het 'n tydlynfout veroorsaak).
* Hersiening: Kondig die koue-start kandidaatmodel aan in /webllm/v1/models voordat die werker-tab gelaai is, sodat SDK-gebruikers onmiddellik 'n model sien.
* Hersiening: Skakel WebLLM in die wpai_preferred_text_models filter sodat die AI Experiments-funksie na die browser-enjin gerouteer word wanneer 'n model gekonfigureer word.
* Verbetering: Cache-busting, inhoudnormalisering en hardeware-verwysings-hersienings wat tydens einde-tot-einde toetsing aan die lig gekom het.

## Weergawe 1.0.0 — Aanvanklike Vrystelling {#version-100--initial-release}
