---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Bestäm om IP-adressverifiering ska tvingas fram.

Om du ställer in värdet till `false` tillåts det att tokens fungerar från olika nätverk. Detta minskar säkerheten men ökar användbarheten (till exempel för mobilanvändare som byter nätverk).

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $enforce | `bool` | Om IP-adressmatchning ska tvingas fram. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) på rad 422
