---
id: wu_make_primary_domain_redirect_url
title: Tacewa - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Tacewa: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Yana tace URL na redirect bayan sanya wani domain ya zama primary.

Yana ba masu haɓakawa damar keɓance inda ake tura masu amfani bayan an yi nasarar saita wani domain a matsayin primary. Ta tsohuwa, yana redirect zuwa URL na yanzu a kan babban site, ko zuwa admin URL na site da ake gyarawa.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL na redirect na tsohuwa. Ko dai URL na yanzu (idan babban site ne) ko admin URL na site na yanzu. |
| $current_site | `int` | ID na site wanda ake sanya domain ɗinsa ya zama primary. |
| $domain | `\Domain` | Abun domain da aka sanya ya zama primary. |
| $old_primary_domains | `array` | Tsari na IDs na domains da suka kasance primary a baya. |

### Tun daga {#since}

- 2.0.0
### Tushe {#source}

An ayyana shi a cikin [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) a layi 639


## Yana dawo da {#returns}
URL na redirect da aka tace.
