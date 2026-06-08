---
id: wu_post_count_statuses
title: ਫਿਲਟਰ - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਜ਼ ਨੂੰ ਇਹ ਬਦਲਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਕਿ ਕਿਹੜੇ ਪੋਸਟ ਸਟੇਸਸ ਨੂੰ ਗਿਣਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ, ਪਬਲਿਸ਼ਡ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਪੋਸਟਾਂ ਨੂੰ ਗਿਣਿਆ ਜਾਂਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters)

| ਨਾਮ (Name) | ਕਿਸਮ (Type) | ਵਰਣਨ (Description) |
|------|------|-------------|
| $post_status | `array` | ਪੋਸਟ ਸਟੇਸਸ ਦੀ ਸੂਚੀ। |
| $post_type | `string` | ਪੋਸਟ ਟਾਈਪ ਦਾ ਸਲੱਗ। |

### ਕਦੋਂ ਤੋਂ (Since)

- 1.9.1
### ਸਰੋਤ (Source)

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) ਵਿੱਚ ਲਾਈਨ 119 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।

## ਵਾਪਸ ਕਰਦਾ ਹੈ (Returns)
ਪੋਸਟ ਸਟੇਸਸ ਦਾ ਨਵਾਂ ਐਰੇ।
