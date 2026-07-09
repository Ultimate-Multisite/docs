---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Laat pluginontwikkelaars de URL filteren die in de previewer wordt gebruikt

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $domain | `string` | Standaarddomein dat momenteel wordt gebruikt, handig voor manipulaties |
| $domain_options | `array` | Lijst van alle domeinopties ingevoerd in de Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Sinds {#since}

- 1.7.2
### Bron {#source}

Gedefinieerd in `inc/checkout/class-legacy-checkout.php` op regel 812

## Retourneert {#returns}
Nieuw domein dat moet worden gebruikt
