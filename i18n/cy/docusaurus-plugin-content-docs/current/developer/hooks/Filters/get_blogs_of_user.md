---
id: get_blogs_of_user
title: Hidlydd - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Yn ail-greu'r WP Filter gwreiddiol yma, er mwyn bod yn gyflawn.

Yn hidlo'r rhestr o safleoedd y mae defnyddiwr yn perthyn iddynt.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $sites | `object[]` | Arae o wrthrychau safle sy'n perthyn i'r defnyddiwr. |
| $user_id | `int` | ID defnyddiwr. |
| $all | `bool` | A ddylai'r arae safleoedd a ddychwelir gynnwys pob safle, gan gynnwys y rhai sydd wedi'u marcio'n 'deleted', 'archived', neu 'spam'. Diofyn false. |

### Ers

- 2.0.11
### Ffynhonnell

Wedi'i ddiffinio yn [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ar linell 851
