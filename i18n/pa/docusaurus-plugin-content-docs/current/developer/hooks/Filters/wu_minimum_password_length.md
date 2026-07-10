---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

ਘੱਟੋ-ਘੱਟ ਪਾਸਵਰਡ ਲੰਬਾਈ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

ਇਹ ਸਿਰਫ਼ ਉਦੋਂ ਲਾਗੂ ਹੁੰਦਾ ਹੈ ਜਦੋਂ `wu_enforce_password_rules` ਸੱਚ (true) ਹੋਵੇ।

## ਪੈਰਾਮੀਟਰ {#parameters}

| Name | Type | ਵਰਣਨ |
|------|------|-------------|
| $min_length | `int` | ਘੱਟੋ-ਘੱਟ ਪਾਸਵਰਡ ਲੰਬਾਈ। ਡਿਫਾਲਟ 12 ਹੈ (Defender Pro ਨਾਲ ਮਿਲਦਾ)। |
| $defender_active | `bool` | ਇਹ ਕਿ Defender Pro Strong Password ਸਰਗਰਮ (active) ਹੈ ਜਾਂ ਨਹੀਂ। |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
