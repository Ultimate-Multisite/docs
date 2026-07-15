---
id: wu_make_primary_domain_redirect_url
title: Criathrag - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Criathrag: wu_make_primary_domain_redirect_url

Criathraich an redirect URL às dèidh àrainn a dhèanamh prìomhach.

Leigidh seo le luchd-leasachaidh gnàthachadh far an tèid luchd-cleachdaidh ath-stiùireadh às dèidh dhaibh àrainn a shuidheachadh gu soirbheachail mar phrìomh àrainn. Gu bunaiteach, nì e ath-stiùireadh chun an URL làithrich air a’ phrìomh làrach, no gu URL rianachd na làraich a thathar ag atharrachadh.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $redirect_url | `string` | An redirect URL bunaiteach. An dàrna cuid an URL làithreach (ma tha i na prìomh làrach) no URL rianachd na làraich làithrich. |
| $current_site | `int` | ID na làraich aig a bheil an àrainn ga dèanamh prìomhach. |
| $domain | `\Domain` | Nì na h-àrainn a chaidh a dhèanamh prìomhach. |
| $old_primary_domains | `array` | Array de IDan nan àrainnean a bha roimhe prìomhach. |

### Bho {#since}

- 2.0.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) aig loidhne 639


## Tilleadh {#returns}
An redirect URL criathraichte.
