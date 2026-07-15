---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtre: wu_post_count_statuses

Eklenti geliştiricilerinin hangi gönderi durumunun sayılması gerektiğini değiştirmesine izin verir. Varsayılan olarak, yayınlanmış ve özel gönderiler sayılır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Gönderi durumlarının listesi |
| $post_type | `string` | Gönderi türü (slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) dosyasındaki 119. satırda tanımlanmıştır.

## Dönüş Değeri {#returns}
Gönderi durumlarının yeni bir dizisi.
