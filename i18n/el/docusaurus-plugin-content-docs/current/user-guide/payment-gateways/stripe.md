---
title: Ρύθμιση του Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ρύθμιση της Πύλης Πληρωμών Stripe (v2)

_**ΣΗΜΑΝΤΙΚΗ ΣΗΜΕΙΩΣΗ: Αυτό το άρθρο αφορά την έκδοση 2.x του Ultimate Multisite.**_

Μπορείτε να ενεργοποιήσετε έως τέσσερις τρόπους πληρωμής στη σελίδα ρυθμίσεων πληρωμών: Stripe, Stripe Checkout, PayPal και Χειροκίνητη πληρωμή. Σε αυτό το άρθρο, θα δούμε πώς να ενσωματώσετε το **Stripe**.

## Ενεργοποίηση του Stripe

Για να ενεργοποιήσετε το Stripe ως διαθέσιμη πύλη πληρωμών στο δίκτυό σας, μεταβείτε στο **Ultimate Multisite > Settings > Payments** και ενεργοποιήστε το διακόπτη δίπλα στο **Stripe** ή **Stripe Checkout** στην ενότητα Active Payment Gateways.

![Ενεργοποίηση του Stripe στις διαθέσιμες πύλες πληρωμών](/img/config/settings-payment-gateways.png)

### Stripe έναντι Stripe Checkout:

**Stripe:** Αυτή η μέθοδος εμφανίζει ένα πεδίο για την εισαγωγή του αριθμού πιστωτικής κάρτας κατά τη διάρκεια του checkout.

![Ενσωματωμένο πεδίο πιστωτικής κάρτας Stripe κατά το checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Αυτή η μέθοδος ανακατευθύνει τον πελάτη σε μια σελίδα Stripe Checkout κατά τη διάρκεια του checkout.

![Σελίδα ανακατεύθυνσης Stripe Checkout κατά το checkout](/img/config/settings-payment-gateways.png)

Λήψη των κλειδιών API του Stripe

Αφού ενεργοποιηθεί το Stripe ως πύλη πληρωμών, θα χρειαστεί να συμπληρώσετε τα πεδία **Stripe Publishable Key** και **Stripe Secret Key**. Μπορείτε να τα βρείτε συνδεόμενοι στον λογαριασμό σας στο Stripe.

_**Σημείωση:** μπορείτε να ενεργοποιήσετε τη **Sandbox mode** για να ελέγξετε αν η μέθοδος πληρωμής λειτουργεί σωστά._

![Πεδία κλειδιών API του Stripe και διακόπτης sandbox mode](/img/config/settings-payment-gateways.png)

Στον πίνακα ελέγχου του Stripe, κάντε κλικ στο **Developers** στην πάνω δεξιά γωνία και μετά στο **API Keys** στο αριστερό μενού.

![Ενότητα Developers του πίνακα ελέγχου Stripe με τα API Keys](/img/config/settings-payment-gateways.png)

Μπορείτε είτε να χρησιμοποιήσετε **Test Data** (για να ελέγξετε αν η ενσωμάτωση λειτουργεί στον παραγωγικό σας ιστότοπο) είτε όχι. Για να το αλλάξετε αυτό, ενεργοποιήστε ή απενεργοποιήστε τον διακόπτη **Viewing test data**.

![Διακόπτης Viewing test data του Stripe](/img/config/settings-payment-gateways.png)

Αντιγράψτε την τιμή από το **Publishable key** και το **Secret key**, από τη στήλη **Token** και επικολλήστε την στα πεδία του Stripe Gateway στο Ultimate Multisite. Στη συνέχεια κάντε κλικ στο **Save Changes**.

![Τιμές publishable και secret key του Stripe](/img/config/settings-payment-gateways.png)

![Επικόλληση κλειδιών Stripe στις ρυθμίσεις του Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Ρύθμιση του Stripe Webhook

Το Stripe αποστέλλει webhook events που ειδοποιούν το Ultimate Multisite κάθε φορά που συμβαίνει κάτι στον **λογαριασμό σας στο Stripe**.

Κάντε κλικ στο **Developers** και μετά επιλέξτε το στοιχείο **Webhooks** στο αριστερό μενού. Στη συνέχεια, στη δεξιά πλευρά κάντε κλικ στο **Add endpoint**.

![Σελίδα Webhooks του Stripe με το κουμπί Add endpoint](/img/config/settings-payment-gateways.png)

Θα χρειαστείτε ένα **Endpoint URL**. Το Ultimate Multisite δημιουργεί αυτόματα το endpoint URL, το οποίο μπορείτε να βρείτε ακριβώς κάτω από το πεδίο **Webhook Listener URL** στην ενότητα **Ultimate Multisite Stripe Gateway**.

![Πεδίο Webhook Listener URL στις ρυθμίσεις της πύλης Stripe](/img/config/settings-payment-gateways.png)

**Αντιγράψτε** το endpoint URL και **επικολλήστε** το στο πεδίο **Endpoint URL** του Stripe.

![Επικόλληση endpoint URL στη ρύθμιση webhook του Stripe](/img/config/settings-payment-gateways.png)

Στη συνέχεια πρέπει να επιλέξετε ένα **Event**. Σε αυτή την επιλογή, απλά χρειάζεται να τσεκάρετε το πλαίσιο **Select all events** και να κάνετε κλικ στο **Add events**. Μετά από αυτό, κάντε κλικ στο **Add Endpoint** για να αποθηκεύσετε τις αλλαγές.

![Επιλογή όλων των events και προσθήκη του endpoint στο Stripe](/img/config/settings-payment-gateways.png)

Αυτό ήταν, η ενσωμάτωση πληρωμών μέσω Stripe ολοκληρώθηκε!
