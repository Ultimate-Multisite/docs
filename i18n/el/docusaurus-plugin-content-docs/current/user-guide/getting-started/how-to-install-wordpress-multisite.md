---
title: Πώς να Εγκαταστήσετε το WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Πώς εγκαθιστώ το WordPress Multisite;

Το WordPress Multisite σου επιτρέπει να έχεις ένα δίκτυο ιστοσελίδων σε μία μόνο εγκατάσταση. Πρόκειται για μια ενσωματωμένη λειτουργία, αλλά δεν είναι ενεργοποιημένη από προεπιλογή.

:::tip
Το Ultimate Multisite περιλαμβάνει έναν **[ενσωματωμένο Οδηγό Ρύθμισης Multisite](./multisite-setup-wizard)** που αυτοματοποιεί ολόκληρη αυτή τη διαδικασία. Αν έχεις εγκατεστημένο το Ultimate Multisite, σου συνιστούμε να χρησιμοποιήσεις τον οδηγό αντί να ακολουθήσεις τα παρακάτω χειροκίνητα βήματα.
:::

Καθώς το Ultimate Multisite είναι ένα plugin που λειτουργεί μόνο σε δίκτυο, σε αυτό το tutorial θα μάθεις πώς να εγκαταστήσεις και να ρυθμίσεις το WordPress Multisite χειροκίνητα. Αυτό το κείμενο βασίζεται στο [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), από το WPBeginner.

**Πράγματα που πρέπει να προσέξεις πριν δημιουργήσεις το δίκτυό σου multisite:**

  * Επίλεξε καλό WordPress hosting! Οι ιστοσελίδες σε ένα δίκτυο μοιράζονται τους ίδιους πόρους διακομιστή.

  * Σε περίπτωση που έχεις μόνο δύο-τρεις ιστοσελίδες με χαμηλή επισκεψιμότητα, το shared hosting πιθανότατα θα καλύψει τις ανάγκες σου.

  * Οι περισσότεροι πάροχοι **Managed WordPress hosting** προσφέρουν Multisite έτοιμο προς χρήση (εγκαθιστούν το WordPress με το Multisite ήδη ενεργοποιημένο και ρυθμισμένο για εσένα). Αυτό ισχύει για το WP Engine, Closte, Cloudways κ.α. Αν δεν είσαι σίγουρος/η αν ισχύει και για τον δικό σου πάροχο, επικοινώνησε με την υποστήριξή τους πριν συνεχίσεις με αυτό το tutorial.

  * Είναι επίσης καλό να είσαι εξοικειωμένος/η με την εγκατάσταση του WordPress και την επεξεργασία αρχείων μέσω FTP.

_**ΣΗΜΑΝΤΙΚΟ**_ **:** Αν ρυθμίζεις ένα δίκτυο multisite σε μια υπάρχουσα ιστοσελίδα WordPress, μην ξεχάσεις να:

  * Δημιουργήσεις ένα πλήρες αντίγραφο ασφαλείας της ιστοσελίδας σου WordPress

  * Απενεργοποιήσεις όλα τα plugins στην ιστοσελίδα σου πηγαίνοντας στη σελίδα plugins, επιλέγοντας _Απενεργοποίηση_ από τις μαζικές ενέργειες και κάνοντας κλικ στο _Εφαρμογή_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Για να ενεργοποιήσεις το Multisite, πρώτα συνδέσου στην ιστοσελίδα σου χρησιμοποιώντας έναν FTP client ή τον διαχειριστή αρχείων του cPanel, και άνοιξε το αρχείο wp-config.php για επεξεργασία.

Πριν από τη γραμμή _*That's all, stop editing! Happy blogging.*_, πρόσθεσε το παρακάτω απόσπασμα κώδικα:

define('WP_ALLOW_MULTISITE', true);

Αποθήκευσε και ανέβασε το αρχείο wp-config.php πίσω στον διακομιστή.

Με τη λειτουργία multisite ενεργοποιημένη στην ιστοσελίδα σου, τώρα είναι ώρα να ρυθμίσεις το δίκτυό σου.

Πήγαινε στο **Εργαλεία » Ρύθμιση Δικτύου**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Τώρα πρέπει να πεις στο WordPress τι είδους δομή domain θα χρησιμοποιήσεις για τις ιστοσελίδες στο δίκτυό σου: subdomains ή subdirectories.

Αν επιλέξεις subdomains, πρέπει να αλλάξεις τις ρυθμίσεις DNS για το domain mapping και να φροντίσεις να ρυθμίσεις _**wildcard subdomains**_ για το δίκτυο multisite σου.

Επιστρέφοντας στη Ρύθμιση Δικτύου, δώσε έναν τίτλο στο δίκτυό σου και βεβαιώσου ότι η διεύθυνση email στο πεδίο email διαχειριστή δικτύου είναι σωστή. Κάνε κλικ στο _Εγκατάσταση_ για να συνεχίσεις.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Πρόσθεσε αυτόν τον κώδικα, που παρέχεται από το WordPress, στο _**wp-config.php**_ σου:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Και αυτόν τον κώδικα, επίσης παρεχόμενο από το WordPress, στο αρχείο _**.htaccess**_ σου:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Χρησιμοποίησε έναν FTP client ή έναν διαχειριστή αρχείων (αν χρησιμοποιείς κάτι σαν το cPanel, για παράδειγμα) για να αντιγράψεις και να επικολλήσεις τον κώδικα σε αυτά τα δύο αρχεία.

Τέλος, ξανασυνδέσου στην ιστοσελίδα σου WordPress για να αποκτήσεις πρόσβαση στο δίκτυο multisite σου.

**Είναι σημαντικό να δοκιμάσεις και να βεβαιωθείς ότι μπορείς να δημιουργήσεις ένα subsite στην εγκατάσταση WordPress Multisite σου πριν εγκαταστήσεις το Ultimate Multisite.**

Για να δημιουργήσεις ένα subsite:

  1. Άνοιξε το wp-admin της ιστοσελίδας σου

  2. Πλοηγήσου στο Οι Ιστοσελίδες μου > Ιστοσελίδες (/wp-admin/network/sites.php)

  3. Κάνε κλικ στο Προσθήκη Νέου στην κορυφή

  4. Συμπλήρωσε όλα τα πεδία:

  * Διεύθυνση Ιστοσελίδας — Μην χρησιμοποιήσεις ποτέ "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Τίτλος Ιστοσελίδας — Ο τίτλος της ιστοσελίδας, μπορεί να αλλάξει αργότερα

  * Email Διαχειριστή — Ορίζεται ως ο αρχικός χρήστης διαχειριστή για το subsite

![Φόρμα προσθήκης νέας ιστοσελίδας στο WordPress Multisite](/img/admin/sites-list.png)

Αφού συμπληρώσεις τα πεδία, κάνε κλικ στο κουμπί "Προσθήκη ιστοσελίδας". Μόλις δημιουργηθεί το νέο subsite, προχώρησε και επισκέψου το για να βεβαιωθείς ότι λειτουργεί σωστά.

## Συνηθισμένα Προβλήματα:

### 1\. Μπορώ να δημιουργήσω νέες ιστοσελίδες αλλά δεν είναι προσβάσιμες.

Αν επέλεξες subdomains, πρέπει επίσης να ρυθμίσεις wildcard subdomains για το δίκτυο multisite σου.

Για να το κάνεις αυτό, πήγαινε στον πίνακα ελέγχου του λογαριασμού hosting της ιστοσελίδας σου (π.χ. cPanel/Plesk/Direct Admin ανάλογα με τον πάροχο hosting σου).

Βρες μια επιλογή για "Domains" ή "Subdomains". Σε ορισμένους πίνακες ελέγχου αναφέρεται ως "Domain administration".

Στο πεδίο subdomain, εισάγαγε έναν αστερίσκο (*). Στη συνέχεια, θα σου ζητηθεί να επιλέξεις ένα domain name στο οποίο θέλεις να προστεθεί το subdomain.

Το document root για το επιλεγμένο domain name θα εντοπιστεί αυτόματα. Κάνε κλικ στο κουμπί _Δημιουργία_ ή _Αποθήκευση_ για να προσθέσεις το wildcard subdomain σου. Η καταχώρηση θα πρέπει να μοιάζει με "*.[mydomain.com](http://mydomain.com)"
