---
title: Δυνατότητες του Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Ικανότητες Theme Builder: Scaffold και Ενεργοποίηση Block Themes

Το Superdav AI Agent v1.12.0 εισάγει δύο ισχυρές δυνατότητες που σας επιτρέπουν να δημιουργείτε και να triển khaiτε προσαρμοσμένα block themes απευθείας από τη διεπαφή chat.

## Γενική Επισκόπηση

Οι δυνατότητες **scaffold-block-theme** και **activate-theme** επιτρέπουν στους agents να:
- Δημιουργούν πλήρεις block themes έτοιμα για παραγωγή, βάσει των προδιαγραφών σας
- Ενεργοποιούν αυτόματα τα themes στο site σας χωρίς χειροκίνηczną παρέμβαση
- Δημιουργούν ενιαίες οπτικές ταυτότητες μέσω καθοδηγούμενων αποφάσεων σχεδιασμού

## Scaffold Block Theme

Η δυνατότητα **scaffold-block-theme** δημιουργεί ένα νέο WordPress block theme με πλήρη δομή theme, συμπεριλαμβανομένων:

- Ρύθμισης `theme.json` με design tokens
- Αρχείων block templates για συνηθισμένα layouts
- Προσαρμοσμένων στυλ και παραλλαγών blocks
- Μεταδεδομένων και δηλώσεων υποστήριξης του theme

### Πώς να το χρησιμοποιήσετε

Στο chat σας με το Superdav AI Agent, μπορείτε να ζητήσετε τη δημιουργία ενός theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Ο agent θα:
1. Συλλέξει τις προτιμήσεις σχεδιασμού σας μέσω συνομιλίας
2. Δημιουργήσει τη πλήρη δομή του theme
3. Δημιουργήσει όλα τα απαραίτητα αρχεία του theme
4. Προετοιμάσει το theme για ενεργοποίηση

### Αναμενόμενη Έξοδος

Όταν η δυνατότητα εκτελεστεί επιτυχώς, θα δείτε:

- Επιβεβαίωση ότι το theme έχει scaffolded
- Το όνομα και η τοποθεσία του theme
- Μια περίληψη των design tokens που εφαρμόστηκαν (χρώματα, typografia, αποστάσεις)
- Κατάσταση έτοιμης ενεργοποίησης

Παράδειγμα εξόδου:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme

Η δυνατότητα **activate-theme** αλλάζει το site σας σε ένα πρόσφατα scaffolded ή ήδη υπάρχον block theme.

### Πώς να το χρησιμοποιήσετε

Μετά το scaffolding ενός theme, μπορείτε να το ενεργοποιήσετε αμέσως:

```
"Activate the Modern Agency theme"
```

Ή να ενεργοποιήσετε οποιοδήποτε υπάρχον theme:

```
"Switch to the Twentytwentyfour theme"
```

### Αναμενόμενη Έξοδος

Όταν η ενεργοποίηση είναι επιτυχής:

- Επιβεβαίωση του ενεργού theme
- Όνομα του προηγούμενου theme (για αναφορά)
- Η URL του site όπου το theme είναι τώρα ενεργό
- Οποιαδήποτε σημειώσεις ρύθμισης ειδικές για το theme

Παράδειγμα εξόδου:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold και Activate

Ένας τυπικός workflow συνδυάζει και τις δύο δυνατότητες:

1. **Ζήτηση δημιουργίας theme**: "Create a block theme for my SaaS landing page"
2. **Ο agent scaffold το theme**: Δημιουργεί αρχεία και design tokens
3. **Επανεξέταση και βελτίωση**: Συζητάτε αλλαγές σχεδιασμού αν χρειαστεί
4. **Ενεργοποίηση**: "Activate the theme now"
5. **Επαλήθευση**: Επισκέπ•εστε το site σας για να επιβεβαιώσετε ότι το νέο design είναι ενεργό

## Design Tokens και Προσαρμογή

Τα themes που scaffolded χρησιμοποιούν τα design tokens του WordPress (μέσω του `theme.json`) για:

- **Χρώματα**: Primary, secondary, accent, neutral palette
- **Typografia**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

Αυτοί οι tokens είναι κεντρικοί στο `theme.json`, καθιστώντας εύκολο τον προσαρμόστετε ολόκληρο το design system σας από ένα μόνο αρχείο.

## Περιορισμοί και Σημειώσεις

- Τα themes scaffolded βρίσκονται στο `/wp-content/themes/` και πρέπει να ακολουθούν τις ονομαστικές συνθήκες του WordPress
- Η ενεργοποίηση απαιτεί κατάλληλα δικαιώματα στο WordPress site σας
- Ο προσαρμοσμένος κώδικας PHP στα themes είναι ελάχιστος· χρησιμοποιήστε plugins για σύνθετες λειτουργίες
- Τα block themes λειτουργούν καλύτερα με το WordPress 5.9 και νεότερες εκδόσεις

## Αντιμετώπιση Προβλημάτων

**Το theme δεν εμφανίζεται μετά το scaffolding**
- Επιβεβαιώστε ότι το directory του theme υπάρχει και έχει τα σωστά δικαιώματα
- Ελέγξτε ότι το `theme.json` είναι έγκυρο JSON
- Βεβαιωθείτε ότι το όνομα του theme δεν συγκρούεται με υπάρχοντα themes

**Η ενεργοποίηση αποτυγχάνει**
- Επιβεβαιώστε ότι έχετε δικαιώματα διαχειριστή (administrator)
- Ελέγξτε ότι το directory του theme είναι αναγνώσιμο από το WordPress
- Εξετάστε τα αρχεία καταγραφής (error logs) του WordPress για λεπτομέρειες

**Τα design tokens δεν εφαρμόζονται**
- Επιβεβαιώστε ότι η σύνταξη του `theme.json` είναι σωστή
- Καθαρίστε τυχόν caching plugins
- Ελέγξτε ότι η έκδοση WordPress σας υποστηρίζει τα tokens που χρησιμοποιείτε

## Επόμενα Βήματα

Μετά την ενεργοποίηση του theme σας, μπορείτε να:
- Χρησιμοποιήσετε την **Design System Aesthetics skill** για να βελτιώσετε τη typografia, τα χρώματα και τις αποστάσεις
- Προσαρμόσετε τα μεμονωμένα στυλ των blocks μέσω του WordPress block editor
- Προσθέσετε προσαρμοσμένο CSS στο αρχείο `style.css` του theme
- Δημιουργήσετε προσαρμοσμένα block templates για συγκεκριμένους τύπους σελίδων
