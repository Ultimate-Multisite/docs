---
id: wu_page_added
title: ھەرىكەت - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

plugin ئىجادكارلىرىغا بەتلەر تىزىملىتىلغاندا قوشۇمچە ئىشلارنى ئىجرا قىلىشقا يول قويىدۇ.

پەقەت بەلگىلىك بىر بەت كۆرۈلۈۋاتقاندا ئىجرا بولىدىغان wu_page_load بىلەن ئوخشىماي، بۇ hook Ultimate Multisite كودى ئارقىلىق قوشۇلۇۋاتقان ھەر بىر باشقۇرغۇچى بېتى ئۈچۈن تىزىملىتىش ۋاقتىدا ئىجرا بولىدۇ.

## پارامېتىرلار {#parameters}

| ئىسىم | تىپى | چۈشەندۈرۈش |
|------|------|-------------|
| $page_id | `string` | بۇ بەتنىڭ ID سى. |
| $page_hook | `string` | بۇ بەتنىڭ hook ئىسمى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

228-قۇردا [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ئىچىدە بەلگىلەنگەن.
