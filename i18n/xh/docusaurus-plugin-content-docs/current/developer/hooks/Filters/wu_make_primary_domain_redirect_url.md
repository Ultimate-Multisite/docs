---
id: wu_make_primary_domain_redirect_url
title: Isihluzi - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Ihluza i-URL yokuphinda uthumele emva kokwenza i-domain ibe primary.

Ivumela abaphuhlisi ukuba balungise apho abasebenzisi baphinda bathunyelwe khona emva kokuseta ngempumelelo i-domain njenge-primary. Ngokuzenzekelayo, iphinda ithumele kwi-URL yangoku kwi-site ephambili, okanye kwi-URL ye-admin ye-site etshintshwayo.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $redirect_url | `string` | I-URL yokuphinda uthumele emiselweyo. Nokuba yi-URL yangoku (ukuba yi-site ephambili) okanye i-URL ye-admin ye-site yangoku. |
| $current_site | `int` | I-ID ye-site ene-domain eyenziwa primary. |
| $domain | `\Domain` | Into ye-domain eyenziwe primary. |
| $old_primary_domains | `array` | Uluhlu lwee-ID zee-domain ebezibe primary ngaphambili. |

### Ukususela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe kwi-[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) kumgca 639


## Ibuyisela {#returns}
I-URL yokuphinda uthumele ehluziweyo.
