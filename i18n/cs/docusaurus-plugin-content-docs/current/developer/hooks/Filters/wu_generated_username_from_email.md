---
id: wu_generated_username_from_email
title: Filtrační funkce - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email {#filter-wugeneratedusernamefromemail}

Filtruje generované uživatelské jméno zákazníka.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $username | `string` | Generované uživatelské jméno. |
| $email | `string` | Nový e-mail zákazníka. |
| $new_user_args | `array` | Pole s argumenty pro nového uživatele, které může obsahovat jméno a příjmení. |
| $suffix | `string` | Řetězec, který se přidá k uživatelskému jménu, aby bylo unikátní. |

### Od {#since}

- 3.7.0
### Zdroj {#source}

Definováno v [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) na řádku 488
