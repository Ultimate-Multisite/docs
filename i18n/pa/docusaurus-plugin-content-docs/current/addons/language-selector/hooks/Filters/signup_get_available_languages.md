---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

ਫਰੰਟ-ਐਂਡ ਸਾਈਟ ਸਾਈਨਅੱਪ ਲਈ ਉਪਲਬਧ ਭਾਸ਼ਾਵਾਂ ਦੀ ਸੂਚੀ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

ਇਸ ਹੁੱਕ (hook) ਨੂੰ ਇੱਕ ਖਾਲੀ ਐਰੇ (empty array) ਪਾਸ ਕਰਨ ਨਾਲ ਸਾਈਨਅੱਪ ਫਾਰਮ 'ਤੇ ਸੈਟਿੰਗ ਦਾ ਆਉਟਪੁੱਟ ਬੰਦ ਹੋ ਜਾਵੇਗਾ, ਅਤੇ ਸਾਈਟ ਬਣਾਉਣ ਵੇਲੇ ਡਿਫਾਲਟ ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਵੇਗੀ। ਉਹ ਭਾਸ਼ਾਵਾਂ ਜੋ ਪਹਿਲਾਂ ਹੀ ਇੰਸਟਾਲ ਨਹੀਂ ਹਨ, ਉਨ੍ਹਾਂ ਨੂੰ ਹਟਾ ਦਿੱਤਾ ਜਾਵੇਗਾ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | ਉਪਲਬਧ ਭਾਸ਼ਾਵਾਂ। |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
