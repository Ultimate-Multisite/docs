---
id: wu_should_create_domain_record_for_site
title: Filtr - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtr: wu_should_create_domain_record_for_site

Ultimate Multisite-ın yeni yaradılmış sayt üçün domen qeydi yaradıb-yaratmamasını filtrləyir.

Bu filtrdən paylaşılan ödəniş forması baza domenindən, daxili hostdan və ya başqa bir inteqrasiyanın ayrıca idarə edəcəyi domendən istifadə edən saytlar üçün avtomatik domen qeydi yaradılmasını dayandırmaq və ya təxirə salmaq üçün istifadə edin.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $create | `bool` | Domen qeydinin yaradılıb-yaradılmaması. |
| $site | `WP_Site` | Yeni yaradılmış sayt obyekti. |

### Versiyadan etibarən {#since}

- 2.13.0

### Mənbə {#source}

`inc/functions/domain.php` daxilində təyin edilib.


## Qaytarır {#returns}

Domen qeydinin yaradılıb-yaradılmamasını göstərən boolean.
