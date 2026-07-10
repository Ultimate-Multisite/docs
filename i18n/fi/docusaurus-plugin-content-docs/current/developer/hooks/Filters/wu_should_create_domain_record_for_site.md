---
id: wu_should_create_domain_record_for_site
title: Suodatin - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Suodatin: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Suodattaa, pitäisikö Ultimate Multisite luoda verkkotunnustietue vastikään luodulle sivustolle.

Käytä tätä suodatinta estääksesi tai viivästyttääksesi automaattista verkkotunnustietueen luontia sivustoille, jotka käyttävät jaettua checkout-lomakkeen perusverkkotunnusta, sisäistä isäntää tai verkkotunnusta, jota toinen integraatio hallitsee erikseen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Luodaanko verkkotunnustietue. |
| $site | `WP_Site` | Vastikään luotu sivusto-objekti. |

### Alkaen versiosta {#since}

- 2.13.0

### Lähde {#source}

Määritelty tiedostossa `inc/functions/domain.php`.


## Palauttaa {#returns}

Totuusarvo, joka ilmaisee, luodaanko verkkotunnustietue.
