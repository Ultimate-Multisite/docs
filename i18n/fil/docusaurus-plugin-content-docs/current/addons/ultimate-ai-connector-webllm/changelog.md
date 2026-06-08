---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector para sa WebLLM Changelog

## Version 1.1.0 — Inilabas noong 2026-04-09

* New: Floating chat widget na may status indicator sa admin-bar — ang sinumang naka-login ay maaaring mag-prompt sa browser-side LLM nang direkta mula sa front end.
* New: SharedWorker runtime — ang MLC engine ay tumatakbo na ngayon sa SharedWorker para magbahagi ng iisang GPU session ang maraming tabs sa halip na mag-agawan.
* New: apiFetch middleware interceptor — Ang mga WordPress REST requests na tumutugma sa pattern ng AI Client SDK ay awtomatikong dinirekta sa local WebLLM broker, kaya hindi na kailangan ng loopback HTTP round-trip.
* New: Widget settings UI sa Connector panel para ma-toggle ang chat widget at ma-configure ang auto-prompt behaviour.
* Fix: Pinilit ang IndexedDB cache backend para manatili ang pag-download ng model weight kahit may HuggingFace xet CDN redirects na nakakasira sa default Cache API path.
* Fix: Nilaktawan ang context_window KV-cache override para sa embedding models (wala silang decoder at nagdulot ng runtime error ang override).
* Fix: Ipinag-aanunsiyo ang cold-start candidate model sa /webllm/v1/models bago pa man ma-load ang worker tab, para makita agad ng mga gumagamit ng SDK ang model.
* Fix: In-hook ang WebLLM sa wpai_preferred_text_models filter para ang AI Experiments feature ay mag-route sa browser engine kapag may model na naka-configure.
* Improved: Naayos ang cache-busting, content normalisation, at hardware-reference fixes na natukoy sa end-to-end testing.

## Version 1.0.0 — Unang Paglabas
