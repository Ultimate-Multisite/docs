---
title: Cofnod newidiadau Ultimate AI Connector ar gyfer WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Fersiwn 1.1.0 — Rhyddhawyd ar 2026-04-09

* Newydd: Teclyn sgwrsio arnofiol gyda dangosydd statws bar gweinyddol — gall unrhyw ddefnyddiwr sydd wedi mewngofnodi annog LLM ochr y porwr yn uniongyrchol o'r pen blaen.
* Newydd: Runtime SharedWorker — mae'r injan MLC bellach yn rhedeg mewn SharedWorker fel bod sawl tab yn rhannu un sesiwn GPU yn hytrach na brwydro drosti.
* Newydd: Atalydd middleware apiFetch — mae ceisiadau WordPress REST sy'n cyfateb i batrwm AI Client SDK yn cael eu llwybro'n dryloyw i'r brocer WebLLM lleol, heb fod angen taith gron HTTP loopback.
* Newydd: UI gosodiadau teclyn yn y panel Connector ar gyfer toglo'r teclyn sgwrsio a ffurfweddu ymddygiad awto-annog.
* Cywiriad: Gorfodi backend storfa IndexedDB fel bod lawrlwythiadau pwysau model yn goroesi ailgyfeiriadau HuggingFace xet CDN sy'n torri llwybr diofyn Cache API.
* Cywiriad: Hepgor gwrthwneud context_window KV-cache ar gyfer modelau embedding (nid oes ganddynt ddatgodiwr ac achosodd y gwrthwneud wall runtime).
* Cywiriad: Hysbysebu'r model ymgeisydd cold-start yn /webllm/v1/models cyn i dab y worker lwytho, fel bod defnyddwyr SDK yn gweld model ar unwaith.
* Cywiriad: Bachu WebLLM i mewn i'r hidlydd wpai_preferred_text_models fel bod y nodwedd AI Experiments yn llwybro i injan y porwr pan fydd model wedi'i ffurfweddu.
* Wedi'i wella: Cache-busting, normaleiddio cynnwys, a chywiriadau cyfeiriad caledwedd a amlygwyd yn ystod profion pen-i-ben.

## Fersiwn 1.0.0 — Rhyddhad Cychwynnol
