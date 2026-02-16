---
title: Ρύθμιση του PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Ρύθμιση της Πύλης Πληρωμών PayPal (v2)

_**ΣΗΜΑΝΤΙΚΗ ΣΗΜΕΙΩΣΗ: Αυτό το άρθρο αναφέρεται στην έκδοση 2.x του Ultimate Multisite.**_

Μπορείτε να ενεργοποιήσετε έως και τέσσερις μεθόδους πληρωμής στη σελίδα ρυθμίσεων πληρωμών: Stripe, Stripe Checkout, PayPal και Χειροκίνητη. Σε αυτό το άρθρο, θα δούμε πώς να ενσωματώσετε το **PayPal**.

Όπως και το Stripe, το PayPal χρησιμοποιείται ευρέως για online πληρωμές, ειδικά σε ιστότοπους WordPress. Αυτό το άρθρο θα σας καθοδηγήσει στον τρόπο χρήσης του PayPal ως διαθέσιμη μέθοδο πληρωμής στο δίκτυό σας.

Σημειώστε ότι χρειάζεστε έναν **Επαγγελματικό λογαριασμό PayPal** για να αποκτήσετε τα διαπιστευτήρια API που απαιτούνται για αυτή την ενσωμάτωση.

## Ενεργοποίηση του PayPal στο δίκτυό σας

Για να ενεργοποιήσετε το PayPal ως διαθέσιμη μέθοδο πληρωμής στο δίκτυό σας, μεταβείτε στο **Ultimate Multisite > Settings > Payments** και επιλέξτε το πλαίσιο δίπλα στο PayPal.

![Ενεργοποίηση του PayPal στις ενεργές πύλες πληρωμών](/img/config/settings-payment-gateways.png)

## Απόκτηση των διαπιστευτηρίων API του PayPal

Μόλις ενεργοποιηθεί το PayPal ως πύλη πληρωμών, θα χρειαστεί να συμπληρώσετε τα πεδία για το **Username** του PayPal API, το **Password** του PayPal API και το **Signature** του PayPal API.

Μπορείτε να τα αποκτήσετε συνδεόμενοι στον λογαριασμό σας PayPal [Live](https://www.paypal.com/home) ή [Sandbox](https://www.sandbox.paypal.com/home).

(Θυμηθείτε ότι μπορείτε να χρησιμοποιήσετε τη **λειτουργία sandbox** για να δοκιμάσετε πληρωμές και να δείτε αν η πύλη έχει ρυθμιστεί σωστά. Απλώς ενεργοποιήστε την αντίστοιχη επιλογή.)

![Πεδία διαπιστευτηρίων API του PayPal και διακόπτης λειτουργίας sandbox](/img/config/settings-payment-gateways.png)

Για να ζητήσετε διαπιστευτήρια API Signature ή Certificate για τον λογαριασμό σας PayPal:

  1. Μεταβείτε στις [Ρυθμίσεις Λογαριασμού](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Στην ενότητα **API access**, κάντε κλικ στο **Update**.  
![Ρυθμίσεις Λογαριασμού PayPal με ενότητα API access](/img/config/settings-payment-gateways.png)

  3. Στην επιλογή **NVP/SOAP API integration (Classic)**, κάντε κλικ στο **Manage API credentials**.  
![Διαχείριση διαπιστευτηρίων NVP/SOAP API integration του PayPal](/img/config/settings-payment-gateways.png)

     * Αν έχετε ήδη δημιουργήσει ένα API Signature ή Certificate, θα ανακατευθυνθείτε σε μια σελίδα όπου μπορείτε να βρείτε τα διαπιστευτήριά σας.

     * _**Σημείωση:** Αν σας ζητηθεί να επαληθεύσετε τον λογαριασμό σας PayPal, ακολουθήστε τις οδηγίες στην οθόνη._

  4. Επιλέξτε _μία_ από τις παρακάτω επιλογές και κάντε κλικ στο **Agree and Submit**.

     * **Request API Signature** – Επιλέξτε για πιστοποίηση με API Signature.

     * **Request API Certificate** – Επιλέξτε για πιστοποίηση με API Certificate.

  5. Το PayPal δημιουργεί τα διαπιστευτήρια API ως εξής:  
![Διαπιστευτήρια API που δημιουργήθηκαν από το PayPal](/img/config/settings-payment-gateways.png)

     * Τα **διαπιστευτήρια API Signature** περιλαμβάνουν ένα API Username, API Password και Signature, τα οποία δεν λήγουν. Αυτές οι τιμές είναι κρυμμένες από προεπιλογή για πρόσθετη ασφάλεια. Κάντε κλικ στο **Show/Hide** για να τις εμφανίσετε ή να τις αποκρύψετε. Όταν τελειώσετε, κάντε κλικ στο **Done**.

     * Τα **διαπιστευτήρια API Certificate** περιλαμβάνουν ένα API Username, API Password και Certificate, το οποίο λήγει αυτόματα μετά από τρία χρόνια. Κάντε κλικ στο **Download Certificate** για να αποθηκεύσετε το API Certificate στην επιφάνεια εργασίας σας.

Αυτό ήταν, η ενσωμάτωση πληρωμών PayPal ολοκληρώθηκε!

Αν έχετε οποιεσδήποτε ερωτήσεις σχετικά με τις ρυθμίσεις PayPal, μπορείτε να ανατρέξετε στο [Κέντρο Βοήθειας](https://www.paypal.com/br/smarthelp/home) του PayPal.
