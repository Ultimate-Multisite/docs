---
title: Fragmentos de código
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Fragmentos de código para v2 {#code-snippets-for-v2}

Básicamente, los fragmentos de código para **WordPress** se usan para realizar ciertas acciones que, de otro modo, podrían requerir un plugin dedicado más pequeño. Dichos fragmentos de código se colocan en uno de los archivos principales de WordPress o del tema (generalmente el archivo functions.php de tu tema) o pueden usarse como un MU plugin.

En este artículo te mostraremos tres fragmentos de código que se pueden usar con **Ultimate Multisite v2** :

  * [**Cambiar la posición del elemento de menú Account**](#changing-the-position-of-the-account-menu-item)

  * [**Cómo comprobar si el usuario está en un plan determinado y/o tiene una suscripción activa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Solucionar problemas de CORS con iconos de fuente en dominios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Cambiar la posición del elemento de menú Account {#changing-the-position-of-the-account-menu-item}

Para cambiar la posición del elemento de menú Account en el Dashboard de tu cliente, simplemente añade el siguiente fragmento de código al functions.php del tema activo de tu sitio principal. También puedes poner el fragmento dentro de uno de tus mu-plugins o plugins personalizados.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Cómo comprobar si el usuario está en un plan determinado y/o tiene una suscripción activa {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Como administrador de red, puede que necesites crear funciones personalizadas que realicen acciones básicas o pongan un servicio/función a disposición de un grupo seleccionado de suscriptores o usuarios finales, según el estado de su suscripción y el plan al que están suscritos.

Estas funciones nativas de Ultimate Multisite te ayudarán con eso.

Para comprobar si el usuario es miembro de un plan determinado, puedes usar la función:

wu_has_plan($user_id, $plan_id)

Para comprobar si la suscripción está activa, puedes usar la función:

wu_is_active_subscriber($user_id)

A continuación se muestra un fragmento de ejemplo que comprueba si el usuario actual está en un plan específico (_ID de plan 50_) y si la suscripción del usuario está activa.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Ten en cuenta que _**wu_has_plan**_ requiere un "ID de plan" para funcionar.

Para obtener el ID de un plan, puedes ir a **Ultimate Multisite > Products**. El ID de cada producto se mostrará a la derecha de la tabla.

Ten en cuenta que los usuarios solo pueden estar suscritos a un **Plan** , no a un paquete o servicio, ya que estos son solo complementos para un **Plan**.

![Lista de productos que muestra IDs de planes](/img/admin/products-list.png)

## Solucionar problemas de CORS con iconos de fuente en dominios mapeados {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Solucionar problemas de CORS con iconos de fuente en dominios mapeados {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Después de mapear un dominio a un subsitio, podrías descubrir que el sitio tiene problemas para cargar fuentes personalizadas. Eso se debe a un bloqueo de origen cruzado en la configuración de tu servidor.

Dado que los archivos de fuente casi siempre se cargan directamente desde CSS, nuestro plugin de mapeo de dominios no puede reescribir las URLs para usar el dominio mapeado en lugar del original, así que, para solucionar el problema, tendrás que modificar los archivos de configuración de tu servidor.

A continuación se muestran fragmentos de código para solucionar el problema en Apache y NGINX. Estos cambios requieren conocimientos avanzados de archivos de configuración de servidor (archivos .htaccess y archivos de configuración de NGINX). Si no te sientes cómodo haciendo esos cambios por tu cuenta, envía esta página a los agentes de soporte de tu proveedor de alojamiento cuando necesites asistencia.

### Apache {#apache}

En tu archivo .htaccess, añade:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

En tu archivo de configuración del servidor (la ubicación varía de un servidor a otro), añade:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
