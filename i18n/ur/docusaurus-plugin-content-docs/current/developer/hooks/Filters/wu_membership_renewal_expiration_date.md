---
id: wu_membership_renewal_expiration_date
title: فلٹر - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

یہ فلٹر حساب شدہ میعاد ختم ہونے کی تاریخ کو اس طرح سیٹ کرتا ہے کہ وہ تجدید (renewal) کے بعد ہو۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | حساب شدہ میعاد ختم ہونے کی تاریخ۔ |
| $plan | `\Product` | ممبرشپ لیول کا آبجیکٹ۔ |
| $membership_id | `int` | ممبرشپ کی شناخت (ID)۔ |
| $membership | `\Membership` | ممبرشپ کا آبجیکٹ۔ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) at line 2192
