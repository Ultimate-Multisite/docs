---
id: wu_gocardless_cleanup_pending_site
title: Filtrs - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtrs: wu_gocardless_cleanup_pending_site

Tiek izsaukts pirms pamestas gaidošas vietnes dzēšanas atceltai GoCardless dalībai.

Atgrieziet false no šī filtra, lai novērstu dzēšanu.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $blog_id | `int` | Gaidošās vietnes WordPress bloga ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Atceltā dalība. |
| $old_status | `string` | Statuss pirms atcelšanas. |

### Kopš

- 2.0.0
### Avots

Definēts [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) 1086. rindā
