---
title: Eksportado kaj Importado
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportado kaj Importado

Ultimate Multisite 2.9.0 aĉetas un unue-sita **Eksportado kaj Importado** instrumenton sub **Tools > Export & Import**. Uzdu ĝin, kiam vi bezonas paketigi un WordPress-siton kiel ZIP-fajlo, restituon ti ZIP, aŭ movi siton inter kompatibilajn Ultimate Multisite kaj unue-sita WordPress instaliloj.

## Reqdaj permesoj {#required-permissions}

Vi devas logi sin kiel administrator kiu povas akcesi la menun **Tools** de WordPress sur la sitio, kiun vi eksportas aŭ importas. Sur multisito-reteco uzu konton de retoadministrator pri eksportado aŭ importado de subsitiloj el Ultimate Multisite instrumentoj nivel reto pri eksportado aŭ importado.

Eksport ZIP-teleŝado estas servita per autentikebla teleŝadendpointo, tiel mantetu la admin sesion aktivan ĝis ke la teleŝado finas kaj ne partofu publikajn teleŝadURL-ojn.

## Eksportado de sitio al ZIP {#exporting-a-site-to-a-zip}

1. En la WordPress admin por la sitio, kiun vi volas kopii, diru **Tools > Export & Import**.
2. Ĉiuj la eksportarejon kaj elektu la sito, kiun vi volas paketigi.
3. Elektu la opcionajn encondukajn elementojn inkluzivi, kiel uploadoj, pluginoj kaj temoj, kiam ti opcioj estas disponiblaj.
4. Komenci la eksportadon kaj aguardu, ke la proceso finas. Grandaj sitoj povas bezoni fini en la fundo antaŭ ol la ZIP estas lista.
5. Teleŝu la finitan ZIP-fajlon el la listo de eksportoj.

Maltu la ZIP sekurega loko. Ĝi povas konteni la encondukan elementon de la sito, konfiguracion, media fajlojn kaj elektitaj kodajn asetojn.

## Kion inkluzas la eksporto {#what-the-export-includes}

Un eksportita ZIP-fajlo povas inkluzi:

- La bazdatan encondukan elementon kaj la konfiguracion de la elektita sitio.
- Uploadedajn media fajlojn, se uploadoj inkluzivaj estas.
- Pluginojn kaj temojn, se ti opcioj elektitaj estas.
- Importmetadon uzitan de la Export & Import instrumento por rekrei la sito sur la celita instalilo.

La exakta dimensa del ZIP dependa de la cantidad de medios, los plugins y temas seleccionados, y del tamaño de las tablas de la base de datos del sitio.

## Importar un sitio desde un ZIP {#importing-a-site-from-a-zip}

1. Vaya a **Tools > Export & Import** en el sitio WordPress de destino.
2. Abra el área de importación y suba el ZIP creado por la herramienta Export & Import.
3. Ingrese una URL de reemplazo si el sitio debe usar una nueva dirección, o deje el campo en blanco para mantener la URL original.
4. Elija si desea eliminar el ZIP subido después de que termine la importación.
5. Haga clic en **Begin Import** (Comenzar Importación).
6. Monitoree la importación pendiente hasta que finalice. Use **Cancel Import** (Cancelar Importación) solo si necesita detener el proceso antes de completarlo.
7. Revise el sitio importado antes de permitir el tráfico normal o el acceso de los clientes.

En una instalación de WordPress de un solo sitio, importar un ZIP reemplaza el sitio actual con el sitio importado. Cree una copia de seguridad completa del sitio objetivo antes de comenzar, y evite iniciar múltiples importaciones para el mismo sitio al mismo tiempo.

## Limitaciones y notas de compatibilidad {#limitations-and-compatibility-notes}

- Fritaj de altaj upload directories aŭ media bibliotekoj povas produkti grandajn ZIP-fajlajn. Konfirmijn PHP upload limitojn, ekzekucilimitojn, diskspacajn, memorigojn kaj servertimeout-parametrojn antaŭ eldonado aŭ importado de grandaj sitaĵoj.
- Fritaj media bibliotekoj bezonas moviĝi dum periodaj maltrovitaj manutenco-okazioj.
- La celita WordPress instalacio devas fari funkcii kompatibilajn versiojn de WordPress, PHP, Ultimate Multisite, pluginoj kaj temojn.
- Importado de unua sita (single-site import) subventus la celitan siton. Ĝi ne estas instrumento por fuzado (merge tool).
- Movoj de Multisite al unua sita kaj unua sita al Multisite subventus nur, kiam la celita aĉento povas funkcii la pluginojn, temojn, URL-ojn kaj necesajn komponentojn de Ultimate Multisite eldonita sita.
- Gardu la ZIP privata. Ĝi povas esti kontentita per bazdatan encon, uploaditaj fajlojn kaj konfigurigon detalojn de la eldonita sito.

Por pli malaj retoj-nivelaj eldonado-flujoversoj, vidi [Site Export](/user-guide/administration/site-export).
