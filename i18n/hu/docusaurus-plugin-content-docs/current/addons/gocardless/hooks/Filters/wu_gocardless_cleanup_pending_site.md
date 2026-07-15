---
id: wu_gocardless_cleanup_pending_site
title: Szűrő - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Elkülídik/hívódik meg, mielőtt megsemmisíti egy megยกált GoCardless tagság miatt keletkezett, elhagyatott, függőben lévő oldalt.

Ha visszaadod `false`-t e szűrőben, megakadályozod a törlést.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | A függőben lévő oldal WordPress blog ID-je. |
| $membership | `\WP_Ultimo\Models\Membership` | A megยกált tagság. |
| $old_status | `string` | Az állapot a megยกálás előtt. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Definíciója található [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) fájlban, 1086-sorban.
