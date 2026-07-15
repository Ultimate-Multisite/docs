---
id: get_blogs_of_user
title: سۈزگۈچ - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# سۈزگۈچ: get_blogs_of_user

تولۇق بولسۇن دەپ، بۇ يەردە ئەسلى WP Filter نى قايتا ئەكس ئەتتۈرىدۇ.

ئىشلەتكۈچى تەۋە بولغان تور بېكەتلەر تىزىملىكىنى سۈزۈپ بېرىدۇ.

## پارامېتىرلار {#parameters}

| ئىسمى | تۈرى | چۈشەندۈرۈشى |
|------|------|-------------|
| $sites | `object[]` | ئىشلەتكۈچىگە تەۋە تور بېكەت ئوبيېكتلىرىنىڭ ماسسىۋى. |
| $user_id | `int` | ئىشلەتكۈچى ID سى. |
| $all | `bool` | قايتۇرۇلغان تور بېكەتلەر ماسسىۋى 'deleted'، 'archived' ياكى 'spam' دەپ بەلگىلەنگەنلىرىنىمۇ ئۆز ئىچىگە ئالغان بارلىق تور بېكەتلەرنى ئۆز ئىچىگە ئېلىشى كېرەكمۇ-يوق. سۈكۈتتىكىسى false. |

### باشلاپ {#since}

- 2.0.11
### مەنبە {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) دا 851-قۇردا ئېنىقلانغان
