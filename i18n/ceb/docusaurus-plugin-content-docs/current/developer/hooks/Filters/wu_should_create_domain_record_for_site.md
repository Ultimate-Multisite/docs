---
id: wu_should_create_domain_record_for_site
title: Pagsala - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Nag-filter kon ang Ultimate Multisite ba angay mohimo og domain record para sa bag-ong nahimong site.

Gamita kini nga filter aron pugngan o i-defer ang awtomatikong paghimo og domain-record para sa mga site nga naggamit og shared checkout-form base domain, internal host, o domain nga laing integration ang modumala nga bulag.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $create | `bool` | Kon ang domain record ba angay himoon. |
| $site | `WP_Site` | Ang bag-ong nahimong site object. |

### Sukad {#since}

- 2.13.0

### Tinubdan {#source}

Gidefine sa `inc/functions/domain.php`.


## Mga Pagbalik {#returns}

Boolean nga nagpakita kon mohimo ba sa domain record.
