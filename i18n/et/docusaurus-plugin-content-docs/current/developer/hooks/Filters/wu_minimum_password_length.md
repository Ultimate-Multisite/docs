---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtreeri minimaalset parooli pikkust.

Rakendatakse ainult siis, kui wu_enforce_password_rules on true.

## Parameetrid {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimaalne parooli pikkus. Vaikimisi 12 (vastab Defender Pro-le). |
| $defender_active | `bool` | Kas Defender Pro Strong Password on aktiivne. |

### Alates {#since}

- 2.4.0
### Allikas {#source}

Määratletud failis [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) real 543
