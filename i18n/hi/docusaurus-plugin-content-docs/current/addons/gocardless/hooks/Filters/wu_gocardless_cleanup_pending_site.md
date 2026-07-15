---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

यह फ़िल्टर GoCardless सदस्यता रद्द होने पर एक अनाथ पड़ी पेंडिंग साइट को डिलीट करने से पहले चलता है।

डिलीट होने से रोकने के लिए इस फ़िल्टर से `false` रिटर्न करें।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | पेंडिंग साइट की WordPress ब्लॉग ID। |
| $membership | `\WP_Ultimo\Models\Membership` | रद्द की गई सदस्यता। |
| $old_status | `string` | रद्द होने से पहले की स्थिति। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) में लाइन 1086 पर परिभाषित है
