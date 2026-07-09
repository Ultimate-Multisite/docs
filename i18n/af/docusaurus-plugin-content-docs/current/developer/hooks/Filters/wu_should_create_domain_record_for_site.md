---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Filter of Ultimate Multisite ’n domeinrekord vir ’n nuutgeskepte site moet skep.

Gebruik hierdie filter om outomatiese skepping van domeinrekords te onderdruk of uit te stel vir sites wat ’n gedeelde basisdomein vir die checkout-vorm, ’n interne gasheer, of ’n domein gebruik wat ’n ander integrasie afsonderlik sal bestuur.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Of die domeinrekord geskep moet word. |
| $site | `WP_Site` | Die nuutgeskepte site-objek. |

### Sedert {#since}

- 2.13.0

### Bron {#source}

Gedefinieer in `inc/functions/domain.php`.


## Returns {#returns}

Boolese waarde wat aandui of die domeinrekord geskep moet word.
