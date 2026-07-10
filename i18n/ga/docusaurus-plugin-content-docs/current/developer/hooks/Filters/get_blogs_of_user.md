---
id: get_blogs_of_user
title: Scagaire - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Scagaire: get_blogs_of_user {#filter-getblogsofuser}

Macasamhlaíonn sé an WP Filter bunaidh anseo, ar mhaithe le dea-chleachtas.

Scagann sé liosta na suíomhanna a mbaineann úsáideoir leo.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $sites | `object[]` | Eagar d’oibiachtaí suímh a bhaineann leis an úsáideoir. |
| $user_id | `int` | ID úsáideora. |
| $all | `bool` | Cibé ar cheart don eagar suíomhanna a fhilltear gach suíomh a bheith ann, lena n-áirítear iad siúd atá marcáilte mar 'scriosta', 'cartlannaithe', nó 'spam'. Réamhshocrú bréagach. |

### Ó {#since}

- 2.0.11
### Foinse {#source}

Sainmhínithe in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ag líne 851
