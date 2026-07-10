---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

ਇਹ ਐਕਸ਼ਨ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਡੋਮੇਨ ਕਿਸੇ ਸਾਈਟ ਦਾ ਪ੍ਰਾਇਮਰੀ ਡੋਮੇਨ ਬਣ ਜਾਂਦਾ ਹੈ।

ਇਹ ਐਕਸ਼ਨ ਉਦੋਂ ਟ੍ਰਿਗਰ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਡੋਮੇਨ ਦਾ `primary_domain` ਫਲੈਗ `true` ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਭਾਵੇਂ ਇਹ ਇੱਕ ਨਵਾਂ ਪ੍ਰਾਇਮਰੀ ਡੋਮੇਨ ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੋਵੇ ਜਾਂ ਕਿਸੇ ਮੌਜੂਦਾ ਡੋਮੇਨ ਨੂੰ ਪ੍ਰਾਇਮਰੀ ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੋਵੇ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ਉਹ ਡੋਮੇਨ ਜੋ ਪ੍ਰਾਇਮਰੀ ਬਣਿਆ। |
| $blog_id | `int` | ਪ੍ਰਭਾਵਿਤ ਸਾਈਟ ਦਾ ਬਲੌਗ ID। |
| $was_new | `bool` | ਕੀ ਇਹ ਇੱਕ ਨਵਾਂ ਬਣਾਇਆ ਗਿਆ ਡੋਮੇਨ ਹੈ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ਵਿੱਚ ਲਾਈਨ 560 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
