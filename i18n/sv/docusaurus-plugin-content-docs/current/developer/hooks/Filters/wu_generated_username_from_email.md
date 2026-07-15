---
id: wu_generated_username_from_email
title: Filter - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Filtrerar det genererade användarnamnet för kunden.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $username | `string` | Det genererade användarnamnet. |
| $email | `string` | Kundens nya e-postadress. |
| $new_user_args | `array` | En array med argument för den nya användaren, som kanske inkluderar förnamn och efternamn. |
| $suffix | `string` | Lägger till en sträng i användarnamnet för att göra det unikt. |

### Sedan {#since}

- 3.7.0
### Källa {#source}

Definieras i [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) på rad 488
