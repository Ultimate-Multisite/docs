---
id: wu_domain_became_primary
title: Çalakî - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Dema ku domainek ji bo malperek dibe domaina sereke, tê xebitandin.

Ev action tê destpêkirin dema ku ala primary_domain ya domainek wek true tê danîn, an dema afirandina domaina sereke ya nû, an jî dema nûkirina domaineke heyî da ku bibe sereke.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domaina ku bû sereke. |
| $blog_id | `int` | Blog ID ya malpera bandorkirî. |
| $was_new | `bool` | Ka ev domaineke nû afirandî ye an na. |

### Ji guhertoyê ve {#since}

- 2.0.0
### Çavkanî {#source}

Di [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) de, li rêza 560 hatiye diyarkirin.
