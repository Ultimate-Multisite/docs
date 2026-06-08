---
id: wu_minimum_password_strength
title: Φίλτρο - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Φίλτρο: wu_minimum_password_strength

Φιλτράρει τη ελάχιστη απαιτούμενη δύναμη κωδικού πρόσβασης (βαθμολογία zxcvbn).

Επίπεδα δύναμης: - 0, 1: Πολύ αδύναμο - 2: Αδύναμο - 3: Μεσαίο - 4: Ισχυρό (προεπιλεγμένο)

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $min_strength | `int` | Το ελάχιστο απαιτούμενο επίπεδο δύναμης. |
| $strength_setting | `string` | Η τιμή ρύθμισης του διαχειριστή (medium, strong, super_strong). |

### Από

- 2.4.0
### Πηγή

Ορίζεται στο [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) στην γραμμή 516
