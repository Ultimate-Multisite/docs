---
id: wu_make_primary_domain_redirect_url
title: Saringan - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Nyaring URL alihan sanggeus ngajadikeun domain jadi primary.

Ngidinan developer pikeun ngaropéa ka mana user dialihkeun sanggeus hasil netepkeun hiji domain jadi primary. Sacara standar, dialihkeun ka URL ayeuna dina situs utama, atawa ka URL admin tina situs anu keur dirobah.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL alihan standar. Boh URL ayeuna (lamun situs utama) atawa URL admin tina situs ayeuna. |
| $current_site | `int` | ID situs anu domain-na keur dijadikeun primary. |
| $domain | `\Domain` | Objék domain anu dijadikeun primary. |
| $old_primary_domains | `array` | Array tina ID domain anu saméméhna primary. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) dina garis 639


## Balikan {#returns}
URL alihan anu geus disaring.
