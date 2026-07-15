---
id: wu_should_create_domain_record_for_site
title: Lim - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Lim: wu_should_create_domain_record_for_site

Lim seb Ultimate Multisite puas yuav tsum tsim ib daim ntaub ntawv teev domain rau ib lub vev xaib tshiab uas nyuam qhuav tsim.

Siv lim no los txwv lossis ncua kev tsim ntaub ntawv teev domain tsis siv neeg rau cov vev xaib uas siv tib lub domain hauv checkout-form, ib lub host sab hauv, lossis ib lub domain uas lwm qhov kev txuas ntxiv yuav tswj nyias.

## Cov parameter {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $create | `bool` | Seb puas yuav tsum tsim daim ntaub ntawv teev domain. |
| $site | `WP_Site` | Lub object ntawm lub vev xaib tshiab uas nyuam qhuav tsim. |

### Txij li {#since}

- 2.13.0

### Qhov chaw los {#source}

Txhais tseg hauv `inc/functions/domain.php`.


## Xa rov qab {#returns}

Boolean uas qhia seb puas yuav tsim daim ntaub ntawv teev domain.
