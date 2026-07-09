---
title: 'Lição 9: Preços para o Lucro'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lição 9: Preços para Lucro

Na Lição 5, definimos os preços iniciais para os planos FitSite. Agora refinamos a estratégia de preços com técnicas que aumentam a receita, incentivam upgrades e reduzem o churn.

## Onde Ficámos

FitSite tem planos, modelos, checkout, branding e onboarding implementados. O preço inicial era $49/$99/$199 por mês. Agora fazemos esse preço trabalhar mais.

## Princípios de Preços para Plataformas de Nicho

### Defina o Preço com Base no Valor, Não no Custo

Os seus custos de alojamento podem ser $5-$15 por site de cliente. Isso não significa que o seu preço deva ser $20. Não está a vender alojamento. Está a vender:

- Um site profissional de fitness que custaria $2,000-$5,000 para desenvolver à medida
- Manutenção contínua, atualizações e segurança com que eles não têm de se preocupar
- Funcionalidades específicas do nicho que construtores genéricos não oferecem
- A credibilidade de uma plataforma criada para a indústria deles

Defina o preço com base no valor que entrega, não no custo de o entregar.

### Ancore em Alternativas

Quando o proprietário de um estúdio de fitness avalia o FitSite, compara-o com:

- **Contratar um programador web**: $2,000-$5,000 iniciais + $50-$100/mês de manutenção
- **Wix/Squarespace**: $16-$45/mês, mas sem funcionalidades específicas de fitness; eles próprios têm de criar o site
- **Não fazer nada**: Membros perdidos que não conseguem encontrá-los online

A $49-$199/mês, FitSite é mais barato do que um programador, mais capaz do que construtores genéricos e infinitamente melhor do que não ter site.

## Implementar Variações de Preço

O preço anual incentiva o compromisso e reduz o churn. Navegue até ao separador **Price Variations** de cada plano e adicione opções anuais:

| Plano | Mensal | Anual (por mês) | Total Anual | Poupança |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mês | $39/mês | $468/ano | 20% de desconto |
| Growth | $99/mês | $79/mês | $948/ano | 20% de desconto |
| Pro | $199/mês | $159/mês | $1,908/ano | 20% de desconto |

Adicione um campo **Period Selection** ao seu formulário de checkout para que os clientes possam alternar entre faturação mensal e anual. Consulte [Formulários de Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Porque o Preço Anual Funciona

- **Para si**: Dinheiro adiantado, menor churn (clientes que pagam anualmente têm menor probabilidade de cancelar a meio do período)
- **Para eles**: Poupanças reais, previsibilidade orçamental

## Taxas de Configuração

Considere uma taxa de configuração única para planos que incluem configuração assistida:

- **Starter**: Sem taxa de configuração (remove barreiras à entrada)
- **Growth**: Taxa de configuração de $99 (cobre a configuração de domínio personalizado e consulta inicial)
- **Pro**: Taxa de configuração de $299 (cobre configuração multi-localização e chamada de onboarding)

Configure as taxas de configuração na secção de preços de cada plano. Consulte [Criar o Seu Primeiro Produto de Subscrição](/user-guide/configuration/creating-your-first-subscription-product) para mais detalhes.

## Períodos de Teste

Oferecer um teste reduz o atrito no registo, mas introduz o risco de não conversão. Para FitSite:

- **Teste gratuito de 7 dias** apenas no plano Starter
- Sem teste nos planos Growth e Pro (estes clientes estão mais comprometidos e esperam pagar)

Configure o teste na secção de preços do plano Starter, ativando o alternador **Offer Trial** e definindo a duração para 7 dias.

### Fazer com que os Testes Convertam

Um teste só funciona se o cliente experienciar valor durante o período de teste. A sua sequência de onboarding (Lição 8) é crítica aqui -- os emails de boas-vindas devem ser programados para impulsionar o envolvimento dentro da janela de 7 dias.

## Códigos de Desconto

Crie códigos de desconto estratégicos para objetivos específicos:

- **FITLAUNCH** -- 30% de desconto nos primeiros 3 meses (para promoção de lançamento)
- **ANNUAL20** -- 20% de desconto em planos anuais (se ainda não estiverem descontados)
- **REFERRAL** -- 1 mês grátis (para recomendações de clientes)

Navegue até **Ultimate Multisite > Discount Codes** para os criar. Consulte [Criar Códigos de Desconto](/user-guide/configuration/creating-discount-codes) para o guia completo.

:::tip Não Desconte por Defeito
Os descontos devem ser ferramentas estratégicas, não elementos permanentes. Se todos recebem um desconto, não é um desconto -- é o seu preço real. Use-os para campanhas específicas, recomendações e promoções por tempo limitado.
:::

## Gestão de Impostos

Se opera numa jurisdição que exige cobrança de impostos:

1. Configure taxas de imposto em **Ultimate Multisite > Settings > Taxes**
2. Aplique categorias de imposto aos seus planos
3. Garanta que as faturas apresentam o imposto corretamente

Consulte [Gestão de Impostos](/user-guide/payment-gateways/tax-handling) para configuração detalhada. Se serve clientes internacionalmente, considere o [addon de IVA](/addons/vat) para conformidade na UE.

## Rever os Seus Preços

Após o lançamento, reveja os preços trimestralmente. Analise:

- **Taxa de conversão por plano**: Se Starter converte bem, mas Growth não, a diferença entre eles pode ser demasiado grande
- **Taxa de upgrade**: Se poucos clientes fazem upgrade de Starter para Growth, o plano Growth pode não oferecer valor adicional suficiente
- **Churn por plano**: Se clientes anuais fazem menos churn, promova mais o preço anual
- **Preços da concorrência**: Quanto cobram as alternativas? Está posicionado corretamente?

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

## O Que Criámos Nesta Lição

- **Preços anuais** com 20% de desconto para incentivar o compromisso
- **Taxas de configuração** nos escalões superiores para cobrir o esforço de integração
- **Um período de teste** no plano de entrada para reduzir a fricção na inscrição
- **Códigos de desconto estratégicos** para lançamento, referências e campanhas
- **Configuração de impostos** para faturação em conformidade
- **Um enquadramento de revisão de preços** para otimização contínua

---

**Seguinte:** [Lição 10: Dia de Lançamento](lesson-10-launch) -- a lista de verificação pré-lançamento e a entrada em produção.
