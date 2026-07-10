---
id: get_blogs_of_user
title: Parzûn - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Parzûn: get_blogs_of_user {#filter-getblogsofuser}

Li vir Filter ya WP ya resen dubare dike, ji bo ewlehiyê.

Lîsteya malperên ku bikarhêner endamê wan e parzûn dike.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $sites | `object[]` | Rêzek ji objeyên malperê yên ku girêdayî bikarhêner in. |
| $user_id | `int` | Nasnameya bikarhêner. |
| $all | `bool` | Ka rêza malperên vegerandî divê hemû malperan bihewîne an na, tevî yên ku wekî 'deleted', 'archived', an 'spam' hatine nîşankirin. Wekî standard false e. |

### Ji guhertoyê ve {#since}

- 2.0.11
### Çavkanî {#source}

Di [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) de, li rêza 851 hatî pênasekirin.
