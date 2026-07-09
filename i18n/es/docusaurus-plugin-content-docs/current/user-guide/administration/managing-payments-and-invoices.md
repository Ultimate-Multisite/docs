---
title: Gestión de pagos y facturas
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestionar pagos y facturas {#managing-payments-and-invoices}

## Configuración de pagos {#payment-settings}

Antes de empezar a recibir pagos, tendrás que configurar los ajustes relacionados con los pagos. Navega a **Ultimate Multisite → Settings** y haz clic en la pestaña **Payment**.

![Pestaña de configuración de pagos](/img/admin/settings-payments-top.png)

Aquí tienes una vista completa de la página de configuración de pagos:

![Página completa de configuración de pagos](/img/admin/settings-payments-full.png)

### Opciones generales de pago {#general-payment-options}

En la configuración general puedes configurar:

- **Moneda** — La moneda predeterminada utilizada para las transacciones
- **Posición de la moneda** — Dónde aparece el símbolo de la moneda (antes/después del importe)

![Configuración de pasarela de pago](/img/admin/settings-payments-options.png)

### Pasarelas de pago {#payment-gateways}

Ultimate Multisite admite varias pasarelas de pago. Puedes activar y configurar cada una desde la pestaña de configuración de Payment.

![Configuración de pasarelas de pago](/img/admin/settings-payments-gateways.png)

Las pasarelas disponibles incluyen:

- **Stripe** — Pagos con tarjeta de crédito mediante Stripe
- **PayPal** — Pagos con PayPal
- **Manual** — Para el procesamiento de pagos sin conexión o personalizado

Cada pasarela tiene su propia sección de configuración donde introduces API keys y otros ajustes.

![Ajustes adicionales de pasarelas](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox {#sandbox-mode}

Puedes activar **Modo Sandbox** para probar tu integración de pagos antes de pasar a producción. Cuando el modo sandbox está activo, no se realizarán cargos reales.

## Ver pagos {#viewing-payments}

Navega a la página **Payments** bajo Ultimate Multisite para ver todas las transacciones de tu red.

![Lista de pagos](/img/admin/payments-list.png)

Puedes filtrar pagos por estado (completados, pendientes, fallidos, reembolsados) y buscar transacciones específicas.

Haz clic en un pago para ver todos sus detalles, incluidos los conceptos, la membresía asociada, la información del cliente y los datos de la pasarela de pago.

## Facturas {#invoices}

Ultimate Multisite puede generar facturas automáticamente para los pagos. Puedes personalizar la plantilla de factura y el formato de numeración desde la configuración de Payment.

Las opciones de personalización de facturas incluyen:

- **Nombre y dirección de la empresa** mostrados en las facturas
- **Numeración de facturas** formato y secuencia
- **Logo** mostrado en el encabezado de la factura
- **Texto de pie de página personalizado** para términos, notas o información legal

Para personalizar la plantilla de factura, ve a **Ultimate Multisite → Settings → Payment** y busca los ajustes relacionados con las facturas.
