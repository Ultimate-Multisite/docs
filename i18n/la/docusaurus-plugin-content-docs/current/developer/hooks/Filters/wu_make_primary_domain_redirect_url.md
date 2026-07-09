---
id: wu_make_primary_domain_redirect_url
title: Filtrum - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtrum: wu_make_primary_domain_redirect_url

Filtrat URL redirectionis postquam dominium primarium factum est.

Sinit evolutores locum accommodare quo usores rediriguntur postquam dominium feliciter ut primarium constituerunt. Per defectionem, redirigit ad URL praesentem in situ principali, aut ad admin URL situs qui mutatur.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $redirect_url | `string` | URL redirectionis praedefinitus. Aut URL praesens (si situs principalis) aut admin URL situs praesentis. |
| $current_site | `int` | ID situs cuius dominium primarium fit. |
| $domain | `\Domain` | Obiectum dominii quod primarium factum est. |
| $old_primary_domains | `array` | Series ID-orum dominiorum quae antea primaria erant. |

### Ex versione

- 2.0.0
### Fons

Definitum in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ad lineam 639


## Reddit
URL redirectionis filtratum.
