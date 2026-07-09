---
title: Gerenciamento de pagamentos e faturas
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gerenciando pagamentos e faturas

## Configurações de pagamento

Antes de começar a receber pagamentos, você precisará configurar as opções relacionadas a pagamento. Navegue até **Ultimate Multisite → Settings** e clique na aba **Payment**.

![Aba de configurações de pagamento](/img/admin/settings-payments-top.png)

Aqui está uma visão completa da página de configurações de pagamento:

![Página completa de configurações de pagamento](/img/admin/settings-payments-full.png)

### Opções gerais de pagamento

Nas configurações gerais, você pode configurar:

- **Moeda** — A moeda padrão usada para transações
- **Posição da moeda** — Onde o símbolo da moeda aparece (antes/depois do valor)

![Configurações de gateway de pagamento](/img/admin/settings-payments-options.png)

### Gateways de pagamento

Ultimate Multisite oferece suporte a múltiplos gateways de pagamento. Você pode ativar e configurar cada um deles pela aba de configurações de Payment.

![Configuração de gateway de pagamento](/img/admin/settings-payments-gateways.png)

Os gateways disponíveis incluem:

- **Stripe** — Pagamentos com cartão de crédito via Stripe
- **PayPal** — Pagamentos via PayPal
- **Manual** — Para processamento de pagamento offline ou personalizado

Cada gateway tem sua própria seção de configuração, onde você insere chaves de API e outras configurações.

![Configurações adicionais de gateway](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox

Você pode ativar o **Modo Sandbox** para testar sua integração de pagamento antes de colocá-la em produção. Quando o modo sandbox está ativo, nenhuma cobrança real será feita.

## Visualizando pagamentos

Navegue até a página **Payments** em Ultimate Multisite para ver todas as transações em sua rede.

![Lista de pagamentos](/img/admin/payments-list.png)

Você pode filtrar pagamentos por status (concluído, pendente, falhou, reembolsado) e pesquisar transações específicas.

Clique em um pagamento para ver todos os seus detalhes, incluindo os itens de linha, a membership associada, informações do cliente e dados do gateway de pagamento.

## Faturas

Ultimate Multisite pode gerar faturas automaticamente para pagamentos. Você pode personalizar o modelo da fatura e o formato de numeração nas configurações de Payment.

As opções de personalização de fatura incluem:

- **Nome e endereço da empresa** exibidos nas faturas
- **Numeração de faturas** formato e sequência
- **Logo** exibido no cabeçalho da fatura
- **Texto personalizado de rodapé** para termos, observações ou informações legais

Para personalizar o modelo da fatura, acesse **Ultimate Multisite → Settings → Payment** e procure as configurações relacionadas a faturas.
