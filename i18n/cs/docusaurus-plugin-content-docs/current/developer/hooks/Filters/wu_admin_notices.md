---
id: wu_admin_notices
title: Filtrační - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtrovanie: wu_admin_notices {#filter-wuadminnotices}

Umožňuje vývojářům filtrovat administrátorské oznámení přidávané Ultimate Multisite.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $notices | `array` | Seznam oznámení pro daný panel. |
| $all_notices | `array` | Seznam přidávaných oznámení, rozdělený podle panelu. |
| $panel | `string` | Panel, z kterého se mají oznámení získat. |
| $filter | `string` | Indikuje, zda byly oznámení, které lze zavřít, vyfiltrovány. |
| $dismissed_messages | `array` | Seznam klíčů oznámení, které byly zavřeny. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) na řádku 121


## Vrací {#returns}
