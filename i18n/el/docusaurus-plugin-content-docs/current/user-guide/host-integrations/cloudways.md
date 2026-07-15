---
title: Ενσωμάτωση Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Ενσωμάτωση Cloudways

## Επισκόπηση {#overview}
Το Cloudways είναι μια διαχειριζόμενη πλατφόρμα cloud hosting που σας επιτρέπει να αναπτύσσετε WordPress ιστότοπους σε διάφορους παρόχους cloud όπως DigitalOcean, AWS, Google Cloud και άλλα. Αυτή η ενσωμάτωση ενεργοποιεί τον αυτόματο συγχρονισμό domain και τη διαχείριση πιστοποιητικών SSL μεταξύ Ultimate Multisite και Cloudways.

## Δυνατότητες {#features}
- Αυτόματος συγχρονισμός domain
- Διαχείριση πιστοποιητικών SSL
- Υποστήριξη για επιπλέον domains
- Επικύρωση DNS για πιστοποιητικά SSL

## Απαιτήσεις {#requirements}
Οι ακόλουθες σταθερές πρέπει να οριστούν στο αρχείο `wp-config.php` σας:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Προαιρετικά, μπορείτε επίσης να ορίσετε:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Οδηγίες ρύθμισης {#setup-instructions}

### 1. Αποκτήστε τα διαπιστευτήρια Cloudways API σας {#1-get-your-cloudways-api-credentials}

1. Συνδεθείτε στο Cloudways dashboard σας
2. Μεταβείτε στο "Account" > "API Keys"
3. Δημιουργήστε ένα API key αν δεν έχετε ήδη ένα
4. Αντιγράψτε το email και το API key σας

### 2. Αποκτήστε τα ID του διακομιστή και της εφαρμογής σας {#2-get-your-server-and-application-ids}

1. Στο Cloudways dashboard σας, μεταβείτε στο "Servers"
2. Επιλέξτε τον διακομιστή όπου φιλοξενείται το WordPress multisite σας
3. Το Server ID είναι ορατό στο URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Μεταβείτε στο "Applications" και επιλέξτε την WordPress εφαρμογή σας
5. Το App ID είναι ορατό στο URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Προσθέστε σταθερές στο wp-config.php {#3-add-constants-to-wp-configphp}

Προσθέστε τις ακόλουθες σταθερές στο αρχείο `wp-config.php` σας:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Αν έχετε επιπλέον **εξωτερικά** domains (εκτός του δικτύου multisite σας) που πρέπει πάντα να διατηρούνται στη λίστα ψευδωνύμων του Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Μην συμπεριλάβετε το wildcard του δικού σας δικτύου
Μην προσθέσετε **ποτέ** `*.your-network.com` (ή οποιοδήποτε μοτίβο subdomain του δικού σας δικτύου) στο
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Δείτε το [Σημαντικό — παγίδα wildcard SSL](#important--wildcard-ssl-pitfall)
παρακάτω για το γιατί αυτό εμποδίζει την έκδοση πιστοποιητικών SSL ανά tenant.
:::

### 4. Ενεργοποιήστε την ενσωμάτωση {#4-enable-the-integration}

1. Στο WordPress admin σας, μεταβείτε στο Ultimate Multisite > Settings
2. Πλοηγηθείτε στην καρτέλα "Domain Mapping"
3. Κάντε κύλιση προς τα κάτω στο "Host Integrations"
4. Ενεργοποιήστε την ενσωμάτωση Cloudways
5. Κάντε κλικ στο "Save Changes"

## Πώς λειτουργεί {#how-it-works}

### Συγχρονισμός domain {#domain-syncing}

Όταν ένα domain αντιστοιχίζεται στο Ultimate Multisite:

1. Η ενσωμάτωση ανακτά όλα τα τρέχοντα αντιστοιχισμένα domains
2. Προσθέτει το νέο domain στη λίστα (μαζί με μια έκδοση www, αν ισχύει)
3. Στέλνει την πλήρη λίστα στο Cloudways μέσω του API
4. Το Cloudways ενημερώνει τα ψευδώνυμα domain για την εφαρμογή σας

Σημείωση: Το Cloudways API απαιτεί την αποστολή της πλήρους λίστας των domains κάθε φορά, όχι απλώς την προσθήκη ή αφαίρεση μεμονωμένων domains.

### Διαχείριση πιστοποιητικών SSL {#ssl-certificate-management}

Αφού συγχρονιστούν τα domains:

1. Η ενσωμάτωση ελέγχει ποια domains έχουν έγκυρες εγγραφές DNS που δείχνουν στον διακομιστή σας
2. Στέλνει ένα αίτημα στο Cloudways για εγκατάσταση πιστοποιητικών Let's Encrypt SSL για αυτά τα domains
3. Το Cloudways χειρίζεται την έκδοση και εγκατάσταση των πιστοποιητικών SSL

Η ενσωμάτωση ζητά πάντα **τυπικά** (όχι wildcard) πιστοποιητικά Let's Encrypt από το
Cloudways. Αν παρέχεται ένα μοτίβο wildcard στο `WU_CLOUDWAYS_EXTRA_DOMAINS`, το αρχικό
`*.` αφαιρείται πριν από το αίτημα SSL — το ίδιο το wildcard δεν εγκαθίσταται ποτέ από αυτήν την
ενσωμάτωση. Για να χρησιμοποιήσετε ένα wildcard πιστοποιητικό στο Cloudways, θα έπρεπε να το εγκαταστήσετε
χειροκίνητα, αλλά κάτι τέτοιο αποκλείει την ανά domain έκδοση Let's Encrypt για αντιστοιχισμένα προσαρμοσμένα domains
(δείτε την παγίδα παρακάτω).

## Επιπλέον domains {#extra-domains}

Η σταθερά `WU_CLOUDWAYS_EXTRA_DOMAINS` σας επιτρέπει να καθορίσετε επιπλέον **εξωτερικά**
domains που πρέπει πάντα να διατηρούνται στη λίστα ψευδωνύμων της εφαρμογής Cloudways. Χρησιμοποιήστε τη για:

- Εξωτερικά domains που δεν διαχειρίζονται από το Ultimate Multisite (π.χ. ένας ξεχωριστός ιστότοπος marketing που μοιράζεται την ίδια εφαρμογή Cloudways)
- Parked ή staging domains που θέλετε να διατηρούνται στη λίστα ψευδωνύμων της εφαρμογής

Μην χρησιμοποιείτε αυτήν τη σταθερά για το wildcard subdomain του δικού σας δικτύου
(π.χ. `*.your-network.com`). Δείτε την παγίδα wildcard SSL παρακάτω.

## Σημαντικό — παγίδα wildcard SSL {#important--wildcard-ssl-pitfall}

Ένα συνηθισμένο λάθος όταν ακολουθείτε την προεπιλεγμένη ρύθμιση του Cloudways είναι να προσθέσετε ένα wildcard όπως
`*.your-network.com` στο `WU_CLOUDWAYS_EXTRA_DOMAINS`, ή να εγκαταστήσετε χειροκίνητα ένα Cloudways
wildcard πιστοποιητικό SSL για αυτό το wildcard.

**Αν το κάνετε αυτό, το Cloudways θα αρνηθεί να εκδώσει πιστοποιητικά Let's Encrypt για τα
προσαρμοσμένα domains ανά tenant που αντιστοιχίζει το Ultimate Multisite.** Το Cloudways αντικαθιστά το ενεργό
πιστοποιητικό SSL στην εφαρμογή κάθε φορά, και ένα προϋπάρχον wildcard πιστοποιητικό στην
εφαρμογή εμποδίζει την ανά domain έκδοση Let's Encrypt στην οποία βασίζεται η ενσωμάτωση.

### Προτεινόμενη ρύθμιση Cloudways SSL για ένα δίκτυο Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Στην καρτέλα **SSL Certificate** της εφαρμογής Cloudways, εγκαταστήστε ένα **τυπικό
   πιστοποιητικό Let's Encrypt** που καλύπτει μόνο τα `your-network.com` και `www.your-network.com`
   — **όχι** wildcard.
2. Μην βάλετε το `*.your-network.com` (ή οποιοδήποτε μοτίβο subdomain του δικού σας δικτύου) στο
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Κρατήστε αυτήν τη σταθερά μόνο για **εξωτερικά** domains.
3. Δημιουργήστε το wildcard subdomain ανά tenant μόνο σε επίπεδο **DNS** (μια εγγραφή `A` για το
   `*.your-network.com` που δείχνει στη διεύθυνση IP του διακομιστή Cloudways σας) ώστε τα subsites να επιλύονται. Το SSL
   για μεμονωμένα αντιστοιχισμένα προσαρμοσμένα domains εκδίδεται στη συνέχεια αυτόματα από την ενσωμάτωση
   μέσω Let's Encrypt.

Αν τα προσαρμοσμένα domains των tenants σας έχουν κολλήσει χωρίς SSL, ελέγξτε την καρτέλα SSL του Cloudways. Αν ένα
wildcard πιστοποιητικό είναι ενεργό εκεί, αφαιρέστε το, επανεκδώστε ένα τυπικό Let's Encrypt
πιστοποιητικό μόνο για το κύριο domain του δικτύου και αφαιρέστε τυχόν wildcard καταχωρίσεις από
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Έπειτα ενεργοποιήστε ξανά μια αντιστοίχιση domain (ή περιμένετε την επόμενη)
και η ενσωμάτωση θα αρχίσει ξανά να εκδίδει πιστοποιητικά ανά domain.

## Αντιμετώπιση προβλημάτων {#troubleshooting}

### Προβλήματα σύνδεσης API {#api-connection-issues}
- Επαληθεύστε ότι το email και το API key σας είναι σωστά
- Ελέγξτε ότι τα IDs του server και της εφαρμογής σας είναι σωστά
- Βεβαιωθείτε ότι το Account σας στο Cloudways έχει τα απαραίτητα δικαιώματα

### Προβλήματα πιστοποιητικών SSL {#ssl-certificate-issues}
- Το Cloudways απαιτεί τα domains να έχουν έγκυρες εγγραφές DNS που δείχνουν στον server σας πριν από την έκδοση πιστοποιητικών SSL
- Η ενσωμάτωση επικυρώνει τις εγγραφές DNS πριν ζητήσει πιστοποιητικά SSL
- Αν δεν εκδίδονται πιστοποιητικά SSL, ελέγξτε ότι τα domains σας δείχνουν σωστά στη διεύθυνση IP του server σας
- **Προσαρμοσμένα domains ανά tenant κολλημένα χωρίς SSL;** Ελέγξτε την καρτέλα SSL Certificate της εφαρμογής Cloudways. Αν ένα wildcard πιστοποιητικό (εγκατεστημένο χειροκίνητα ή που καλύπτει το `*.your-network.com`) είναι ενεργό, το Cloudways δεν θα εκδώσει πιστοποιητικά Let's Encrypt για μεμονωμένα αντιστοιχισμένα προσαρμοσμένα domains. Αντικαταστήστε το με ένα τυπικό πιστοποιητικό Let's Encrypt που καλύπτει μόνο το κύριο domain του δικτύου (`your-network.com`, `www.your-network.com`) και αφαιρέστε τυχόν wildcard καταχωρίσεις από `WU_CLOUDWAYS_EXTRA_DOMAINS`. Έπειτα ενεργοποιήστε ξανά μια αντιστοίχιση domain (ή περιμένετε την επόμενη) και η ενσωμάτωση θα ζητήσει πιστοποιητικά ανά domain.

### Το domain δεν προστέθηκε {#domain-not-added}
- Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite για τυχόν μηνύματα σφάλματος
- Επαληθεύστε ότι το domain δεν έχει ήδη προστεθεί στο Cloudways
- Βεβαιωθείτε ότι το πλάνο σας στο Cloudways υποστηρίζει τον αριθμό των domains που προσθέτετε
