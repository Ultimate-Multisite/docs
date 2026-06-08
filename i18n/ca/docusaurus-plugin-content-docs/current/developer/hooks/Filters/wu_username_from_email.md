---
id: wu_username_from_email
title: Filtre - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

Filtrar el nom d'usuari del nou client.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $username | `string` | Nom d'usuari del client. |
| $email | `string` | Adreça de correu electrònic del nou client. |
| $new_user_args | `array` | Araieu d'arguments per a l'usuari nou, que pot incloure noms i cognoms. |
| $suffix | `string` | Cadena addicional per afegir al nom d'usuari i fer-lo únic. |

### Des de

- 2.0.0
### Font

Definid a [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) a la línia 516
