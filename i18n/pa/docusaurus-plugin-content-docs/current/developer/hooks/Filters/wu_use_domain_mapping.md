---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ਇਹ ਤੈਅ ਕਰਨਾ ਕਿ ਮੈਪਿੰਗ ਦੀ ਵਰਤੋਂ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਜਾਂ ਨਹੀਂ।

ਆਮ ਤੌਰ 'ਤੇ, ਤੁਸੀਂ ਸਿਰਫ਼ ਐਕਟਿਵ ਮੈਪਿੰਗਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇਣਾ ਚਾਹੋਗੇ। ਪਰ, ਜੇ ਤੁਸੀਂ ਕੋਈ ਹੋਰ ਐਡਵਾਂਸ ਲਾਜਿਕ ਵਰਤਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਜਾਂ ਨਾ-ਐਕਟਿਵ ਡੋਮੇਨਾਂ ਨੂੰ ਵੀ ਮੈਪ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਇੱਥੇ ਸਿਰਫ਼ ਫਿਲਟਰ ਕਰ ਸਕਦੇ ਹੋ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ਕੀ ਮੈਪਿੰਗ ਨੂੰ ਐਕਟਿਵ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ? |
| $mapping | `\Domain` | ਉਹ ਮੈਪਿੰਗ ਜਿਸਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ |
| $domain | `string` |  |

### Source

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ਵਿੱਚ ਲਾਈਨ 391 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ।
