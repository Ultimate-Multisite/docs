---
title: Ενσωμάτωση CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Ενσωμάτωση CyberPanel

Αυτό το руководство εξηγεί πώς να ρυθμίσετε την ενσωμάτωση Ultimate Multisite CyberPanel ώστε οι ανακαταmapωμένοι τομείς (domains) στο network σας να προστίθενται (και να αφαιρούνται) αυτόματα ως virtual hosts στο CyberPanel, με επιλογή αυτόματης παροχής SSL μέσω Let's Encrypt.

## Τι κάνει

- Όταν ένας τομέας ρυθμίζεται (mapped) στο Ultimate Multisite, η ενσωμάτωση καλεί το CyberPanel API για να δημιουργήσει έναν virtual host για αυτόν τον τομέα.
- Όταν αφαιρείται η ρύθμιση του τομέα, η ενσωμάτωση καλεί το API για να διαγράψει τον αντίστοιχο virtual host.
- Όταν ενεργοποιείται το auto-SSL, η ενσωμάτωση εκκινεί άμεσα την έκδοση πιστοποιητικού Let's Encrypt αφού δημιουργηθεί ο virtual host.
- Επιπλέον, προσθέτει/αφαιρεί το alias `www.` ανάλογα με τη ρύθμιση «Auto-create www subdomain» στις ρυθμίσεις Domain Mapping.

## Προαπαιτούμενα

- Μια λειτουργική instance CyberPanel (προτείνεται v2.3 ή νεότερη) που είναι προσβάσιμη από τον server του WordPress σας.
- Ένα υπάρχον website στο CyberPanel που εξυπηρετεί ήδη τη ρίζα του network του WordPress σας. Η ενσωμάτωση συνδέεται με νέους virtual hosts σε αυτόν τον server.
- Ενεργοποίηση της πρόσβασης στο CyberPanel API. Η ταυτοποίηση χρησιμοποιεί το username και το password του διαχειριστή του CyberPanel σας.
- Τα DNS records για τους ανακαταmapωμένους τομείς πρέπει ήδη να δείχνουν στην IP διεύθυνση του server σας πριν το auto-SSL μπορεί να εκδώσει ένα έγκυρο πιστοποιητικό.

## Απαιτήσεις

Οι ακόλουθες σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php` σας:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Εναλλακτικά, μπορείτε επίσης να ορίσετε:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — εκδίδει Let's Encrypt SSL μετά τη δημιουργία του τομέα
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Χρησιμοποιείται για την επαφή του πιστοποιητικού SSL
```

## Οδηγίες Εγκατάστασης

### 1. Ενεργοποίηση του CyberPanel API

1. Συνδεθείτε στο dashboard του CyberPanel σας ως διαχειριστής.
2. Πηγαίνετε σε **Security** > **SSL** και επιβεβαιώστε ότι το SSL είναι ενεργό στην ίδια διεπαφή του CyberPanel (απαιτείται για ασφαλή κλήσεις API).
3. Το CyberPanel API είναι διαθέσιμο εξ ορισμού στο `https://your-server-ip:8090/api/`. Δεν απαιτούνται επιπλέον βήματα για την ενεργοποίησή του — είναι ενεργό εξ ορισμού για τους χρήστες διαχειριστές.

### 2. Προσθήκη Σταθερών στο wp-config.php

Προσθέστε τις ακόλουθες σταθερές στο αρχείο `wp-config.php` σας πριν από τη γραμμή `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Για να ενεργοποιήσετε το auto-SSL (προτείνεται):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Ενεργοποίηση της Ενσωμάτωσης

1. Στο admin του WordPress network σας, πηγαίνετε σε **Ultimate Multisite** > **Settings**.
2. Πλοηγηθείτε στην καρτέλα **Domain Mapping**.
3. Κάντε scroll προς τα κάτω μέχρι **Host Integrations**.
4. Ενεργοποιήστε την ενσωμάτωση **CyberPanel**.
5. Κάντε κλικ στο **Save Changes**.

### 4. Επιβεβαίωση Συνδεσιμότητας

Χρησιμοποιήστε το ενσωματωμένο τεστ σύνδεσης στο wizard ρυθμίσεων:

1. Πηγαίνετε σε **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Κάντε κλικ στο **Test Connection**.
3. Το μήνυμα επιτυχίας επιβεβαιώνει ότι το plugin μπορεί να φτάσει στο CyberPanel API και να ταυτοποιηθεί σωστά.

## Πώς Λειτουργεί

### Domain Mapping

Όταν ένας τομέας ρυθμίζεται (mapped) στο Ultimate Multisite:

1. Η ενσωμάτωση στέλνει ένα `POST` αίτημα στο `/api/createWebsite` στον host του CyberPanel σας.
2. Το CyberPanel δημιουργεί έναν νέο virtual host για τον τομέα κάτω από το ρυθμισμένο package.
3. Η ρίζα του εγγράφου (document root) ρυθμίζεται να δείχνει στον κατάλογο ρίζας του network του WordPress σας.
4. Όταν αφαιρείται η ρύθμιση του τομέα, η ενσωμάτωση καλεί το `/api/deleteWebsite` για να καθαρίσει τον virtual host.

### Auto-SSL

Όταν το `WU_CYBERPANEL_AUTO_SSL` είναι `true`:

1. Μετά τη δημιουργία του virtual host, η ενσωμάτωση καλεί το `/api/issueSSL` για τον τομέα.
2. Το CyberPanel ζητά ένα πιστοποιητικό Let's Encrypt χρησιμοποιώντας το ACME HTTP-01 challenge.
3. Το πιστοποιητικό ανανεώνεται αυτόματα από το CyberPanel πριν την λήξή του.

> **Σημαντικό:** Τα DNS πρέπει να έχουν ολοκληρωθεί η διασπορά (propagated) στην IP διεύθυνση του server σας πριν το Let's Encrypt μπορεί να επικυρώσει τον τομέα. Εάν η έκδοση SSL αποτύχει αμέσως μετά τη ρύθμιση, περιμένετε τη διασπορά των DNS και ξανακινήστε το SSL από το dashboard του CyberPanel κάτω από **SSL** > **Manage SSL**.

### www Subdomain

Εάν το **Auto-create www subdomain** είναι ενεργοποιημένο στις ρυθμίσεις Domain Mapping σας, η ενσωμάτωση δημιουργεί επίσης ένα virtual host alias για `www.<domain>` και, όταν είναι ενεργό το auto-SSL, εκδίδει ένα πιστοποιητικό που καλύπτει τόσο το apex όσο και τα www variants.

### Email Forwarders

Όταν το add-on [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) είναι ενεργό, το CyberPanel μπορεί επίσης να παρέχει email forwarders για τους πελάτες. Οι forwarders направляют τα μηνύματα από μια διεύθυνση τομέα σε μια άλλη inbox χωρίς να δημιουργούν ένα πλήρες mailbox, κάτι που είναι χρήσιμο για aliases όπως `info@customer-domain.test` ή `support@customer-domain.test`.

Πριν ενεργοποιήσετε τους forwarders για τους πελάτες:

1. Επιβεβαιώστε ότι οι σταθερές του CyberPanel που αναφέρονται παραπάνω είναι ρυθμισμένες και ότι το τεστ σύνδεσης περνά.
2. Ενεργοποιήστε τον πάροχο email του CyberPanel στις ρυθμίσεις του Emails add-on.
3. Επιβεβαιώστε ότι ο τομέας του πελάτη υπάρχει ήδη στο CyberPanel πριν δημιουργήσετε τον forwarder.
4. Δημιουργήστε έναν δοκιμαστικό forwarder και στείλτε ένα μήνυμα μέσω αυτού πριν προσφέρετε τη λειτουργία σε production plans.

Εάν αποτύχει η δημιουργία του forwarder, ελέγξτε πρώτα τα activity logs του Ultimate Multisite, και στη συνέχεια επιβεβαιώστε στο CyberPanel ότι ο τομέας πηγής υπάρχει και ότι ο χρήστης API έχει δικαιώματα διαχείρισης email.

## Αναφορά Ρυθμίσεων

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Πλήρης URL για την instance CyberPanel σας συμπεριλαμβανομένης της θύρας, π.χ. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username του διαχειριστή CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password του διαχειριστή CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Package hosting του CyberPanel που θα εκχωρηθεί στους νέους virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Εκδίδει ένα πιστοποιητικό SSL Let's Encrypt μετά τη δημιουργία του τομέα |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | Έκδοση PHP για τους νέους virtual hosts (πρέπει να ταιριάζει με μια εγκατεστημένη έκδοση στο CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email επαφής για την καταχώριση του πιστοποιητικού SSL |

## Σημαντικές Σημειώσεις

- Το API του CyberPanel χρησιμοποιεί ταυτοποίηση με token βασισμένη σε session. Η ενσωμάτωση χειρίζεται αυτόματα την απόκτηση του token σε κάθε κλήση API.
- Το account διαχειριστή του CyberPanel σας πρέπει να έχει δικαιώματα για τη δημιουργία και διαγραφή websites.
- Το CyberPanel τρέχει εξ ορισμού στην θύρα `8090`. Εάν ο server σας χρησιμοποιεί firewall, βεβαιωθείτε ότι αυτή η θύρα είναι προσβάσιμη από τον server της εφαρμογής WordPress.
- Η ενσωμάτωση δεν διαχειρίζεται τα DNS records. Πρέπει να δείξετε τα DNS του τομέα στην IP διεύθυνση του server σας πριν ρυθμίσετε τον τομέα στο Ultimate Multisite.
- Εάν χρησιμοποιείτε OpenLiteSpeed (OLS), εκκινείται αυτόματα μια graceful restart μετά τις αλλαγές virtual host. Δεν απαιτείται χειροκίνηczna παρέμβαση.

## Αντιμετώπιση Προβλημάτων

### API Connection Refused

- Επιβεβαιώστε ότι η θύρα `8090` είναι ανοιχτή στον firewall του server σας.
- Επιβεβαιώστε ότι η τιμή `WU_CYBERPANEL_HOST` περιλαμβάνει το σωστό protocol (`https://`) και τη θύρα.
- Ελέγξτε ότι το πιστοποιητικό SSL του CyberPanel σας είναι έγκυρο· τα self-signed πιστοποιητικά μπορεί να προκαλέσουν αποτυχίες επαλήθευσης TLS. Ρυποποιήστε το `WU_CYBERPANEL_VERIFY_SSL` σε `false` μόνο σε περιβάλλοντα εμπιστευτικού ιδιωτικού δικτύου.

### Authentication Errors

- Επιβεβαιώστε ότι το `WU_CYBERPANEL_USERNAME` και το `WU_CYBERPANEL_PASSWORD` είναι σωστά συνδεόμενοι συνδέοντας απευθείας στο CyberPanel.
- Το CyberPanel κλειδώνει τους λογαριασμούς μετά από επαναλαμβανόμενα αποτυχημένα προσπάθειες σύνδεσης. Ελέγξτε το **Security** > **Brute Force Monitor** στο CyberPanel εάν συμβούν κλειδώματα.

### Domain Not Created

- Ελέγξτε τα activity logs του Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) για μηνύματα σφάλματος API.
- Επιβεβαιώστε ότι το package που ορίστηκε στο `WU_CYBERPANEL_PACKAGE` υπάρχει στο CyberPanel (**Packages** > **List Packages**).
- Βεβαιωθείτε ότι ο τομέας δεν είναι ήδη καταχωρημένος ως website στο CyberPanel — η διπλή δημιουργία website επιστρέφει ένα σφάλμα.

### SSL Certificate Not Issued

- Επιβεβαιώστε ότι τα DNS έχουν ολοκληρώσει τη διασπορά: το `dig +short your-domain.com` πρέπει να επιστρέψει την IP διεύθυνση του server σας.
- Το Let's Encrypt επιβάλλει rate limits. Εάν έχετε εκδώσει πρόσφατα πολλά πιστοποιητικά για τον ίδιο τομέα, περιμένετε πριν επιχειρήσετε ξανά.
- Ελέγξτε τα logs του SSL του CyberPanel κάτω από **Logs** > **Error Logs** για λεπτομέρειες για τις αποτυχίες έκδοσης πιστοποιητικού.
- Ως εφεδρική λύση, μπορείτε να εκδώσετε το SSL χειροκίνητα από το CyberPanel: **SSL** > **Manage SSL** > επιλέξτε τον τομέα > **Issue SSL**.

## Αναφορές

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
