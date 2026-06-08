---
title: 'Μάθημα 5: Σχεδιάζοντας τα Σχέδια σας'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Μάθημα 5: Σχεδιασμός των Σχεδίων σας

Τα επίπεδα τιμολόγησης (plan tiers) δεν είναι απλώς βαθμίδες τιμών—αντικατοπτρίζουν τον τρόπο λειτουργίας των πελατών σας στην συγκεκριμένη αγορά (niche). Σε αυτό το μάθημα, θα σχεδιάσετε τα επίπεδα προϊόντων ώστε να ταιριάζουν στις πραγματικές ανάγκες των επιχειρήσεων fitness σε διαφορετικά στάδια ανάπτυξης.

## Πού Έμασαμε

Το FitSite έχει έτοιμα τρία templates (Studio Essential, Gym Pro, Fitness Chain). Τώρα δημιουργούμε τα σχέδια που καθορίζουν σε τι έχουν πρόσβαση οι πελάτες και τι πληρώνουν.

## Σκέψη σε Ομάδες Πελατών

Το λάθος που κάνουν οι περισσότεροι είναι να σχεδιάζουν τα σχέδια γύρω από τεχνικά χαρακτηριστικά (αποθήκευση, bandwidth, αριθμός σελίδων). Οι ιδιοί πελάτες σας δεν σκέφτονται με αυτούς τους όρους. Ένας ιδιοκτήτης γυμναστηρίου σκέφτεται για το τι χρειάζεται για να λειτουργήσει η επιχείρησή του.

Για τα fitness studios, υπάρχουν τρεις φυσικές ομάδες:

| Segment | Ποιοι Είναι | Τι Χρειάζονται |
|---------|-------------|----------------|
| **Solo trainers / small studios** | 1-3 προσωπικό, μία τοποθεσία, αρχάριος | Ένα επαγγελματικό site, πληροφορίες για μαθήματα, φόρμα επικοινωνίας |
| **Established gyms** | 5-20 προσωπικό, μία τοποθεσία, σε ανάπτυξη | Όλα τα παραπάνω συν το booking, blog, gallery, custom domain |
| **Fitness chains** | Πολλαπλές τοποθεσίες, καθιερωμένη brand | Όλα τα παραπάνω συν multi-site, σελίδες τοποθεσιών, καταzeichnis προσωπικού |

Τα σχέδιά σας πρέπει να αντιστοιχούν σε αυτές τις ομάδες, και όχι σε τυχαίες συλλογές χαρακτηριστικών.

## Δημιουργία των Σχεδίων FitSite

Μεταβείτε στο **Ultimate Multisite > Products > Add Product** για κάθε plan.

### Plan 1: FitSite Starter -- $49/month

**Στόχος**: Solo trainers και μικρά studios

**Tab Description**:
- Name: FitSite Starter
- Description: "Όλα όσα χρειάζεται ένας personal trainer ή ένα μικρό studio για να φαίνονται επαγγελματικά online."

**Tab General**:
- Product type: Plan
- Customer role: Administrator

**Tab Site Templates**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Tab Plugins**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Tab Themes**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month

**Στόχος**: Καθιερωμένα γυμναστήρια με μία τοποθεσία

**Tab Description**:
- Name: FitSite Growth
- Description: "Για καθιερωμένα γυμναστήρια έτοιμα να αναπτύξουν την online παρουσία τους και να προσελκύσουν νέους συνδρομητές."

**Tab Site Templates**:
- Available templates: Studio Essential και Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Tab Plugins**:
- Όλα τα Starter, συν:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Tab Up & Downgrades**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month

**Στόχος**: Fitness chains με πολλαπλές τοποθεσίες

**Tab Description**:
- Name: FitSite Pro
- Description: "Η ολοκληρωμένη πλατφόρμα για fitness brands με πολλαπλές τοποθεσίες."

**Tab Site Templates**:
- Available templates: Όλα τα τρία templates

**Limitations**:
- Sites: 5 (ένα ανά τοποθεσία)
- Disk space: 20 GB
- Custom domain: Enabled

**Tab Plugins**:
- Όλα τα Growth, συν:
- All premium plugins: Force Activate

**Tab Up & Downgrades**:
- Plan group: FitSite Plans
- Product order: 3

## Ρύθμιση της Ομάδας Σχεδίων (Plan Group)

Η ομάδα σχεδίων διασφαλίζει ότι οι πελάτες μπορούν να κάνουν upgrade ή downgrade μόνο εντός της οικογένειας σχεδίων FitSite. Στην καρτέλα **Up & Downgrades** κάθε plan:

1. Ρυθμίστε το **Plan Group** σε "FitSite Plans" για όλα τα τρία plans
2. Ρυθμίστε το **Product Order** σε 1 (Starter), 2 (Growth), 3 (Pro)

Αυτό δημιουργεί μια σαφή πορεία αναβάθμισης: Starter → Growth → Pro.

## Προσθήκη Order Bumps

Τα order bumps είναι συμπληρωματικά προϊόντα που προσφέρονται κατά την ολοκλήρωση της αγοράς (checkout). Για το FitSite, λάβετε υπόψη:

- **Extra Storage Pack** ($19/month) -- επιπλέον 5 GB χώρος αποθήκευσης
- **Priority Support** ($29/month) -- ταχύτερες απαντήσεις
- **Additional Site** ($39/month) -- για πελάτες που χρειάζονται περισσότερα sites από όσα επιτρέπει το plan τους

Δημιουργήστε αυτά ως προϊόντα τύπου **Package** στο Ultimate Multisite και συνδέστε τα με τα αντίστοιχα plans.

## Γιατί Λειτουργεί Αυτή η Δομή

- Το **Starter** αφαιρεί τα εμπόδια εισόδου — χαμηλή τιμή, απλή προσφορά, φέρνει τους trainers online γρήγορα
- Το **Growth** προσθέτει τα χαρακτηριστικά που ζητούν πραγματικά τα γυμναστήρια — booking, galleries, custom domains
- Το **Pro** εξυπηρετεί το segment υψηλής αξίας που χρειάζεται υποστήριξη πολλαπλών τοποθεσιών
- Τα **Order bumps** επιτρέπουν στους πελάτες να προσαρμόζουν χωρίς να πολυπλοκάρнити τα βασικά plans
- Η **σαφής πορεία αναβάθμισης** σημαίνει ότι οι πελάτες αναπτύσσονται μαζί σας αντί να φύγουν

## Το FitSite Network μέχρι στιγμής

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Τι Δημιουργήσαμε Αυτό το Μάθημα

- **Τρία επίπεδα σχεδίων** που αντιστοιχούν σε πραγματικές επιχειρήσεις fitness
- **Feature gating** χρησιμοποιώντας τους ελέγχους plugins και templates του Ultimate Multisite
- **Μια ομάδα σχεδίων** με μια σαφή πορεία αναβάθμισης
- **Προϊόντα order bump** για επιπλέον έσοδα
- **Μια δομή τιμολόγησης** βασισμένη στην αξία του πελάτη, όχι στα τεχνικά χαρακτηριστικά

---

**Σ συνέχεια:** [Lesson 6: The Signup Experience](lesson-6-checkout) — δημιουργούμε μια ροή checkout που μετατρέπει τους ιδιοκτήτες fitness studios σε πληρωμένους πελάτες.
