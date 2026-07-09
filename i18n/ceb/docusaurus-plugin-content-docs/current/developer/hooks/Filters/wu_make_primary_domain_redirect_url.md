---
id: wu_make_primary_domain_redirect_url
title: Salain - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Gi-filter ang redirect URL human himoong primary ang domain.

Nagtugot sa mga developer nga ipasibo kung asa i-redirect ang mga user human malampusong pagtakda sa domain isip primary. Sa default, mo-redirect ngadto sa kasamtangang URL sa main site, o ngadto sa admin URL sa site nga giusab.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $redirect_url | `string` | Ang default nga redirect URL. Bisan ang kasamtangang URL (kung main site) o ang admin URL sa kasamtangang site. |
| $current_site | `int` | Ang ID sa site kansang domain gihimong primary. |
| $domain | `\Domain` | Ang domain object nga gihimong primary. |
| $old_primary_domains | `array` | Array sa mga ID sa mga domain nga kaniadto primary. |

### Sukad

- 2.0.0
### Tinubdan

Gidefinar sa [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) sa linya 639


## Mga Gibalik
Ang gi-filter nga redirect URL.
