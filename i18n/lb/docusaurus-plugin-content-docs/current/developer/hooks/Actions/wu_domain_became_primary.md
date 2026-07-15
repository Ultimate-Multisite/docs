---
id: wu_domain_became_primary
title: Aktioun - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Gëtt ausgeléist, wann eng Domain déi primär Domain fir e Site gëtt.

Dës Action gëtt ausgeléist, wann de `primary_domain`-Fändel vun enger Domain op true gesat gëtt, entweder beim Erstelle vun enger neier primärer Domain oder beim Aktualiséiere vun enger existéierender Domain, fir primär ze ginn.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | D'Domain, déi primär gouf. |
| $blog_id | `int` | D'Blog-ID vum betraffene Site. |
| $was_new | `bool` | Ob dëst eng nei erstallt Domain ass. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) op Linn 560
