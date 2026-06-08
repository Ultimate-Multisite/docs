---
id: wu_generated_username_from_email
title: Szűrő - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Szűrőzi az által generált ügyfél felhasználónév.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $username | `string` | A generált felhasználónév. |
| $email | `string` | Az új ügyfél e-mail címe. |
| $new_user_args | `array` | Az új felhasználó argumentumainak tömbje, beleértve előfordulhatja az első és utolsó nevet. |
| $suffix | `string` | Összehangolja egy szöveget a felhasználónévhez, hogy az egyedi legyen. |

### Elkövetkezés:

- 3.7.0
### Forrás

Definíciója található [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) fájlban, 488-sorban.
