---
id: wu_gocardless_cleanup_pending_site
title: Филтер - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Филтер: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Покреће се пре брисања напуштеног сајта на чекању за отказано GoCardless чланство.

Вратите false из овог филтера да бисте спречили брисање.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID сајта на чекању. |
| $membership | `\WP_Ultimo\Models\Membership` | Отказано чланство. |
| $old_status | `string` | Статус пре отказивања. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) у реду 1086
