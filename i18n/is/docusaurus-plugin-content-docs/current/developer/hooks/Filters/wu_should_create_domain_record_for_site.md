---
id: wu_should_create_domain_record_for_site
title: Sía - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Sía: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Síar hvort Ultimate Multisite eigi að búa til domain-færslu fyrir nýstofnaðan vef.

Notaðu þessa síu til að bæla niður eða fresta sjálfvirkri stofnun domain-færslu fyrir vefi sem nota sameiginlegt grunndomain fyrir checkout-form, innri hýsil eða domain sem önnur samþætting mun stjórna sérstaklega.

## Breytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $create | `bool` | Hvort domain-færslan eigi að vera búin til. |
| $site | `WP_Site` | Nýstofnaði vefhluturinn. |

### Síðan {#since}

- 2.13.0

### Uppruni {#source}

Skilgreint í `inc/functions/domain.php`.


## Skilar {#returns}

Boolean sem gefur til kynna hvort eigi að búa til domain-færsluna.
