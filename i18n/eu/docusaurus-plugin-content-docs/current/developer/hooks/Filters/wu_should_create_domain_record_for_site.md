---
id: wu_should_create_domain_record_for_site
title: Iragazkia - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Iragazkia: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Ultimate Multisite-k sortu berri den gune baterako domeinu-erregistro bat sortu behar duen iragazten du.

Erabili iragazki hau domeinu-erregistroen sorrera automatikoa ezabatzeko edo atzeratzeko, ordainketa-inprimaki partekatuaren oinarrizko domeinua, barneko ostalari bat edo beste integrazio batek bereizita kudeatuko duen domeinu bat erabiltzen duten guneetarako.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $create | `bool` | Domeinu-erregistroa sortu behar den ala ez. |
| $site | `WP_Site` | Sortu berri den gunearen objektua. |

### Noiztik {#since}

- 2.13.0

### Iturria {#source}

`inc/functions/domain.php` fitxategian definituta.


## Itzultzen du {#returns}

Domeinu-erregistroa sortu behar den ala ez adierazten duen balio boolearra.
