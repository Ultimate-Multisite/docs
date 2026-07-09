---
title: Rangitaki huringa o te Tūhono AI Tino mō WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector mō WebLLM Rangitaki Panonitanga

## Putanga 1.1.0 — I tukuna i te 2026-04-09

* Hou: He widget kōrerorero mānu me te tohu tūnga admin-bar — ka taea e tētahi kaiwhakamahi kua takiuru te tono tika ki te LLM taha-pūtirotiro mai i te pito mua.
* Hou: SharedWorker runtime — ināianei ka rere te pūkaha MLC i roto i tētahi SharedWorker kia tiritiri ai ngā ripa maha i tētahi wātū GPU kotahi, kaua e tauwhāinga mōna.
* Hou: apiFetch middleware interceptor — ko ngā tono WordPress REST e ōrite ana ki te tauira AI Client SDK ka aratakina māhorahora ki te kaihokohoko WebLLM paetata, kāore he haerenga HTTP loopback e hiahiatia.
* Hou: UI tautuhinga widget i te paewhiri Connector mō te whakakā/whakaweto i te widget kōrerorero me te whirihora i te whanonga auto-prompt.
* Whakatika: Whakamahia pēhitia te backend keteroki IndexedDB kia ora tonu ai ngā tikiake taumaha tauira i ngā anga HuggingFace xet CDN e whati ai te ara Cache API taunoa.
* Whakatika: Tīpokatia te takahi KV-cache context_window mō ngā tauira embedding (kāore ō rātou pūwetewaehere, ā, nā te takahi i hua ai he hapa wā-rere).
* Whakatika: Whakapāho i te tauira kaitono tīmatanga-makariri ki /webllm/v1/models i mua i te utanga o te ripa worker, kia kite wawe ai ngā kiritaki SDK i tētahi tauira.
* Whakatika: Honoa a WebLLM ki te tātari wpai_preferred_text_models kia aratakina ai te āhuatanga AI Experiments ki te pūkaha pūtirotiro ina kua whirihoratia tētahi tauira.
* Kua whakapai ake: Ngā whakatikatika cache-busting, content normalisation, me te tohutoro-pūmārō i puta ake i te whakamātautau pito-ki-te-pito.

## Putanga 1.0.0 — Tukunga Tuatahi
