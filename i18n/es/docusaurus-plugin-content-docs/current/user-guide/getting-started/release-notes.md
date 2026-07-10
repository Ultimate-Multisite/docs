---
title: Notas de la versión
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notas de la versión {#release-notes}

## Versión 2.13.0 — Publicada el 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nuevo: Se añadió compatibilidad con tenants soberanos para flujos de cuenta de cliente, checkout, facturación, sitio, factura, cambio de plantilla y mapeo de dominios, de modo que las redes de tenants puedan dirigir a los clientes de vuelta al sitio principal para acciones gestionadas.
- Nuevo: Se añadieron comprobaciones de credenciales de renovación para membresías recurrentes, de modo que las pasarelas puedan desactivar la renovación automática cuando falte un acuerdo de facturación guardado, una suscripción o un token de bóveda.
- Nuevo: Se añadió publicación loopback verificada con HMAC para la creación pendiente de sitios, con el fin de hacer más fiable el aprovisionamiento de checkout a sitio en hosts donde los trabajos en segundo plano se retrasan.
- Nuevo: Se añadieron puntos de extensión para desarrolladores para URL de SSO, dominios base de formularios de checkout y creación automática de registros de dominio.
- Corrección: SSO es más fiable en dominios mapeados, visitas anónimas del intermediario, cierre de sesión y conflictos de dependencias entre plugins.
- Corrección: La creación pendiente de sitios ahora se recupera de indicadores de publicación obsoletos y evita dejar a los clientes atascados en la pantalla de creación de sitios.
- Corrección: Ya no se crean registros de dominio para dominios base compartidos de formularios de checkout, y se omiten los trabajos en segundo plano de proveedores de host no utilizados cuando no hay ninguna integración activa.
- Corrección: Los casos límite de checkout, dirección de facturación, restablecimiento de contraseña, verificación de correo electrónico, cambio de plantilla, recorridos y dashboard de cliente ya no bloquean los flujos normales de los clientes.
- Corrección: Los correos electrónicos de difusión ahora mantienen privados a los destinatarios y evitan errores fatales de SMTP/plugin cuando fallan las listas de destinatarios o los transportes de correo.
- Corrección: Las renovaciones de membresía, la visualización de caducidad y los casos límite de cobro de pagos ahora evitan caducidades inmediatas, fallos o pagos obligatorios omitidos.
- Mejorado: La compatibilidad con WordPress se prueba hasta la versión 7.0, los recursos de Vue de producción se reconstruyen desde fuentes npm, y la cobertura end-to-end de Cypress ahora ejercita más flujos de checkout, configuración, SSO y pasarela.

## Versión 2.12.0 — Publicada el 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nuevo: Se añadió Hostinger (hPanel) como proveedor de host compatible con integración de mapeo de dominios
- Nuevo: El Exportador de sitios ahora gestiona paquetes de importación de red para una restauración de sitios en toda la red más simplificada
- Corrección: Los correos electrónicos de difusión BCC ahora usan un encabezado de destinatarios no revelados para evitar exponer las direcciones de los destinatarios
- Corrección: La fecha de caducidad de la membresía ya no se corrompe al guardar con un valor que no es una fecha
- Corrección: Las actualizaciones de membresía de Stripe ahora eliminan correctamente los descuentos sin llamar a la API obsoleta deleteDiscount
- Corrección: Las redirecciones SSO en sitios con dominios mapeados ahora están limitadas para evitar bucles infinitos de redirección
- Corrección: La selección del selector de imágenes del asistente de configuración ahora actualiza correctamente el modelo de datos subyacente
- Corrección: La CLI del Exportador de sitios ahora conserva la selección correcta del sitio de red predeterminado
- Mejorado: Se eliminó wp-cli incluido del paquete del plugin, reduciendo el tamaño del plugin

## Versión 2.11.0 — Publicada el 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nuevo: Las exportaciones de sitios ahora incluyen un `index.php` de arranque automático para que el ZIP pueda instalarse en un host nuevo sin una instalación separada del plugin.
- Nuevo: La exportación de red permite a los administradores exportar todos los subsitios en un único archivo desde la página de administración de Exportación de sitios.
- Nuevo: El conmutador de plan Permitir plantillas de sitio ahora se aplica mediante una cadena de reserva, restringiendo correctamente la disponibilidad de plantillas según los límites del plan.
- Nuevo: El editor de formularios de checkout advierte cuando se añade un producto sin un campo obligatorio configurado.
- Nuevo: La pestaña de ajustes de Importación/Exportación ahora describe claramente su alcance y enlaza directamente con la herramienta de Exportación de sitios.

## Versión 2.10.0 — Publicada el 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nuevo: Asistente de configuración guiada de PayPal para la introducción manual de credenciales con puerta de indicador OAuth para una configuración fluida de la pasarela.
- Nuevo: Panel de cliente para cambio de plantilla rediseñado con tarjeta de plantilla actual, cuadrícula persistente y botón **Restablecer plantilla actual**.
- Corrección: El cambio de plantilla ya no bloquea la UI ante un fallo de AJAX.
- Corrección: Estados de permisos de cambio de plantilla protegidos contra acceso no autorizado.
- Corrección: Entradas de sobrescritura de sitio validadas antes de guardar.
- Corrección: El aviso de dirección de facturación ahora se muestra cuando la dirección está vacía.
- Corrección: Resueltos los avisos de obsolescencia de null a string en PHP 8.1.
- Corrección: Currents se carga de forma diferida antes del hook init para evitar problemas de temporización.
- Corrección: La ruta SSO filtrada se respeta en todos los flujos de inicio de sesión.
- Corrección: Las opciones de identidad de sitio en blanco se conservan al guardar.

## Versión 2.9.0 — Publicada el 2026-04-30 {#version-290--released-on-2026-04-30}

- Nuevo: Exportación e importación de sitio único añadidas en **Herramientas > Exportar e importar**.
- Corrección: Los archivos ZIP de exportación ahora se sirven a través de un endpoint de descarga autenticado.
- Corrección: Corregidos el riesgo de inyección SQL y los problemas de consulta en las consultas de exportación/importación pendientes.
- Corrección: Sitio pendiente no publicado cuando el administrador verifica manualmente el correo electrónico del cliente.
- Corrección: Registros pending_site huérfanos limpiados cuando falta la membresía.
- Corrección: Corregidos el relleno de navegación de ajustes y la navegación por anclas de búsqueda.
- Corrección: Los sitios pendientes ahora se muestran primero en la vista Todos los sitios.
- Corrección: Añadido el encabezado User-Agent del proveedor de capturas de pantalla (mShots) para evitar errores 403.
- Corrección: Resuelta la dependencia circular de la programación cron de importación.
- Corrección: Los ID de recorrido se normalizan a guiones bajos en las claves de ajustes de usuario.
- Mejorado: Ahora se usa ZipArchive en lugar de Alchemy/Zippy para una mejor compatibilidad.

## Versión 2.8.0 — Publicada el 2026-04-29 {#version-280--released-on-2026-04-29}

- Nuevo: Se añadió el interruptor Activar Jumper a la interfaz de ajustes de Otras opciones.
- Nuevo: Se añadió la columna de estado a la tabla de lista de formularios de pago.
- Nuevo: Cargador de archivo sunrise de addon para extensiones sunrise personalizadas de MU-plugin.
- Mejorado: Se eliminó el ajuste de inclusión voluntaria de informes de errores de la página de ajustes.
- Corrección: Tarjeta de sitio de la página de agradecimiento — la imagen ahora está limitada y los enlaces tienen el estilo correcto.
- Corrección: El proveedor de capturas de pantalla se cambió de thum.io a WordPress.com mShots.
- Corrección: Activar registro y Rol predeterminado ahora establecen los valores predeterminados correctos en una instalación nueva.
- Corrección: `get_site_url()` ya no devuelve vacío cuando el dominio incluye un puerto.
- Corrección: Los archivos multimedia clonados ahora se copian correctamente cuando el ajuste `copy_media` estaba vacío.
- Corrección: La caché de objetos se invalida correctamente después de escribir sitemeta al activar en red.
- Corrección: El dominio personalizado se promueve automáticamente a principal tras la verificación DNS para dominios de 3 partes.
- Corrección: La membresía pendiente se cancela cuando se limpia un pago caducado.
- Corrección: El comprobador de seguridad de contraseñas se vuelve a vincular después de descartar la solicitud de inicio de sesión integrada.
- Corrección: Se detuvo la recarga infinita de la página en la página de agradecimiento cuando el sitio ya había sido creado.
- Corrección: La opción de registro del núcleo de WP se sincroniza al activar el plugin y al guardar los ajustes.
- Corrección: Se añadió una protección contra caducidad nula en `calculate_expiration` para compatibilidad con PHP 8.4.
- Corrección: Se bloquean los registros duplicados cuando el cliente ya tiene una membresía activa.
- Corrección: Se añadió una comprobación de nulo para `date_expiration` en el pago.
- Corrección: Se reforzó el aprovisionamiento de sitios — limitaciones, inferencia de membresía, promoción de dominio.
- Corrección: La etiqueta de estado de comprobación previa a la instalación se corrigió a NO Activado cuando la comprobación falla.
- Corrección: Se usa el dominio de pago para las URL de verificación de correo electrónico.
- Corrección: Inicio de sesión automático después del pago cuando no hay un campo de contraseña.
- Corrección: Las membresías gratuitas ya no caducan — se tratan como de por vida.
- Corrección: La barrera de verificación de correo electrónico retiene la publicación del sitio hasta que el cliente verifica el correo electrónico.
- Corrección: Se corrigieron la ruta base del endpoint de API SES v2 y la ruta de identidad.
- Corrección: El hook `wu_inline_login_error` se emite en el bloque catch previo al envío.
