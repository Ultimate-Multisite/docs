---
title: Registrar punto final de la API
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# El punto final de registro de Ultimate Multisite API

En este tutorial, aprenderás cómo usar el punto final de la API /register de Ultimate Multisite para crear todo el proceso de incorporación de un nuevo cliente en tu red y cómo hacerlo con Zapier.

El punto final utiliza el método POST y se llama mediante la URL _**https://yoursite.com/wp-json/wu/v2/register**_. En esta llamada, se ejecutarán 4 procesos dentro de tu red:

  * Se creará un nuevo usuario de WordPress o se identificará mediante el ID de usuario.
  * Se creará un nuevo Cliente en Ultimate Multisite o se identificará mediante el ID de cliente.
  * Se creará un nuevo sitio en la red de WordPress.
  * Al final, se creará una nueva Membresía en Ultimate Multisite.

Para este proceso, necesitarás tus credenciales de API. Para obtenerlas, ve al panel de administración de tu red, navega a **Ultimate Multisite > Settings** > **API & Webhooks**, y busca la sección de Configuración de API.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzcShcSVgI.png)  
Selecciona **Habilitar API** y obtén tus credenciales de API.

Ahora, exploremos el punto final y luego creemos una acción de registro en Zapier.

## Parámetros del cuerpo del endpoint

Echemos un vistazo a la información mínima que necesitamos enviar al punto final. Al final de este artículo, encontrarás la llamada completa.

### Cliente

Esta es la información necesaria para el proceso de creación del Usuario y del Cliente de Ultimate Multisite:

"customer_id" : integer

Es posible enviar el ID de cliente creado en tu red. Si no se envía, la información a continuación se utilizará para crear un nuevo cliente y un nuevo usuario de WordPress. El ID de usuario también se puede enviar de la misma manera que el ID de cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membresía**

La única información que necesitamos dentro de este objeto es el Estado de la Membresía.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Productos**

Los productos se proporcionan en un array con 1 o más ID de producto de tu red. Ten en cuenta que este punto final no crea productos. Consulta la documentación de Ultimate Multisite para comprender mejor el punto final de creación de productos.

**"products" : [1,2],**

### Pago

Al igual que con la Membresía, solo necesitamos el estado.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sitio

Y para cerrar el cuerpo, necesitamos la URL y el Título del sitio, ambos dentro del objeto Sitio.

**"site" : { "site_url" : "string", "site_title" : "string" }**

La respuesta del punto final de registro será un array con la información de la membresía recién creada.

## Creando una acción en Zapier

Con la introducción de este nuevo y más robusto punto final de creación de cuentas, también tendrás acceso a una nueva acción en Zapier.

¿Sabes cómo usar y disfrutar de todo lo que ofrece la nueva versión de Zapier? Aprende más aquí. (enlace?)

### Creando una acción

Para ilustrar mejor cómo usar el punto final de registro con Zapier, crearemos una integración con Google Forms. Cada vez que se complete este formulario y la información se guarde en la hoja de respuestas del formulario, se creará una nueva membresía en la red de Ultimate Multisite.

En Google Forms, crea un formulario con los campos mínimos necesarios para crear una nueva membresía en la red.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xaVRQkloWg.png)

Ahora, en Zapier, crea un nuevo Zap y conecta el formulario creado en Google a través de la hoja de cálculo donde se guardan los datos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-67iVl1XK46.png)

¡Listo! El formulario de Google Forms está conectado con Zapier y listo para integrarse con la red. Ahora pasemos a la Acción que resultará del Trigger que Google Forms dispara cada vez que se rellena.

Localiza la nueva aplicación Ultimate Multisite y selecciónala. Para este tipo de Zap, elige la opción Registrar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hq2yHGYR31.png)

Después de este primer paso, elige la cuenta que se conectará con este Zap. ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BuyTLt0JUM.png)

Esta es la parte más sensible de todo el proceso. Necesitamos emparejar los campos que provienen de Google Forms con los campos mínimos necesarios para el punto final de registro, como se muestra en la sección anterior de este artículo.

En este ejemplo, solo necesitamos configurar el nombre de usuario, correo electrónico, contraseña, nombre y URL del sitio web. El resto queda predefinido para que todas las membresías generadas en este Google Forms sigan el mismo patrón de producto y estado.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4pjTVOmauz.png)

Con la información configurada, procede a la prueba final. En la última pantalla puedes ver todos los campos que se enviarán al punto final, su información respectiva y los campos que se enviarán vacíos. ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fD2A9dYbDs.png)

Prueba tu nuevo Zap y debería completarse con éxito. Si ocurre algún error, revisa todos los campos y verifica que se estén enviando correctamente. Dado que hay mucha información, algunas cosas pueden pasar desapercibidas.

### Parámetros completos del punto final

Aquí tienes la llamada completa y todas las posibilidades de campos que se pueden enviar.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
