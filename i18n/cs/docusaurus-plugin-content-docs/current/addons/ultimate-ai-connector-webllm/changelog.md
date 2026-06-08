---
title: Ultimate AI Connector pro WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector pro WebLLM Seznam změn

## Verze 1.1.0 — Vydáno 9. 2026

* Novinka: Plakující chatovací widget s indikátorem stavu v admin panelu — jakýkoli přihlášený uživatel může přímo z frontendu odeslat dotaz k lokálnímu LLM.
* Novinka: SharedWorker prostředí — engine MLC nyní běží v SharedWorkeru, takže více záložek sdílí jednu GPU sesí, místo aby si na ni bojovaly.
* Novinka: apiFetch middleware interceptor — Žádosti WordPress REST, které odpovídají vzoru AI Client SDK, jsou průhledně směrovány k lokálnímu WebLLM brokerovi, což eliminuje nutnost zpětné cesty HTTP v rámci lokální smyčky.
* Novinka: Uživatelské rozhraní pro nastavení widgetu v panelu Connectoru, které umožňuje přepínat chat widget a konfigurovat chování automatického dotazu.
* Oprava: Nutí použití cache backendu IndexedDB, aby stahování vah modelů přežilo přesměrování z HuggingFace xet CDN, které narušovalo výchozí cestu Cache API.
* Oprava: Překonání (override) KV-cache pro modely embeddingů je nyní ošetřeno (nejsou potřeba dekodér a překrytí způsobovalo chybu při běhu).
* Oprava: Model kandidát pro chladní start je nyní deklarován v /webllm/v1/models před načtením záložky workeru, takže uživatelé SDK uvidí model ihned.
* Oprava: WebLLM je nyní připojen (hookován) k filtru wpai_preferred_text_models, takže funkce AI Experiments směřuje k prohlížečovému enginu, když je nakonfigurován model.
* Vylepšeno: Opravy související s cache-bustingem, normalizací obsahu a referencemi na hardware byly zjištěny během end-to-end testování.

## Verze 1.0.0 — První vydání
