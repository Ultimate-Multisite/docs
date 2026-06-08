---
id: wu_username_from_email
title: Filter - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

Filtrerar användarnamnet för en ny kund.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $username | `string` | Kundens användarnamn. |
| $email | `string` | Ny kunds e-postadress. |
| $new_user_args | `array` | Array med argument för den nya användaren, kan inkludera för- och efternamn. |
| $suffix | `string` | Sträng som läggs till användarnamnet för att göra det unikt. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) på rad 516
