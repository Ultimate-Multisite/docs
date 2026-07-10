---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

नूतनीकरणानंतर (renewal) सेट करण्यासाठी काढलेली समाप्तीची तारीख (expiration date) फिल्टर करतो.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | काढलेली समाप्तीची तारीख. |
| $plan | `\Product` | सदस्यत्व पातळीचा ऑब्जेक्ट. |
| $membership_id | `int` | सदस्यत्वाचा आयडी (ID). |
| $membership | `\Membership` | सदस्यत्व ऑब्जेक्ट. |

### पासून {#since}

- 2.0.0
### स्रोत {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) मध्ये लाइन 2192 वर परिभाषित केले आहे.
