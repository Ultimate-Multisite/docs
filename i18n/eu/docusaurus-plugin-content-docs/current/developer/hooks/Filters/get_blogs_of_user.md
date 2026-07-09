---
id: get_blogs_of_user
title: Iragazkia - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Iragazkia: get_blogs_of_user

Jatorrizko WP iragazkia hemen errepikatzen du, badaezpada ere.

Erabiltzaile bat kide den guneen zerrenda iragazten du.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $sites | `object[]` | Erabiltzaileari dagozkion gune-objektuen array bat. |
| $user_id | `int` | Erabiltzailearen IDa. |
| $all | `bool` | Itzulitako guneen array-ak gune guztiak izan behar dituen ala ez, 'deleted', 'archived' edo 'spam' gisa markatutakoak barne. Balio lehenetsia: false. |

### Noiztik

- 2.0.11
### Iturburua

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) fitxategian definitua, 851. lerroan.
