---
title: Ultimate AI Connector for WebLLM – zoznam zmien
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Changelog

## Verzia 1.1.0 — Vydaná 2026-04-09 {#version-110--released-on-2026-04-09}

* Nové: Plávajúci chatovací widget s indikátorom stavu v admin paneli — každý prihlásený používateľ môže zadávať prompty pre LLM na strane prehliadača priamo z front endu.
* Nové: Runtime SharedWorker — MLC engine teraz beží v SharedWorker, takže viaceré karty zdieľajú jednu GPU reláciu namiesto toho, aby o ňu súperili.
* Nové: Interceptor middleware apiFetch — WordPress REST požiadavky, ktoré zodpovedajú vzoru AI Client SDK, sú transparentne smerované do lokálneho WebLLM brokera, bez potreby loopback HTTP obojsmernej cesty.
* Nové: UI nastavení widgetu v paneli Connector na prepínanie chatovacieho widgetu a konfiguráciu správania automatických promptov.
* Oprava: Vynútenie backendu vyrovnávacej pamäte IndexedDB, aby sťahovania váh modelu prežili presmerovania HuggingFace xet CDN, ktoré narúšajú predvolenú cestu Cache API.
* Oprava: Preskočenie prepísania KV-cache context_window pre embedding modely (nemajú žiadny decoder a prepísanie spôsobovalo runtime chybu).
* Oprava: Inzerovanie kandidátskeho modelu cold-start v /webllm/v1/models ešte pred načítaním karty workera, aby spotrebitelia SDK okamžite videli model.
* Oprava: Napojenie WebLLM na filter wpai_preferred_text_models, aby funkcia AI Experiments smerovala na engine prehliadača, keď je model nakonfigurovaný.
* Vylepšené: Opravy cache-bustingu, normalizácie obsahu a hardvérových referencií odhalené počas end-to-end testovania.

## Verzia 1.0.0 — Úvodné vydanie {#version-100--initial-release}
