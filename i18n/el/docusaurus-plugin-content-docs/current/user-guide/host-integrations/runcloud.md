---
title: Ενσωμάτωση RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Ενσωμάτωση με RunCloud

## Επισκόπηση
Το RunCloud είναι μια πλατφόρμα διαχείρισης servers στο cloud που σας επιτρέπει να αναπτύσσετε και να διαχειρίζεστε εύκολα web εφαρμογές στους δικούς σας cloud servers. Αυτή η ενσωμάτωση επιτρέπει τον αυτόματο συγχρονισμό domains και τη διαχείριση πιστοποιητικών SSL μεταξύ του Ultimate Multisite και του RunCloud.

## Χαρακτηριστικά
- Αυτόματος συγχρονισμός domains
- Διαχείριση πιστοποιητικών SSL
- Αφαίρεση domain όταν διαγράφονται οι αντιστοιχίσεις

## Απαιτήσεις
Οι παρακάτω σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Οδηγίες Ρύθμισης

### 1. Λάβετε τα Διαπιστευτήρια API του RunCloud

1. Συνδεθείτε στον πίνακα ελέγχου του RunCloud
2. Μεταβείτε στο "User Profile" (κάντε κλικ στην εικόνα προφίλ σας στην επάνω δεξιά γωνία)
3. Επιλέξτε "API" από το μενού
4. Κάντε κλικ στο "Generate API Key" αν δεν έχετε ήδη
5. Αντιγράψτε το API Key και το API Secret σας

### 2. Λάβετε τα Server και App IDs

1. Στον πίνακα ελέγχου του RunCloud, μεταβείτε στο "Servers"
2. Επιλέξτε τον server όπου φιλοξενείται το WordPress multisite σας
3. Το Server ID είναι ορατό στο URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Μεταβείτε στο "Web Applications" και επιλέξτε την εφαρμογή WordPress σας
5. Το App ID είναι ορατό στο URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Προσθέστε τις Σταθερές στο wp-config.php

Προσθέστε τις παρακάτω σταθερές στο αρχείο `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Ενεργοποιήστε την Ενσωμάτωση

1. Στη διαχείριση του WordPress, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κατεβείτε στο "Host Integrations"
4. Ενεργοποιήστε την ενσωμάτωση RunCloud
5. Κάντε κλικ στο "Save Changes"

## Πώς Λειτουργεί

Όταν ένα domain αντιστοιχίζεται στο Ultimate Multisite:

1. Η ενσωμάτωση στέλνει ένα αίτημα στο API του RunCloud για να προσθέσει το domain στην εφαρμογή σας
2. Αν το domain προστεθεί επιτυχώς, η ενσωμάτωση θα επανεκδώσει επίσης τα πιστοποιητικά SSL
3. Όταν αφαιρείται μια αντιστοίχιση domain, η ενσωμάτωση θα αφαιρέσει το domain από το RunCloud

Για εγκαταστάσεις με subdomains, η ενσωμάτωση θα χειρίζεται αυτόματα τη δημιουργία subdomains στο RunCloud όταν προστίθενται νέες ιστοσελίδες στο δίκτυό σας.

## Αντιμετώπιση Προβλημάτων

### Προβλήματα Σύνδεσης API
- Βεβαιωθείτε ότι τα διαπιστευτήρια API σας είναι σωστά
- Ελέγξτε ότι τα server και app IDs σας είναι σωστά
- Βεβαιωθείτε ότι ο λογαριασμός σας στο RunCloud έχει τα απαραίτητα δικαιώματα

### Προβλήματα Πιστοποιητικών SSL
- Το RunCloud μπορεί να χρειαστεί λίγο χρόνο για την έκδοση πιστοποιητικών SSL
- Βεβαιωθείτε ότι τα domains σας δείχνουν σωστά στη διεύθυνση IP του server σας
- Ελέγξτε τις ρυθμίσεις SSL του RunCloud για την εφαρμογή σας

### Το Domain Δεν Προστέθηκε
- Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Βεβαιωθείτε ότι το domain δεν έχει ήδη προστεθεί στο RunCloud
- Βεβαιωθείτε ότι το πλάνο σας στο RunCloud υποστηρίζει πολλαπλά domains
