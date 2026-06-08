---
title: Ultimate AI Connector za WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector za WebLLM Changelog

## Verzija 1.1.0 — Objavljeno 2026-04-09

* Novo: Plivajući chat widget sa indikatorom statusa u admin-baru — bilo koji prijavljeni korisnik može direktno pokrenuti (prompt) LLM na strani preglednika sa prednjeg kraja (front end).
* Novo: SharedWorker runtime — MLC engine sada radi u SharedWorker-u, tako da više kartica (tabs) deli jednu GPU sesiju umjesto da se međusobno bore za nju.
* Novo: apiFetch middleware interceptor — WordPress REST zahtjevi koji odgovaraju obrascu AI Client SDK transparentno se usmjeravaju na lokalni WebLLM broker, bez potrebe za HTTP round-tripom (povratnim putem) loopback-a.
* Novo: UI za postavke widgeta u Connector panelu za uključivanje/isključivanje chat widgeta i konfigurisanje ponašanja automatskog prompta.
* Popravak: Primorava korištenje IndexedDB cache backend-a kako bi preuzimanja težina modela preživjela HuggingFace xet CDN preusmjeravanja koja pokreću (break) podrazumevani Cache API put.
* Popravak: Za modelima za ugradnju (embedding models) preskače se prepisivanje (override) context_window KV-cache-a (jer nemaju dekoder, a prepisivanje je uzrokovalo runtime grešku).
* Popravak: Oglašava se kandidat model za hladni start (cold-start) na /webllm/v1/models prije nego što se tab radnika (worker tab) učita, tako da potrošači SDK-a odmah vide model.
* Popravak: Povezuje se WebLLM sa filterom wpai_preferred_text_models kako bi funkcija AI Experiments usmjerila na preglednički engine kada je model konfigurisan.
* Poboljšano: Popravci za cache-busting, normalizaciju sadržaja i reference na hardver otkriveni su tokom end-to-end testiranja.

## Verzija 1.0.0 — Prva izdanje
