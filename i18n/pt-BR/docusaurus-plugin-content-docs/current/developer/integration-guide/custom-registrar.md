---
title: Construindo uma Integração de Registrador Personalizada
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Criando uma Integração de Registrador Personalizada

O addon Domain Seller utiliza um padrão chamado **Integration Registry** (Registro de Integrações). Cada registrador é uma classe PHP que implementa `Domain_Selling_Capability` e se registra através do action hook `wu_domain_seller_register_capabilities`.

Este guia mostra como conectar um registrador personalizado.

## A Interface {#the-interface}

Sua classe deve implementar `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` e estender `WP_Ultimo\Integrations\Base_Capability_Module`.

Métodos obrigatórios:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Métodos de identidade obrigatórios (de Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // sempre 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Habilita o registro de domínios via Meu Registrador.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Métodos centrais obrigatórios (de Domain_Selling_Capability) ---

    /** Puxa todas as TLDs disponíveis e preços de atacado. */
    public function sync_tlds(): array { ... }

    /** Verifica a disponibilidade de $domain_name em $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Obtém o preço de atacado para uma TLD por N anos. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registra um domínio. Retorna ['success' => true, 'expiry_date' => '...'] em caso de sucesso. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renova um domínio por N anos. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Obtém o status de registro, data de expiração e nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testa as credenciais da API e a conectividade. */
    public function test_connection(): array { ... }
}
```

### Métodos Opcionais {#optional-methods}

Implemente estes métodos para desbloquear recursos adicionais. O addon detecta o suporte via `method_exists()`:

| Método | Desbloqueia |
|---|---|
| `supports_whois_privacy(): bool` | Opção de privacidade WHOIS nas configurações do produto |
| `enable_whois_privacy(string $domain_name): array` | Habilita privacidade automaticamente no registro |
| `get_dns_records(string $domain_name): array` | Aba de visualização de DNS para o cliente |
| `add_dns_record(string $domain_name, array $record_data): array` | O cliente pode adicionar registros DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | O cliente pode editar registros DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | O cliente pode excluir registros DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gerenciamento de nameservers |
| `get_epp_code(string $domain_name): array` | Transferência de domínio (saída) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transferência de domínio (entrada) |

### Convenção de valor de retorno {#return-value-convention}

Todos os métodos devem retornar um array com, no mínimo, uma chave `success`:

```php
// Sucesso
return ['success' => true, 'data' => [...]];

// Falha
return ['success' => false, 'message' => 'Erro legível por humanos'];
```

---

## Registrando sua capacidade (Capability) {#registering-your-capability}

Registre sua classe usando o action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

O primeiro argumento de `add_capability()` é o **provider ID** — um slug em letras minúsculas usado para identificar seu registrador nas configurações, na configuração do produto e nos canais de log. Use algo único (por exemplo, o slug da sua empresa).

---

## Adicionando campos de credenciais ao wizard {#adding-credential-fields-to-the-wizard}

Para permitir que os administradores insiram credenciais através do wizard de configuração, registre sua integração:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('Meu Registrador', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('Chave de API', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('Segredo de API', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

As credenciais são armazenadas como opções de rede usando os IDs dos campos como chaves. Recupere-as em sua classe de capacidade com `wu_get_setting('my_registrar_api_key')`.

---

## Hooks para ações pós-registro {#hooks-for-post-registration-actions}

Use estes actions para disparar webhooks, provisionamento, notificações ou atualizações de CRM:

```php
// Após o registro bem-sucedido do domínio
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: resposta bruta do registrador
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Após falha no registro
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Falha no registro do domínio: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Após renovação bem-sucedida
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Atualize seu sistema de cobrança, envie um recibo, etc.
}, 10, 3);

// Após falha na renovação
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alerta, lógica de repetição, etc.
}, 10, 3);

// Após conclusão da transferência de domínio
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain é um objeto WP_Ultimo\Models\Domain
}, 10, 2);

// Após verificação DKIM do SES (se a integração SES estiver ativa)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain é um objeto WP_Ultimo\Models\Domain
});
```

---

## Log (Registro de Logs) {#logging}

Escreva no canal de log específico do seu provedor usando `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registrado {$domain_name} com sucesso", 'info');
wu_log_add('domain-seller-my-registrar', "Falha no registro: {$error}", 'error');
```

Os logs aparecem em **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
