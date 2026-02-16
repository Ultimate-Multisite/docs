---
title: Καταχώρηση Τελικού Σημείου API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Το API endpoint /register του Ultimate Multisite

Σε αυτό το tutorial, θα μάθετε πώς να χρησιμοποιείτε το API endpoint /register του Ultimate Multisite για να δημιουργήσετε ολόκληρη τη διαδικασία εγγραφής ενός νέου πελάτη στο δίκτυό σας, καθώς και πώς να το κάνετε με το Zapier.

Το endpoint χρησιμοποιεί τη μέθοδο POST και καλείται μέσω του URL _**https://yoursite.com/wp-json/wu/v2/register**_. Σε αυτή την κλήση, θα εκτελεστούν 4 διαδικασίες στο δίκτυό σας:

  * Θα δημιουργηθεί ένας νέος χρήστης WordPress ή θα γίνει η ταυτοποίησή του μέσω του user ID.

  * Θα δημιουργηθεί ένας νέος Πελάτης στο Ultimate Multisite ή θα γίνει η ταυτοποίησή του μέσω του customer ID.

  * Θα δημιουργηθεί ένας νέος ιστότοπος στο δίκτυο WordPress.

  * Τέλος, θα δημιουργηθεί μια νέα Συνδρομή στο Ultimate Multisite.

Για αυτή τη διαδικασία, θα χρειαστείτε τα διαπιστευτήρια API σας. Για να τα αποκτήσετε, μεταβείτε στον πίνακα διαχείρισης του δικτύου σας, πλοηγηθείτε στο **Ultimate Multisite > Settings** > **API & Webhooks** και αναζητήστε την ενότητα API Settings.

![Ενότητα API Settings στο Ultimate Multisite](/img/config/settings-api.png)  
Επιλέξτε το **Enable API** και αποκτήστε τα διαπιστευτήρια API σας.

Τώρα, ας εξερευνήσουμε το endpoint και στη συνέχεια ας δημιουργήσουμε μια ενέργεια εγγραφής στο Zapier.

## Παράμετροι body του endpoint

Ας δούμε μια επισκόπηση των ελάχιστων πληροφοριών που πρέπει να στείλουμε στο endpoint. Στο τέλος αυτού του άρθρου, θα βρείτε την πλήρη κλήση.

### Πελάτης

Αυτές είναι οι πληροφορίες που απαιτούνται για τη διαδικασία δημιουργίας του Χρήστη και του Πελάτη Ultimate Multisite:

"customer_id" : integer

Μπορείτε να στείλετε το customer ID που έχει δημιουργηθεί στο δίκτυό σας. Αν δεν υποβληθεί, οι παρακάτω πληροφορίες θα χρησιμοποιηθούν για τη δημιουργία ενός νέου πελάτη και ενός νέου χρήστη WordPress. Το user ID μπορεί επίσης να σταλεί με τον ίδιο τρόπο όπως το customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Συνδρομή**

Η μόνη πληροφορία που χρειαζόμαστε μέσα σε αυτό το αντικείμενο είναι η Κατάσταση Συνδρομής.

"membership" { "status" : "string", // μία από τις τιμές "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Προϊόντα**

Τα προϊόντα δίνονται ως array με 1 ή περισσότερα product ID από το δίκτυό σας. Προσοχή, αυτό το endpoint δεν δημιουργεί προϊόντα. Ανατρέξτε στην τεκμηρίωση του Ultimate Multisite για να κατανοήσετε καλύτερα το endpoint δημιουργίας προϊόντων.

**"products" : [1,2],**

### Πληρωμή

Όπως και με τη Συνδρομή, χρειαζόμαστε μόνο την κατάσταση.

**"payment" { "status" : "string", // μία από τις τιμές "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Ιστότοπος

Και για να ολοκληρώσουμε το body, χρειαζόμαστε το URL και τον Τίτλο του ιστότοπου, και τα δύο μέσα στο αντικείμενο Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Η επιστροφή του register endpoint θα είναι ένα array με τις πληροφορίες της νεοδημιουργημένης συνδρομής.

## Δημιουργία ενέργειας στο Zapier

Με την εισαγωγή αυτού του νέου και πιο ισχυρού endpoint δημιουργίας λογαριασμού, θα έχετε επίσης πρόσβαση σε μια νέα ενέργεια στο Zapier.

Ξέρετε πώς να χρησιμοποιείτε και να αξιοποιείτε όλα όσα προσφέρει η νέα έκδοση του Zapier; Μάθετε περισσότερα εδώ. (link?)

### Δημιουργία ενέργειας

Για να δείξουμε καλύτερα πώς να χρησιμοποιήσετε το registration endpoint με το Zapier, ας δημιουργήσουμε μια ενσωμάτωση με το Google Forms. Κάθε φορά που συμπληρώνεται αυτή η φόρμα και οι πληροφορίες αποθηκεύονται στο φύλλο απαντήσεων της φόρμας, θα δημιουργείται μια νέα συνδρομή στο δίκτυο Ultimate Multisite.

Στο Google Forms, δημιουργήστε μια φόρμα με τα ελάχιστα απαραίτητα πεδία για τη δημιουργία μιας νέας συνδρομής στο δίκτυο.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Τώρα στο Zapier, δημιουργήστε ένα νέο Zap και συνδέστε τη φόρμα που δημιουργήσατε στο Google μέσω του υπολογιστικού φύλλου όπου αποθηκεύονται τα δεδομένα.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Έτοιμο! Η φόρμα Google Forms είναι συνδεδεμένη με το Zapier και έτοιμη για ενσωμάτωση με το δίκτυο. Τώρα ας προχωρήσουμε στην Ενέργεια που θα προκύψει από το Trigger που ενεργοποιεί το Google Forms κάθε φορά που συμπληρώνεται.

Εντοπίστε τη νέα εφαρμογή Ultimate Multisite και επιλέξτε την. Για αυτό το είδος Zap επιλέξτε την επιλογή Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Μετά από αυτό το πρώτο βήμα, επιλέξτε τον λογαριασμό που θα συνδεθεί με αυτό το Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Αυτό είναι το πιο ευαίσθητο μέρος ολόκληρης της διαδικασίας. Πρέπει να αντιστοιχίσουμε τα πεδία που προήλθαν από το Google Forms με τα ελάχιστα απαραίτητα πεδία για το register endpoint, όπως φαίνεται στην προηγούμενη ενότητα αυτού του άρθρου.

Σε αυτό το παράδειγμα, χρειάζεται μόνο να διαμορφώσουμε το username, email, password, όνομα και URL του ιστότοπου. Τα υπόλοιπα αφήνονται προκαθορισμένα ώστε όλες οι συνδρομές που δημιουργούνται από αυτό το Google Forms να ακολουθούν το ίδιο μοτίβο προϊόντος και κατάστασης.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Με τις πληροφορίες ρυθμισμένες, προχωρήστε στην τελική δοκιμή. Στην τελευταία οθόνη μπορείτε να δείτε όλα τα πεδία που θα σταλούν στο endpoint, τις αντίστοιχες πληροφορίες τους και τα πεδία που θα σταλούν κενά.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Δοκιμάστε το νέο σας Zap και θα πρέπει να ολοκληρωθεί με επιτυχία. Αν προκύψει κάποιο σφάλμα, ελέγξτε όλα τα πεδία και αν αποστέλλονται σωστά. Καθώς υπάρχουν πολλές πληροφορίες, ορισμένα πράγματα μπορεί να περάσουν απαρατήρητα.

### Πλήρεις παράμετροι endpoint

Εδώ είναι η πλήρης κλήση και όλες οι δυνατότητες πεδίων που μπορούν να σταλούν.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // μία από τις τιμές "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // μία από τις τιμές "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
