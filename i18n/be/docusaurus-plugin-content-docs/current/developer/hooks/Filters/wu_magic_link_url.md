---
id: wu_magic_link_url
title: Фільтр - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url

Фільтруе URL сгенераванага magic link.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $magic_link | `string` | URL magic link. |
| $user_id | `int` | ID карыстальніка. |
| $site_id | `int` | ID сайта. |
| $redirect_to | `string` | URL перанакіравання. |

### З {#since}

- 2.0.0
### Паход {#source}

Вызначаны ў [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) на 148-й кропцы.
