---
id: wu_checkout_form_base_domains
title: Saringan - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Nyaring domain dasar formulir pamayaran babarengan anu henteu kedah jadi rékaman domain anu dipetakeun.

Paké filter ieu nalika hiji integrasi nyayogikeun domain dasar tambahan pikeun widang **URL Situs** formulir pamayaran. Domain anu dipulangkeun ku filter ieu dianggap salaku host pendaptaran babarengan tibatan domain khusus per-situs.

## Paraméter {#parameters}

| Nami | Tipe | Pedaran |
|------|------|-------------|
| $domains | `array` | Domain dasar babarengan anu dikumpulkeun tina konfigurasi formulir pamayaran. |

### Ti Saprak {#since}

- 2.13.0

### Sumber {#source}

Ditetepkeun dina `inc/functions/domain.php`.


## Mulangkeun {#returns}

Array domain dasar formulir pamayaran anu geus dinormalisasi.
