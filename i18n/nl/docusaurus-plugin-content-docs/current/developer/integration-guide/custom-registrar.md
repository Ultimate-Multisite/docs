---
title: Een aangepaste registrar-integratie bouwen
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Een Aangepaste Registrar Integratie Bouwen

De Domain Seller addon gebruikt een patroon genaamd **Integration Registry**. Elke registrar is een PHP-klasse die `Domain_Selling_Capability` implementeert en zichzelf registreert via de `wu_domain_seller_register_capabilities` action hook.

Deze handleiding laat zien hoe u een aangepaste registrar kunt aansluiten.

## Het Interface {#the-interface}

Uw klasse moet `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implementeren en `WP_Ultimo\Integrations\Base_Capability_Module` uitbreiden.

Vereiste methoden:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Vereiste identiteitsmethoden (van Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // altijd 'domain-selling'
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

    // --- Kernvereiste methoden (van Domain_Selling_Capability) ---

    /** Haalt alle beschikbare TLD's en groothandelprijzen op. */
    public function sync_tlds(): array { ... }

    /** Controleert de beschikbaarheid van $domain_name over $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Haalt de groothandelprijs op voor een TLD voor N jaar. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registreert een domein. Retourneert ['success' => true, 'expiry_date' => '...'] bij succes. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Vernieuwt een domein voor N jaar. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Haalt domeininformatie op, inclusief status, vervaldatum en nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test de API-gegevens en connectiviteit. */
    public function test_connection(): array { ... }
}
```

### Optionele methoden {#optional-methods}

Implementeer deze om extra functionaliteiten vrij te schakelen. De addon detecteert ondersteuning via `method_exists()`:

| Methode | Schakelt vrij |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privacy optie in productinstellingen |
| `enable_whois_privacy(string $domain_name): array` | Privacy automatisch inschakelen bij registratie |
| `get_dns_records(string $domain_name): array` | Klant DNS-overzicht tabblad |
| `add_dns_record(string $domain_name, array $record_data): array` | Klant kan DNS-records toevoegen |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klant kan DNS-records bewerken |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klant kan DNS-records verwijderen |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserverbeheer |
| `get_epp_code(string $domain_name): array` | Domeinoverdracht (uitgaand) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domeinoverdracht (inkomend) |

### Conventie voor retourwaarde {#return-value-convention}

Alle methoden retourneren een array met minimaal een `success`-sleutel:

```php
// Succes
return ['success' => true, 'data' => [...]];

// Falen
return ['success' => false, 'message' => 'Menselijk leesbare fout'];
```

---

## Uw Capability Registreren {#registering-your-capability}

Registreer uw klasse met de `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Het eerste argument van `add_capability()` is de **provider ID** — een kleine slug die wordt gebruikt om uw registrar te identificeren in instellingen, productconfiguratie en logkanalen. Gebruik iets unieks (bijvoorbeeld de slug van uw bedrijf).

---

## Credential Velden Toevoegen aan de Wizard {#adding-credential-fields-to-the-wizard}

Om beheerders in staat te stellen credentials in te voeren via de setup wizard, registreert u uw integratie:

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

Credentials worden opgeslagen als network options met de field IDs als sleutels. Haal ze op in uw capability class met `wu_get_setting('my_registrar_api_key')`.

---

## Hooks voor Post-Registratie Acties {#hooks-for-post-registration-actions}

Gebruik deze actions om webhooks, provisioning, notificaties of CRM-updates te triggeren:

```php
// Na succesvolle domeinregistratie
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: ruwe registrar respons
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Na registratiefalen
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domeinregistratie mislukt: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Na succesvolle verlenging
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update uw facturatiesysteem, stuur een ontvangstbewijs, enz.
}, 10, 3);

// Na verlengingsfalen
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Waarschuw, retry-logica, enz.
}, 10, 3);

// Na voltooiing van domeinoverdracht
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is een WP_Ultimo\Models\Domain object
}, 10, 2);

// Na SES DKIM verificatie (indien SES integratie actief is)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is een WP_Ultimo\Models\Domain object
});
```

---

## Logging {#logging}

Schrijf naar uw provider-specifieke logkanaal met `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} succesvol geregistreerd", 'info');
wu_log_add('domain-seller-my-registrar', "Registratie mislukt: {$error}", 'error');
```

Logs verschijnen onder **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
