---
title: Δεξιότητα Προδιαγραφών Ιστοσελίδας
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Δεξιότητα Καθορισμού Συστήματος (Site Specification Skill)

Η **δεξιότητα Καθορισμού Συστήματος (Site Specification skill)** είναι μια δομημένη προσέγγιση για την καταγραφή των στόχων, του κοινού και της ταυτότητας ενός brand του site σας. Αυτές οι πληροφορίες αποθηκεύονται στη μνήμη **site_brief** του site σας, την οποία ανατρέχουν οι agents σε διάφορες συνεδρίες για να παρέχουν συνεπή και ενημερωμένα βοήθημα.

## Τι είναι ο Καθορισμός Συστήματος;

Ο Καθορισμός Συστήματος είναι η διαδικασία τεκμηρίωσης:

- **Σκοπός του site**: Τι κάνει το site σας και γιατί υπάρχει
- **Στόχευση κοινού**: Ποιος επισκέπτεται το site σας και τι χρειάζεται
- **Brand ταυτότητα**: Τα χρώματά σας, ο τόνος και το οπτικό σας στυλ
- **Επιχειρηματικοί στόχοι**: Τι σημαίνει επιτυχία για το site σας
- **Δομή περιεχομένου**: Πώς είναι οργανωμένο το site σας

Αυτή η προδιαγραφή γίνεται το **site_brief** σας, μια διαρκής μνήμη που χρησιμοποιούν οι agents για να κατανοήσουν το πλαίσιο του site σας.

## Γιατί να χρησιμοποιήσετε τον Καθορισμό Συστήματος;

### Συνέπεια μεταξύ συνεδριών

Χωρίς το site_brief, θα έπρεπε να ξαναεξηγούσατε τον σκοπό του site σας κάθε φορά που ξεκινάτε μια νέα συνεδρία. Με αυτό, οι agents κατανοούν αμέσως:

- Τους στόχους και το κοινό του site σας
- Τα χρώματα και τον τόνο του brand σας
- Τη δομή περιεχομένου σας
- Τους επιχειρηματικούς στόχους σας

### Καλύτερες Προτάσεις

Οι agents χρησιμοποιούν το site_brief σας για να:

- Προτείνουν λειτουργίες που ευθυγραμμίζονται με τον σκοπό του site σας
- Προτείνουν δομές περιεχομένου που ταιριάζουν με τους στόχους σας
- Προτείνουν σχεδιασμούς συνεπείς με το brand σας
- Αποφεύγουν να προτείνουν μη συμβατές λειτουργίες

### Ταχύτερη Εγκατάσταση (Onboarding)

Οι νέοι agents (ή οι agents σε νέες συνεδρίες) μπορούν να εξοικειωθούν γρήγορα διαβάζοντας το site_brief σας αντί να κάνουν ερωτήσεις διευκρίνισης.

## Εκκίνηση του Καθορισμού Συστήματος

### Κατά την Εγκατάσταση του Theme Builder

Η δεξιότητα Site Specification ενεργοποιείται αυτόματα κατά τη διαδικασία **onboarding του Theme Builder**. Ο agent Setup Assistant κάνει ερωτήσεις και κατασκευάζει το site_brief σας.

### Χειροκίνητη Εκκίνηση

Μπορείτε να ξεκινήσετε τον Καθορισμό Συστήματος οποιαδήποτε στιγμή:

```
"Let's define my site specification"
```

ή

```
"Help me create a site brief"
```

## Η Διαδικασία Καθορισμού Συστήματος

### Βήμα 1: Σκοπός του Site

Ο agent ρωτά:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Μπορείτε να επιλέξετε μια κατηγορία ή να περιγράψετε τον δικό σας σκοπό.

### Βήμα 2: Στόχευση Κοινού

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Βήμα 3: Brand Ταυτότητα

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Βήμα 4: Επιχειρηματικοί Στόχοι

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Βήμα 5: Δομή Περιεχομένου

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Η Μνήμη site_brief σας

Μετά την ολοκλήρωση του Καθορισμού Συστήματος, οι πληροφορίες σας αποθηκεύονται ως **site_brief** στη μνήμη του agent σας. Αυτή είναι μια δομημένη καταγραφή που περιέχει:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Προβολή και Ενημέρωση του site_brief σας

### Προβολή του site_brief σας

Ζητήστε από τον agent:

```
"Show me my site brief"
```

ή

```
"What do you know about my site?"
```

Ο agent θα εμφανίσει την αποθηκευμένη προδιαγραφή σας.

### Ενημέρωση του site_brief σας

Εάν το site σας εξελίσσεται, μπορείτε να το ενημερώσετε:

```
"Update my site brief: we're now targeting B2B customers"
```

ή

```
"Refresh my site specification"
```

Αυτό θα επανακινήσει τη δεξιότητα Site Specification χρησιμοποιώντας τις υπάρχουσες πληροφορίες σας ως σημείο εκκίνησης.

## Πώς Χρησιμοποιούν οι Agents το site_brief

### Προτάσεις Σχεδιασμού

Όταν ζητάτε αλλαγές σχεδιασμού, οι agents ανατρέχουν στο site_brief σας:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Προτάσεις Λειτουργιών

Οι agents προτείνουν λειτουργίες που ευθυγραμμίζονται με τους στόχους σας:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Δομή Περιεχομένου

Οι agents προτείνουν οργάνωση περιεχομένου με βάση τη δομή σας:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Βέλτιστες Πρακτικές

### Να είστε συγκεκριμένοι

Αντί για "general audience" (γενικό κοινό), περιγράψτε το πραγματικό σας κοινό:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Ενημερώνετε τακτικά

Καθώς εξελίσσεται το site σας, ενημερώστε το site_brief σας:

- Όταν κάνετε αλλαγή στόχευσης σε ένα νέο κοινό
- Όταν προσθέτετε νέες γραμμές προϊόντων
- Όταν αλλάζει η brand ταυτότητά σας
- Όταν αλλάζουν οι επιχειρηματικοί σας στόχοι

### Χρήση Συνεπών Όρων

Χρησιμοποιήστε τους ίδιους όρους σε όλες τις συνεδρίες:

- ✓ Πείτε πάντα "sustainable jewelry" (και όχι "eco-friendly jewelry" και "green products")
- ✓ Αναφέρετε σταθερά το κοινό σας με τον ίδιο τρόπο

### Συλλογή Πλαισίου (Context)

Παρέχετε နောက်ခံ thông tin που βοηθά τους agents να κατανοήσουν τις αποφάσεις σας:

- "Targeting professionals who value quality over price" (Στοχεύουμε επαγγελματίες που εκτιμούν την ποιότητα πάνω από την τιμή)
- "Our audience is tech-savvy and expects modern design" (Το κοινό μας είναι τεχνοsavvy και περιμένει μοντέρνο design)
- "We're a bootstrapped startup, so we need cost-effective solutions" (Είμαστε μια startup που χρηματοδοτείται από τα ίδια τα χρήματα, οπότε χρειάζονται οικονομικά αποδοτικές λύσεις)

## Σχέση με το Onboarding του Theme Builder

Η δεξιότητα Site Specification ενσωματώνεται στη διαδικασία **onboarding του Theme Builder**. Όταν ολοκληρώνετε το onboarding, το site_brief σας δημιουργείται αυτόματα με τις πληροφορίες που παρείχατε.

Μπορείτε επίσης να εκτελέσετε το Site Specification ανεξάρτητα αν θέλετε:

- Να βελτιώσετε την προδιαγραφή σας μετά την αρχική ρύθμιση
- Να ενημερώσετε το site_brief καθώς εξελίσσεται το site σας
- Να δημιουργήσετε μια λεπτομερή προδιαγραφή πριν ξεκινήσετε το Theme Builder

## Αντιμετώπιση Προβλημάτων (Troubleshooting)

**Το site_brief μου δεν χρησιμοποιείται**
- Επιβεβαιώστε ότι ο agent έχει πρόσβαση στη μνήμη
- Ζητήστε από τον agent να "recall my site brief" (ανακαλέσει το site_brief μου)
- Ελέγξτε ότι η μνήμη είναι ενεργοποιημένη στις ρυθμίσεις σας

**Θέλω να ξεκινήσω από το μηδέν με ένα νέο site_brief**
- Ζητήστε από τον agent: "Clear my site brief and start fresh" (Καθαρίστε το site_brief μου και ξεκινήστε από το μηδέν)
- Στη συνέχεια, εκτελέστε ξανά το Site Specification

**Ο agent κάνει προτάσεις που δεν ταιριάζουν με το site_brief μου**
- Ζητήστε από τον agent να "review my site brief" (ελέγξει το site_brief μου)
- Ενημερώστε το site_brief σας αν είναι παρωχημένο
- Παρέχετε επιπλέον πλαίσιο στις αιτήσεις σας

## Επόμενα Βήματα

Μετά τον καθορισμό της προδιαγραφής του site σας:

1. **Χρήση του Theme Builder**: Δημιουργήστε ένα προσαρμοσμένο theme με βάση το site_brief σας
2. **Βελτίωση Σχεδιασμού**: Χρησιμοποιήστε τη δεξιότητα Design System Aesthetics για λεπτομερή εργασία σχεδιασμού
3. **Σχεδιασμός Περιεχομένου**: Ζητήστε από τους agents προτάσεις δομής περιεχομένου
4. **Δημιουργία Λειτουργιών**: Ζητήστε λειτουργίες που ευθυγραμμίζονται με τους επιχειρηματικούς σας στόχους
