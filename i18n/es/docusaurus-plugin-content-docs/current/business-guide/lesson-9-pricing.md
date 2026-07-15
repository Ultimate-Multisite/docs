---
title: 'Lección 9: Fijación de precios para obtener ganancias'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lección 9: Precios para obtener ganancias

En la Lección 5 establecimos los precios iniciales para los planes de FitSite. Ahora refinaremos la estrategia de precios con técnicas que aumentan los ingresos, fomentan las mejoras (upgrades) y reducen la tasa de abandono (churn).

## Dónde nos quedamos {#where-we-left-off}

FitSite ya tiene planes, plantillas, proceso de pago (checkout), marca y proceso de incorporación (onboarding) implementados. El precio inicial era de $49/$99/$199 por mes. Ahora haremos que esos precios trabajen más duro.

## Principios de precios para plataformas de nicho {#pricing-principles-for-niche-platforms}

### Precio basado en el valor, no en el costo {#price-on-value-not-cost}

Sus costos de alojamiento (hosting) podrían ser de $5 a $15 por sitio de cliente. Eso no significa que su precio deba ser de $20. Usted no está vendiendo alojamiento. Usted está vendiendo:

- Un sitio web profesional de fitness que costaría entre $2,000 y $5,000 de construir a medida
- Mantenimiento continuo, actualizaciones y seguridad que no tienen que preocuparse
- Funcionalidades específicas del nicho que los constructores genéricos no ofrecen
- La credibilidad de una plataforma construida para su industria

Establezca el precio basándose en el valor que entrega, no en el costo de entregarlo.

### Anclaje a alternativas {#anchor-to-alternatives}

Cuando un dueño de estudio de fitness evalúa FitSite, lo compara con:

- **Contratar un desarrollador web**: $2,000-$5,000 por adelantado + $50-$100/mes de mantenimiento
- **Wix/Squarespace**: $16-$45/mes, pero sin funciones específicas de fitness, y deben construirlo ellos mismos
- **No hacer nada**: Pérdida de miembros que no pueden encontrarlos en línea

Con $49-$199/mes, FitSite es más barato que un desarrollador, más capaz que los constructores genéricos e infinitamente mejor que no tener sitio web.

## Implementación de variaciones de precios {#implementing-price-variations}

Los precios anuales fomentan el compromiso y reducen la tasa de abandono. Navegue a la pestaña **Price Variations** de cada plan y añada opciones anuales:

| Plan | Mensual | Anual (por mes) | Total Anual | Ahorro |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mes | $39/mes | $468/año | 20% de descuento |
| Growth | $99/mes | $79/mes | $948/año | 20% de descuento |
| Pro | $199/mes | $159/mes | $1,908/año | 20% de descuento |

Añada un campo de **Period Selection** a su formulario de checkout para que los clientes puedan alternar entre facturación mensual y anual. Consulte [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Por qué funcionan los precios anuales {#why-annual-pricing-works}

- **Para usted**: Efectivo por adelantado, menor tasa de abandono (los clientes que pagan anualmente tienen menos probabilidades de cancelar a mitad de período)
- **Para ellos**: Ahorros reales, previsibilidad presupuestaria

## Tarifas de configuración (Setup Fees) {#setup-fees}

Considere una tarifa de configuración única para los planes que incluyen configuración práctica:

- **Starter**: Sin tarifa de configuración (elimina barreras de entrada)
- **Growth**: Tarifa de configuración de $99 (cubre la configuración de dominio personalizado y la consulta inicial)
- **Pro**: Tarifa de configuración de $299 (cubre la configuración de múltiples ubicaciones y la llamada de incorporación)

Configure las tarifas de configuración en la sección de precios de cada plan. Consulte [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) para obtener detalles.

## Períodos de prueba (Trial Periods) {#trial-periods}

Ofrecer una prueba reduce la fricción de registro, pero introduce el riesgo de no conversión. Para FitSite:

- **Prueba gratuita de 7 días** solo en el plan Starter
- Sin prueba en Growth y Pro (estos clientes están más comprometidos y esperan pagar)

Configure la prueba en la sección de precios del plan Starter habilitando el interruptor **Offer Trial** y estableciendo la duración en 7 días.

### Cómo hacer que las pruebas conviertan {#making-trials-convert}

Una prueba solo funciona si el cliente experimenta valor durante el período de prueba. Su secuencia de incorporación (onboarding) (Lección 8) es fundamental aquí: los correos de bienvenida deben programarse para impulsar la participación dentro de la ventana de 7 días.

## Códigos de descuento {#discount-codes}

Cree códigos de descuento estratégicos para propósitos específicos:

- **FITLAUNCH** — 30% de descuento en los primeros 3 meses (para promoción de lanzamiento)
- **ANNUAL20** — 20% de descuento en planes anuales (si aún no están descontados)
- **REFERRAL** — 1 mes gratis (para referencias de clientes)

Vaya a **Ultimate Multisite > Discount Codes** para crearlos. Consulte [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) para la guía completa.

:::tip No descuente por defecto
Los descuentos deben ser herramientas estratégicas, no elementos permanentes. Si todos reciben un descuento, no es un descuento, es su precio real. Úselos para campañas específicas, referencias y promociones por tiempo limitado.
:::

## Manejo de impuestos (Tax Handling) {#tax-handling}

Si opera en una jurisdicción que requiere la recaudación de impuestos:

1. Configure las tasas de impuestos en **Ultimate Multisite > Settings > Taxes**
2. Aplique categorías de impuestos a sus planes
3. Asegúrese de que las facturas muestren los impuestos correctamente

Consulte [Tax Handling](/user-guide/payment-gateways/tax-handling) para una configuración detallada. Si atiende a clientes internacionalmente, considere el [VAT addon](/addons/vat) para el cumplimiento de la UE.

## Revisando sus precios {#reviewing-your-pricing}

Después del lanzamiento, revise los precios trimestralmente. Observe:

- **Tasa de conversión por plan**: Si Starter convierte bien, pero Growth no, la brecha entre ellos puede ser demasiado grande
- **Tasa de mejora (Upgrade rate)**: Si pocos clientes pasan de Starter a Growth, es posible que el plan Growth no ofrezca suficiente valor adicional
- **Tasa de abandono por plan**: Si los clientes anuales abandonan menos, impulse los precios anuales con más fuerza
- **Precios de la competencia**: ¿Cuánto cobran las alternativas? ¿Está posicionado correctamente?

## La red FitSite hasta ahora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (modo de subdominio)
├── Ultimate Multisite (configurado + con marca)
├── Platform Domain (fitsite.com + SSL comodín)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mes o $468/año) + prueba de 7 días
│   ├── FitSite Growth ($99/mes o $948/año) + tarifa de configuración de $99
│   ├── FitSite Pro ($199/mes o $1,908/año) + tarifa de configuración de $299
│   └── Order Bumps + Códigos de descuento
├── Checkout Flow (con interruptor de selección de período)
├── Branding (login, dashboard, emails, facturas, sitio de marketing)
├── Customer Onboarding (Quick Start, emails, recursos de ayuda)
├── Estrategia de precios
│   ├── Descuentos anuales (20% de descuento)
│   ├── Tarifas de configuración estratégicas
│   ├── Prueba de 7 días en Starter
│   ├── Códigos de descuento para campañas y referencias
│   └── Configuración de impuestos
└── Listo para el lanzamiento (próxima lección)
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Precios anuales** con un 20% de descuento para fomentar el compromiso
- **Tarifas de configuración** en niveles superiores para cubrir el esfuerzo de incorporación
- **Un período de prueba** en el plan de nivel de entrada para reducir la fricción de registro
- **Códigos de descuento estratégicos** para lanzamiento, referencias y campañas
- **Configuración de impuestos** para una facturación conforme
- **Un marco de revisión de precios** para la optimización continua

---

**Siguiente:** [Lección 10: Día del lanzamiento](lesson-10-launch) — la lista de verificación previa al lanzamiento y la puesta en marcha.
