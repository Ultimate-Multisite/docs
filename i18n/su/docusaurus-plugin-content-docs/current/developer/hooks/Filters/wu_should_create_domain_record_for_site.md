---
id: wu_should_create_domain_record_for_site
title: Saringan - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Nyaring naha Ultimate Multisite kudu nyieun rékaman domain pikeun situs nu kakara dijieun.

Paké filter ieu pikeun nyegah atawa nunda nyieun rékaman domain otomatis pikeun situs nu maké domain dasar formulir checkout babarengan, host internal, atawa domain nu bakal dikokolakeun misah ku integrasi séjén.

## Paraméter

| Nami | Tipe | Pedaran |
|------|------|-------------|
| $create | `bool` | Naha rékaman domain kudu dijieun. |
| $site | `WP_Site` | Objék situs nu kakara dijieun. |

### Ti saprak

- 2.13.0

### Sumber

Ditetepkeun dina `inc/functions/domain.php`.


## Mulangkeun

Boolean nu nuduhkeun naha rékaman domain kudu dijieun.
