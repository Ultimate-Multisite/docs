---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Replikaterar det ursprungliga WP Filteret här, för säkerhets skull.

Filtrerar listan över webbplatser som en användare tillhör.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $sites | `object[]` | Ett array av webbplatsobjekt som tillhör användaren. |
| $user_id | `int` | Användar-ID. |
| $all | `bool` | Om det returnerade arrayet av webbplatser ska innehålla alla webbplatser, inklusive de som är markerade som 'deleted', 'archived' eller 'spam'. Standardvärde är false. |

### Sedan {#since}

- 2.0.11
### Källa {#source}

Definieras i [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) på rad 851
