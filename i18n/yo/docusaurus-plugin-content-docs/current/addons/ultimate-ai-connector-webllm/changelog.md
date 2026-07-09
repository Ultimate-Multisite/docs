---
title: Àkọsílẹ̀ àwọn àyípadà Ultimate AI Connector fún WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Ìtàn àyípadà {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — Ti tu sílẹ̀ ní 2026-04-09 {#version-110--released-on-2026-04-09}

* Tuntun: Chat widget tí ń fò pẹ̀lú atọ́ka ipò admin-bar — olumulo èyíkéyìí tí ó ti wọlé lè fi ìbéèrè ránṣẹ́ sí LLM ti ẹgbẹ́ browser tààrà láti iwájú.
* Tuntun: SharedWorker runtime — MLC engine ń ṣiṣẹ́ báyìí nínú SharedWorker kí àwọn taabu púpọ̀ lè pín GPU session kan dípò kí wọ́n máa bá a jà.
* Tuntun: apiFetch middleware interceptor — àwọn ìbéèrè WordPress REST tí ó bá AI Client SDK pattern mu ni a máa ń darí lọ sí local WebLLM broker láì nílò loopback HTTP round-trip.
* Tuntun: Widget settings UI nínú Connector panel fún yíyí chat widget padà àti ṣíṣètò ìhùwàsí auto-prompt.
* Àtúnṣe: Fipá mú IndexedDB cache backend kí àwọn ìgbasilẹ model weight lè ye àwọn ìdarípadà HuggingFace xet CDN tí ó ń ba default Cache API path jẹ́.
* Àtúnṣe: Fo context_window KV-cache override fún àwọn embedding models (wọn kò ní decoder, override náà sì fa runtime error).
* Àtúnṣe: Ṣàfihàn cold-start candidate model nínú /webllm/v1/models kí worker tab tó kojọpọ̀, kí àwọn oníbàárà SDK lè rí model lẹ́sẹ̀kẹsẹ̀.
* Àtúnṣe: So WebLLM mọ́ wpai_preferred_text_models filter kí ẹya AI Experiments lè darí sí browser engine nígbà tí a bá ti ṣètò model kan.
* Ti mú dara sí: Cache-busting, content normalisation, àti àwọn àtúnṣe hardware-reference tí ó farahàn nígbà ìdánwò láti ìbẹ̀rẹ̀ dé òpin.

## Version 1.0.0 — Ìtúsílẹ̀ Àkọ́kọ́ {#version-100--initial-release}
