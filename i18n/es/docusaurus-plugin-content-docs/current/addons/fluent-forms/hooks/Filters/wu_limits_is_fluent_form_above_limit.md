---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filtro: wu_limits_is_fluent_form_above_limit

Comprueba si un tipo de formulario dado está permitido en este plan. Permite a los desarrolladores de plugins filtrar el valor de retorno.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $value | `bool` | Si el tipo de formulario está por encima del límite o no |
| $form_type | `string` | El tipo de formulario que se está verificando |
| $form_count | `int` | Conteo actual de formularios |
| $quota | `int` | La cuota permitida |

### Desde

- 1.0.0

### Fuente

- Definido en [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) en la línea 56
- Definido en [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) en la línea 89
