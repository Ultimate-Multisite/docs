---
title: Die bou van 'n aangepaste registrator-integrasie
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Bou 'n Pasgemaakte Registrar-integrasie

Die Domain Seller addon gebruik 'n **Integration Registry**-patroon. Elke registrar is 'n PHP-klas wat `Domain_Selling_Capability` implementeer en homself registreer via die `wu_domain_seller_register_capabilities` aksie-hook.

Hierdie gids wys hoe om 'n pasgemaakte registrar aan te spak.

## Die Interface

Jou klas moet `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implementeer en `WP_Ultimo\Integrations\Base_Capability_Module` uitbrei.

Vereiste metode(s):

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Vereiste identiteitsmetodes (van Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // altyd 'domain-selling'
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

    // --- Kernvereiste metodes (van Domain_Selling_Capability) ---

    /** Haal al beskikbare TLD's en wêreldhandelprysing. */
    public function sync_tlds(): array { ... }

    /** Kontroleer beskikbaarheid van $domain_name oor $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Kry wêreldhandelprysing vir 'n TLD vir N jare. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registreer 'n domein. Gee ['success' => true, 'expiry_date' => '...'] op sukses. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Hernuik 'n domein vir N jare. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Kry registrasiestatus, vervaldatum, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API-wagsels en konektiwiteit. */
    public function test_connection(): array { ... }
}
```

### Opsionele metodes

Implementeer hierdie om bykomende funksionaliteite oop te sluit. Die addon wyk ondersteuning op via `method_exists()`:

| Metode | Maak beskikbaar |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-privaatheidsopsie in produkinstellings |
| `enable_whois_privacy(string $domain_name): array` | Maak privaatheid outomaties beskikbaar by registrasie |
| `get_dns_records(string $domain_name): array` | Klant DNS-view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Klant kan DNS-rekords byvoeg |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klant kan DNS-rekords wysig |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klant kan DNS-rekords verwyder |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserverbestuur |
| `get_epp_code(string $domain_name): array` | Domein-oordrag (uitgaande) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domein-oordrag (inkomend) |

### Terugwaarde konvensie

Alle metodes keer 'n array terug met ten minste 'n `success`-sleutel:

```php
// Sukses
return ['success' => true, 'data' => [...]];

// Mislukking
return ['success' => false, 'message' => 'Menslik-leesbare fout'];
```

---

## Registreer jou funksionaliteit

Registreer jou klas met die `wu_domain_seller_register_capabilities` aksie:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Die eerste argument vir `add_capability()` is die **provider ID** — 'n klein letterslug wat gebruik word om jou registrar in instellings, produkkonfigurasie en logkanale te identifiseer. Gebruik iets unieks (bv. jou maatskappy-slug).

---

## Byvoeg van wagselveld(e) aan die wizard

Om administrateurs toe te laat om wagsel deur die opstel-wizard in te voer, registreer jou integrasie:

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

Wagsels word gestoor as netwerkopsies met die veld-ID's as sleutels. Haal dit in jou funksionaliteitsklas met `wu_get_setting('my_registrar_api_key')`.

---

## Hooks vir na-registrasie aksies

Gebruik hierdie aksies om webhooks, voorsiening, kennisgewings of CRM-opdaterings te ontlok:

```php
// Ná suksesvolle domeinregistrasie
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: rauwe registrar-antwoord
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Ná registrasiefaal
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domeinregistrasie misluk: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Ná suksesvolle hernuwing
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Werk jou faktuurstelsel by, stuur 'n kwitansie, ens.
}, 10, 3);

// Ná hernuwingsmislukking
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Waarskuwing, herprobeer-logika, ens.
}, 10, 3);

// Ná domein-oordrag voltooiing
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is 'n WP_Ultimo\Models\Domain'-objek
}, 10, 2);

// Ná SES DKIM-verifikasie (indien SES-integrasie aktief is)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is 'n WP_Ultimo\Models\Domain'-objek
});
```

---

## Logboekregistrasie (Logging)

Skryf na jou verskaffer-spesifieke logkanaal met `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Suksesvol geregistreer {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "Registrasie misluk: {$error}", 'error');
```

Logboeke verskyn onder **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
