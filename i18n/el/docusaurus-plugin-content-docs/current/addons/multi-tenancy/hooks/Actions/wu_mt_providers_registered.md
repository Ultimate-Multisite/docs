---
id: wu_mt_providers_registered
title: Ενέργεια - wu_mt_providers_registered
sidebar_label: wu_mt_providers_registered
_i18n_hash: 20d07d793895ff5da997696e1fc94f5d
---
# Action: wu_mt_providers_registered {#action-wumtprovidersregistered}

Εκτελείται αφού καταχωρηθούν οι προεπιλεγμένοι παρόχου (providers).

Χρησιμοποιήστε αυτόν τον hook για να καταχωρήσετε προσαρμοσμένους παρόχους.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $manager | `\Provider_Manager` | Το στιγμιότυπο (instance) του διαχειριστή παρόχων (provider manager). |

### Από {#since}

- 1.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/managers/class-provider-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/managers/class-provider-manager.php#L93) στην γραμμή 93
