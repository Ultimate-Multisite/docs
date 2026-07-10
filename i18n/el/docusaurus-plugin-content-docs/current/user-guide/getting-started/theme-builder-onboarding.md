---
title: Ροή Onboarding του Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Διαδικασία Εκκίνησης Theme Builder {#theme-builder-onboarding-flow}

Το Superdav AI Agent v1.12.0 εισάγει μια καθοδηγούμενη **διαδικασία εκκίνησης Theme Builder** που σας βοηθά να δημιουργήσετε ένα προσαρμοσμένο block theme κατά την αρχική σας ρύθμιση. Αυτό αντικαθιστά τη παλαιότερη λειτουργία Site Builder με μια πιο ευέλικτη προσέγγιση, υποστηριζόμενη από agent.

## Τι είναι η Διαδικασία Εκκίνησης Theme Builder; {#what-is-the-theme-builder-onboarding-flow}

Η διαδικασία εκκίνησης Theme Builder είναι ένας διαδραστικός βοηθός ρύθμισης που:

- Σας καθοδηγεί στις αποφάσεις σχεδιασμού (χρώματα, γραμματοσειρές, διάταξη)
- Συλλέγει τις προτιμήσεις οπτικής ταυτότητας του site σας
- Δημιουργεί ένα προσαρμοσμένο block theme σχεδιασμένο για τις ανάγκες σας
- Ενεργοποιεί αυτόματα το theme όταν ολοκληρωθεί

Η διαδικασία λειτουργεί με τον **Setup Assistant agent**, ο οποίος κάνει διευκρινιστικές ερωτήσεις και δημιουργεί το theme σας σταδιακά.

## Εκκίνηση του Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Ρύθμιση Πρώτης Χρήσης {#first-run-setup}

Όταν εκκινήσετε για πρώτη φορά το Superdav AI Agent σε μια νέα εγκατάσταση WordPress, θα δείτε:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Επιλέξτε **"Build a custom theme"** για να μπείτε στη διαδικασία εκκίνησης Theme Builder.

### Χειροκίνητη Ενεργοποίηση {#manual-activation}

Μπορείτε επίσης να ξεκινήσετε την διαδικασία εκκίνησης Theme Builder οποιαδήποτε στιγμή ζητώντας:

```
"Start the Theme Builder onboarding"
```

ή

```
"Help me create a custom theme"
```

## Τα Βήματα της Εκκίνησης {#the-onboarding-steps}

### Βήμα 1: Επιλογή Λειτουργίας {#step-1-mode-selection}

Ο Setup Assistant agent ρωτά για τις προτιμήσεις σας:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

Η **Guided mode** συνιστάται για τους περισσότερους χρήστες· ο agent κάνει προτάσεις σχεδιασμού με βάση τον κλάδο και τους στόχους σας.

### Βήμα 2: Προδιαγραφές του Site {#step-2-site-specification}

Θα σας ρωτήσει για το site σας:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, κ.λπ.
- **Target audience**: Ποιοι είναι οι επισκέπτες σας;
- **Brand colors**: Κύρια και δευτερεύοντα χρώματα (ή "Δεν είμαι σίγουρος")
- **Tone**: Επαγγελματικό, δημιουργικό, παιχνιδιάρικο, minimal, κ.λπ.

Αυτές οι πληροφορίες αποθηκεύονται στην μνήμη **site_brief** του site σας, την οποία οι agents αναφέρονται σε μελλοντικές συνεδρίες.

### Βήμα 3: Αποφάσεις Συστήματος Σχεδιασμού {#step-3-design-system-decisions}

Ο agent σας καθοδηγεί μέσω των επιλογών των design tokens:

- **Typography**: Οικογένεια γραμματοσειράς (serif, sans-serif, monospace) και κλίμακα μεγεθών
- **Color palette**: Κύρια, δευτερεύοντα, accent και ουδέτερα χρώματα
- **Spacing**: Συμπιεσμένες, κανονικές ή ευρείες διατάξεις
- **Motion**: Animations και μεταβάσεις (εάν επιθυμείτε)

### Βήμα 4: Δημιουργία Theme {#step-4-theme-generation}

Ο Setup Assistant agent δημιουργεί το custom block theme σας με:

- `theme.json` που περιέχει όλα τα design tokens σας
- Block templates για κοινές διατάξεις (homepage, blog, contact)
- Custom block styles που ταιριάζουν με το design system σας
- Μεταδεδομένα theme και δηλώσεις υποστήριξης WordPress

### Βήμα 5: Ενεργοποίηση και Επαλήθευση {#step-5-activation-and-verification}

Το theme ενεργοποιείται αυτόματα και θα δείτε:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Στη συνέχεια, μπορείτε να επισκεφθείτε το site σας για να επαληθεύσετε ότι το theme εμφανίζεται σωστά.

## Site Specification και Μνήμη site_brief {#site-specification-and-sitebrief-memory}

Κατά τη διαδικασία εκκκίνησης, ο agent καταγράφει τις προδιαγραφές του site σας σε μια κατηγορία μνήμης **site_brief**. Αυτό περιλαμβάνει:

- Σκοπό και στόχους του site
- Target audience
- Brand colors και tone
- Design preferences
- Content structure

### Γιατί είναι σημαντικό το site_brief {#why-sitebrief-matters}

Σε μελλοντικές συνεδρίες, οι agents αναφέρονται στο site_brief σας για να:

- Διατηρούν τη συνέπεια του σχεδιασμού κατά τις αλλαγές
- Προτείνουν λειτουργίες ευθυγραμμισμένες με τον σκοπό του site σας
- Παρέχουν προτάσεις με βάση το πλαίσιο
- Αποφεύγουν την επανάληψη ερωτήσεων ρύθμισης

### Προβολή του site_brief σας {#viewing-your-sitebrief}

Μπορείτε να ρωτήσετε τον agent:

```
"Show me my site brief"
```

ή

```
"What do you know about my site?"
```

Ο agent θα εμφανίσει τις αποθηκευμένες προδιαγραφές του site σας.

## Προσαρμογή Μετά την Εκκίνηση {#customizing-after-onboarding}

Μετά την ολοκλήρωση της διαδικασίας εκκίνησης Theme Builder, μπορείτε να:

### Χρησιμοποιήσετε την Ικανότητα Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Ζητήστε βελτιώσεις σχεδιασμού:

```
"Refine the typography to be more modern"
```

ή

```
"Adjust the color palette to be warmer"
```

Η **Design System Aesthetics skill** σας καθοδηγεί μέσω στοχευμένων ενημερώσεων σχεδιασμού.

### Επεξεργασία του theme.json Άμεσα {#edit-themejson-directly}

Για προχωρημένους χρήστες, επεξεργαστείτε το `/wp-content/themes/[theme-name]/theme.json` για να ρυθμίσετε:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Δημιουργία Custom Block Templates {#create-custom-block-templates}

Χρησιμοποιήστε τον block editor του WordPress για να δημιουργήσετε προσαρμοσμένα templates για:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Σύγκριση: Παλιό vs. Νέο Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Αντιμετώπιση Προβλημάτων {#troubleshooting}

**Η διαδικασία εκκίνησης δεν ολοκληρώθηκε**
- Ξεκινήστε ξανά τη διαδικασία: "Start the Theme Builder onboarding"
- Βεβαιωθείτε ότι η εγκατάσταση WordPress σας είναι ενημερωμένη
- Επιβεβαιώστε ότι ο Setup Assistant agent είναι ενεργοποιημένος

**Το site_brief μου δεν χρησιμοποιείται**
- Επιβεβαιώστε ότι ο agent έχει πρόσβαση στη μνήμη
- Ζητήστε από τον agent να "recall my site brief"
- Ελέγξτε ότι η μνήμη είναι ενεργοποιημένη στις ρυθμίσεις σας

**Το δημιουργημένο theme δεν ταιριάζει στις προτιμήσεις μου**
- Χρησιμοποιήστε την Design System Aesthetics skill για να το βελτιώσετε
- Ζητήστε από τον agent να "regenerate the theme with [specific changes]"
- Επεξεργαστείτε το theme.json απευθείας για ακριβή έλεγχο

## Επόμενα Βήματα {#next-steps}

Μετά την ολοκλήρωση του Theme Builder onboarding:

1. **Επαληθεύστε το site σας**: Επισκεφθείτε το site σας για να δείτε το νέο theme
2. **Βελτιώστε το design**: Χρησιμοποιήστε την Design System Aesthetics skill για ρυθμίσεις
3. **Προσθέστε περιεχόμενο**: Ξεκινήστε να δημιουργείτε το περιεχόμενο του site σας
4. **Εξερευνήστε τις ικανότητες**: Μάθετε για άλλες ικανότητες agent όπως scaffold-block-theme και activate-theme
