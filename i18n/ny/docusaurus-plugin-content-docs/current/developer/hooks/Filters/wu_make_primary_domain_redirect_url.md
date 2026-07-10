---
id: wu_make_primary_domain_redirect_url
title: Sefa - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Imasefa URL yotumiziranso pambuyo popanga domain kukhala primary.

Imalola opanga kusintha kumene ogwiritsa ntchito amatumizidwanso pambuyo pokhazikitsa bwino domain kukhala primary. Mwachisawawa, imatumiziranso ku URL yapano pa site yaikulu, kapena ku admin URL ya site yomwe ikusinthidwa.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL yotumiziranso yachisawawa. Mwina URL yapano (ngati ndi site yaikulu) kapena admin URL ya site yapano. |
| $current_site | `int` | ID ya site yomwe domain yake ikupangidwa kukhala primary. |
| $domain | `\Domain` | Chinthu cha domain chomwe chapangidwa kukhala primary. |
| $old_primary_domains | `array` | Gulu la ma ID a ma domain omwe kale anali primary. |

### Kuyambira {#since}

- 2.0.0
### Source {#source}

Yafotokozedwa mu [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) pa mzere 639


## Returns {#returns}
URL yotumiziranso yomwe yasefedwa.
