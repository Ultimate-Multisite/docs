---
id: wu_gocardless_cleanup_pending_site
title: ફિલ્ટર - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

આ ફિલ્ટર રદ કરાયેલ GoCardless મેમ્બરશિપ માટેની કોઈ અનાથ (orphaned) પેન્ડિંગ સાઇટને ડિલીટ કરતા પહેલાં ચાલે છે.

ડિલીશન અટકાવવા માટે આ ફિલ્ટરમાં `false` પરત કરો.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | પેન્ડિંગ સાઇટની WordPress બ્લોગ ID. |
| $membership | `\WP_Ultimo\Models\Membership` | રદ કરાયેલ મેમ્બરશિપ. |
| $old_status | `string` | રદ થવાના પહેલાંની સ્થિતિ. |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) માં લાઇન 1086 પર વ્યાખ્યાયિત છે.
