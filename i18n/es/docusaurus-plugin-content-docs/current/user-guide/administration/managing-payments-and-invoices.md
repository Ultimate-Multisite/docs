---
title: Gestión de pagos y facturas
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Gestionando Pagos y Facturas

## Configuración de Pagos

Antes de comenzar a recibir pagos, deberás configurar los ajustes relacionados con los pagos. Navega a **Ultimate Multisite → Settings** y haz clic en la pestaña **Payment**.

![Pestaña de configuración de pagos](/img/admin/settings-payments-top.png)

### Opciones Generales de Pago

En la configuración general puedes configurar:

- **Currency** — La moneda predeterminada utilizada para las transacciones
- **Currency Position** — Donde aparece el símbolo de moneda (antes/después del monto)

![Configuración de pasarela de pagos](/img/admin/settings-payments-options.png)

### Pasarelas de Pago

Ultimate Multisite soporta múltiples pasarelas de pago. Puedes habilitar y configurar cada una desde la pestaña de configuración de pagos.

![Configuración de pasarela de pagos](/img/admin/settings-payments-gateways.png)

Las pasarelas disponibles incluyen:

- **Stripe** — Pagos con tarjeta de crédito a través de Stripe
- **PayPal** — Pagos con PayPal
- **Manual** — Para procesamiento de pagos offline o personalizado

Cada pasarela tiene su propia sección de configuración donde ingresas las claves API y otras configuraciones.

![Configuración adicional de pasarela](/img/admin/settings-payments-gateways-2.png)

### Modo Sandbox

Puedes habilitar **Sandbox Mode** para probar tu integración de pagos antes de ir en vivo. Cuando el modo sandbox está activo, no se realizarán cargos reales.

## Visualizando Pagos

Navega a la página **Payments** bajo Ultimate Multisite para ver todas las transacciones en toda tu red.

![Lista de pagos](/img/admin/payments-list.png)

Puedes filtrar los pagos por estado (completado, pendiente, fallido, reembolsado) y buscar transacciones específicas.

Haz clic en un pago para ver todos sus detalles, incluidos los artículos, la membresía asociada, la información del cliente y los datos de la pasarela de pago.

## Facturas

Ultimate Multisite puede generar automáticamente facturas para los pagos. Puedes personalizar la plantilla de factura y el formato de numeración desde la configuración de Pago.

Las opciones de personalización de facturas incluyen:

- **Company name and address** mostrados en las facturas
- **Invoice numbering** formato y secuencia
- **Logo** mostrado en el encabezado de la factura
- **Custom footer text** para términos, notas o información legal

Para personalizar la plantilla de factura, ve a **Ultimate Multisite → Settings → Payment** y busca la configuración relacionada con facturas.
