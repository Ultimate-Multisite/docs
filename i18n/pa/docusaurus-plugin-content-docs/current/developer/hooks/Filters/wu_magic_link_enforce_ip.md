---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

ਇਹ ਫਿਲਟਰ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਕੀ IP ਪਤੇ ਦੀ ਪੁਸ਼ਟੀ (verification) ਲਾਗੂ ਕਰਨੀ ਹੈ।

ਜੇਕਰ ਇਸਨੂੰ `false` ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਟੋਕਨਾਂ ਨੂੰ ਵੱਖ-ਵੱਖ ਨੈਟਵਰਕਾਂ ਤੋਂ ਕੰਮ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਮਿਲਦੀ ਹੈ। ਇਸ ਨਾਲ ਸੁਰੱਖਿਆ ਘਟ ਜਾਂਦੀ ਹੈ ਪਰ ਵਰਤੋਂਯੋਗਤਾ (usability) ਵੱਧ ਜਾਂਦੀ ਹੈ (ਉਦਾਹਰਨ ਲਈ, ਮੋਬਾਈਲ ਯੂਜ਼ਰਾਂ ਲਈ ਜਦੋਂ ਉਹ ਨੈਟਵਰਕ ਬਦਲਦੇ ਹਨ)।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | ਕੀ IP ਪਤੇ ਦਾ ਮੇਲ (matching) ਲਾਗੂ ਕਰਨਾ ਹੈ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.0
### ਸਰੋਤ (Source) {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
