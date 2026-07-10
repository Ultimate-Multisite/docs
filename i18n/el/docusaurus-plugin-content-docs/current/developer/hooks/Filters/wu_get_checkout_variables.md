---
id: wu_get_checkout_variables
title: Φίλτρο - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Επιτρέπει στους developers των plugins να φιλτράρουν τις προεπιλεγμένες τιμές (pre-sets) μιας σελίδας checkout.

Προσέξτε, η απουσία κλειδιών (keys) μπορεί να καταστρέψει εντελώς το checkout στο front-end.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Τοπικά προσαρμοσμένες μεταβλητές (Localized variables). |
| $checkout | `\Checkout` | Η κλάση checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) στην γραμμή 1970


## Returns {#returns}
Το νέο array μεταβλητών.
