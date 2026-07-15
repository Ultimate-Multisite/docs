---
id: wu_get_site_domain_and_path
title: Филтър - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Позволява на разработчиците да манипулират двойките домейн/пътеки.

Това може да бъде полезно за различни цели, като например внедряване на staging решение, работа с различни сървъри и т.н.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Текущ обект, съдържащ ключове за домейн и пътека. |
| $path_or_subdomain | `string` | Оригиналната пътека/поддомейн, предадена във функцията. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) на линия 235


## Връща {#returns}

Обект, съдържащ ключове за домейн и пътека.
