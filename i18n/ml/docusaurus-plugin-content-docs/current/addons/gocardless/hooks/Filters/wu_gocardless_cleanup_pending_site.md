---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

റദ്ദാക്കിയ GoCardless അംഗത്വത്തിനായി ബാക്കിയായ (orphaned) ഒരു pending site ഡിലീറ്റ് ചെയ്യുന്നതിന് മുമ്പ് ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

ഈ ഫിൽട്ടറിൽ നിന്ന് `false` എന്ന് റിട്ടേൺ ചെയ്താൽ ഡിലീഷൻ തടയാം.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | pending site-ന്റെ WordPress ബ്ലോഗ് ID. |
| $membership | `\WP_Ultimo\Models\Membership` | റദ്ദാക്കിയ അംഗത്വം. |
| $old_status | `string` | റദ്ദാക്കുന്നതിന് മുമ്പുള്ള സ്റ്റാറ്റസ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086
