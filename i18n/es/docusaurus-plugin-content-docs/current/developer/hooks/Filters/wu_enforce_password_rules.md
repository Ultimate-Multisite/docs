---
id: wu_enforce_password_rules
title: Filtro - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtro: wu_enforce_password_rules

Filtrar si se deben aplicar reglas adicionales de contraseña.

Cuando es verdadero, aplica requisitos mínimos de longitud y caracteres. Se habilita automáticamente para la configuración "Super Strong" o cuando la función Defender Pro's Strong Password está activa.

## Parámetros

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Si se deben aplicar reglas adicionales. |
| $strength_setting | `string` | El valor de la configuración de administrador. |
| $defender_active | `bool` | Si la Contraseña Fuerte de Defender Pro está activa. |

### Since

- 2.4.0

### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
