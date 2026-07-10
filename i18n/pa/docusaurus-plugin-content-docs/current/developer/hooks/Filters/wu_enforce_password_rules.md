---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

ਇਹ ਫਿਲਟਰ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਕੋਈ ਵਾਧੂ ਪਾਸਵਰਡ ਨਿਯਮ ਲਾਗੂ ਕੀਤੇ ਜਾਣ।

ਜਦੋਂ ਇਹ `true` ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਘੱਟੋ-ਘੱਟ ਲੰਬਾਈ ਅਤੇ ਅੱਖਰਾਂ ਦੀਆਂ ਲੋੜਾਂ ਲਾਗੂ ਕਰਦਾ ਹੈ। ਇਹ ਆਪਣੇ ਆਪ "Super Strong" ਸੈਟਿੰਗ ਲਈ ਜਾਂ ਜਦੋਂ Defender Pro ਦੀ Strong Password ਫੀਚਰ ਐਕਟਿਵ ਹੁੰਦੀ ਹੈ ਤਾਂ ਚਾਲੂ ਹੋ ਜਾਂਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | ਕੀ ਵਾਧੂ ਨਿਯਮ ਲਾਗੂ ਕੀਤੇ ਜਾਣ। |
| $strength_setting | `string` | ਐਡਮਿਨ ਸੈਟਿੰਗ ਦਾ ਮੁੱਲ। |
| $defender_active | `bool` | ਕੀ Defender Pro Strong Password ਐਕਟਿਵ ਹੈ। |

### Since {#since}

- 2.4.0
### Source {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ਵਿੱਚ ਲਾਈਨ 531 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
