---
title: Orodha ya Mabadiliko ya Kiunganishi cha AI Kamili kwa WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Orodha ya Mabadiliko ya Ultimate AI Connector kwa WebLLM

## Version 1.1.0 — Iliachishwa tarehe 2026-04-09

* Jipya: Widget ya mazungumzo inayotembea na kiashiria cha hali kwenye admin-bar — mtumiaji yeyote aliyelogin anaweza kuuliza LLM iliyo kwenye browser moja kwa moja kutoka kwenye sehemu ya mbele (front end).
* Jipya: SharedWorker runtime — injini ya MLC sasa inatembea ndani ya SharedWorker, hivyo tab nyingi zinashiriki kikao kimoja cha GPU badala ya kupambana nalo.
* Jipya: apiFetch middleware interceptor — Maombi ya WordPress REST yanayolingana na mfumo wa AI Client SDK yanatumiwa kwa uwazi kwenda kwa broker wa WebLLM wa ndani, hivyo hakuna haja ya kurudiwa kwa HTTP.
* Jipya: UI ya mipangilio ya Widget kwenye sehemu ya Connector kwa ajili ya kuwasha/kuzima widget ya mazungumzo na kuweka mipangilio ya tabia ya auto-prompt.
* Marekebisho: Kuweka IndexedDB cache backend ili upakuaji wa uzito wa mfumo (model weight) ushindwe na upinduzi wa HuggingFace xet CDN ambao unavunja njia ya kawaida ya Cache API.
* Marekebisho: Kukwepa kubadilisha context_window KV-cache kwa ajili ya mifumo ya embedding (haipana decoder na kubadilisha hicho kilipelekea hitilafu ya wakati wa utendaji).
* Marekebisho: Kutangaza mfumo wa kandida wa kuanza baridi (cold-start) katika /webllm/v1/models kabla tab ya worker haijapakuliwa, ili watumiaji wa SDK waone mfumo mara moja.
* Marekebisho: Kuunganisha WebLLM kwenye filter ya wpai_preferred_text_models ili kipengele cha AI Experiments kielekeze kwenye injini ya browser wakati mfumo unapowekwa.
* Kuboresha: Marekebisho ya cache-busting, ukiunganishaji wa maudhui (content normalisation), na marekebisho ya marejeo ya vifaa (hardware-reference) yaliyogunduliwa wakati wa majaribio ya mwisho hadi mwisho (end-to-end testing).

## Version 1.0.0 — Uzinduzi wa Awali
