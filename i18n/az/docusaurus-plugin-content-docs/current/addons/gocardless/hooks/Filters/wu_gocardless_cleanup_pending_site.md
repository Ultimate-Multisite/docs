---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Bu filter, ləğv edilmiş bir GoCardless üyarlığı üçün əlaqəsi yitmiş (orphaned) təcili sayt silinməzdən əvvəl işə düşür.

Silməni dayandırmaq üçün bu filterdən `false` qaytarın.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Təcili saytın WordPress blog ID-si. |
| $membership | `\WP_Ultimo\Models\Membership` | Ləğv edilmiş üyarlık. |
| $old_status | `string` | Ləğv edilməzdən əvvəlki vəziyyət. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) faylında 1086-cı sətirdə təyin edilmişdir.
