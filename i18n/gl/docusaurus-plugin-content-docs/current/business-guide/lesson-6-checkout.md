---
title: 'Lección 6: A experiencia de rexistro'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lección 6: A experiencia de rexistro

O fluxo de checkout é onde o interese se converte en ingresos. Un proceso de rexistro confuso ou xenérico perde clientes. Un fluxo específico de nicho que fala a súa lingua e resulta sinxelo convérteos.

## Onde o deixamos {#where-we-left-off}

FitSite ten modelos e plans configurados. Agora construímos a experiencia de rexistro e checkout que converte os propietarios de estudos de fitness en clientes de pago.

## Comprender o fluxo de rexistro {#understanding-the-registration-flow}

Os formularios de checkout de Ultimate Multisite son formularios de varios pasos totalmente personalizables. Para FitSite, queremos un fluxo que:

1. Pareza creado para negocios de fitness
2. Recolla só o necesario
3. Leve o cliente a un sitio funcional o máis rápido posible

Consulta [O fluxo de rexistro](/user-guide/configuration/the-registration-flow) para a referencia técnica completa.

## Deseñar o checkout de FitSite {#designing-the-fitsite-checkout}

Navega a **Ultimate Multisite > Checkout Forms** e crea un novo formulario.

### Paso 1: Selección do plan {#step-1-plan-selection}

O primeiro que debería ver o propietario dun estudo de fitness son os plans, presentados en termos que entenda.

- Engade un campo **Táboa de prezos**
- Configúrao para mostrar os tres plans de FitSite
- As descricións dos plans que escribiches na Lección 5 aparecen aquí -- asegúrate de que falen das necesidades dos negocios de fitness, non de funcións técnicas

:::tip Linguaxe de nicho importa
"1 GB storage" non significa nada para o propietario dun ximnasio. "Todo o que necesitas para un sitio web profesional de estudo" significa todo. Escribe descricións de plans na lingua do teu cliente.
:::

### Paso 2: Selección de modelo {#step-2-template-selection}

Despois de escoller un plan, o cliente elixe o seu modelo inicial.

- Engade un campo **Selección de modelo**
- Os modelos dispoñibles fíltranse polo plan que seleccionou (configurado na Lección 5)
- Cada modelo debería ter unha imaxe de vista previa que mostre un deseño específico de fitness

### Paso 3: Creación da Account {#step-3-account-creation}

Mantén isto ao mínimo. Recolle só:

- Enderezo de correo electrónico
- Contrasinal
- Nome do estudo/negocio (isto convértese no nome do seu sitio)

Non pidas información que non necesites no rexistro. Cada campo extra reduce as conversións.

### Paso 4: Configuración do sitio {#step-4-site-setup}

- **Título do sitio**: Encher previamente a partir do nome do estudo introducido no Paso 3
- **URL do sitio**: Xerar automaticamente a partir do nome do estudo (p. ex., `ironworks.fitsite.com`)

### Paso 5: Payment {#step-5-payment}

- Engade o campo **Payment**
- Configura a túa pasarela de pago ([Stripe](/user-guide/payment-gateways/stripe) recoméndase para a facturación de subscricións)
- Se creaches incrementos de pedido na Lección 5, engade un campo **Incremento de pedido** antes do paso de pago

### Paso 6: Confirmación {#step-6-confirmation}

- Personaliza a mensaxe de confirmación con linguaxe específica de fitness
- Exemplo: "O sitio web do teu estudo de fitness está a ser creado. Serás redirixido ao teu novo sitio nuns segundos."

## Engadir un interruptor de selección de período {#adding-a-period-selection-toggle}

Se configuraches variacións de prezo nos teus plans (mensual vs. anual), engade un campo **Selección de período** ao formulario de checkout para que os clientes poidan alternar entre períodos de facturación. Consulta [Formularios de checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para ver instrucións.

## Configurar Payment {#configuring-payment}

Se aínda non configuraches unha pasarela de pago:

1. Navega a **Ultimate Multisite > Settings > Payment Gateways**
2. Sigue a [guía de configuración de Stripe](/user-guide/payment-gateways/stripe) ou a pasarela que prefiras
3. Proba un fluxo de checkout completo cun pago de proba

Consulta [Cobrar](/user-guide/payment-gateways/getting-paid) para obter detalles sobre como os pagos flúen á túa conta.

## Probar o fluxo {#testing-the-flow}

Antes de continuar, completa un rexistro de proba completo:

1. Abre o formulario de checkout nunha xanela de navegador de incógnito/privada
2. Selecciona un plan
3. Elixe un modelo
4. Crea unha Account
5. Completa o pago (usa o modo de proba)
6. Verifica que o sitio se crea co modelo correcto

Comproba que:

- [ ] As descricións dos plans son claras e específicas do nicho
- [ ] As vistas previas dos modelos mostran deseños axeitados para fitness
- [ ] A URL do sitio xérase correctamente a partir do nome do estudo
- [ ] O pago procésase correctamente
- [ ] O cliente chega a un sitio funcional co modelo seleccionado
- [ ] Os correos electrónicos de confirmación usan linguaxe específica de fitness

## A rede FitSite ata agora {#the-fitsite-network-so-far}

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

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Un formulario de checkout de varios pasos** adaptado a propietarios de estudos de fitness
- **Linguaxe específica de nicho** en todo o fluxo de rexistro
- **Fricción mínima** -- só campos esenciais, camiño rápido a un sitio funcional
- **Integración de Payment** con verificación de proba
- **Un fluxo probado de extremo a extremo** desde a selección do plan ata un sitio funcional

---

**Seguinte:** [Lección 7: Facelo teu](lesson-7-branding) -- poñemos a plataforma en marca branca e establecemos FitSite como marca.
