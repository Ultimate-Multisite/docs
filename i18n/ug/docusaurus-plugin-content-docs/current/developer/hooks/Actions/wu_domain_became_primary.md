---
id: wu_domain_became_primary
title: ھەرىكەت - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# ھەرىكەت: wu_domain_became_primary {#action-wudomainbecameprimary}

بىر دائىرە بىر تور بېكەتنىڭ ئاساسىي دائىرىسى بولغاندا ئىجرا بولىدۇ.

بۇ ھەرىكەت بىر دائىرىنىڭ primary_domain بايرىقى true قىلىپ تەڭشەلگەندە قوزغىتىلىدۇ؛ بۇ يېڭى ئاساسىي دائىرە قۇرۇلغاندا ياكى مەۋجۇت دائىرە ئاساسىي بولۇشقا يېڭىلانغاندا يۈز بېرىدۇ.

## پارامېتىرلار {#parameters}

| ئىسمى | تۈرى | چۈشەندۈرۈشى |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ئاساسىي بولغان دائىرە. |
| $blog_id | `int` | تەسىرگە ئۇچرىغان تور بېكەتنىڭ blog IDسى. |
| $was_new | `bool` | بۇ يېڭىدىن قۇرۇلغان دائىرە ياكى ئەمەسلىكى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) دا 560-قۇردا ئېنىقلانغان.
