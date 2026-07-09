---
title: Konektè AI Ultimate pou WebLLM Jounal chanjman
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Vèsyon 1.1.0 — Pibliye 2026-04-09

* Nouvo: Widget chat k ap flote ak endikatè estati nan ba administratè a — nenpòt itilizatè ki konekte ka bay LLM bò navigatè a yon prompt dirèkteman depi front end la.
* Nouvo: SharedWorker runtime — motè MLC a kounye a kouri nan yon SharedWorker pou plizyè onglet pataje yon sèl sesyon GPU olye yo goumen pou li.
* Nouvo: Entèseptè middleware apiFetch — demann WordPress REST ki matche ak modèl AI Client SDK la dirije an transparans pou ale nan broker WebLLM lokal la, san pa bezwen okenn ale-retou HTTP loopback.
* Nouvo: UI anviwònman widget nan panèl Connector a pou aktive/dezaktive widget chat la epi konfigire konpòtman auto-prompt.
* Koreksyon: Fòse backend kach IndexedDB la pou telechajman pwa modèl yo siviv redireksyon CDN xet HuggingFace ki kraze chemen Cache API defo a.
* Koreksyon: Sote ranplasman KV-cache context_window la pou modèl embedding yo (yo pa gen decoder epi ranplasman an te lakòz yon erè runtime).
* Koreksyon: Anonse modèl kandida cold-start la nan /webllm/v1/models anvan onglet worker la fin chaje, pou konsomatè SDK yo wè yon modèl touswit.
* Koreksyon: Branche WebLLM nan filtè wpai_preferred_text_models la pou fonksyon AI Experiments la voye trafik nan motè navigatè a lè yon modèl konfigire.
* Amelyore: Cache-busting, nòmalizasyon kontni, ak koreksyon referans pyès ki parèt pandan tès bout-an-bout.

## Vèsyon 1.0.0 — Premye Lansman
