---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Φίλτρο - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Φίλτρο: wp_ultimo_woocommerce_checkout_fields_to_clean

Επιτρέπει στους developers να φιλτράρουν τα προεπιλεγμένα πεδία διεύθυνσης τιμολόγησης του WooCommerce.

Εφόσον το Ultimate Multisite έχει πεδία διεύθυνσης τιμολόγησης, ίσως έχει νόημα να αφαιρεθούν τα προεπιλεγμένα πεδία που εμφανίζονται από το WooCommerce στη φόρμα ολοκλήρωσης (checkout). Μοနόδρομα, δεν περνάται καμία τιμή σε αυτή τη λίστα, οπότε διατηρούνται όλα τα πεδία που έχουν ρυθμιστεί στο WooCommerce για εμφάνιση.

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) στην γραμμή 277

## Επιστρέφει {#returns}
Την λίστα των πεδίων που πρέπει να αφαιρεθούν. Οι διαθέσιμες τιμές περιλαμβάνουν billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email και billing_phone.
