---
id: wu_checkout_form_base_domains
title: Filtrum - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtrum: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtrat dominia basica communia formularii solutionis quae in registra dominiorum adscriptorum verti non debent.

Hoc filtrum adhibe cum integratio dominia basica addita praebet pro campis **URL situs** formularii solutionis. Dominia ab hoc filtro reddita tractantur ut hospites adnotationis communes potius quam dominia propria singulorum situum.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $domains | `array` | Dominia basica communia ex configuratione formularii solutionis collecta. |

### Ab {#since}

- 2.13.0

### Fons {#source}

Definitum in `inc/functions/domain.php`.


## Reddit {#returns}

Series dominiorum basium formularii solutionis normalizatorum.
