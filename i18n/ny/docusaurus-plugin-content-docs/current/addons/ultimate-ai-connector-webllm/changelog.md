---
title: Ultimate AI Connector for WebLLM Mbiri ya Zosintha
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector ya WebLLM Changelog

## Mtundu 1.1.0 — Yatulutsidwa pa 2026-04-09

* Chatsopano: Chida cha macheza choyandama chokhala ndi chizindikiro cha mkhalidwe wa admin-bar — wogwiritsa ntchito aliyense amene walowa akhoza kufunsa LLM ya mbali ya browser mwachindunji kuchokera kutsogolo.
* Chatsopano: SharedWorker runtime — engine ya MLC tsopano imayenda mu SharedWorker kotero ma tab angapo amagawana session imodzi ya GPU m'malo momenyana nayo.
* Chatsopano: apiFetch middleware interceptor — zopempha za WordPress REST zomwe zikugwirizana ndi kapangidwe ka AI Client SDK zimatumizidwa mobisa ku broker wa WebLLM wakomweko, palibe kufunika kwa loopback HTTP round-trip.
* Chatsopano: UI ya makonda a chida mu panel ya Connector yosinthira kuyatsa/kuzimitsa chida cha macheza ndi kukonza khalidwe la auto-prompt.
* Kukonza: Kukakamiza IndexedDB cache backend kuti kutsitsa ma weight a model kupulumuke ma redirect a HuggingFace xet CDN omwe amasokoneza njira yokhazikika ya Cache API.
* Kukonza: Kudumpha context_window KV-cache override kwa embedding models (zilibe decoder ndipo override inayambitsa cholakwika cha runtime).
* Kukonza: Kulengeza model ya cold-start candidate mu /webllm/v1/models tab ya worker isanakwane kulowa, kotero ogwiritsa ntchito SDK amaona model nthawi yomweyo.
* Kukonza: Kulumikiza WebLLM mu filter ya wpai_preferred_text_models kuti mbali ya AI Experiments itumize ku engine ya browser model ikakonzedwa.
* Zakonzedwa bwino: Kukonza cache-busting, content normalisation, ndi hardware-reference komwe kunawonekera pa kuyesa kwa end-to-end.

## Mtundu 1.0.0 — Kutulutsidwa Koyamba
