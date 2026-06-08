---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ਇਹ ਫਿਲਟਰ ਇੱਕ ਰੱਦ ਹੋਈ GoCardless ਮੈਂਬਰਸ਼ਿਪ ਲਈ ਅਣਸੰਬੰਧਿਤ (orphaned) ਪੈਂਡਿੰਗ ਸਾਈਟ ਨੂੰ ਮਿਟਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਚੱਲਦਾ ਹੈ।

ਮਿਟਾਉਣ ਤੋਂ ਰੋਕਣ ਲਈ ਇਸ ਫਿਲਟਰ ਤੋਂ `false` ਵਾਪਸ ਕਰੋ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ਪੈਂਡਿੰਗ ਸਾਈਟ ਦੀ WordPress ਬਲੌਗ ID। |
| $membership | `\WP_Ultimo\Models\Membership` | ਰੱਦ ਹੋਈ ਮੈਂਬਰਸ਼ਿਪ। |
| $old_status | `string` | ਰੱਦ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਦੀ ਸਥਿਤੀ। |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086
