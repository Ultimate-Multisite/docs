---
id: wu_domain_mapping_register_filters
title: Isenzo - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Isenzo: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Ezinye ii-plugin ziya kugcina i-URL ngaphambi kokuba mapping isebenze okanye ziya kwakha ii-URL ngendlela eyahlukileyo engabandakanywanga kwiifilter ezingentla.

Kwiimeko ezinjalo, sifuna ukongeza iifilter ezongezelelweyo. Iparameter yesibini edlulisiweyo yi-callback ye-mangle_url. Sicebisa ukuba ungayisebenzisi le filter ngqo. Endaweni yoko, sebenzisa indlela Domain_Mapping::apply_mapping_to_url.

## Iiparameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | I-callable ye-mangle. |
| $domain_mapper | `self` | Le object. |

### Ukusukela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe kwi [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) kumgca 530
