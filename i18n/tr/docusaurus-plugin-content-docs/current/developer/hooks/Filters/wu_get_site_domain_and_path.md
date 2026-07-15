---
id: wu_get_site_domain_and_path
title: Filtre - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Geliştiricilerin alan adı ve yol çiftleri üzerinde değişiklik yapmasına olanak tanır.

Bu, bir tür staging (hazırlık) çözümü, farklı sunucular veya diğer durumlar gibi birçok senaryoda kullanışlı olabilir.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $d | `object` | Alan adı ve yol anahtarlarını içeren mevcut nesne. |
| $path_or_subdomain | `string` | Fonksiyona iletilen orijinal yol/alt alan adı. |

### Kullanılmaya Başladığı {#since}

- 2.0.0
### Kaynak {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) dosyasının 235. satırında tanımlanmıştır.


## Dönüş Değeri {#returns}
Bir alan adı ve yol anahtarı içeren bir nesne.
