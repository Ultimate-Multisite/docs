---
title: Ενσωμάτωση ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Ενσωμάτωση ServerPilot

## Επισκόπηση
Το ServerPilot είναι μια υπηρεσία cloud για τη φιλοξενία ιστοσελίδων WordPress και άλλων PHP σε servers στο DigitalOcean, Amazon, Google ή οποιονδήποτε άλλο πάροχο. Αυτή η ενσωμάτωση επιτρέπει τον αυτόματο συγχρονισμό domains και τη διαχείριση πιστοποιητικών SSL μεταξύ του Ultimate Multisite και του ServerPilot.

## Χαρακτηριστικά
- Αυτόματος συγχρονισμός domains
- Διαχείριση πιστοποιητικών SSL με Let's Encrypt
- Αυτόματη ανανέωση SSL

## Απαιτήσεις
Οι παρακάτω σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Οδηγίες Ρύθμισης

### 1. Λήψη των Διαπιστευτηρίων API του ServerPilot

1. Συνδεθείτε στον πίνακα ελέγχου του ServerPilot
2. Μεταβείτε στο "Account" > "API"
3. Δημιουργήστε ένα νέο κλειδί API αν δεν έχετε ήδη
4. Αντιγράψτε το Client ID και το API Key σας

### 2. Λήψη του App ID

1. Στον πίνακα ελέγχου του ServerPilot, μεταβείτε στο "Apps"
2. Επιλέξτε την εφαρμογή όπου φιλοξενείται το WordPress multisite σας
3. Το App ID είναι ορατό στο URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Προσθήκη Σταθερών στο wp-config.php

Προσθέστε τις παρακάτω σταθερές στο αρχείο `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Ενεργοποίηση της Ενσωμάτωσης

1. Στη διαχείριση του WordPress, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κάντε κύλιση προς τα κάτω στο "Host Integrations"
4. Ενεργοποιήστε την ενσωμάτωση ServerPilot
5. Κάντε κλικ στο "Save Changes"

## Πώς Λειτουργεί

### Συγχρονισμός Domains

Όταν ένα domain αντιστοιχίζεται στο Ultimate Multisite:

1. Η ενσωμάτωση ανακτά την τρέχουσα λίστα domains από το ServerPilot
2. Προσθέτει το νέο domain στη λίστα (μαζί με την έκδοση www αν ισχύει)
3. Στέλνει την ενημερωμένη λίστα στο ServerPilot μέσω του API
4. Το ServerPilot ενημερώνει τη λίστα domains για την εφαρμογή σας

### Διαχείριση Πιστοποιητικών SSL

Μετά τον συγχρονισμό των domains:

1. Η ενσωμάτωση ενεργοποιεί αυτόματα το AutoSSL για την εφαρμογή σας
2. Το ServerPilot διαχειρίζεται την έκδοση και εγκατάσταση πιστοποιητικών SSL χρησιμοποιώντας το Let's Encrypt
3. Το ServerPilot διαχειρίζεται επίσης την αυτόματη ανανέωση των πιστοποιητικών SSL

## Επαλήθευση Πιστοποιητικού SSL

Η ενσωμάτωση είναι ρυθμισμένη να αυξάνει τον αριθμό των προσπαθειών επαλήθευσης πιστοποιητικού SSL για το ServerPilot, καθώς μπορεί να χρειαστεί κάποιος χρόνος για την έκδοση και εγκατάσταση των πιστοποιητικών SSL. Από προεπιλογή, θα προσπαθήσει έως 5 φορές, αλλά αυτό μπορεί να προσαρμοστεί με τη χρήση filters.

## Αντιμετώπιση Προβλημάτων

### Προβλήματα Σύνδεσης API
- Βεβαιωθείτε ότι το Client ID και το API Key είναι σωστά
- Ελέγξτε ότι το App ID είναι σωστό
- Βεβαιωθείτε ότι ο λογαριασμός σας στο ServerPilot έχει τα απαραίτητα δικαιώματα

### Προβλήματα Πιστοποιητικού SSL
- Το ServerPilot απαιτεί τα domains να έχουν έγκυρες εγγραφές DNS που δείχνουν στον server σας πριν από την έκδοση πιστοποιητικών SSL
- Αν τα πιστοποιητικά SSL δεν εκδίδονται, ελέγξτε ότι τα domains σας δείχνουν σωστά στη διεύθυνση IP του server σας
- Μπορεί να χρειαστεί κάποιος χρόνος για την έκδοση και εγκατάσταση των πιστοποιητικών SSL από το ServerPilot (συνήθως 5-15 λεπτά)

### Το Domain Δεν Προστέθηκε
- Ελέγξτε τα logs του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Βεβαιωθείτε ότι το domain δεν έχει ήδη προστεθεί στο ServerPilot
- Βεβαιωθείτε ότι το πλάνο σας στο ServerPilot υποστηρίζει τον αριθμό των domains που προσθέτετε

### Αφαίρεση Domain
- Προς το παρόν, το API του ServerPilot δεν παρέχει τρόπο αφαίρεσης μεμονωμένων domains
- Όταν αφαιρείται μια αντιστοίχιση domain στο Ultimate Multisite, η ενσωμάτωση θα ενημερώσει τη λίστα domains στο ServerPilot εξαιρώντας το αφαιρεμένο domain
