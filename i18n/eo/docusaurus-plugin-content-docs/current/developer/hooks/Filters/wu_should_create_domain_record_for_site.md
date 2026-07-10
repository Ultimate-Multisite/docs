---
id: wu_should_create_domain_record_for_site
title: Filtrilo - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtro: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filtras ĉu Ultimate Multisite kreu domajnan registron por nove kreita retejo.

Uzu ĉi tiun filtrilon por subpremi aŭ prokrasti aŭtomatan kreadon de domajna registro por retejoj kiuj uzas komunan bazan domajnon de pagformularo, internan gastiganton, aŭ domajnon kiun alia integriĝo administros aparte.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $create | `bool` | Ĉu la domajna registro estu kreita. |
| $site | `WP_Site` | La nove kreita reteja objekto. |

### Ekde {#since}

- 2.13.0

### Fonto {#source}

Difinita en `inc/functions/domain.php`.


## Revenoj {#returns}

Bulea valoro indikanta ĉu krei la domajnan registron.
