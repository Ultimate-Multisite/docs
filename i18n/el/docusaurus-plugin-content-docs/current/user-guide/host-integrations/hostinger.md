---
title: Ενσωμάτωση Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Ενσωμάτωση Hostinger (hPanel)

## Γενική Επισκόπηση {#overview}

Το Hostinger είναι ένας δημοφιλής πάροχος web hosting με ένα σύγχρονο control panel που ονομάζεται hPanel. Η ενσωμάτωση Ultimate Multisite Hostinger επιτρέπει την αυτόματη συγχρονισμό των ονομάτων πεδίου μεταξύ του Ultimate Multisite και του hPanel του Hostinger, επιτρέποντάς σας να διαχειρίζεστε αυτόματα τις απεικονίσεις ονομάτων πεδίου και τα υποdomínια απευθείας από το admin του WordPress σας.

## Χαρακτηριστικά {#features}

- Αυτόματη δημιουργία addon domains στο hPanel
- Αυτόματη δημιουργία υποdomίनिων στο hPanel (για εγκαταστάσεις multisite με υποdomínια)
- Αφαίρεση ονόματος πεδίου όταν διαγράφονται οι απεικονίσεις
- Απρόσκοπτη ενσωμάτωση με το API διαχείρισης ονομάτων πεδίου του hPanel

## Απαιτήσεις {#requirements}

Για να χρησιμοποιήσετε την ενσωμάτωση Hostinger, χρειάζεστε:

1. Ένα λογαριασμό Hostinger με πρόσβαση στο hPanel
2. Ένα API token από το Hostinger
3. Οι ακόλουθες σταθερές να οριστούν στο αρχείο `wp-config.php` σας:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Εναλλακτικά, μπορείτε επίσης να ορίσετε:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Οδηγίες Εγκατάστασης {#setup-instructions}

### 1. Δημιουργήστε το API Token του Hostinger σας {#1-generate-your-hostinger-api-token}

1. Συνδεθείτε στον λογαριασμό Hostinger σας και αποκτήστε πρόσβαση στο hPanel
2. Πλοηγηθείτε στις **Account Settings** → **API Tokens**
3. Κάντε κλικ στο **Create New Token**
4. Δώστε ένα περιγραφικό όνομα στο token σας (π.χ., "Ultimate Multisite")
5. Επιλέξτε τις απαραίτητες άδειες:
   - Domain management
   - Subdomain management
6. Αντιγράψτε το δημιουργημένο token και αποθηκεύστε το με ασφάλεια

### 2. Βρείτε τον Αναγνωριστικό Λογαριασμού σας (Account ID) {#2-find-your-account-id}

1. Στο hPanel, μεταβείτε στις **Account Settings** → **Account Information**
2. Ο Αναγνωριστικός σας Λογαριασμού εμφανίζεται σε αυτή τη σελίδα
3. Αντιγράψτε και αποθηκεύστε αυτόν τον ID για το επόμενο βήμα

### 3. Προσθέστε τις Σταθερές στο wp-config.php {#3-add-constants-to-wp-configphp}

Προσθέστε τις ακόλουθες σταθερές στο αρχείο `wp-config.php` σας:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Εάν ο λογαριασμός Hostinger σας χρησιμοποιεί διαφορετικό API endpoint, μπορείτε να τον προσαρμόσετε:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Ενεργοποιήστε την Ενσωμάτωση {#4-enable-the-integration}

1. Στο admin του WordPress σας, μεταβείτε στο **Ultimate Multisite > Settings**
2. Πλοηγηθείτε στην καρτέλα **Domain Mapping**
3. Κάντε κύλιση προς τα κάτω μέχρι το **Host Integrations**
4. Ενεργοποιήστε την ενσωμάτωση **Hostinger (hPanel)**
5. Κάντε κλικ στο **Save Changes**

## Πώς Λειτουργεί {#how-it-works}

### Addon Domains (Πρόσθετα Domains) {#addon-domains}

Όταν απεικονίζετε ένα όνομα πεδίου στο Ultimate Multisite:

1. Η ενσωμάτωση στέλνει ένα αίτημα στο API του Hostinger για να προσθέσει το όνομα πεδίου ως addon domain.
2. Το όνομα πεδίου ρυθμίζεται ώστε να δείχνει στον κύριο κατάλογό σας (root directory).
3. Όταν αφαιρεθεί μια απεικόνιση ονόματος πεδίου, η ενσωμάτωση αφαιρεί αυτόματα το addon domain από το hPanel.

### Subdomains (Υποdomínια) {#subdomains}

Για εγκαταστάσεις multisite με υποdomínια, όταν δημιουργείται ένα νέο site:

1. Η ενσωμάτωση εξάγει το μέρος του υποdomínio από το πλήρες όνομα πεδίου.
2. Στέλνει ένα αίτημα στο API του Hostinger για να προσθέσει το υποdomίνιο.
3. Το υποdomίνιο ρυθμίζεται ώστε να δείχνει στον κύριο κατάλογό σας (root directory).

## Σημαντικές Σημειώσεις {#important-notes}

- Η ενσωμάτωση χρησιμοποιεί το REST API του Hostinger για επικοινωνία με τον λογαριασμό σας.
- Το API token σας πρέπει να έχει τις απαραίτητες άδειες για τη διαχείριση ονομάτων πεδίου και υποdomینی.
- Η ενσωμάτωση δεν διαχειρίζεται τη ρύθμιση DNS· τα ονόματα πεδίου πρέπει ήδη να δείχνουν στον λογαριασμό σας στο Hostinger.
- Τα αιτήματα API πραγματοποιούνται με ασφάλεια μέσω HTTPS.
- Διατηρήστε το API token σας ασφαλές και μην το μοιράζεστε ποτέ δημόσια.

## Αντιμετώπιση Προβλημάτων {#troubleshooting}

### Προβλήματα Σύνδεσης API {#api-connection-issues}

- Επιβεβαιώστε ότι το API token σας είναι σωστό και δεν έχει λήξει.
- Ελέγξτε ότι ο Account ID σας είναι σωστός.
- Βεβαιωθείτε ότι το API token σας έχει τις απαραίτητες άδειες για τη διαχείριση ονομάτων πεδίου.
- Επιβεβαιώστε ότι ο λογαριασμός Hostinger σας είναι ενεργός και σε καλή κατάσταση.

### Όνομα Πεδίου Δεν Προστέθηκε {#domain-not-added}

- Ελέγξτε τα logs του Ultimate Multisite για οποιαδήποτε μηνύματα σφάλματος.
- Επιβεβαιώστε ότι το όνομα πεδίου δεν έχει ήδη προστεθεί στον λογαριασμό σας στο Hostinger.
- Βεβαιωθείτε ότι ο λογαριασμός Hostinger σας δεν έχει φτάσει το όριο για τα addon domains.
- Επιβεβαιώστε ότι το όνομα πεδίου δείχνει σωστά στους nameservers του Hostinger σας.

### Προβλήματα SSL Certificate {#ssl-certificate-issues}

- Η ενσωμάτωση δεν διαχειρίζεται την έκδοση SSL certificates.
- Το Hostinger συνήθως παρέχει δωρεάν SSL certificates μέσω του AutoSSL.
- Μπορείτε να διαχειριστείτε τα SSL certificates απευθείας στο hPanel κάτω από **SSL/TLS**.
- Εναλλακτικά, χρησιμοποιήστε το Let's Encrypt με τη λειτουργία AutoSSL του Hostinger.

## Υποστήριξη {#support}

Για επιπλέον βοήθεια με την ενσωμάτωση Hostinger, παρακαλούμε ανατρέξτε σε:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
