---
id: get_blogs_of_user
title: Criathrag - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Criathrag: get_blogs_of_user {#filter-getblogsofuser}

Ag ath-riochdachadh a’ chiad WP Filter an seo, airson deagh thomhais.

A’ criathradh liosta nan làraichean dham buin cleachdaiche.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $sites | `object[]` | Array de nithean làraich a bhuineas don chleachdaiche. |
| $user_id | `int` | ID a’ chleachdaiche. |
| $all | `bool` | Co-dhiù am bu chòir don array làraichean a thillear gach làrach a ghabhail a-steach, a’ gabhail a-steach an fheadhainn a tha comharraichte mar 'deleted', 'archived', no 'spam'. Bunaiteach false. |

### Bho {#since}

- 2.0.11
### Tùs {#source}

Air a mhìneachadh ann an [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) aig loidhne 851
