---
title: Ultimate AI Connector for WebLLM Üýtgeşmeler žurnaly
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Üýtgeşmeler žurnaly {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — 2026-04-09 senesinde çykaryldy {#version-110--released-on-2026-04-09}

* Täze: Admin-bar ýagdaý görkezijisi bolan ýüzýän söhbet widgety — ulgama giren islendik ulanyjy front end-den göni brauzer tarapyndaky LLM-e sorag berip biler.
* Täze: SharedWorker iş wagty — MLC engine indi SharedWorker içinde işleýär, şonuň üçin birnäçe tab bir GPU sessiýasyny onuň üstünde göreşmegiň ýerine bilelikde ulanýar.
* Täze: apiFetch middleware interceptor — AI Client SDK nusgasyna gabat gelýän WordPress REST haýyşlary ýerli WebLLM broker-e aç-açan ugrukdyrylýar, loopback HTTP gaýdyp-gelme zerur däl.
* Täze: Söhbet widgetyny açyp-ýapmak we auto-prompt hereketini sazlamak üçin Connector panelinde widget sazlamalary UI.
* Düzediş: Model weight ýüklemeleri adaty Cache API ýoluny bozýan HuggingFace xet CDN ugrukdyrmalaryndan soň hem saklanyp galsyn diýip IndexedDB cache backend-i mejbury ulanmak.
* Düzediş: embedding modelleri üçin context_window KV-cache override-ini geçmek (olarda decoder ýok we override runtime ýalňyşlygyna sebäp boldy).
* Düzediş: Worker tab ýüklenmänkä /webllm/v1/models içinde cold-start candidate modelini mahabatlandyrmak, şeýdip SDK ulanyjylary modeli dessine görýär.
* Düzediş: Model sazlanan wagty AI Experiments aýratynlygy brauzer engine-e ugrukdyrylar ýaly WebLLM-i wpai_preferred_text_models filter-ine birikdirmek.
* Kämilleşdirildi: End-to-end synag wagty ýüze çykan cache-busting, mazmun normalizasiýasy we hardware-reference düzedişleri.

## Version 1.0.0 — Ilkinji çykarylyş {#version-100--initial-release}
