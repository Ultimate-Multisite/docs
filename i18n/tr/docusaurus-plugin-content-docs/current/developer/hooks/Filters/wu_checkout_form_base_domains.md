---
id: wu_checkout_form_base_domains
title: Filtre - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtre: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Eşlenmiş alan adı kayıtları haline gelmemesi gereken paylaşılan ödeme formu temel alan adlarını filtreler.

Bir entegrasyon, ödeme formu **site URL'si** alanları için ek temel alan adları sağladığında bu filtreyi kullanın. Bu filtre tarafından döndürülen alan adları, site başına özel alan adları yerine paylaşılan kayıt hostları olarak ele alınır.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $domains | `array` | Ödeme formu yapılandırmasından toplanan paylaşılan temel alan adları. |

### Sürümden itibaren {#since}

- 2.13.0

### Kaynak {#source}

`inc/functions/domain.php` içinde tanımlanmıştır.


## Döndürür {#returns}

Normalize edilmiş ödeme formu temel alan adları dizisi.
