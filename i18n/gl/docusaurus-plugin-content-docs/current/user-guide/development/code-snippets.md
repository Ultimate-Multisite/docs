---
title: Fragmentos de código
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Fragmentos de código para v2 {#code-snippets-for-v2}

Basicamente, os fragmentos de código para **WordPress** son usados para realizar ciertas accións que sen poder requiriros dun plugin menor dedicado. Estes fragmentos de código se colocan nun dos dos arquivos centrais de WordPress ou do tema (normalmente o arquivo functions.php do teu tema) ou poden ser usados como un MU plugin.

Nesta entrada te mostra tres fragmentos de código que podes usar con **Ultimate Multisite v2**:

  * [**Cambiar a posición do elemento do menú Conta**](#changing-the-position-of-the-account-menu-item)

  * [**Cómo comprobar se o usuario está en un determinado plan e/ou ten unha suscripción activa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Corregir problemas CORS con Font-Icons en dominios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Cambiar a posición do elemento do menú Conta {#changing-the-position-of-the-account-menu-item}

Para cambiar a posición do elemento do menú Conta no Dashboard do teu cliente, basta añade o seguinte fragmento de código ao functions.php do tema activo do teu sitio principal. TAMEN podes poner o fragmento dentro dun dos teus mu-plugins ou plugins personalizados.

add_filter('wu_my_account_menu_position', function() { return 10; // Ajusta este valor para colocar o menú na posición deseñada.

Para comprobar se a suscripción está activa, podes usar a esta función:

`wu_is_active_subscriber($user_id)`

A continuación ten un fragmento de código que comprueba se o o usuario actual é membro dun plan específico (_Plan ID 50_) e se a súa suscripción está activa.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // O USUARIO É MEMBRO DO PLAN E A súa SUSCRIPCIÓN ESTÁ ACTIVA, FA O QUE DESEAS } else { // O USUARIO NON É MEMBRO DO PLAN -- OU -- A súa SUSCRIPCIÓN NON ESTÁ ACTIVA, FA OUTRO` // end if;`

Ten en cuenta que `_**wu_has_plan**_` necesita un "Plan ID" para funcionar.

Para obtener o ID dun plan, podes ir a **Ultimate Multisite > Products**. O ID de cada produto se mostrará á dereita da tábula.

Ten en conta que os usuarios só poden suscribirse a un **Plan**, non a un Paquete ou Servicio, ya que son só adicións para un **Plan**.

![Lista de produtos mostrando IDs de plan](/img/admin/products-list.png)

## Corregir problemas CORS con Font-Icons en dominios mapeados {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Corregir problemas CORS con Font-Icons en dominios mapeados {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Despois de mapear un dominio a un sub-sitio, podes descubrir que o sitio está tivo problemas para carregar fontes personalizadas. Isto é causado por un bloqueo cross-origin nas configuración do teu servidor.

Como os ficheiros de fonte se cargan casi sempre directamente desde CSS, o nosa función de mapeo de dominios non consegue reescribir as URLs para usar o dominio mapeado en lugar o original, así que para arreglar o problema, terás de modificar os teus ficheiros de configuración do servidor.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

No teu ficheiro .htaccess, adiciona isto:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

No teu ficheiro de configuração do servidor (o lugar varía de servidor para servidor), adiciona isto:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
