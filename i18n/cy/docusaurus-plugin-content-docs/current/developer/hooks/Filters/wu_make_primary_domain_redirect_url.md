---
id: wu_make_primary_domain_redirect_url
title: Hidlydd - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Hidlydd: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Yn hidlo'r URL ailgyfeirio ar ôl gwneud parth yn brif barth.

Yn caniatáu i ddatblygwyr addasu lle caiff defnyddwyr eu hailgyfeirio ar ôl gosod parth yn llwyddiannus fel prif barth. Yn ddiofyn, mae'n ailgyfeirio i'r URL presennol ar y prif site, neu i URL gweinyddu'r site sy'n cael ei addasu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $redirect_url | `string` | Yr URL ailgyfeirio diofyn. Naill ai'r URL presennol (os yw'n brif site) neu URL gweinyddu'r site presennol. |
| $current_site | `int` | ID y site y mae ei barth yn cael ei wneud yn brif barth. |
| $domain | `\Domain` | Y gwrthrych parth a wnaed yn brif barth. |
| $old_primary_domains | `array` | Arae o IDs parthau a oedd yn brif barthau o'r blaen. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi'i ddiffinio yn [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ar linell 639


## Yn dychwelyd {#returns}
Yr URL ailgyfeirio wedi'i hidlo.
