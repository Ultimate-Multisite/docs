---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Umožňuje vývojárom filtrovať admin oznámenia pridané Ultimate Multisite.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $notices | `array` | Zoznam oznámení pre daný panel. |
| $all_notices | `array` | Zoznam pridaných oznámení, rozdelených podľa panela. |
| $panel | `string` | Panel, pre ktorý sa majú načítať oznámenia. |
| $filter | `string` | Či boli odfiltrovane zrušiteľné oznámenia. |
| $dismissed_messages | `array` | Zoznam kľúčov zrušených oznámení. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) na riadku 121


## Návratová hodnota {#returns}
