---
id: wu_checkout_form_base_domains
title: Filtar - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Filtrira zajedničke osnovne domene obrasca za checkout koje ne bi trebale postati zapisi mapiranih domena.

Upotrijebite ovaj filter kada integracija pruža dodatne osnovne domene za polja **Site URL** obrasca za checkout. Domene koje ovaj filter vrati tretiraju se kao zajednički hostovi za registraciju umjesto kao prilagođene domene po siteu.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $domains | `array` | Zajedničke osnovne domene prikupljene iz konfiguracije obrasca za checkout. |

### Od {#since}

- 2.13.0

### Izvor {#source}

Definirano u `inc/functions/domain.php`.


## Povratna vrijednost {#returns}

Niz normaliziranih osnovnih domena obrasca za checkout.
