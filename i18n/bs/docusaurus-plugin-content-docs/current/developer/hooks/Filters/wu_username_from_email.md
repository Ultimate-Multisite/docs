---
id: wu_username_from_email
title: Filter - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

Filtrira korisničko ime novog klijenta.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $username | `string` | Korisničko ime klijenta. |
| $email | `string` | Adresa e-pošte novog klijenta. |
| $new_user_args | `array` | Niz argumenata za novog korisnika, koji možda uključuje ime i prezime. |
| $suffix | `string` | String koji se dodaje korisničkom imenu kako bi ga učinio jedinstvenim. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) na liniji 516
