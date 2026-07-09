---
id: wu_gocardless_cleanup_pending_site
title: Фільтр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Фільтр: wu_gococardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Выконваецца перад выбываннем сироты сайта ў статусе адчыненні, калі адбываецца адмяжоўванне членства GoCardless.

Каб zaprechnať выбыванне, паверніце `false` з гэтага фільтра.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID блага WordPress сайта ў статусе адчыненні. |
| $membership | `\WP_Ultimo\Models\Membership` | Адмяжоўканае членства. |
| $old_status | `string` | Статус сайта перад адмяжоўваннем. |

### З версіі {#since}

- 2.0.0
### Выкненне {#source}

Вызначаны ў [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) на 1086-й пакульцы.
