---
title: Εξαγωγή Συστήματος
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Εξαγωγή Συστήματος {#site-export}

Η σελίδα διαχείρισης **Site Export** επιτρέπει στους διαχειριστές του network να συσκευάζουν ένα site, ή ολόκληρο το network, σε ένα αποвантажуακό archive για μετακίνηση, backup ή παράδοση.

## Εξαγωγή ενός sites {#exporting-one-site}

Μεταβείτε στο **Ultimate Multisite > Site Export** και επιλέξτε **Generate new Site Export**. Επιλέξτε το υπο-site που θέλετε να εξάγετε, και στη συνέχεια επιλέξτε αν το archive πρέπει να περιλαμβάνει τα uploads, τα plugins και τα themes.

Όταν ολοκληρωθεί η εξαγωγή, κατεβάστε το ZIP από τη λίστα **Existing Exports**. Τα ZIPs εξαγωγής περιλαμβάνουν πλέον ένα `index.php` που εκκινεί αυτόνομα (self-booting) και ένα `readme.txt`, ώστε το archive να μπορεί να ανέβει σε έναν νέο host και να ξεκινήσει χωρίς να χρειαστεί πρώτα να εγκατασταθεί ένα ξεχωριστό plugin για εισαγωγή.

## Εξαγωγή ολόκληρου του network {#exporting-the-whole-network}

Χρησιμοποιήστε το **Network Export** στη σελίδα Site Export όταν χρειάζεστε ένα μόνο archive που περιέχει όλα τα υπο-sites του network. Αυτό είναι χρήσιμο πριν από μετακινήσεις host, ασκήσεις ανάκαμψης από καταστροφή ή αναδόμηση staging, όπου κάθε υπο-site πρέπει να μετακινηθεί μαζί.

Επειδή μια εξαγωγή network μπορεί να είναι πολύ μεγαλύτερη από μια εξαγωγή ενός μόνο sites, εκτελέστε την σε περίοδο χαμηλής κίνησης και επιβεβαιώστε ότι ο προοριστικός χώρος αποθήκευσης έχει αρκετό ελεύθερο χώρο για τα uploads, τα plugins, τα themes και τα δημιουργημένα ZIP αρχεία.

### Bundles Εισαγωγής Network {#network-import-bundles}

Από το Ultimate Multisite 2.12.0, το Site Exporter μπορεί να δημιουργεί **network import bundles** — εξειδικευμένα archives σχεδιασμένα για απλοποιημένη αποκατάσταση sites σε όλο το network. Ένα network import bundle περιέχει όλα τα απαραίτητα αρχεία και τα metadata για την αποκατάσταση πολλαπλών sites σε μια νέα εγκατάσταση network.

#### Δημιουργία Network Import Bundle {#generating-a-network-import-bundle}

1. Μεταβείτε στο **Ultimate Multisite > Site Export**
2. Κάντε κλικ στο **Generate new Network Export**
3. Επιλέξτε **Network Import Bundle** ως τον τύπο εξαγωγής
4. Επιλέξτε αν θέλετε να περιλαμβάνονται τα uploads, τα plugins και τα themes
5. Κάντε κλικ στο **Generate**
6. Κατεβάστε το bundle ZIP από τη λίστα **Existing Exports**

#### Ανάκαμψη από Network Import Bundle {#restoring-from-a-network-import-bundle}

Για να αποκαταστήσετε sites από ένα network import bundle:

1. Εγκαταστήστε το Ultimate Multisite στον προοριστικό σας host
2. Ολοκληρώστε το wizard εγκατάστασης multisite
3. Μεταβείτε στο **Ultimate Multisite > Site Export** στο νέο network
4. Κάντε κλικ στο **Import Network Bundle**
5. Ανεβάστε το αρχείο ZIP του network import bundle
6. Ακολουθήστε τις οδηγίες εισαγωγής που εμφανίζονται στην οθόνη
7. Η διαδικασία εισαγωγής θα αποκαταστήσει όλα τα sites, το περιεχόμενό τους και τις ρυθμίσεις τους

Τα network import bundles διατηρούν:
- Το περιεχόμενο του site (posts, pages, custom post types)
- Οι ρυθμίσεις και οι επιλογές του site
- Οι ρόλοι και τα δικαιώματα των χρηστών
- Τα plugins και τα themes (εάν περιλαμβάνονται στο bundle)
- Τα media uploads (εάν περιλαμβάνονται στο bundle)
- Τα προσαρμοσμένα جداول και τα δεδομένα της βάσης δεδομένων

## Εγκατάσταση ενός self-booting export ZIP {#installing-a-self-booting-export-zip}

Για να αποκαταστήσετε ένα self-booting ZIP σε έναν νέο host:

1. Ανεβάστε το περιεχόμενο του εξαγόμενου ZIP στο root directory του website.
2. Ανοίξτε το αναπάντεχο `index.php` στον browser.
3. Ακολουθήστε τις οδηγίες εγκατάστασης που εμφανίζονται στην οθόνη από το πακέτο εξαγωγής.
4. Ελέγξτε το bundled `readme.txt` για σημειώσεις ειδικές για την εξαγωγή πριν αφαιρέσετε τα προσωρινά αρχεία.

Για λεπτομέρειες εγκατάστασης και εισαγωγής ειδικές για το addon, δείτε την [documentação του Site Exporter addon](/addons/site-exporter).

Για το εργαλείο ενός μόνο sites που προστέθηκε στο Ultimate Multisite 2.9.0, δείτε το [Export & Import](/user-guide/administration/export-import).
