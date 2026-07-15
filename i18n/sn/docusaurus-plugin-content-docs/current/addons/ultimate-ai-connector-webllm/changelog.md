---
title: Ultimate AI Connector for WebLLM Chinyorwa cheshanduko
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Version 1.1.0 — Yakaburitswa musi wa2026-04-09 {#version-110--released-on-2026-04-09}

* Chitsva: Floating chat widget ine admin-bar status indicator — chero mushandisi akapinda muAccount anogona kupa browser-side LLM prompt zvakananga kubva ku front end.
* Chitsva: SharedWorker runtime — MLC engine yava kumhanya muSharedWorker kuitira kuti ma tab akawanda agovane GPU session imwe chete pane kukwikwidzana nayo.
* Chitsva: apiFetch middleware interceptor — zvikumbiro zveWordPress REST zvinoenderana neAI Client SDK pattern zvinofambiswa pachena ku local WebLLM broker, pasina loopback HTTP round-trip inodiwa.
* Chitsva: Widget settings UI muConnector panel yekubatidza kana kudzima chat widget uye kugadzirisa auto-prompt behaviour.
* Kugadzirisa: Kumanikidza IndexedDB cache backend kuitira kuti kudhawunirodha kwe model weight kurambe kuripo kunyange paine HuggingFace xet CDN redirects dzinoputsa default Cache API path.
* Kugadzirisa: Kusvetuka context_window KV-cache override yemamodeli eembedding (haana decoder uye override yakakonzera runtime error).
* Kugadzirisa: Kushambadza cold-start candidate model mu/webllm/v1/models worker tab isati yarodha, kuitira kuti vatengi veSDK vaone model pakarepo.
* Kugadzirisa: Kubatanidza WebLLM mu wpai_preferred_text_models filter kuitira kuti AI Experiments feature ifambiswe ku browser engine kana model yagadziriswa.
* Zvakavandudzwa: Cache-busting, content normalisation, uye hardware-reference fixes zvakaonekwa panguva ye end-to-end testing.

## Version 1.0.0 — Kuburitswa Kwekutanga {#version-100--initial-release}
