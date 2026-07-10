---
id: wu_checkout_form_base_domains
title: Filtru - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtru: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Jiffiltra d-dominji bażiċi kondiviżi tal-formola taċ-checkout li m’għandhomx isiru records ta’ dominji mmappjati.

Uża dan il-filtru meta integrazzjoni tipprovdi dominji bażiċi addizzjonali għall-fields **URL tas-sit** tal-formola taċ-checkout. Id-dominji rritornati minn dan il-filtru jiġu ttrattati bħala hosts kondiviżi tar-reġistrazzjoni minflok dominji personalizzati għal kull sit.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $domains | `array` | Dominji bażiċi kondiviżi miġbura mill-konfigurazzjoni tal-formola taċ-checkout. |

### Minn {#since}

- 2.13.0

### Sors {#source}

Iddefinit f’`inc/functions/domain.php`.


## Jirritorna {#returns}

Array ta’ dominji bażiċi normalizzati tal-formola taċ-checkout.
