---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Word geaktiveer voordat 'n verlate wag-webwerf vir 'n gekanselleerde GoCardless lidmaatskap verwyder word.

Gee `false` van hierdie filter om verwydering te voorkom.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Die WordPress blog ID van die wag-webwerf. |
| $membership | `\WP_Ultimo\Models\Membership` | Die gekanselleerde lidmaatskap. |
| $old_status | `string` | Die status voor kansellasie. |

### Sedert

- 2.0.0
### Bron

Word gedefinieer in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) by lyn 1086
