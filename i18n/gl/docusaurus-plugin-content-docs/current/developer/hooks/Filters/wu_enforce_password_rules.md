---
id: wu_enforce_password_rules
title: Filtro - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtro: wu_enforce_password_rules

Filtra se se deben aplicar regras adicionais de contrasinal.

Cando é true, aplica requisitos de lonxitude mínima e de caracteres. Actívase automaticamente para a configuración "Super Strong" ou cando a funcionalidade Strong Password de Defender Pro está activa.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $enforce_rules | `bool` | Se se deben aplicar regras adicionais. |
| $strength_setting | `string` | O valor da configuración do administrador. |
| $defender_active | `bool` | Se Defender Pro Strong Password está activo. |

### Desde

- 2.4.0
### Fonte

Definido en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na liña 531
