---
id: wu_should_create_domain_record_for_site
title: Saringan - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Nyaring apa Ultimate Multisite kudu nggawe cathetan domain kanggo site sing lagi wae digawe.

Gunakake filter iki kanggo nyegah utawa nundha nggawe cathetan domain otomatis kanggo site sing nggunakake domain dhasar checkout-form bareng, host internal, utawa domain sing bakal dikelola kanthi kapisah dening integrasi liyane.

## Paramèter

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Apa cathetan domain kudu digawe. |
| $site | `WP_Site` | Objek site sing lagi wae digawe. |

### Wiwit

- 2.13.0

### Sumber

Ditetepake ing `inc/functions/domain.php`.


## Balikan

Boolean sing nuduhake apa kudu nggawe cathetan domain.
