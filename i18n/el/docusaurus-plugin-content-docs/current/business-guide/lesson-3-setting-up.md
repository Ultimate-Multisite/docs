---
title: 'Μάθημα 3: Ρύθμιση του Δικτύου σας'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Μάθημα 3: Ρύθμιση του Δικτύου σας {#lesson-3-setting-up-your-network}

Είναι ώρα να ξεκινήσετε την κατασκευή. Σε αυτό το μάθημα θα εγκαταστήσετε το Ultimate Multisite και θα ρυθμίσετε τα θεμέλια του δικτύου FitSite. Κάθε απόφαση εδώ λαμβάνεται με γνώμονα το πεδίο των fitness studio.

## Πού σταματήσαμε {#where-we-left-off}

Επιλέξαμε τα fitness studio ως το πεδίο μας και επιβεβαίωσαμε την ευκαιρία. Τώρα μετατρέπουμε αυτή την ιδέα σε μια λειτουργική πλατφόρμα.

## Επιλογή Hosting {#choosing-your-hosting}

Η επιλογή hosting σας έχει μεγαλύτερη σημασία για μια πλατφόρμα που εξυπηρετεί μια συγκεκριμένη «νίσα» από ό,τι για ένα μόνο website. Δεν φιλοξείνεστε ένα site—φιλοξείνεστε ένα δίκτυο που θα μεγαλώσει σε δεκάδες ή εκατοντάδες sites.

### Τι να ψάξετε {#what-to-look-for}

- **Υποστήριξη WordPress Multisite**: Όλοι οι hosts δεν χειρίζονται καλά τα multisite.
- **Wildcard SSL**: Απαραίτητο για δίκτυα που βασίζονται σε subdomains.
- **Κλιμακούμες δυνατότητες (Scalable resources)**: Χρειάζεστε χώρο για να μεγαλώσετε χωρίς να χρειαστεί να κάνετε migration.
- **Ενσωμάτωση Ultimate Multisite**: Η αυτόματη αντιστοίχιση domains και SSL εξοικονομεί σημαντική λειτουργική προσπάθεια.

### Συνιστώμενη Προσέγγιση {#recommended-approach}

Επιλέξτε έναν host από τη λίστα των [Compatible Providers](/user-guide/host-integrations/closte). Αυτοί έχουν δοκιμαστεί με το Ultimate Multisite και παρέχουν τις ενσωματώσεις που χρειάζεστε για την αυτόματη αντιστοίχιση domains και SSL.

Για το FitSite, θα χρησιμοποιήσουμε μια διαμόρφωση με subdomains. Αυτό σημαίνει ότι τα sites των πελατών θα εμφανίζονται αρχικά ως `studioname.fitsite.com` πριν επιλέξουν εάν θέλουν να συνδέσουν το δικό τους domain.

## Εγκατάσταση WordPress Multisite {#installing-wordpress-multisite}

Εάν δεν έχετε ήδη εγκατεστημένο WordPress Multisite:

1. Εγκαταστήστε το WordPress στον πάροχο hosting σας
2. Ακολουθήστε το [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Επιλέξτε τη διαμόρφωση **subdomain** όταν σας ζητηθεί

:::tip Γιατί Subdomains;
Τα subdomains δίνουν σε κάθε site πελάτη τη δική του ξεχωριστή διεύθυνση (`studio.fitsite.com`) αντί για έναν δρόμο (`fitsite.com/studio`). Αυτό είναι πιο επαγγελματικό για τους πελάτες σας και αποτρέπει συγκρούσεις permalink. Δείτε το [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) για μια λεπτομερή σύγκριση.
:::

## Εγκατάσταση Ultimate Multisite {#installing-ultimate-multisite}

Ακολουθήστε το [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) για να:

1. Ανεβάσετε και να ενεργοποιήσετε το plugin σε όλο το δίκτυο
2. Εκτελέσετε το [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Κατά τη διαδικασία του setup wizard, να θυμάστε πάντα το πεδίο FitSite:

- **Currency**: Ρυστεί στην νομισματική μονάδα που χρησιμοποιούν οι πελάτες των fitness studio.
- **Company name**: "FitSite" (ή το brand name που επιλέξατε).
- **Company logo**: Ανεβάστε το logo του brand σας — αυτό εμφανίζεται στα τιμολόγια και στα emails.

## Ρύθμιση για το Fitness Niche {#configuring-for-the-fitness-niche}

Με το Ultimate Multisite εγκατεστημένο, κάντε αυτές τις επιλογές ρύθμισης που σχετίζονται με το niche:

### Γενικές Ρυθμίσεις (General Settings) {#general-settings}

Μεταβείτε στο **Ultimate Multisite > Settings** και ρυθμίστε:

- **Site name**: FitSite
- **Default role**: Administrator — οι ιδιοκτήτες fitness studio χρειάζονται πλήρη έλεγχο του περιεχομένου του site τους.
- **Registration**: Ενεργοποιήστε την εγγραφή χρηστών ώστε οι ιδιοκτήτες studio να μπορούν να εγγράφονται μόνοι τους.

### Ρύθμιση Email (Email Configuration) {#email-configuration}

Τα system emails σας πρέπει να μιλούν τη γλώσσα του niche σας. Μεταβείτε στο **Ultimate Multisite > Settings > Emails** και προσαρμόστε:

- Αντικαταστήστε τη γενική γλώσσα "your new site" με μηνύματα ειδικά για fitness.
- Παράδειγμα θέματος καλωσορίσματος: "Το website του fitness studio σας είναι έτοιμο"
- Παράδειγμα σώματος καλωσορίσματος: Αναφέρετε το studio τους, τις κλάσεις και το πώς να ξεκινήσουν με το fitness site τους.

Θα τα βελτιώσουμε περαιτέρω στο Μάθημα 8 (Customer Onboarding), αλλά το να δώσουμε το τόνο τώρα διασφαλίζει ότι ακόμα και οι πρώτες δοκιμαστικές εγγραφές αισθάνονται εξειδικευμένες για το niche.

### Ρύθμιση Domains (Domain Configuration) {#domain-configuration}

Εάν χρησιμοποιείτε έναν συμβατό πάροχο hosting, ρυθμίστε την αντιστοίχιση domains τώρα:

1. Μεταβείτε στο **Ultimate Multisite > Settings > Domain Mapping**
2. Ακολουθήστε το guide ενσωμάτωσης για τον συγκεκριμένο host σας
3. Δοκιμάστε ότι τα νέα subsites λαμβάνουν SSL αυτόματα

Αυτό διασφαλίζει ότι όταν αρχίσουμε να δημιουργούμε templates και test sites στο επόμενο μάθημα, όλα λειτουργούν end to end.

## Το Δίκτυο FitSite μέχρι στιγμής {#the-fitsite-network-so-far}

Τέλη αυτού του μαθήματος, αυτό που έχετε είναι:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Τι Κατασκευάσαμε Αυτό το Μάθημα {#what-we-built-this-lesson}

- **Μια λειτουργική εγκατάσταση WordPress Multisite** σε λειτουργία subdomain
- **Το Ultimate Multisite εγκατεστημένο** και ρυθμισμένο με το branding FitSite
- **Hosting και SSL** ρυθμισμένα για ένα αναπτυσσόμενο δίκτυο
- **Domain mapping** ρυθμισμένο για τον πάροχο hosting σας
- **Το niche-specific email tone** καθιερωμένο από την πρώτη μέρα

---

**Σ συνέχεια:** [Μάθημα 4: Δημιουργία Niche Templates](lesson-4-templates) — δημιουργούμε site templates που οι ιδιοκτήτες fitness studio θα θέλουν πραγματικά να χρησιμοποιήσουν.
