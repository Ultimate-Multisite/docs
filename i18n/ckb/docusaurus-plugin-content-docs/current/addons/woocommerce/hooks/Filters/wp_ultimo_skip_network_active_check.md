---
id: wp_ultimo_skip_network_active_check
title: فلتەر - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ڕێگا بە گەشەپێدەران بدە بۆ ئەوەی پشکنینی چالاککردنی تۆڕ بە کورتی ببڕنەوە.

ئەمە بەسوودە کاتێک ڕێکخستنەکانی بنەما لەسەر composer و ڕێکخستنە تایبەتییەکانی تر بەکاردەهێنیت، وەک Bedrock بۆ نموونە، کە تێیدا بەکارهێنانی پێوەکراوەکان وەک mu-plugins شتی ئاساییە.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ئەگەر پێویستە پشکنینەکە بازبدەین یان نا، بە بنەڕەت false ـە. |

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) لە هێڵی 272


## گەڕاوەکان {#returns}
true ئەگەر دەتەوێت پشکنینەکە بازبدەیت، ئەگەر نا false.
