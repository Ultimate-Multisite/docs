---
id: networks_pre_user_is_network_admin
title: Զտիչ - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Զտիչ՝ networks_pre_user_is_network_admin

Զտում է այն ցանցերը, որոնց օգտատերը ադմինիստրատորն է՝ գործընթացը կարճ միացնելու համար։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $ | `array\|bool\|null` | Ցանցերի ID-ների ցանկ կամ false։ null-ից բացի ցանկացած արժեք կարճ կմիացնի գործընթացը։ |
| $ | `int` | Օգտատիրոջ ID, որի համար պետք է վերադարձվեն ցանցերը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688)-ում՝ 688-րդ տողում
