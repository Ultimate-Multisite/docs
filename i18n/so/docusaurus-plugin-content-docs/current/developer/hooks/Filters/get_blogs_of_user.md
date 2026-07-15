---
id: get_blogs_of_user
title: Shaandheeye - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Shaandheeye: get_blogs_of_user

Waxay halkan ku celisaa WP Filter-kii asalka ahaa, si loo hubiyo.

Waxay shaandhaysaa liiska bogagga uu isticmaale ka tirsan yahay.

## Halbeegyada {#parameters}

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $sites | `object[]` | Array ka kooban walxaha bogagga ee uu isticmaalahu leeyahay. |
| $user_id | `int` | Aqoonsiga isticmaalaha. |
| $all | `bool` | In array-ga bogagga la soo celinayo uu ka koobnaado dhammaan bogagga, oo ay ku jiraan kuwa loo calaamadeeyay 'deleted', 'archived', ama 'spam'. Asalka waa false. |

### Laga bilaabo {#since}

- 2.0.11
### Isha {#source}

Waxaa lagu qeexay [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) safka 851
