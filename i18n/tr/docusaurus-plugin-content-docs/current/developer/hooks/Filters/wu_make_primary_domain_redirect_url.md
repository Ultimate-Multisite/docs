---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtre: wu_make_primary_domain_redirect_url

Bir alan adını birincil yaptıktan sonra yönlendirilen URL'yi filtreler.

Geliştiricilerin, bir alan adını birincil olarak ayarladıktan sonra kullanıcıların nereye yönlendirileceğini özelleştirmesine olanak tanır. Varsayılan olarak, yönlendirme ana sitedeki mevcut URL'ye veya değiştirilen sitenin yönetici URL'sine yapılır.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $redirect_url | `string` | Varsayılan yönlendirme URL'si. Ya mevcut URL (ana site ise) ya da mevcut sitenin yönetici URL'si. |
| $current_site | `int` | Alan adının birincil yapılacağı sitenin ID'si. |
| $domain | `\Domain` | Birincil yapılan alan adı nesnesi. |
| $old_primary_domains | `array` | Daha önce birincil olan alan adlarının ID'lerinden oluşan dizi. |

### Kullanılmaya Başladığı

- 2.0.0
### Kaynak

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) dosyasında 639. satırda tanımlanmıştır.

## Dönüş Değeri
Filtrelenmiş yönlendirme URL'si.
