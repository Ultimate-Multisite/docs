---
id: wu_use_domain_mapping
title: Lim - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Txiav txim seb puas yuav siv ib qho mapping

Feem ntau, koj yuav xav tso cai tsuas yog cov mapping uas active xwb thiaj siv tau. Txawm li ntawd los, yog koj xav siv logic uas siab dua, lossis tso cai rau cov domain uas tsis active los map tau thiab, ces tsuas filter ntawm no xwb.

## Cov parameter {#parameters}

| Npe | Hom | Lus piav qhia |
|------|------|-------------|
| $is_active | `bool` | Puas yuav saib qhov mapping no tias active? |
| $mapping | `\Domain` | Mapping uas peb tab tom tshuaj xyuas |
| $domain | `string` |  |

### Qhov chaw los {#source}

Tau txhais hauv [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ntawm kab 391
