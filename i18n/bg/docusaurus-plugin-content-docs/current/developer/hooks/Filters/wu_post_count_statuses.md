---
id: wu_post_count_statuses
title: Филтър - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Филтър: wu_post_count_statuses {#filter-wupostcountstatuses}

Позволява на разработчиците на плагини да променят кои статуси на публикации трябва да бъдат пресчитани. По подразбиране се брои публикациите със статуси "published" (публикувани) и "private" (частни).

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $post_status | `array` | Списъкът от статуси на публикациите |
| $post_type | `string` | Слаг на типа на публикациите |

### От {#since}

- 1.9.1
### Източник {#source}

Дефиниран в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) на ред 119


## Връща {#returns}
Нов масив от статуси на публикациите
