---
title: Ultimate AI Connector rau WebLLM Phau Ntawv Teev Kev Hloov
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector rau WebLLM Changelog {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — Tso tawm rau 2026-04-09 {#version-110--released-on-2026-04-09}

* Tshiab: Lub chat widget ntab nrog admin-bar status indicator — txhua tus neeg siv uas twb nkag rau hauv lawm tuaj yeem nug browser-side LLM ncaj qha ntawm sab front end.
* Tshiab: SharedWorker runtime — MLC engine tam sim no khiav hauv SharedWorker kom ntau tab sib koom ib GPU session es tsis txhob sib tw siv nws.
* Tshiab: apiFetch middleware interceptor — WordPress REST requests uas phim AI Client SDK pattern yuav raug xa mus rau local WebLLM broker yam pob tshab, tsis tas yuav muaj loopback HTTP round-trip.
* Tshiab: Widget settings UI hauv Connector panel rau kev qhib/kaw chat widget thiab teeb auto-prompt behaviour.
* Kho: Yuam kom siv IndexedDB cache backend kom model weight downloads tseem nyob tau tom qab HuggingFace xet CDN redirects uas ua rau default Cache API path puas.
* Kho: Hla context_window KV-cache override rau embedding models (lawv tsis muaj decoder thiab override ntawd ua rau runtime error).
* Kho: Tshaj tawm cold-start candidate model hauv /webllm/v1/models ua ntej worker tab tau loaded, kom SDK consumers pom ib model tam sim ntawd.
* Kho: Txuas WebLLM rau hauv wpai_preferred_text_models filter kom AI Experiments feature xa mus rau browser engine thaum muaj model raug configured.
* Txhim kho: Cache-busting, content normalisation, thiab hardware-reference fixes uas tshwm sim thaum end-to-end testing.

## Version 1.0.0 — Kev Tso Tawm Thawj Zaug {#version-100--initial-release}
