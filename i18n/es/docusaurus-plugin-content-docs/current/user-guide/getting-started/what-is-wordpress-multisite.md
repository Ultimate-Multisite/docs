---
title: ''
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# ¿Qué es WordPress Multisite?

En su núcleo, WordPress ofrece una característica llamada ‘Multisite’ que se remonta a 2010 con el lanzamiento de WordPress 3.0. Desde entonces ha recibido varias revisiones destinadas a introducir nuevas funciones y reforzar la seguridad.

En esencia, un WordPress multisite puede considerarse así: una universidad mantiene una única instalación de WordPress, pero cada facultad mantiene su propio sitio WordPress.

## ¿Qué es exactamente WordPress Multisite?

Multisite es una característica de WordPress que permite que múltiples sitios compartan una única instalación de WordPress. Cuando se activa multisite, el sitio original de WordPress se convierte para soportar lo que normalmente se denomina una **red de sitios**.

Esta red comparte el sistema de archivos (lo que significa que **los plugins y temas también se comparten**), la base de datos, los archivos centrales de WordPress, el wp-config.php, etc.

Esto significa que las actualizaciones de WordPress, temas y plugins deben realizarse solo una vez para todos los sitios de su red, ya que comparten los mismos archivos en el sistema de archivos.

Este hecho es una de las principales ventajas de multisite, ya que le permite aumentar el número de sitios que gestiona mientras mantiene el número de tareas que necesita realizar para mantener los sitios de sus clientes igual.

## Subdominio o Subdirectorio?

Hay dos modos de ejecutar WordPress multisite – y debe elegir uno al convertir su instalación regular de WordPress en una instalación multisite:

**Subdominio:** ex.: [site.domain.com](http://site.domain.com)

…o

**Subdirectorio:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Cada modo tiene ventajas y desventajas que debe tener en cuenta al tomar esta decisión.

Una cosa importante a tener en cuenta, sin embargo: una vez que tome su decisión, cambiar su red de subdirectorio a subdominio o viceversa es realmente difícil, especialmente si ya tiene varios sitios creados.

Antes de tomar esa decisión, aquí hay un par de puntos a tener en cuenta:

**Modo Subdirectorio** es el modo más sencillo en términos de configuración y mantenimiento. Esto ocurre porque todos los sitios son simplemente rutas adjuntas al dominio principal (por ejemplo, [yourdomain.com/subsite](http://yourdomain.com/subsite)). Como resultado, solo necesita **un certificado SSL** para el dominio principal y eso cubrirá toda la red.

Al mismo tiempo, debido a su estructura de URL, Google y la mayoría de los demás motores de búsqueda considerarán todos los subsitios en su red basada en subdirectorio como un solo sitio gigante. Como resultado, el contenido añadido a los subsitios por sus clientes finales podría afectar el rendimiento SEO de su sitio de destino, por ejemplo. El nivel de impacto es debatible y hay un argumento de que tal arreglo puede incluso ser beneficioso para el rendimiento SEO.

**Modo Subdominio** es un poco más complejo de configurar, pero su estructura de URL (por ejemplo, [subsite.yournetwork.com](http://subsite.yournetwork.com)) generalmente se percibe como “más profesional”.

Uno de los principales desafíos al configurar el modo subdominio es la cobertura SSL (HTTPS) para toda la red. Se reduce al hecho de que los navegadores consideran los subdominios como entidades aisladas. Como resultado, necesitará un certificado SSL diferente para cada subdominio en su red, o un tipo especial de certificado llamado **certificado SSL comodín**. En los últimos años, los proveedores de hosting y paneles han mejorado su juego en cuanto a la provisión de SSL y algunos ofrecen certificados wildcard con un clic, cerrando la brecha entre los dos modos en términos de complejidad al configurarlo.

En contraste con el modo subdirectorio, los subsitios en una red basada en subdominio son considerados por los motores de búsqueda como sitios web separados, lo que significa que el contenido presente en un subsitio no interfiere en absoluto con el rendimiento SEO de otros subsitios.

## El Super Administrador

Las instalaciones de WordPress de un solo sitio le permiten agregar un número ilimitado de usuarios y otorgar a esos usuarios diferentes roles con distintas permisos.

En WordPress Multisite, se desbloquea un nuevo tipo de usuario: **el super admin** – y se desbloquea un nuevo panel de administración: **el panel de administración de la red**.

Como su nombre indica, el super admin tiene superpoderes sobre la red, siendo capaz de gestionar todos sus subsitios, plugins, temas, ¡todo!

Una vez que convierta su instalación de WordPress de un solo sitio en multisite, el administrador original del sitio único se actualizará automáticamente a super admin.

Los plugins y temas solo pueden instalarse o desinstalarse desde el panel de administración de la red por super admins. Los administradores de subsitios pueden entonces elegir activar o desactivar esos plugins o temas a menos que el super admin de la red active un plugin, lo que lo fuerza a estar activo para todos los subsitios todo el tiempo.

_Nota: como puedes ver, invitar a alguien a tu red y otorgarle el estado de super admin le da a ese usuario control total sobre tu red. Por ejemplo, otros super admins incluso pueden quitarte el estado de super admin, bloqueándote efectivamente de tu propio panel de administración de la red. Para permitir que los clientes de Ultimate Multisite tengan un control granular sobre lo que pueden hacer los super admins adicionales, tenemos un complemento llamado Support Agents. Este complemento te permite crear otro tipo de usuario – un agente – con solo los permisos que puedan necesitar para realizar sus tareas en la red._

Aunque la tabla de usuarios está compartida, los usuarios pueden ser agregados y eliminados de los subsitios por los administradores de subsitios o el super admin, y pueden incluso tener diferentes roles de usuario en diferentes subsitios.

## Qué se comparte entre subsitios y qué no

Como mencionamos antes, una de las principales ventajas de WordPress multisite es que todos los subsitios comparten las mismas configuraciones, archivos centrales, temas, plugins, archivos centrales de WordPress, etc.

Sin embargo, existen elementos que están bien delimitados por subsitio.

- Por ejemplo, cada subsitio tiene su propia carpeta de subidas. Como resultado, las subidas realizadas por usuarios de un subsitio particular no pueden ser accedidas en otro subsitio.
- Cada subsitio tiene su propio panel de administración dedicado y puede activar o desactivar plugins o temas a menos que hayan sido activados a nivel de red por un super admin.
- La mayoría de las tablas de la base de datos se crean para cada subsitio, lo que significa que las publicaciones, comentarios, páginas, ajustes y más están delimitados para cada subsitio.

## Gestión de usuarios en WordPress Multisite

Un tema delicado en WordPress multisite es la gestión de usuarios. La tabla de usuarios de WordPress es una de las pocas que se comparte entre todos los subsitios.

Este arreglo puede generar algunos problemas dependiendo de lo que esté planeando construir con su red. El ejemplo de abajo ayuda a ilustrar el más urgente.

Imagina el siguiente escenario:

Crea una red WordPress multisite y comienzas a ofrecer subsitios por una tarifa mensual a personas que quieren tener una tienda de comercio electrónico.

Obtienes tu primer cliente que paga – John. Creas un sitio para John en tu red, instalas todos los plugins necesarios, luego creas un usuario para John para que pueda gestionar su tienda.

Luego llega un segundo cliente – Alice. Haces lo mismo por ella y ahora también tiene una tienda en tu red.

John y Alice son ambos tus clientes, pero no se conocen. Más importante aún, si uno de ellos visita el sitio web de la tienda del otro, no hay forma de saber que esa tienda está alojada en la misma red de sitios.

Un día, John necesita comprar un nuevo par de zapatos y encuentra los perfectos en la tienda de Alice. Cuando intenta finalizar la compra, recibe un mensaje de error “el correo electrónico ya está en uso”, lo cual es extraño ya que John está 100% seguro de que es la primera vez que visita el sitio web de Alice.

Lo que sucede aquí es que el usuario de John se comparte en toda la red, así que cuando intenta crear una cuenta para pagar en el sitio de Alice, WordPress detectará que ya existe un usuario con la misma dirección de correo electrónico y mostrará un error.

_Nota: Nos damos cuenta de lo malo que puede ser esto dependiendo de su caso de uso, por lo que Ultimate Multisite tiene una opción que omite las comprobaciones habituales para un usuario existente, permitiendo crear varias cuentas usando la misma dirección de correo electrónico. Cada cuenta está vinculada a un subsitio, por lo que el riesgo de colisión se mantiene al mínimo. En el ejemplo anterior, John no recibiría un mensaje de error y podría comprar esos zapatos sin problema. Esta opción se llama Enable Multiple Accounts, y se puede activar en Ultimate Multisite → Settings → Login & Registration._

Aunque la tabla de usuarios está compartida, los usuarios pueden ser agregados y eliminados de los subsitios por los administradores de subsitios o el super admin, y pueden incluso tener diferentes roles de usuario en diferentes subsitios.

## Consideraciones de rendimiento

WordPress multisite es realmente poderoso cuando se trata del número de sitios que puede soportar. Esto se puede comprobar por el hecho de que [WordPress.com](https://WordPress.com), Edublogs y Campuspress son todos servicios basados en multisite y cada uno aloja miles de sitios.

Aunque en teoría no hay un número máximo de sitios que puede alojar en una sola instalación de WordPress multisite, en la práctica el número de sitios que puede ejecutar satisfactoriamente puede variar ampliamente dependiendo de una serie de factores diferentes: cuán dinámicos son los sitios, qué plugins están disponibles para los subsitios, etc.

Como regla general, cuanto más simple sea su red, mejor. Favorecer sitios donde el contenido no es realmente dinámico (lo que los convierte en excelentes candidatos para estrategias de caché agresivas) y mantener la pila de plugins lo más ligera posible (cuanto menor sea el número de plugins activos, mejor) puede aumentar drásticamente el número de subsitios que puede alojar.

Lo mejor es que, dado que todo es WordPress aquí, las mismas herramientas que ya conoce y ama para mejoras de rendimiento también funcionarán para una red multisite.

El principal cuello de botella para multisite es la base de datos, pero si todo lo demás está configurado correctamente, puede soportar un par de miles de sitios antes de que necesite preocuparse por ello. Incluso entonces, existen soluciones que pueden añadirse progresivamente en ese punto (por ejemplo, soluciones de sharding de base de datos).
