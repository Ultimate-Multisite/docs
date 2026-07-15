---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

ممبرشپ رینیو ہونے کے بعد یہ عمل (Action) ٹرگر ہوتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| نام (Name) | قسم (Type) | تفصیل (Description) |
|------|------|-------------|
| $expiration | `string` | وہ نئی ایکسپائریشن ڈیٹ جو سیٹ کرنی ہے۔ |
| $membership_id | `int` | ممبرشپ کی آئی ڈی۔ |
| $membership | `\Membership` | ممبرشپ آبجیکٹ۔ |

### سے (Since) {#since}

- 2.0
### ماخذ (Source) {#source}

یہ [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) میں لائن 2235 پر ڈیفائن کیا گیا ہے۔
