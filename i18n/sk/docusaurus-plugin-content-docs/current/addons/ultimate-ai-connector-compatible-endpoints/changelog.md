---
title: Denník zmien Ultimate AI Connector pre kompatibilné koncové body
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Zoznam zmien Ultimate AI Connector for Compatible Endpoints

## Verzia 2.0.0 — Vydané 2026-04-24

* Nové: Podpora viacerých poskytovateľov — nakonfigurujte viacero AI endpointov a smerujte požiadavky s automatickým fallbackom naprieč poskytovateľmi.
* Oprava: Integrácia multi-provider SDK so správnymi ID poskytovateľov, registračnými URL a rozsahom HTTP filtra pre každého poskytovateľa.
* Oprava: Nová karta poskytovateľa sa teraz po pridaní automaticky rozbalí; zrušenie cache skriptov pri aktualizácii pluginu.
* Oprava: Dynamický namespace triedy poskytovateľa pre eval() a automatické rozbaľovanie pre novo pridaných poskytovateľov.
* Oprava: Používa stabilné komponenty Card/CardBody/CardHeader/CardDivider (už nie experimentálne) pre kompatibilitu s WordPress 6.9+.
* Oprava: Nahradený nedefinovaný DragHandle ikonou unicode grip pre presúvanie poskytovateľov na zmenu poradia.
* Oprava: Odstránená blokujúca HTTP požiadavka, ktorá sa spúšťala pri každom načítaní stránky.
* Vylepšené: Workflows GitHub Actions aktualizované na Node.js 24.

## Verzia 1.0.0 — Prvé vydanie
