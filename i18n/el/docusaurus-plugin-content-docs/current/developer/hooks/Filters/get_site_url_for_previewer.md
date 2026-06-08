---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Επιτρέπει στους developers των plugins να φιλτράρουν (filter) τη διεύθυνση URL που χρησιμοποιείται στον προεπισκόpio (previewer).

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Το προεπιλεγμένο domínio που χρησιμοποιείται αυτή τη στιγμή, χρήσιμο για διαμορφώσεις. |
| $domain_options | `array` | Λίστα όλων των επιλογών domάιν που εισαχώθηκαν στις Ρυθμίσεις Ultimate Multisite -> Ρυθμίσεις Δικτύου -> Επιλογές Domínio. |

### Από

- 1.7.2
### Πηγή

Ορίζεται στο [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) στην γραμμή 812.


## Επιστρέφει
Το νέο domínio που πρέπει να χρησιμοποιηθεί.
