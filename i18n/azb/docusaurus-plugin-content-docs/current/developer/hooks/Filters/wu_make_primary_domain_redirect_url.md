---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Bir alan adını birincil yaptıktan sonra yönlendirme URL'sini filtreler.

Geliştiricilerin, bir alan adını başarıyla birincil olarak ayarladıktan sonra kullanıcıların nereye yönlendirileceğini özelleştirmesine olanak tanır. Varsayılan olarak, ana sitedeki mevcut URL'ye veya değiştirilen sitenin yönetici URL'sine yönlendirilir.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Varsayılan yönlendirme URL'si. Ya mevcut URL (ana site ise) ya da mevcut sitenin yönetici URL'si. |
| $current_site | `int` | Alan adının birincil yapılacağı sitenin ID'si. |
| $domain | `\Domain` | Birincil yapılan alan adı nesnesi. |
| $old_primary_domains | `array` | Daha önce birincil olan alan adlarının ID'lerinden oluşan dizi. |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Returns
Filtrelenmiş yönlendirme URL'si.
