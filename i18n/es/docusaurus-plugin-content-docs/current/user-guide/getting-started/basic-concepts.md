---
title: Conceptos Básicos
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Conceptos Básicos

Para un nuevo usuario de WordPress Multisite y alguien que acaba de comenzar a usar Ultimate Multisite, puede haber muchas palabras y frases nuevas que tomar en cuenta al principio. Aprenderlas es una tarea importante porque necesitarás comprender la plataforma y cómo funciona en su conjunto.

En este artículo, intentaremos definir y explicar algunos de los conceptos clave en WordPress. Algunos de estos son más relevantes para usuarios, otros para desarrolladores, y algunos para ambos.

## WordPress Multisite

WordPress **Multisite** es un tipo de instalación de WordPress que te permite crear y gestionar una red de múltiples sitios web desde un único panel de WordPress. Puedes gestionar todo, incluyendo el número de sitios, características, temas y roles de usuario. Es posible gestionar cientos y miles de sitios.

## Network

En términos de WordPress, una red multisite es donde un número de **subsites** puede ser gestionado desde un único panel. Aunque crear una red multisite difiere entre proveedores de hosting, el resultado final suele ser unas pocas directivas adicionales en el archivo **wp-config.php** para que WordPress sepa que está operando en este modo específico.

Hay varias diferencias distintas entre una red multisite y una instalación de WordPress independiente que discutiremos brevemente.

## Database

Una base de datos es un conjunto estructurado y organizado de datos. En terminología informática, una base de datos se refiere a un software utilizado para almacenar y organizar datos. Piénsalo como un archivador donde guardas datos en diferentes secciones llamadas tablas.

WordPress Multisite utiliza una base de datos y cada subsite obtiene sus propias tablas con el id del blog en el prefijo, así que una vez que instalas una instalación de red, tu base de datos y creas un subsite, deberías tener estas tablas:

_wp_1_options_ \- options table for first subsite

_wp_2_options_ \- options table for second subsite

## Hosting provider

Un proveedor de hosting es una compañía que permite a empresas e individuos hacer que sus sitios web estén disponibles a través de la World Wide Web. Los servicios que ofrecen los proveedores de hosting variarán, pero normalmente incluyen diseño web, espacio de almacenamiento en un host y conectividad a Internet.

## Domain

Un nombre de dominio es una dirección que las personas usan para visitar tu sitio. Indica al navegador web dónde buscar tu sitio. Al igual que una dirección de calle, un dominio es la forma en que las personas visitan tu sitio web en línea. Y, como tener un letrero frente a tu tienda. Si deseas visitar nuestro sitio web, tendrás que escribir nuestra dirección web en la barra de direcciones de tu navegador, que es [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ donde [**ultimatemultisite.com**](http://ultimatemultisite.com) es el nombre de dominio.

## Subdomain

Un subdominio es un tipo de jerarquía de sitio web bajo el dominio principal, pero en lugar de usar carpetas para organizar el contenido en un sitio web, prácticamente obtiene su propio sitio web. Se presenta como [**https://site1.domain.com/**](https://site1.domain.com/) donde _site1_ es el nombre del subdominio y [_domain.com_](http://domain.com) es el dominio principal.

## Subdirectory

Un subdirectorio es un tipo de jerarquía de sitio web bajo un dominio raíz que utiliza carpetas para organizar el contenido en un sitio web. Un subdirectorio es lo mismo que una subcarpeta y los nombres pueden usarse indistintamente. Se presenta como [**https://domain.com/site1**](https://domain.com/site1) donde _site1_ es el nombre del subdirectorio y [_domain.com_](http://domain.com) es el dominio principal.

## Subsite

Un subsite es un sitio hijo que creas en una red Multisite. Puede ser un **subdominio** o un **subdirectorio** dependiendo de cómo esté configurada tu instalación de WordPress Multisite.

## Super Admin

Un Super Admin de WordPress es un rol de usuario con capacidades completas para gestionar todos los subsites en una red Multisite. Para los usuarios de Multisite, es el **nivel más alto de acceso** que puedes proporcionar a tu instalación de WordPress.

## Plugin

En general, un plugin es un conjunto de código que añade funcionalidad extra a tu sitio WordPress. Esto puede ser tan simple como cambiar el logo de inicio de sesión o tan complejo como añadir funcionalidad de comercio electrónico. _Woocommerce y Contact Form_ son ejemplos de un plugin.

En una WordPress Multisite, los plugins solo pueden instalarse desde el panel de administración de la red por el Super Admin. Los administradores de subsite solo pueden activar y desactivar plugins dentro de su subsite.

## Themes

Un tema de WordPress es un grupo de archivos (_gráficos, hojas de estilo y código_) que dicta la apariencia general del sitio. Proporciona todos los estilos de front-end como estilo de fuente, diseño de página, colores, etc.

Al igual que los plugins, los temas en WordPress Multisite solo pueden instalarse por el Super Admin y pueden activarse a nivel de subsite por los administradores de subsite.

## Site Template

**Site Template** es un sitio base que puede usarse como base al crear nuevos sitios en tu red.

Esto significa que puedes crear un sitio base, activar diferentes plugins, establecer un tema activo y personalizarlo de cualquier manera que desees. Luego, cuando tu cliente crea una nueva cuenta, en lugar de obtener un sitio WordPress predeterminado sin contenido significativo dentro, obtendrá una copia de tu sitio base con todas las personalizaciones y contenidos ya en su lugar.

## Domain Mapping

**Domain mapping** con WordPress es una forma de redirigir a los usuarios al host correcto, a través de la dirección de un sitio web. En una WordPress Multisite, los subsites se crean usando ya sea un subdirectorio o subdominio. Lo que hace el domain mapping es permitir a los usuarios de subsite usar un dominio de nivel superior como [**joesbikeshop.com**](http://joesbikeshop.com) para que la dirección de su sitio se vea más profesional.

## SSL

SSL significa **Secure Sockets Layer**. Es un certificado digital que autentica la identidad de un sitio web y permite una conexión cifrada. Hoy en día se utiliza como la tecnología estándar para mantener una conexión a Internet segura y proteger cualquier dato sensible que se envíe entre dos sistemas, evitando que los delincuentes lean y modifiquen cualquier información transferida, incluidos los datos personales potenciales. Los navegadores modernos requieren SSL, lo que lo hace esencial al crear y administrar un sitio web.

## Media

Los medios son imágenes, audio, video y otros archivos que componen un sitio web.

Los sitios de la red comparten una única base de datos en una WordPress Multisite, mantienen rutas separadas en el sistema de archivos para los archivos multimedia.

La ubicación estándar de WordPress (wp-content/uploads) permanece; sin embargo, su ruta se altera para reflejar el ID único del sitio de la red. En consecuencia, los archivos multimedia de un sitio de la red aparecen como wp-contents/uploads/site/[id].

## Permalinks

Los permalinks son las URLs permanentes de tu publicación o página individual dentro de tu sitio. Los permalinks también se conocen como **pretty links**. Por defecto, las URLs de WordPress usan el formato de cadena de consulta que se ve algo así:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite es un plugin de WordPress, hecho para instalaciones de WordPress Multisite, que transforma tu instalación de WordPress en una red premium de sitios – como [WordPress.com](https://WordPress.com) – permitiendo a los clientes crear sitios mediante tarifas mensuales, trimestrales o anuales (también puedes crear planes gratuitos).

## Checkout Form

Checkout Form es un formulario de pedido único o de varios pasos que implica la creación de subsite, membresía y cuentas de usuario a través del registro de Ultimate Multisite. Consta de diferentes campos y formularios de pago que un usuario debe enviar durante el proceso de registro.

## Webhook

Un webhook (también llamado web callback o HTTP push API) es una forma en que una aplicación proporciona a otras aplicaciones información en tiempo real. Un webhook entrega datos a otras aplicaciones a medida que ocurren, lo que significa que obtienes datos inmediatamente.

**Ultimate Multisite webhooks** abren posibilidades infinitas, permitiendo a los administradores de la red realizar todo tipo de integraciones locas pero útiles, especialmente si se usan en conjunto con servicios como _Zapier y IFTTT_.

## Events

Un Evento es una acción que ocurre como resultado de la acción del usuario u otra fuente, como un clic del ratón. Ultimate Multisite mantiene un registro de todos los eventos y registros que ocurren dentro de toda tu red. Rastrea diferentes actividades que ocurren en tu multisite, como cambios de plan.
