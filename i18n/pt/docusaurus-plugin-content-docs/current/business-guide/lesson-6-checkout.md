---
title: 'Lição 6: A Experiência de Inscrição'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lição 6: A experiência de cadastro {#lesson-6-the-signup-experience}

O fluxo de finalização de compra é onde o interesse se transforma em receita. Um processo de cadastro confuso ou genérico perde clientes. Um fluxo específico para o nicho, que fala a língua deles e parece simples, converte-os.

## Onde ficámos {#where-we-left-off}

FitSite tem modelos e planos configurados. Agora vamos criar a experiência de registo e finalização de compra que transforma proprietários de estúdios de fitness em clientes pagantes.

## Compreender o fluxo de registo {#understanding-the-registration-flow}

Os formulários de finalização de compra do Ultimate Multisite são formulários de várias etapas totalmente personalizáveis. Para o FitSite, queremos um fluxo que:

1. Pareça ter sido criado para negócios de fitness
2. Recolha apenas o que é necessário
3. Leve o cliente a um site funcional o mais rapidamente possível

Consulte [O fluxo de registo](/user-guide/configuration/the-registration-flow) para a referência técnica completa.

## Criar a finalização de compra do FitSite {#designing-the-fitsite-checkout}

Navegue até **Ultimate Multisite > Formulários de finalização de compra** e crie um novo formulário.

### Etapa 1: Seleção de plano {#step-1-plan-selection}

A primeira coisa que um proprietário de estúdio de fitness deve ver são os planos, apresentados em termos que ele compreende.

- Adicione um campo **Tabela de preços**
- Configure-o para mostrar os três planos FitSite
- As descrições dos planos que escreveu na Lição 5 aparecem aqui -- certifique-se de que falam às necessidades de negócios de fitness, não a funcionalidades técnicas

:::tip A linguagem do nicho importa
"1 GB de armazenamento" não significa nada para o proprietário de um ginásio. "Tudo o que precisa para um site profissional de estúdio" significa tudo. Escreva descrições de planos na linguagem do seu cliente.
:::

### Etapa 2: Seleção de modelo {#step-2-template-selection}

Depois de escolher um plano, o cliente escolhe o seu modelo inicial.

- Adicione um campo **Seleção de modelo**
- Os modelos disponíveis são filtrados pelo plano que selecionaram (configurado na Lição 5)
- Cada modelo deve ter uma imagem de pré-visualização que mostre um design específico para fitness

### Etapa 3: Criação de Account {#step-3-account-creation}

Mantenha isto no mínimo. Recolha apenas:

- Endereço de email
- Palavra-passe
- Nome do estúdio/negócio (isto torna-se o nome do site)

Não peça informações de que não precisa no cadastro. Cada campo extra reduz as conversões.

### Etapa 4: Configuração do site {#step-4-site-setup}

- **Título do site**: Pré-preencha a partir do nome do estúdio introduzido na Etapa 3
- **URL do site**: Gere automaticamente a partir do nome do estúdio (por exemplo, `ironworks.fitsite.com`)

### Etapa 5: Pagamento {#step-5-payment}

- Adicione o campo **Pagamento**
- Configure o seu gateway de pagamento ([Stripe](/user-guide/payment-gateways/stripe) é recomendado para faturação por subscrição)
- Se criou ofertas adicionais de pedido na Lição 5, adicione um campo **Oferta adicional de pedido** antes da etapa de pagamento

### Etapa 6: Confirmação {#step-6-confirmation}

- Personalize a mensagem de confirmação com linguagem específica para fitness
- Exemplo: "O site do seu estúdio de fitness está a ser criado. Será redirecionado para o seu novo site dentro de alguns segundos."

## Adicionar um seletor de período {#adding-a-period-selection-toggle}

Se configurou variações de preço nos seus planos (mensal vs. anual), adicione um campo **Seleção de período** ao formulário de finalização de compra para que os clientes possam alternar entre períodos de faturação. Consulte [Formulários de finalização de compra](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para obter instruções.

## Configurar o pagamento {#configuring-payment}

Se ainda não configurou um gateway de pagamento:

1. Navegue até **Ultimate Multisite > Definições > Gateways de pagamento**
2. Siga o [guia de configuração do Stripe](/user-guide/payment-gateways/stripe) ou o seu gateway preferido
3. Teste um fluxo completo de finalização de compra com um pagamento de teste

Consulte [Receber pagamentos](/user-guide/payment-gateways/getting-paid) para obter detalhes sobre como os pagamentos fluem para a sua Account.

## Testar o fluxo {#testing-the-flow}

Antes de avançar, conclua um cadastro de teste completo:

1. Abra o formulário de finalização de compra numa janela de navegação anónima/privada
2. Selecione um plano
3. Escolha um modelo
4. Crie uma Account
5. Conclua o pagamento (use o modo de teste)
6. Verifique se o site é criado com o modelo correto

Verifique se:

- [ ] As descrições dos planos são claras e específicas para o nicho
- [ ] As pré-visualizações dos modelos mostram designs adequados para fitness
- [ ] O URL do site é gerado corretamente a partir do nome do estúdio
- [ ] O pagamento é processado com sucesso
- [ ] O cliente chega a um site funcional com o modelo selecionado
- [ ] Os emails de confirmação usam linguagem específica para fitness

## A rede FitSite até agora {#the-fitsite-network-so-far}

```
Rede FitSite
├── WordPress Multisite (modo de subdomínio)
├── Ultimate Multisite (configurado)
├── Alojamento com SSL wildcard + mapeamento de domínio
├── Modelos de site (Studio Essential, Gym Pro, Fitness Chain)
├── Produtos (Starter, Growth, Pro + ofertas adicionais de pedido)
├── Fluxo de finalização de compra
│   ├── Seleção de plano com descrições específicas para o nicho
│   ├── Seleção de modelo com pré-visualizações de fitness
│   ├── Criação mínima de Account
│   ├── Pagamento via Stripe
│   └── Confirmação específica para fitness
└── Pronto para branding (próxima lição)
```

## O que criámos nesta lição {#what-we-built-this-lesson}

- **Um formulário de finalização de compra de várias etapas** adaptado a proprietários de estúdios de fitness
- **Linguagem específica para o nicho** ao longo de todo o fluxo de cadastro
- **Atrito mínimo** -- apenas campos essenciais, caminho rápido até um site funcional
- **Integração de pagamento** com verificação de teste
- **Um fluxo completo testado** desde a seleção de plano até ao site funcional

---

**Seguinte:** [Lição 7: Torná-lo seu](lesson-7-branding) -- vamos aplicar white-label à plataforma e estabelecer o FitSite como uma marca.
