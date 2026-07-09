---
id: wu_gocardless_cleanup_pending_site
title: Филтр - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Пеш аз нест кардани сайти даринтизори ятиммонда барои узвияти GoCardless бекоршуда иҷро мешавад.

Аз ин filter `false` баргардонед, то несткунӣ пешгирӣ шавад.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID-и сайти даринтизор. |
| $membership | `\WP_Ultimo\Models\Membership` | Узвияти бекоршуда. |
| $old_status | `string` | Вазъият пеш аз бекоркунӣ. |

### Аз версияи

- 2.0.0
### Манбаъ

Дар [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) дар сатри 1086 муайян шудааст.
