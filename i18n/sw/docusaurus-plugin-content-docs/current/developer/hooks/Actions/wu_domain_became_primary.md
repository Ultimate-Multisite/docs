---
id: wu_domain_became_primary
title: Kitendo - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Inatokea wakati eneo (domain) linakuwa eneo kuu (primary domain) kwa tovuti.

Kitendo hiki kinachochochewa wakati alama ya `primary_domain` ya eneo fulani inapowekwa kuwa kweli (`true`), iwe ni wakati wa kuunda eneo kuu jipya au wakati wa kubadilisha eneo lililopo liwe kuu.

## Viparametrika {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Eneo ambalo limekuwa kuu. |
| $blog_id | `int` | Kitambulisho cha blogu ya tovuti iliyohusika. |
| $was_new | `bool` | Ikiwa eneo hili ni jipya kabisa. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Kimefafanishwa katika [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) kwenye mstari wa 560
