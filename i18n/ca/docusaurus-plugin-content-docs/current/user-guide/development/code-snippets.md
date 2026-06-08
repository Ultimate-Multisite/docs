---
title: Treballs de codi
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Treball de codi per a v2

En resum, els treballs de codi per **WordPress** es fan servir per realitzar certes accions que de forma altament tècnica podrien requerir un plugin més petit i dedicat. Aquests treballs de codi es poden incorporar en un dels fitxers principals de WordPress (generalment el fitxer `functions.php` del teu tema) o es poden utilitzar com a plugin MU.

En aquest article et mostrarem tres treballs de codi que pots utilitzar amb **Ultimate Multisite v2**:

* [**Canviar la posició del menú Account**](#changing-the-position-of-the-account-menu-item)

* [**Com verificar si l'usuari està sota un pla determinat i/o té una subscripció activa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**Solucionar problemes CORS amb Font-Icons en domínis mapejats**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Canviar la posició del menú Account

Per canviar la posició del menú Account al Dashboard del teu client, només has de proporcionar el següent treball de codi al `functions.php` del tema actiu del teu lloc principal. També pots incorporar el treball de codi dins d'un dels teus mu-plugins o plugins personalitzats.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tria aquest valor per posar el menú a la posició desitjada.
```

## Com verificar si l'usuari està sota un pla determinat i/o té una subscripció activa

Com a administrador de la xarxa, potser necessitis crear funcions personalitzades que realitzin accions bàsiques o que facin disponible un servei/funcionalitat a un grup seleccionat d'abonats o usuaris finals, basant-se en l'estat de la seva subscripció i el pla al qual estan subscrites.

Aquestes funcions natives d'Ultimate Multisite et ajudaràn amb això.

Per verificar si l'usuari és membre d'un pla determinat, pots utilitzar la funció:

`wu_has_plan($user_id, $plan_id)`

Per verificar si la subscripció és activa, pots utilitzar la funció:

`wu_is_active_subscriber($user_id)`

A continuació hi ha un treball de codi d'exemple que verifica si l'usuari actual està sota un pla específic (_ID de Pla 50_) i si la subscripció de l'usuari és activa.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // L'USUARI ÉS MEMBRE DEL PLA I LA SEVA SUBSCRIPCIÓ ÉS ACTIVA, FA ACIÓ} else { // L'USUARI NO ÉS MEMBRE DEL PLA -- O -- LA SEVA SUBSCRIPCIÓ NO ÉS ACTIVA, FA ALTRE ACIÓ} // final if;
```

Nota que `**wu_has_plan**` requereix un "ID de Pla" per funcionar.

Per obtenir l'ID d'un pla, pots anar a **Ultimate Multisite > Products**. L'ID de cada producte es mostrarà a la dreta de la taula.

Nota que els usuaris només poden estar subscrites a un **Pla**, no a un Paquet o Servei, ja que aquests només són add-ons per a un **Pla**.

![Productes listant els IDs de pla](/img/admin/products-list.png)

## Solucionar problemes CORS amb Font-Icons en domínis mapejats
## Solucionar problemes CORS amb Font-Icons en domínis mapejats

Després de mapejar un domini a un sub-site, potser et trobaràs que el lloc té problemes per carregar fonts personalitzades. Això és causat per un bloc de cross-origin a la configuració del teu servidor.

Com que els fitxers de fonts quasi sempre es carreguen directament des del CSS, el nostre plugin de mapeig de domínis no és capaç de reescriure les URL per utilitzar el domini mapejat en lloc de l'original, així que per solucionar el problema, hauràs de modificar els fitxers de configuració del teu servidor.

A continuació hi ha treballs de codi per solucionar el problema per a Apache i NGINX. Aquests canvis requereixen coneixement avançat de fitxers de configuració de servidor (fitxers `.htaccess` i fitxers de configuració NGINX). Si no et sentes còmode de fer aquests canvis tu mateix, envia aquesta pàgina als agents de suport del teu proveïdor d'hosting quan necessitis assistència.

### Apache

Al teu fitxer `.htaccess`, afegeix:

```
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”>
Header set Access-Control-Allow-Origin “*”
```

### NGINX

Al teu fitxer de configuració del servidor (la ubicació varia de servidor a servidor), afegeix:

```
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ {
    add_header Access-Control-Allow-Origin “*”;
}
```
