---
title: Ενσωμάτωση Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Ενσωμάτωση με τον Πίνακα Ελέγχου Hestia

Αυτός ο οδηγός εξηγεί πώς να ρυθμίσετε την ενσωμάτωση του Ultimate Multisite με το Hestia, ώστε τα αντιστοιχισμένα domains στο δίκτυό σας να προστίθενται (και να αφαιρούνται) αυτόματα ως Web Domain Aliases στο Hestia.

- Αναφορά Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Επίσημη τεκμηρίωση REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Τι Κάνει
- Όταν γίνεται αντιστοίχιση ενός domain στο Ultimate Multisite, η ενσωμάτωση καλεί το Hestia API για να εκτελέσει:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Όταν αφαιρείται μια αντιστοίχιση domain, εκτελεί:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Προαιρετικά προσθέτει/αφαιρεί το alias `www.` ανάλογα με τη ρύθμιση "Αυτόματη δημιουργία www subdomain" στις ρυθμίσεις Domain Mapping.

## Προαπαιτούμενα
- Ένα υπάρχον Hestia Web Domain που ήδη δείχνει στην εγκατάσταση WordPress σας. Η ενσωμάτωση θα προσαρτήσει aliases σε αυτό το βασικό domain.
- Ενεργοποιημένη πρόσβαση στο Hestia API. Μπορείτε να πιστοποιηθείτε χρησιμοποιώντας είτε κωδικό πρόσβασης είτε API hash/token.

Δείτε την τεκμηρίωση REST API του Hestia για την ενεργοποίηση πρόσβασης API και λεπτομέρειες πιστοποίησης:
https://hestiacp.com/docs/server-administration/rest-api.html

## Ρύθμιση (Wizard → Integrations → Hestia)
Συμπληρώστε τις παρακάτω τιμές:

- `WU_HESTIA_API_URL` (υποχρεωτικό)
  - Το βασικό API endpoint, συνήθως `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (υποχρεωτικό)
  - Ο χρήστης Hestia που χρησιμοποιείται για τις εντολές API (συνήθως `admin`).
- `WU_HESTIA_API_PASSWORD` ή `WU_HESTIA_API_HASH` (τουλάχιστον ένα)
  - Επιλέξτε μία μέθοδο πιστοποίησης: κωδικό πρόσβασης ή API hash/token.
- `WU_HESTIA_ACCOUNT` (υποχρεωτικό)
  - Ο λογαριασμός (ιδιοκτήτης) του Web Domain στο Hestia· είναι το πρώτο όρισμα στο CLI.
- `WU_HESTIA_WEB_DOMAIN` (υποχρεωτικό)
  - Το υπάρχον Hestia Web Domain που εξυπηρετεί το WordPress σας (τα aliases θα προσαρτηθούν εδώ).
- `WU_HESTIA_RESTART` (προαιρετικό· προεπιλογή `yes`)
  - Αν θα γίνεται επανεκκίνηση/επαναφόρτωση των υπηρεσιών μετά από αλλαγές στα aliases.

Μπορείτε να αφήσετε τον wizard να εισάγει αυτές τις σταθερές στο `wp-config.php`, ή να τις ορίσετε χειροκίνητα.

## Επαλήθευση της Ρύθμισης
- Στο βήμα "Testing" του wizard, το plugin καλεί `v-list-web-domains <WU_HESTIA_ACCOUNT> json` μέσω του API. Μια επιτυχημένη απόκριση επιβεβαιώνει τη συνδεσιμότητα και την πιστοποίηση.
- Μετά την αντιστοίχιση ενός domain, ελέγξτε στο Hestia: Web > το βασικό domain > Aliases. Θα πρέπει να βλέπετε το νέο alias που προστέθηκε.

## Σημειώσεις & Συμβουλές
- Βεβαιωθείτε ότι το `WU_HESTIA_WEB_DOMAIN` υπάρχει ήδη και ανήκει στο `WU_HESTIA_ACCOUNT`.
- Αν απαιτείται SSL, διαχειριστείτε τα πιστοποιητικά μέσω του Hestia. Αυτή η ενσωμάτωση προς το παρόν χειρίζεται μόνο aliases.
- Το plugin μπορεί επίσης να προσθέτει/αφαιρεί το `www.<domain>` ανάλογα με τη ρύθμιση "www subdomain" στο Domain Mapping.

## Παράδειγμα Κλήσης API (cURL)
Παρακάτω είναι ένα ενδεικτικό παράδειγμα (προσαρμόστε το στο περιβάλλον σας). Ανατρέξτε στην επίσημη τεκμηρίωση για τις ακριβείς παραμέτρους.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ή &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias προς προσθήκη)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Για διαγραφή, χρησιμοποιήστε `cmd=v-delete-web-domain-alias` με τα ίδια ορίσματα.

## Αντιμετώπιση Προβλημάτων
- Σφάλμα HTTP από το API: επαληθεύστε ότι το `WU_HESTIA_API_URL` είναι προσβάσιμο και περιλαμβάνει το `/api`.
- Σφάλματα πιστοποίησης: επιβεβαιώστε το `WU_HESTIA_API_USER` και είτε το `WU_HESTIA_API_PASSWORD` είτε το `WU_HESTIA_API_HASH`.
- "Missing account/base domain" στα logs: βεβαιωθείτε ότι τα `WU_HESTIA_ACCOUNT` και `WU_HESTIA_WEB_DOMAIN` έχουν οριστεί και είναι έγκυρα στο Hestia.

## Αναφορές
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Αναφορά Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
