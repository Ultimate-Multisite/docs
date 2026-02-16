---
title: Ενσωμάτωση cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Ενσωμάτωση με cPanel

## Επισκόπηση
Το cPanel είναι ένας από τους πιο δημοφιλείς πίνακες ελέγχου web hosting που χρησιμοποιείται από πολλούς παρόχους shared και dedicated hosting. Αυτή η ενσωμάτωση επιτρέπει τον αυτόματο συγχρονισμό domains μεταξύ του Ultimate Multisite και του cPanel, δίνοντάς σας τη δυνατότητα να προσθέτετε αυτόματα domain aliases και subdomains στον λογαριασμό σας στο cPanel.

## Χαρακτηριστικά
- Αυτόματη δημιουργία addon domains στο cPanel
- Αυτόματη δημιουργία subdomains στο cPanel (για εγκαταστάσεις multisite με subdomains)
- Αφαίρεση domain όταν διαγράφονται οι αντιστοιχίσεις

## Απαιτήσεις
Οι παρακάτω σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Προαιρετικά, μπορείτε επίσης να ορίσετε:

```php
define('WU_CPANEL_PORT', 2083); // Η προεπιλογή είναι 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Η προεπιλογή είναι /public_html
```

## Οδηγίες Ρύθμισης

### 1. Λήψη των Διαπιστευτηρίων cPanel

1. Αποκτήστε το όνομα χρήστη και τον κωδικό πρόσβασης του cPanel από τον πάροχο φιλοξενίας σας
2. Προσδιορίστε τον host του cPanel (συνήθως `cpanel.yourdomain.com` ή `yourdomain.com:2083`)

### 2. Προσθήκη Σταθερών στο wp-config.php

Προσθέστε τις παρακάτω σταθερές στο αρχείο `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Προαιρετικά, μπορείτε να προσαρμόσετε τη θύρα και τον ριζικό κατάλογο:

```php
define('WU_CPANEL_PORT', 2083); // Αλλάξτε αν το cPanel σας χρησιμοποιεί διαφορετική θύρα
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Αλλάξτε αν ο ριζικός κατάλογος των εγγράφων σας είναι διαφορετικός
```

### 3. Ενεργοποίηση της Ενσωμάτωσης

1. Στη διαχείριση του WordPress, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κάντε κύλιση προς τα κάτω στο "Host Integrations"
4. Ενεργοποιήστε την ενσωμάτωση cPanel
5. Κάντε κλικ στο "Save Changes"

## Πώς Λειτουργεί

### Addon Domains

Όταν γίνεται αντιστοίχιση ενός domain στο Ultimate Multisite:

1. Η ενσωμάτωση στέλνει ένα αίτημα στο API του cPanel για να προσθέσει το domain ως addon domain
2. Το domain ρυθμίζεται ώστε να δείχνει στον ριζικό σας κατάλογο
3. Όταν αφαιρείται μια αντιστοίχιση domain, η ενσωμάτωση αφαιρεί το addon domain από το cPanel

### Subdomains

Για εγκαταστάσεις multisite με subdomains, όταν δημιουργείται ένας νέος ιστότοπος:

1. Η ενσωμάτωση εξάγει το τμήμα subdomain από το πλήρες domain
2. Στέλνει ένα αίτημα στο API του cPanel για να προσθέσει το subdomain
3. Το subdomain ρυθμίζεται ώστε να δείχνει στον ριζικό σας κατάλογο

## Σημαντικές Σημειώσεις

- Η ενσωμάτωση χρησιμοποιεί το API2 του cPanel για να επικοινωνεί με τον λογαριασμό σας στο cPanel
- Ο λογαριασμός σας στο cPanel πρέπει να έχει δικαιώματα για προσθήκη addon domains και subdomains
- Ορισμένοι πάροχοι φιλοξενίας μπορεί να περιορίζουν τον αριθμό των addon domains ή subdomains που μπορείτε να δημιουργήσετε
- Η ενσωμάτωση δεν διαχειρίζεται τη ρύθμιση DNS· θα πρέπει να κατευθύνετε τα domains σας στη διεύθυνση IP του διακομιστή σας

## Αντιμετώπιση Προβλημάτων

### Προβλήματα Σύνδεσης API
- Επαληθεύστε ότι το όνομα χρήστη και ο κωδικός πρόσβασης του cPanel είναι σωστά
- Ελέγξτε ότι ο host του cPanel είναι σωστός και προσβάσιμος
- Βεβαιωθείτε ότι ο λογαριασμός σας στο cPanel έχει τα απαραίτητα δικαιώματα
- Δοκιμάστε να χρησιμοποιήσετε το πλήρες URL για τον host (π.χ., `https://cpanel.yourdomain.com`)

### Το Domain Δεν Προστέθηκε
- Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Επαληθεύστε ότι το domain δεν έχει ήδη προστεθεί στο cPanel
- Βεβαιωθείτε ότι ο λογαριασμός σας στο cPanel δεν έχει φτάσει το όριο για addon domains ή subdomains

### Προβλήματα με Πιστοποιητικά SSL
- Η ενσωμάτωση δεν διαχειρίζεται την έκδοση πιστοποιητικών SSL
- Θα χρειαστεί να χρησιμοποιήσετε τα εργαλεία SSL/TLS του cPanel ή τη λειτουργία AutoSSL για να εκδώσετε πιστοποιητικά SSL για τα domains σας
- Εναλλακτικά, μπορείτε να χρησιμοποιήσετε μια υπηρεσία όπως το Let's Encrypt με το AutoSSL του cPanel
