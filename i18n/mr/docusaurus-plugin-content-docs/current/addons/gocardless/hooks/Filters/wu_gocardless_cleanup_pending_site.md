---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

GoCardless मेंबरशिप रद्द झाल्यावर (cancelled) असलेल्या अनाथ (orphaned) पेंडिंग साईटला (pending site) डिलीट करण्यापूर्वी हा फिल्टर कार्यान्वित होतो.

डिलीट होण्यापासून थांबवण्यासाठी या फिल्टरमधून `false` परत करा.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | पेंडिंग साईटचा WordPress blog ID. |
| $membership | `\WP_Ultimo\Models\Membership` | रद्द झालेली मेंबरशिप. |
| $old_status | `string` | रद्द होण्यापूर्वीची स्थिती (status). |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) मध्ये लाइन 1086 वर परिभाषित केले आहे.
