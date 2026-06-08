---
title: 'Lección 6: La experiencia de registro'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lección 6: La Experiencia de Registro

El flujo de pago es donde el interés se convierte en ingresos. Un proceso de registro confuso o genérico hace que los clientes se vayan. Un flujo específico para un nicho que hable su idioma y se sienta natural, los convierte.

## Dónde nos quedamos

FitSite ya tiene configuradas las plantillas y los planes. Ahora construiremos la experiencia de registro y pago que convierte a los dueños de estudios de fitness en clientes de pago.

## Entendiendo el Flujo de Registro

Los formularios de checkout de Ultimate Multisite son formularios de varios pasos totalmente personalizables. Para FitSite, queremos un flujo que:

1. Se sienta diseñado para negocios de fitness.
2. Recoja solo lo necesario.
3. Lleve al cliente a un sitio funcional lo más rápido posible.

Consulta [El Flujo de Registro](/user-guide/configuration/the-registration-flow) para la referencia técnica completa.

## Diseñando el Checkout de FitSite

Navega a **Ultimate Multisite > Checkout Forms** y crea un nuevo formulario.

### Paso 1: Selección de Plan

Lo primero que debe ver un dueño de estudio de fitness son los planes, presentados en términos que entienda.

- Añade un campo de **Tabla de Precios** (Pricing Table)
- Configúralo para mostrar los tres planes de FitSite
- Las descripciones de los planes que escribiste en la Lección 5 aparecen aquí; asegúrate de que hablen de las necesidades del negocio de fitness, no de características técnicas.

:::tip El idioma del nicho importa
"1 GB de almacenamiento" no significa nada para un dueño de gimnasio. "Todo lo que necesitas para un sitio web profesional de estudio" significa todo. Escribe las descripciones de los planes en el lenguaje de tu cliente.
:::

### Paso 2: Selección de Plantilla

Después de elegir un plan, el cliente selecciona su plantilla de inicio.

- Añade un campo de **Selección de Plantilla** (Template Selection)
- Las plantillas disponibles se filtran según el plan que seleccionaron (configurado en la Lección 5).
- Cada plantilla debe tener una imagen de vista previa que muestre un diseño específico para fitness.

### Paso 3: Creación de Cuenta

Mantenlo mínimo. Recoge solo:

- Dirección de correo electrónico
- Contraseña
- Nombre del estudio/negocio (esto se convierte en el nombre de su sitio)

No pidas información que no necesites en el registro. Cada campo extra reduce las conversiones.

### Paso 4: Configuración del Sitio

- **Título del sitio**: Rellénalo automáticamente con el nombre del estudio ingresado en el Paso 3.
- **URL del sitio**: Genera automáticamente a partir del nombre del estudio (ej. `ironworks.fitsite.com`).

### Paso 5: Pago

- Añade el campo de **Pago** (Payment)
- Configura tu pasarela de pago (se recomienda [Stripe](/user-guide/payment-gateways/stripe) para facturación por suscripción).
- Si creaste complementos de pedido (order bumps) en la Lección 5, añade un campo de **Complemento de Pedido** (Order Bump) antes del paso de pago.

### Paso 6: Confirmación

- Personaliza el mensaje de confirmación con lenguaje específico para fitness.
- Ejemplo: "Su sitio web de estudio de fitness se está creando. Será redirigido a su nuevo sitio en unos segundos."

## Añadiendo un Selector de Periodo

Si configuraste variaciones de precios en tus planes (mensual vs. anual), añade un campo de **Selección de Periodo** (Period Selection) al formulario de checkout para que los clientes puedan cambiar entre los periodos de facturación. Consulta [Formularios de Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para obtener instrucciones.

## Configurando el Pago

Si aún no has configurado una pasarela de pago:

1. Navega a **Ultimate Multisite > Settings > Payment Gateways**
2. Sigue la [guía de configuración de Stripe](/user-guide/payment-gateways/stripe) o la de tu pasarela preferida.
3. Prueba un flujo de checkout completo con un pago de prueba.

Consulta [Recibir Pagos](/user-guide/payment-gateways/getting-paid) para obtener detalles sobre cómo fluyen los pagos a tu cuenta.

## Probando el Flujo

Antes de continuar, completa un registro de prueba completo:

1. Abre el formulario de checkout en una ventana de navegador incógnito/privada.
2. Selecciona un plan.
3. Elige una plantilla.
4. Crea una cuenta.
5. Completa el pago (usa el modo de prueba).
6. Verifica que el sitio se crea con la plantilla correcta.

Verifica que:

- [ ] Las descripciones de los planes son claras y específicas del nicho.
- [ ] Las vistas previas de las plantillas muestran diseños apropiados para fitness.
- [ ] La URL del sitio se genera correctamente a partir del nombre del estudio.
- [ ] El pago se procesa con éxito.
- [ ] El cliente aterriza en un sitio funcional con la plantilla seleccionada.
- [ ] Los correos electrónicos de confirmación utilizan lenguaje específico para fitness.

## La Red FitSite hasta ahora

```
FitSite Network
├── WordPress Multisite (modo de subdominio)
├── Ultimate Multisite (configurado)
├── Alojamiento con SSL comodín + mapeo de dominio
├── Plantillas de Sitio (Studio Essential, Gym Pro, Fitness Chain)
├── Productos (Starter, Growth, Pro + Complementos de Pedido)
├── Flujo de Checkout
│   ├── Selección de plan con descripciones específicas del nicho
│   ├── Selección de plantilla con vistas previas de fitness
│   ├── Creación de cuenta mínima
│   ├── Pago vía Stripe
│   └── Confirmación específica de fitness
└── Listo para marca (próxima lección)
```

## Lo que construimos en esta lección

- **Un formulario de checkout de varios pasos** adaptado para dueños de estudios de fitness.
- **Lenguaje específico del nicho** en todo el flujo de registro.
- **Fricción mínima**: solo campos esenciales, camino rápido hacia un sitio funcional.
- **Integración de pagos** con verificación de prueba.
- **Un flujo de extremo a extremo probado**, desde la selección del plan hasta el sitio funcional.

---

**Siguiente:** [Lección 7: Hazlo Tuyo](lesson-7-branding) — haremos la marca blanca de la plataforma y estableceremos FitSite como una marca.
