---
id: wu_gocardless_cleanup_pending_site
title: फिल्टर - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

रद्द गरिएको GoCardless सदस्यताका लागि अनाथ पेन्डिङ साइट मेटाउनुअघि चल्छ।

मेटाइ रोक्न यस filter बाट false फर्काउनुहोस्।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $blog_id | `int` | पेन्डिङ साइटको WordPress blog ID। |
| $membership | `\WP_Ultimo\Models\Membership` | रद्द गरिएको सदस्यता। |
| $old_status | `string` | रद्द गर्नुअघिको स्थिति। |

### संस्करणदेखि

- 2.0.0
### स्रोत

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) मा लाइन 1086 मा परिभाषित गरिएको छ।
