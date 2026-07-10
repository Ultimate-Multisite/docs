---
id: wu_should_create_domain_record_for_site
title: Զտիչ - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Զտիչ՝ wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Զտում է՝ արդյոք Ultimate Multisite-ը պետք է դոմենի գրառում ստեղծի նոր ստեղծված կայքի համար։

Օգտագործեք այս զտիչը՝ ավտոմատ դոմենի գրառման ստեղծումը կասեցնելու կամ հետաձգելու այն կայքերի համար, որոնք օգտագործում են ընդհանուր վճարման ձևի բազային դոմեն, ներքին հոսթ կամ դոմեն, որը մեկ այլ ինտեգրում առանձին կկառավարի։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $create | `bool` | Արդյոք դոմենի գրառումը պետք է ստեղծվի։ |
| $site | `WP_Site` | Նոր ստեղծված կայքի օբյեկտը։ |

### Սկսած {#since}

- 2.13.0

### Աղբյուր {#source}

Սահմանված է `inc/functions/domain.php`-ում։


## Վերադարձնում է {#returns}

Բուլյան արժեք, որը ցույց է տալիս՝ արդյոք ստեղծել դոմենի գրառումը։
