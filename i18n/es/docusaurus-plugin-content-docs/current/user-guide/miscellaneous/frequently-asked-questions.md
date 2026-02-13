---
title: Preguntas Frecuentes
sidebar_position: 18
_i18n_hash: 7a5b3130600e6d8eeeecee2d8cb03b2c
---
# Preguntas Frecuentes

Aquí hay algunas **Preguntas Frecuentes** que suelen surgir durante las solicitudes de soporte.

  * **¿Qué es Ultimate Multisite?**

Ultimate Multisite es un plugin de WordPress, hecho para instalaciones multisite de WordPress, que transforma tu instalación de WordPress en una red premium de sitios – como [WordPress.com](https://WordPress.com) – permitiendo a los clientes crear sitios mediante tarifas mensuales, trimestrales o anuales (también puedes crear planes gratuitos).

  * **¿Funcionará Ultimate Multisite sin Multisite?**

No. Ultimate Multisite requiere WordPress multisite, subdirectorio o subdominio.

  * **¿Cuáles son los requisitos para Ultimate Multisite?**

Ultimate Multisite requiere:

**Versión de WordPress** : v5.3+ (Recomendado: Última Versión Estable)  
**Versión de PHP** : 7.4.x (Soporte a > 8.0 próximamente)  
**Versión de MySQL** : v5+ (Recomendado: Versión 5.6, en caso de que no tengas 8.0 disponible en tu proveedor de hosting)

_Multisite (subdominio o subdirectorio) también necesita estar activado._ [How to Install WordPress Multisite](/docs/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **¿Funcionará Ultimate Multisite con Multisite con Subdirectorios?**

Sí. Ultimate Multisite soporta tanto instalaciones en subdirectorio como instalaciones en subdirectorio.

  * **¿Funcionará Ultimate Multisite con Multisite con Subdominios?**

Sí. Ultimate Multisite soporta tanto instalaciones en subdirectorio como instalaciones en subdominio.

  * **¿Puedo usar Ultimate Multisite para limitar qué Plugins y Temas pueden usar los usuarios?**

Sí. Con Ultimate Multisite puedes seleccionar qué plugins y temas están disponibles para cada plan en tu red.

  * **¿Puedo usar Ultimate Multisite para limitar la cantidad de publicaciones que un usuario puede crear en su sitio?**

Sí. Con Ultimate Multisite puedes establecer cuotas de publicaciones para **cada tipo de publicación disponible** en tu red. También puedes limitar el número de usuarios que el administrador puede invitar, la **cantidad de espacio en disco**, y mucho más.

  * **¿Ultimate Multisite soporta Plantillas de Sitio?**

Sí. Con Ultimate Multisite puedes crear tantas Plantillas de Sitio como desees. Las Plantillas de Sitio no son temas, son sitios normales en tu red. Puedes activar plugins, temas y personalizar esa Plantilla de Sitio de cualquier manera que desees. Si un usuario selecciona esa plantilla, su sitio será creado como una copia de esa plantilla, con todas las personalizaciones en su lugar.

También puedes establecer una plantilla particular para un plan. Al hacerlo, cada usuario que se registre en ese plan tendrá su sitio creado como un duplicado de esa Plantilla de Sitio.

  * **¿Ultimate Multisite se integra con WooCommerce?**

¡Sí!

Si deseas que tus usuarios de la red tengan WooCommerce disponible, permitiéndoles configurar tiendas, eso es posible usando Ultimate Multisite. Incluso puedes limitar la cantidad de productos que tus clientes podrán crear en cada nivel de plan.

En cuanto a los pagos de suscripción para Ultimate Multisite, puedes usar el [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) para permitir que tus clientes de Ultimate Multisite paguen usando los gateways de WooCommerce en tu sitio principal. De esa manera, puedes aprovechar la enorme biblioteca de gateways de pago desarrollados para WooCommerce y usarlos para facturar a tus clientes de Ultimate Multisite.

  * **¿Hay alguna forma de migrar suscripciones desde WPMUDEV Pro Sites?**

Sí, Ultimate Multisite ahora te ofrece [una herramienta útil para que migres](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) tu red de Pro Sites.

  * **¿Por qué la pestaña “Allowed Plugins” está vacía en mi página de edición de Plan?**

Ultimate Multisite solo te permite permitir o denegar el acceso a plugins que no estén activados en la red en tu red. Cuando un plugin está activado en la red, por su propia naturaleza, se cargará por defecto en cada sitio de tu red.

Si no ves ningún plugin listado en la pestaña “Allowed Plugins”, verifica si el plugin deseado está activo en la red o no.

  * **¿Puedo usar mi propio diseño de Tabla de Precios?**

Sí. Desde la versión 1.4.0, Ultimate Multisite soporta anulación de plantillas.

  * **¿Ultimate Multisite funciona con WP Engine?**

Sí. Ultimate Multisite siempre fue compatible con WP Engine, pero hacer que el mapeo de dominios funcionara requería pasos adicionales manuales por parte del administrador (agregar el dominio al panel de WP Engine). **Esto ya no es el caso desde la versión 1.6.0.** Ultimate Multisite se integra directamente con la API de WP Engine y los dominios se añaden al panel automáticamente después del mapeo.

  * **¿Qué proveedor de hosting recomiendas?**

Ultimate Multisite debería funcionar con cualquier proveedor de hosting. La única diferencia es que algunas compañías de hosting como Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane y [Runcloud.io](http://Runcloud.io) tienen una integración más estrecha para las capacidades de mapeo de dominios, por lo que funcionan fuera de la caja. Para otros hostings, es posible que necesites configurar el mapeo de dominios manualmente.
