---
title: Creación de tu primer producto de suscripción
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Crear tu primer producto de suscripción (v2)

_**NOTA IMPORTANTE: Este artículo es solo para usuarios de Ultimate Multisite versión 2.x. Si estás usando la versión 1.x,**_ **_**consulta este artículo**_**.

Para empezar a gestionar tu red y comenzar a vender tus servicios a usuarios potenciales, necesitas tener diferentes opciones de suscripción. ¿Cómo creas estos productos? ¿Cuáles son los tipos de productos que puedes ofrecer? En este artículo, cubriremos todo lo que necesitas saber sobre los productos.

## Tipo de producto

Con Ultimate Multisite puedes ofrecer dos categorías de productos a tus clientes: **planes** y **complementos** **(incremento de pedido)**. Los complementos se pueden dividir en dos tipos:**paquetes** y **servicios**. A continuación veremos sus diferencias y particularidades.

  * **Planes** : el producto fundamental de Ultimate Multisite. Tu cliente solo puede tener una membresía si está vinculada a un plan. Un plan proporciona a tus clientes uno o más sitios (depende de las configuraciones de tu plan) con las limitaciones que establezcas en la página de edición de tu producto.

  * **Paquetes** : complementos que impactan directamente en las funcionalidades de los planes de Ultimate Multisite. Modifican limitaciones o añaden nuevos recursos, plugins o themes al plan original que compró tu cliente. Por ejemplo, un plan básico podría permitir 1.000 visitas al mes y puedes poner a disposición un paquete que amplíe este número a 10.000.

  * **Servicios:** complementos que no modifican las funcionalidades de Ultimate Multisite. Son tareas que realizarás para tu cliente además del plan que compró. Por ejemplo, tu cliente podría comprar un plan que permite un solo sitio y también pagar por un servicio extra que hará el diseño de este sitio.

## Gestionar productos

Para muchos, la pestaña **Productos** en Ultimate Multisite **(Ultimate Multisite > Productos)** puede equipararse con los planes en un entorno de alojamiento tradicional.

Dentro de Ultimate Multisite, la pestaña Productos define la estructura y las limitaciones aplicables a un producto o servicio específico. Dichas estructuras se extienden a la descripción del producto o servicio, el precio, los impuestos y los permisos.

Esta sección guiará tu comprensión de esta piedra angular esencial de Ultimate Multisite.

![Página de lista de productos](/img/config/products-list.png)

## Añadir productos

Ya sea un plan, paquete o servicio, el punto de entrada para definir un nuevo elemento es a través de **Ultimate Multisite > Productos > Añadir producto**.

![Botón Añadir producto](/img/config/product-add-button.png)

La interfaz contiene dos secciones predominantes. A la izquierda hay varias pestañas que ayudan con la definición del producto y a la derecha hay algunas secciones para definir el precio base del producto, su estado activo y la imagen del producto.

![Vista general de la página de edición del producto](/img/config/product-edit-full.png)

### Descripción

La información base del producto se puede definir proporcionando un nombre y una descripción del producto. Estos identificadores se muestran dondequiera que se requiera la información del producto, como la selección de planes y precios, facturas, mejoras y similares.

![Sección de descripción del producto](/img/config/product-description.png)

### Tipo de precio

En el lado derecho de la interfaz, se puede definir el precio base.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Ultimate Multisite admite tres tipos de precios diferentes. La opción **de pago** solicita al administrador de la red información sobre el precio del producto y la frecuencia de facturación.

### Precio

El componente de precio define el precio base del producto y el intervalo de facturación.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

por lo tanto, un precio de ejemplo de $29.99 con una configuración de 1 mes facturará $29.99 cada mes. Del mismo modo, un precio de $89.97 con una configuración de 3 meses facturará esa cantidad cada trimestre.

### Ciclos de facturación

La sección de ciclos de facturación especifica la frecuencia del intervalo de facturación mencionado anteriormente y generalmente se entiende a la luz de contratos o términos fijos.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Por ejemplo, un precio de producto de $29.99 con un intervalo de 1 mes y 12 ciclos de facturación facturaría $29.99 al mes por el producto durante los siguientes 12 meses. En otras palabras, dicha configuración establecería un término de precio fijo de $29.99 al mes durante 12 meses y luego dejaría de facturar.

### Período de prueba

Activar el interruptor de oferta de prueba permite al administrador de la red definir un período de prueba para el producto.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Durante el período de prueba, los clientes pueden usar el producto de forma gratuita y no se les facturará hasta que el período de prueba haya finalizado.

### Cuota de configuración

También puedes aplicar una cuota de configuración a tu plan.

![Sección de precios y guardado](/img/config/product-pricing-save.png)

Esto significa que tu cliente pagará una cantidad extra en el primer cargo (además del precio del plan) que corresponde a la cuota que definiste en esta sección.

### Activo

El interruptor de activo define efectivamente si el producto está disponible para los clientes para nuevos registros.

![Interruptor de activo](/img/config/product-active.png)

Si hay clientes existentes en este plan, configurar el interruptor en su estado desactivado efectivamente conserva el plan para los clientes actuales, eliminándolo de futuros registros. **Los clientes existentes en el plan seguirán siendo facturados** hasta que sean trasladados a un nuevo plan o eliminados del plan.

### Imagen del producto

El botón **Subir imagen** permite al administrador de la red hacer uso de la biblioteca de medios para seleccionar o subir una imagen del producto.

![Sección de imagen del producto](/img/config/product-image.png)

### Eliminar

El botón **Eliminar producto** elimina el producto del sistema. Aparece una vez que el producto está publicado.

![Sección de eliminar producto](/img/config/product-delete.png)

A diferencia de otras eliminaciones, el producto no se coloca en ningún estado de papelera. Por lo tanto, una vez eliminado, la acción es irreversible.

### Opciones del producto

Una vez definida la información del producto a nivel base, las opciones del producto ayudan al administrador de la red a definir con más detalle los atributos específicos del producto.

#### General

La pestaña **General** define los atributos generales del producto que no son aplicables a ninguna de las otras pestañas específicas del producto.

![Pestaña General](/img/config/product-general-tab.png)

El autoexplicativo **slug del producto** define el slug con el que se identifica el producto en las URL y otras áreas de Ultimate Multisite.

Ultimate Multisite admite varios tipos de producto, concretamente Plan, Paquete y Servicio. Las pestañas de **Opciones del producto** se ajustan dinámicamente según el tipo de producto especificado.

El **Rol del cliente** especifica el rol que se asigna al cliente cuando se crea el sitio. Normalmente, para la mayoría de los administradores de red, será el valor predeterminado de Ultimate Multisite o Administrador. El rol predeterminado de Ultimate Multisite se puede establecer en **Ultimate Multisite > Settings > Login & Registration**.

![Ajustes de rol del cliente](/img/config/product-customer-role-settings.png)

#### Subidas y bajadas de categoría

Esta pestaña especifica las rutas de subida y bajada de categoría disponibles para un cliente dentro de su nivel específico.

Para entender este concepto, considera un ejemplo en el que una instalación de nicho de Ultimate Multisite proporciona soluciones de gestión del aprendizaje a sus clientes. Para lograrlo, se definen tres planes (Básico, Plus y Premium) y se activan plugins específicos para cada plan (consulta más adelante en esta sección las instrucciones sobre cómo activar plugins).

Si la instalación de Ultimate Multisite también da servicio a sitios web empresariales o sitios web de eCommerce, esos planes pueden requerir que se instalen y activen plugins diferentes.

En este sentido, sería indeseable y problemático permitir que los clientes de eLearning pasen a planes de eCommerce, ya que estos planes, precios y limitaciones pueden no ser adecuados.

Por lo tanto, para restringir la ruta del cliente y evitar incidentes, el administrador de la red puede definir un grupo de planes y, dentro de ese grupo, especificar los planes a los que el cliente puede cambiar.

![Pestaña Subidas y bajadas de categoría](/img/config/product-upgrades.png)

Para definir un grupo de planes, especifica los planes compatibles dentro de la lista **grupo de planes**. El **orden del producto** determina cómo se ordenan y muestran los planes, del más bajo al más alto.

Ultimate Multisite también incluye una función de **order bump**, mediante la cual se pueden añadir a los planes productos y servicios complementarios adecuados. Estos se ofrecen al cliente como elementos adicionales que se pueden añadir a los planes durante el pago o durante una subida de categoría.

#### Variaciones de precio

Las variaciones de precio permiten al administrador de la red especificar niveles de precios alternativos según la duración. Este ajuste permite ofrecer el mismo producto con facturación mensual, trimestral, anual o cualquier otro período de facturación. Por ejemplo, puedes configurar un producto a $29.99/mes con una opción anual con descuento a $249.99/año.

![Pestaña Variaciones de precio](/img/config/product-price-variations-tab.png)

Para establecer variaciones de precio, activa el conmutador **Habilitar variaciones de precio** y haz clic en el botón **Añadir nueva variación de precio**.

![Variaciones de precio del producto](/img/config/product-price-variations.png)

Para introducir una variación, establece la duración, el período y el precio de la variación. Se pueden introducir variaciones adicionales haciendo clic de nuevo en el botón.

Por ejemplo, si el precio base de tu producto es $29.99 al mes, podrías añadir:

  * **3 meses** a $79.99 (un pequeño descuento respecto al precio mensual)
  * **1 año** a $249.99 (un descuento significativo por el compromiso anual)

:::tip Mostrar un conmutador de período de facturación en la interfaz pública

Las variaciones de precio por sí solas no añaden un conmutador o interruptor al pago de la interfaz pública. Para permitir que los clientes cambien entre períodos de facturación (por ejemplo, Mensual / Anual), debes añadir un campo de **Selección de período** a tu formulario de pago. Consulta [Formularios de pago: añadir un conmutador de selección de período](checkout-forms#adding-a-period-selection-toggle) para obtener instrucciones paso a paso.
:::

#### Impuestos

La pestaña **Impuestos** se alinea con los ajustes de impuestos especificados en **Ultimate Multisite > Settings > Taxes** y, más concretamente, con las tasas de impuestos definidas. Para habilitar impuestos y definir las tasas de impuestos aplicables, consulta la documentación en **Ultimate Multisite: Settings**

![Pestaña Impuestos](/img/config/product-taxes.png)

En un ejemplo anterior, definimos una tasa de impuesto local del 7.25% aplicable a clientes de California (Estados Unidos de América).

Una vez que la tasa de impuesto se define en **Ultimate Multisite > Settings > Manage Tax Rates**, se puede seleccionar a nivel de producto.

![Pestaña Impuestos](/img/config/product-taxes.png)

Para indicar que un producto es un elemento imponible, activa el conmutador **Es imponible** y selecciona la tasa de impuesto aplicable en el menú desplegable Categoría de impuestos.

#### Plantillas de sitio

En esencia, las plantillas de sitio son sitios web completos de WordPress que se clonan en el sitio de un cliente al inicio de su suscripción.

![Pestaña Plantillas de sitio](/img/config/product-site-templates.png)

El administrador de la red crea y configura el sitio de plantilla como un sitio normal de WordPress, con themes, plugins y contenido activados y configurados. El sitio de plantilla se clona literalmente para el cliente.

Esta pestaña permite al administrador de la red especificar el comportamiento de las plantillas de sitio al iniciar una nueva suscripción. Para usar plantillas de sitio en este plan, activa el conmutador **Permitir plantillas de sitio**.

Cuando **Permitir plantillas de sitio** está deshabilitado, los clientes del plan no pueden elegir plantillas aunque un formulario de pago, un enlace compartible o un parámetro de URL las pusieran disponibles de otro modo. Ultimate Multisite ahora aplica este límite mediante una cadena de respaldo en los puntos de entrada disponibles: primero se comprueban los ajustes del plan, luego los ajustes de plantillas del formulario de pago y, por último, las plantillas preseleccionadas o proporcionadas por URL. Esto mantiene coherentes los límites del plan y evita que aparezcan plantillas para productos que no deberían ofrecerlas.

El **modo de selección de plantilla de sitio** define el comportamiento de las plantillas de sitio durante el proceso de suscripción.

La configuración **P** **redeterminada** sigue los pasos del formulario de checkout. Si el administrador de la red ha definido un paso de selección de plantilla en el proceso de checkout y el paso se ha definido con plantillas, esta configuración respetará las directrices establecidas en el paso de checkout.

Especificar **A** **signar plantilla de sitio** fuerza la selección de la plantilla especificada. En consecuencia, se eliminan todos los pasos de selección de plantilla en el proceso de checkout.

Por último, **E** **legir plantillas de sitio disponibles** sustituye las plantillas especificadas en el paso de checkout por las plantillas seleccionadas en esta configuración. También se puede definir una plantilla preseleccionada para ayudar al cliente en la selección.

En última instancia, si el administrador de la red desea que la selección de plantilla ocurra en los pasos de checkout, la configuración de ' _predeterminado_ ' será suficiente. Como alternativa, para eliminar y bloquear la selección de plantilla y delegar la selección en la configuración del plan, las opciones ' _asignar nueva plantilla_ ' o ' _elegir plantillas de sitio disponibles_ ' pueden ser deseables.

#### Sitios

La pestaña **Sitios** forma parte de la funcionalidad de limitaciones de Ultimate Multisite.

![Pestaña Sitios](/img/config/product-sites.png)

Esta configuración especifica el número máximo de sitios que un cliente puede crear bajo su membresía.

Para activar la limitación, establece el interruptor **limitar sitios** en su estado activo y especifica el número máximo de sitios en el campo **asignación de sitios**.

#### Visitas

La pestaña **Visitas** es otra parte del sistema de limitaciones de Ultimate Multisite. Esta configuración permite contabilizar y posteriormente limitar los visitantes únicos al sitio de un cliente.

![Pestaña Visitas](/img/config/product-visits.png)

Desde una perspectiva de marketing, los administradores de la red pueden utilizar esta configuración como medio para animar a los clientes a mejorar su plan una vez que se alcancen los límites. Esta configuración también puede ayudar al administrador de la red a controlar y prevenir el tráfico excesivo hacia los sitios para preservar los recursos del sistema.

Para utilizar esta función, establece el interruptor **limitar visitas únicas** en su estado activo y especifica el número máximo de visitantes únicos en el campo **cuota de visitas únicas**.

Una vez que se alcance este límite, Ultimate Multisite dejará de servir el sitio del cliente en lugar de mostrar un mensaje para indicar que se han superado los límites.

#### Usuarios

Las limitaciones de 'Usuarios' de Ultimate Multisite permiten al administrador de la red imponer límites al número de usuarios que se pueden crear y asignar a roles.

![Pestaña Usuarios](/img/config/product-users.png)

Para activar la función de limitaciones, establece el interruptor **limitar usuario** en su estado activo deslizándolo hacia la derecha.

A continuación, para cada rol que deba limitarse, establece el interruptor junto a él en un estado activo y define el límite máximo superior en el campo correspondiente.

#### Tipos de entrada

La pestaña **Tipos de entrada** permite al administrador de la red imponer límites granulares sobre la amplia variedad de tipos de entrada dentro de WordPress.

![Pestaña Tipos de entrada](/img/config/product-post-types.png)

Debido a la construcción de WordPress, las entradas y los tipos de entrada son un componente importante de su funcionalidad principal y, por tanto, el sistema de limitaciones de Ultimate Multisite está diseñado para ayudar al administrador de la red a establecer y mantener límites.

Para activar este subsistema de límites, establece el interruptor **limitar tipos de entrada** en su estado activo deslizándolo hacia la derecha.

A continuación, para cada tipo de entrada que deba limitarse, actívalo deslizándolo hacia la derecha y especificando el límite máximo superior en el campo correspondiente.

#### Espacio en disco

La pestaña **Espacio en disco** permite a los administradores de red restringir el espacio consumido por los clientes.

![Pestaña Espacio en disco](/img/config/product-disk-space.png)

Normalmente, en un multisitio de WordPress, los archivos principales se comparten entre todos los sitios y se crean directorios individuales para archivos multimedia y subidas, a los cuales se aplican estas configuraciones y limitaciones.

Para activar la limitación de uso de disco, establece el interruptor **limitar tamaño de disco por sitio** en su estado activo deslizándolo hacia la derecha.

A continuación, especifica el límite máximo superior en megabytes en el campo **asignación de espacio en disc** o.

#### Dominio personalizado

Al activar esta opción, puedes permitir dominios personalizados específicamente en este plan.

![Pestaña Dominios personalizados](/img/config/product-custom-domains.png)

#### Temas

La pestaña **Temas** dentro de las opciones del producto permite al administrador de la red poner temas a disposición de los clientes para su selección y, opcionalmente, forzar el estado del tema.

![Pestaña Temas](/img/config/product-themes.png)

_**Nota: Para que los temas estén disponibles para los clientes, deben ser habilitados en la red por el administrador de la red.**_

![Página de temas de red](/img/config/product-themes-network-enabled.png)

La opción **visibilidad** define si este tema es visible o no para el cliente al ver su pestaña **Apariencia > Temas** dentro de su sitio. Establecer esta opción en **Oculto** elimina el tema de la vista y, por tanto, restringe la capacidad de seleccionarlo y activarlo.

![Pestaña Temas](/img/config/product-themes.png)

La selección de **comportamiento** permite al administrador de la red definir el estado del tema al crear el sitio del cliente.

En el estado **D** **isponible**, el tema se pone a disposición del cliente para que lo active por sí mismo. Por el contrario, el estado **No disponible** elimina para el cliente la capacidad de activar el tema. Por último, la opción **Forzar activación** fuerza la selección y activación del tema, estableciéndolo así como predeterminado al crear el sitio.

#### Plugins

De forma similar a la pestaña Temas, Ultimate Multisite permite al administrador de la red definir la visibilidad de los plugins para los clientes, así como su estado al crear un nuevo sitio.

![Pestaña Plugins](/img/config/product-plugins.png)

El desplegable **visibilidad** permite que el plugin sea visible u oculto para el cliente cuando se visualiza en su sitio a través de la opción de menú Plugins.

El administrador de la red puede manipular aún más el comportamiento de los plugins utilizando las opciones del menú desplegable de comportamiento.

![Pestaña Plugins](/img/config/product-plugins.png)

La selección **Default** respeta el estado del plugin definido en la plantilla del sitio seleccionada por el cliente. Por lo tanto, los plugins que estén activados dentro de la plantilla permanecerán activados cuando la plantilla se clone en el sitio del cliente.

**Force Activate** coloca el plugin en un estado activo al crear el sitio y, a la inversa, **Force Inactivate** desactiva el plugin al crear el sitio. En ambas circunstancias, el estado del plugin puede ser alterado manualmente por el cliente a través de su menú de Plugins de WordPress.

La configuración **Force Activate & Lock** funciona de manera similar, pero impide que el cliente altere el estado del plugin. Por lo tanto, una configuración de Force Activate and Lock forzará el plugin a su estado activo e impedirá que el cliente lo desactive. De manera similar, la configuración **Force Inactivate & Lock** forzará el plugin a su estado inactivo e impedirá que el usuario active el plugin.

El administrador de la red puede considerar las configuraciones Force Activate & Lock y Force Inactivate & Lock junto con las plantillas de sitio, ya que los plugins y los estados de los plugins dentro de las plantillas pueden verse afectados por estas configuraciones si se seleccionan.

#### Restablecer limitaciones

La pestaña **Reset Limitations** restablece todos los límites personalizados definidos en el producto. Para restablecer las limitaciones, haz clic en el botón **reset limitations**.

![Pestaña Reset Limitations](/img/config/product-reset-limitations.png)

Para confirmar la acción, desliza el interruptor **confirm reset** a su estado activo a la derecha y haz clic en el botón **reset limitations**.

![Pestaña Reset Limitations](/img/config/product-reset-limitations.png)

## Editar, duplicar o eliminar producto

Los productos existentes se pueden editar, duplicar o eliminar navegando a **Ultimate Multisite > Products** y pasando el cursor sobre el nombre del producto existente.

![Acciones al pasar el cursor sobre el producto](/img/config/product-hover-actions.png)
