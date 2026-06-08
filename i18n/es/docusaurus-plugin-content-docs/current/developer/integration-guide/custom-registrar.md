---
title: Creando una Integración de Registrador Personalizada
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Creando una Integración de Registrador Personalizada

El addon Domain Seller utiliza un patrón llamado **Integration Registry**. Cada registrador es una clase PHP que implementa `Domain_Selling_Capability` y se registra a través del action hook `wu_domain_seller_register_capabilities`.

Esta guía muestra cómo conectar un registrador personalizado.

## La interfaz

Tu clase debe implementar `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` y extender `WP_Ultimo\Integrations\Base_Capability_Module`.

Métodos requeridos:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Métodos de identidad requeridos (de Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // siempre 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Habilita el registro de dominios a través de My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Métodos centrales requeridos (de Domain_Selling_Capability) ---

    /** Obtiene todos los TLDs disponibles y los precios mayoristas. */
    public function sync_tlds(): array { ... }

    /** Comprueba la disponibilidad de $domain_name en varios $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Obtiene el precio mayorista de un TLD por N años. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registra un dominio. Devuelve ['success' => true, 'expiry_date' => '...'] en caso de éxito. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renueva un dominio por N años. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Obtiene el estado de registro, la fecha de caducidad y los nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Prueba las credenciales de la API y la conectividad. */
    public function test_connection(): array { ... }
}
```

### Métodos opcionales

Implementa estos métodos para desbloquear funciones adicionales. El addon detecta el soporte mediante `method_exists()`:

| Método | Desbloquea |
|---|---|
| `supports_whois_privacy(): bool` | Opción de privacidad WHOIS en la configuración del producto |
| `enable_whois_privacy(string $domain_name): array` | Habilita automáticamente la privacidad en el registro |
| `get_dns_records(string $domain_name): array` | Pestaña de visualización de DNS para el cliente |
| `add_dns_record(string $domain_name, array $record_data): array` | El cliente puede añadir registros DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | El cliente puede editar registros DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | El cliente puede eliminar registros DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gestión de nameservers |
| `get_epp_code(string $domain_name): array` | Transferencia de dominio (saliente) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transferencia de dominio (entrante) |

### Convención de valor de retorno

Todos los métodos devuelven un array con al menos la clave `success`:

```php
// Éxito
return ['success' => true, 'data' => [...]];

// Fallo
return ['success' => false, 'message' => 'Error legible por humanos'];
```

---

## Registro de tu capacidad (Capability)

Registra tu clase usando el action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

El primer argumento de `add_capability()` es el **provider ID** (ID del proveedor): un slug en minúsculas que se utiliza para identificar tu registrador en la configuración, la configuración del producto y los canales de registro. Usa algo único (por ejemplo, el slug de tu empresa).

---

## Añadiendo campos de credenciales al asistente

Para permitir que los administradores ingresen credenciales a través del asistente de configuración, registra tu integración:

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

Las credenciales se almacenan como opciones de red (network options) usando los IDs de los campos como claves. Recupéralas en tu clase de capacidad con `wu_get_setting('my_registrar_api_key')`.

---

## Hooks para acciones posteriores al registro

Usa estos actions para activar webhooks, aprovisionamiento, notificaciones o actualizaciones de CRM:

```php
// Después de un registro de dominio exitoso
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: respuesta cruda del registrador
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Después de un fallo en el registro
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Fallo en el registro de dominio: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Después de una renovación exitosa
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Actualiza tu sistema de facturación, envía un recibo, etc.
}, 10, 3);

// Después de un fallo en la renovación
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alerta, lógica de reintento, etc.
}, 10, 3);

// Después de que se completa la transferencia de dominio
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain es un objeto WP_Ultimo\Models\Domain
}, 10, 2);

// Después de la verificación DKIM de SES (si la integración de SES está activa)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain es un objeto WP_Ultimo\Models\Domain
});
```

---

## Logging (Registro de actividad)

Escribe en tu canal de logs específico del proveedor usando `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registrado {$domain_name} exitosamente", 'info');
wu_log_add('domain-seller-my-registrar', "Fallo en el registro: {$error}", 'error');
```

Los logs aparecen en **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
