---
title: Desenvolvimento de Gateway Personalizado
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Desenvolvimento de Gateway Personalizado

Pode criar gateways de pagamento personalizados ao estender a classe `Base_Gateway`.

## Classe de Gateway

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

## Registar o Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Métodos Principais

| Método | Finalidade |
|--------|---------|
| `process_single_payment()` | Lidar com pagamentos únicos |
| `process_signup()` | Configurar subscrições recorrentes |
| `process_refund()` | Lidar com pedidos de reembolso |
| `get_payment_methods()` | Devolver métodos de pagamento guardados para um cliente |

## Credenciais de renovação para memberships recorrentes

Ultimate Multisite v2.13.0 permite que integrações de gateway indiquem se uma membership recorrente tem uma credencial de renovação reutilizável antes de `auto_renew` ser persistido. Use o hook `wu_membership_has_renewal_credential` e devolva:

- `true` quando a membership tem uma subscrição de gateway, acordo de faturação, token de cofre ou método de pagamento reutilizável equivalente.
- `false` quando o gateway sabe que a credencial recorrente está em falta ou inutilizável.
- `null` para não intervir e manter o comportamento predefinido inalterado.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Quando um gateway devolve `false`, Ultimate Multisite guarda a membership com a renovação automática desativada e armazena um marcador de credencial em falta. Use `wu_membership_renewal_credential_missing` para notificar administradores, iniciar um fluxo de reautorização ou adicionar notas de suporte:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Limpe o marcador de credencial em falta como parte do fluxo de reautorização bem-sucedido do seu gateway depois de uma nova credencial reutilizável ser armazenada.

## Dicas

- Devolva sempre `WP_Error` em caso de falha para que Ultimate Multisite possa lidar com a apresentação do erro
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Use `wu_log_add()` para registo específico do gateway

## Capacidades de fornecedores do conector de AI

Integrações personalizadas que chamam operações apoiadas por conectores de AI devem alinhar-se com o conjunto de fornecedores OAuth suportado introduzido com AI Provider for Anthropic Max v1.3.0:

| Fornecedor | Notas de capacidade |
|---|---|
| **Anthropic Max** | Suporta o fluxo de trabalho existente do conjunto de contas OAuth. Preserve payloads de utilização de ferramentas da Anthropic, incluindo arrays de ferramentas vazios e assinaturas de pensamento de ida e volta, ao fazer proxy de pedidos do conector. |
| **OpenAI ChatGPT/Codex** | Suporta o fluxo de trabalho do conjunto OAuth e o comportamento completo de suporte a ferramentas para operações suportadas pelo conector. Passe as definições de ferramentas e os resultados de chamadas de ferramentas sem remover metadados de ferramentas específicos do Codex. |
| **Google AI Pro** | Suporta o fluxo de trabalho do conjunto OAuth e a integração do fornecedor apoiada por SDK. Atualize as contas do fornecedor após a conclusão do OAuth antes de encaminhar pedidos. |

A integração e os caminhos de configuração do Cursor Pro foram removidos. Não registe o Cursor Pro como um fornecedor selecionável nem apresente instruções OAuth específicas do Cursor em UIs de conectores personalizados.

Para ambientes em sandbox ou headless, exponha o caminho de recurso manual do OAuth para que os administradores possam colar os dados de autorização devolvidos e concluir a ligação da conta sem depender de um redirecionamento automático do browser.
