---
title: Ultimate AI Connector za kompatibilne endpoint-e Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Dnevnik promjena za Ultimate AI Connector za kompatibilne endpoint-e

## Verzija 2.0.0 — Objavljeno 2026-04-24

* Novo: Podrška za više pružatelja — možete konfigurirati više AI endpoint-a i usmjeravati zahtjeve sa automatskim fallback-om između pružatelja.
* Popravak: Integracija Multi-provider SDK-a sa ispravnim ID-jima pružatelja, URL-ovima za registraciju i opsegom HTTP filtera po pružatelju.
* Popravak: Nova kartica pružatelja sada se automatski proširuje pri dodavanju; implementiran je *cache busting* na ažuriranju plugin-a.
* Popravak: Dinamički namespace klase pružatelja za `eval()` i automatsko proširivanje za nove dodane pružatelje.
* Popravak: Koristi stabilne komponente Card/CardBody/CardHeader/CardDivider (više nisu eksperimentalne) za kompatibilnost sa WordPress 6.9+.
* Popravak: Zamijenjen je nedefinisani DragHandle unicode grip ikonom za povlačenje i ponovno uređenje pružatelja.
* Popravak: Uklonjen je blokirajući HTTP zahtjev koji je se izvršavao pri svakom učitavanju stranice.
* Unapređeno: Radni tokovi GitHub Actions nadograđeni na Node.js 24.

## Verzija 1.0.0 — Prva izdanje
