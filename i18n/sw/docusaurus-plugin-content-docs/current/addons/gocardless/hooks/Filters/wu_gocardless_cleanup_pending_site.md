---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Inatumika kabla ya kufuta tovuti ya pending iliyopotea kwa usajili wa GoCardless uliotolewa.

Rudisha `false` kutoka kwa filter hii ili kuzuia kufutwa.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Kitambulisho cha blogu ya WordPress ya tovuti ya pending. |
| $membership | `\WP_Ultimo\Models\Membership` | Usajili uliotolewa. |
| $old_status | `string` | Hali iliyokuwepo kabla ya kutolewa. |

### Since {#since}

- 2.0.0
### Source {#source}

Imefafanuliwa katika [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) kwenye mstari wa 1086
