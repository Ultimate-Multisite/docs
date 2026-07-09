---
title: Registrar endpoint de API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# El punto de conexión de la API Register de Ultimate Multisite

En este tutorial, aprenderás cómo usar el punto de conexión de la API /register de Ultimate Multisite para crear todo el proceso de incorporación de un nuevo cliente en tu red y cómo hacerlo con Zapier.

El punto de conexión usa el método POST y se llama mediante la URL _**https://yoursite.com/wp-json/wu/v2/register**_. En esta llamada, se ejecutarán 4 procesos dentro de tu red:

  * Se creará un nuevo usuario de WordPress o su identificación mediante el ID de usuario.

  * Se creará un nuevo Cliente en Ultimate Multisite o su identificación mediante el ID de cliente.

  * Se creará un nuevo sitio en la red de WordPress.

  * Al final, se creará una nueva Membresía en Ultimate Multisite.

Para este proceso, necesitarás tus credenciales de API. Para obtenerlas, ve al panel de administración de tu red, navega a **Ultimate Multisite > Settings** > **API & Webhooks,** y busca la sección API Settings.

![Sección API Settings en Ultimate Multisite](/img/config/settings-api.png)

Aquí tienes una vista completa de la página de configuración de la API:

![Página completa de configuración de la API](/img/config/settings-api-full.png)

Selecciona **Enable API** y obtén tus credenciales de API.

Ahora, exploremos el punto de conexión y luego creemos una acción de registro en Zapier.

## Parámetros del cuerpo del punto de conexión

Veamos una descripción general de la información mínima que necesitamos enviar al punto de conexión. Al final de este artículo, encontrarás la llamada completa.

### Cliente

Esta es la información necesaria para el proceso de creación del Usuario y del Cliente de Ultimate Multisite:

"customer_id" : integer

Es posible enviar el ID de cliente creado en tu red. Si no se envía, la información siguiente se usará para crear un nuevo cliente y un nuevo usuario de WordPress. El ID de usuario también se puede enviar de la misma manera que el ID de cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membresía**

La única información que necesitamos dentro de este objeto es el Estado de la Membresía.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Productos**

Los productos se proporcionan como un array con 1 o más ID de producto de tu red. Ten cuidado: este punto de conexión no crea productos. Consulta la documentación de Ultimate Multisite para comprender mejor el punto de conexión de creación de productos.

**"products" : [1,2],**

### Pago

Al igual que con la Membresía, solo necesitamos el estado.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sitio

Y para cerrar el cuerpo necesitamos la URL y el Título del sitio, ambos dentro del objeto Sitio.

**"site" : { "site_url" : "string", "site_title" : "string" }**

La respuesta del punto de conexión de registro será un array con la información de la membresía recién creada.

## Crear una acción en Zapier

Con la introducción de este nuevo y más robusto punto de conexión de creación de cuentas, también accederás a una nueva acción en Zapier.

¿Sabes cómo usar y aprovechar todo lo que ofrece la nueva versión de Zapier? Obtén más información aquí. (¿enlace?)

### Crear una acción

Para ilustrar mejor cómo usar el punto de conexión de registro con Zapier, creemos una integración con Google Forms. Cada vez que se complete este formulario y la información se guarde en la hoja de respuestas del formulario, se creará una nueva membresía en la red de Ultimate Multisite.

En Google Forms, crea un formulario con los campos mínimos necesarios para crear una nueva membresía en la red.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ahora, en Zapier, crea un nuevo Zap y conecta el formulario creado en Google mediante la hoja de cálculo donde se guardan los datos.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

¡Listo! El formulario de Google Forms está conectado con Zapier y preparado para integrarse con la red. Ahora pasemos a la Acción que resultará del Trigger que Google Forms activa cada vez que se completa.

Localiza la nueva app de Ultimate Multisite y selecciónala. Para este tipo de Zap, elige la opción Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Después de este primer paso, elige la cuenta que se conectará con este Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Esta es la parte más delicada de todo el proceso. Necesitamos hacer coincidir los campos que vinieron de Google Forms con los campos mínimos necesarios para el punto de conexión de registro, como se muestra en la sección anterior de este artículo.

En este ejemplo, solo necesitamos configurar el nombre de usuario, el correo electrónico, la contraseña, el nombre y la URL del sitio web. El resto queda predeterminado para que todas las membresías generadas en este Google Forms sigan el mismo patrón de producto y estado.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Con la información configurada, continúa con la prueba final. En la última pantalla puedes ver todos los campos que se enviarán al punto de conexión, su información respectiva y los campos que se enviarán vacíos.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Prueba tu nuevo Zap y debería completarse correctamente. Si ocurre algún error, revisa todos los campos y si se están enviando correctamente. Como hay mucha información, algunas cosas pueden pasar desapercibidas.

### Parámetros completos del punto de conexión

Aquí está la llamada completa y todas las posibilidades de campos que se pueden enviar.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
