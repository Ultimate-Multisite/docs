---
id: wu_should_create_domain_record_for_site
title: Filtre - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Ultimate Multisite’ın yeni oluşturulan bir site için bir domain kaydı oluşturup oluşturmayacağını filtreler.

Paylaşılan bir checkout-form temel domaini, dahili bir host veya başka bir entegrasyonun ayrı olarak yöneteceği bir domain kullanan siteler için otomatik domain kaydı oluşturmayı engellemek ya da ertelemek üzere bu filter’ı kullanın.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $create | `bool` | Domain kaydının oluşturulup oluşturulmaması. |
| $site | `WP_Site` | Yeni oluşturulan site nesnesi. |

### Sürümden Beri {#since}

- 2.13.0

### Kaynak {#source}

`inc/functions/domain.php` içinde tanımlanmıştır.


## Döndürür {#returns}

Domain kaydının oluşturulup oluşturulmayacağını belirten Boolean.
