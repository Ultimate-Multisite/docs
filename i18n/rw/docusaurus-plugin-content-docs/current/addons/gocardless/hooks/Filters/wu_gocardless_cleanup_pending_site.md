---
id: wu_gocardless_cleanup_pending_site
title: Akayunguruzo - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Ikora mbere yo gusiba urubuga rutegereje rwasigaye nta nyirwo rwa membership ya GoCardless yahagaritswe.

Subiza false muri iyi filter kugira ngo kubisiba biburizwemo.

## Ibipimo

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID y’urubuga rutegereje. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership yahagaritswe. |
| $old_status | `string` | Imimerere yari ihari mbere yo guhagarika. |

### Kuva

- 2.0.0
### Inkomoko

Byasobanuwe muri [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ku murongo wa 1086
