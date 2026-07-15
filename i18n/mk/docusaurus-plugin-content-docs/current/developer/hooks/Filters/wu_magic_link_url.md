---
id: wu_magic_link_url
title: Филтер - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url

Филтрирајте го генерираниот URL на магичната врска.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $magic_link | `string` | URL на магичната врска. |
| $user_id | `int` | ID на корисникот. |
| $site_id | `int` | ID на сајтот. |
| $redirect_to | `string` | URL за пренасочување. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) на линија 148
