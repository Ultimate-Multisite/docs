---
id: wu_should_create_domain_record_for_site
title: Kichujio - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Kichujio: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Huchuja ikiwa Ultimate Multisite inapaswa kuunda rekodi ya domain kwa tovuti iliyoundwa upya.

Tumia kichujio hiki kuzuia au kuahirisha uundaji wa kiotomatiki wa rekodi ya domain kwa tovuti zinazotumia domain msingi ya fomu ya checkout iliyoshirikiwa, host ya ndani, au domain ambayo muunganisho mwingine utasimamia kivyake.

## Vigezo {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Ikiwa rekodi ya domain inapaswa kuundwa. |
| $site | `WP_Site` | Kitu cha tovuti kilichoundwa upya. |

### Tangu {#since}

- 2.13.0

### Chanzo {#source}

Imefafanuliwa katika `inc/functions/domain.php`.


## Hurejesha {#returns}

Boolean inayoonyesha ikiwa rekodi ya domain iundwe.
