---
id: wu_gocardless_cleanup_pending_site
title: Զտիչ - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Գործարկվում է նախքան չեղարկված GoCardless անդամակցության համար որբացած սպասող կայքը ջնջելը։

Վերադարձրեք false այս filter-ից՝ ջնջումը կանխելու համար։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $blog_id | `int` | Սպասող կայքի WordPress blog ID-ն։ |
| $membership | `\WP_Ultimo\Models\Membership` | Չեղարկված անդամակցությունը։ |
| $old_status | `string` | Կարգավիճակը՝ մինչև չեղարկումը։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086)-ում՝ 1086-րդ տողում։
