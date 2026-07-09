---
id: wu_enforce_password_rules
title: Sía - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Sía: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Síar hvort eigi að framfylgja viðbótarreglum um lykilorð.

Þegar satt er, framfylgir lágmarkslengd og stafakröfum. Virkjað sjálfkrafa fyrir stillinguna „Super Strong“ eða þegar Strong Password-eiginleiki Defender Pro er virkur.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Hvort eigi að framfylgja viðbótarreglum. |
| $strength_setting | `string` | Gildi stjórnandastillingarinnar. |
| $defender_active | `bool` | Hvort Defender Pro Strong Password sé virkt. |

### Síðan {#since}

- 2.4.0
### Uppruni {#source}

Skilgreint í [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) í línu 531
