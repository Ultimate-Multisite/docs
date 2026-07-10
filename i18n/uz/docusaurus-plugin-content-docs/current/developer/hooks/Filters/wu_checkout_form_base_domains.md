---
id: wu_checkout_form_base_domains
title: Filtr - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtr: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Umumiy checkout-form asosiy domenlarini filtrlaydi, ular mapped-domain yozuvlariga aylanmasligi kerak.

Integratsiya checkout form **Sayt URL** maydonlari uchun qo‘shimcha asosiy domenlarni taqdim etganda ushbu filtrdan foydalaning. Ushbu filtr qaytargan domenlar har bir sayt uchun alohida maxsus domenlar o‘rniga umumiy ro‘yxatdan o‘tish hostlari sifatida ko‘riladi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $domains | `array` | Checkout form konfiguratsiyasidan yig‘ilgan umumiy asosiy domenlar. |

### Boshlab {#since}

- 2.13.0

### Manba {#source}

`inc/functions/domain.php` faylida aniqlangan.


## Qaytaradi {#returns}

Normallashtirilgan checkout-form asosiy domenlari massivi.
