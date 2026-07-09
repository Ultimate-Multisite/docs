---
id: wu_checkout_form_base_domains
title: Lim - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Lim: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Lim cov base domain ntawm checkout-form uas siv koom ua ke kom tsis txhob dhau los ua mapped-domain records.

Siv filter no thaum ib qho integration muab base domain ntxiv rau checkout form **URL ntawm lub site** fields. Cov domain uas filter no xa rov qab raug saib tias yog cov host rau kev sau npe siv koom ua ke, tsis yog custom domain rau ib lub site zuj zus.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Cov base domain siv koom ua ke uas sau tau los ntawm checkout form configuration. |

### Txij thaum {#since}

- 2.13.0

### Source {#source}

Teev nyob rau hauv `inc/functions/domain.php`.


## Returns {#returns}

Array ntawm cov checkout-form base domain uas twb normalize lawm.
