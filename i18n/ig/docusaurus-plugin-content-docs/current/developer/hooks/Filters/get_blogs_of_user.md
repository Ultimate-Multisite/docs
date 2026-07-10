---
id: get_blogs_of_user
title: Nzacha - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Nzacha: get_blogs_of_user {#filter-getblogsofuser}

Na-emegharị WP Filter mbụ ebe a, iji mee ka ihe zuo oke.

Na-enyocha ndepụta saịtị onye ọrụ so na ha.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $sites | `object[]` | Array nke ihe saịtị nke onye ọrụ nwe. |
| $user_id | `int` | ID onye ọrụ. |
| $all | `bool` | Ma array saịtị a laghachiri kwesịrị ịnwe saịtị niile, gụnyere ndị e tinyere akara 'deleted', 'archived', ma ọ bụ 'spam'. Ndabara bụ false. |

### Kemgbe {#since}

- 2.0.11
### Isi mmalite {#source}

A kọwara ya na [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) n'ahịrị 851
