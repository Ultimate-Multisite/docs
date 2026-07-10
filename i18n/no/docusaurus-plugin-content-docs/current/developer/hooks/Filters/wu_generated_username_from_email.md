---
id: wu_generated_username_from_email
title: Filter - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email {#filter-wugeneratedusernamefromemail}

Filtrerer det genererte brukernavnet for kunden.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $username | `string` | Det genererte brukernavnet. |
| $email | `string` | Den nye kunde-e-postadressen. |
| $new_user_args | `array` | Array med nye brukerargumenter, som kanskje inkluderer fornavn og etternavn. |
| $suffix | `string` | Strengen som skal legges til brukernavnet for å gjøre det unikt. |

### Siden {#since}

- 3.7.0
### Kilde {#source}

Definert i [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) på linje 488
