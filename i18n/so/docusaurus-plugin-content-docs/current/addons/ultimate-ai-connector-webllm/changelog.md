---
title: Ultimate AI Connector ee WebLLM Diiwaanka Isbeddellada
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector ee WebLLM Changelog

## Nooca 1.1.0 — La sii daayay 2026-04-09 {#version-110--released-on-2026-04-09}

* Cusub: Qalab sheeko sabbaynaya oo leh tilmaame xaalad admin-bar — isticmaale kasta oo soo galay wuxuu LLM-ka dhinaca browser-ka si toos ah uga weydiin karaa qaybta hore.
* Cusub: SharedWorker runtime — matoorka MLC hadda wuxuu ku shaqeeyaa SharedWorker si tabs badan ay u wadaagaan hal fadhi GPU halkii ay ku loollami lahaayeen.
* Cusub: apiFetch middleware interceptor — codsiyada WordPress REST ee u dhigma qaabka AI Client SDK si hufan ayaa loogu leexiyaa WebLLM broker-ka maxalliga ah, looma baahna wareeg HTTP loopback ah.
* Cusub: UI dejinta qalabka ee guddiga Connector si loo shido/damiyo qalabka sheekada loona habeeyo dhaqanka auto-prompt.
* Hagaajin: Qasab ka dhig IndexedDB cache backend si soo dejinta miisaannada model-ku uga badbaadaan HuggingFace xet CDN redirects ee jebiya waddada caadiga ah ee Cache API.
* Hagaajin: Ka bood context_window KV-cache override ee embedding models (ma laha decoder, override-kuna wuxuu sababay khalad runtime ah).
* Hagaajin: Ku muuji cold-start candidate model gudaha /webllm/v1/models ka hor inta tab-ka worker-ku aanu soo shuban, si isticmaalayaasha SDK ay isla markiiba u arkaan model.
* Hagaajin: Ku xidh WebLLM filter-ka wpai_preferred_text_models si astaanta AI Experiments ay ugu leexato matoorka browser-ka marka model la habeeyo.
* La hagaajiyay: Cache-busting, caadidaynta nuxurka, iyo hagaajinnada tixraaca hardware-ka ee soo baxay intii lagu jiray tijaabinta end-to-end.

## Nooca 1.0.0 — Sii-dayntii Hore {#version-100--initial-release}
