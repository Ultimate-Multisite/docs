---
title: Dnevnik sprememb za Ultimate AI Connector for WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM dnevnik sprememb {#ultimate-ai-connector-for-webllm-changelog}

## Različica 1.1.0 — izdano 2026-04-09 {#version-110--released-on-2026-04-09}

* Novo: Plavajoči klepetalni gradnik z indikatorjem stanja v skrbniški vrstici — vsak prijavljeni uporabnik lahko LLM na strani brskalnika pozove neposredno iz sprednjega dela.
* Novo: Izvajalno okolje SharedWorker — pogon MLC zdaj teče v SharedWorker, zato si več zavihkov deli eno sejo GPU, namesto da bi se zanjo potegovali.
* Novo: Prestreznik vmesne programske opreme apiFetch — WordPress REST zahtevki, ki se ujemajo z vzorcem AI Client SDK, so pregledno preusmerjeni k lokalnemu posredniku WebLLM, brez potrebe po povratnem HTTP potovanju loopback.
* Novo: Uporabniški vmesnik nastavitev gradnika v plošči Connector za vklapljanje klepetalnega gradnika in konfiguriranje vedenja samodejnih pozivov.
* Popravek: Vsili zaledje predpomnilnika IndexedDB, da prenosi uteži modela preživijo preusmeritve HuggingFace xet CDN, ki pokvarijo privzeto pot Cache API.
* Popravek: Preskoči prepis KV-predpomnilnika context_window za modele vdelav (nimajo dekoderja in prepis je povzročil napako med izvajanjem).
* Popravek: Objavi kandidatni model za hladni zagon v /webllm/v1/models, preden se zavihek worker naloži, da potrošniki SDK takoj vidijo model.
* Popravek: Poveži WebLLM v filter wpai_preferred_text_models, da funkcija AI Experiments usmerja k brskalniškemu pogonu, ko je model konfiguriran.
* Izboljšano: Izboljšave za obhod predpomnilnika, normalizacijo vsebine in sklice na strojno opremo, razkrite med testiranjem od začetka do konca.

## Različica 1.0.0 — začetna izdaja {#version-100--initial-release}
