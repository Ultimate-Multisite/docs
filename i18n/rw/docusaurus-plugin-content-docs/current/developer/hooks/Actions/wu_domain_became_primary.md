---
id: wu_domain_became_primary
title: Igikorwa - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Igikorwa: wu_domain_became_primary {#action-wudomainbecameprimary}

Gikora iyo domain ibaye domain y'ibanze y'urubuga.

Iki gikorwa gitangizwa iyo flag ya domain ya primary_domain ishyizwe kuri true, haba igihe haremwa domain nshya y'ibanze cyangwa igihe domain isanzwe ivugururwa kugira ngo ibe iy'ibanze.

## Parameters {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain yabaye iy'ibanze. |
| $blog_id | `int` | Blog ID y'urubuga rwagizeho ingaruka. |
| $was_new | `bool` | Niba iyi ari domain nshya yaremwe. |

### Guhera {#since}

- 2.0.0
### Inkomoko {#source}

Byasobanuwe muri [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ku murongo wa 560
