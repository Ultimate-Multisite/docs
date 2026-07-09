---
title: Cathetan Owah-owahan Ultimate AI Connector kanggo WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector kanggo WebLLM Changelog

## Versi 1.1.0 — Dirilis ing 2026-04-09

* Anyar: Widget chat ngambang kanthi indikator status admin-bar — pangguna apa wae sing wis mlebu bisa menehi prompt menyang LLM sisih browser langsung saka front end.
* Anyar: Runtime SharedWorker — mesin MLC saiki mlaku ing SharedWorker supaya pirang-pirang tab nuduhake siji sesi GPU tinimbang rebutan.
* Anyar: Interceptor middleware apiFetch — panjaluk WordPress REST sing cocog karo pola AI Client SDK dialihake kanthi transparan menyang broker WebLLM lokal, ora perlu round-trip HTTP loopback.
* Anyar: UI setelan Widget ing panel Connector kanggo nguripake/mateni widget chat lan ngatur tumindak auto-prompt.
* Ndandani: Meksa backend cache IndexedDB supaya undhuhan bobot model tetep slamet saka pangalihan HuggingFace xet CDN sing ngrusak jalur Cache API gawan.
* Ndandani: Ngliwati override KV-cache context_window kanggo model embedding (model kasebut ora duwe decoder lan override nyebabake runtime error).
* Ndandani: Ngiklanake model calon cold-start ing /webllm/v1/models sadurunge tab worker wis dimuat, supaya konsumen SDK langsung ndeleng model.
* Ndandani: Nyambungake WebLLM menyang filter wpai_preferred_text_models supaya fitur AI Experiments ngarah menyang mesin browser nalika model dikonfigurasi.
* Apik: Cache-busting, normalisasi konten, lan ndandani referensi hardware sing katon sajrone testing end-to-end.

## Versi 1.0.0 — Rilis Wiwitan
