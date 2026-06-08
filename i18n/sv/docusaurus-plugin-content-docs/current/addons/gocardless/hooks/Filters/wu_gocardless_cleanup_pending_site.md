---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Körs innan en övergiven, väntande webbplats (pending site) för en avbruten GoCardless-medlemskap tas bort.

Returnera `false` från detta filter för att förhindra borttagningen.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $blog_id | `int` | WordPress blog-ID för den väntande webbplatsen. |
| $membership | `\WP_Ultimo\Models\Membership` | Det avbrutna medlemskapet. |
| $old_status | `string` | Statusen före avbokningen. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) på rad 1086
