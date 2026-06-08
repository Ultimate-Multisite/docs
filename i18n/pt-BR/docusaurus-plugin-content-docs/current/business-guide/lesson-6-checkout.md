---
title: 'Lição 6: A Experiência de Cadastro'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lição 6: A Experiência de Cadastro

O fluxo de checkout é onde o interesse se transforma em receita. Um processo de cadastro confuso ou genérico faz com que os clientes desistam. Um fluxo específico para o nicho, que fale a língua deles e pareça natural, os converte.

## Onde Paramos

O FitSite já tem os templates e planos configurados. Agora vamos construir a experiência de cadastro e checkout que transforma donos de estúdios de fitness em clientes pagantes.

## Entendendo o Fluxo de Cadastro

Os formulários de checkout do Ultimate Multisite são formulários de múltiplas etapas totalmente personalizáveis. Para o FitSite, queremos um fluxo que:

1. Pareça ter sido feito para negócios de fitness
2. Colete apenas o que é necessário
3. Leve o cliente a um site funcional o mais rápido possível

Veja [O Fluxo de Cadastro](/user-guide/configuration/the-registration-flow) para a referência técnica completa.

## Projetando o Checkout do FitSite

Navegue até **Ultimate Multisite > Checkout Forms** e crie um novo formulário.

### Passo 1: Seleção de Plano

A primeira coisa que um dono de estúdio de fitness deve ver são os planos, apresentados em termos que ele entenda.

- Adicione um campo **Pricing Table** (Tabela de Preços)
- Configure-o para mostrar os três planos do FitSite
- As descrições de plano que você escreveu na Lição 5 aparecerão aqui — certifique-se de que elas falem sobre as necessidades do negócio de fitness, e não sobre recursos técnicos

:::tip A Linguagem de Nicho Importa
"1 GB de armazenamento" não significa nada para um dono de academia. "Tudo o que você precisa para um site profissional de estúdio" significa tudo. Escreva as descrições dos planos na linguagem do seu cliente.
:::

### Passo 2: Seleção de Template

Depois de escolher um plano, o cliente escolhe o template inicial.

- Adicione um campo **Template Selection** (Seleção de Template)
- Os templates disponíveis são filtrados pelo plano que ele selecionou (configurado na Lição 5)
- Cada template deve ter uma imagem de pré-visualização mostrando um design específico para fitness

### Passo 3: Criação de Conta

Mantenha isso o mais simples possível. Colete apenas:

- Endereço de e-mail
- Senha
- Nome do estúdio/negócio (isso se torna o nome do site deles)

Não peça informações que você não precisa no cadastro. Cada campo extra diminui as conversões.

### Passo 4: Configuração do Site

- **Site title**: Preencha automaticamente com o nome do estúdio inserido no Passo 3
- **Site URL**: Gere automaticamente a partir do nome do estúdio (ex: `ironworks.fitsite.com`)

### Passo 5: Pagamento

- Adicione o campo **Payment** (Pagamento)
- Configure seu gateway de pagamento ([Stripe](/user-guide/payment-gateways/stripe) é recomendado para cobrança por assinatura)
- Se você criou *order bumps* na Lição 5, adicione um campo **Order Bump** antes do passo de pagamento

### Passo 6: Confirmação

- Personalize a mensagem de confirmação com linguagem específica para fitness
- Exemplo: "O site do seu estúdio de fitness está sendo criado. Você será redirecionado para o seu novo site em alguns segundos."

## Adicionando um Seletor de Período

Se você configurou variações de preço em seus planos (mensal vs. anual), adicione um campo **Period Selection** (Seleção de Período) ao formulário de checkout para que os clientes possam alternar entre os períodos de cobrança. Veja [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para as instruções.

## Configurando o Pagamento

Se você ainda não configurou um gateway de pagamento:

1. Navegue até **Ultimate Multisite > Settings > Payment Gateways**
2. Siga o [guia de configuração do Stripe](/user-guide/payment-gateways/stripe) ou o gateway de sua preferência
3. Teste um fluxo de checkout completo com um pagamento de teste

Veja [Getting Paid](/user-guide/payment-gateways/getting-paid) para detalhes sobre como os pagamentos chegam à sua conta.

## Testando o Fluxo

Antes de avançar, complete um teste de cadastro completo:

1. Abra o formulário de checkout em uma janela anônima/privada
2. Selecione um plano
3. Escolha um template
4. Crie uma conta
5. Complete o pagamento (use o modo de teste)
6. Verifique se o site foi criado com o template correto

Verifique se:

- [ ] As descrições dos planos são claras e específicas para o nicho
- [ ] As pré-visualizações dos templates mostram designs apropriados para fitness
- [ ] A URL do site é gerada corretamente a partir do nome do estúdio
- [ ] O pagamento é processado com sucesso
- [ ] O cliente é direcionado para um site funcional com o template selecionado
- [ ] Os e-mails de confirmação usam linguagem específica para fitness

## A Rede FitSite Até Agora

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## O Que Construímos Nesta Lição

- **Um formulário de checkout de múltiplas etapas** adaptado para donos de estúdios de fitness
- **Linguagem específica para o nicho** em todo o fluxo de cadastro
- **Baixo atrito** — apenas campos essenciais, caminho rápido para um site funcional
- **Integração de pagamento** com verificação de teste
- **Um fluxo ponta a ponta testado** desde a seleção do plano até o site funcional

---

**Próximo:** [Lição 7: Deixando Com a Sua Marca](lesson-7-branding) — faremos o *white-label* da plataforma e estabeleceremos o FitSite como uma marca.
