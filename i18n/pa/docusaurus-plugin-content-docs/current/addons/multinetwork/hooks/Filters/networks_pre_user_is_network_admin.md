---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

ਇਹ ਉਹ ਨੈਟਵਰਕ ਫਿਲਟਰ ਕਰਦਾ ਹੈ ਜਿਸ ਦਾ ਕਿਸੇ ਯੂਜ਼ਰ ਦਾ ਐਡਮਿਨ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ, ਤਾਂ ਜੋ ਪ੍ਰੋਸੈਸ ਨੂੰ ਛੇਤੀ ਪੂਰਾ (short-circuit) ਕੀਤਾ ਜਾ ਸਕੇ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | ਨੈਟਵਰਕ IDਜ਼ ਦੀ ਸੂਚੀ ਜਾਂ false। null ਤੋਂ ਇਲਾਵਾ ਕੋਈ ਵੀ 값 ਪ੍ਰੋਸੈਸ ਨੂੰ short-circuit ਕਰ ਦੇਵੇਗੀ। |
| $ | `int` | ਯੂਜ਼ਰ ID ਜਿਸ ਲਈ ਨੈਟਵਰਕ ਵਾਪਸ ਕਰਨੇ ਚਾਹੀਦੇ ਹਨ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) ਵਿੱਚ ਲਾਈਨ 688 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
