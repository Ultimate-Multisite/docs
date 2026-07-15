---
title: Αναζήτηση τομέα κεφαλίδας
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Αναζήτηση Domain στην Κεφαλίδα

Χρησιμοποιήστε αυτήν τη ρύθμιση όταν θέλετε μια μικρή φόρμα κεφαλίδας που ξεκινά μια αναζήτηση domain και έπειτα επιτρέπει στον πελάτη να επιλέξει από διαθέσιμα domains μέσα στο checkout του Ultimate Multisite.

## Απαιτήσεις {#requirements}

- Ultimate Multisite ενεργό σε επίπεδο δικτύου.
- Multisite Ultimate Domain Seller ενεργό σε επίπεδο δικτύου.
- Τουλάχιστον ένα ενεργό προϊόν καταχώρισης domain με:
  - το `domain_provider` ορισμένο σε διαμορφωμένο πάροχο.
  - Διαμορφωμένα υποστηριζόμενα TLDs, για παράδειγμα `com`, `net` και `org`.
- Μια έγκυρη φόρμα checkout που περιέχει το πεδίο **Επιλογή Domain**.

## Φόρμα checkout {#checkout-form}

1. Δημιουργήστε ή επεξεργαστείτε τη φόρμα checkout που χρησιμοποιείται από τη σελίδα εγγραφής.
2. Προσθέστε τα κανονικά απαιτούμενα πεδία checkout/account, συμπεριλαμβανομένου του **Ονόματος χρήστη**. Μια φόρμα checkout που περιέχει μόνο το πεδίο domain απορρίπτεται από την επικύρωση του Ultimate Multisite.
3. Προσθέστε ένα πεδίο **Επιλογή Domain**.
4. Ορίστε τη λειτουργία Επιλογής Domain σε **Μόνο Καταχώριση** όταν η ροή πρέπει να εστιάζει σε καταχωρισμένα domains αντί για δωρεάν subdomains ή υπάρχοντα domains.
5. Αντιστοιχίστε το προϊόν καταχώρισης domain σε αυτό το πεδίο.

Η σελίδα εγγραφής θα πρέπει να εμφανίζει τη φόρμα checkout, για παράδειγμα:

```text
[wu_checkout slug="domain-form"]
```

## Φόρμα κεφαλίδας {#header-form}

Προσθέστε μια μικρή φόρμα `GET` στην κεφαλίδα του ιστότοπου που στέλνει τον καταχωρισμένο όρο αναζήτησης στη σελίδα checkout ως `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Μην προεπιλέγετε domain σε προσαρμοσμένο JavaScript κεφαλίδας. Η κεφαλίδα θα πρέπει μόνο να περνά τον όρο αναζήτησης. Το script checkout του Domain Seller διαβάζει `?domain_name=example`, συμπληρώνει το πλαίσιο αναζήτησης του checkout και εκτελεί την αναζήτηση διαθεσιμότητας ώστε ο πελάτης να μπορεί να επιλέξει από τα domains που επιστρέφονται.

## Αναμενόμενη συμπεριφορά {#expected-behaviour}

Η αναζήτηση `example` στην κεφαλίδα θα πρέπει να ανοίγει:

```text
/register/?domain_name=example
```

Το checkout θα πρέπει έπειτα να εμφανίζει επιλέξιμα αποτελέσματα όπως:

- `example.com`
- `example.net`
- `example.org` μη διαθέσιμο
- άλλα TLDs που υποστηρίζονται από τον πάροχο

Μετά την επιλογή ενός διαθέσιμου αποτελέσματος, η σύνοψη παραγγελίας θα πρέπει να περιλαμβάνει το προϊόν καταχώρισης domain και το επιλεγμένο όνομα domain.

## Επαλήθευση {#verification}

1. Ανοίξτε την αρχική σελίδα.
2. Αναζητήστε ένα απλό όνομα, για παράδειγμα `example`.
3. Επιβεβαιώστε ότι το URL του checkout περιλαμβάνει `?domain_name=example`.
4. Επιβεβαιώστε ότι το πεδίο domain του checkout περιέχει `example`.
5. Επιβεβαιώστε ότι εμφανίζεται μια λίστα επιλογών domain.
6. Κάντε κλικ στο **Επιλογή** για ένα διαθέσιμο domain.
7. Επιβεβαιώστε ότι η σύνοψη παραγγελίας περιέχει `Domain Registration - example.com` ή το επιλεγμένο domain.

## Αντιμετώπιση προβλημάτων {#troubleshooting}

- Αν δεν εμφανίζεται λίστα, ελέγξτε την καρτέλα δικτύου του προγράμματος περιήγησης για `admin-ajax.php?action=wu_domain_search` και επιβεβαιώστε ότι επιστρέφει μη κενά `domains` ή `results`.
- Αν η φόρμα checkout αποτυγχάνει στην επικύρωση κατά την αποθήκευση, προσθέστε τα απαιτούμενα πεδία account όπως το **Όνομα χρήστη**.
- Αν η επιλογή ενός domain δεν ενημερώνει το καλάθι, επιβεβαιώστε ότι υπάρχει το `window.wu_checkout_form` και ότι τα assets checkout του Domain Seller φορτώνονται στη σελίδα checkout.
