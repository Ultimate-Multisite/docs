---
title: Desarrollo de pasarela personalizada
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Desarrollo de pasarelas personalizadas {#custom-gateway-development}

Puedes crear pasarelas de pago personalizadas extendiendo la clase `Base_Gateway`.

## Clase de pasarela {#gateway-class}

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

## Registrar la pasarela {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Métodos clave {#key-methods}

| Método | Propósito |
|--------|---------|
| `process_single_payment()` | Gestionar pagos únicos |
| `process_signup()` | Configurar suscripciones recurrentes |
| `process_refund()` | Gestionar solicitudes de reembolso |
| `get_payment_methods()` | Devolver métodos de pago guardados para un cliente |

## Credenciales de renovación para membresías recurrentes {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 permite que las integraciones de pasarelas informen si una membresía recurrente tiene una credencial de renovación reutilizable antes de que `auto_renew` se persista. Usa el hook `wu_membership_has_renewal_credential` y devuelve:

- `true` cuando la membresía tiene una suscripción de pasarela, acuerdo de facturación, vault token o método de pago reutilizable equivalente.
- `false` cuando la pasarela sabe que la credencial recurrente falta o no se puede usar.
- `null` para no participar y mantener el comportamiento predeterminado sin cambios.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Cuando una pasarela devuelve `false`, Ultimate Multisite guarda la membresía con la renovación automática desactivada y almacena un marcador de credencial faltante. Usa `wu_membership_renewal_credential_missing` para notificar a los administradores, iniciar un flujo de reautorización o añadir notas de soporte:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Elimina el marcador de credencial faltante como parte del flujo de reautorización correcto de tu pasarela después de almacenar una nueva credencial reutilizable.

## Consejos {#tips}

- Devuelve siempre `WP_Error` en caso de fallo para que Ultimate Multisite pueda gestionar la visualización de errores
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Usa `wu_log_add()` para el registro específico de la pasarela

## Capacidades del proveedor de conector de IA {#ai-connector-provider-capabilities}

Las integraciones personalizadas que llaman a operaciones respaldadas por conectores de IA deben alinearse con el conjunto de proveedores OAuth admitidos introducido con AI Provider for Anthropic Max v1.3.0:

| Proveedor | Notas de capacidades |
|---|---|
| **Anthropic Max** | Admite el flujo de trabajo del pool de cuentas OAuth existente. Conserva las cargas útiles de uso de herramientas de Anthropic, incluidas las matrices de herramientas vacías y las firmas de pensamiento de ida y vuelta, al actuar como proxy de solicitudes del conector. |
| **OpenAI ChatGPT/Codex** | Admite el flujo de trabajo del pool de OAuth y el comportamiento completo de compatibilidad con herramientas para las operaciones admitidas por el conector. Pasa las definiciones de herramientas y los resultados de llamadas a herramientas sin eliminar los metadatos de herramientas específicos de Codex. |
| **Google AI Pro** | Admite el flujo de trabajo del pool de OAuth y la integración de proveedor respaldada por SDK. Actualiza las cuentas de proveedor después de completar OAuth antes de enrutar solicitudes. |

La integración y las rutas de configuración de Cursor Pro se han eliminado. No registres Cursor Pro como proveedor seleccionable ni presentes instrucciones de OAuth específicas de Cursor en interfaces de usuario de conectores personalizados.

Para entornos aislados o headless, expón la ruta alternativa manual de OAuth para que los administradores puedan pegar los datos de autorización devueltos y completar la conexión de la cuenta sin depender de una redirección automática del navegador.
