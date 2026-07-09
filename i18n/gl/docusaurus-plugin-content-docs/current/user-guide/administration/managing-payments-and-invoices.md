---
title: Xestión de pagamentos e facturas
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestionar Pagamentos e Faturas {#managing-payments-and-invoices}

## Configurações de Pagamento {#payment-settings}

Antes de começar a receber pagamentos, vai precisar configurar as definições relacionadas com o pagamento. Navegue até **Ultimate Multisite → Settings** e clique na aba **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Aqui está uma vista completa da página de configurações de pagamento:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opções Gerais de Pagamento {#general-payment-options}

Nas definições gerais podes configurar:

- **Currency** — A moeda padrão usada para as transações
- **Currency Position** — Onde aparece o símbolo da moeda (antes/depois do valor)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Gateways de Pagamento {#payment-gateways}

O Ultimate Multisite suporta vários gateways de pagamento. Podes ativar e configurar cada um a partir da aba Payment Settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Os gateways disponíveis incluem:

- **Stripe** — Pagamentos com cartão de crédito via Stripe
- **PayPal** — Pagamentos com PayPal
- **Manual** — Para processamento de pagamentos offline ou personalizado

Cada gateway tem a sua própria secção de configuração onde introduzes as chaves API e outras definições.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox {#sandbox-mode}

Podes ativar o **Sandbox Mode** para testar a tua integração de pagamento antes de ir ao ar. Quando o modo sandbox está ativo, não serão feitos cobranças reais.

## Visualizar Pagamentos {#viewing-payments}

Navega até à página **Payments** dentro do Ultimate Multisite para ver todas as transações na tua rede.

![Payments list](/img/admin/payments-list.png)

Podes filtrar os pagamentos por estado (concluído, pendente, falhado, reembolsado) e pesquisar transações específicas.

Clique no pagamento para ver todos os detalhes, incluindo os itens da encomenda, a associação associada, as informações do cliente e os dados do gateway de pagamento.

## Faturas (Invoices) {#invoices}

O Ultimate Multisite pode gerar faturas automaticamente para pagamentos. Pode personalizar o modelo da fatura e o formato de numeração a partir das definições de Pagamento (Payment settings).

As opções de personalização da fatura incluem:

- **Nome e morada da empresa** a serem exibidos nas faturas
- **Formato e sequência de numeração** da fatura
- **Logótipo** a ser exibido no cabeçalho da fatura
- **Texto de rodapé personalizado** para termos, notas ou informações legais

Para personalizar o modelo da fatura, aceda a **Ultimate Multisite → Settings → Payment** e procure as definições relacionadas com faturas.
