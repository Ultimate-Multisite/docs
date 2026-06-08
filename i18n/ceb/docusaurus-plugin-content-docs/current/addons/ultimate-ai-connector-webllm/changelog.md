---
title: Ultimate AI Connector para sa WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector para sa WebLLM Changelog

## Bersyon 1.1.0 — Inilabas noong 2026-04-09

* Bago: Floating chat widget nga may status indicator sa admin-bar — bisan kinsa nga naka-log in, pwede na i-prompt ang browser-side LLM direkta gikan sa front end.
* Bago: SharedWorker runtime — ang MLC engine karon nag-run sa SharedWorker para mag-share ang daghang tabs sa usa ka GPU session imbes nga mag-awayan kini.
* Bago: apiFetch middleware interceptor — ang mga WordPress REST requests nga nagmatch sa AI Client SDK pattern kay diretso na nga gidala sa local WebLLM broker, walay kinahanglan og loopback HTTP round-trip.
* Bago: Widget settings UI sa Connector panel para i-toggle ang chat widget ug i-configure ang auto-prompt behavior.
* Ayos: Gipilit ang IndexedDB cache backend aron molungtad ang pag-download sa model weights bisan pa sa HuggingFace xet CDN redirects nga makaguba sa default Cache API path.
* Ayos: Gipakaliw ang context_window KV-cache override para sa embedding models (wal sila'y decoder ug ang override nagdulot og runtime error).
* Ayos: Gipa-advertise ang cold-start candidate model sa /webllm/v1/models sa dili pa mag-load ang worker tab, aron makita dayon sa mga SDK consumer ang usa ka model.
* Ayos: Gi-hook ang WebLLM sa wpai_preferred_text_models filter para ma-route ang AI Experiments feature ngadto sa browser engine kung na-configure na ang model.
* Gpaayo: Ang cache-busting, content normalisation, ug hardware-reference fixes nga gipanghimo during end-to-end testing.

## Bersyon 1.0.0 — Initial Release
