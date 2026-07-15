---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Plugin developerlərə ödəniş səhifəsinin ön təyin edilmiş dəyərlərini filtrləməyə imkan verir.

Diqqətli olun, çatışmayan açarlar (keys) ön tərəfdə (front-end) ödənişi tamamilə pozub olar.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Lokalizasiya edilmiş dəyişənlər. |
| $checkout | `\Checkout` | Ödəniş sinifi (checkout class). |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns {#returns}
Yeni dəyişənlər massivi.
