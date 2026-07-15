---
id: wu_domain_became_primary
title: Handling - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Udløses, når et domæne bliver det primære domæne for et site.

Denne action udløses, når et domænes primary_domain-flag sættes til true, enten når der oprettes et nyt primært domæne, eller når et eksisterende domæne opdateres til at blive primært.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Det domæne, der blev primært. |
| $blog_id | `int` | Blog-ID'et for det berørte site. |
| $was_new | `bool` | Om dette er et nyoprettet domæne. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) på linje 560
