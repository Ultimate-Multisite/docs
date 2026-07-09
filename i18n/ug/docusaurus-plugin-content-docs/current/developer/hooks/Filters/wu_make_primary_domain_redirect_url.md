---
id: wu_make_primary_domain_redirect_url
title: سۈزگۈچ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

دائىرە ئاساسىي قىلىنغاندىن كېيىنكى قايتا نىشانلاش URL نى سۈزۈپ بېرىدۇ.

ئىجادكارلارغا دائىرە مۇۋەپپەقىيەتلىك ھالدا ئاساسىي قىلىپ تەڭشەلگەندىن كېيىن، ئىشلەتكۈچىلەرنىڭ قەيەرگە قايتا نىشانلىنىدىغانلىقىنى خاسلاشتۇرۇشقا يول قويىدۇ. كۆڭۈلدىكى ھالەتتە، ئاساسىي توربېكەتتە نۆۋەتتىكى URL غا ياكى ئۆزگەرتىلىۋاتقان توربېكەتنىڭ باشقۇرۇش URL غا قايتا نىشانلايدۇ.

## پارامېتىرلار {#parameters}

| ئىسمى | تىپى | چۈشەندۈرۈشى |
|------|------|-------------|
| $redirect_url | `string` | كۆڭۈلدىكى قايتا نىشانلاش URL. نۆۋەتتىكى URL (ئەگەر ئاساسىي توربېكەت بولسا) ياكى نۆۋەتتىكى توربېكەتنىڭ باشقۇرۇش URL. |
| $current_site | `int` | دائىرىسى ئاساسىي قىلىنىۋاتقان توربېكەتنىڭ ID سى. |
| $domain | `\Domain` | ئاساسىي قىلىنغان دائىرە ئوبيېكتى. |
| $old_primary_domains | `array` | ئىلگىرى ئاساسىي بولغان دائىرىلەرنىڭ ID لىرىدىن تەركىب تاپقان سانلار قاتارى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) دا 639-قۇردا ئېنىقلانغان


## قايتۇرىدۇ {#returns}
سۈزۈلگەن قايتا نىشانلاش URL.
