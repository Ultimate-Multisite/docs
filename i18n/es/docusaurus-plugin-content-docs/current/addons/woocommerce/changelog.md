---
title: Registro de cambios de la integración de WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integration Changelog

Version 2.0.6 - Released on 2026-01-16
* Improvement: Incluir suscripciones principales en el complemento. Ya no requiere la extensión Woocommerce Subscriptinos.
* Improvement: Cargar traducciones desde glotpress API.
* Fix: error fatal en algunos constructores de páginas.
* fix: Redirección infinita cuando el cliente es miembro del sitio principal.

Version 2.0.5 - Released on 2026-01-09
* Improvement: Cargar traducciones desde glotpress API.
* Fix: error fatal en algunos constructores de páginas.
* fix: Redirección infinita cuando el cliente es miembro del sitio principal.

Version 2.0.4 - Released on 2025-11-14
* Added: Traducciones para muchos más idiomas.
* Changed: Renombrado a Ultimate Multisite: Woocommerce Integration.
* Added: Compatibilidad con Woocommerce 10.2.1.
* Added: Compatibilidad con Woocommerce Subscriptions 7.7.0.
* Fix: Compatibilidad con PHP 8.4
* Fix: Redirigir cuando no existe la página de cuenta WC.

Version 2.0.3 - Released on 2025-08-13
* Changed: Habilitado actualizaciones automáticas con el nuevo marketplace.

Version 2.0.2 - Released on 2025-07-05
* Changed: Renombrado a Multisite Ultimate: Woocommerce Integration.
* Added: Compatibilidad con Woocommerce 9.8.1.
* Added: Compatibilidad con Woocommerce Subscriptions 7.3.0.
* Fix: Cancelar una suscripción por el cliente.
* Fix: Error fatal al usar el bloque de pago.
* Improvement: Ahora compatible con las tablas de pedidos personalizados de alto rendimiento de Woocommerce.
* Fix: Cancelar en el checkout de WooCommerce aún puede actualizar una membresía.

Version 2.0.1 - Released on 2023-08-09
* Added: Compatibilidad con Woocommerce 7.9.0.
* Added: Compatibilidad con Woocommerce Subscriptions 5.3.0.
* Added: Soporte para actualizaciones de membresía.
* Added: Avisos sobre pruebas y tarifas de configuración en Woocommerce.
* Added: Identificación de Ultimate Multisite Woocommerce productos con un valor meta.
* Added: Insertado una corrección única para marcar todos los productos relacionados con Ultimate Multisite Woocommerce.
* Added: Eliminados los productos creados por Ultimate Multisite de la lista de Woocommerce.
* Improvement: Creado un descuento no recurrente de Woocommerce para aplicar al carrito.
* Improvement: Restaurado el descuento recurrente al producto de Woocommerce.
* Improvement: Añadido una etiqueta de descuento recurrente al producto de Woocommerce.
* Improvement: Garantizado el tipo de producto en el checkout.
* Fix: Mantener el estado de membresía durante el proceso de degradación.
* Fix: Verificado si existe una suscripción para evitar errores durante el proceso de cancelación.
* Fix: Añadida la fecha de inicio de suscripción para usar en suscripciones de Woocommerce.
* Internal: Implementado un nuevo proceso de construcción PHP 8.1.

Version 2.0.0 - Complete rewrite.
* Added: Método de cancelación de proceso para eliminar la suscripción woo al cambiar la pasarela o cancelar la membresía;
* Added: Manejador para degradar y actualizar membresías;
* Improvement: Cargar dependencias de woocommerce en el formulario de actualización de cliente en subsitios para permitir la actualización de la cuenta;
* Improvement: Cargar correctamente el carrito de Woocommerce si no existe;
* Improvement: Asegurarnos de estar en las tablas del sitio principal al procesar un checkout;
* Improvement: Hacer que el pedido de renovación de Ultimo se base en el valor del pedido de suscripción de Woocommerce y no en el último pago;
* Fix: Ir al enlace del botón WU Membership;
* Fix: Marcar el pedido Ultimo como pagado cuando la renovación de suscripciones de Woocommerce haya pagado;
* Build: Añadir MPB como constructor;

Version 2.0.0-beta-5 - Released on 2022-01-21
* Internal: Añadido generador de ganchos y filtros;
* Internal: Añadidos stubs de Ultimate Multisite para la calidad de vida del desarrollador;
* Fixed: Prevenir la creación de múltiples productos cuando no sea necesario;

Version 2.0.0-beta.4 - 2021-09-23
* Fix: requerir que WooCommerce esté activo en la red en lugar de solo en el sitio principal;
* Improvement: añadido filtro para permitir que el complemento se use como mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28
* Fix: el control de acceso al panel de control era demasiado agresivo;
* Improvement: Añadidos enlaces de ayuda de WooCommerce al menú superior de Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04
* Improvement: crea pagos pendientes en Ultimo al crear el pedido de renovación de WCS;
* Improvement: pre-llena los campos de facturación con los datos del cliente de Ultimate Multisite;
* Improvement: vuelve a añadir campos de facturación para pasarelas;

Version 2.0.0-beta.1 - 2021-05-04
* Initial beta release

-- Legacy Versions --

Version 1.2.6 - 26/03/2020
* Fixed: Pequeña incompatibilidad con versiones más recientes de WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019
* Fixed: Error en la versión anterior;

Version 1.2.4 - 22/08/2019
* Improved: Añadida opción para redirigir a la pantalla de checkout de WooCommerce inmediatamente después de la integración;

Version 1.2.3 - 26/05/2019
* Fixed: Correo electrónico de pago de WooCommerce desaparecido en algunos casos extremos;

Version 1.2.2 - 27/02/2019
* Added: Soporte para tarifas de configuración en la integración de suscripción de WooCommerce;

Version 1.2.1 - 17/11/2018
* Fixed: Problemas de compatibilidad con Ultimate Multisite versión 1.9.0;

Version 1.2.0 - 10/09/2018
* Improved: Nueva URL de actualizaciones para complementos;
* Added: Soporte beta para suscripción de WooCommerce;

Version 1.1.2 - 11/02/2018
* Fixed: Enlace a Pay generado dinámicamente para responder a cambios en los endpoints de WooCommerce;
* Improved: Ahora forzamos el estado completado para nuestros pedidos cuando se llama payment_completed para asegurarnos de que nuestros ganchos de renovación se ejecuten cuando deben;

Version 1.1.1 - 24/01/2018
* Fixed: Ahora también verifica si WooCommerce está activado solo en el sitio principal;
* Fixed: Incluidas sobrecargas para permitir que la creación de pedidos incluya impuestos;

Version 1.1.0 - 04/11/2017
* Fixed: Ahora la etiqueta del botón de integración cambia realmente para reflejar la configuración. Requiere Ultimate Multisite 1.5.0;
* Fixed: La integración de WooCommerce ahora funciona incluso si WooCommerce no está activo en la red y solo está activado en el sitio principal;

1.0.0 - Initial Release
