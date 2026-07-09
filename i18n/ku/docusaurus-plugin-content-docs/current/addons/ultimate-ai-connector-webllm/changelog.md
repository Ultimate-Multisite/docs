---
title: Ultimate AI Connector for WebLLM Dîroka guherandinan
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector ji bo WebLLM Changelog {#ultimate-ai-connector-for-webllm-changelog}

## Versiyon 1.1.0 — Di 2026-04-09 de hat berdan {#version-110--released-on-2026-04-09}

* Nû: Widgeta chatê ya livbar bi nîşanderê rewşa admin-bar — her bikarhênerekî têketî dikare rasterast ji front end daxwazê bide LLM ya li aliyê browserê.
* Nû: Dema xebitandinê ya SharedWorker — engine ya MLC niha di SharedWorker de dixebite, da ku çend tab yek danişîna GPU hevpar bikin, ne ku li ser wê şer bikin.
* Nû: Navgira apiFetch middleware — daxwazên WordPress REST ku li gorî şêwaza AI Client SDK tên, bê eşkere têne şandin brokera WebLLM ya herêmî; pêdivî bi gera HTTP ya loopback tune.
* Nû: UI ya mîhengên widgetê di panela Connector de, ji bo vekirin/girtina widgeta chatê û mîhengkirina tevgera auto-prompt.
* Rastkirin: Backend a cache ya IndexedDB bi zorê bikar bîne, da ku daxistinên giraniya modelê piştî redirectên HuggingFace xet CDN ku rêya standard a Cache API dişikînin, bimînin.
* Rastkirin: Ji bo modelên embedding, derbasbûna context_window KV-cache derbas neke (wan decoder tune û ew derbasbûn dibû sedema çewtiyek di dema xebitandinê de).
* Rastkirin: Berî ku taba workerê bar bibe, modela namzed a destpêka sar di /webllm/v1/models de nîşan bide, da ku bikarhênerên SDK yekser modelek bibînin.
* Rastkirin: WebLLM bike nav filtera wpai_preferred_text_models, da ku taybetmendiya AI Experiments, dema modelek hatibe mîhengkirin, rê bide engine ya browserê.
* Başkirin: Rastkirinên cache-busting, asayîkirina naverokê, û referansa hardware ku di ceribandina serî-ta-dawî de derketin holê.

## Versiyon 1.0.0 — Berdana destpêkê {#version-100--initial-release}
