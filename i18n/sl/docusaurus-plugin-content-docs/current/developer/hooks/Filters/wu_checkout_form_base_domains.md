---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtrira skupne osnovne domene obrazca za zaključek nakupa, ki ne smejo postati zapisi preslikanih domen.

Ta filter uporabite, ko integracija zagotavlja dodatne osnovne domene za polja **Site URL** obrazca za zaključek nakupa. Domene, ki jih vrne ta filter, se obravnavajo kot skupni gostitelji za registracijo namesto kot prilagojene domene za posamezno spletno mesto.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $domains | `array` | Skupne osnovne domene, zbrane iz konfiguracije obrazca za zaključek nakupa. |

### Od različice {#since}

- 2.13.0

### Vir {#source}

Določeno v `inc/functions/domain.php`.


## Vrne {#returns}

Polje normaliziranih osnovnih domen obrazca za zaključek nakupa.
