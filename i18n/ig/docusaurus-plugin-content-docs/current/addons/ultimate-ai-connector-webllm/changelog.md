---
title: Ultimate AI Connector maka WebLLM Ndekọ mgbanwe
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Ụdị 1.1.0 — E wepụtara na 2026-04-09 {#version-110--released-on-2026-04-09}

* Ọhụrụ: Widget nkata na-ese n’elu nwere ihe ngosi ọnọdụ admin-bar — onye ọrụ ọ bụla banyere nwere ike ịjụ browser-side LLM ozugbo site n’ihu.
* Ọhụrụ: SharedWorker runtime — igwe MLC na-agba ugbu a n’ime SharedWorker ka taabụ ọtụtụ kesaa otu GPU session kama ịlụ ọgụ maka ya.
* Ọhụrụ: apiFetch middleware interceptor — arịrịọ WordPress REST kwekọrọ na usoro AI Client SDK na-eduga n’ụzọ doro anya gaa na WebLLM broker mpaghara, enweghị mkpa loopback HTTP round-trip.
* Ọhụrụ: UI ntọala Widget n’ime panel Connector maka ịgbanye/ịgbanyụọ widget nkata na ịhazi omume auto-prompt.
* Ndozi: Manye IndexedDB cache backend ka nbudata arọ model lanarị ntụgharị HuggingFace xet CDN na-emebi ụzọ Cache API ndabara.
* Ndozi: Gafee context_window KV-cache override maka embedding models (ha enweghị decoder, override ahụ kpatara njehie runtime).
* Ndozi: Gosi model onye ga-amalite oyi n’ime /webllm/v1/models tupu taabụ worker ebulie, ka ndị na-eji SDK hụ model ozugbo.
* Ndozi: Tinye WebLLM n’ime wpai_preferred_text_models filter ka njirimara AI Experiments duzie gaa na igwe browser mgbe ahaziri model.
* Emelitere: Cache-busting, nhazi ọdịnaya, na ndozi hardware-reference pụtara ìhè n’oge nnwale site na mmalite ruo na ngwụcha.

## Ụdị 1.0.0 — Mwepụta Mbụ {#version-100--initial-release}
