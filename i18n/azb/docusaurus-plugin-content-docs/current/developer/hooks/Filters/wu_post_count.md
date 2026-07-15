---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Plugin geliştiricilerinin toplam sayıyı değiştirmesine izin verir.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $count | `int` | Toplam gönderi sayısı. |
| $post_counts | `object` | `wp_count_posts` fonksiyonu tarafından döndürülen WordPress nesnesi. |
| $post_type | `string` | Gönderi türü (post type) slug'ı. |

### Versiyon {#since}

- 1.9.1
### Kaynak {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) dosyasının 136. satırında tanımlanmıştır.

## Dönüş Değeri {#returns}
Yeni toplam.
