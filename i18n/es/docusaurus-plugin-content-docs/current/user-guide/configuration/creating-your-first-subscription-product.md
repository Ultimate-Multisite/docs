---
title: Creando Tu Primer Producto de Suscripción
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Creando tu primer producto de suscripción (v2)

_**NOTA IMPORTANTE: Este artículo es solo para usuarios de Ultimate Multisite versión 2.x. Si estás usando la versión 1.x,**_ **_**ver este artículo**_**.

Para comenzar a operar tu red y empezar a vender tus servicios a usuarios potenciales, necesitas tener diferentes opciones de suscripción. ¿Cómo creas estos productos? ¿Cuáles son los tipos de productos que puedes ofrecer? En este artículo cubriremos todo lo que necesitas saber sobre productos.

## Tipo de producto

Con Ultimate Multisite puedes ofrecer dos categorías de productos a tus clientes: **planes** y **add-ons** **(Order Bump)**. Los add-ons se pueden dividir en dos tipos: **paquetes** y **servicios**. Veremos sus diferencias y particularidades a continuación.

* **Planes** : el producto fundamental de Ultimate Multisite. Tu cliente solo puede tener una membresía si está vinculada a un plan. Un plan proporciona a tus clientes uno o más sitios (depende de las configuraciones de tu plan) con las limitaciones que establezcas en la página de edición del producto.

* **Paquetes** : add-ons que impactan directamente en las funcionalidades de los planes de Ultimate Multisite. Alteran limitaciones o añaden nuevos recursos, plugins o temas al plan original que compró tu cliente. Por ejemplo, un plan básico puede permitir 1,000 visitas por mes y puedes ofrecer un paquete que extienda ese número a 10,000.

* **Servicios**: add-ons que no alteran las funcionalidades de Ultimate Multisite. Son tareas que realizarás para tu cliente además del plan que compró. Por ejemplo, tu cliente puede comprar un plan que permita un solo sitio y también pagar por un servicio extra que diseñe ese sitio.

## Gestión de productos

Para muchos, la pestaña **Productos** en Ultimate Multisite **(Ultimate Multisite > Products)** puede equipararse con planes en un entorno de hosting tradicional.

Dentro de Ultimate Multisite, la pestaña Productos define la estructura y limitaciones aplicables a un producto o servicio específico. Estas estructuras se extienden a la descripción del producto o servicio, precio, impuestos y permisos.

Esta sección guiará tu comprensión de esta piedra angular esencial de Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Añadiendo productos

Ya sea un plan, paquete o servicio, el punto de entrada para definir un nuevo elemento es a través de **Ultimate Multisite > Products > Add Product**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

La interfaz contiene dos secciones predominantes. A la izquierda hay varias pestañas que ayudan con la definición del producto y a la derecha hay algunas secciones para definir el precio base del producto, su estado activo y la imagen del producto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WRwYrlk0BS.png)

### Descripción

La información básica del producto se puede definir proporcionando un nombre y una descripción del producto. Estos identificadores se muestran donde sea que se requiera la información del producto, como la selección de plan y precios, facturas, actualizaciones y similares.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Tipo de precios

En el lado derecho de la interfaz, se puede definir el precio base.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oHwhlrBFC9.png)

Ultimate Multisite admite tres tipos de precios diferentes. La opción **paid** solicita al administrador de la red información sobre el precio del producto y la frecuencia de facturación.

### Precio

El componente de precio define el precio base del producto y el intervalo de facturación.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

por ejemplo, un precio de $29.99 con una configuración de 1 mes facturará $29.99 cada mes. De manera similar, un precio de $89.97 con una configuración de 3 meses facturará esa cantidad cada trimestre.

### Ciclos de facturación

La sección de ciclos de facturación especifica la frecuencia del intervalo de facturación mencionado y generalmente se entiende en el contexto de contratos o términos fijos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

Por ejemplo, un precio de producto de $29.99 con un intervalo de 1 mes y 12 ciclos de facturación facturará $29.99 por mes durante los siguientes 12 meses. En otras palabras, tal configuración establecería un término de precio fijo de $29.99 por mes durante 12 meses y luego dejaría de facturar.

### Período de prueba

Activar el interruptor de oferta de prueba permite al administrador de la red definir un período de prueba para el producto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

Durante el período de prueba, los clientes pueden usar el producto libremente y no se les facturará hasta que el período de prueba haya finalizado.

### Tarifa de configuración

También puedes aplicar una tarifa de configuración a tu plan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

Esto significa que tu cliente pagará un monto adicional en el primer cargo (además del precio del plan) que corresponde a la tarifa que definiste en esta sección.

### Activo

El interruptor activo define efectivamente si el producto está disponible para los clientes para nuevos registros.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

Si hay clientes existentes en este plan, configurar el interruptor en su estado desactivado efectivamente ancianiza el plan, eliminándolo de los registros futuros. **Los clientes existentes en el plan seguirán siendo facturados** hasta que se transfieran a un nuevo plan o se eliminen del plan.

### Imagen del producto

El botón **Upload Image** permite al administrador de la red utilizar la biblioteca de medios para seleccionar o subir una imagen del producto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Eliminar

El botón **Delete Product** elimina el producto del sistema. Aparece una vez que el producto está publicado.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

A diferencia de otras eliminaciones, el producto no se coloca en ningún estado de papelera. Por lo tanto, una vez eliminado, la acción es irreversible.

### Opciones de producto

Una vez que se define la información básica del producto, las opciones de producto ayudan al administrador de la red a definir aún más los atributos específicos del producto.

#### General

La pestaña **General** define los atributos generales del producto que no son aplicables a ninguna de las otras pestañas específicas del producto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-z32g4XQeyT.png)

El **product slug** autoexplicativo define el slug con el que se identifica el producto en URLs y otras áreas de Ultimate Multisite.

Ultimate Multisite admite varios tipos de productos, a saber, Plan, Paquete y Servicio. Las pestañas **Product Options** se ajustan dinámicamente según el tipo de producto especificado.

El **Customer Role** especifica el rol que se asigna al cliente cuando se crea el sitio. Normalmente, para la mayoría de los administradores de red, será el rol predeterminado de Ultimate Multisite o Administrador. El rol predeterminado de Ultimate Multisite se puede establecer en **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Subidas y bajadas

Esta pestaña especifica las rutas de actualización y degradación disponibles para un cliente dentro de su nivel específico.

Para comprender este concepto, considera un ejemplo donde una instalación de Ultimate Multisite especializada ofrece soluciones de gestión de aprendizaje a sus clientes. Para lograr esto se definen tres planes (Basic, Plus y Premium) y se activan plugins específicos para cada plan (ver más adelante en esta sección para instrucciones sobre cómo activar plugins).

Si la instalación de Ultimate Multisite también atiende sitios web empresariales o de comercio electrónico, esos planes pueden requerir diferentes plugins para ser instalados y activados.

En este sentido, sería indeseable y problemático permitir que los clientes de eLearning se transfieran a planes de eCommerce, ya que estos planes, precios y limitaciones pueden no ser adecuados.

Por lo tanto, para restringir la ruta del cliente y prevenir incidentes, el administrador de la red puede definir un grupo de planes y, dentro de ese grupo, especificar los planes a los que el cliente puede migrar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JnrZ4fWFEC.png)

Para definir un grupo de planes, especifica los planes compatibles dentro de la lista **plan group**. El **product order** determina cómo se ordenan y muestran los planes de menor a mayor.

Ultimate Multisite también incluye una función **order bump** donde se pueden agregar productos y servicios complementarios apropiados a los planes. Estos se ofrecen al cliente como artículos adicionales que pueden añadirse a los planes en el proceso de pago o durante una actualización.

#### Variaciones de precios

Las variaciones de precios permiten al administrador de la red especificar niveles de precios alternativos según la duración. Esta configuración permite establecer niveles de precios de 3 meses, 6 meses o anuales, o cualquier otra duración y frecuencia determinada por el caso de uso.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-d75YUO3opm.png)

Para establecer variaciones de precios, activa el interruptor **enable price variations** y haz clic en el botón **Add new Price Variation**.

Para ingresar una variación, establece la duración, el período y el precio de la variación. Se pueden ingresar variaciones adicionales haciendo clic en el botón nuevamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Impuestos

La pestaña **Taxes** se alinea con la configuración de impuestos especificada en **Ultimate Multisite > Settings > Taxes** y, más específicamente, con las tasas de impuestos definidas. Para habilitar impuestos y definir las tasas de impuestos aplicables, consulta la documentación en **Ultimate Multisite: Settings**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)

En un ejemplo anterior, definimos una tasa de impuesto local del 7.25% aplicable a clientes en California (Estados Unidos de América).

Una vez que la tasa de impuesto está definida en **Ultimate Multisite > Settings > Manage Tax Rates**, se puede seleccionar a nivel de producto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Sh1BVGVj6i.png)

Para indicar que un producto es un artículo sujeto a impuestos, activa el interruptor **Is Taxable** y selecciona la tasa de impuesto aplicable en el menú desplegable Tax Category.

#### Plantillas de sitio

En esencia, las plantillas de sitio son sitios web completos de WordPress que se clonan al sitio del cliente al inicio de su suscripción.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-llMSMXCDt4.png)

El administrador de la red crea y configura el sitio de plantilla como un sitio WordPress regular con temas, plugins y contenido activados y configurados. El sitio de plantilla se clona literalmente al cliente.

Esta pestaña permite al administrador de la red especificar el comportamiento de las plantillas de sitio al iniciar una nueva suscripción. Para usar plantillas de sitio, activa el interruptor **allow site templates**.

El **site template selection mode** define el comportamiento de las plantillas de sitio durante el proceso de suscripción.

La configuración **D** **efault** sigue los pasos en el formulario de pago. Si el administrador de la red ha definido un paso de selección de plantilla en el proceso de pago y el paso se ha definido con plantillas, esta configuración respetará las directrices establecidas en el paso de pago.

Especificar **A** **ssign Site Template** fuerza la selección de la plantilla especificada. En consecuencia, se eliminan los pasos de selección de plantilla en el proceso de pago.

Por último, **C** **hoose Available Site Templates** anula las plantillas especificadas en el paso de pago con las plantillas seleccionadas en esta configuración. También se puede definir una plantilla preseleccionada para ayudar al cliente en la selección.

En última instancia, si el administrador de la red desea que la selección de plantillas ocurra en los pasos de pago, la configuración de ‘_default_’ será suficiente. Alternativamente, para eliminar y bloquear la selección de plantillas y delegar la selección a la configuración del plan, las opciones ‘_assign new template_’ o ‘_choose available site templates_’ pueden ser deseables.

#### Sitios

La pestaña **Sites** forma parte de la funcionalidad de limitaciones de Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-A8fzNucGyC.png)

Esta configuración especifica el número máximo de sitios que un cliente puede crear bajo su membresía.

Para habilitar la limitación, activa el interruptor **limit sites** y especifica el número máximo de sitios en el campo **site allowance**.

#### Visitas

La pestaña **Visits** es una parte adicional del sistema de limitaciones de Ultimate Multisite. Esta configuración permite contabilizar y limitar posteriormente los visitantes únicos al sitio del cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e7f5otg89m.png)

Desde una perspectiva de marketing, los administradores de la red pueden usar esta configuración como medio para incentivar a los clientes a actualizar su plan una vez que se alcancen los límites. Esta configuración también puede ayudar al administrador de la red a frenar y prevenir el tráfico excesivo a los sitios para preservar los recursos del sistema.

Para usar esta función, activa el interruptor **limit unique visits** y especifica el número máximo de visitantes únicos en el campo **unique visits quota**.

Una vez que se alcanza este límite, Ultimate Multisite dejará de servir el sitio del cliente en lugar de mostrar un mensaje que indique que se han superado los límites.

#### Usuarios

Las limitaciones de 'Usuarios' de Ultimate Multisite permiten al administrador de la red imponer límites en el número de usuarios que se pueden crear y asignar a roles.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-maGYqW7WlP.png)

Para habilitar la función de limitaciones, activa el interruptor **limit user** deslizando a la derecha.

A continuación, para cada rol que se limitará, activa el interruptor junto a él y define el límite máximo en el campo correspondiente.

#### Tipos de publicación

La pestaña **Post Types** permite al administrador de la red imponer límites granulares en la amplia variedad de tipos de publicación dentro de WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZELQvvqyvn.png)

Debido a la construcción de WordPress, las publicaciones y los tipos de publicación son un componente importante de su funcionalidad central, y por lo tanto el sistema de limitaciones de Ultimate Multisite está diseñado para ayudar al administrador de la red a establecer y mantener límites.

Para habilitar este subsistema de límites, activa el interruptor **limit post types** deslizando a la derecha.

A continuación, para cada tipo de publicación que se limitará, actívalo deslizando a la derecha y especificando el límite máximo en el campo correspondiente.

#### Espacio en disco

La pestaña **Disk Space** permite a los administradores de la red restringir el espacio consumido por los clientes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-EqlaLO0ebw.png)

Típicamente, en un multisite de WordPress, los archivos principales se comparten entre todos los sitios y los directorios individuales creados para archivos multimedia y cargas a los que se aplican estas configuraciones y limitaciones.

Para habilitar la limitación de uso de disco, activa el interruptor **limit disk size per site** deslizando a la derecha.

A continuación, especifica el límite máximo en megabytes en el campo **disk space allowanc** e.

#### Dominio personalizado

Al activar esta opción, puedes permitir dominios personalizados en este plan específicamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KEMuUG76Fg.png)

#### Temas

La pestaña **Themes** dentro de las opciones de producto permite al administrador de la red hacer que los temas estén disponibles para los clientes para su selección y, opcionalmente, forzar el estado del tema.

_**Nota: Para que los temas estén disponibles para los clientes, deben estar habilitados en la red por el administrador de la red.**_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HAQShYB7Y1.png)

La opción **visibility** define si el tema es visible o no para el cliente al ver su pestaña **Appearance > Themes** dentro de su sitio. Configurar esta opción en **Hidden** elimina el tema de la vista y, por lo tanto, restringe la capacidad de seleccionarlo y activarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ivsGIABl55.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La selección **behavior** permite al administrador de la red definir el estado del tema al crear el sitio del cliente.

En el estado **A** **vailable** el tema se hace disponible para que el cliente lo active por sí mismo. Por el contrario, el estado **Not Available** elimina la capacidad del cliente de activar el tema. Por último, la opción **Force Activate** fuerza la selección y activación del tema, estableciéndolo como predeterminado al crear el sitio.

#### Plugins

Similar a la pestaña Temas, Ultimate Multisite permite al administrador de la red definir la visibilidad de los plugins para los clientes, así como su estado al crear un nuevo sitio.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ipzv31FIb6.png)

El menú desplegable **visibility** permite que el plugin sea visible o esté oculto para el cliente cuando se visualiza en su sitio a través de la opción de menú Plugins.

El administrador de la red puede manipular aún más el comportamiento de los plugins utilizando las opciones en el menú desplegable de comportamiento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La selección **Default** respeta el estado del plugin definido en la plantilla de sitio seleccionada por el cliente. Por lo tanto, los plugins que están activados dentro de la plantilla permanecerán activados cuando la plantilla se clone al sitio del cliente.

La opción **Force Activate** coloca el plugin en un estado activo al crear el sitio y, por el contrario, la opción **Force Inactivate** desactiva el plugin al crear el sitio. En ambos casos, el estado del plugin puede cambiarse manualmente por el cliente a través de su menú de Plugins de WordPress.

La configuración **Force Activate & Lock** funciona de manera similar, pero impide que el cliente modifique el estado del plugin. Por lo tanto, una configuración de Force Activate and Lock forzará el plugin a su estado activo y evitará que el cliente lo desactive. De manera similar, la configuración **Force Inactivate & Lock** forzará el plugin a su estado inactivo y evitará que el usuario active el plugin.

El administrador de la red puede considerar las configuraciones Force Activate & Lock y Force Inactivate & Lock junto con las plantillas de sitio, ya que los plugins y los estados de los plugins dentro de las plantillas pueden verse afectados por estas configuraciones si se seleccionan.

#### Restablecer limitaciones

La pestaña **Reset Limitations** restablece todos los límites personalizados definidos en el producto. Para restablecer las limitaciones, haz clic en el botón **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

Para confirmar la acción, desliza el interruptor **confirm reset** a su estado activo a la derecha y haz clic en el botón **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Opciones heredadas

La pestaña **Legacy Options** observa ciertas opciones y comportamientos definidos en Ultimate Multisite 1.x.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Fn3BjwTH4r.png)

Estas opciones se ofrecen para compatibilidad y facilidad de transición y serán desaprobadas en futuras versiones.

## Editar, duplicar o eliminar producto

Los productos existentes pueden editarse, duplicarse o eliminarse navegando a **Ultimate Multisite > Products** y pasando el cursor sobre el nombre del producto existente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GcHtJl6WmV.png)

##
