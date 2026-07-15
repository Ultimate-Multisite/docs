---
title: Gerenciamento de Pagamentos e Faturas
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gerenciando Pagamentos e Faturas

## Configurações de Pagamento {#payment-settings}

Antes de começar a receber pagamentos, você precisará configurar as configurações relacionadas ao pagamento. Navegue até **Ultimate Multisite → Settings** e clique na aba **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Aqui está uma visualização completa da página de configurações de pagamento:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opções Gerais de Pagamento {#general-payment-options}

Nas configurações gerais você pode configurar:

- **Moeda** — A moeda padrão usada para as transações
- **Posição da Moeda** — Onde o símbolo da moeda aparece (antes/depois do valor)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Gateways de Pagamento {#payment-gateways}

O Ultimate Multisite suporta múltiplos gateways de pagamento. Você pode ativar e configurar cada um a partir da aba Configurações de Pagamento.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Os gateways disponíveis incluem:

- **Stripe** — Pagamentos com cartão de crédito via Stripe
- **PayPal** — Pagamentos com PayPal
- **Manual** — Para processamento de pagamento offline ou personalizado

Cada gateway tem sua própria seção de configuração onde você insere chaves de API e outras configurações.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox {#sandbox-mode}

Você pode ativar o **Sandbox Mode** para testar sua integração de pagamento antes de ir ao ar. Quando o modo sandbox está ativo, nenhuma cobrança real será feita.

## Visualizando Pagamentos {#viewing-payments}

Navegue até a página **Payments** dentro do Ultimate Multisite para ver todas as transações em toda a sua rede.

![Payments list](/img/admin/payments-list.png)

Você pode filtrar os pagamentos por status (concluído, pendente, falhou, estornado) e pesquisar transações específicas.

Clique em um pagamento para ver todos os detalhes, incluindo os itens da linha, a associação com a assinatura, as informações do cliente e os dados do gateway de pagamento.

## Faturas {#invoices}

O Ultimate Multisite pode gerar faturas automaticamente para pagamentos. Você pode personalizar o modelo da fatura e o formato de numeração a partir das configurações de Pagamento.

As opções de personalização da fatura incluem:

- **Nome e endereço da empresa** exibidos nas faturas
- **Formato e sequência de numeração da fatura**
- **Logo** exibido no cabeçalho da fatura
- **Texto de rodapé personalizado** para termos, notas ou informações legais

Para personalizar o modelo da fatura, vá em **Ultimate Multisite → Settings → Payment** e procure as configurações relacionadas à fatura.
