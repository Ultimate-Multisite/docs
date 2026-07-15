---
title: Urutonde rw’impinduka rwa Ultimate AI Connector ya WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Verisiyo 1.1.0 — Yasohotse ku wa 2026-04-09 {#version-110--released-on-2026-04-09}

* Gishya: Akadirishya k'ikiganiro kareremba gafite ikimenyetso cy'imiterere cya admin-bar — umukoresha wese winjiye ashobora guha amabwiriza LLM yo ku ruhande rwa browser ako kanya avuye kuri front end.
* Gishya: SharedWorker runtime — engine ya MLC ubu ikorera muri SharedWorker kugira ngo tabs nyinshi zisangire session imwe ya GPU aho kuyirwanira.
* Gishya: apiFetch middleware interceptor — ubusabe bwa WordPress REST buhuye n'icyitegererezo cya AI Client SDK buyoborwa mu mucyo kuri WebLLM broker y'imbere, nta HTTP round-trip ya loopback ikenewe.
* Gishya: UI y'igenamiterere ry'akadirishya muri panel ya Connector yo gufungura/gufunga akadirishya k'ikiganiro no kugena imyitwarire ya auto-prompt.
* Gukosora: Guhatira cache backend ya IndexedDB kugira ngo ikururwa rya model weights rikomeze gukora nubwo habaye redirects za HuggingFace xet CDN zisenya inzira isanzwe ya Cache API.
* Gukosora: Gusimbuka context_window KV-cache override ku embedding models (ntizigira decoder kandi override yateraga ikosa rya runtime).
* Gukosora: Kwamamaza model y'umukandida wa cold-start muri /webllm/v1/models mbere y'uko tab ya worker iba imaze kwipakurura, bityo abakoresha SDK bakabona model ako kanya.
* Gukosora: Guhuza WebLLM na filter ya wpai_preferred_text_models kugira ngo feature ya AI Experiments iyobore kuri engine ya browser igihe model yagenwe.
* Byanonosowe: Gukemura cache-busting, kunoza content normalisation, n'ibikosorwa bya hardware-reference byagaragaye mu igerageza rya end-to-end.

## Verisiyo 1.0.0 — Isohoka rya mbere {#version-100--initial-release}
