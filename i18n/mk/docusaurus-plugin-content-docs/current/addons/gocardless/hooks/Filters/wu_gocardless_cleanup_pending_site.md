---
id: wu_gocardless_cleanup_pending_site
title: Филтер - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Филтер: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Се активира пред бришење на осамена страница во исчекување за откажано GoCardless членство.

Вратете false од овој филтер за да спречите бришење.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID на страницата во исчекување. |
| $membership | `\WP_Ultimo\Models\Membership` | Откажаното членство. |
| $old_status | `string` | Статусот пред откажувањето. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) на линија 1086
