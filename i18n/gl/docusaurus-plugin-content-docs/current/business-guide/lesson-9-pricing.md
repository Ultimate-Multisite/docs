---
title: 'Lección 9: Fixación de prezos para obter beneficios'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lección 9: Prezos para obter beneficio {#lesson-9-pricing-for-profit}

Na Lección 5 establecemos os prezos iniciais dos plans de FitSite. Agora perfeccionamos a estratexia de prezos con técnicas que aumentan os ingresos, fomentan as actualizacións e reducen a perda de clientes.

## Onde o deixamos {#where-we-left-off}

FitSite xa ten plans, modelos, proceso de compra, marca e incorporación configurados. O prezo inicial era de $49/$99/$199 ao mes. Agora faremos que ese prezo renda máis.

## Principios de prezos para plataformas de nicho {#pricing-principles-for-niche-platforms}

### Pon prezo segundo o valor, non segundo o custo {#price-on-value-not-cost}

Os teus custos de aloxamento poderían ser de $5-$15 por sitio de cliente. Iso non significa que o teu prezo deba ser $20. Non estás vendendo aloxamento. Estás vendendo:

- Un sitio web profesional de fitness que custaría $2,000-$5,000 se se fixese á medida
- Mantemento continuo, actualizacións e seguridade nos que non teñen que pensar
- Funcionalidades específicas do nicho que os construtores xenéricos non ofrecen
- A credibilidade dunha plataforma creada para o seu sector

Pon o prezo en función do valor que entregas, non do custo de entregalo.

### Ancórao ás alternativas {#anchor-to-alternatives}

Cando o propietario dun estudio de fitness avalía FitSite, compárao con:

- **Contratar un desenvolvedor web**: $2,000-$5,000 por adiantado + $50-$100/mes de mantemento
- **Wix/Squarespace**: $16-$45/mes pero sen funcionalidades específicas de fitness; constrúeno eles mesmos
- **Non facer nada**: Perder membros que non os poden atopar en liña

A $49-$199/mes, FitSite é máis barato ca un desenvolvedor, máis capaz ca os construtores xenéricos e infinitamente mellor ca non ter sitio web.

## Implementar variacións de prezo {#implementing-price-variations}

O prezo anual fomenta o compromiso e reduce a perda de clientes. Navega á pestana **Price Variations** de cada plan e engade opcións anuais:

| Plan | Mensual | Anual (por mes) | Total anual | Aforro |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mes | $39/mes | $468/ano | 20% de desconto |
| Growth | $99/mes | $79/mes | $948/ano | 20% de desconto |
| Pro | $199/mes | $159/mes | $1,908/ano | 20% de desconto |

Engade un campo **Period Selection** ao teu formulario de pago para que os clientes poidan alternar entre facturación mensual e anual. Consulta [Formularios de pago](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Por que funciona o prezo anual {#why-annual-pricing-works}

- **Para ti**: Diñeiro por adiantado, menor perda de clientes (os clientes que pagan anualmente teñen menos probabilidades de cancelar a metade do período)
- **Para eles**: Aforro real, previsibilidade orzamentaria

## Taxas de configuración {#setup-fees}

Considera unha taxa de configuración única para plans que inclúan configuración asistida:

- **Starter**: Sen taxa de configuración (elimina barreiras de entrada)
- **Growth**: Taxa de configuración de $99 (cobre a configuración do dominio personalizado e a consulta inicial)
- **Pro**: Taxa de configuración de $299 (cobre a configuración de varias localizacións e a chamada de incorporación)

Configura as taxas de configuración na sección de prezos de cada plan. Consulta [Crear o teu primeiro produto de subscrición](/user-guide/configuration/creating-your-first-subscription-product) para máis detalles.

## Períodos de proba {#trial-periods}

Ofrecer unha proba reduce a fricción no rexistro, pero introduce o risco de non conversión. Para FitSite:

- **Proba gratuíta de 7 días** só no plan Starter
- Sen proba en Growth e Pro (estes clientes están máis comprometidos e esperan pagar)

Configura a proba na sección de prezos do plan Starter activando o interruptor **Offer Trial** e establecendo a duración en 7 días.

### Facer que as probas convertan {#making-trials-convert}

Unha proba só funciona se o cliente experimenta valor durante o período de proba. A túa secuencia de incorporación (Lección 8) é crítica aquí: os correos de benvida deberían estar programados para impulsar a interacción dentro da xanela de 7 días.

## Códigos de desconto {#discount-codes}

Crea códigos de desconto estratéxicos para fins específicos:

- **FITLAUNCH** -- 30% de desconto nos primeiros 3 meses (para a promoción de lanzamento)
- **ANNUAL20** -- 20% de desconto nos plans anuais (se aínda non están descontados)
- **REFERRAL** -- 1 mes gratis (para referencias de clientes)

Navega a **Ultimate Multisite > Discount Codes** para crealos. Consulta [Crear códigos de desconto](/user-guide/configuration/creating-discount-codes) para ver a guía completa.

:::tip Non descontes por defecto
Os descontos deben ser ferramentas estratéxicas, non elementos permanentes. Se todo o mundo recibe un desconto, non é un desconto: é o teu prezo real. Úsaos para campañas específicas, referencias e promocións por tempo limitado.
:::

## Xestión de impostos {#tax-handling}

Se operas nunha xurisdición que require recadación de impostos:

1. Configura as taxas de imposto en **Ultimate Multisite > Settings > Taxes**
2. Aplica categorías fiscais aos teus plans
3. Asegúrate de que as facturas mostren os impostos correctamente

Consulta [Xestión de impostos](/user-guide/payment-gateways/tax-handling) para unha configuración detallada. Se atendes clientes internacionalmente, considera o [complemento de VAT](/addons/vat) para o cumprimento normativo da UE.

## Revisar os teus prezos {#reviewing-your-pricing}

Despois do lanzamento, revisa os prezos trimestralmente. Observa:

- **Taxa de conversión por plan**: Se Starter converte ben pero Growth non, a diferenza entre eles pode ser demasiado grande
- **Taxa de actualización**: Se poucos clientes actualizan de Starter a Growth, o plan Growth pode non ofrecer suficiente valor adicional
- **Perda de clientes por plan**: Se os clientes anuais cancelan menos, impulsa con máis forza os prezos anuais
- **Prezos da competencia**: Que cobran as alternativas? Estás posicionado correctamente?

## A rede FitSite ata agora {#the-fitsite-network-so-far}

```
Rede FitSite
├── WordPress Multisite (modo subdominio)
├── Ultimate Multisite (configurado + coa marca aplicada)
├── Dominio da plataforma (fitsite.com + SSL comodín)
├── Modelos de sitio (Studio Essential, Gym Pro, Fitness Chain)
├── Produtos
│   ├── FitSite Starter ($49/mes ou $468/ano) + proba de 7 días
│   ├── FitSite Growth ($99/mes ou $948/ano) + taxa de configuración de $99
│   ├── FitSite Pro ($199/mes ou $1,908/ano) + taxa de configuración de $299
│   └── Complementos de pedido + códigos de desconto
├── Fluxo de pago (con interruptor de selección de período)
├── Marca (inicio de sesión, Dashboard, correos, facturas, sitio de marketing)
├── Incorporación de clientes (inicio rápido, correos, recursos de axuda)
├── Estratexia de prezos
│   ├── Descontos anuais (20% de desconto)
│   ├── Taxas de configuración estratéxicas
│   ├── Proba de 7 días en Starter
│   ├── Códigos de desconto para campañas e referencias
│   └── Configuración fiscal
└── Listo para o lanzamento (seguinte lección)
```

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Prezos anuais** cun desconto do 20 % para fomentar o compromiso
- **Taxas de configuración** nos niveis superiores para cubrir o esforzo de incorporación
- **Un período de proba** no plan de entrada para reducir a fricción no rexistro
- **Códigos de desconto estratéxicos** para o lanzamento, referencias e campañas
- **Configuración fiscal** para unha facturación conforme
- **Un marco de revisión de prezos** para a optimización continua

---

**Seguinte:** [Lección 10: Día do lanzamento](lesson-10-launch) -- a lista de comprobación previa ao lanzamento e a posta en marcha.
