---
title: 'Μάθημα 7: Προσαρμογή στο δικό σου'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Μάθημα 7: Να το κάνετε δικό σας

Οι πελάτες σας δεν πρέπει ποτέ να νιώθουν ότι χρησιμοποιούν «ένα τυχαίο plugin του WordPress». Πρέπει να νιώθουν ότι χρησιμοποιούν το FitSite — μια πλατφόρμα που έχει σχεδιαστεί ειδικά για τον κλάδο τους. Σε αυτό το κεφάλαιο καλύπτουμε το branding, το white-labeling και το πώς να κάνετε την πλατφόρμα να μοιάζει με ένα ολοκληρωμένο προϊόν.

## Πού σταματήσαμε

Το FitSite έχει ήδη μια λειτουργική ροή ολοκλήρωσης αγοράς που μεταφέρει τους ιδιοκτήτες fitness studio από την επιλογή πακέτου σε ένα ζωντανό site. Τώρα, κάνουμε ολόκληρη την εμπειρία να μοιάζει με ένα συνεκτικό, branded προϊόν.

## Το Domain της Πλατφόρμας σας

Το θεμέλιο της μάρκας σας είναι το domain σας. Για το FitSite:

- **Κύριο domain**: `fitsite.com` (το marketing site και η ρίζα του δικτύου)
- **Sites των πελατών**: `studioname.fitsite.com` (subdomains)
- **Προσαρμοσμένα domains**: Οι πελάτες στα πακέτα Growth και Pro μπορούν να συνδέσουν το δικό τους domain

### Ρύθμιση του Domain σας

1. Καταχωρήστε το domain της πλατφόρμας σας
2. Στοχεύστε το στο hosting provider σας
3. Ρυθμίστε το wildcard DNS (`*.fitsite.com`) για τα subdomains των πελατών
4. Βεβαιωθείτε ότι το wildcard SSL είναι ενεργό

Για λεπτομερείς οδηγίες δείτε το [Πώς να ρυθμίσετε το Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-Labeling την Εμπειρία του Admin

Όταν ένας ιδιοκτήτης fitness studio συνδέεται στο dashboard του site του, πρέπει να βλέπει τη μάρκα σας, και όχι το branding του WordPress ή του Ultimate Multisite.

### Προσαρμοσμένη Σελίδα Συνδέσου (Login Page)

Προσαρμόστε τη σελίδα σύνδεσης του WordPress ώστε να εμφανίζει:

- Το logo του FitSite
- Φόντο εικόνας που ταιριάζει στον fitness χώρο
- Τα χρώματα της μάρκας σας

### Branding του Dashboard

Χρησιμοποιήστε το addon [Admin Page Creator](/addons/admin-page-creator) ή custom CSS για να:

- Αντικαταστήσετε το logo του WordPress με το logo του FitSite
- Προσαρμόσετε το χρώμα του admin ώστε να ταιριάζει με τη μάρκα σας
- Προσθέσετε ένα προσαρμοσμένο widget στο dashboard με γρήγορες συνδέσεις και πόρους βοήθειας ειδικά για fitness

### Προσαρμοσμένες Σελίδες Admin

Σκεφτείτε να δημιουργήσετε προσαρμοσμένες σελίδες admin που εμφανίζουν τις πιο σχετικές ενέργειες για τους ιδιοκτήτες fitness studio:

- "Επεξεργασία Πρόγραμμα Τεμαχίων"
- "Ενημέρωση Προφίλ Εκπαιδευτών"
- "Προβολή του Site σας"

Αυτό μειώνει τη krzyπή μάθησης, το τοποθετώντας ενέργειες σχετικές με τον κλάδο στο επίκεντρο, αντί να τις κρύβει στο τυπικό μενού του WordPress.

## Branding των Επικοινωνιών σας

Κάθε email, τιμολόγιο και ειδοποίηση πρέπει να ενισχύουν τη μάρκα σας.

### System Emails

Μεταβείτε στο **Ultimate Multisite > Settings > Emails** και προσαρμόστε όλα τα system emails:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Χρησιμοποιήστε τα χρώματα και το logo της μάρκας σας
- **Language**: Εξειδικευμένο για fitness σε όλη τη διάρκεια

Κρίσιμα emails για προσαρμογή:

| Email | Γενική Έκδοση | Έκδοση FitSite |
|-------|----------------|-----------------|
| Welcome | "Το νέο site σας είναι έτοιμο" | "Το website του fitness studio σας είναι live" |
| Payment receipt | "Πληρωμή λήpxθηκε" | "Επιβεβαιώνεται η πληρωμή συνδρομής FitSite" |
| Trial ending | "Η δοκιμαστική σας περίοδος λήγει σύντομα" | "Η δοκιμαστική σας περίοδος FitSite λήγει σε 3 ημέρες — κρατήστε το website του studio σας live" |

### Τιμολόγια

Προσαρμόστε τα templates των τιμολογίων με:

- Το logo και τα χρώματα της μάρκας σας FitSite
- Τα στοιχεία της επιχείρησής σας
- Ονόματα προϊόντων ειδικά για fitness (και όχι γενικά plan IDs)

## Το Site που Βλέπει ο Πελάτης

Το κύριο domain σας (`fitsite.com`) χρειάζεται ένα marketing site που να πουλά την πλατφόρμα. Αυτό είναι ξεχωριστό από το admin του Ultimate Multisite network — είναι το δημόσιο πρόσωπο της επιχείρησής σας.

Κρίσιμες σελίδες:

- **Homepage**: Εύρημα αξίας για επιχειρήσεις fitness
- **Features**: Τι κάνει το FitSite, με όρους fitness
- **Pricing**: Τα τρία σας πακέτα με σύγκριση χαρακτηριστικών ειδικά για τον κλάδο
- **Examples**: Παρουσιάστε sites που έχουν δημιουργηθεί στην πλατφόρμα
- **Sign Up**: Σύνδεσμοι στο form checkout σας

:::tip Το Marketing Site σας μπορεί να είναι ένα Network Site
Δημιουργήστε το marketing site σας ως site εντός του δικού σας network. Αυτό σας επιτρέπει να το διαχειρίζεστε από το ίδιο dashboard και να δείχνετε τις δυνατότητες της δικής σας πλατφόρμας.
:::

## Custom Domain για Πελάτες

Για τους πελάτες στα πακέτα που περιλαμβάνουν custom domains, τεκμηριώστε τη διαδικασία με σαφήνεια:

1. Ο πελάτης καταχωρεί ή μεταφέρει το domain του σε έναν registrar.
2. Ο πελάτης ενημερώνει το DNS ώστε να στοχεύει στην πλατφόρμα σας (παρέχετε τα ακριβή records).
3. Το Ultimate Multisite αναλαμβάνει το domain mapping και το SSL.

Δημιουργήστε ένα άρθρο βοήθειας ή μια καταχώριση knowledge base ειδικά για αυτή τη διαδικασία, γραμμένο για μη τεχνικούς ιδιοκτήτες fitness studio.

## Το FitSite Network μέχρι στιγμής

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Τι Δημιουργήσαμε Αυτό το Μάθημα

- **Platform domain και DNS** ρυθμισμένο για μια branded εμπειρία
- **White-labeled admin** με branding FitSite σε όλη τη διάρκεια
- **Προσαρμοσμένες επικοινωνίες** — emails, τιμολόγια και ειδοποιήσεις όλα branded
- **Ένα marketing site** που πουλά το FitSite στους ιδιοκτήτες fitness studio
- **Τεκμηρίωση custom domain** για πελάτες που θέλουν το δικό τους domain

---

**Σ συνέχεια:** [Μάθημα 8: Onboarding Πελατών](lesson-8-onboarding) — σχεδιάζουμε την εμπειρία που μετατρέπει μια νέα εγγραφή σε έναν ενεργό, ικανοποιημένο πελάτη.
