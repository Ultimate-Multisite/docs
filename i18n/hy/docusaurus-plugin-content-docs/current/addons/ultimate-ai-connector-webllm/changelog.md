---
title: Ultimate AI Connector WebLLM-ի համար փոփոխությունների մատյան
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM փոփոխությունների մատյան

## Տարբերակ 1.1.0 — Թողարկվել է 2026-04-09-ին

* Նոր՝ լողացող զրույցի widget՝ admin-bar կարգավիճակի ցուցիչով — ցանկացած մուտք գործած օգտատեր կարող է browser-side LLM-ին հուշում ուղարկել անմիջապես front end-ից։
* Նոր՝ SharedWorker runtime — MLC շարժիչն այժմ աշխատում է SharedWorker-ում, որպեսզի մի քանի ներդիրներ կիսեն մեկ GPU session՝ դրա համար մրցելու փոխարեն։
* Նոր՝ apiFetch middleware interceptor — WordPress REST հարցումները, որոնք համընկնում են AI Client SDK ձևաչափին, թափանցիկորեն ուղղորդվում են դեպի տեղական WebLLM broker՝ առանց loopback HTTP round-trip-ի։
* Նոր՝ widget-ի կարգավորումների UI Connector panel-ում՝ զրույցի widget-ը միացնելու/անջատելու և auto-prompt վարքագիծը կազմաձևելու համար։
* Ուղղում՝ պարտադիր օգտագործել IndexedDB cache backend, որպեսզի model weight ներբեռնումները պահպանվեն HuggingFace xet CDN վերահղումներից հետո, որոնք խափանում են լռելյայն Cache API ուղին։
* Ուղղում՝ բաց թողնել context_window KV-cache override-ը embedding models-ի համար (դրանք decoder չունեն, և override-ը runtime error էր առաջացնում)։
* Ուղղում՝ հրապարակել cold-start թեկնածու մոդելը /webllm/v1/models-ում նախքան worker ներդիրի բեռնումը, որպեսզի SDK սպառողները անմիջապես մոդել տեսնեն։
* Ուղղում՝ WebLLM-ը միացնել wpai_preferred_text_models filter-ին, որպեսզի AI Experiments հատկությունը ուղղորդվի դեպի browser engine, երբ մոդել է կազմաձևված։
* Բարելավված՝ cache-busting, բովանդակության նորմալացում և hardware-reference ուղղումներ, որոնք ի հայտ են եկել end-to-end փորձարկման ընթացքում։

## Տարբերակ 1.0.0 — Սկզբնական թողարկում
