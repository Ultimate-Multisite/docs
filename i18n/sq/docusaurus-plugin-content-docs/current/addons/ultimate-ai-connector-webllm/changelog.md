---
title: Regjistri i ndryshimeve i Ultimate AI Connector për WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector për WebLLM Changelog

## Versioni 1.1.0 — Publikuar më 2026-04-09 {#version-110--released-on-2026-04-09}

* E re: Widget chat-i lundrues me tregues statusi në admin-bar — çdo përdorues i identifikuar mund t’i dërgojë prompt LLM-së në anën e shfletuesit drejtpërdrejt nga front end.
* E re: SharedWorker runtime — motori MLC tani ekzekutohet në një SharedWorker që skeda të shumta të ndajnë një seancë GPU në vend që të konkurrojnë për të.
* E re: Interceptor middleware apiFetch — kërkesat WordPress REST që përputhen me modelin AI Client SDK drejtohen në mënyrë transparente te brokeri lokal WebLLM, pa nevojë për vajtje-ardhje loopback HTTP.
* E re: UI e cilësimeve të widget-it në panelin Connector për aktivizimin/çaktivizimin e chat widget-it dhe konfigurimin e sjelljes auto-prompt.
* Rregullim: Detyro backend-in e cache-it IndexedDB që shkarkimet e peshave të modelit t’u mbijetojnë ridrejtimeve të HuggingFace xet CDN që prishin rrugën e parazgjedhur Cache API.
* Rregullim: Kapërce mbivendosjen e KV-cache të context_window për modelet embedding (ato nuk kanë decoder dhe mbivendosja shkaktonte gabim runtime).
* Rregullim: Shpall modelin kandidat cold-start në /webllm/v1/models para se skeda worker të jetë ngarkuar, që konsumatorët SDK të shohin menjëherë një model.
* Rregullim: Lidh WebLLM me filtrin wpai_preferred_text_models që veçoria AI Experiments të drejtohet te motori i shfletuesit kur është konfiguruar një model.
* Përmirësuar: Cache-busting, normalizimi i përmbajtjes dhe rregullimet e referencës së harduerit të shfaqura gjatë testimit end-to-end.

## Versioni 1.0.0 — Publikimi fillestar {#version-100--initial-release}
