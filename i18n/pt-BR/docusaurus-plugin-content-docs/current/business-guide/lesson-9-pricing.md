---
title: 'Lição 9: Precificação para Lucro'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lição 9: Precificação para Lucro

Na Lição 5, definimos os preços iniciais para os planos do FitSite. Agora, vamos refinar a estratégia de preços com técnicas que aumentam a receita, incentivam upgrades e reduzem o *churn*.

## Onde Paramos

O FitSite já possui planos, templates, *checkout*, branding e *onboarding* configurados. O preço inicial era de $49/$99/$199 por mês. Agora, vamos fazer com que essa precificação trabalhe mais duro.

## Princípios de Precificação para Plataformas de Nicho

### Precifique pelo Valor, Não pelo Custo

Seus custos de hospedagem podem ser de $5 a $15 por site do cliente. Isso não significa que seu preço deva ser $20. Você não está vendendo hospedagem. Você está vendendo:

- Um site profissional de fitness que custaria entre $2.000 e $5.000 para ser construído sob medida
- Manutenção, atualizações e segurança contínuas que eles não precisam se preocupar
- Recursos específicos do nicho que construtores genéricos não oferecem
- A credibilidade de uma plataforma construída para a indústria deles

Precifique com base no valor que você entrega, e não no custo para entregar.

### Ancore em Alternativas

Quando um dono de estúdio de fitness avalia o FitSite, ele compara com:

- **Contratar um desenvolvedor web**: $2.000-$5.000 adiantados + $50-$100/mês de manutenção
- **Wix/Squarespace**: $16-$45/mês, mas sem recursos específicos de fitness, e eles constroem o site por conta própria
- **Não fazer nada**: Perda de membros que não conseguem encontrar o estúdio online

Com $49-$199/mês, o FitSite é mais barato que um desenvolvedor, mais capaz que construtores genéricos e infinitamente melhor do que não ter um site.

## Implementando Variações de Preço

A precificação anual incentiva o comprometimento e reduz o *churn*. Navegue até a aba **Price Variations** de cada plano e adicione as opções anuais:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Adicione um campo **Period Selection** ao seu formulário de *checkout* para que os clientes possam alternar entre cobrança mensal e anual. Veja [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Por Que a Precificação Anual Funciona

- **Para você**: Dinheiro adiantado, menor *churn* (clientes que pagam anualmente têm menos probabilidade de cancelar no meio do período)
- **Para eles**: Economia real, previsibilidade orçamentária

## Taxas de Configuração (*Setup Fees*)

Considere uma taxa de configuração única para planos que incluem configuração manual:

- **Starter**: Sem taxa de configuração (remove barreiras de entrada)
- **Growth**: Taxa de configuração de $99 (cobre configuração de domínio personalizado e consulta inicial)
- **Pro**: Taxa de configuração de $299 (cobre configuração multi-localização e chamada de *onboarding*)

Configure as taxas de configuração na seção de preços de cada plano. Veja [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) para mais detalhes.

## Períodos de Teste (*Trial Periods*)

Oferecer um teste reduz o atrito no cadastro, mas introduz o risco de não conversão. Para o FitSite:

- **Teste gratuito de 7 dias** apenas no plano Starter
- Sem teste no Growth e Pro (esses clientes são mais comprometidos e esperam pagar)

Configure o teste na seção de preços do plano Starter, ativando o *toggle* **Offer Trial** e definindo a duração para 7 dias.

### Fazendo os Testes Converterem

Um teste só funciona se o cliente vivenciar valor durante o período de teste. Sua sequência de *onboarding* (Lição 8) é crítica aqui — os e-mails de boas-vindas devem ser programados para gerar engajamento dentro da janela de 7 dias.

## Códigos de Desconto

Crie códigos de desconto estratégicos para propósitos específicos:

- **FITLAUNCH** — 30% de desconto nos primeiros 3 meses (para promoção de lançamento)
- **ANNUAL20** — 20% de desconto em planos anuais (se ainda não estiverem com desconto)
- **REFERRAL** — 1 mês grátis (para indicações de clientes)

Navegue até **Ultimate Multisite > Discount Codes** para criar estes. Veja [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) para o guia completo.

:::tip Não Desconte por Padrão
Os descontos devem ser ferramentas estratégicas, não itens permanentes. Se todo mundo recebe um desconto, não é um desconto — é o seu preço real. Use-os para campanhas específicas, indicações e promoções por tempo limitado.
:::

## Tratamento de Impostos (*Tax Handling*)

Se você opera em uma jurisdição que exige a cobrança de impostos:

1. Configure as taxas de imposto em **Ultimate Multisite > Settings > Taxes**
2. Aplique categorias de imposto aos seus planos
3. Garanta que as faturas exibam o imposto corretamente

Veja [Tax Handling](/user-guide/payment-gateways/tax-handling) para configuração detalhada. Se você atende clientes internacionalmente, considere o [VAT addon](/addons/vat) para conformidade com a UE.

## Revisando Sua Precificação

Após o lançamento, revise a precificação trimestralmente. Observe:

- **Taxa de conversão por plano**: Se o Starter converte bem, mas o Growth não, o intervalo entre eles pode estar muito grande
- **Taxa de upgrade**: Se poucos clientes fazem o upgrade de Starter para Growth, o plano Growth pode não oferecer valor adicional suficiente
- **Churn por plano**: Se os clientes anuais têm menos *churn*, promova a precificação anual com mais força
- **Precificação da concorrência**: Quanto as alternativas estão cobrando? Você está posicionado corretamente?

## A Rede FitSite Até Agora

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## O Que Construímos Nesta Lição

- **Precificação anual** com 20% de desconto para incentivar o comprometimento
- **Taxas de configuração** nos níveis mais altos para cobrir o esforço de *onboarding*
- **Um período de teste** no plano de entrada para reduzir o atrito no cadastro
- **Códigos de desconto estratégicos** para lançamento, indicações e campanhas
- **Configuração de impostos** para faturamento em conformidade
- **Uma estrutura de revisão de preços** para otimização contínua

---

**Próximo:** [Lição 10: Dia do Lançamento](lesson-10-launch) — o checklist pré-lançamento e o *go live*.
