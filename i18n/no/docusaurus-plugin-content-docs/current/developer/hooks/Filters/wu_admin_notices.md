---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Lar utviklere filtrere administrasjonsvarsler lagt til av Ultimate Multisite.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $notices | `array` | Liste over varsler for det aktuelle panelet. |
| $all_notices | `array` | Liste over varsler som er lagt til, adskilt etter panel. |
| $panel | `string` | Panelet varslene skal hentes fra. |
| $filter | `string` | Indikerer om de varslene som kan fjernes, er filtrert bort. |
| $dismissed_messages | `array` | Liste over nøkler for varsler som er fjernet. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) på linje 121


## Returnerer {#returns}
