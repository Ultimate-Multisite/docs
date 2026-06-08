---
id: wu_username_from_email
title: Filtry - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filtrowanie: wu_username_from_email

Filtruje nazwę użytkownika nowego klienta.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $username | `string` | Nazwa użytkownika klienta. |
| $email | `string` | Adres e-mail nowego klienta. |
| $new_user_args | `array` | Tablica argumentów dla nowego użytkownika, może zawierać imię i nazwisko. |
| $suffix | `string` | Dodatkowy ciąg znaków do nazwy użytkownika, aby zapewnić jej unikalność. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) w linii 516
