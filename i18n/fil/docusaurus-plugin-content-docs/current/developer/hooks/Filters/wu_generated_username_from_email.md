---
id: wu_generated_username_from_email
title: Filter - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Nagfi-filter ng generated na username ng customer.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $username | `string` | Ang generated na username. |
| $email | `string` | Bagong email address ng customer. |
| $new_user_args | `array` | Array ng mga argument para sa bagong user, na maaaring kasama ang first at last names. |
| $suffix | `string` | String na idinaragdag sa username para maging unique ito. |

### Simula sa {#since}

- 3.7.0
### Pinagmulan {#source}

Tinukoy sa [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) sa linya 488
