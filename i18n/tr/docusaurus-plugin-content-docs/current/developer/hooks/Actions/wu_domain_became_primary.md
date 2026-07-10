---
id: wu_domain_became_primary
title: Eylem - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Bir alan adı bir site için birincil alan adı olduğunda tetiklenir.

Bu eylem, bir alan adının `primary_domain` bayrağı `true` olarak ayarlandığında tetiklenir; bu durum, yeni bir birincil alan adı oluşturulurken veya mevcut bir alan adı birincil hale getirilirken gerçekleşebilir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Birincil hale gelen alan adı. |
| $blog_id | `int` | Etkilenen sitenin blog ID'si. |
| $was_new | `bool` | Bu alan adının yeni oluşturulup oluşturulmadığı. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) dosyasının 560. satırında tanımlanmıştır.
