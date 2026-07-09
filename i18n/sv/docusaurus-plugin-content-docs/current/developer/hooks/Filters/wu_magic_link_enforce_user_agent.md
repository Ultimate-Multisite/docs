---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filtrerar om man ska tvinga fram verifiering av användaragenten (user agent).

Om du ställer in värdet till `false` tillåts det att tokens fungerar över olika webbläsare och enheter. Detta minskar säkerheten men ökar användarvänligheten.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $enforce | `bool` | Om man ska tvinga fram matchning av användaragenten. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) på rad 410
