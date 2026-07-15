---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

ਜਦੋਂ ਕੋਈ ਆਬਜੈਕਟ ਡੇਟਾਗ੍ਰੀਥ ਵਿੱਚ ਸਟੋਰ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇਹ ਐਕਸ਼ਨ ਚੱਲਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰਾਂ (Parameters) {#parameters}

| Name | Type | ਵਰਣਨ (Description) |
|------|------|-------------|
| $model | `string` | ਮਾਡਲ ਸਲੱਗ (The model slug)। |
| $data | `array` | ਆਬਜੈਕਟ ਦਾ ਉਹ ਡਾਟਾ ਜੋ ਸਟੋਰ ਹੋਵੇਗਾ, ਸੀਰੀਅਲਾਈਜ਼ਡ। |
| $data_unserialized | `array` | ਆਬਜੈਕਟ ਦਾ ਉਹ ਡਾਟਾ ਜੋ ਸਟੋਰ ਹੋਵੇਗਾ। |
| $this | `\Base_Model` | ਆਬਜੈਕਟ ਦਾ ਇੰਸਟੈਂਸ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.0
### ਸਰੋਤ (Source) {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) ਵਿੱਚ ਲਾਈਨ 613 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ।
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) ਵਿੱਚ ਲਾਈਨ 1743 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ।
