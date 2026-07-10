---
id: wu_minimum_password_length
title: Filtr - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Minimal parol uzunligini filtrlaydi.

Faqat wu_enforce_password_rules true bo‘lganda majburiy qo‘llanadi.

## Parametrlar {#parameters}

| Nom | Tur | Tavsif |
|------|------|-------------|
| $min_length | `int` | Minimal parol uzunligi. Standart 12 (Defender Pro bilan mos keladi). |
| $defender_active | `bool` | Defender Pro Strong Password faol yoki yo‘qligi. |

### Joriy qilingan versiya {#since}

- 2.4.0
### Manba {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) faylida 543-qatorda aniqlangan.
