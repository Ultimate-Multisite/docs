---
title: Ŝanĝoprotokolo de Ultimate AI Connector por WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ŝanĝoprotokolo de Ultimate AI Connector por WebLLM

## Versio 1.1.0 — Eldonita je 2026-04-09

* Nova: Flosanta babilfenestraĵo kun admin-bar stata indikilo — ajna ensalutinta uzanto povas peti la retumil-flankan LLM rekte de la antaŭa flanko.
* Nova: SharedWorker rultempo — la MLC-motoro nun ruliĝas en SharedWorker, tiel ke pluraj langetoj kunhavas unu GPU-sesion anstataŭ konkuri pri ĝi.
* Nova: apiFetch perprograma interkaptanto — WordPress REST petoj kiuj kongruas kun la AI Client SDK ŝablono estas travideble direktitaj al la loka WebLLM-peranto, sen bezono de loopback HTTP rondiro.
* Nova: UI por fenestraĵaj agordoj en la Connector-panelo por ŝalti aŭ malŝalti la babilfenestraĵon kaj agordi aŭtomatan petan konduton.
* Riparo: Devigi IndexedDB kaŝmemoran backend, por ke elŝutoj de modelaj pezoj postvivu HuggingFace xet CDN alidirektojn kiuj rompas la defaŭltan Cache API vojon.
* Riparo: Preterlasi la context_window KV-kaŝmemoran superregon por enkorpigaj modeloj (ili ne havas malĉifrilon, kaj la superrego kaŭzis rultempan eraron).
* Riparo: Anonci la malvarm-komencan kandidatan modelon en /webllm/v1/models antaŭ ol la worker-langeto ŝargiĝis, tiel ke SDK-konsumantoj vidas modelon tuj.
* Riparo: Konekti WebLLM al la wpai_preferred_text_models filtrilo, tiel ke la AI Experiments trajto direktiĝas al la retumila motoro kiam modelo estas agordita.
* Plibonigita: Kaŝmemora rompo, enhava normaligo, kaj aparatar-referencaj riparoj aperintaj dum fin-al-fina testado.

## Versio 1.0.0 — Komenca Eldono
