---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Bu filtre, geliştiricilerin ağ aktivasyon kontrolünü atlamasına (short-circuit) olanak tanır.

Bu, özellikle Bedrock gibi composer tabanlı ve diğer özel kurulumlar kullanırken, veya mu-plugins olarak eklenti kullanmanın normal olduğu durumlarda işinize yarar.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kontrolü atlayıp atlamayacağımızı belirtir; varsayılan değeri `false`'dur. |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) dosyasının 272. satırında tanımlanmıştır.


## Returns
Kontrolü atlamak istiyorsanız `true`, aksi takdirde `false` döndürür.
