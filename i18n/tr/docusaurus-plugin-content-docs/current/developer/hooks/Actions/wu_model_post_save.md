---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Aksiyon: wu_model_post_save

Bir nesne veritabanına kaydedildikten sonra tetiklenir.

## Parametreler

| İsim | Tip | Açıklama |
|------|------|-------------|
| $model | `string` | Model takma adı (slug). |
| $data | `array` | Depolanacak, serileştirilecek nesne verisi. |
| $data_unserialized | `array` | Depolanacak nesne verisi. |
| $this | `\Base_Model` | Nesne örneği. |

### Ne Zaman

- 2.0.0
### Kaynak

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) dosyasında 613. satırda tanımlanmıştır.
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) dosyasında 1743. satırda tanımlanmıştır.
