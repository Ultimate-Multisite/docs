---
title: Talaan ng mga Pagbabago ng Ultimate AI Connector para sa WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector para sa WebLLM Changelog

## Bersyon 1.1.0 — Inilabas noong 2026-04-09

* Bago: Lumulutang na widget ng chat na may tagapagpahiwatig ng katayuan sa admin-bar — maaaring direktang mag-prompt ang sinumang naka-log in na user sa browser-side LLM mula sa front end.
* Bago: SharedWorker runtime — tumatakbo na ngayon ang MLC engine sa isang SharedWorker kaya maraming tab ang nagsasalo sa isang GPU session sa halip na mag-agawan dito.
* Bago: apiFetch middleware interceptor — ang mga WordPress REST request na tumutugma sa pattern ng AI Client SDK ay malinaw na niruruta sa lokal na WebLLM broker, nang hindi kailangan ng loopback HTTP round-trip.
* Bago: UI ng mga setting ng widget sa panel ng Connector para i-toggle ang chat widget at i-configure ang gawi ng auto-prompt.
* Ayos: Piliting gamitin ang IndexedDB cache backend para manatili ang mga download ng model weight matapos ang mga HuggingFace xet CDN redirect na sumisira sa default na path ng Cache API.
* Ayos: Laktawan ang context_window KV-cache override para sa mga embedding model (wala silang decoder at nagdulot ng runtime error ang override).
* Ayos: I-advertise ang cold-start candidate model sa /webllm/v1/models bago pa ma-load ang worker tab, para agad makakita ng model ang mga SDK consumer.
* Ayos: I-hook ang WebLLM sa wpai_preferred_text_models filter para mairuta ang feature na AI Experiments sa browser engine kapag may naka-configure na model.
* Pinahusay: Cache-busting, normalisasyon ng nilalaman, at mga ayos sa hardware-reference na lumitaw sa end-to-end testing.

## Bersyon 1.0.0 — Unang Paglabas
