---
title: WP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Ενοποίηση με WP Engine {#wp-engine-integration}

## Επισκόπηση {#overview}
Το WP Engine είναι μια premium πλατφόρμα διαχειριζόμενης φιλοξενίας WordPress που προσφέρει βελτιστοποιημένη απόδοση, ασφάλεια και επεκτασιμότητα για ιστότοπους WordPress. Αυτή η ενοποίηση επιτρέπει τον αυτόματο συγχρονισμό domains μεταξύ του Ultimate Multisite και του WP Engine.

## Χαρακτηριστικά {#features}
- Αυτόματος συγχρονισμός domains
- Υποστήριξη subdomains για εγκαταστάσεις multisite
- Απρόσκοπτη ενοποίηση με τα υπάρχοντα συστήματα του WP Engine

## Απαιτήσεις {#requirements}
Η ενοποίηση εντοπίζει αυτόματα αν φιλοξενείστε στο WP Engine και χρησιμοποιεί το ενσωματωμένο WP Engine API. Δεν απαιτείται επιπλέον ρύθμιση εφόσον το plugin του WP Engine είναι ενεργό και σωστά διαμορφωμένο.

Ωστόσο, αν χρειάζεται να ρυθμίσετε την ενοποίηση χειροκίνητα, μπορείτε να ορίσετε μία από τις παρακάτω σταθερές στο αρχείο `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Προτεινόμενη μέθοδος
// OR
define('WPE_API', 'your_api_key'); // Εναλλακτική μέθοδος
```

## Οδηγίες Εγκατάστασης {#setup-instructions}

### 1. Επαλήθευση του Plugin του WP Engine {#1-verify-wp-engine-plugin}

Αν φιλοξενείστε στο WP Engine, το plugin του WP Engine θα πρέπει να είναι ήδη εγκατεστημένο και ενεργοποιημένο. Βεβαιωθείτε ότι:

1. Το plugin του WP Engine είναι ενεργό
2. Υπάρχει το αρχείο `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Ενεργοποίηση της Ενοποίησης {#2-enable-the-integration}

1. Στη διαχείριση του WordPress, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κάντε κύλιση προς τα κάτω στο "Host Integrations"
4. Ενεργοποιήστε την ενοποίηση με το WP Engine
5. Κάντε κλικ στο "Save Changes"

## Πώς Λειτουργεί {#how-it-works}

### Συγχρονισμός Domains {#domain-syncing}

Όταν ένα domain αντιστοιχίζεται στο Ultimate Multisite:

1. Η ενοποίηση χρησιμοποιεί το WP Engine API για να προσθέσει το domain στην εγκατάσταση WP Engine
2. Το WP Engine χειρίζεται τη διαμόρφωση του domain και την έκδοση πιστοποιητικού SSL
3. Όταν αφαιρείται μια αντιστοίχιση domain, η ενοποίηση θα αφαιρέσει το domain από το WP Engine

### Υποστήριξη Subdomains {#subdomain-support}

Για εγκαταστάσεις multisite με subdomains:

1. Η ενοποίηση προσθέτει κάθε subdomain στο WP Engine όταν δημιουργείται ένας νέος ιστότοπος
2. Το WP Engine χειρίζεται τη διαμόρφωση του subdomain
3. Όταν διαγράφεται ένας ιστότοπος, η ενοποίηση θα αφαιρέσει το subdomain από το WP Engine

## Σημαντικές Σημειώσεις {#important-notes}

### Wildcard Domains {#wildcard-domains}

Για εγκαταστάσεις multisite με subdomains, συνιστάται να επικοινωνήσετε με την υποστήριξη του WP Engine για να ζητήσετε διαμόρφωση wildcard domain. Αυτό επιτρέπει σε όλα τα subdomains να λειτουργούν αυτόματα χωρίς να χρειάζεται να προσθέσετε το καθένα ξεχωριστά.

### Πιστοποιητικά SSL {#ssl-certificates}

Το WP Engine χειρίζεται αυτόματα την έκδοση και ανανέωση πιστοποιητικών SSL για όλα τα domains που προστίθενται μέσω αυτής της ενοποίησης. Δεν απαιτείται επιπλέον ρύθμιση.

## Αντιμετώπιση Προβλημάτων {#troubleshooting}

### Προβλήματα Σύνδεσης API {#api-connection-issues}
- Βεβαιωθείτε ότι το plugin του WP Engine είναι ενεργό και σωστά διαμορφωμένο
- Αν έχετε ορίσει χειροκίνητα το κλειδί API, ελέγξτε ότι είναι σωστό
- Επικοινωνήστε με την υποστήριξη του WP Engine αν αντιμετωπίζετε προβλήματα με το API

### Το Domain Δεν Προστέθηκε {#domain-not-added}
- Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Βεβαιωθείτε ότι το domain δεν έχει ήδη προστεθεί στο WP Engine
- Επιβεβαιώστε ότι το πλάνο WP Engine υποστηρίζει τον αριθμό των domains που προσθέτετε

### Προβλήματα με Subdomains {#subdomain-issues}
- Αν τα subdomains δεν λειτουργούν, επικοινωνήστε με την υποστήριξη του WP Engine για να ζητήσετε διαμόρφωση wildcard domain
- Βεβαιωθείτε ότι οι ρυθμίσεις DNS είναι σωστά διαμορφωμένες για το κύριο domain και τα subdomains
