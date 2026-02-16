---
title: Ενσωμάτωση Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Ενσωμάτωση Cloudways

## Επισκόπηση
Το Cloudways είναι μια managed cloud hosting πλατφόρμα που σας επιτρέπει να αναπτύσσετε WordPress ιστοσελίδες σε διάφορους παρόχους cloud όπως DigitalOcean, AWS, Google Cloud και άλλους. Αυτή η ενσωμάτωση επιτρέπει τον αυτόματο συγχρονισμό domains και τη διαχείριση πιστοποιητικών SSL μεταξύ του Ultimate Multisite και του Cloudways.

## Χαρακτηριστικά
- Αυτόματος συγχρονισμός domains
- Διαχείριση πιστοποιητικών SSL
- Υποστήριξη για επιπλέον domains
- Επικύρωση DNS για πιστοποιητικά SSL

## Απαιτήσεις
Οι παρακάτω σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Προαιρετικά, μπορείτε επίσης να ορίσετε:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Οδηγίες Ρύθμισης

### 1. Αποκτήστε τα Διαπιστευτήρια API του Cloudways

1. Συνδεθείτε στο dashboard του Cloudways
2. Μεταβείτε στο "Account" > "API Keys"
3. Δημιουργήστε ένα API key αν δεν έχετε ήδη
4. Αντιγράψτε το email και το API key σας

### 2. Αποκτήστε τα IDs του Server και της Εφαρμογής

1. Στο dashboard του Cloudways, μεταβείτε στο "Servers"
2. Επιλέξτε τον server όπου φιλοξενείται το WordPress multisite σας
3. Το Server ID είναι ορατό στο URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Μεταβείτε στο "Applications" και επιλέξτε την εφαρμογή WordPress σας
5. Το App ID είναι ορατό στο URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Προσθέστε τις Σταθερές στο wp-config.php

Προσθέστε τις παρακάτω σταθερές στο αρχείο `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Αν έχετε επιπλέον domains που πρέπει πάντα να συμπεριλαμβάνονται:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Ενεργοποιήστε την Ενσωμάτωση

1. Στο WordPress admin, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κάντε scroll στο "Host Integrations"
4. Ενεργοποιήστε την ενσωμάτωση Cloudways
5. Κάντε κλικ στο "Save Changes"

## Πώς Λειτουργεί

### Συγχρονισμός Domains

Όταν γίνεται mapping ενός domain στο Ultimate Multisite:

1. Η ενσωμάτωση ανακτά όλα τα τρέχοντα mapped domains
2. Προσθέτει το νέο domain στη λίστα (μαζί με την www έκδοση αν χρειάζεται)
3. Στέλνει την πλήρη λίστα στο Cloudways μέσω του API
4. Το Cloudways ενημερώνει τα domain aliases για την εφαρμογή σας

Σημείωση: Το API του Cloudways απαιτεί την αποστολή της πλήρους λίστας domains κάθε φορά, όχι απλώς την προσθήκη ή αφαίρεση μεμονωμένων domains.

### Διαχείριση Πιστοποιητικών SSL

Μετά τον συγχρονισμό των domains:

1. Η ενσωμάτωση ελέγχει ποια domains έχουν έγκυρες εγγραφές DNS που δείχνουν στον server σας
2. Στέλνει αίτημα στο Cloudways για εγκατάσταση πιστοποιητικών SSL από το Let's Encrypt για αυτά τα domains
3. Το Cloudways διαχειρίζεται την έκδοση και εγκατάσταση των πιστοποιητικών SSL

## Επιπλέον Domains

Η σταθερά `WU_CLOUDWAYS_EXTRA_DOMAINS` σας επιτρέπει να καθορίσετε επιπλέον domains που πρέπει πάντα να συμπεριλαμβάνονται κατά τον συγχρονισμό με το Cloudways. Αυτό είναι χρήσιμο για:

- Domains που δεν διαχειρίζεται το Ultimate Multisite
- Wildcard domains (π.χ., `*.example.com`)
- Domains ανάπτυξης ή staging

## Αντιμετώπιση Προβλημάτων

### Προβλήματα Σύνδεσης API
- Βεβαιωθείτε ότι το email και το API key σας είναι σωστά
- Ελέγξτε ότι τα IDs του server και της εφαρμογής είναι σωστά
- Βεβαιωθείτε ότι ο λογαριασμός σας στο Cloudways έχει τα απαραίτητα δικαιώματα

### Προβλήματα Πιστοποιητικών SSL
- Το Cloudways απαιτεί τα domains να έχουν έγκυρες εγγραφές DNS που δείχνουν στον server σας πριν εκδώσει πιστοποιητικά SSL
- Η ενσωμάτωση επικυρώνει τις εγγραφές DNS πριν ζητήσει πιστοποιητικά SSL
- Αν δεν εκδίδονται πιστοποιητικά SSL, ελέγξτε ότι τα domains σας δείχνουν σωστά στη διεύθυνση IP του server σας

### Το Domain Δεν Προστέθηκε
- Ελέγξτε τα logs του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Βεβαιωθείτε ότι το domain δεν έχει ήδη προστεθεί στο Cloudways
- Βεβαιωθείτε ότι το πλάνο σας στο Cloudways υποστηρίζει τον αριθμό των domains που προσθέτετε
