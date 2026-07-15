---
id: wu_domain_has_correct_dns
title: فلتەر - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

ڕێگە بە پەرەپێدەرانی plugin بدە بۆ زیادکردنی پشکنینە نوێکان بۆ دیاریکردنی ئەنجامەکان.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $result | `bool` | ئەنجامی ئێستا. |
| $domain | `self` | نموونەی دۆمەینی ئێستا. |
| $domains_and_ips | `array` | لیستی دۆمەینەکان و IP ـەکان کە لە پشکنینی DNS دۆزراونەتەوە. |

### لە وەشانی {#since}

- 2.0.4
### سەرچاوە {#source}

لە [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) لە هێڵی 455 پێناسە کراوە


## دەگەڕێنێتەوە {#returns}
ئەگەر DNS بە دروستی ڕێکخرابێت یان نا.
