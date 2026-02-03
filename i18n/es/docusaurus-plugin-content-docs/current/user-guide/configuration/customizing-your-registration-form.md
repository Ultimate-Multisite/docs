---
title: Personalizando su formulario de registro
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Personalizando tu formulario de registro

Para que tu red se vea única entre todos los demás SaaS construidos sobre la plataforma WordPress, Ultimate Multisite te permite personalizar tus páginas de registro e inicio de sesión con nuestra función **Checkout Forms**.

Aunque son una forma fácil y flexible de experimentar con diferentes enfoques al intentar convertir nuevos clientes, se utilizan principalmente para crear formularios de registro personalizados. Este artículo tiene como objetivo mostrarte cómo puedes hacerlo.

## Páginas de inicio de sesión y registro:

Al instalar Ultimate Multisite, se crean automáticamente páginas de inicio de sesión y registro personalizadas en tu sitio principal. Puedes cambiar estas páginas predeterminadas en cualquier momento yendo a tu página **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

Echemos un vistazo a cada una de las opciones que puedes personalizar en la página **Login & Registration**:

  * **Enable registration:** Esta opción habilita o deshabilita el registro en tu red. Si se desactiva, tus clientes no podrán registrarse y suscribirse a tus productos.

  * **Enable email verification:** Si esta opción está activada, los clientes que se suscriban a un plan gratuito o a un plan de pago con período de prueba recibirán un correo electrónico de verificación y deberán hacer clic en el enlace de verificación para que se creen sus sitios web.

  * **Default registration page:** Esta es la página predeterminada para el registro. Esta página debe publicarse en tu sitio web y contener un formulario de registro (también conocido como formulario de pago) - donde tus clientes se suscribirán a tus productos. Puedes crear tantas páginas de registro y formularios de pago como desees, solo recuerda colocar el shortcode del formulario de pago en la página de registro, de lo contrario no aparecerá.

  * **Use custom login page:** Esta opción te permite usar una página de inicio de sesión personalizada, en lugar de la página predeterminada wp-login.php. Si esta opción está activada, puedes seleccionar qué página se usará para el inicio de sesión en la opción **Default login page** (justo debajo).

  * **Obfuscate the original login url (wp-login.php)**: Si deseas ocultar la URL original de inicio de sesión, puedes activar esta opción. Es útil para prevenir ataques de fuerza bruta. Si esta opción está habilitada, Ultimate Multisite mostrará un error 404 cuando un usuario intente acceder al enlace original wp-login.php.

  * **Force synchronous site publication:** Después de que un cliente se suscriba a un producto en una red, el nuevo sitio pendiente debe convertirse en un sitio real de la red. El proceso de publicación se realiza a través de la cola de trabajos, de forma asíncrona. Activa esta opción para forzar que la publicación ocurra en la misma solicitud que el registro.

Ahora, veamos otras opciones que siguen siendo relevantes para el proceso de inicio de sesión y registro. Se encuentran justo debajo de **Other options** en la misma página Login & registration:

  * **Default role:** Este es el rol que tus clientes tendrán en su sitio web después del proceso de registro.

  * **Add users to the main site as well:** Al habilitar esta opción, también se añadirá al usuario al sitio principal de tu red después del proceso de registro. Si activas esta opción, también aparecerá una opción para establecer el **default role** de estos usuarios en tu sitio web justo debajo.

  * **Enable multiple accounts:** Permite que los usuarios tengan cuentas en diferentes sitios de tu red con la misma dirección de correo electrónico. Si esta opción está desactivada, tus clientes no podrán crear una cuenta en otros sitios web que funcionen en tu red con la misma dirección de correo electrónico.

¡Y eso es todo! Todas las opciones relacionadas con el inicio de sesión y el registro que puedes personalizar. ¡No olvides guardar tus ajustes después de terminar de editarlos!

## Usar múltiples formularios de registro:

Ultimate Multisite 2.0 ofrece un editor de formularios de pago que te permite crear tantos formularios como desees, con diferentes campos, productos en oferta, etc.

Tanto las páginas de inicio de sesión como las de registro están incrustadas con shortcodes: **[wu_login_form]** en la página de inicio de sesión y **[wu_checkout]** para la página de registro. Puedes personalizar aún más la página de registro construyendo o creando formularios de pago.

Para acceder a esta función, ve al menú **Checkout Forms**, en la barra lateral izquierda.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

En esta página, puedes ver todos los formularios de pago que tienes.

Si deseas crear uno nuevo, simplemente haz clic en **Add Checkout Form** en la parte superior de la página.

Puedes seleccionar una de estas tres opciones como punto de partida: single step, multi-step o blank. Luego, haz clic en **Go to the Editor**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

Alternativamente, puedes editar o duplicar los formularios que ya tienes haciendo clic en las opciones debajo de su nombre. Allí también encontrarás las opciones para copiar el shortcode del formulario o eliminar el formulario.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

Si seleccionas single step o multi-step, el formulario de pago ya estará prellenado con los pasos básicos para que funcione. Luego, si lo deseas, puedes agregar pasos adicionales.

### Editar un formulario de pago:

Como mencionamos antes, puedes crear formularios de pago para diferentes propósitos. En este ejemplo, trabajaremos en un formulario de registro.

Después de navegar al editor de formularios de pago, dale a tu formulario un nombre (que se usará solo como referencia interna) y un slug (usado para crear shortcakes, por ejemplo).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

Los formularios están compuestos por pasos y campos. Puedes agregar un nuevo paso haciendo clic en **Add New Checkout Step**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

En la primera pestaña de la ventana modal, completa el contenido del paso de tu formulario. Dale un ID, un nombre y una descripción. Estos elementos se usan principalmente internamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

A continuación, establece la visibilidad del paso. Puedes elegir entre **Always show**, **Only show for logged in users** o **Only show for guests**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

Finalmente, configura el estilo del paso. Estos son campos opcionales.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

Ahora, es hora de agregar campos a nuestro primer paso. Simplemente haz clic en **Add New Field** y selecciona el tipo de sección que deseas.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

Cada campo tiene diferentes parámetros que rellenar. Para esta primera entrada, seleccionaremos el campo **Username**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

Puedes agregar tantos pasos y campos como necesites. Para mostrar tus productos para que tus clientes elijan uno, utiliza el campo Pricing Table. Si deseas que tus clientes elijan una plantilla, agrega el campo Template Selection. Y así sucesivamente.

_**Nota:** Si creas un producto después de crear tu formulario de pago, deberás agregar el producto en la sección Pricing table. Si no lo agregas, el producto no aparecerá a tus clientes en la página de registro._

_**Nota 2:** username, email, password, site title, site URL, order summary, payment, and submit button son campos obligatorios para crear un formulario de pago._

Mientras trabajas en tu formulario de pago, siempre puedes usar el botón Preview para ver cómo tus clientes verán el formulario. También puedes alternar entre ver como un usuario existente o un visitante.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

Finalmente, en **Advanced Options** puedes configurar el mensaje para la página **Thank You**, agregar fragmentos para rastrear conversiones, agregar CSS personalizado a tu formulario de pago o restringirlo a ciertos países.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

También puedes habilitar o deshabilitar manualmente tu formulario de pago activando esta opción en la columna derecha, o eliminar el formulario permanentemente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

¡No olvides guardar tu formulario de pago!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

Para obtener el shortcode de tu formulario haz clic en **Generate Shortcode** y copia el resultado que aparece en la ventana modal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**Nota:** Necesitarás agregar este shortcode a tu página de registro para que se añada el formulario de pago._

## Preseleccionar productos y plantillas mediante parámetros de URL:

Si deseas crear tablas de precios personalizadas para tus productos y preseleccionar en el formulario de pago el producto o la plantilla que tu cliente elija desde tu tabla de precios o página de plantillas, puedes usar parámetros de URL para esto.

### **Para planes:**

Ve a **Ultimate Multisite > Products > Select a plan**. Deberías ver el botón **Click to copy Shareable Link** en la parte superior de la página. Este es el enlace que puedes usar para preseleccionar este plan específico en tu formulario de pago.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

Ten en cuenta que este enlace compartible solo es válido para **Plans**. No puedes usar enlaces compartibles para paquetes o servicios.

### **Para plantillas:**

Si deseas preseleccionar plantillas de sitio en tu formulario de pago, puedes usar el parámetro: **?template_id=X** en la URL de tu página de registro. El "X" debe reemplazarse por el **número de ID de la plantilla de sitio**. Para obtener este número, ve a **Ultimate Multisite > Sites**.

Haz clic en **Manage** justo debajo de la plantilla de sitio que deseas usar. Verás el número de ID del SITIO. Simplemente usa este número para que la plantilla de sitio específica se preseleccione en tu formulario de pago. En nuestro caso, el parámetro de URL sería **?template_id=2**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

Supongamos que nuestro sitio web de la red es [**www.mynetwork.com**](http://www.mynetwork.com) y nuestra página de registro con nuestro formulario de pago se encuentra en la página **/register**. La URL completa con la plantilla de sitio preseleccionada se vería así: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Y si lo deseas, puedes preseleccionar tanto productos como plantillas en tu formulario de pago. Todo lo que necesitas hacer es copiar el enlace compartible del plan y pegar el parámetro de plantilla al final. Se verá así: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
