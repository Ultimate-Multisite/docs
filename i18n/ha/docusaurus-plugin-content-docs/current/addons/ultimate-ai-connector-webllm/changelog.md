---
title: Tarihin canje-canje na Ultimate AI Connector don WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Siga 1.1.0 — An fitar a 2026-04-09

* Sabo: Na’urar chat mai shawagi tare da mai nuna matsayi na admin-bar — kowane mai amfani da ya shiga zai iya aika tambaya ga LLM na ɓangaren browser kai tsaye daga front end.
* Sabo: SharedWorker runtime — yanzu MLC engine yana gudana a cikin SharedWorker don haka shafuka da dama suna raba zaman GPU guda ɗaya maimakon su yi rigima a kai.
* Sabo: apiFetch middleware interceptor — buƙatun WordPress REST da suka dace da tsarin AI Client SDK ana turawa su a bayyane zuwa WebLLM broker na gida, ba tare da buƙatar zagayen loopback HTTP ba.
* Sabo: UI na saitunan widget a cikin panel na Connector don kunna ko kashe widget ɗin chat da daidaita halayen auto-prompt.
* Gyara: Tilasta IndexedDB cache backend don sauke nauyin model su tsira daga redirects na HuggingFace xet CDN waɗanda ke karya hanyar Cache API ta asali.
* Gyara: Tsallake context_window KV-cache override don embedding models (ba su da decoder kuma override ɗin ya jawo kuskuren runtime).
* Gyara: Tallata cold-start candidate model a cikin /webllm/v1/models kafin shafin worker ya loda, don masu amfani da SDK su ga model nan take.
* Gyara: Haɗa WebLLM cikin filter na wpai_preferred_text_models don fasalin AI Experiments ya bi engine na browser idan an daidaita model.
* An inganta: Cache-busting, daidaita abun ciki, da gyare-gyaren hardware-reference da suka fito yayin gwajin ƙarshe-zuwa-ƙarshe.

## Siga 1.0.0 — Fitarwa ta Farko
