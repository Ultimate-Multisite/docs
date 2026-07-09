---
id: wu_domain_mapping_register_filters
title: Toiming - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Toiming: wu_domain_mapping_register_filters

Mõned pluginad salvestavad URL-i enne, kui kaardistamine oli aktiivne, või koostavad URL-e teistsugusel viisil, mida ülaltoodud filtrid ei hõlma.

Sellistel juhtudel soovime lisada täiendavaid filtreid. Teisena edastatav parameeter on mangle_url callback. Me ei soovita seda filtrit otse kasutada. Selle asemel kasutage meetodit Domain_Mapping::apply_mapping_to_url.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $mangle_url | `callable` | The mangle callable. |
| $domain_mapper | `self` | This object. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) real 530
