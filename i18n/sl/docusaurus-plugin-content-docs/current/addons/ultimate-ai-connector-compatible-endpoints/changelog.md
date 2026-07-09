---
title: Dnevnik sprememb Ultimate AI Connector za združljive končne točke
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector za združljive endpoint-e Changelog

## Različica 2.0.0 — izdano 2026-04-24

* Novo: podpora za več ponudnikov — konfigurirajte več AI endpoint-ov in usmerjajte zahtevke z avtomatskim fallback-om med ponudniki.
* Popravek: integracija SDK za več ponudnikov s pravilnimi ID-ji ponudnikov, registracijskimi URL-ji in obsegom HTTP filtrov za posameznega ponudnika.
* Popravek: nova kartica ponudnika se zdaj ob dodajanju samodejno razširi; osveževanje script cache-a ob posodobitvi plugin-a.
* Popravek: dinamični namespace razreda ponudnika za eval() in vedenje samodejne razširitve za novo dodane ponudnike.
* Popravek: uporablja stabilne komponente Card/CardBody/CardHeader/CardDivider (niso več eksperimentalne) za združljivost z WordPress 6.9+.
* Popravek: zamenjan nedefiniran DragHandle z unicode ikono ročaja za vlečenje ponudnikov za spreminjanje vrstnega reda.
* Popravek: odstranjena blokirna HTTP zahteva, ki se je sprožila ob vsakem nalaganju strani.
* Izboljšano: workflow-i GitHub Actions nadgrajeni na Node.js 24.

## Različica 1.0.0 — začetna izdaja
