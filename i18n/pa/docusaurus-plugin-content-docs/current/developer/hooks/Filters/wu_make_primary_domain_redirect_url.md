---
id: wu_make_primary_domain_redirect_url
title: ਫਿਲਟਰ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ਇਹ ਉਹ redirect URL ਫਿਲਟਰ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਡੋਮੇਨ ਨੂੰ ਪ੍ਰਾਇਮਰੀ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।

ਇਹ ਡਿਵੈਲਪਰਾਂ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਕਿ ਯੂਜ਼ਰਾਂ ਨੂੰ ਕਿੱਥੇ redirect ਕੀਤਾ ਜਾਵੇ ਜਦੋਂ ਕਿਸੇ ਡੋਮੇਨ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਪ੍ਰਾਇਮਰੀ ਸੈੱਟ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ, ਇਹ ਮੇਨ ਸਾਈਟ 'ਤੇ ਮੌਜੂਦਾ URL 'ਤੇ, ਜਾਂ ਉਸ ਸਾਈਟ ਦੇ ਐਡਮਿਨ URL 'ਤੇ redirect ਕਰਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਬਦਲਾਅ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ਡਿਫਾਲਟ redirect URL। ਇਹ ਜਾਂ ਤਾਂ ਮੌਜੂਦਾ URL ਹੈ (ਜੇ ਮੇਨ ਸਾਈਟ ਹੈ) ਜਾਂ ਮੌਜੂਦਾ ਸਾਈਟ ਦਾ ਐਡਮਿਨ URL। |
| $current_site | `int` | ਉਸ ਸਾਈਟ ਦਾ ID ਜਿਸ ਦਾ ਡੋਮੇਨ ਪ੍ਰਾਇਮਰੀ ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੈ। |
| $domain | `\Domain` | ਉਹ ਡੋਮੇਨ ਆਬਜੈਕਟ ਜੋ ਪ੍ਰਾਇਮਰੀ ਬਣਾਇਆ ਗਿਆ ਸੀ। |
| $old_primary_domains | `array` | ਉਨ੍ਹਾਂ ਡੋਮੇਨਾਂ ਦੇ ID ਦਾ ਐਰੇ ਜੋ ਪਹਿਲਾਂ ਪ੍ਰਾਇਮਰੀ ਸਨ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.0
### ਸਰੋਤ (Source) {#source}

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## ਵਾਪਸ ਕਰਦਾ ਹੈ (Returns) {#returns}
ਫਿਲਟਰ ਕੀਤਾ ਗਿਆ redirect URL।
