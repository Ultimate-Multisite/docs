---
id: wu_wp_cli_enabled_sub_commands
title: Filter - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

Φιλτράρει ποιες υπο-επιταγές (sub_commands) είναι ενεργές για αυτήν την οντότητα.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $sub_commands | `array` | Οι προεπιλεγμένες υπο-επιταγές. |
| $command_base | `string` | Η βάση που χρησιμοποιείται στην εντολή αμέσως μετά την ρίζα. |
| $this | `\Base_Manager` | Η περίπτωση του αντικειμένου. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) στην γραμμή 198
