---
title: Махсус регистратор интеграциясен төзү
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Махсус регистратор интеграциясен төзү

Domain Seller addon **Integration Registry** үрнәген куллана. Һәр регистратор — `Domain_Selling_Capability` гамәлгә ашыручы һәм үзен `wu_domain_seller_register_capabilities` action hook аша теркәүче PHP классы.

Бу кулланма махсус регистраторны ничек тоташтырырга икәнен күрсәтә.

## Интерфейс {#the-interface}

Сезнең класс `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` гамәлгә ашырырга һәм `WP_Ultimo\Integrations\Base_Capability_Module` киңәйтергә тиеш.

Мәҗбүри методлар:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Required identity methods (from Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // always 'domain-selling'
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

    // --- Core required methods (from Domain_Selling_Capability) ---

    /** Pull all available TLDs and wholesale pricing. */
    public function sync_tlds(): array { ... }

    /** Check availability of $domain_name across $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Get wholesale price for a TLD for N years. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Register a domain. Returns ['success' => true, 'expiry_date' => '...'] on success. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renew a domain for N years. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Get registration status, expiry date, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API credentials and connectivity. */
    public function test_connection(): array { ... }
}
```

### Ихтыярый методлар {#optional-methods}

Өстәмә мөмкинлекләрне ачу өчен боларны гамәлгә ашырыгыз. addon ярдәм булуын `method_exists()` аша ачыклый:

| Метод | Ача |
|---|---|
| `supports_whois_privacy(): bool` | продукт көйләүләрендә WHOIS хосусыйлык опциясе |
| `enable_whois_privacy(string $domain_name): array` | теркәү вакытында хосусыйлыкны автоматик рәвештә куша |
| `get_dns_records(string $domain_name): array` | клиент DNS карау табы |
| `add_dns_record(string $domain_name, array $record_data): array` | клиент DNS язмаларын өсти ала |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | клиент DNS язмаларын үзгәртә ала |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | клиент DNS язмаларын бетерә ала |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver идарәсе |
| `get_epp_code(string $domain_name): array` | домен күчерү (чыгучы) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | домен күчерү (керүче) |

### Кайтару кыйммәте килешүе {#return-value-convention}

Барлык методлар кимендә `success` ачкычы булган массив кайтара:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Сезнең мөмкинлекне теркәү {#registering-your-capability}

Классыгызны `wu_domain_seller_register_capabilities` action кулланып теркәгез:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` өчен беренче аргумент — **провайдер ID** — көйләүләрдә, продукт конфигурациясендә һәм журнал каналларында регистраторыгызны тану өчен кулланыла торган кечкенә хәрефле slug. Үзенчәлекле нәрсә кулланыгыз (мәсәлән, компаниягез slug-ы).

---

## Осталыкка credential кырлары өстәү {#adding-credential-fields-to-the-wizard}

Админнарга setup wizard аша credential кертергә мөмкинлек бирү өчен, интеграциягезне теркәгез:

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

Credentials кыр ID-ларын ачкычлар итеп кулланып, челтәр опцияләре буларак саклана. Аларны capability классыгызда `wu_get_setting('my_registrar_api_key')` белән алыгыз.

---

## Теркәүдән соңгы гамәлләр өчен hook-лар {#hooks-for-post-registration-actions}

Webhook-ларны, provisioning-ны, белдерүләрне яки CRM яңартуларын җибәрү өчен бу action-нарны кулланыгыз:

```php
// After successful domain registration
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// After registration failure
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// After successful renewal
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update your billing system, send a receipt, etc.
}, 10, 3);

// After renewal failure
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// After domain transfer completes
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is a WP_Ultimo\Models\Domain object
}, 10, 2);

// After SES DKIM verification (if SES integration is active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is a WP_Ultimo\Models\Domain object
});
```

---

## Журналлау {#logging}

Провайдерыгызга хас журнал каналына `wu_log_add()` кулланып языгыз:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Журналлар **Челтәр администраторы › Ultimate Multisite › Журналлар › domain-seller-my-registrar** астында күренә.
