---
title: Ανάπτυξη προσαρμοσμένης πύλης
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Ανάπτυξη προσαρμοσμένου Gateway

Μπορείτε να δημιουργήσετε προσαρμοσμένα gateway πληρωμών επεκτείνοντας την κλάση `Base_Gateway`.

## Κλάση Gateway {#gateway-class}

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## Καταχώριση του Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Βασικές μέθοδοι {#key-methods}

| Μέθοδος | Σκοπός |
|--------|---------|
| `process_single_payment()` | Χειρισμός εφάπαξ πληρωμών |
| `process_signup()` | Ρύθμιση επαναλαμβανόμενων συνδρομών |
| `process_refund()` | Χειρισμός αιτημάτων επιστροφής χρημάτων |
| `get_payment_methods()` | Επιστροφή αποθηκευμένων μεθόδων πληρωμής για έναν πελάτη |

## Διαπιστευτήρια ανανέωσης για επαναλαμβανόμενες memberships {#renewal-credentials-for-recurring-memberships}

Το Ultimate Multisite v2.13.0 επιτρέπει στις ενσωματώσεις gateway να αναφέρουν αν μια επαναλαμβανόμενη membership έχει επαναχρησιμοποιήσιμο διαπιστευτήριο ανανέωσης πριν αποθηκευτεί το `auto_renew`. Κάντε hook στο `wu_membership_has_renewal_credential` και επιστρέψτε:

- `true` όταν η membership έχει συνδρομή gateway, συμφωνία χρέωσης, vault token ή αντίστοιχη επαναχρησιμοποιήσιμη μέθοδο πληρωμής.
- `false` όταν το gateway γνωρίζει ότι το επαναλαμβανόμενο διαπιστευτήριο λείπει ή δεν μπορεί να χρησιμοποιηθεί.
- `null` για να εξαιρεθείτε και να διατηρήσετε αμετάβλητη την προεπιλεγμένη συμπεριφορά.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Όταν ένα gateway επιστρέφει `false`, το Ultimate Multisite αποθηκεύει τη membership με απενεργοποιημένη την αυτόματη ανανέωση και αποθηκεύει έναν δείκτη ελλείποντος διαπιστευτηρίου. Χρησιμοποιήστε το `wu_membership_renewal_credential_missing` για να ειδοποιήσετε διαχειριστές, να ξεκινήσετε μια ροή επανα-εξουσιοδότησης ή να προσθέσετε σημειώσεις υποστήριξης:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Εκκαθαρίστε τον δείκτη ελλείποντος διαπιστευτηρίου ως μέρος της επιτυχημένης ροής επανα-εξουσιοδότησης του gateway σας, αφού αποθηκευτεί ένα νέο επαναχρησιμοποιήσιμο διαπιστευτήριο.

## Συμβουλές {#tips}

- Να επιστρέφετε πάντα `WP_Error` σε περίπτωση αποτυχίας, ώστε το Ultimate Multisite να μπορεί να χειριστεί την εμφάνιση σφαλμάτων
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Χρησιμοποιήστε το `wu_log_add()` για καταγραφή ειδική για το gateway

## Δυνατότητες παρόχου AI connector {#ai-connector-provider-capabilities}

Οι προσαρμοσμένες ενσωματώσεις που καλούν λειτουργίες που υποστηρίζονται από AI connector θα πρέπει να ευθυγραμμίζονται με το υποστηριζόμενο σύνολο παρόχων OAuth που εισήχθη με το AI Provider for Anthropic Max v1.3.0:

| Πάροχος | Σημειώσεις δυνατοτήτων |
|---|---|
| **Anthropic Max** | Υποστηρίζει την υπάρχουσα ροή συγκέντρωσης λογαριασμών OAuth. Διατηρήστε τα payloads χρήσης εργαλείων του Anthropic, συμπεριλαμβανομένων κενών πινάκων εργαλείων και υπογραφών σκέψης μετ’ επιστροφής, όταν διαμεσολαβείτε αιτήματα connector μέσω proxy. |
| **OpenAI ChatGPT/Codex** | Υποστηρίζει τη ροή συγκέντρωσης OAuth και την πλήρη συμπεριφορά υποστήριξης εργαλείων για λειτουργίες που υποστηρίζονται από connector. Περάστε τους ορισμούς εργαλείων και τα αποτελέσματα κλήσεων εργαλείων χωρίς να αφαιρείτε μεταδεδομένα εργαλείων ειδικά για το Codex. |
| **Google AI Pro** | Υποστηρίζει τη ροή συγκέντρωσης OAuth και ενσωμάτωση παρόχου που υποστηρίζεται από SDK. Ανανεώστε τους λογαριασμούς παρόχου μετά την ολοκλήρωση του OAuth πριν δρομολογήσετε αιτήματα. |

Η ενσωμάτωση και οι διαδρομές ρύθμισης Cursor Pro έχουν αφαιρεθεί. Μην καταχωρίζετε το Cursor Pro ως επιλέξιμο πάροχο και μην παρουσιάζετε οδηγίες OAuth ειδικές για το Cursor σε προσαρμοσμένα UI connector.

Για περιβάλλοντα sandbox ή headless, εκθέστε τη χειροκίνητη εναλλακτική διαδρομή OAuth, ώστε οι διαχειριστές να μπορούν να επικολλήσουν τα επιστρεφόμενα δεδομένα εξουσιοδότησης και να ολοκληρώσουν τη σύνδεση λογαριασμού χωρίς να βασίζονται σε αυτόματη ανακατεύθυνση προγράμματος περιήγησης.
