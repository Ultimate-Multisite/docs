---
title: Ρύθμιση της Σταθεράς Sunrise στο Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ρύθμιση της σταθεράς Sunrise σε true στο Closte

Ορισμένοι πάροχοι φιλοξενίας κλειδώνουν το αρχείο wp-config.php για λόγους ασφαλείας. Αυτό σημαίνει ότι το Ultimate Multisite δεν μπορεί να επεξεργαστεί αυτόματα το αρχείο για να προσθέσει τις απαραίτητες σταθερές που χρειάζονται για τη λειτουργία της αντιστοίχισης domain και άλλων χαρακτηριστικών. Το Closte είναι ένας τέτοιος πάροχος.

Ωστόσο, το Closte προσφέρει έναν τρόπο για να προσθέσετε σταθερές στο wp-config.php με ασφαλή τρόπο. Απλά ακολουθήστε τα παρακάτω βήματα:

## Στον πίνακα ελέγχου του Closte

Αρχικά, [συνδεθείτε στον λογαριασμό σας στο Closte](https://app.closte.com/), κάντε κλικ στο μενού Sites και μετά κάντε κλικ στον σύνδεσμο Dashboard για τον ιστότοπο στον οποίο εργάζεστε αυτή τη στιγμή:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Θα εμφανιστούν αρκετές νέες επιλογές μενού στην αριστερή πλευρά της οθόνης. Πλοηγηθείτε στη σελίδα **Settings** χρησιμοποιώντας αυτό το μενού:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Στη συνέχεια, στη σελίδα **Settings**, βρείτε την καρτέλα WP-Config και το πεδίο "Additional wp-config.php content" σε αυτή την καρτέλα:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Στο πλαίσιο της εγκατάστασης του Ultimate Multisite, θα χρειαστεί να προσθέσετε τη σταθερά sunrise σε αυτό το πεδίο. Απλά προσθέστε μια νέα γραμμή και επικολλήστε την παρακάτω γραμμή. Μετά από αυτό, κάντε κλικ στο κουμπί **Save All**.

define('SUNRISE', true);

Αυτό ήταν, είστε έτοιμοι. Επιστρέψτε στον οδηγό εγκατάστασης του Ultimate Multisite και ανανεώστε τη σελίδα για να συνεχίσετε τη διαδικασία.
