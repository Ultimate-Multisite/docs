---
id: get_blogs_of_user
title: Filtr - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Powiela oryginalny filtr WP, dla pewności.

Filtruje listę witryn, do których użytkownik należy.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Tablica obiektów witryn, do których użytkownik należy. |
| $user_id | `int` | ID użytkownika. |
| $all | `bool` | Czy zwracana tablica witryn powinna zawierać wszystkie witryny, włączając te oznaczone jako „deleted”, „archived” lub „spam”. Domyślnie: false. |

### Since

- 2.0.11
### Source

Zdefiniowane w [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) w linii 851
