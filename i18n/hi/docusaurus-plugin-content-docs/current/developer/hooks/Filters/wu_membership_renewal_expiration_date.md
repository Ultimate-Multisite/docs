---
id: wu_membership_renewal_expiration_date
title: फ़िल्टर - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

यह फ़िल्टर गणना की गई समाप्ति तिथि (expiration date) को नवीनीकरण (renewal) के बाद सेट करने के लिए फ़िल्टर करता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | गणना की गई समाप्ति तिथि। |
| $plan | `\Product` | सदस्यता स्तर (Membership level) ऑब्जेक्ट। |
| $membership_id | `int` | सदस्यता की ID। |
| $membership | `\Membership` | सदस्यता ऑब्जेक्ट। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) में लाइन 2192 पर परिभाषित।
