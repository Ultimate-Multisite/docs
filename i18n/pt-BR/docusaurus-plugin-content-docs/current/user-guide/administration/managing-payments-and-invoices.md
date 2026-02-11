---
title: '# Gerenciando Pagamentos e Faturas'
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Gerenciando Pagamentos e Faturas

## Configurações de Pagamento

Antes de começar a receber pagamentos, você precisará configurar as configurações relacionadas ao pagamento. Navegue até **Ultimate Multisite → Settings** e clique na aba **Pagamento**.

![Configurações da aba de pagamento](/img/admin/settings-payments-top.png)

### Opções Gerais de Pagamento

Nas configurações gerais você pode configurar:

- **Moeda** — A moeda padrão usada para transações
- **Posição da Moeda** — Onde o símbolo da moeda aparece (antes/depois do valor)

![Configurações do gateway de pagamento](/img/admin/settings-payments-options.png)

### Gateways de Pagamento

Ultimate Multisite suporta vários gateways de pagamento. Você pode habilitar e configurar cada um a partir da aba Configurações de Pagamento.

![Configuração do gateway de pagamento](/img/admin/settings-payments-gateways.png)

Gateways disponíveis incluem:

- **Stripe** — Pagamentos com cartão de crédito via Stripe
- **PayPal** — Pagamentos via PayPal
- **Manual** — Para processamento de pagamento offline ou personalizado

Cada gateway tem sua própria seção de configuração onde você insere as chaves da API e outras configurações.

![Configurações adicionais do gateway](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox

Você pode habilitar **Modo Sandbox** para testar sua integração de pagamento antes de ir ao vivo. Quando o modo sandbox estiver ativo, nenhuma cobrança real será feita.

## Visualizando Pagamentos

Navegue até a página **Pagamentos** em Ultimate Multisite para ver todas as transações em toda a sua rede.

![Lista de Pagamentos](/img/admin/payments-list.png)

Você pode filtrar pagamentos por status (completado, pendente, falhado, reembolsado) e pesquisar transações específicas.

Clique em um pagamento para ver todos os detalhes, incluindo os itens da linha, a associação de membros, as informações do cliente e os dados do gateway de pagamento.

## Faturas

Ultimate Multisite pode gerar automaticamente faturas para pagamentos. Você pode personalizar o modelo de fatura e o formato de numeração a partir das Configurações de Pagamento.

Opções de personalização de fatura incluem:

- **Nome e endereço da empresa exibidos nas faturas**
- **Formato e sequência de numeração de faturas**
- **Logotipo exibido no cabeçalho da fatura**
- **Texto personalizado no rodapé para termos, notas ou informações legais**

Para personalizar o modelo de fatura, vá para **Ultimate Multisite → Settings → Payment** e procure as configurações relacionadas à fatura.
