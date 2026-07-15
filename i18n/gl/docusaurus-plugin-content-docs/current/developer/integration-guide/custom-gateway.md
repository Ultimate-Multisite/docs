---
title: Desenvolvemento de pasarela personalizada
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Desenvolvemento de pasarelas personalizadas

Podes crear pasarelas de pago personalizadas ampliando a clase `Base_Gateway`.

## Clase da pasarela {#gateway-class}

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

## Rexistrar a pasarela {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Métodos clave {#key-methods}

| Método | Finalidade |
|--------|---------|
| `process_single_payment()` | Xestionar pagos únicos |
| `process_signup()` | Configurar subscricións recorrentes |
| `process_refund()` | Xestionar solicitudes de reembolso |
| `get_payment_methods()` | Devolver métodos de pago gardados para un cliente |

## Credenciais de renovación para memberships recorrentes {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 permite que as integracións de pasarelas informen de se unha membership recorrente ten unha credencial de renovación reutilizable antes de que `auto_renew` se persista. Engancha `wu_membership_has_renewal_credential` e devolve:

- `true` cando a membership ten unha subscrición de pasarela, un acordo de facturación, un vault token ou un método de pago reutilizable equivalente.
- `false` cando a pasarela sabe que a credencial recorrente falta ou non se pode usar.
- `null` para non participar e manter o comportamento predeterminado sen cambios.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Cando unha pasarela devolve `false`, Ultimate Multisite garda a membership coa renovación automática desactivada e almacena un marcador de credencial ausente. Usa `wu_membership_renewal_credential_missing` para notificar os administradores, iniciar un fluxo de reautorización ou engadir notas de soporte:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Limpa o marcador de credencial ausente como parte do fluxo de reautorización correcto da túa pasarela despois de gardar unha nova credencial reutilizable.

## Consellos {#tips}

- Devolve sempre `WP_Error` en caso de fallo para que Ultimate Multisite poida xestionar a visualización do erro
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Usa `wu_log_add()` para rexistros específicos da pasarela

## Capacidades de provedores do conector de AI {#ai-connector-provider-capabilities}

As integracións personalizadas que chaman operacións respaldadas polo conector de AI deben aliñarse co conxunto de provedores OAuth compatibles introducido con AI Provider for Anthropic Max v1.3.0:

| Provedor | Notas de capacidades |
|---|---|
| **Anthropic Max** | Admite o fluxo de traballo existente do pool de contas OAuth. Conserva as cargas útiles de uso de ferramentas de Anthropic, incluíndo matrices de ferramentas baleiras e sinaturas de pensamento de ida e volta, ao actuar como proxy de solicitudes do conector. |
| **OpenAI ChatGPT/Codex** | Admite o fluxo de traballo do pool OAuth e o comportamento completo de compatibilidade con ferramentas para operacións compatibles co conector. Pasa as definicións de ferramentas e os resultados de chamadas a ferramentas sen eliminar metadatos de ferramentas específicos de Codex. |
| **Google AI Pro** | Admite o fluxo de traballo do pool OAuth e a integración de provedor baseada no SDK. Actualiza as contas de provedor despois de completar OAuth antes de encamiñar solicitudes. |

Elimináronse a integración e as vías de configuración de Cursor Pro. Non rexistres Cursor Pro como provedor seleccionable nin presentes instrucións OAuth específicas de Cursor nas interfaces de usuario de conectores personalizados.

Para contornas illadas ou sen interface, expón a vía alternativa manual de OAuth para que os administradores poidan pegar os datos de autorización devoltos e completar a conexión da conta sen depender dunha redirección automática do navegador.
