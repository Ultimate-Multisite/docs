---
id: wu_username_from_email
title: Filter - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email

Filtrerer brukernavnet for nye kunder.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $username | `string` | Kundens nåværende brukernavn. |
| $email | `string` | Ny kundens e-postadresse. |
| $new_user_args | `array` | Array med argumenter for den nye brukeren, kan inkludere fornavn og etternavn. |
| $suffix | `string` | Strengen som skal legges til brukernavnet for å gjøre det unikt. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) på linje 516
