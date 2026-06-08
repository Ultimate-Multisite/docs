---
id: wu_gocardless_cleanup_pending_site
title: Φίλτρο - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Φίλτρο: wu_gococardless_cleanup_pending_site

Εκτελείται πριν από τη διαγραφή ενός αποκομμένου site σε κατάσταση αναμονής που σχετίζεται με μια ακυρωμένη συνδρομή GoCardless.

Για να αποτρέψετε τη διαγραφή, επιστρέψτε `false` από αυτό το φίλτρο.

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | Το ID του blog στο WordPress του site σε κατάσταση αναμονής. |
| $membership | `\WP_Ultimo\Models\Membership` | Η ακυρωμένη συνδρομή. |
| $old_status | `string` | Η κατάσταση πριν την ακύρωση. |

### Since

- 2.0.0
### Source

Ορίζεται στο [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) στην γραμμή 1086
