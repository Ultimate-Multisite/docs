---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtre: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Geliştiricilerin ağ etkinleştirme kontrolünü atlamasına izin verir.

Bu, özellikle Bedrock gibi Composer tabanlı ve diğer özel kurulumlar kullanırken, mu-plugin'lerin normal olduğu durumlarda faydalıdır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kontrolü atlayıp atlamayacağımızı belirtir, varsayılan değeri false'tur. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) dosyasının 272. satırında tanımlanmıştır.


## Dönüş Değeri {#returns}
Kontrolü atlamak istiyorsanız `true`, aksi takdirde `false` döner.
