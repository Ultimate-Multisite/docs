---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filter die minimum wagwoordlengte.

Word slegs afgedwing wanneer `wu_enforce_password_rules` waar is.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimum wagwoordlengte. Standaard 12 (stem ooreen met Defender Pro). |
| $defender_active | `bool` | Of Defender Pro Strong Password aktief is. |

### Sedert {#since}

- 2.4.0
### Bron {#source}

Word gedefinieer in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) by lyn 543
