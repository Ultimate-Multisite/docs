---
id: wu_username_from_email
title: Filtru - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

Filtrează numele de utilizator al clientului nou.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | Numele de utilizator al clientului. |
| $email | `string` | Adresa de e-mail a clientului nou. |
| $new_user_args | `array` | Matrice de argumente pentru utilizatorul nou, care poate include prenumele și numele de familie. |
| $suffix | `string` | Text adăugat la numele de utilizator pentru a-l face unic. |

### Disponibil de la

- 2.0.0
### Sursă

Definit în [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) la linia 516
