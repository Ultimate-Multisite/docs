---
title: Lenane la diphetoho la Sehokedi sa Ultimate AI bakeng sa WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector bakeng sa Lenane la Diphetoho la WebLLM

## Version 1.1.0 — E lokollotswe ka 2026-04-09

* E ntjha: Sesebediswa sa puisano se phaphametseng se nang le sesupo sa boemo sa admin-bar — mosebedisi ofe kapa ofe ya keneng a ka botsa LLM ya lehlakoreng la sebatli ka kotloloho ho tswa karolong e ka pele.
* E ntjha: Nako ya tshebetso ya SharedWorker — enjene ya MLC jwale e sebetsa ho SharedWorker hore dithebe tse ngata di arolelane kopano e le nngwe ya GPU ho ena le ho e lwantshanela.
* E ntjha: Mosweri wa mahareng wa apiFetch — dikopo tsa WordPress REST tse tshwanelang paterone ya AI Client SDK di fetisetswa pepeneneng ho moemedi wa lehae wa WebLLM, ho sa hlokahale leeto la ho potoloha la loopback HTTP.
* E ntjha: UI ya di-setting tsa sesebediswa phanele ya Connector bakeng sa ho bulela/k tima sesebediswa sa puisano le ho hlophisa boitshwaro ba auto-prompt.
* Tokiso: Qobella mokokotlo wa cache wa IndexedDB hore ditholollo tsa boima ba model di pholohe diphetiso tsa HuggingFace xet CDN tse senyang tsela ya kamehla ya Cache API.
* Tokiso: Tlola phetoho ya context_window KV-cache bakeng sa di-model tsa embedding (ha di na decoder mme phetoho e bakile phoso ya nako ya tshebetso).
* Tokiso: Phatlalatsa model ya kgetho ya cold-start ho /webllm/v1/models pele tab ya worker e laetse, hore basebedisi ba SDK ba bone model hanghang.
* Tokiso: Hokela WebLLM ho filter ya wpai_preferred_text_models hore karolo ya AI Experiments e fetisetse ho enjene ya sebatli ha model e hlophisitswe.
* E ntlafaditswe: Ho thibela cache, ho tlwaelanya dikahare, le ditokiso tsa hardware-reference tse hlahileng nakong ya teko ya ho tloha qetellong ho ya qetellong.

## Version 1.0.0 — Tokollo ya Pele
