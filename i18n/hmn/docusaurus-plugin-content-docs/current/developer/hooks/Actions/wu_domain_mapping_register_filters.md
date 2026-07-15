---
id: wu_domain_mapping_register_filters
title: Kev ua - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Kev nqis tes: wu_domain_mapping_register_filters

Qee plugin yuav khaws URL ua ntej qhov mapping pib siv tau lawm, lossis yuav tsim URLs hauv ib txoj kev txawv uas tsis muaj nyob rau hauv cov filters saum toj no.

Nyob rau tej xwm txheej zoo li ntawd, peb xav ntxiv filters ntxiv. Tus parameter thib ob uas raug xa mus yog mangle_url callback. Peb pom zoo kom tsis txhob siv filter no ncaj qha. Hloov ntawd, siv Domain_Mapping::apply_mapping_to_url method.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Lub mangle callable. |
| $domain_mapper | `self` | Yam khoom no. |

### Txij thaum {#since}

- 2.0.0
### Qhov chaw {#source}

Teev tseg hauv [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ntawm kab 530
