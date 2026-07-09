---
id: wu_domain_became_primary
title: Ago - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Ago: wu_domain_became_primary {#action-wudomainbecameprimary}

Ekfunkcias kiam domajno fariĝas la ĉefa domajno por retejo.

Ĉi tiu ago estas ekigita kiam la flago primary_domain de domajno estas agordita al true, aŭ dum kreado de nova ĉefa domajno aŭ dum ĝisdatigo de ekzistanta domajno por fariĝi ĉefa.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | The domain that became primary. |
| $blog_id | `int` | The blog ID of the affected site. |
| $was_new | `bool` | Whether this is a newly created domain. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ĉe linio 560
