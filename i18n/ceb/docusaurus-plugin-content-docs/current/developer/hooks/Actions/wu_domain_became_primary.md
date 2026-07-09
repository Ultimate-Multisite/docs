---
id: wu_domain_became_primary
title: Aksyon - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Mo-andar kung ang usa ka domain mahimong primary domain alang sa usa ka site.

Kini nga action ma-trigger kung ang primary_domain flag sa usa ka domain itakda nga true, bisan kung naghimo og bag-ong primary domain o kung nag-update sa kasamtangang domain aron mahimong primary.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Ang domain nga nahimong primary. |
| $blog_id | `int` | Ang blog ID sa naapektuhang site. |
| $was_new | `bool` | Kung kini ba usa ka bag-ong gihimong domain. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) sa linya 560
