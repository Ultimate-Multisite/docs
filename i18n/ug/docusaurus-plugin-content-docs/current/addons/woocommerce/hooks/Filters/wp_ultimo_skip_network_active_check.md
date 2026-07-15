---
id: wp_ultimo_skip_network_active_check
title: سۈزگۈچ - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# سۈزگۈچ: wp_ultimo_skip_network_active_check

تەرەققىياتچىلارغا network activation تەكشۈرۈشىنى قىسقا يولدىن ئاتلاپ ئۆتۈشكە يول قويىدۇ.

بۇ composer ئاساسىدىكى ۋە باشقا خاس تەڭشەكلەرنى ئىشلەتكەندە پايدىلىق، مەسىلەن Bedrock غا ئوخشاش، بۇنداق ئەھۋاللاردا plugin لارنى mu-plugins سۈپىتىدە ئىشلىتىش ئادەتتىكى ئۇسۇل.

## پارامېتىرلار {#parameters}

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $skip_network_activation_check | `bool` | تەكشۈرۈشنى ئاتلاپ ئۆتۈشىمىز كېرەكمۇ-يوق، كۆڭۈلدىكى قىممىتى false. |

### دىن باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) دا 272-قۇردا ئېنىقلانغان


## قايتۇرىدۇ {#returns}
تەكشۈرۈشنى ئاتلاپ ئۆتمەكچى بولسىڭىز true، ئۇنداق بولمىسا false.
