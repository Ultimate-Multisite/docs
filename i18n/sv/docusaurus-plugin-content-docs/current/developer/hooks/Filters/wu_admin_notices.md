---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Låter utvecklare filtrera administrativa meddelanden som läggs till av Ultimate Multisite.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $notices | `array` | Lista över meddelanden för den specifika panelen. |
| $all_notices | `array` | Lista över meddelanden som har lagts till, separerade efter panel. |
| $panel | `string` | Panel som ska hämta meddelandena från. |
| $filter | `string` | Om de borttagbara meddelandena har filtrerats bort. |
| $dismissed_messages | `array` | Lista över nycklar för borttagna meddelanden. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) på rad 121


## Returnerar {#returns}
