---
id: wu_minimum_password_length
title: Φίλτρο - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Ρυθμίζει το ελάχιστο μήκος κωδικού πρόσβασης.

Εφαρμόζεται μόνο όταν το `wu_enforce_password_rules` είναι true.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Ελάχιστο μήκος κωδικού πρόσβασης. Η προεπιλεγμένη τιμή είναι 12 (συμφωνεί με το Defender Pro). |
| $defender_active | `bool` | Αν το Defender Pro Strong Password είναι ενεργό. |

### Since {#since}

- 2.4.0
### Source {#source}

Ορίζεται στο [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) στην γραμμή 543
