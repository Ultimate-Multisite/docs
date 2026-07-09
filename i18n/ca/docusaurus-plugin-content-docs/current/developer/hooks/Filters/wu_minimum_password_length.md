---
id: wu_minimum_password_length
title: Filtre - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtre: wu_minimum_password_length

Filtra la longitud mínima de la contrasenya.

Només s'aplica quan wu_enforce_password_rules és true.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $min_length | `int` | Longitud mínima de la contrasenya. Valor per defecte 12 (coincideix amb Defender Pro). |
| $defender_active | `bool` | Si Defender Pro Strong Password està actiu. |

### Des de

- 2.4.0
### Font

Definit a [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) a la línia 543
