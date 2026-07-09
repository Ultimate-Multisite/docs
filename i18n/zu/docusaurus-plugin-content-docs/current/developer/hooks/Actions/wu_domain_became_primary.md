---
id: wu_domain_became_primary
title: Isenzo - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Isebenza lapho i-domain iba yi-domain eyinhloko yesayithi.

Le action iqalwa lapho ifulegi le-domain elithi primary_domain lisethwa libe yi-true, kungaba lapho kudalwa i-domain entsha eyinhloko noma lapho kubuyekezwa i-domain ekhona ukuze ibe eyinhloko.

## Amapharamitha

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | I-domain eye yaba eyinhloko. |
| $blog_id | `int` | I-ID yebhulogi yesayithi elithintekile. |
| $was_new | `bool` | Ukuthi lokhu kuyi-domain esanda kudalwa yini. |

### Kusukela

- 2.0.0
### Umthombo

Kuchazwe ku-[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) emugqeni 560
