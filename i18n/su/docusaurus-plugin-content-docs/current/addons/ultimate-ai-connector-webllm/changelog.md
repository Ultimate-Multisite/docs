---
title: Log Parobahan Ultimate AI Connector pikeun WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector pikeun WebLLM Changelog

## Vérsi 1.1.0 — Dileupaskeun dina 2026-04-09 {#version-110--released-on-2026-04-09}

* Anyar: Widget obrolan ngambang kalayan indikator status admin-bar — pamaké mana waé anu geus asup tiasa masihan prompt ka LLM sisi peramban langsung ti front end.
* Anyar: Runtime SharedWorker — mesin MLC ayeuna jalan dina SharedWorker sangkan sababaraha tab ngabagi hiji sési GPU tibatan silih rebut.
* Anyar: Interceptor middleware apiFetch — pamundut REST WordPress anu cocog jeung pola AI Client SDK sacara transparan dialihkeun ka broker WebLLM lokal, henteu peryogi perjalanan HTTP loopback.
* Anyar: UI setélan widget dina panel Connector pikeun ngahurungkeun/ mareuman widget obrolan jeung ngonpigurasikeun paripolah auto-prompt.
* Beneran: Paksa backend cache IndexedDB sangkan unduhan beurat modél tetep salamet tina alihan HuggingFace xet CDN anu ngaruksak jalur Cache API standar.
* Beneran: Leungitkeun override KV-cache context_window pikeun modél embedding (aranjeunna teu boga decoder jeung override éta nyababkeun kasalahan runtime).
* Beneran: Iklanakeun modél kandidat cold-start dina /webllm/v1/models saméméh tab worker geus dimuat, sangkan konsumén SDK ningali modél langsung.
* Beneran: Kaitkeun WebLLM kana filter wpai_preferred_text_models sangkan fitur AI Experiments dialihkeun ka mesin peramban nalika modél dikonpigurasikeun.
* Dironjatkeun: Cache-busting, normalisasi eusi, jeung beneran rujukan hardware anu kapanggih salila uji tungtung-ka-tungtung.

## Vérsi 1.0.0 — Rilis Mimiti {#version-100--initial-release}
