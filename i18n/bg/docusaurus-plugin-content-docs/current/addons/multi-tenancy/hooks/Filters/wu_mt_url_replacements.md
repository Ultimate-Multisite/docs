---
id: wu_mt_url_replacements
title: Филтър - wu_mt_url_replacements
sidebar_label: wu_mt_url_replacements
_i18n_hash: 2a3e1ab7bb695958155a426bfb7fce2b
---
# Филтър: wu_mt_url_replacements {#filter-wumturlreplacements}

Филтрира двойките за заместване на URL адреси.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $replacements | `array` | Текущ набор от двойки за заместване. |
| $old_url | `string` | Старият URL адрес. |
| $new_url | `string` | Новият URL адрес. |
| $blog_id | `int` | ID на блога. |

### От {#since}

- 1.0.0
### Източник {#source}

Дефиниран в [`inc/migration/class-url-rewriter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-url-rewriter.php#L151) на линия 151
