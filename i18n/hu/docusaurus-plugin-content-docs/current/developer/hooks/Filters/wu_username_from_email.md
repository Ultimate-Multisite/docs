---
id: wu_username_from_email
title: Szűrő - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Szűrő: wu_username_from_email {#filter-wuusernamefromemail}

Szűrőként használható a vásárló felhasználónévének meghatározásához.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $username | `string` | A vásárló felhasználónéve. |
| $email | `string` | Az új vásárló e-mail címe. |
| $new_user_args | `array` | Új felhasználó paraméterek tömbje, tartalmazhatja az első és utolsó nevet is. |
| $suffix | `string` | Megadott szöveg, amit a felhasználónévhez adhatunk, hogy egyedi legyen. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) fájlban, 516-sorban.
