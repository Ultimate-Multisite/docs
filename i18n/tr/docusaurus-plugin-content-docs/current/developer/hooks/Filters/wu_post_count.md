---
id: wu_post_count
title: Filtre - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtre: wu_post_count

Eklenti geliştiricilerinin toplam sayıyı değiştirmesine olanak tanır.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $count | `int` | Toplam gönderi sayısı |
| $post_counts | `object` | `wp_count_posts` fonksiyonu tarafından döndürülen WordPress nesnesi |
| $post_type | `string` | Gönderi türü (post type) slug'ı |

### Kullanılabilir Versiyon

- 1.9.1
### Kaynak

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) dosyasındaki 136. satırda tanımlanmıştır.

## Dönüş Değeri
Yeni toplam sayı
