---
title: Fragmentos de Código
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Fragmentos de código para v2

Básicamente, los fragmentos de código para WordPress se utilizan para realizar ciertas acciones que de otro modo requerirían un plugin más pequeño dedicado. Dichos fragmentos de código se colocan en uno de los archivos centrales de WordPress o del tema (generalmente el archivo functions.php de tu tema) o pueden usarse como un plugin MU.

En este artículo te mostraremos tres fragmentos de código que se pueden usar con **Ultimate Multisite v2** :

  * [**Cambiar la posición del elemento del menú de la cuenta**](#changing-the-position-of-the-account-menu-item)

  * [**Cómo comprobar si el usuario está bajo un plan determinado y/o tiene una suscripción activa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Solucionar problemas de CORS con Font-Icons en dominios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Cambiar la posición del elemento del menú de la cuenta

Para cambiar la posición del elemento del menú de la cuenta en el panel de control de tu cliente, simplemente añade el siguiente fragmento de código al functions.php del tema activo de tu sitio principal. También puedes colocar el fragmento dentro de uno de tus mu-plugins o plugins personalizados.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Cómo comprobar si el usuario está bajo un plan determinado y/o tiene una suscripción activa

Como administrador de la red, es posible que necesites crear funciones personalizadas que realicen acciones básicas o hagan que un servicio/característica esté disponible para un grupo seleccionado de suscriptores o usuarios finales, en función del estado de su suscripción y del plan al que están suscritos.

Estas funciones nativas de Ultimate Multisite te ayudarán con eso.

Para comprobar si el usuario es miembro de un plan determinado, puedes usar la función:

```php
wu_has_plan($user_id, $plan_id)
```

Para comprobar si la suscripción está activa, puedes usar la función:

```php
wu_is_active_subscriber($user_id)
```

A continuación se muestra un fragmento de ejemplo que comprueba si el usuario actual está bajo un plan específico (_Plan ID 50_) y si la suscripción del usuario está activa.

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

Ten en cuenta que _**wu_has_plan**_ requiere un "Plan ID" para que funcione.

Para obtener el ID de un plan, puedes ir a **Ultimate Multisite > Products**. El ID de cada producto se mostrará a la derecha de la tabla.

Ten en cuenta que los usuarios solo pueden suscribirse a un **Plan**, no a un Paquete o Servicio, ya que son solo complementos de un **Plan**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## Solucionar problemas de CORS con Font-Icons en dominios mapeados

## Solucionar problemas de CORS con Font-Icons en dominios mapeados

Después de mapear un dominio a un sub-sitio, es posible que descubras que el sitio tiene problemas para cargar fuentes personalizadas. Eso se debe a un bloqueo de origen cruzado en la configuración de tu servidor.

Dado que los archivos de fuentes se cargan casi siempre directamente desde CSS, nuestro plugin de mapeo de dominios no puede reescribir las URLs para usar el dominio mapeado en lugar del original, por lo que, para solucionar el problema, tendrás que modificar tus archivos de configuración del servidor.

A continuación se muestran fragmentos de código para solucionar el problema en Apache y NGINX. Estos cambios requieren conocimientos avanzados de archivos de configuración del servidor (.htaccess y archivos de configuración de NGINX). Si no te sientes cómodo realizando esos cambios tú mismo, envía esta página a los agentes de soporte de tu proveedor de hosting cuando necesites ayuda.

### Apache

En tu archivo .htaccess, añade:

```html
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

En tu archivo de configuración del servidor (la ubicación varía de servidor a servidor), añade:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
