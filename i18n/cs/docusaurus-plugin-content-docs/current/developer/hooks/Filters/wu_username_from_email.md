---
id: wu_username_from_email
title: Filtrační funkce - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filtrační hook: wu_username_from_email

Filtruje uživatelské jméno nového zákazníka.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $username | `string` | Uživatelské jméno zákazníka. |
| $email | `string` | E-mailová adresa nového zákazníka. |
| $new_user_args | `array` | Pole s argumenty pro nového uživatele, které může obsahovat jméno a příjmení. |
| $suffix | `string` | Řetězec, který se přidá k uživatelskému jménu, aby bylo unikátní. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) na řádku 516
