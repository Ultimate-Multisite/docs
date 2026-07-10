---
title: Ειδοποίηση Αφαίρεσης Λειτουργίας Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Αφαίρεση της λειτουργίας Site Builder {#site-builder-mode-removal-notice}

**Η λειτουργία Site Builder αφαιρέθηκε στην έκδοση Superdav AI Agent v1.12.0.** Εάν χρησιμοποιούσατε τη λειτουργία Site Builder, πρέπει να μεταβείτε στον **agent Setup Assistant** για τη δημιουργία θέματος και τη ρύθμιση του site.

## Τι συνέβη; {#what-happened}

### Site Builder Mode (Παλαιότερη έκδοση) {#site-builder-mode-legacy}

Η λειτουργία Site Builder ήταν μια διεπαφή βασισμένη σε διαδικασία βημάτων (wizard) για:

- Δημιουργία sites από templates
- Διαμόρφωση βασικών ρυθμίσεων
- Επιλογή ενός θέματος (theme)
- Ρύθμιση περιεχομένου εκκίνησης

### Τι την αντικατέστησε; {#what-replaced-it}

Ο **agent Setup Assistant** αναλαμβάνει πλέον όλες τις λειτουργίες του Site Builder με:

- Πιο ευέλικτη ρύθμιση, καθοδηγούμενη από agent
- Καλύτερες επιλογές προσαρμογής θέματος
- Ενσωμάτωση με το onboarding του Theme Builder
- Διατήρηση της μνήμης site_brief για μελλοντικές συνεδρίες

## Εάν χρησιμοποιούσατε Site Builder Mode {#if-you-were-using-site-builder-mode}

### Τα sites σας είναι ασφαλή {#your-sites-are-safe}

- Τα υπάρχοντα sites που δημιουργήθηκαν με τη λειτουργία Site Builder συνεχίζουν να λειτουργούν
- Δεν υπάρχει απώλεια δεδομένων ή διακοπή λειτουργίας του site
- Μπορείτε να συνεχίσετε να διαχειρίζεστε τα sites σας κανονικά

### Μεταβείτε στον Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Για τη ρύθμιση νέων sites ή αλλαγές θέματος, χρησιμοποιήστε τον agent Setup Assistant:

```
"Help me set up a new site"
```

ή

```
"Start the Theme Builder onboarding"
```

Ο agent Setup Assistant παρέχει την ίδια λειτουργικότητα με μεγαλύτερη ευελιξία.

## Σύγκριση: Site Builder έναντι Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Χαρακτηριστικό | Site Builder (Αφαιρέθηκε) | Setup Assistant (Νέο) |
|---------|----------------------|----------------------|
| Μέθοδος ρύθμισης | Διαδικασία βημάτων (Wizard form) | Συνομιλία με agent |
| Επιλογή θέματος | Προκαθορισμένα templates | Προσαρμοσμένη δημιουργία |
| Προσαρμογή | Περιορισμένες επιλογές | Πλήρες design system |
| Site brief | Δεν αποθηκεύεται | Διατηρημένη μνήμη |
| Μελλοντικές συνεδρίες | Επανάληψη ρύθμισης | Χρήση αποθηκευμένου site_brief |
| Ευελιξία | Σταθερή ροή εργασίας | Προσαρμοστική συνομιλία |

## Μεταβίβαση στον Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Για νέα sites {#for-new-sites}

Αντί να χρησιμοποιείτε τη λειτουργία Site Builder:

1. Ζητήστε: "Help me set up a new site"
2. Ο agent Setup Assistant θα σας καθοδηγήσει σχετικά με:
   - Σκοπό και στόχους του site
   - Κοινό-στόχο
   - Ταυτότητα της μάρκας (Brand identity)
   - Δημιουργία θέματος (Theme generation)
   - Αρχική διαμόρφωση

### Για υπάρχοντα sites {#for-existing-sites}

Εάν έχετε ένα υπάρχον site που δημιουργήθηκε με τη λειτουργία Site Builder:

1. Μπορείτε να συνεχίσετε να το χρησιμοποιείτε όπως είναι
2. Για να ενημερώσετε το θέμα, ζητήστε: "Redesign my site"
3. Ο agent Setup Assistant θα σας βοηθήσει να δημιουργήσετε ένα νέο θέμα
4. Τα δεδομένα του site σας παραμένουν αμελημένα

### Για αλλαγές θέματος {#for-theme-changes}

Αντί για την επιλογή θέματος του Site Builder:

1. Ζητήστε: "Change my theme"
2. Ο agent Setup Assistant θα:
   - Ρωτήσει για τις προτιμήσεις σας στη σχεδίαση
   - Δημιουργήσει ένα προσαρμοσμένο θέμα
   - Το ενεργοποιήσει στο site σας

## Βασικές Διαφορές {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Επιλέξτε ένα template
2. Επιλέξτε ένα θέμα
3. Διαμορφώστε βασικές ρυθμίσεις
4. Ολοκληρώθηκε
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Περιγράψτε τον σκοπό του site σας
2. Ορίστε το κοινό-στόχο σας
3. Επιλέξτε τις προτιμήσεις σχεδίασης
4. Ο agent δημιουργεί προσαρμοσμένο θέμα
5. Ο agent ενεργοποιεί το θέμα
6. Το site_brief αποθηκεύεται για μελλοντικές συνεδρίες
```

## Οφέλη του Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Πιο Ευέλικτο {#more-flexible}

- Περιγράψτε το site σας σε φυσική γλώσσα
- Λάβετε προσαρμοσμένες συστάσεις
- Προσαρμόζεται στις συγκεκριμένες ανάγκες σας

### Καλύτερη Προσαρμογή {#better-customization}

- Δημιουργία προσαρμοσμένου θέματος
- Αποφάσεις design system
- Διατηρημένα design tokens

### Διατηρημένη Μνήμη {#persistent-memory}

- Το site_brief σας αποθηκεύεται
- Οι μελλοντικοί agents κατανοούν το site σας
- Δεν χρειάζεται να επαναλάβετε πληροφορίες ρύθμισης

### Ενσωματωμένη Ροή Εργασίας {#integrated-workflow}

- Onboarding του Theme Builder
- Δεξιότητα Design System Aesthetics
- Ελέγχους ορατότητας (Ability Visibility controls)
- Όλα συνεργάζονται απρόσκοπτα

## Αντιμετώπιση Προβλημάτων {#troubleshooting}

### Δεν βρίσκω τη λειτουργία Site Builder {#i-cant-find-site-builder-mode}

Η λειτουργία Site Builder αφαιρέθηκε. Χρησιμοποιήστε αντίθετα τον agent Setup Assistant:

```
"Help me set up a new site"
```

### Θέλω να αναδημιουργήσω ένα site από το Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Μπορείτε να το αναδημιουργήσετε με τον agent Setup Assistant:

1. Ζητήστε: "Help me set up a new site"
2. Περιγράψτε τον σκοπό και τη σχεδίαση του αρχικού site σας
3. Ο agent θα δημιουργήσει ένα παρόμοιο θέμα
4. Το site_brief σας θα αποθηκευτεί για μελλοντική αναφορά

### Το υπάρχον site μου από το Site Builder δεν λειτουργεί {#my-existing-site-builder-site-isnt-working}

Τα υπάρχοντα sites που δημιουργήθηκαν με τη λειτουργία Site Builder συνεχίζουν να λειτουργούν. Εάν αντιμετωπίζετε προβλήματα:

1. Βεβαιωθείτε ότι το θέμα σας είναι ακόμα ενεργό
2. Επιβεβαιώστε ότι τα plugins σας είναι ενεργοποιημένα
3. Ελέγξτε τα αρχεία καταγραφής σφαλμάτων του WordPress (WordPress error logs)
4. Επικοινωνήστε με την υποστήριξη εάν τα προβλήματα συνεχιστούν

### Μπορώ ακόμα να χρησιμοποιήσω τα παλιά templates του Site Builder; {#can-i-still-use-my-old-site-builder-templates}

Τα templates του Site Builder δεν είναι πλέον διαθέσιμα. Ωστόσο:

- Τα υπάρχοντα sites σας συνεχίζουν να λειτουργούν
- Μπορείτε να αναδημιουργήσετε παρόμοια sites με τον agent Setup Assistant
- Ο agent Setup Assistant παρέχει περισσότερες επιλογές προσαρμογής

## Επόμενα Βήματα {#next-steps}

1. **Για νέα sites**: Χρησιμοποιήστε τον agent Setup Assistant
2. **Για υπάρχοντα sites**: Συνεχίστε να τα χρησιμοποιείτε όπως είναι
3. **Για αλλαγές θέματος**: Ζητήστε βοήθεια από τον agent Setup Assistant
4. **Για βελτίωση σχεδίασης**: Χρησιμοποιήστε τη δεξιότητα Design System Aesthetics

## Σχετικά Θέματα {#related-topics}

- **Theme Builder Onboarding**: Καθοδηγμένη ρύθμιση για προσαρμοσμένα θέματα
- **Setup Assistant Agent**: Ρύθμιση sites καθοδηγούμενη από agent
- **Site Specification Skill**: Ορισμός των στόχων και του κοινού του site σας
- **Design System Aesthetics Skill**: Βελτίωση της οπτικής ταυτότητας του site σας
