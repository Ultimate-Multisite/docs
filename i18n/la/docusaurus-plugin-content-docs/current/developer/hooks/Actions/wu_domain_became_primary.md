---
id: wu_domain_became_primary
title: Actio - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Actio: wu_domain_became_primary {#action-wudomainbecameprimary}

Fit cum domain fit domain primarium pro sito.

Haec actio excitatur cum signum primary_domain cuiusdam domain ad verum statuitur, sive cum novum domain primarium creatur sive cum domain exsistens renovatur ut primarium fiat.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain quod primarium factum est. |
| $blog_id | `int` | ID blog situs affecti. |
| $was_new | `bool` | Utrum hoc sit domain nuper creatum. |

### Ex {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ad lineam 560
