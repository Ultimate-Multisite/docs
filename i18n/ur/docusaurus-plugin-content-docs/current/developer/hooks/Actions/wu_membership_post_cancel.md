---
id: wu_membership_post_cancel
title: عمل - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

یہ عمل میمبراشیپ منسوخ ہونے کے بعد ٹرگر ہوتا ہے۔

یہ منسوخی کا ای میل بھیجتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | میمبراشیپ کی شناخت (ID)۔ |
| $membership | `\WP_Ultimo\Models\Membership` | میمبراشیپ کا آبجیکٹ (object)۔ |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) میں لائن 2290 پر بیان کیا گیا ہے۔
