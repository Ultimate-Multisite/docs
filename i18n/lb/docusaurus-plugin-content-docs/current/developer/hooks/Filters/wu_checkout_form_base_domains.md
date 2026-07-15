---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Filtert gedeelt Checkout-Formulaire-Basis-Domainen, déi net zu mapped-domain Opzeechnunge solle ginn.

Benotzt dëse Filter, wann eng Integratioun zousätzlech Basis-Domainen fir Checkout-Formulaire-**Säit-URL**-Felder ubitt. Domainen, déi vun dësem Filter zeréckginn, ginn als gedeelt Registréierungs-Hosts behandelt amplaz als personaliséiert Domaine pro Säit.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $domains | `array` | Gedeelt Basis-Domainen, déi aus der Checkout-Formulaire-Konfiguratioun gesammelt goufen. |

### Zënter {#since}

- 2.13.0

### Quell {#source}

Definéiert an `inc/functions/domain.php`.


## Retouren {#returns}

Array vu normaliséierte Checkout-Formulaire-Basis-Domainen.
