---
title: Registro de cambios de Captcha
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Registro de cambios de Captcha

Versión: 1.3.2 - Lanzado el 2026-01-27
* Corregido: Cap widget no se muestra en formularios de pago usando Elementor u otros constructores de páginas
* Corregido: el elemento personalizado cap-widget está siendo eliminado por la sanitización wp_kses()
* Mejorado: Usar contenido llamable para el campo captcha de pago para evitar el filtrado HTML
* Mejorado: JavaScript simplificado con respaldo para casos extremos

Versión: 1.3.1 - Lanzado el 2026-01-26
* Corregido: El modo invisible de Cap Captcha no se resuelve automáticamente en formularios de pago dinámicos de Ultimate Multisite
* Mejorado: El script de pago Cap ahora usa MutationObserver para detectar widgets cargados dinámicamente
* Mejorado: Se añadió la interceptación del botón de pago para esperar el token antes de la presentación

Versión: 1.3.0 - Lanzado el 2026-01-27
* Nuevo: Integración de bloques de WooCommerce en el pago con interceptación de la obtención de Store API
* Nuevo: Soporte de captcha invisible para el pago de WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nuevo: Página de configuración independiente para usar sin Ultimate Multisite
* Nuevo: Jetpack Autoloader para la prevención de conflictos de dependencias
* Corregido: hCaptcha no se muestra en el pago dinámico de Ultimate Multisite (contenido cargado por AJAX)
* Corregido: Captcha no se actualiza/reinicia cuando ocurren errores de validación del formulario
* Corregido: hCaptcha no se muestra en la página de pago de WooCommerce
* Corregido: Error de clase reCAPTCHA no encontrada (se añadió la biblioteca PHP google/recaptcha)
* Mejorado: Detección de errores mediante ganchos de WordPress, MutationObserver e interceptación AJAX
* Mejorado: Las descripciones de configuración ahora incluyen URLs de panel de control para las claves API

Versión: 1.2.2 - Lanzado el 2026-01-24
* Corregido: Captcha no se muestra en el elemento de formulario de inicio de sesión de Ultimate Multisite (desajuste del nombre del filtro del formulario)
* Corregido: El HTML del widget Cap está siendo eliminado por la sanitización wp_kses()
* Corregido: Los selectores de JavaScript no encuentran formularios con barras diagonales en los IDs de los elementos
* Añadido: Gancho de filtro wu_kses_allowed_html para classaddons para ampliar las etiquetas HTML permitidas
* Eliminado: Archivos JavaScript de código muerto reemplazados por scripts específicos del proveedor

Versión: 1.2.1 - Lanzado el 2026-01-23
* Corregido: La validación del token de Cap Captcha falla en entornos multisite (ahora usa transitorios a nivel de red)
* Corregido: Captcha ahora se muestra de manera consistente para todos los usuarios independientemente de su estado de inicio de sesión
* Corregido: Desajuste entre la visualización y la validación del captcha que causó fallos en el pago

Versión: 1.2.0 - Lanzado el 2026-01-21
* Nuevo: Cap Captcha - captcha de prueba de trabajo autoalojado, habilitado por defecto al activarse
* Nuevo: Protección sin configuración - activa el complemento y ya estás protegido
* Nuevo: Arquitectura polimórfica de proveedores de captcha para una extensibilidad sencilla
* Nuevo: Protección de pago de WooCommerce Store API contra ataques de prueba de tarjetas
* Nuevo: Panel de seguimiento de estadísticas que muestra desafíos, verificaciones y ataques bloqueados
* Nuevo: Preajustes de nivel de seguridad (Rápido, Medio, Máximo) para la dificultad de Cap Captcha
* Nuevo: Clases base abstractas para proveedores de reCAPTCHA y hCaptcha
* Mejorado: Código refactorizado en clases de proveedores modulares
* Mejorado: Mejor separación de responsabilidades con una clase de gestor dedicada
* Corregido: Mejoras de seguridad para la sanitización de la variable $_SERVER
* Corregido: Configuración de pruebas PHPUnit para las convenciones de nomenclatura de WordPress

Versión: 1.0.1 - Lanzado el 2025-09-28
* Renombrar prefijo a ultimate-multisite; actualizar dominio de texto; aumento de versión.
