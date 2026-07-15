---
id: wu_bypass_unset_current_user
title: فِلٹر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Developers ko unset current user کے کوڈ کو bypass کرنے کی اجازت دیتا ہے۔

اگر اس فنکشن سے `null` کے علاوہ کوئی بھی چیز واپس کی جاتی ہے، تو اس سے لاگ ان شدہ current user کو unset ہونے سے بچا جا سکتا ہے۔ یہ کچھ حالات میں مفید ہو سکتا ہے، مثال کے طور پر، جب آپ ایسے سب-سائٹس سے نمٹ رہے ہوں جو ایڈمن پینل کے طور پر استعمال ہو رہے ہوں۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | آگے بڑھنے کے لیے `null`، اور اسے bypass کرنے کے لیے کوئی بھی دوسری چیز۔ |
| $current_user | `false\|\WP_User` | موجودہ صارف (current user) کا object۔ |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) میں لائن 221 پر ڈیفائن کیا گیا ہے۔

## Returns {#returns}
