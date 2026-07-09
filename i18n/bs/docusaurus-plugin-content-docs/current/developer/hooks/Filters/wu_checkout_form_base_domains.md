---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Filtrira zajedničke bazne domene checkout obrasca koje ne bi trebale postati zapisi mapirane domene.

Koristite ovaj filter kada integracija pruža dodatne bazne domene za **Site URL** polja checkout obrasca. Domene koje ovaj filter vrati tretiraju se kao zajednički hostovi za registraciju umjesto kao prilagođene domene po siteu.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $domains | `array` | Zajedničke bazne domene prikupljene iz konfiguracije checkout obrasca. |

### Od verzije

- 2.13.0

### Izvor

Definirano u `inc/functions/domain.php`.


## Vraća

Niz normaliziranih baznih domena checkout obrasca.
