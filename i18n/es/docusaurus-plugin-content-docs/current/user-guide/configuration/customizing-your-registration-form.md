---
title: Personalización de tu formulario de registro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizar tu formulario de registro

Para hacer que tu red se vea única frente a todos los demás SaaS construidos sobre la plataforma WordPress, Ultimate Multisite te permite personalizar tus páginas de registro e inicio de sesión con nuestra función **Checkout Forms**.

Aunque son una forma fácil y flexible de experimentar con diferentes enfoques al intentar convertir nuevos clientes, se usan principalmente para crear formularios de registro personalizados. Este artículo tiene como objetivo mostrarte cómo puedes hacerlo.

## Páginas de inicio de sesión y registro: {#login-and-registration-pages}

Tras la instalación de Ultimate Multisite, se crean automáticamente páginas personalizadas de inicio de sesión y registro en tu sitio principal. Puedes cambiar estas páginas predeterminadas en cualquier momento yendo a tu página **Ultimate Multisite > Settings > Login & Registration**.

![Página de ajustes de inicio de sesión y registro](/img/config/settings-general.png)

Aquí tienes una vista completa de la página de ajustes de inicio de sesión y registro:

![Página completa de ajustes de inicio de sesión y registro](/img/config/settings-login-registration-full.png)

Veamos cada una de las opciones que puedes personalizar en la página **Login & Registration**:

  * **Enable registration:** Esta opción activará o desactivará el registro en tu red. Si está desactivada, tus clientes no podrán registrarse ni suscribirse a tus productos.

  * **Enable email verification:** Si esta opción está activada, los clientes que se suscriban a un plan gratuito o a un plan de pago con un período de prueba recibirán un correo electrónico de verificación y deberán hacer clic en el enlace de verificación para que se creen sus sitios web.

  * **Default registration page:** Esta es la página predeterminada para el registro. Esta página debe estar publicada en tu sitio web y tener un formulario de registro (también conocido como checkout form), donde tus clientes se suscribirán a tus productos. Puedes crear tantas páginas de registro y checkout forms como quieras, solo recuerda poner el shortcode del checkout form en la página de registro; de lo contrario, no aparecerá.

  * **Use custom login page:** Esta opción te permite usar una página de inicio de sesión personalizada, distinta de la página predeterminada wp-login.php. Si esta opción está activada, puedes seleccionar qué página se usará para el inicio de sesión en la opción **Default login page** (justo debajo).

  * **Obfuscate the original login url (wp-login.php)** : Si quieres ocultar la URL original de inicio de sesión, puedes activar esta opción. Esto es útil para prevenir ataques de fuerza bruta. Si esta opción está habilitada, Ultimate Multisite mostrará un error 404 cuando un usuario intente acceder al enlace original wp-login.php

  * **Force synchronous site publication:** Después de que un cliente se suscribe a un producto en una red, el nuevo sitio pendiente debe convertirse en un sitio real de la red. El proceso de publicación ocurre mediante Job Queue, de forma asíncrona. Habilita esta opción para forzar que la publicación ocurra en la misma solicitud que el registro.

Ahora, veamos otras opciones que siguen siendo relevantes para el proceso de inicio de sesión y registro. Están justo debajo de **Other options** en la misma página Login & registration:

  * **Default role:** Este es el rol que tendrán tus clientes en su sitio web después del proceso de registro.

  * **Enable Jumper:** Habilita el atajo Jumper en el área de administración. Jumper permite a los administradores saltar rápidamente a pantallas de Ultimate Multisite, objetos de red y otros destinos compatibles sin navegar por cada menú. Desactívalo si prefieres ocultar esa herramienta de navegación rápida de la interfaz de administración.

  * **Add users to the main site as well:** Habilitar esta opción también añadirá al usuario al sitio principal de tu red después del proceso de registro. Si habilitas esta opción, también aparecerá justo debajo una opción para establecer el **rol predeterminado** de estos usuarios en tu sitio web.

  * **Enable multiple accounts:** Permite que los usuarios tengan cuentas en diferentes sitios de tu red con la misma dirección de correo electrónico. Si esta opción está desactivada, tus clientes no podrán crear una cuenta en otros sitios web que se ejecuten en tu red con la misma dirección de correo electrónico.

¡Y esas son todas las opciones relacionadas con el inicio de sesión y el registro que puedes personalizar! No olvides guardar tus ajustes después de terminar de editarlos.

## Usar múltiples formularios de registro: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 ofrece un editor de checkout forms que te permite crear tantos formularios como quieras, con diferentes campos, productos en oferta, etc.

Tanto la página de inicio de sesión como la de registro se integran con shortcodes: **[wu_login_form]** en la página de inicio de sesión y**[wu_checkout]** para la página de registro. Puedes personalizar aún más la página de registro construyendo o creando checkout forms.

Para acceder a esta función, ve al menú **Checkout Forms**, en la barra lateral izquierda.

![Menú Checkout Forms en la barra lateral](/img/config/checkout-forms-list.png)

En esta página, puedes ver todos los checkout forms que tienes.

Si quieres crear uno nuevo, simplemente haz clic en **Add Checkout Form** en la parte superior de la página.

Puedes seleccionar una de estas tres opciones como punto de partida: un solo paso, varios pasos o en blanco. Luego, haz clic en **Go to the Editor**.

![Añadir Checkout Form con opciones de un solo paso, varios pasos o en blanco](/img/config/checkout-forms-list.png)

Como alternativa, puedes editar o duplicar los formularios que ya tienes haciendo clic en las opciones debajo de su nombre. Allí también encontrarás las opciones para copiar el shortcode del formulario o eliminar el formulario.

![Acciones al pasar el cursor sobre el checkout form con editar, duplicar y eliminar](/img/config/checkout-form-hover-actions.png)

Si seleccionas un solo paso o varios pasos, el checkout form ya estará prerellenado con los pasos básicos para que funcione. Luego, si quieres, puedes añadirle pasos adicionales.

### Editar un Checkout Form: {#editing-a-checkout-form}

Como mencionamos antes, puedes crear checkout forms para diferentes propósitos. En este ejemplo trabajaremos en un formulario de registro.

Después de navegar al editor de checkout form, dale a tu formulario un nombre (que se usará solo como referencia interna) y un slug (usado para crear shortcodes, por ejemplo).

![Editor de formulario de pago con campos de nombre y slug](/img/config/checkout-form-name-slug.png)

Los formularios están compuestos por pasos y campos. Puedes añadir un nuevo paso haciendo clic en **Añadir nuevo paso de pago**.

![Botón Añadir nuevo paso de pago](/img/config/checkout-form-add-step.png)

En la primera pestaña de la ventana modal, completa el contenido del paso de tu formulario. Dale un ID, un nombre y una descripción. Estos elementos se usan principalmente internamente.

![Pestaña de contenido del paso de pago con ID, nombre y descripción](/img/config/checkout-form-step-content.png)

A continuación, configura la visibilidad del paso. Puedes elegir entre **Mostrar siempre** , **Mostrar solo para usuarios conectados** o **Mostrar solo para invitados**.

![Opciones de visibilidad del paso de pago](/img/config/checkout-form-step-visibility.png)

Por último, configura el estilo del paso. Estos son campos opcionales.

![Configuración de estilo del paso de pago](/img/config/checkout-form-step-style.png)

Ahora es momento de añadir campos a nuestro primer paso. Simplemente haz clic en **Añadir nuevo campo** y selecciona el tipo de sección que quieras.

![Botón Añadir nuevo campo](/img/config/checkout-form-add-field-button.png)![Desplegable de selección de tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

Cada campo tiene diferentes parámetros que completar. Para esta primera entrada, seleccionaremos el campo **Nombre de usuario**.

![Configuración del campo Nombre de usuario](/img/config/checkout-form-username-content.png)![Parámetros del campo Nombre de usuario](/img/config/checkout-form-username-visibility.png)![Ajustes adicionales del campo Nombre de usuario](/img/config/checkout-form-username-style.png)

Puedes añadir tantos pasos y campos como necesites. Para mostrar tus productos para que tus clientes elijan uno, usa el campo Tabla de precios. Si quieres permitir que tus clientes elijan una plantilla, añade el campo Selección de plantilla. Y así sucesivamente.

![Editor de formulario de pago con campo de selección de plantilla](/img/config/checkout-form-with-template-field.png)

_**Nota:** Si creas un producto después de crear tu formulario de pago, tendrás que añadir el producto en la sección Tabla de precios. Si no lo añades, el producto no aparecerá para tus clientes en la página de registro._

_**Nota 2:** nombre de usuario, correo electrónico, contraseña, título del sitio, URL del sitio, resumen del pedido, pago y botón de envío son campos obligatorios para crear un formulario de pago._

Mientras trabajas en tu formulario de pago, siempre puedes usar el botón Vista previa para ver cómo verán el formulario tus clientes. También puedes alternar entre verlo como un usuario existente o como un visitante.

![Botón Vista previa en el editor de formulario de pago](/img/config/checkout-form-preview-button.png)![Vista previa del formulario de pago como visitante o usuario existente](/img/config/checkout-form-preview-modal.png)

Por último, en **Opciones avanzadas** puedes configurar el mensaje para la página de **Agradecimiento**, añadir snippets para hacer seguimiento de conversiones, añadir CSS personalizado a tu formulario de pago o restringirlo a determinados países.

![Opciones avanzadas con página de Agradecimiento, seguimiento de conversiones y CSS personalizado](/img/config/checkout-form-advanced.png)

También puedes activar o desactivar manualmente tu formulario de pago alternando esta opción en la columna derecha, o eliminar el formulario permanentemente.

![Alternador activo y opción de eliminación para formulario de pago](/img/config/checkout-form-active.png)

¡No olvides guardar tu formulario de pago!

![Botón Guardar formulario de pago](/img/config/checkout-form-save.png)

Para obtener el shortcode de tu formulario, haz clic en **Generar shortcode** y copia el resultado mostrado en la ventana modal.

![Modal Generar shortcode con shortcode para copiar](/img/config/checkout-form-editor.png)

_**Nota:** Tendrás que añadir este shortcode a tu página de registro para que este formulario de pago se añada a ella._

## Preseleccionar productos y plantillas mediante parámetros de URL: {#pre-selecting-products-and-templates-via-url-parameters}

Si quieres crear tablas de precios personalizadas para tus productos y preseleccionar en el formulario de pago el producto o la plantilla que tu cliente elija desde tu tabla de precios o página de plantillas, puedes usar parámetros de URL para esto.

### **Para planes:** {#for-plans}

Ve a **Ultimate Multisite > Productos > Seleccionar un plan**. Deberías ver el botón **Haz clic para copiar enlace compartible** en la parte superior de la página. Este es el enlace que puedes usar para preseleccionar este plan específico en tu formulario de pago.

![Página de producto con botón de enlace compartible](/img/config/products-list.png)

Ten en cuenta que este enlace compartible solo es válido para **Planes**. No puedes usar enlaces compartibles para paquetes o servicios.

### Para plantillas: {#for-templates}

Si quieres preseleccionar plantillas de sitio en tu formulario de pago, puedes usar el parámetro: **?template_id=X** en la URL de tu página de registro. La "X" debe ser reemplazada por el **número de ID de la plantilla de sitio**. Para obtener este número, ve a **Ultimate Multisite > Sitios**.

Haz clic en **Gestionar** justo debajo de la plantilla de sitio que quieras usar. Verás el número de SITE ID. Simplemente usa este número para que esta plantilla de sitio específica esté preseleccionada en tu formulario de pago. En nuestro caso aquí, el parámetro de URL sería **?template_id=2**.

![Lista de sitios que muestra el ID de plantilla de sitio](/img/config/site-templates-list.png)

Digamos que el sitio web de nuestra red es [**www.mynetwork.com**](http://www.mynetwork.com) y que nuestra página de registro con nuestro formulario de pago se encuentra en la página **/register**. La URL completa con esta plantilla de sitio preseleccionada se verá así: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Y, si quieres, puedes preseleccionar tanto productos como plantillas para tu formulario de pago. Todo lo que tienes que hacer es copiar el enlace compartible del plan y pegar el parámetro de plantilla al final. Se verá así: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
