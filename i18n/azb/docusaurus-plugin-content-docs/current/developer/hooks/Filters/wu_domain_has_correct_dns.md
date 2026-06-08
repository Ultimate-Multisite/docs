---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Plugin geliştiricilerinin, sonuçları tanımlamak için yeni kontroller eklemesine izin verir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | mevcut sonuç. |
| $domain | `self` | mevcut domain örneği. |
| $domains_and_ips | `array` | DNS sorgusunda bulunan domain ve IP listesi. |

### Since

- 2.0.4
### Source

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) dosyasında 455. satırda tanımlanmıştır.


## Returns
DNS doğru kurulmuş mu yoksa kurulmamış mı olduğunu belirtir.
