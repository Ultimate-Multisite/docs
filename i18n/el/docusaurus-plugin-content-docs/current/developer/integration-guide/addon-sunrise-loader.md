---
title: Πρόσθετο Φορτωτής Αρχείων Sunrise
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Το Ultimate Multisite 2.8.0 προσθέτει έναν loader επέκτασης "sunrise" για add-ons και προσαρμοσμένες ενσωματώσεις MU-plugin που χρειάζονται να εκτελεστούν κατά τη διαδικασία bootstrap του WordPress (την αρχική φάση εκκίνησης) χωρίς να χρειάζεται να επεξεργαστείτε το αρχείο `wp-content/sunrise.php` που δημιουργείται.

## Πότε να το χρησιμοποιήσετε {#when-to-use-it}

Χρησιμοποιήστε μια επέκταση sunrise όταν η ενσωμάτωσή σας πρέπει να εκτελεστεί πριν φορτωθούν τα κανονικά plugins, όπως η διαδρομή για προσαρμοσμένα domains, η διαχείριση αιτημάτων ειδικά για host, ή οι πρώιμες προσαρμογές του network bootstrap.

Για τις κανονικές ενσωματώσεις, προτιμήστε τα κανονικά WordPress plugins, τα MU-plugins και τα τεκμηριωμένα hooks του Ultimate Multisite. Ο κώδικας sunrise εκτελείται πολύ νωρίς και πρέπει να παραμείνει μικρός, προληπτικός και χωρίς εξαρτήσεις.

## Συνθήκη ονοματοδοσίας αρχείου {#file-naming-convention}

Δημιουργήστε ένα αρχείο PHP με το όνομα `sunrise.php` σε έναν κατάλογο add-on που το όνομά του αρχίζει με `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ο loader σαρώνει τον κατάλογο plugins για αυτό το pattern:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Τα αρχεία που ταιριάζουν φορτώνονται με αλφαβητική σειρά βάσει της διαδρομής του add-on.

## Πού να τοποθετήσετε το αρχείο {#where-to-place-the-file}

Τοποθετήστε το αρχείο στον ριζικό κατάλογο του add-on που είναι υπεύθυνο για τη συμπεριφορά sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Η σάρωση γίνεται σε σχέση με το `WP_CONTENT_DIR`, και όχι με την τρέχουσα τιμή του `WP_PLUGIN_DIR`. Αυτό διατηρεί τη σταθερότητα της ανακάλυψης όταν η multi-tenancy ή άλλος κώδικας bootstrap αλλάζει τις σταθερές καταλόγου plugins κατά τη διάρκεια του sunrise.

Μην επεξεργαστείτε απευθείας το αρχείο `wp-content/sunrise.php` που δημιουργείται. Ο loader επιτρέπει στον προσαρμοσμένο κώδικα να επεκτείνει τη συμπεριφορά sunrise χωρίς να δημιουργεί ένα fork του βασικού αρχείου sunrise που εγκαθιστά και ενημερώνει το Ultimate Multisite.

## Διαθέσιμα hooks και filters {#hooks-and-filters-available}

Τα αρχεία sunrise των add-ons εκτελούνται αφού φορτώσει το domain mapping του Ultimate Multisite και πριν εκπέμψει το WordPress το `ms_loaded`. Σε αυτό το σημείο, ένα αρχείο sunrise μπορεί να:

- διαβάσει ή να αντικαταστήσει το `$current_site` και το `$current_blog`;
- να έχει πρόσβαση στο `$wpdb` αφού φορτώσει η διαμόρφωση της βάσης δεδομένων;
- να ορίσει σταθερές τύπου sunrise, όπως το `BLOG_ID_CURRENT_SITE`, όταν χρειάζεται;
- να διαβάσει την κατάσταση βοηθητικού sunrise του Ultimate Multisite, συμπεριλαμβανομένης της κατάστασης routing που χρησιμοποιείται από τις ενσωματώσεις multi-tenancy.

Το Ultimate Multisite εκπέμπει το `wu_sunrise_loaded` αφού ολοκληρωθεί ο loader sunrise του. Χρησιμοποιήστε αυτό το action για κώδικα που πρέπει να εκτελεστεί αφού ολοκληρωθεί το bootstrap sunrise, αλλά εξακολουθεί να ανήκει στον κύκλο ζωής του sunrise.

Καλέστε μόνο συναρτήσεις που έχουν ήδη φορτωθεί στη φάση sunrise. Αποφύγετε εργασίες βαριές για τη βάση δεδομένων, rendering templates, HTTP requests και κώδικα που υποθέτει ότι έχει ολοκληρωθεί η κανονική σειρά φόρτωσης των plugins.

## Ελάχιστο παράδειγμα {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Μετά την ανάπτυξη του αρχείου, φορτώστε ένα απευθυνόμενο domain και μια URL κύριου site που δεν είναι απευθυνόμενη για να επιβεβαιώσετε ότι και οι δύο διαδρομές κάνουν bootstrap σωστά.
