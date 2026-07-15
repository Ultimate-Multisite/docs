---
id: wu_use_domain_mapping
title: Filtre - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtre: wu_use_domain_mapping

Bir eşlemenin kullanılıp kullanılmayacağını belirler

Genellikle yalnızca aktif eşlemelerin kullanılmasını istersiniz. Ancak, daha gelişmiş bir mantık kullanmak veya pasif (aktif olmayan) alan adlarının da eşlenmesine izin vermek isterseniz, bu filtreyi kullanabilirsiniz.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Eşleme aktif olarak mı ele alınmalı? |
| $mapping | `\Domain` | İncelediğimiz eşleme |
| $domain | `string` | |

### Kaynak {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) dosyasında 391. satırda tanımlanmıştır.
