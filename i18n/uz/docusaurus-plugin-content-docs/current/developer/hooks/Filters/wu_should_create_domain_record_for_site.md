---
id: wu_should_create_domain_record_for_site
title: Filtr - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtr: wu_should_create_domain_record_for_site

Ultimate Multisite yangi yaratilgan sayt uchun domen yozuvini yaratishi kerakmi-yo‘qligini filtrlaydi.

Bu filtrdan umumiy checkout-form asosiy domeni, ichki host yoki boshqa integratsiya alohida boshqaradigan domendan foydalanadigan saytlar uchun avtomatik domen-yozuv yaratishni bekor qilish yoki kechiktirish maqsadida foydalaning.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $create | `bool` | Domen yozuvi yaratilishi kerakmi-yo‘qligi. |
| $site | `WP_Site` | Yangi yaratilgan sayt obyekti. |

### Boshlab {#since}

- 2.13.0

### Manba {#source}

`inc/functions/domain.php` ichida belgilangan.


## Qaytaradi {#returns}

Domen yozuvini yaratish kerakmi-yo‘qligini bildiruvchi Boolean.
