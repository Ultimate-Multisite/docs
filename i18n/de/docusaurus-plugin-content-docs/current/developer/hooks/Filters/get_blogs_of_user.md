---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Repliziert hier den ursprünglichen WP-Filter, um sicherzugehen.

Filtert die Liste der Sites, zu denen ein Benutzer gehört.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Ein Array von Site-Objekten, die dem Benutzer gehören. |
| $user_id | `int` | Benutzer-ID. |
| $all | `bool` | Ob das zurückgegebene Sites-Array alle Sites enthalten soll, einschließlich derjenigen, die als 'deleted', 'archived' oder 'spam' markiert sind. Standardmäßig false. |

### Seit {#since}

- 2.0.11

### Quelle {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
