---
title: Ρύθμιση και Διαμόρφωση Παρόχου
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Ρύθμιση και Διαμόρφωση Προвайδέρς

Το addon Domain Seller έρχεται με ένα καθοδηγούμενο setup wizard που σας καθοδηγεί σε κάθε απαιτούμενο βήμα. Αυτή η σελίδα καλύπτει τη ροή του wizard και το πώς να διαμορφώνετε ή να επαναδιαμορφώνετε τους providers αργότερα.

## Απαιτήσεις

- **Multisite Ultimate** v2.4.12 ή νεότερη έκδοση, ενεργοποιημένο στο network
- **PHP** 7.4+
- API credentials για τουλάχιστον έναν υποστηριζόμενο registrar

## Setup Wizard στην πρώτη εκτέλεση

Το setup wizard εκκρίνεται αυτόματα την πρώτη φορά που ενεργοποιείτε το plugin στο network. Είναι επίσης διαθέσιμο ανά πάσα στιγμή από το **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Βήμα 1 — Επιλογή provider

Επιλέξτε τον registrar που θέλετε να συνδέσετε. Υποστηριζόμενες επιλογές:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Βήμα 2 — Εدخαγωγή credentials

Κάθε provider έχει διαφορετικά πεδία credentials:

**OpenSRS** — Username και private key (από το OpenSRS Reseller Control Panel)

**Namecheap** — Username και API key (από το Account › Tools › API Access)

**GoDaddy** — API key και secret (από το developer.godaddy.com)

**ResellerClub** — Reseller ID και API key (από το control panel του ResellerClub)

**NameSilo** — API key (από το namesilo.com › Account › API Manager)

**Enom** — Account ID και API token

Ελέγξτε το **Sandbox mode** όπου είναι διαθέσιμο για να κάνετε δοκιμή στο test environment του provider πριν γίνετε live.

### Βήμα 3 — Δοκιμή σύνδεσης

Κάντε κλικ στο **Test Connection**. Το wizard στέλνει μια ελαφριά API κλήση για να επαληθεύσει τα credentials και τη συνδεσιμότητα. Διορθώστε οποιαδήποτε vấn đề με τα credentials πριν συνεχίσετε.

### Βήμα 4 — Εισαγωγή TLDs

Κάντε κλικ στο **Import TLDs** για να ανακτήσετε όλες τις διαθέσιμες TLDs και τις τιμές λιανικής πώλησης (wholesale pricing) από τον συνδεδεμένο provider. Αυτό γεμίζει τη λίστα TLDs που χρησιμοποιούν τα προϊόντα domain. Η εισαγωγή μπορεί να διαρκέσει 30–60 δευτερόλεπτα για providers με μεγάλες βιβλιοθήκες TLDs.

Οι TLDs συγχρονίζονται επίσης αυτόματα μία φορά την ημέρα μέσω ενός προγραμματισμένου cron job.

### Βήμα 5 — Δημιουργία προϊόντος domain

Το wizard δημιουργεί ένα προεπιλεγμένο "catch-all" προϊόν domain με μια προστιθέμευση (markup) 10%. Μπορείτε να επεξεργαστείτε αυτό το προϊόν αμέσως ή να το παραλείψετε και να δημιουργήσετε προϊόντα χειροκίνητα κάτω από το **Ultimate Multisite › Products**.

Δείτε το [Domain Products and Pricing](./domain-products) για τον πλήρη οδηγό διαμόρφωσης προϊόντων.

---

## Επαναδιαμόρφωση ενός provider

Μεταβείτε στο **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ή κάντε κλικ στο **Settings** στη λίστα plugins).

Η σελίδα ρυθμίσεων περιέχει:

- **Enable domain selling** — για να ενεργοποιήσετε/απενεργοποιήσετε ολόκληρη τη λειτουργία
- **Default provider** — ο provider που χρησιμοποιείται για τις αναζητήσεις domain και τα νέα προϊόντα
- **Max TLDs per search** — πόσες TLDs να ελέγχει όταν ένας πελάτης κάνει αναζήτηση· οι υψηλότερες τιμές εμφανίζουν περισσότερες επιλογές αλλά είναι πιο αργές
- **Availability cache duration** — πόσο καιρό να αποθηκεύονται (cache) τα αποτελέσματα διαθεσιμότητας και τιμών· οι χαμηλότερες τιμές είναι πιο ακριβείς αλλά αυξάνουν τις API κλήσεις
- **Manage domain products** — γρήγορο link στη λίστα Products
- **Configure providers** — ανοίγει το Integration Wizard για να προσθέσετε ή να επαναδιαμορφώσετε providers

### Προσθήκη ενός δεύτερου provider

Κάντε κλικ στο **Configure providers** και εκτελέστε ξανά το wizard για τον νέο registrar. Μπορείτε να έχετε διαμορφωμένους πολλαπλούς providers ταυτόχρονα. Καταθέστε κάθε προϊόν domain σε έναν συγκεκριμένο provider, ή αφήστε το στο default.

### Χειροκίνητο Syncing TLDs

Στη σελίδα ρυθμίσεων, κάντε κλικ στο **Sync TLDs** δίπλα σε οποιονδήποτε διαμορφωμένο provider για να ανακτήσετε τις τελευταίες τιμές. Αυτό είναι χρήσιμο αφού ένας provider ενημερώσει τις τιμές λιανικής πώλησης ή προσθέσει νέες TLDs.

---

## Logs

Κάθε provider γράφει στο δικό του κανάλι logs. Τα logs είναι ορατά κάτω από το **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Όλες οι προσπάθειες εγγραφής (επιτυχία και αποτυχία) |
| `domain-seller-renewal` | Αποτελέσματα εργασίας ανανέωσης |
| `domain-seller-opensrs` | Κακές API δραστηριότητες OpenSRS |
| `domain-seller-namecheap` | Κακές API δραστηριότητες Namecheap |
| `domain-seller-godaddy` | Κακές API δραστηριότητες GoDaddy |
| `domain-seller-resellerclub` | Κακές API δραστηριότητες ResellerClub |
| `domain-seller-namesilo` | Κακές API δραστηριότητες NameSilo |
| `domain-seller-enom` | Κακές API δραστηριότητες Enom |
