---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

یہ ایک ایسا عمل (Action) ہے جو ممبرشپ کی تجدید (renewal) سے پہلے ٹرگر ہوتا ہے۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | وہ نئی میعاد ختم ہونے کی تاریخ جو سیٹ کرنی ہے۔ |
| $membership_id | `int` | ممبرشپ کی شناخت (ID)۔ |
| $membership | `\Membership` | ممبرشپ کا آبجیکٹ (object)۔ |

### Since

- 2.0
### Source

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) میں لائن 2204 پر ڈیفائن کیا گیا ہے۔
