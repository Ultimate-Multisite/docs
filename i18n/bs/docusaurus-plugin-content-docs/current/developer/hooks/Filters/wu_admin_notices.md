---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Omogućava programerima da filtriraju administratorske obavijesti koje je dodao Ultimate Multisite.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $notices | `array` | Lista obavijesti za određeni panel. |
| $all_notices | `array` | Lista dodanih obavijesti, razdvojena po panelima. |
| $panel | `string` | Panel za dohvaćanje obavijesti. |
| $filter | `string` | Ako su obavijesti koje se mogu zatvoriti filtrirane. |
| $dismissed_messages | `array` | Lista ključeva obavijesti koje su zatvorene. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) na liniji 121


## Vraća {#returns}
