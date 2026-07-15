---
title: Ultimate AI Connector ho an'ny WebLLM Tantaran'ny fanovana
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Version 1.1.0 — Navoaka tamin'ny 2026-04-09 {#version-110--released-on-2026-04-09}

* Vaovao: Floating chat widget miaraka amin'ny admin-bar status indicator — izay mpampiasa efa niditra dia afaka mandefa prompt amin'ny LLM eo amin'ny browser mivantana avy amin'ny front end.
* Vaovao: SharedWorker runtime — mandeha ao anaty SharedWorker izao ny MLC engine ka tabilao maro no mizara GPU session iray fa tsy mifandona amin'izany.
* Vaovao: apiFetch middleware interceptor — ny fangatahana WordPress REST izay mifanaraka amin'ny lamina AI Client SDK dia alefa mangarahara mankany amin'ny broker WebLLM eo an-toerana, tsy mila loopback HTTP round-trip.
* Vaovao: Widget settings UI ao amin'ny tontonana Connector ho an'ny famadihana ny chat widget sy fanamboarana ny fitondran-tena auto-prompt.
* Fanitsiana: Terena ny IndexedDB cache backend mba hahatafavoaka velona ny fampidinana model weight amin'ny HuggingFace xet CDN redirects izay manapaka ny lalana Cache API default.
* Fanitsiana: Dingano ny context_window KV-cache override ho an'ny embedding models (tsy manana decoder izy ireo ary niteraka runtime error ilay override).
* Fanitsiana: Asehoy ny cold-start candidate model ao amin'ny /webllm/v1/models alohan'ny mbola mampakatra ny worker tab, ka mahita model avy hatrany ny mpanjifa SDK.
* Fanitsiana: Ampifandraiso amin'ny wpai_preferred_text_models filter ny WebLLM mba handefasan'ny endri-javatra AI Experiments mankany amin'ny browser engine rehefa voakonfigura ny model.
* Nohatsaraina: Fanarenana cache, fanajariana votoaty, ary fanitsiana hardware-reference nipoitra nandritra ny fitsapana end-to-end.

## Version 1.0.0 — Famoahana voalohany {#version-100--initial-release}
