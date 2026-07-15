---
title: Ceanglaiche AI Deireannach airson WebLLM – Loga nan atharrachaidhean
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Loga nan atharrachaidhean

## Tionndadh 1.1.0 — Air fhoillseachadh air 2026-04-09 {#version-110--released-on-2026-04-09}

* Ùr: Widget cabadaich fleòdrach le comharra inbhe sa bhàr rianachd — faodaidh cleachdaiche sam bith a tha air logadh a-steach brosnachadh a thoirt don LLM air taobh a’ bhrabhsair gu dìreach bhon aghaidh.
* Ùr: Àm-ruith SharedWorker — tha an einnsean MLC a-nis a’ ruith ann an SharedWorker gus am bi iomadh taba a’ co-roinn aon seisean GPU an àite a bhith a’ sabaid air a shon.
* Ùr: Eadar-ghlacadair middleware apiFetch — thèid iarrtasan WordPress REST a tha a’ freagairt air pàtran AI Client SDK a stiùireadh gu follaiseach chun broker WebLLM ionadail, gun fheum air turas cruinn HTTP loopback.
* Ùr: UI roghainnean widget ann am pannal Connector airson widget na cabadaich a chur air no dheth agus giùlan auto-prompt a rèiteachadh.
* Ceartachadh: Cuir backend tasgadan IndexedDB an sàs gu h-èigneachail gus am mair luchdadh a-nuas cuideaman modail às dèidh ath-sheòlaidhean HuggingFace xet CDN a bhriseas slighe bunaiteach Cache API.
* Ceartachadh: Leum thairis air override KV-cache context_window airson modailean embedding (chan eil decoder aca agus dh’adhbharaich an override mearachd àm-ruith).
* Ceartachadh: Sanasaich am modail tagraiche cold-start ann an /webllm/v1/models mus bi taba an worker air luchdadh, gus am faic luchd-cleachdaidh SDK modail sa bhad.
* Ceartachadh: Ceangail WebLLM ris a’ chriathrag wpai_preferred_text_models gus am bi feart AI Experiments a’ stiùireadh chun einnsean brabhsair nuair a tha modail air a rèiteachadh.
* Leasaichte: Ceartachaidhean cache-busting, àbhaisteachadh susbaint, agus iomradh bathar-cruaidh a nochd rè deuchainn bho cheann gu ceann.

## Tionndadh 1.0.0 — Foillseachadh tùsail {#version-100--initial-release}
