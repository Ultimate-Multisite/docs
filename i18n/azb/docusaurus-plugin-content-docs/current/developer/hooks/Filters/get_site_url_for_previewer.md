---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Plugin geliştiricilerinin, previewer'da kullanılan URL'yi filtrelemesine izin verir.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $domain | `string` | Şu anda kullanılan varsayılan alan adıdır, manipülasyonlar için kullanışlıdır. |
| $domain_options | `array` | Ultimate Multisite Ayarları -> Ağ Ayarları -> Alan Adı Seçenekleri'nde girilen tüm alan adı seçeneklerinin listesi. |

### Kullanılmaya Başladığı {#since}

- 1.7.2
### Kaynak {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) dosyasında 812. satırda tanımlanmıştır.

## Dönüş Değeri {#returns}
Kullanılacak yeni alan adı.
