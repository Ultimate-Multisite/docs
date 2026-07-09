---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Replikerer det oprindelige WP Filter her for en sikkerheds skyld.

Filtrerer listen over websteder, som en bruger tilhører.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sites | `object[]` | Et array af webstedsobjekter, der tilhører brugeren. |
| $user_id | `int` | Bruger-ID. |
| $all | `bool` | Om det returnerede webstedsarray skal indeholde alle websteder, inklusive dem der er markeret som 'deleted', 'archived' eller 'spam'. Standard false. |

### Siden

- 2.0.11
### Kilde

Defineret i [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) på linje 851
