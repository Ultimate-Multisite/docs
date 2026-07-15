---
id: wu_membership_calculated_date_expiration
title: فلٹر - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

یہ حساب شدہ میمبریشپ کی آخری تاریخ کو فلٹر کرتا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | تفصیل |
|------|------|-------------|
| $expiration | `string` | MySQL فارمیٹ میں حساب شدہ آخری تاریخ۔ |
| $membership_id | `int` | ممبرشپ کی شناخت (ID)۔ |
| $membership | `\WP_Ultimo\Models\Membership` | ممبرشپ آبجیکٹ۔ |

### سے {#since}

- 2.0
### ماخذ {#source}

یہ [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) میں لائن 1309 پر بیان کیا گیا ہے۔
