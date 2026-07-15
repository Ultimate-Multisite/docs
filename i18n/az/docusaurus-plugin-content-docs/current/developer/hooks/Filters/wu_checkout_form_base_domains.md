---
id: wu_checkout_form_base_domains
title: Filtr - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Paylaşılan ödəmə forması baza domenlərini süzgəcdən keçirir ki, onlar xəritələnmiş domen qeydlərinə çevrilməsin.

İnteqrasiya ödəmə forması **Sayt URL-i** sahələri üçün əlavə baza domenləri təqdim etdikdə bu filter-dən istifadə edin. Bu filter tərəfindən qaytarılan domenlər hər sayt üçün xüsusi domenlər əvəzinə paylaşılan qeydiyyat hostları kimi qəbul edilir.

## Parametrlər {#parameters}

| Ad | Tip | Təsvir |
|------|------|-------------|
| $domains | `array` | Ödəmə forması konfiqurasiyasından toplanmış paylaşılan baza domenləri. |

### Versiyadan bəri {#since}

- 2.13.0

### Mənbə {#source}

`inc/functions/domain.php` daxilində müəyyən edilib.


## Qaytarır {#returns}

Normallaşdırılmış ödəmə forması baza domenlərinin massivi.
