---
id: wu_country_get_cities
title: Φίλτρο - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Επιστρέφει τη λίστα των πόλεων για μια πολιτεία σε μια χώρα.

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Λίστα με τα ονόματα των πόλεων της πολιτείας. Δεν υπάρχουν κλειδιά. |
| $country_code | `string` | Δύο-γράμματο ISO κωδικό για τη χώρα. |
| $state_code | `string` | Δύο-γράμματο ISO κωδικό για την πολιτεία. |
| $current_country | `\WP_Ultimo\Country\Country` | Αντίγραφο της τρέχουσας κλάσης. |

### Από

- 2.0.11
### Πηγή

Ορίζεται στο [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) στην γραμμή 146

## Επιστρέφει
Η φιλτραρισμένη λίστα των πολιτειών.
