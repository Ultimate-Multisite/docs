---
title: Notas de lanzamiento
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Notas de Lanzamiento

## Versión 2.12.0 — Lanzada el 15/05/2026

- Nuevo: Se añadió Hostinger (hPanel) como proveedor de alojamiento compatible con integración de mapeo de dominio.
- Nuevo: Site Exporter ahora maneja paquetes de importación de red para una restauración del sitio en toda la red más sencilla.
- Corrección: Los correos electrónicos de difusión BCC ahora usan un encabezado `undisclosed-recipients` para evitar exponer las direcciones de los destinatarios.
- Corrección: La fecha de caducidad de la membresía ya no se corrompe al guardar con un valor que no es una fecha.
- Corrección: Las actualizaciones de membresía de Stripe ahora eliminan correctamente los descuentos sin llamar a la API obsoleta `deleteDiscount`.
- Corrección: Los redireccionamientos SSO en sitios con mapeo de dominio ahora están limitados para prevenir bucles de redireccionamiento infinitos.
- Corrección: La selección de imágenes del asistente de configuración ahora actualiza correctamente el modelo de datos subyacente.
- Corrección: La CLI de Site Exporter ahora conserva la selección correcta del sitio predeterminado de la red.
- Mejorado: Se eliminó el wp-cli empaquetado del paquete del plugin, reduciendo el tamaño del plugin.

## Versión 2.11.0 — Lanzada el 11/05/2026

- Nuevo: Las exportaciones de sitios ahora empaquetan un `index.php` autoarrancable para que el archivo ZIP pueda instalarse en un host nuevo sin una instalación de plugin separada.
- Nuevo: La exportación de red permite a los administradores exportar todos los subsitios en un único archivo desde la página de administración de Site Export.
- Nuevo: El interruptor de plan "Allow Site Templates" ahora se aplica mediante una cadena de respaldo, restringiendo correctamente la disponibilidad de plantillas según los límites del plan.
- Nuevo: El editor de formularios de pago advierte cuando se añade un producto sin configurar un campo obligatorio.
- Nuevo: La pestaña de configuración de Importación/Exportación ahora describe claramente su alcance y enlaza directamente con la herramienta Site Export.

## Versión 2.10.0 — Lanzada el 05/05/2026

- Nuevo: Asistente de configuración guiado de PayPal para la entrada manual de credenciales con una puerta de activación OAuth para una configuración fluida de la pasarela.
- Nuevo: El panel de clientes de cambio de plantilla fue rediseñado con una tarjeta de plantilla actual, una cuadrícula persistente y un botón de **Restablecer plantilla actual**.
- Corrección: El cambio de plantilla ya no cuelga la interfaz de usuario en caso de fallo de AJAX.
- Corrección: Los estados de permisos de cambio de plantilla están asegurados contra accesos no autorizados.
- Corrección: Las entradas de anulación de sitio se validan antes de guardar.
- Corrección: El aviso de dirección de facturación ahora se muestra cuando la dirección está vacía.
- Corrección: Se resolvieron los avisos de desaprobación de nulo a cadena de PHP 8.1.
- Corrección: Currents se carga perezosamente antes del hook `init` para prevenir problemas de tiempo.
- Corrección: Se respeta la ruta SSO filtrada en todos los flujos de inicio de sesión.
- Corrección: Las opciones de identidad de sitio en blanco se conservan al guardar.

## Versión 2.9.0 — Lanzada el 30/04/2026

- Nuevo: Se añadió la exportación e importación de sitio único bajo **Herramientas > Exportar e Importar**.
- Corrección: Los archivos ZIP de exportación ahora se sirven a través de un punto final de descarga autenticado.
- Corrección: Se corrigió el riesgo de inyección SQL y los problemas de consulta en las consultas de exportación/importación pendientes.
- Corrección: El sitio pendiente no se publica cuando el administrador verifica manualmente el correo electrónico del cliente.
- Corrección: Se limpiaron los registros `pending_site` huérfanos cuando faltaba la membresía.
- Corrección: Se corrigió el relleno de navegación de configuración y la navegación de anclaje de búsqueda.
- Corrección: Los sitios pendientes ahora se muestran primero en la vista de Todos los Sitios.
- Corrección: Se añadió el encabezado User-Agent del proveedor de capturas de pantalla (mShots) para prevenir errores 403.
- Corrección: Se resolvió la dependencia circular del cron de importación.
- Corrección: Los IDs de tour se normalizaron a guiones bajos en las claves de configuración de usuario.
- Mejorado: Ahora se utiliza ZipArchive en lugar de Alchemy/Zippy para mejor compatibilidad.

## Versión 2.8.0 — Lanzada el 29/04/2026

- Nuevo: Se añadió el interruptor "Enable Jumper" a la interfaz de usuario de Configuración de Otras Opciones.
- Nuevo: Se añadió la columna de estado a la tabla de lista de formularios de pago.
- Nuevo: Cargador de archivos sunrise Addon para extensiones personalizadas de MU-plugin sunrise.
- Mejorado: Se eliminó la opción de activación de reporte de errores de la página de configuración.
- Corrección: Tarjeta de sitio de la página de agradecimiento: la imagen ahora está restringida y los enlaces tienen el estilo correcto.
- Corrección: El proveedor de capturas de pantalla cambió de thum.io a WordPress.com mShots.
- Corrección: "Enable Registration" y "Default Role" ahora establecen valores predeterminados correctos en una instalación nueva.
- Corrección: `get_site_url()` ya no devuelve vacío cuando el dominio incluye un puerto.
- Corrección: Los archivos multimedia clonados ahora se copian correctamente cuando la configuración `copy_media` estaba vacía.
- Corrección: El caché de objetos se invalida correctamente después de escribir sitemeta de activación de red.
- Corrección: El dominio personalizado se promociona automáticamente a principal en la verificación de DNS para dominios de 3 partes.
- Corrección: La membresía pendiente se cancela cuando se limpia un pago caducado.
- Corrección: El verificador de fuerza de contraseña se vuelve a vincular después de descartar el aviso de inicio de sesión en línea.
- Corrección: Se detuvo la recarga infinita de la página en la página de agradecimiento cuando el sitio ya estaba creado.
- Corrección: La opción de registro de WP core se sincroniza al activar el plugin y guardar la configuración.
- Corrección: Se añadió una protección de expiración nula en `calculate_expiration` para compatibilidad con PHP 8.4.
- Corrección: Se bloquean los registros de usuario duplicados cuando el cliente ya tiene una membresía activa.
- Corrección: Se añadió una verificación nula para `date_expiration` en el pago.
- Corrección: El aprovisionamiento del sitio se reforzó: limitaciones, inferencia de membresía, promoción de dominio.
- Corrección: La etiqueta de estado de verificación pre-instalación se corrigió a NO Activado cuando falla la verificación.
- Corrección: El dominio de pago se utiliza para las URL de verificación de correo electrónico.
- Corrección: Inicio de sesión automático después del pago cuando no hay campo de contraseña.
- Corrección: Las membresías gratuitas ya no caducan, se tratan como de por vida.
- Corrección: La puerta de verificación de correo electrónico mantiene el sitio publicado hasta que el cliente verifica su correo.
- Corrección: Se corrigió la ruta base del endpoint API SES v2 e identidad.
- Corrección: El hook `wu_inline_login_error` se emite en el bloque `pre-submit` catch.
