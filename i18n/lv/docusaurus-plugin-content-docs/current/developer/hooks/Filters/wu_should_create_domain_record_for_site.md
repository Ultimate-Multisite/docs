---
id: wu_should_create_domain_record_for_site
title: Filtrs - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtrs: wu_should_create_domain_record_for_site

Filtrē, vai Ultimate Multisite vajadzētu izveidot domēna ierakstu jaunizveidotai vietnei.

Izmantojiet šo filtru, lai nepieļautu vai atliktu automātisku domēna ieraksta izveidi vietnēm, kas izmanto kopīgu checkout formas pamata domēnu, iekšēju resursdatoru vai domēnu, kuru cita integrācija pārvaldīs atsevišķi.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Vai domēna ieraksts ir jāizveido. |
| $site | `WP_Site` | Jaunizveidotais vietnes objekts. |

### Kopš

- 2.13.0

### Avots

Definēts `inc/functions/domain.php`.


## Atgriež

Būla vērtība, kas norāda, vai izveidot domēna ierakstu.
