---
id: wu_checkout_form_base_domains
title: Филтр - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Филтр: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Доменҳои асосии муштараки шакли checkout-ро филтр мекунад, ки набояд ба сабтҳои домени mapped табдил шаванд.

Ин филтрро вақте истифода баред, ки як интегратсия доменҳои асосии иловагиро барои майдонҳои **Site URL**-и шакли checkout пешниҳод мекунад. Доменҳое, ки ин филтр бармегардонад, ҳамчун мизбонҳои муштараки сабтином баррасӣ мешаванд, на ҳамчун доменҳои фармоишии барои ҳар як сайт.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $domains | `array` | Доменҳои асосии муштарак, ки аз танзимоти шакли checkout ҷамъоварӣ шудаанд. |

### Аз версияи {#since}

- 2.13.0

### Манбаъ {#source}

Дар `inc/functions/domain.php` муайян шудааст.


## Бармегардонад {#returns}

Массиви доменҳои асосии нормализатсияшудаи шакли checkout.
