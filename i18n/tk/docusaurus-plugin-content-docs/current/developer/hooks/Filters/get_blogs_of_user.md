---
id: get_blogs_of_user
title: Süzgüç - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Süzgüç: get_blogs_of_user {#filter-getblogsofuser}

Asyl WP Filter-i şu ýerde ätiýaç üçin gaýtalanýar.

Ulanyjynyň degişli bolan saýtlarynyň sanawyny süzýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $sites | `object[]` | Ulanyja degişli saýt obýektleriniň massiwi. |
| $user_id | `int` | Ulanyjy ID-si. |
| $all | `bool` | Gaýtarylan saýtlar massiwiniň 'deleted', 'archived' ýa-da 'spam' hökmünde bellik edilenleri hem goşmak bilen ähli saýtlary öz içine almalydygyny görkezýär. Bellenen baha false. |

### Şondan bäri {#since}

- 2.0.11
### Çeşme {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) içinde, 851-nji setirde kesgitlenen.
