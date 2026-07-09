---
id: wu_enforce_password_rules
title: سۈزگۈچ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# سۈزگۈچ: wu_enforce_password_rules

قوشۇمچە پارول قائىدىلىرىنى ئىجرا قىلىش-قىلماسلىقنى سۈزۈڭ.

true بولغاندا، ئەڭ قىسقا ئۇزۇنلۇق ۋە ھەرپ تەلەپلىرىنى ئىجرا قىلىدۇ. «ئىنتايىن كۈچلۈك» تەڭشىكىدە ياكى Defender Pro نىڭ كۈچلۈك پارول ئىقتىدارى ئاكتىپ بولغاندا ئاپتوماتىك قوزغىتىلىدۇ.

## پارامېتىرلار

| ئىسمى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $enforce_rules | `bool` | قوشۇمچە قائىدىلەرنى ئىجرا قىلىش-قىلماسلىق. |
| $strength_setting | `string` | باشقۇرغۇچى تەڭشىكىنىڭ قىممىتى. |
| $defender_active | `bool` | Defender Pro كۈچلۈك پارول ئىقتىدارىنىڭ ئاكتىپ ياكى ئەمەسلىكى. |

### باشلاپ

- 2.4.0
### مەنبە

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) دا 531-قۇردا ئېنىقلانغان.
