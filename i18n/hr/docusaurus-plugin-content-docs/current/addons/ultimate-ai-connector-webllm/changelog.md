---
title: Dnevnik promjena za Ultimate AI Connector for WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector za WebLLM dnevnik promjena {#ultimate-ai-connector-for-webllm-changelog}

## Verzija 1.1.0 — Objavljeno 2026-04-09 {#version-110--released-on-2026-04-09}

* Novo: Plutajući chat widget s indikatorom statusa admin trake — svaki prijavljeni korisnik može promptati LLM na strani preglednika izravno s prednjeg sučelja.
* Novo: SharedWorker runtime — MLC engine sada radi u SharedWorkeru, tako da više kartica dijeli jednu GPU sesiju umjesto da se nadmeću za nju.
* Novo: apiFetch middleware interceptor — WordPress REST zahtjevi koji odgovaraju obrascu AI Client SDK transparentno se usmjeravaju na lokalni WebLLM broker, bez potrebe za povratnim HTTP obilaskom.
* Novo: UI postavki widgeta u panelu Connector za uključivanje chat widgeta i konfiguriranje ponašanja automatskog prompta.
* Ispravak: Forsiranje IndexedDB cache backenda kako bi preuzimanja težina modela preživjela HuggingFace xet CDN preusmjeravanja koja prekidaju zadani put Cache API-ja.
* Ispravak: Preskakanje context_window KV-cache nadjačavanja za embedding modele (nemaju dekoder i nadjačavanje je uzrokovalo runtime pogrešku).
* Ispravak: Oglašavanje kandidatskog modela za hladni start u /webllm/v1/models prije nego što se worker kartica učita, tako da SDK korisnici odmah vide model.
* Ispravak: Povezivanje WebLLM-a s filtrom wpai_preferred_text_models kako bi značajka AI Experiments usmjeravala na engine preglednika kada je model konfiguriran.
* Poboljšano: Ispravci za zaobilaženje predmemorije, normalizaciju sadržaja i hardverske reference otkriveni tijekom end-to-end testiranja.

## Verzija 1.0.0 — Početno izdanje {#version-100--initial-release}
