---
id: get_blogs_of_user
title: Filtru - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Replică filtrul original WP aici, pentru siguranță.

Filtrează lista de site-uri la care aparține un utilizator.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Un array de obiecte de site-uri care aparțin utilizatorului. |
| $user_id | `int` | ID-ul utilizatorului. |
| $all | `bool` | Dacă array-ul de site-uri returnat ar trebui să conțină toate site-urile, inclusiv cele marcate ca 'deleted', 'archived' sau 'spam'. Implicit false. |

### Since {#since}

- 2.0.11
### Source {#source}

Definit în [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) la linia 851
