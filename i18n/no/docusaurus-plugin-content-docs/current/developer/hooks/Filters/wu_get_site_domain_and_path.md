---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Lar utviklere manipulere domene/sti-parene.

Dette kan være nyttig for en rekke ting, for eksempel implementering av en slags staging-løsning, forskjellige servere, osv.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $d | `object` | Det nåværende objektet som inneholder nøklene for domene og sti. |
| $path_or_subdomain | `string` | Den opprinnelige stien/underdomenet som ble sendt til funksjonen. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) på linje 235


## Returnerer
Et objekt som inneholder nøklene for domene og sti.
