---
id: get_blogs_of_user
title: Szűrő - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Az eredeti WP szűrő funkcióját emulálja itt, biztonsági tartalékként.

Szűrja a felhasználóhoz tartozó weboldalak listáját.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Egy tömb (array) felhasználóhoz tartozó weboldal objektumai. |
| $user_id | `int` | Felhasználói azonosító. |
| $all | `bool` | Megéri-e, hogy a visszaadott weboldalak tömbjában szerepeljenek az összes weboldal, beleértve azokat, amelyeket 'deleted', 'archived' vagy 'spam' jelöltek. Alapértelmezett érték: false. |

### Since

- 2.0.11
### Source

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
