---
id: wu_checkout_form_base_domains
title: Salaan - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Nagsala sa checkout-form nga base nga mga domain nga gipaambit nga dili angay mahimong mapped-domain nga mga rekord.

Gamita kini nga filter kung ang usa ka integration naghatag og dugang nga base nga mga domain para sa mga natad sa **URL sa site** sa checkout form. Ang mga domain nga gibalik niini nga filter giila isip gipaambit nga mga host sa pagparehistro imbes nga custom nga mga domain kada site.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $domains | `array` | Gipaambit nga base nga mga domain nga nakolekta gikan sa configuration sa checkout form. |

### Sukad {#since}

- 2.13.0

### Tinubdan {#source}

Gidefinar sa `inc/functions/domain.php`.


## Mga Gibalik {#returns}

Array sa mga normalized nga checkout-form base nga mga domain.
