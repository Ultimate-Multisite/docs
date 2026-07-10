---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Lad udviklere filtrere admin-meddelelser tilføjet af Ultimate Multisite.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $notices | `array` | Liste over meddelelser for det pågældende panel. |
| $all_notices | `array` | Liste over tilføjede meddelelser, opdelt efter panel. |
| $panel | `string` | Panel til at hente meddelelserne. |
| $filter | `string` | Om de meddelelser, der kan afvises, er blevet filtreret fra. |
| $dismissed_messages | `array` | Liste over afviste meddelelsesnøgler. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) på linje 121


## Returnerer {#returns}
