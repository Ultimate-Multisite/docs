---
title: Βελτίωση Ενσωμάτωσης Πίνακα Ελέγχου
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Ενσωμάτωση με το Enhance Control Panel

## Επισκόπηση
Το Enhance είναι ένα σύγχρονο control panel που προσφέρει ισχυρές δυνατότητες αυτοματισμού και διαχείρισης hosting. Αυτή η ενσωμάτωση επιτρέπει τον αυτόματο συγχρονισμό domains και τη διαχείριση πιστοποιητικών SSL μεταξύ του Ultimate Multisite και του Enhance Control Panel.

**Σχετική συζήτηση:** Δείτε τη [Συζήτηση #265 στο GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) για συμβουλές από την κοινότητα και επιπλέον πληροφορίες.

## Χαρακτηριστικά
- Αυτόματος συγχρονισμός domains όταν γίνεται αντιστοίχιση στο Ultimate Multisite
- Αυτόματη έκδοση πιστοποιητικών SSL μέσω LetsEncrypt όταν επιλύεται το DNS
- Υποστήριξη subdomains για δίκτυα που λειτουργούν σε λειτουργία subdomain
- Αφαίρεση domain όταν διαγράφονται οι αντιστοιχίσεις
- Δοκιμή σύνδεσης για επαλήθευση των διαπιστευτηρίων API

## Απαιτήσεις

### Απαιτήσεις συστήματος
- Εγκατεστημένο και προσβάσιμο Enhance Control Panel
- Εγκατάσταση WordPress Multisite που φιλοξενείται ή είναι συνδεδεμένη σε διακομιστή Enhance
- Web server Apache (το Enhance υποστηρίζει προς το παρόν ρυθμίσεις Apache· το LiteSpeed Enterprise είναι διαθέσιμο σε μειωμένο κόστος)

### Πρόσβαση στο API
Πρέπει να έχετε πρόσβαση διαχειριστή στο Enhance Control Panel για να δημιουργήσετε tokens API.

## Απόκτηση των διαπιστευτηρίων API

### 1. Δημιουργία ενός API Token

1. Συνδεθείτε στο Enhance Control Panel ως διαχειριστής
2. Κάντε κλικ στις **Settings** στο μενού πλοήγησης
3. Μεταβείτε στα **Access Tokens**
4. Κάντε κλικ στο **Create Token**
5. Δώστε στο token ένα περιγραφικό όνομα (π.χ. "Ultimate Multisite Integration")
6. Αναθέστε τον ρόλο **System Administrator**
7. Για την ημερομηνία λήξης:
   - Αφήστε το κενό αν θέλετε το token να μη λήγει ποτέ
   - Ή ορίστε μια συγκεκριμένη ημερομηνία λήξης για λόγους ασφαλείας
8. Κάντε κλικ στο **Create**

Μετά τη δημιουργία, θα εμφανιστούν το **Access Token** και το **Organization ID**. **Αποθηκεύστε τα αμέσως** καθώς το token θα εμφανιστεί μόνο μία φορά.

### 2. Λήψη του Organization ID

Το Organization ID εμφανίζεται στη σελίδα Access Tokens σε ένα μπλε πλαίσιο πληροφοριών με την ένδειξη "Org ID: {your_id}".

Το Organization ID είναι σε μορφή UUID όπως: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Μπορείτε επίσης να βρείτε το Organization ID ενός πελάτη με τα εξής βήματα:
1. Μεταβείτε στη σελίδα **Customers**
2. Κάντε κλικ στο **Manage customer** για τον σχετικό πελάτη
3. Δείτε τη διεύθυνση URL - το Organization ID είναι οι αλφαριθμητικοί χαρακτήρες μετά το `/customers/`

### 3. Λήψη του Server ID

Για να βρείτε το Server ID (απαραίτητο για λειτουργίες domain):

1. Στο Enhance Control Panel, μεταβείτε στους **Servers**
2. Κάντε κλικ στον διακομιστή όπου εκτελείται η εγκατάσταση WordPress
3. Το Server ID (σε μορφή UUID) θα είναι ορατό στη διεύθυνση URL ή στις λεπτομέρειες του διακομιστή
4. Εναλλακτικά, μπορείτε να χρησιμοποιήσετε το API για να δείτε τη λίστα των διακομιστών:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Το server ID ακολουθεί τη μορφή UUID: `00000000-0000-0000-0000-000000000000`

### 4. Λήψη της διεύθυνσης URL του API

Η διεύθυνση URL του API είναι η διεύθυνση του Enhance Control Panel με την προσθήκη `/api/`:

```
https://your-enhance-panel.com/api/
```

**Σημαντικό:** Η διαδρομή `/api/` είναι απαραίτητη. Συνηθισμένα λάθη περιλαμβάνουν:
- Χρήση μόνο του domain χωρίς `/api/`
- Χρήση HTTP αντί για HTTPS (το HTTPS είναι υποχρεωτικό για λόγους ασφαλείας)

## Ρύθμιση

### Απαιτούμενες σταθερές

Προσθέστε τις ακόλουθες σταθερές στο αρχείο `wp-config.php`:

```php
// Ενσωμάτωση Enhance Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Ρύθμιση μέσω του Οδηγού ενσωμάτωσης

1. Στον πίνακα διαχείρισης του WordPress, μεταβείτε στο **Ultimate Multisite** > **Settings**
2. Πλοηγηθείτε στην καρτέλα **Integrations**
3. Βρείτε το **Enhance Control Panel Integration** και κάντε κλικ στο **Configuration**
4. Ο οδηγός θα σας καθοδηγήσει στη ρύθμιση:
   - **Βήμα 1:** Εισαγωγή και επισκόπηση χαρακτηριστικών
   - **Βήμα 2:** Εισαγωγή των διαπιστευτηρίων API (Token, API URL, Server ID)
   - **Βήμα 3:** Δοκιμή της σύνδεσης
   - **Βήμα 4:** Επισκόπηση και ενεργοποίηση

Μπορείτε να επιλέξετε να:
- Αφήσετε τον οδηγό να εισάγει τις σταθερές στο αρχείο `wp-config.php` αυτόματα
- Αντιγράψετε τους ορισμούς των σταθερών και να τους προσθέσετε χειροκίνητα

## Πρόσθετη ρύθμιση του WordPress

Με βάση τα σχόλια της κοινότητας ([Συζήτηση #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), μπορεί να χρειαστεί να ρυθμίσετε αυτές τις πρόσθετες επιλογές:

### Ρύθμιση .htaccess

Αν αντιμετωπίζετε προβλήματα με την αντιστοίχιση domains:
1. Διαγράψτε το αρχικό αρχείο `.htaccess` του Enhance
2. Αντικαταστήστε το με το τυπικό αρχείο `.htaccess` του WordPress Multisite

### Σταθερές Cookie

Προσθέστε αυτές τις σταθερές στο `wp-config.php` για να εξασφαλίσετε τη σωστή διαχείριση των cookies σε αντιστοιχισμένα domains:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Πώς λειτουργεί

### Όταν αντιστοιχίζεται ένα Domain

1. Ένας χρήστης αντιστοιχίζει ένα προσαρμοσμένο domain στο Ultimate Multisite (ή δημιουργείται ένας νέος ιστότοπος σε λειτουργία subdomain)
2. Η ενσωμάτωση στέλνει ένα αίτημα POST στο API του Enhance: `/servers/{server_id}/domains`
3. Το Enhance προσθέτει το domain στη ρύθμιση του διακομιστή σας
4. Όταν το DNS επιλύεται στον διακομιστή σας, το Enhance εκδίδει αυτόματα ένα πιστοποιητικό SSL μέσω LetsEncrypt
5. Το domain γίνεται ενεργό με HTTPS

### Όταν αφαιρείται ένα Domain

1. Μια αντιστοίχιση domain διαγράφεται στο Ultimate Multisite
2. Η ενσωμάτωση ρωτά το Enhance για να βρει το ID του domain
3. Αποστέλλεται ένα αίτημα DELETE στο: `/servers/{server_id}/domains/{domain_id}`
4. Το Enhance αφαιρεί το domain από τη ρύθμιση του διακομιστή σας

### Έλεγχος DNS και SSL

Το Ultimate Multisite περιλαμβάνει ενσωματωμένο έλεγχο DNS και SSL:
- Μπορείτε να ρυθμίσετε το διάστημα ελέγχου στις **Domain Mapping Settings** (προεπιλογή: 300 δευτερόλεπτα/5 λεπτά)
- Το σύστημα θα επαληθεύσει τη διάδοση του DNS πριν σημειώσει ένα domain ως ενεργό
- Η εγκυρότητα του πιστοποιητικού SSL ελέγχεται αυτόματα
- Το Enhance χειρίζεται την έκδοση SSL αυτόματα, επομένως δεν απαιτείται χειροκίνητη ρύθμιση SSL

## Επαλήθευση ρύθμισης

### Δοκιμή της σύνδεσης

1. Στον Οδηγό ενσωμάτωσης, χρησιμοποιήστε το βήμα **Test Connection**
2. Το plugin θα επιχειρήσει να εμφανίσει τη λίστα των domains στον διακομιστή σας
3. Ένα μήνυμα επιτυχίας επιβεβαιώνει ότι:
   - Τα διαπιστευτήρια API είναι σωστά
   - Η διεύθυνση URL του API είναι προσβάσιμη
   - Το Server ID είναι έγκυρο
   - Τα δικαιώματα έχουν ρυθμιστεί σωστά

### Μετά την αντιστοίχιση ενός Domain

1. Αντιστοιχίστε ένα δοκιμαστικό domain στο Ultimate Multisite
2. Ελέγξτε τα αρχεία καταγραφής του Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Επαληθεύστε στο Enhance Control Panel ότι το domain προστέθηκε:
   - Μεταβείτε στο **Servers** > **Your Server** > **Domains**
   - Το νέο domain θα πρέπει να εμφανίζεται στη λίστα
4. Μόλις διαδοθεί το DNS, επαληθεύστε ότι το SSL εκδόθηκε αυτόματα

## Αντιμετώπιση προβλημάτων

### Προβλήματα σύνδεσης API

**Σφάλμα: "Failed to connect to Enhance API"**
- Βεβαιωθείτε ότι το `WU_ENHANCE_API_URL` περιλαμβάνει το `/api/` στο τέλος
- Βεβαιωθείτε ότι χρησιμοποιείτε HTTPS, όχι HTTP
- Ελέγξτε ότι το Enhance panel είναι προσβάσιμο από τον διακομιστή WordPress
- Επιβεβαιώστε ότι δεν υπάρχουν κανόνες firewall που μπλοκάρουν τη σύνδεση

**Σφάλμα: "Enhance API Token not found"**
- Βεβαιωθείτε ότι το `WU_ENHANCE_API_TOKEN` έχει οριστεί στο `wp-config.php`
- Επαληθεύστε ότι το token δεν έχει διαγραφεί ή λήξει στο Enhance
- Ελέγξτε για τυπογραφικά λάθη στην τιμή του token

**Σφάλμα: "Server ID is not configured"**
- Επαληθεύστε ότι το `WU_ENHANCE_SERVER_ID` έχει οριστεί στο `wp-config.php`
- Βεβαιωθείτε ότι το Server ID είναι σε έγκυρη μορφή UUID
- Επιβεβαιώστε ότι ο διακομιστής υπάρχει στο Enhance panel σας

### Το Domain δεν προστέθηκε

**Ελέγξτε τα αρχεία καταγραφής:**
1. Μεταβείτε στο **Ultimate Multisite** > **Logs**
2. Φιλτράρετε με **integration-enhance**
3. Αναζητήστε μηνύματα σφάλματος που υποδεικνύουν το πρόβλημα

**Συνηθισμένες αιτίες:**
- Μη έγκυρη μορφή ονόματος domain
- Το domain υπάρχει ήδη στο Enhance
- Ανεπαρκή δικαιώματα API (βεβαιωθείτε ότι το token έχει ρόλο System Administrator)
- Το Server ID δεν αντιστοιχεί στον πραγματικό διακομιστή στο Enhance

### Προβλήματα με πιστοποιητικό SSL

**Το SSL δεν εκδίδεται:**
- Επαληθεύστε ότι το DNS δείχνει στη διεύθυνση IP του διακομιστή σας
- Ελέγξτε ότι το domain επιλύεται σωστά: `nslookup yourdomain.com`
- Το Enhance απαιτεί το DNS να επιλύεται πριν μπορέσει να εκδώσει SSL
- Η έκδοση SSL συνήθως διαρκεί 5-10 λεπτά μετά τη διάδοση του DNS
- Ελέγξτε τα αρχεία καταγραφής του Enhance Control Panel για σφάλματα σχετικά με SSL

**Χειροκίνητη αντιμετώπιση προβλημάτων SSL στο Enhance:**
1. Μεταβείτε στο **Servers** > **Your Server** > **Domains**
2. Βρείτε το domain σας και ελέγξτε την κατάσταση SSL
3. Μπορείτε να ενεργοποιήσετε χειροκίνητα την έκδοση SSL αν χρειάζεται

### Διάστημα ελέγχου DNS

Αν τα domains ή τα πιστοποιητικά SSL αργούν να ενεργοποιηθούν:
1. Μεταβείτε στο **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Βρείτε τη ρύθμιση **DNS Check Interval**
3. Μειώστε από την προεπιλογή των 300 δευτερολέπτων σε χαμηλότερη τιμή (ελάχιστη: 10 δευτερόλεπτα)
4. **Σημείωση:** Χαμηλότερα διαστήματα σημαίνουν πιο συχνούς ελέγχους αλλά μεγαλύτερο φόρτο διακομιστή

### Σφάλματα ταυτοποίησης

**Σφάλματα HTTP 401/403:**
- Δημιουργήστε ξανά το API token στο Enhance
- Επαληθεύστε ότι το token έχει ρόλο **System Administrator**
- Ελέγξτε ότι το token δεν έχει λήξει
- Βεβαιωθείτε ότι χρησιμοποιείτε το σωστό Organization ID (αν και συνήθως δεν απαιτείται στο URL)

### Ανάλυση αρχείων καταγραφής

Ενεργοποιήστε λεπτομερή καταγραφή:
```php
// Προσθέστε στο wp-config.php για ενισχυμένο debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Στη συνέχεια ελέγξτε τα αρχεία καταγραφής στα εξής:
- Αρχεία καταγραφής Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Αρχείο καταγραφής debug του WordPress: `wp-content/debug.log`
- Αρχεία καταγραφής Enhance panel: Διαθέσιμα στη διεπαφή διαχείρισης του Enhance

## Αναφορά API

### Ταυτοποίηση
Όλα τα αιτήματα API χρησιμοποιούν ταυτοποίηση με Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Συνηθισμένα Endpoints που χρησιμοποιούνται

**Λίστα διακομιστών:**
```
GET /servers
```

**Λίστα Domains σε διακομιστή:**
```
GET /servers/{server_id}/domains
```

**Προσθήκη Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Διαγραφή Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Πλήρης τεκμηρίωση API
Ολοκληρωμένη τεκμηρίωση API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Βέλτιστες πρακτικές

### Ασφάλεια
- **Μην κάνετε ποτέ commit τα API tokens σε version control**
- Αποθηκεύστε τα tokens στο `wp-config.php` που θα πρέπει να εξαιρείται από το Git
- Χρησιμοποιήστε tokens με τα κατάλληλα δικαιώματα (System Administrator για πλήρη ενσωμάτωση)
- Ορίστε ημερομηνίες λήξης tokens για περιβάλλοντα παραγωγής
- Αλλάζετε τα tokens περιοδικά

### Απόδοση
- Χρησιμοποιήστε το προεπιλεγμένο διάστημα ελέγχου DNS (300 δευτερόλεπτα) για να αποφύγετε υπερβολικές κλήσεις API
- Παρακολουθήστε τους πόρους του διακομιστή Enhance όταν εκτελείτε λειτουργίες domains μεγάλης κλίμακας
- Σκεφτείτε να κατανείμετε χρονικά τις προσθήκες domains αν αντιστοιχίζετε πολλά domains ταυτόχρονα

### Παρακολούθηση
- Ελέγχετε τακτικά τα αρχεία καταγραφής του Ultimate Multisite για σφάλματα ενσωμάτωσης
- Ρυθμίστε παρακολούθηση για αποτυχημένες προσθήκες domains
- Επαληθεύστε ότι τα πιστοποιητικά SSL εκδίδονται σωστά
- Παρακολουθήστε τη χωρητικότητα του διακομιστή Enhance και τα όρια domains

## Πρόσθετοι πόροι

- **Επίσημη τεκμηρίωση Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Τεκμηρίωση API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Φόρουμ κοινότητας Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Συζήτηση GitHub:** [Issue #265 - Συμβουλές ενσωμάτωσης Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Οδηγός αντιστοίχισης Domain του Ultimate Multisite:** Δείτε τη σελίδα wiki "How to Configure Domain Mapping v2"

## Υποστήριξη

Αν αντιμετωπίσετε προβλήματα:
1. Ελέγξτε την ενότητα Αντιμετώπιση προβλημάτων παραπάνω
2. Εξετάστε τα αρχεία καταγραφής του Ultimate Multisite
3. Συμβουλευτείτε τις [Συζητήσεις στο GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Επικοινωνήστε με την υποστήριξη του Enhance για ζητήματα σχετικά με το panel
5. Δημιουργήστε μια νέα συζήτηση με λεπτομερή αρχεία καταγραφής σφαλμάτων για βοήθεια από την κοινότητα

## Σημειώσεις

- Αυτή η ενσωμάτωση διαχειρίζεται μόνο domain aliases· το Enhance διαχειρίζεται αυτόματα το SSL
- Η ενσωμάτωση υποστηρίζει τόσο αντιστοιχίσεις προσαρμοσμένων domains όσο και ιστότοπους βασισμένους σε subdomains
- Η αυτόματη δημιουργία www subdomain μπορεί να ρυθμιστεί στις ρυθμίσεις Domain Mapping
- Το Enhance υποστηρίζει προς το παρόν ρυθμίσεις Apache (διαθέσιμο το LiteSpeed Enterprise)
- Η αφαίρεση domain από το Ultimate Multisite θα αφαιρέσει το domain από το Enhance αλλά μπορεί να μη διαγράψει άμεσα τα συσχετισμένα πιστοποιητικά SSL
