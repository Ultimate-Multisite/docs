---
title: Registro de cambios de integración de WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Registro de cambios de WooCommerce Integration

Versión 2.2.0 - Lanzada el 2026-07-01
* Nuevo: Los importes de impuestos de Ultimate Multisite ahora aparecen como líneas de tarifa separadas de WooCommerce en el checkout, haciendo que los totales de impuestos sean más claros antes del pago.
* Nuevo: Se añadió un ajuste opcional "Suspend Memberships Immediately on Failed Renewals" y el filtro `wu_woo_suspend_on_payment_failure` para sitios que quieren suspensión por renovación fallida durante la ventana de reintentos de WooCommerce Subscriptions.
* Corrección: Se conciliaron los estados de WooCommerce Subscription que podían permanecer desincronizados con las membresías de Ultimate Multisite después de renovaciones fallidas o recuperadas.
* Corrección: Se añadió la moneda de la tienda WooCommerce a la lista de monedas de Ultimate Multisite cuando faltaba.
* Corrección: Se conservaron los detalles de facturación del cliente al redirigir suscriptores al checkout de WooCommerce.
* Mejorado: Se añadió compatibilidad con Jetpack Autoloader 5.
* Mejorado: Se limpió la generación del paquete de lanzamiento para que los zips de GitHub y del marketplace eviten directorios de preparación anidados y archivos de desarrollo.

Versión 2.0.6 - Lanzada el 2026-01-16
* Mejora: Incluir suscripciones principales en el addon. Ya no requiere la extensión Woocommerce Subscriptinos.

Versión 2.0.5 - Lanzada el 2026-01-09
* Mejora: Cargar traducciones desde la API de glotpress.
* Corrección: Error fatal en algunos constructores de páginas.
* Corrección: Redirección infinita cuando el cliente es miembro del sitio principal.

Versión 2.0.4 - Lanzada el 2025-11-14
* Añadido: Traducciones para muchos más idiomas.
* Cambiado: Renombrado a Ultimate Multisite: Woocommerce Integration.
* Añadido: Compatibilidad con Woocommerce 10.2.1.
* Añadido: Compatibilidad con Woocommerce Subscriptions 7.7.0.
* Corrección: Compatibilidad con PHP 8.4
* Corrección: Redirección, pero cuando no existe ninguna página de cuenta de WC.

Versión 2.0.3 - Lanzada el 2025-08-13
* Cambiado: Se habilitaron las actualizaciones automáticas con el nuevo marketplace.

Versión 2.0.2 - Lanzada el 2025-07-05
* Cambiado: Renombrado a Multisite Ultimate: Woocommerce Integration.
* Añadido: Compatibilidad con Woocommerce 9.8.1.
* Añadido: Compatibilidad con Woocommerce Subscriptions 7.3.0.
* Corrección: Cancelación de una suscripción por parte del cliente.
* Corrección: Error fatal al usar el bloque de checkout.
* Mejora: Ahora compatible con tablas de pedidos personalizadas de alto rendimiento de Woocommerce.
* Corrección: Cancelar en el checkout de WooCommerce aún puede mejorar una membresía.

Versión 2.0.1 - Lanzada el 2023-08-09

* Añadido: Compatibilidad con Woocommerce 7.9.0.
* Añadido: Compatibilidad con Woocommerce Subscriptions 5.3.0.
* Añadido: Soporte para actualizaciones de membresía.
* Añadido: Avisos sobre pruebas y cuotas de configuración en Woocommerce.
* Añadido: Identificación de productos Woocommerce de Ultimate Multisite con un valor meta.
* Añadido: Se insertó una corrección única para marcar todos los productos Woocommerce relacionados con Ultimate Multisite.
* Añadido: Se eliminaron de la lista de Woocommerce los productos creados por Ultimate Multisite.
* Mejora: Se creó un descuento Woocommerce no recurrente para aplicar al carrito.
* Mejora: Se restauró el descuento recurrente al producto Woocommerce.
* Mejora: Se añadió una etiqueta de descuento recurrente al producto Woocommerce.
* Mejora: Se aseguró el tipo de producto en el checkout.
* Corrección: Se mantuvo el estado de la membresía durante el proceso de degradación.
* Corrección: Se comprobó si existe una suscripción para evitar errores durante el proceso de cancelación.
* Corrección: Se añadió la fecha de inicio de suscripción para usar en suscripciones de Woocommerce.
* Interno: Se implementó un nuevo proceso de compilación de PHP 8.1.

Versión 2.0.0 - Reescritura completa.

* Añadido: Método de proceso de cancelación para eliminar la suscripción woo al cambiar la pasarela o cancelar la membresía;
* Añadido: Gestor para degradar y mejorar membresías;
* Mejora: Cargar dependencias de woocommerce en el formulario de actualización del cliente en subsitios para permitir la actualización de la cuenta;
* Mejora: Corregir la carga del carrito de Woocommerce si no existe;
* Mejora: Asegurar que estamos en las tablas del sitio principal al procesar un checkout;
* Mejora: Hacer que el pedido de renovación de Ultimo se base en el valor del pedido de suscripción de Woocommerce y no en el último pago;
* Corrección: Enlace del botón Ir a Membresía de WU;
* Corrección: Establecer el pedido de Ultimo como pagado cuando la renovación de suscripciones de Woocommerce se ha pagado;
* Compilación: Añadir MPB como constructor;

Versión 2.0.0-beta-5 - Lanzada el 2022-01-21

* Interno: Se añadió generador de hooks y filtros;
* Interno: Se añadieron stubs de Ultimate Multisite para calidad de vida del desarrollador;
* Corregido: Evitar la creación de múltiples productos cuando no es necesario;

Versión 2.0.0-beta.4 - 2021-09-23

* Corrección: requerir que WooCommerce esté activo en la red en lugar de solo en el sitio principal;
* Mejora: añadido filtro para permitir que el add-on se use como un mu-plugin;

Versión 2.0.0-beta.3 - 2021-05-28

* Corrección: el control de acceso al dashboard era demasiado agresivo;
* Mejora: Se añadieron enlaces de ayuda de WooCommerce al menú superior de Ultimate Multisite;

Versión 2.0.0-beta.2 - 2021-05-04

* Mejora: crea pagos pendientes en Ultimo al crear el pedido de renovación de WCS;
* Mejora: prerrellena los campos de facturación con datos del cliente de Ultimate Multisite;
* Mejora: vuelve a añadir campos de facturación para pasarelas;

Versión 2.0.0-beta.1 - 2021-05-04

* Lanzamiento beta inicial

-- Versiones heredadas --

Versión 1.2.6 - 26/03/2020

* Corregido: Pequeña incompatibilidad con versiones más recientes de WooCommerce Subscriptions;

Versión 1.2.5 - 26/08/2019

* Corregido: Error en la versión anterior;

Versión 1.2.4 - 22/08/2019

* Mejorado: Se añadió opción para redirigir a la pantalla de checkout de WooCommerce inmediatamente después de la integración;

Versión 1.2.3 - 26/05/2019

* Corregido: El correo electrónico de pago para WooCommerce desaparecía en algunos casos extremos;

Versión 1.2.2 - 27/02/2019

* Añadido: Soporte para cuotas de configuración en la integración de WooCommerce Subscription;

Versión 1.2.1 - 17/11/2018

* Corregido: Problemas de compatibilidad con Ultimate Multisite versión 1.9.0;

Versión 1.2.0 - 10/09/2018

* Mejorado: Nueva URL de actualizaciones para add-ons;
* Añadido: Soporte beta para WooCommerce Subscription;

Versión 1.1.2 - 11/02/2018

* Corregido: Enlace para pagar generado dinámicamente para responder a cambios en los endpoints de WooCommerce;
* Mejorado: Ahora forzamos el estado completado para nuestros pedidos cuando se llama a payment_completed para asegurarnos de que nuestros hooks de renovación se ejecuten cuando deben;

Versión 1.1.1 - 24/01/2018

* Corregido: Ahora también comprueba si WooCommerce acaba de activarse en el sitio principal;
* Corregido: Se incluyeron sobrecargas para permitir que la creación de pedidos incluya impuestos;

Versión 1.1.0 - 04/11/2017

* Corregido: Ahora la etiqueta del botón de integración cambia realmente para reflejar los ajustes. Requiere Ultimate Multisite 1.5.0;
* Corregido: WooCommerce Integration ahora funciona incluso si WooCommerce no está activo en la red y está activado solo en el sitio principal;

1.0.0 - Lanzamiento inicial
