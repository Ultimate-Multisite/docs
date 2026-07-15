---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਾਂ ਨੂੰ previewer ਵਿੱਚ ਵਰਤੇ ਜਾਣ ਵਾਲੇ URL ਨੂੰ filter ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | ਹੁਣ ਵਰਤਿਆ ਜਾ ਰਿਹਾ ਡਿਫਾਲਟ ਡੋਮੇਨ, ਜੋ ਬਦਲਾਅ ਕਰਨ ਲਈ ਕੰਮ ਆਉਂਦਾ ਹੈ। |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options ਵਿੱਚ ਦਰਜ ਸਾਰੇ ਡੋਮੇਨ ਆਪਸ਼ਨਾਂ ਦੀ ਸੂਚੀ। |

### Since {#since}

- 1.7.2
### Source {#source}

ਇਹ [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ਵਿੱਚ ਲਾਈਨ 812 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।


## Returns {#returns}
ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਨਵਾਂ ਡੋਮੇਨ।
