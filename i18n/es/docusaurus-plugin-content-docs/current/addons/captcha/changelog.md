---
title: Registro de cambios de Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Registro de cambios de Captcha

Versión: 1.5.0 - Publicada el 2026-05-22
* Nuevo: Limitador de tasa de detención total — cuenta cada GET y POST en superficies protegidas por captcha (wp-login / registro / contraseña perdida / comentarios, WooCommerce my-account / checkout / pay-for-order, checkout / inline-login de Ultimate Multisite) y responde con HTTP 429, un `Retry-After` header y una espera tarpit aleatorizada (1–5 s, con límite estricto de 15 s).
* Nuevo: Ajustes `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` para ajustar la ventana tarpit.
* Nuevo: Filtro `wu_cap_rate_limit_whitelist_ip` para eximir rangos de IP de confianza.
* Nuevo: Acción `wu_cap_rate_limit_will_block` que se ejecuta inmediatamente antes de que se envíe la respuesta de detención total.
* Nuevo: Detección de IP de cliente resistente a suplantación. `Captcha_Core::get_client_ip()` (la fuente de verdad para las claves de bucket del limitador de tasa, `remoteip` de siteverify de captcha y hashes de IP de estadísticas) ahora aplica un modelo de confianza estricto: REMOTE_ADDR es la base, `CF-Connecting-IP` se respeta solo cuando el par inmediato está dentro de un rango IP actual de Cloudflare, y `X-Forwarded-For` se respeta solo cuando el par inmediato está en la lista de proxies de confianza configurada por el administrador, con un recorrido de derecha a izquierda que omite saltos de confianza/CF antes de establecer la IP del visitante.
* Nuevo: Ajuste `cap_trust_cloudflare_headers` (desactivado por defecto) — habilita la confianza en `CF-Connecting-IP` cuando estás detrás de Cloudflare. El plugin incluye una instantánea CIDR de Cloudflare integrada y la actualiza semanalmente mediante wp-cron, con reserva integrada si la actualización falla.
* Nuevo: Ajuste `cap_trusted_proxies` — área de texto de CIDR o IP simples (una por línea, se permiten comentarios con `#`) que lista tus propios proxies / balanceadores de carga de primera línea. Sin esto, `X-Forwarded-For` se ignora incluso cuando el limitador de tasa está habilitado.
* Nuevo: Detección automática al habilitar por primera vez de una probable postura de Cloudflare / proxy con un aviso de administración de un clic "Aplicar ajustes detectados". El plugin nunca sobrescribe tus valores guardados; si el tráfico posterior sugiere que tu configuración ya no coincide con la realidad (p. ej., Cloudflare cambió rangos CIDR y tu CIDR de proxy ahora está obsoleto), aparece un aviso de discrepancia no descartable con la actualización recomendada.
* Corregido: El modo invisible ya no degrada silenciosamente `cap_security_level` a FAST — se respeta el nivel configurado por el administrador. Hay disponible un nuevo filtro `wu_cap_server_security_level` para sitios que quieran lógica personalizada.
* Corregido: El contador de estadísticas `rate_limits_triggered` ahora se incrementa en cada bloqueo, no solo en la rara ruta de respaldo posterior al éxito.
* Corregido: `Captcha_Core::get_client_ip()` ahora es la única fuente de verdad para la atribución de IP de visitante en el limitador de tasa, proveedores de captcha (siteverify de reCAPTCHA + hCaptcha) y estadísticas — cerrando un vector de suplantación donde las solicitudes directas al servidor de origen que llevaban un `CF-Connecting-IP` header falsificado se habrían agrupado por la IP suplantada en lugar del par real.
* Corregido: La puerta de limitación de tasa del checkout clásico de WooCommerce ahora se ejecuta en `template_redirect` (prioridad 1) en lugar de `woocommerce_before_checkout_form`. El hook a nivel de formulario nunca se ejecuta cuando el carrito está vacío, por lo que el tráfico masivo que nunca añade un producto estaba omitiendo el limitador por completo.
* Corregido: La puerta de limitación de tasa de pay-for-order de WooCommerce ahora se ejecuta en `template_redirect` en lugar de `woocommerce_before_pay_action`. Este último solo se ejecuta después de que `wp_verify_nonce('woocommerce-pay')` tenga éxito, lo que significa que los atacantes no autenticados (el modelo de amenaza real) nunca activaban el limitador.
* Corregido: La puerta de limitación de tasa del checkout de WooCommerce Store API (bloques) ahora se ejecuta en `rest_pre_dispatch` en lugar de `woocommerce_store_api_checkout_update_order_from_request`. Este último solo se ejecuta después de que Store API valida el carrito y los campos de facturación, por lo que los bots no autenticados recibían un 400 del validador y nunca activaban el limitador.
* Corregido: La puerta de limitación de tasa de inline-login de Ultimate Multisite ahora se ejecuta en `wu_ajax_nopriv_wu_inline_login` con prioridad 1 (y el reflejo con sesión iniciada) en lugar de `wu_before_inline_login`. Este último solo se ejecuta después de que `check_ajax_referer('wu_checkout')` tenga éxito, por lo que los bots no autenticados sin un nonce wu_checkout válido recibían un 403 y nunca activaban el limitador.
* Corregido: `Rate_Limiter::enforce()` ahora aplica una protección de una vez por solicitud con clave `surface|ip`, por lo que los hooks ascendentes que se ejecutan dos veces por renderizado (en particular `wu_setup_checkout` en Ultimate Multisite) ya no reducen a la mitad el umbral efectivo del limitador de tasa.
* Corregido: Las puertas de superficie de limitación de tasa ya no consultan `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Ese filtro indica "captcha ya gestionado por otra superficie" y es ortogonal a la protección contra inundación — la integración de WooCommerce lo estaba enganchando para omitir el captcha de inicio de sesión de WordPress cuando había un nonce de Woo presente, lo que se filtraba al conteo de tasa y permitía que los POST de Woo evitaran el limitador. El filtro específico de limitación de tasa `wu_cap_rate_limit_whitelist_ip` es la única omisión que se aplica ahora.

Versión: 1.3.2 - Publicada el 2026-01-27
* Corregido: El widget de Cap no se renderizaba en formularios de checkout que usan Elementor u otros constructores de páginas
* Corregido: El elemento personalizado cap-widget era eliminado por el saneamiento de wp_kses()
* Mejorado: Uso de contenido callable para el campo de captcha de checkout para evitar el filtrado de HTML
* Mejorado: JavaScript simplificado con reserva para casos límite

Versión: 1.3.1 - Publicada el 2026-01-26
* Corregido: El modo invisible de Cap Captcha no se resolvía automáticamente en formularios de checkout dinámicos de Ultimate Multisite
* Mejorado: El script de checkout de Cap ahora usa MutationObserver para detectar widgets cargados dinámicamente
* Mejorado: Se añadió interceptación del botón de checkout para esperar el token antes del envío

Version: 1.3.0 - Lanzada el 2026-01-27
* Nuevo: Integración del checkout de WooCommerce Blocks con interceptación de fetch de Store API
* Nuevo: Compatibilidad con captcha invisible para el checkout de WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nuevo: Página de ajustes independiente para usar sin Ultimate Multisite
* Nuevo: Jetpack Autoloader para la prevención de conflictos de dependencias
* Corregido: hCaptcha no se renderizaba en el checkout dinámico de Ultimate Multisite (contenido cargado mediante AJAX)
* Corregido: El captcha no se actualizaba/restablecía cuando se producían errores de validación del formulario
* Corregido: hCaptcha no se mostraba en la página de checkout de WooCommerce
* Corregido: Error de clase reCAPTCHA no encontrada (se añadió la biblioteca PHP google/recaptcha)
* Mejorado: Detección de errores mediante hooks de WordPress, MutationObserver e interceptación de AJAX
* Mejorado: Las descripciones de los ajustes ahora incluyen URLs del dashboard para claves API

Version: 1.2.2 - Lanzada el 2026-01-24
* Corregido: El captcha no se mostraba en el Ultimate Multisite Login Form Element (discrepancia en el nombre del filtro del formulario)
* Corregido: El HTML del widget Cap era eliminado por la sanitización de wp_kses()
* Corregido: Los selectores de JavaScript no encontraban formularios con barras en los IDs de elementos
* Añadido: Hook de filtro `wu_kses_allowed_html` para que classaddons amplíe las etiquetas HTML permitidas
* Eliminado: Archivos JavaScript de código muerto reemplazados por scripts específicos del proveedor

Version: 1.2.1 - Lanzada el 2026-01-23

* Corregido: Fallaba la validación del token de Cap Captcha en entornos multisite (ahora usa transients de toda la red)
* Corregido: El captcha ahora se renderiza de forma consistente para todos los usuarios, independientemente del estado de inicio de sesión
* Corregido: Discrepancia entre la renderización y la validación del captcha que provocaba fallos en el checkout

Version: 1.2.0 - Lanzada el 2026-01-21

* Nuevo: Cap Captcha - captcha de prueba de trabajo autoalojado, activado por defecto al activar
* Nuevo: Protección sin configuración - activa el addon y estás protegido inmediatamente
* Nuevo: Arquitectura polimórfica de proveedores de captcha para una extensibilidad sencilla
* Nuevo: Protección del checkout de WooCommerce Store API contra ataques de prueba de tarjetas
* Nuevo: Dashboard de seguimiento de estadísticas que muestra desafíos, verificaciones y ataques bloqueados
* Nuevo: Preajustes de nivel de seguridad (Fast, Medium, Max) para la dificultad de Cap Captcha
* Nuevo: Clases base abstractas para proveedores de reCAPTCHA y hCaptcha
* Mejorado: Base de código refactorizada en clases de proveedores modulares
* Mejorado: Mejor separación de responsabilidades con clase de gestión dedicada
* Fixed: Security improvements for $_SERVER variable sanitization
* Corregido: Configuración de pruebas PHPUnit para las convenciones de nomenclatura de WordPress

Version: 1.0.1 - Lanzada el 2025-09-28

* Cambiar el nombre del prefijo a ultimate-multisite; actualizar el text domain; incremento de versión.
