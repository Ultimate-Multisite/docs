---
title: Preguntas frecuentes
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Preguntas frecuentes {#frequently-asked-questions}

Aquí tienes algunas **Preguntas frecuentes** que suelen surgir durante las solicitudes de soporte.

  * **¿Qué es Ultimate Multisite?**

Ultimate Multisite es un plugin de WordPress, creado para instalaciones multisitio de WordPress, que transforma tu instalación de WordPress en una red premium de sitios – como [WordPress.com](https://WordPress.com) – permitiendo a los clientes crear sitios mediante cuotas mensuales, trimestrales o anuales (también puedes crear planes gratis).

  * **¿Funcionará Ultimate Multisite sin Multisite?**

No. Ultimate Multisite requiere WordPress multisitio, subdirectorio o subdominio.

  * **¿Cuáles son los requisitos para Ultimate Multisite?**

Ultimate Multisite requiere:

**Versión de WordPress** : v5.3+ (Recomendado: última versión estable)
**Versión de PHP** : 7.4.x (Soporte para > 8.0 próximamente)
**Versión de MySQL** : v5+ (Recomendado: versión 5.6, en caso de que no tengas 8.0 disponible en tu proveedor de hosting)

_Multisite (subdominio o subdirectorio) también debe estar activado._ [Cómo instalar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **¿Funcionará Ultimate Multisite con Multisite con subdirectorios?**

Sí. Ultimate Multisite admite tanto instalaciones en subdirectorio como instalaciones en subdirectorio.

  * **¿Funcionará Ultimate Multisite con Multisite con subdominios?**

Sí. Ultimate Multisite admite tanto instalaciones en subdirectorio como instalaciones en subdominio.

  * **¿Puedo usar Ultimate Multisite para limitar qué plugins y temas pueden usar los usuarios?**

Sí. Con Ultimate Multisite puedes seleccionar qué plugins y temas están disponibles para cada plan en tu red.

  * **¿Puedo usar Ultimate Multisite para limitar el número de publicaciones que un usuario puede crear en su sitio?**

Sí. Con Ultimate Multisite puedes establecer cuotas de publicaciones para **cada tipo de publicación disponible** en tu red. También puedes limitar el número de usuarios que el administrador puede invitar, la **cantidad de espacio en disco,** y mucho más.

  * **¿Ultimate Multisite admite plantillas de sitio?**

Sí. Con Ultimate Multisite puedes crear tantas plantillas de sitio como quieras. Las plantillas de sitio no son temas, son sitios normales en tu red. Puedes activar plugins, temas y personalizar esa plantilla de sitio de la forma que quieras. Si un usuario selecciona esa plantilla, su sitio se creará como una copia de esa plantilla, con todas las personalizaciones aplicadas.

También puedes establecer una plantilla particular para un plan. Al hacerlo, cada usuario que se registre en ese plan tendrá su sitio creado como un duplicado de esa plantilla de sitio.

  * **¿Ultimate Multisite se integra con WooCommerce?**

¡Sí!

Si quieres que los usuarios de tu red tengan WooCommerce disponible, permitiéndoles configurar tiendas, eso es posible usando Ultimate Multisite. Incluso puedes limitar el número de productos que tus clientes podrán crear en cada nivel de plan.

En cuanto a los pagos de suscripción para Ultimate Multisite, puedes usar el [Complemento de integración de Ultimate Multisite: WooCommerce](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) para permitir que tus clientes de Ultimate Multisite paguen usando pasarelas de WooCommerce en tu sitio principal. De esa forma, puedes aprovechar la enorme biblioteca de pasarelas de pago desarrolladas para WooCommerce y usarlas para facturar a tus clientes de Ultimate Multisite.

  * **¿Hay alguna forma de migrar suscripciones desde WPMUDEV Pro Sites?**

Sí, Ultimate Multisite ahora te ofrece [una herramienta útil para ayudarte a migrar](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) tu red Pro Sites.

  * **¿Por qué la pestaña “Plugins permitidos” está vacía en mi página de edición de plan?**

Ultimate Multisite solo te permite permitir o denegar el acceso a plugins que no estén activados en red en tu red. Cuando un plugin está activado en red, por su propia naturaleza, se cargará de forma predeterminada en cada sitio de tu red.

Si no ves ningún plugin listado en la pestaña “Plugins permitidos”, comprueba si el plugin deseado está activo en red o no.

  * **¿Puedo usar mi propio diseño de tabla de precios?**

Sí. Desde la versión 1.4.0, Ultimate Multisite admite sobrescrituras de plantillas.

  * **¿Ultimate Multisite funciona con WP Engine?**

Sí. Ultimate Multisite siempre fue compatible con WP Engine, pero hacer que el mapeo de dominios funcionara requería pasos manuales adicionales por parte del administrador (añadir el dominio al panel de WP Engine). **Esto ya no es así desde la versión 1.6.0.** Ultimate Multisite se integra directamente con la API de WP Engine y los dominios se añaden al panel automáticamente después del mapeo.

  * **¿Qué proveedor de hosting recomiendas?**

Ultimate Multisite debería funcionar con cualquier proveedor de hosting. La única diferencia es que algunas empresas de hosting como Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane y [Runcloud.io](http://Runcloud.io) tienen una integración más estrecha para las capacidades de mapeo de dominios, por lo que funcionan directamente. Para otros hostings, es posible que tengas que configurar el mapeo de dominios manualmente.
