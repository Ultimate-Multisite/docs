---
id: wu_domain_became_primary
title: Gnìomh - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Thèid a chur an gnìomh nuair a bhios domain na phrìomh domain airson làrach.

Thèid an action seo a bhrosnachadh nuair a thèid bratach primary_domain aig domain a shuidheachadh gu true, an dara cuid nuair a chruthaichear domain prìomh ùr no nuair a thèid domain a tha ann mu thràth ùrachadh gus a bhith na phrìomh fhear.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | An domain a dh'fhàs prìomh. |
| $blog_id | `int` | ID bloga na làraich air a bheil buaidh. |
| $was_new | `bool` | Co-dhiù an e domain ùr-chruthaichte a tha seo. |

### Bho

- 2.0.0
### Tùs

Air a mhìneachadh ann an [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) aig loidhne 560
