---
id: wu_post_count_statuses
title: Filtr - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtr: wu_post_count_statuses {#filter-wupostcountstatuses}

Pozwala deweloperom pluginów na zmianę statusów postów, które mają być brane pod uwagę. Domyślnie liczone są posty typu „opublikowany” (published) i „prywatny” (private).

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $post_status | `array` | Lista statusów postów |
| $post_type | `string` | Slug typu postu |

### Od {#since}

- 1.9.1
### Źródło {#source}

Zdefiniowane w [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) w linii 119


## Zwraca {#returns}
Nową tablicę statusów postów
