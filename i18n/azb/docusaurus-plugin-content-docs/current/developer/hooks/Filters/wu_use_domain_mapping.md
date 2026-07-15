---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Bir eşleştirmenin kullanılıp kullanılmayacağını belirler

Genellikle sadece aktif eşleştirmelerin kullanılmasını istersiniz. Ancak, daha gelişmiş bir mantık kullanmak veya pasif alan adlarının da eşleştirilmesine izin vermek isterseniz, burayı filtreleyerek bunu yapabilirsiniz.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Eşleştirme aktif olarak mı ele alınmalı? |
| $mapping | `\Domain` | İncelediğimiz eşleştirme |
| $domain | `string` |  |

### Kaynak {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) dosyasında 391. satırda tanımlanmıştır.
