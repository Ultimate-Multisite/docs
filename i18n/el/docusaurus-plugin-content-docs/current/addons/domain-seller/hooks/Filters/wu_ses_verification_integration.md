---
id: wu_ses_verification_integration
title: Φίλτρο - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Φίλτρο: επιτρέπει σε άλλο κώδικα να παρέχει το αντικείμενο ενσωμάτωσης SES.

Το επιστρεφόμενο αντικείμενο πρέπει να υλοποιεί: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $integration | `object\|null` | Το αντικείμενο ενσωμάτωσης SES, ή null. |

### Από

- 2.2.0
### Πηγή

Ορίζεται στο [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) στην γραμμή 731
