---
id: wu_domain_has_correct_dns
title: Filtre - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Eklenti geliştiricilerinin, sonuçları belirlemek için yeni kontroller eklemesine olanak tanır.

## Parametreler

| Name | Type | Açıklama |
|------|------|-------------|
| $result | `bool` | mevcut sonuç. |
| $domain | `self` | mevcut alan adı örneği. |
| $domains_and_ips | `array` | DNS sorgusunda bulunan alan adları ve IP'ler listesi. |

### Versiyon

- 2.0.4
### Kaynak

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) dosyasında 455. satırda tanımlanmıştır.


## Dönüş Değeri
DNS'in doğru kurulup kurulmadığını belirtir.
