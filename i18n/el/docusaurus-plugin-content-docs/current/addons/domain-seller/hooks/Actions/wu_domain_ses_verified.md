---
id: wu_domain_ses_verified
title: Action - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

Εκτελείται όταν το SES επιβεβαιώνει ότι ένα domain έχει επαληθευτεί με DKIM.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Το αντικείμενο του domain. |

### Από την έκδοση

- 2.2.0
### Πηγή

Ορίζεται στο [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) στην γραμμή 480
