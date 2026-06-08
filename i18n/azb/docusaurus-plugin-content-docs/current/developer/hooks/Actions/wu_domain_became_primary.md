---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Bir alan adı bir sitenin birincil alan adı olduğunda tetiklenir.

Bu eylem, bir alan adının `primary_domain` bayrağı `true` olarak ayarlandığında tetiklenir; bu, ya yeni bir birincil alan adı oluşturulurken ya da mevcut bir alan adı birincil hale getirilirken gerçekleşebilir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Birincil hale gelen alan adı. |
| $blog_id | `int` | Etkilenen sitenin blog kimliği. |
| $was_new | `bool` | Bu alan adının yeni oluşturulup oluşturulmadığı. |

### Since

- 2.0.0
### Source

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) dosyasındaki 560. satırda tanımlanmıştır.
