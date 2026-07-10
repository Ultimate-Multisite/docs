---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtert, ob Ultimate Multisite en Domain-Datensatz fir eng nei erstallt Websäit soll uleeën.

Benotzt dëse Filter, fir d'automatesch Uleeë vun Domain-Datensätz fir Websäiten ze ënnerdrécken oder ze verréckelen, déi eng gedeelt Checkout-Formulaire-Basis-Domain, en internen Host oder eng Domain benotzen, déi eng aner Integratioun separat verwalte wäert.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $create | `bool` | Ob den Domain-Datensatz soll ugeluecht ginn. |
| $site | `WP_Site` | Den nei erstallte Websäit-Objet. |

### Zënter {#since}

- 2.13.0

### Quell {#source}

Definéiert an `inc/functions/domain.php`.


## Retourwäert {#returns}

Boolean, deen ugëtt, ob den Domain-Datensatz ugeluecht soll ginn.
