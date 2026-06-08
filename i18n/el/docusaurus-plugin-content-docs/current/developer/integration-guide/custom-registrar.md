---
title: Ανάπτυξη Προσαρμοσμένης Ενσωμάτωσης Εγγραφέα
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Δημιουργία Ενσωμάτωσης Προσαρμοσμένου Registrar

Το Addon Domain Seller χρησιμοποιεί ένα μοτίβο που ονομάζεται **Integration Registry**. Κάθε registrar είναι μια κλάση PHP που υλοποιεί το `Domain_Selling_Capability` και καταγράφεται μέσω του action hook `wu_domain_seller_register_capabilities`.

Αυτό το εγχειρίδιο δείχνει πώς να συνδέσετε έναν προσαρμοσμένο registrar.

## Η διεπαφή (The interface)

Η κλάση σας πρέπει να υλοποιεί το `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` και να κληρονομεί από το `WP_Ultimo\Integrations\Base_Capability_Module`.

Απαιτούμενες μεθόδους:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Απαιτούμενες μεθόδους ταυτότητας (από Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // πάντα 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Βασικές απαιτούμενες μεθόδους (από Domain_Selling_Capability) ---

    /** Συγχρονίζει όλες τις διαθέσιμες TLDs και τις τιμές λιανικής πώλησης. */
    public function sync_tlds(): array { ... }

    /** Ελέγχει τη διαθεσιμότητα του $domain_name σε διάφορες TLDs. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Λαμβάνει την τιμή λιανικής πώλησης για μια TLD για N χρόνια. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Εγγράφει ένα domain. Επιστρέφει ['success' => true, 'expiry_date' => '...'] σε επιτυχία. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Επανακυκλοφορεί ένα domain για N χρόνια. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Λαμβάνει τις πληροφορίες εγγραφής, την ημερομηνία λήξης και τα nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Δοκιμάζει τα στοιχεία σύνδεσης API και τη συνδεσιμότητα. */
    public function test_connection(): array { ... }
}
```

### Προαιρετικές μεθόδους

Υλοποιήστε αυτές τις μεθόδους για να ξεκλειδώσετε επιπλέον λειτουργίες. Το addon ανιχνεύει την υποστήριξη μέσω του `method_exists()`:

| Μέθοδος | Ξεκλειδώνει |
|---|---|
| `supports_whois_privacy(): bool` | Επιλογή ιδιωτικότητας WHOIS στις ρυθμίσεις του προϊόντος |
| `enable_whois_privacy(string $domain_name): array` | Αυτόματη ενεργοποίηση ιδιωτικότητας κατά την εγγραφή |
| `get_dns_records(string $domain_name): array` | καρτέλα προβολής DNS για τον πελάτη |
| `add_dns_record(string $domain_name, array $record_data): array` | Ο πελάτης μπορεί να προσθέσει DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Ο πελάτης μπορεί να επεξεργαστεί DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Ο πελάτης μπορεί να διαγράψει DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Διαχείριση nameservers |
| `get_epp_code(string $domain_name): array` | Μεταβίβαση domain (εξόδου) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Μεταβίβαση domain (εισόδου) |

### Συνθήκη επιστροφής τιμής

Όλες οι μεθόδους επιστρέφουν ένα array με τουλάχιστον το κλειδί `success`:

```php
// Επιτυχία
return ['success' => true, 'data' => [...]];

// Αποτυχία
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Καταχώριση της ικανότητάς σας (Registering your capability)

Καταχωρήστε την κλάση σας χρησιμοποιώντας το action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Το πρώτο όρισμα του `add_capability()` είναι το **provider ID** — ένα lowercase slug που χρησιμοποιείται για την αναγνώριση του registrar σας στις ρυθμίσεις, τη διαμόρφωση του προϊόντος και τα κανάλια καταγραφής (log). Χρησιμοποιήστε κάτι μοναδικό (π.χ., το slug της εταιρείας σας).

---

## Προσθήκη πεδίων στο Wizard των στοιχείων σύνδεσης

Για να επιτρέψετε στους διαχειριστές να εισάγουν τα στοιχεία σύνδεσης μέσω του setup wizard, καταχωρήστε την ενσωμάτωσή σας:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Τα στοιχεία σύνδεσης αποθηκεύονται ως network options χρησιμοποιώντας τα field IDs ως keys. Αποκτήστε πρόσβαση σε αυτά στην κλάση capability σας με το `wu_get_setting('my_registrar_api_key')`.

---

## Hooks για ενέργειες μετά την καταχώριση (Post-registration actions)

Χρησιμοποιήστε αυτούς τους actions για να ενεργοποιήσετε webhooks, provisioning, ειδοποιήσεις ή ενημερώσεις CRM:

```php
// Μετά την επιτυχή εγγραφή domain
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Μετά την αποτυχία εγγραφής
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Μετά την επιτυχή ανανέωση
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Ενημερώστε το billing system σας, στείλτε μια απόδειξη κ.λπ.
}, 10, 3);

// Μετά την αποτυχία ανανέωσης
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Ειδοποίηση, λογική επαναπροέκλισης κ.λπ.
}, 10, 3);

// Μετά την ολοκλήρωση της μεταβίβασης domain
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain είναι ένα αντικείμενο WP_Ultimo\Models\Domain
}, 10, 2);

// Μετά τη επαλήθευση SES DKIM (αν είναι ενεργή η ενσωμάτωση SES)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain είναι ένα αντικείμενο WP_Ultimo\Models\Domain
});
```

---

## Καταγραφή (Logging)

Γράψτε στο κανάλι καταγραφής ειδικό για τον πάροχο σας χρησιμοποιώντας το `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Τα logs εμφανίζονται κάτω από **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
