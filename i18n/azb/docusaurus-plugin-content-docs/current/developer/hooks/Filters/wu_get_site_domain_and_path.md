---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Geliştiricilerin alan adı/yol çiftlerini değiştirmesine izin verir.

Bu, bir nevi staging çözümü uygulamak, farklı sunucular kullanmak gibi birçok şey için faydalı olabilir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Alan adı ve yol anahtarlarını içeren mevcut nesne. |
| $path_or_subdomain | `string` | Fonksiyona gönderilen orijinal yol/alt alan adı. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Dönüş Değeri
Alan adı ve yol anahtarlarını içeren bir nesne.
