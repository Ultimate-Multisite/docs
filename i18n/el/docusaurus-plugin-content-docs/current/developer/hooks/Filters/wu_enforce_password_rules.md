---
id: wu_enforce_password_rules
title: Φίλτρο - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Φιλτράρει αν πρέπει να επιβάλλονται επιπλέον κανόνες κωδικού πρόσβασης.

Όταν είναι true, επιβάλλει ελάχιστο μήκος και απαιτήσεις χαρακτήρων. Ενεργοποιείται αυτόματα για τη ρύθμιση "Super Strong" ή όταν η λειτουργία Strong Password του Defender Pro είναι ενεργή.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Αν επιβάλλονται επιπλέον κανόνες. |
| $strength_setting | `string` | Η τιμή ρύθμισης του διαχειριστή. |
| $defender_active | `bool` | Αν είναι ενεργή η λειτουργία Strong Password του Defender Pro. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
