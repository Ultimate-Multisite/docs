---
id: wu_should_create_domain_record_for_site
title: ਫਿਲਟਰ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

ਇਹ ਫਿਲਟਰ ਕਰਦਾ ਹੈ ਕਿ Ultimate Multisite ਨੂੰ ਨਵੇਂ ਬਣਾਏ ਗਏ ਸਾਈਟ ਲਈ ਡੋਮੇਨ ਰਿਕਾਰਡ ਬਣਾਉਣਾ ਚਾਹੀਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।

ਇਸ ਫਿਲਟਰ ਦੀ ਵਰਤੋਂ ਉਹਨਾਂ ਸਾਈਟਾਂ ਲਈ ਆਟੋਮੈਟਿਕ ਡੋਮੇਨ-ਰਿਕਾਰਡ ਬਣਾਉਣ ਨੂੰ ਰੋਕਣ ਜਾਂ ਮੁਲਤਵੀ ਕਰਨ ਲਈ ਕਰੋ ਜੋ ਸਾਂਝੇ checkout-form ਬੇਸ ਡੋਮੇਨ, ਅੰਦਰੂਨੀ ਹੋਸਟ, ਜਾਂ ਅਜਿਹਾ ਡੋਮੇਨ ਵਰਤਦੀਆਂ ਹਨ ਜਿਸ ਨੂੰ ਕੋਈ ਹੋਰ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਵੱਖਰੇ ਤੌਰ 'ਤੇ ਮੈਨੇਜ ਕਰੇਗੀ।

## ਪੈਰਾਮੀਟਰ {#parameters}

| Name | Type | ਵੇਰਵਾ |
|------|------|-------------|
| $create | `bool` | ਕੀ ਡੋਮੇਨ ਰਿਕਾਰਡ ਬਣਾਇਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। |
| $site | `WP_Site` | ਨਵਾਂ ਬਣਾਇਆ ਗਿਆ ਸਾਈਟ ਆਬਜੈਕਟ। |

### ਤੋਂ {#since}

- 2.13.0

### ਸਰੋਤ {#source}

`inc/functions/domain.php` ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ।


## ਵਾਪਸੀ {#returns}

ਬੂਲੀਅਨ ਜੋ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਡੋਮੇਨ ਰਿਕਾਰਡ ਬਣਾਉਣਾ ਹੈ ਜਾਂ ਨਹੀਂ।
