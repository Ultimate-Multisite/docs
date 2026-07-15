---
title: Desenvolvimento de Gateway Personalizado
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Desenvolvimento de gateway personalizado

Você pode criar gateways de pagamento personalizados estendendo a classe `Base_Gateway`.

## Classe do gateway {#gateway-class}

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

## Registrar o gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Métodos principais {#key-methods}

| Método | Finalidade |
|--------|---------|
| `process_single_payment()` | Lidar com pagamentos únicos |
| `process_signup()` | Configurar assinaturas recorrentes |
| `process_refund()` | Lidar com solicitações de reembolso |
| `get_payment_methods()` | Retornar métodos de pagamento salvos para um cliente |

## Credenciais de renovação para associações recorrentes {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 permite que integrações de gateway informem se uma associação recorrente tem uma credencial de renovação reutilizável antes que `auto_renew` seja persistido. Use o hook `wu_membership_has_renewal_credential` e retorne:

- `true` quando a associação tiver uma assinatura de gateway, contrato de cobrança, token de cofre ou método de pagamento reutilizável equivalente.
- `false` quando o gateway souber que a credencial recorrente está ausente ou inutilizável.
- `null` para não participar e manter o comportamento padrão inalterado.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Quando um gateway retorna `false`, Ultimate Multisite salva a associação com a renovação automática desativada e armazena um marcador de credencial ausente. Use `wu_membership_renewal_credential_missing` para notificar administradores, iniciar um fluxo de reautorização ou adicionar notas de suporte:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Limpe o marcador de credencial ausente como parte do fluxo de reautorização bem-sucedido do seu gateway depois que uma nova credencial reutilizável for armazenada.

## Dicas {#tips}

- Sempre retorne `WP_Error` em caso de falha para que Ultimate Multisite possa lidar com a exibição de erros
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Use `wu_log_add()` para registros específicos do gateway

## Capacidades de provedores de conectores de IA {#ai-connector-provider-capabilities}

Integrações personalizadas que chamam operações baseadas em conectores de IA devem se alinhar ao conjunto de provedores OAuth compatível introduzido com AI Provider for Anthropic Max v1.3.0:

| Provedor | Observações sobre capacidades |
|---|---|
| **Anthropic Max** | Compatível com o fluxo de trabalho de pool de Account OAuth existente. Preserve os payloads de uso de ferramentas do Anthropic, incluindo arrays de ferramentas vazios e assinaturas de raciocínio de ida e volta, ao encaminhar solicitações do conector. |
| **OpenAI ChatGPT/Codex** | Compatível com o fluxo de trabalho de pool OAuth e com o comportamento completo de suporte a ferramentas para operações compatíveis com o conector. Repasse definições de ferramentas e resultados de chamadas de ferramentas sem remover metadados de ferramentas específicos do Codex. |
| **Google AI Pro** | Compatível com o fluxo de trabalho de pool OAuth e integração de provedor baseada em SDK. Atualize as Accounts do provedor após a conclusão do OAuth antes de rotear solicitações. |

A integração e os caminhos de configuração do Cursor Pro foram removidos. Não registre o Cursor Pro como um provedor selecionável nem apresente instruções OAuth específicas do Cursor em UIs de conectores personalizados.

Para ambientes em sandbox ou headless, exponha o caminho alternativo manual de OAuth para que administradores possam colar os dados de autorização retornados e concluir a conexão da Account sem depender de um redirecionamento automático do navegador.
