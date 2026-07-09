---
id: wu_domain_became_primary
title: Kev nqis tes - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Tshwm sim thaum ib lub domain dhau los ua domain tseem ceeb rau ib lub site.

Qhov action no raug qhib thaum ib lub domain tus primary_domain flag raug teeb rau true, txawm yog thaum tsim ib lub domain tseem ceeb tshiab los sis thaum hloov kho ib lub domain uas twb muaj lawm kom dhau los ua qhov tseem ceeb.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Lub domain uas dhau los ua qhov tseem ceeb. |
| $blog_id | `int` | Tus blog ID ntawm lub site uas raug cuam tshuam. |
| $was_new | `bool` | Seb qhov no puas yog ib lub domain uas nyuam qhuav tsim tshiab. |

### Txij thaum {#since}

- 2.0.0
### Qhov chaw {#source}

Teev tseg hauv [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ntawm kab 560
