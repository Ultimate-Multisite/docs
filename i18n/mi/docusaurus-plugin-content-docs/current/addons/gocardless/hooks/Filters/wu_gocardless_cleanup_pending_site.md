---
id: wu_gocardless_cleanup_pending_site
title: Tātari - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Tātari: wu_gocardless_cleanup_pending_site

Ka whakahohe i mua i te muku i tētahi pae e tārewa ana, kua pani kē, mō tētahi GoCardless mematanga kua whakakorea.

Whakahokia te false i tēnei tātari hei ārai i te mukunga.

## Ngā Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $blog_id | `int` | ID rangitaki WordPress o te pae e tārewa ana. |
| $membership | `\WP_Ultimo\Models\Membership` | Te mematanga kua whakakorea. |
| $old_status | `string` | Te tūnga i mua i te whakakorenga. |

### Mai i

- 2.0.0
### Pūtake

Kua tautuhia ki [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) i te rārangi 1086
