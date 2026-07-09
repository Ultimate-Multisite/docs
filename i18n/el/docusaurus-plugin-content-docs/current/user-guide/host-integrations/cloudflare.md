---
title: Ενσωμάτωση Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Ενσωμάτωση Cloudflare {#cloudflare-integration}

## Επισκόπηση {#overview}
Το Cloudflare είναι ένα κορυφαίο δίκτυο διανομής περιεχομένου (CDN) και πάροχος ασφάλειας που βοηθά στην προστασία και την επιτάχυνση ιστότοπων. Αυτή η ενσωμάτωση επιτρέπει την αυτόματη διαχείριση τομέων μεταξύ Ultimate Multisite και Cloudflare, ιδιαίτερα για εγκαταστάσεις multisite με υποτομείς.

## Δυνατότητες {#features}
- Αυτόματη δημιουργία υποτομέων στο Cloudflare
- Υποστήριξη υποτομέων μέσω proxy
- Διαχείριση εγγραφών DNS
- Βελτιωμένη εμφάνιση εγγραφών DNS στην περιοχή διαχείρισης του Ultimate Multisite

## Απαιτήσεις {#requirements}
Οι ακόλουθες σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php` σας:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Οδηγίες Ρύθμισης {#setup-instructions}

### 1. Αποκτήστε το Cloudflare API Key σας {#1-get-your-cloudflare-api-key}

1. Συνδεθείτε στο Cloudflare Dashboard σας
2. Μεταβείτε στο «Το προφίλ μου» (κάντε κλικ στο email σας στην επάνω δεξιά γωνία)
3. Επιλέξτε «API Tokens» από το μενού
4. Δημιουργήστε ένα νέο API token με τα ακόλουθα δικαιώματα:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Αντιγράψτε το API token σας

### 2. Αποκτήστε το Zone ID σας {#2-get-your-zone-id}

1. Στο Cloudflare Dashboard σας, επιλέξτε τον τομέα που θέλετε να χρησιμοποιήσετε
2. Το Zone ID είναι ορατό στην καρτέλα «Επισκόπηση», στη δεξιά πλευρική στήλη κάτω από το «API»
3. Αντιγράψτε το Zone ID

### 3. Προσθέστε σταθερές στο wp-config.php {#3-add-constants-to-wp-configphp}

Προσθέστε τις ακόλουθες σταθερές στο αρχείο `wp-config.php` σας:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Ενεργοποιήστε την ενσωμάτωση {#4-enable-the-integration}

1. Στην περιοχή διαχείρισης του WordPress, μεταβείτε στο Ultimate Multisite > Ρυθμίσεις
2. Μεταβείτε στην καρτέλα «Αντιστοίχιση τομέων»
3. Κάντε κύλιση προς τα κάτω στις «Ενσωματώσεις φιλοξενίας»
4. Ενεργοποιήστε την ενσωμάτωση Cloudflare
5. Κάντε κλικ στο «Αποθήκευση αλλαγών»

## Πώς λειτουργεί {#how-it-works}

### Διαχείριση υποτομέων {#subdomain-management}

Όταν δημιουργείται ένας νέος ιστότοπος σε εγκατάσταση multisite με υποτομείς:

1. Η ενσωμάτωση στέλνει ένα αίτημα στο API του Cloudflare για να προσθέσει μια εγγραφή CNAME για τον υποτομέα
2. Ο υποτομέας διαμορφώνεται ώστε να περνά μέσω proxy από το Cloudflare από προεπιλογή (αυτό μπορεί να αλλάξει με φίλτρα)
3. Όταν διαγράφεται ένας ιστότοπος, η ενσωμάτωση θα αφαιρέσει τον υποτομέα από το Cloudflare

### Εμφάνιση εγγραφών DNS {#dns-record-display}

Η ενσωμάτωση βελτιώνει την εμφάνιση εγγραφών DNS στην περιοχή διαχείρισης του Ultimate Multisite με:

1. Ανάκτηση εγγραφών DNS απευθείας από το Cloudflare
2. Εμφάνιση του αν οι εγγραφές περνούν μέσω proxy ή όχι
3. Προβολή πρόσθετων πληροφοριών σχετικά με τις εγγραφές DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (παλαιότερα ονομαζόταν «Cloudflare for SaaS») είναι μια δυνατότητα του Cloudflare που επιτρέπει στους πελάτες σας να χρησιμοποιούν τους δικούς τους τομείς με SSL στο multisite δίκτυό σας. Είναι η προτεινόμενη προσέγγιση για εγκαταστάσεις multisite με αντιστοιχισμένους τομείς που χρησιμοποιούν Cloudflare, επειδή το Cloudflare διαχειρίζεται αυτόματα την έκδοση και την ανανέωση του πιστοποιητικού SSL για κάθε προσαρμοσμένο τομέα.

### Πώς διαφέρει από την τυπική ενσωμάτωση Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Τυπική ενσωμάτωση | Cloudflare Custom Hostnames |
|---|---|---|
| **Σκοπός** | Δημιουργεί αυτόματα εγγραφές DNS για υποτομείς | Επιτρέπει προσαρμοσμένους (αντιστοιχισμένους) τομείς με SSL που διαχειρίζεται το Cloudflare |
| **Ιδανικό για** | Multisite με υποτομείς | Multisite με αντιστοιχισμένους τομείς |
| **SSL** | Γίνεται ξεχωριστά | Διαχειρίζεται αυτόματα από το Cloudflare |

### Ρύθμιση του Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Στο Cloudflare Dashboard σας, ανοίξτε τη ζώνη για τον κύριο τομέα σας.
2. Μεταβείτε στο **SSL/TLS > Custom Hostnames**.
3. Προσθέστε ένα fallback origin που δείχνει στη διεύθυνση IP ή στο hostname του διακομιστή σας.
4. Για κάθε τομέα πελάτη που έχει αντιστοιχιστεί στο Ultimate Multisite, προσθέστε μια καταχώριση Custom Hostname στο Cloudflare. Μπορείτε να αυτοματοποιήσετε αυτό το βήμα χρησιμοποιώντας το Cloudflare API.
5. Το Cloudflare εκδίδει και ανανεώνει αυτόματα πιστοποιητικά TLS για κάθε προσαρμοσμένο hostname μόλις το DNS του πελάτη δείχνει στο δίκτυό σας.

Για την πλήρη αναφορά API, δείτε την [τεκμηρίωση Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ενημέρωση ορολογίας
Από το Ultimate Multisite v2.6.1, αυτή η δυνατότητα αναφέρεται ως **Cloudflare Custom Hostnames** σε όλες τις ρυθμίσεις και ετικέτες του plugin. Παλαιότερες εκδόσεις χρησιμοποιούσαν το όνομα «Cloudflare for SaaS», το οποίο είναι το υποκείμενο όνομα προϊόντος του Cloudflare.
:::

## Σημαντικές σημειώσεις {#important-notes}

Με τις πρόσφατες ενημερώσεις του Cloudflare, το wildcard proxying είναι πλέον διαθέσιμο για όλους τους πελάτες. Αυτό σημαίνει ότι η τυπική ενσωμάτωση DNS του Cloudflare είναι λιγότερο κρίσιμη για εγκαταστάσεις multisite με υποτομείς απ’ ό,τι ήταν παλαιότερα, καθώς μπορείτε απλώς να ρυθμίσετε μια wildcard εγγραφή DNS στο Cloudflare.

## Αντιμετώπιση προβλημάτων {#troubleshooting}

### Προβλήματα σύνδεσης API {#api-connection-issues}
- Επαληθεύστε ότι το API token σας είναι σωστό και έχει τα απαραίτητα δικαιώματα
- Ελέγξτε ότι το Zone ID σας είναι σωστό
- Βεβαιωθείτε ότι το Cloudflare Account σας έχει τα απαραίτητα δικαιώματα

### Ο υποτομέας δεν προστέθηκε {#subdomain-not-added}
- Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Επαληθεύστε ότι ο υποτομέας δεν έχει ήδη προστεθεί στο Cloudflare
- Βεβαιωθείτε ότι το πλάνο σας στο Cloudflare υποστηρίζει τον αριθμό εγγραφών DNS που δημιουργείτε

### Προβλήματα proxying {#proxying-issues}
- Αν δεν θέλετε οι υποτομείς να περνούν μέσω proxy, μπορείτε να χρησιμοποιήσετε το φίλτρο `wu_cloudflare_should_proxy`
- Ορισμένες δυνατότητες ενδέχεται να μη λειτουργούν σωστά όταν περνούν μέσω proxy (π.χ. ορισμένες λειτουργίες διαχείρισης του WordPress)
- Εξετάστε το ενδεχόμενο χρήσης των Page Rules του Cloudflare για παράκαμψη της cache στις σελίδες διαχείρισης
