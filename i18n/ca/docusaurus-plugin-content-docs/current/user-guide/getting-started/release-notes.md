---
title: Notes de la versió
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notes de la versió

## Versió 2.13.0 — Publicada el 2026-06-05

- Nou: S’ha afegit suport per a inquilins sobirans per als fluxos de compte de client, checkout, facturació, lloc, factura, canvi de plantilla i mapatge de dominis, perquè les xarxes d’inquilins puguin redirigir els clients al lloc principal per a accions gestionades.
- Nou: S’han afegit comprovacions de credencials de renovació per a membresies recurrents, perquè les passarel·les puguin desactivar la renovació automàtica quan falta un acord de facturació desat, una subscripció o un token de volta.
- Nou: S’ha afegit publicació de loopback verificada amb HMAC per a la creació pendent de llocs, per fer més fiable l’aprovisionament de checkout a lloc en allotjaments on les tasques en segon pla es retarden.
- Nou: S’han afegit punts d’extensió per a desenvolupadors per a URL de SSO, dominis base de formularis de checkout i creació automàtica de registres de domini.
- Correcció: El SSO és més fiable entre dominis mapats, visites anònimes de broker, tancament de sessió i conflictes de dependències entre plugins.
- Correcció: La creació pendent de llocs ara es recupera de marques de publicació obsoletes i evita deixar els clients bloquejats a la pantalla de creació de lloc.
- Correcció: Ja no es creen registres de domini per a dominis base compartits de formularis de checkout, i les tasques en segon pla de proveïdors d’allotjament no utilitzades s’ometen quan no hi ha cap integració activa.
- Correcció: Els casos límit de checkout, adreça de facturació, restabliment de contrasenya, verificació de correu electrònic, canvi de plantilla, recorreguts i Dashboard de client ja no bloquegen els fluxos normals dels clients.
- Correcció: Els correus electrònics de difusió ara mantenen els destinataris privats alhora que eviten errors fatals de SMTP/plugin quan fallen les llistes de destinataris o els transports de correu.
- Correcció: Els casos límit de renovacions de membresia, visualització de caducitat i cobrament de pagaments ara eviten caducitats immediates, bloquejos o pagaments obligatoris omesos.
- Millorat: La compatibilitat amb WordPress s’ha provat fins a la versió 7.0, els recursos Vue de producció s’han reconstruït a partir de fonts npm i la cobertura end-to-end de Cypress ara exercita més fluxos de checkout, configuració, SSO i passarel·la.

## Versió 2.12.0 — Publicada el 2026-05-15

- Nou: S’ha afegit Hostinger (hPanel) com a proveïdor d’allotjament compatible amb integració de mapatge de dominis
- Nou: Site Exporter ara gestiona paquets d’importació de xarxa per a una restauració de llocs simplificada a tota la xarxa
- Correcció: Els correus electrònics de difusió BCC ara fan servir una capçalera de destinataris no revelats per evitar exposar les adreces dels destinataris
- Correcció: La data de caducitat de la membresia ja no es corromp en desar amb un valor que no és una data
- Correcció: Les actualitzacions de membresia de Stripe ara esborren correctament els descomptes sense cridar l’API obsoleta deleteDiscount
- Correcció: Les redireccions SSO en llocs amb domini mapat ara estan limitades per evitar bucles de redirecció infinits
- Correcció: La selecció del selector d’imatges de l’assistent de configuració ara actualitza correctament el model de dades subjacent
- Correcció: La CLI de Site Exporter ara conserva la selecció correcta del lloc de xarxa per defecte
- Millorat: S’ha eliminat el wp-cli inclòs del paquet del plugin, reduint la mida del plugin

## Versió 2.11.0 — Publicada el 2026-05-11

- Nou: Les exportacions de lloc ara inclouen un `index.php` d’arrencada automàtica, perquè el ZIP es pugui instal·lar en un allotjament nou sense instal·lar cap plugin separat.
- Nou: L’exportació de xarxa permet als administradors exportar tots els subllocs en un únic arxiu des de la pàgina d’administració Site Export.
- Nou: L’alternador de pla Allow Site Templates ara s’aplica mitjançant una cadena de reserva, restringint correctament la disponibilitat de plantilles segons els límits del pla.
- Nou: L’editor de formularis de checkout avisa quan s’afegeix un producte sense un camp obligatori configurat.
- Nou: La pestanya de configuració d’importació/exportació ara descriu clarament el seu abast i enllaça directament amb l’eina Site Export.

## Versió 2.10.0 — Publicada el 2026-05-05

- Nou: Assistent de configuració guiada de PayPal per a l’entrada manual de credencials amb porta de marca OAuth per a una configuració fluida de la passarel·la.
- Nou: Panell de client de canvi de plantilla redissenyat amb targeta de plantilla actual, quadrícula persistent i botó **Restableix la plantilla actual**.
- Correcció: El canvi de plantilla ja no penja la interfície en cas d’error AJAX.
- Correcció: Els estats de permisos de canvi de plantilla s’han protegit contra accessos no autoritzats.
- Correcció: Les entrades de substitució del lloc es validen abans de desar.
- Correcció: L’avís d’adreça de facturació ara es mostra quan l’adreça és buida.
- Correcció: S’han resolt els avisos de desús de null-a-string de PHP 8.1.
- Correcció: Currents es carrega de manera diferida abans del hook d’inicialització per evitar problemes de temporització.
- Correcció: El camí SSO filtrat es respecta en tots els fluxos d’inici de sessió.
- Correcció: Les opcions d’identitat de lloc en blanc es conserven en desar.

## Versió 2.9.0 — Publicada el 2026-04-30

- Nou: S’han afegit l’exportació i la importació d’un sol lloc a **Eines > Exporta i importa**.
- Correcció: Els fitxers ZIP d’exportació ara se serveixen mitjançant un endpoint de baixada autenticat.
- Correcció: S’han corregit el risc d’injecció SQL i els problemes de consulta en les consultes d’exportació/importació pendents.
- Correcció: El lloc pendent no es publica quan l’administrador verifica manualment el correu electrònic del client.
- Correcció: Els registres pending_site orfes es netegen quan falta la membresia.
- Correcció: S’han corregit el farciment de la navegació de configuració i la navegació per àncores de cerca.
- Correcció: Els llocs pendents ara es mostren primer a la vista Tots els llocs.
- Correcció: S’ha afegit la capçalera User-Agent del proveïdor de captures de pantalla (mShots) per evitar errors 403.
- Correcció: S’ha resolt la dependència circular de la programació cron d’importació.
- Correcció: Els ID de recorregut s’han normalitzat amb guions baixos a les claus de configuració d’usuari.
- Millorat: Ara s’utilitza ZipArchive en lloc d’Alchemy/Zippy per a una millor compatibilitat.

## Versió 2.8.0 — Publicada el 2026-04-29

- Nou: s'ha afegit el commutador Enable Jumper a la interfície d'usuari de la configuració Other Options.
- Nou: s'ha afegit la columna d'estat a la taula de llista de formularis de checkout.
- Nou: carregador de fitxer sunrise d'Addon per a extensions sunrise de MU-plugin personalitzades.
- Millorat: s'ha eliminat l'opció de subscripció als informes d'errors de la pàgina de configuració.
- Correcció: targeta del site de la pàgina d'agraïment — ara la imatge queda limitada i els enllaços tenen l'estil correcte.
- Correcció: el proveïdor de captures de pantalla s'ha canviat de thum.io a WordPress.com mShots.
- Correcció: Enable Registration i Default Role ara estableixen els valors predeterminats correctes en una instal·lació nova.
- Correcció: `get_site_url()` ja no retorna buit quan el domini inclou un port.
- Correcció: ara els fitxers multimèdia clonats es copien correctament quan la configuració `copy_media` estava buida.
- Correcció: la memòria cau d'objectes s'invalida correctament després de l'escriptura de sitemeta en activar a la xarxa.
- Correcció: el domini personalitzat es promociona automàticament a principal en la verificació DNS per a dominis de 3 parts.
- Correcció: la membership pendent es cancel·la quan es neteja el pagament caducat.
- Correcció: el comprovador de força de la contrasenya es torna a vincular després de descartar l'avís d'inici de sessió en línia.
- Correcció: s'ha aturat la recàrrega infinita de la pàgina d'agraïment quan el site ja s'ha creat.
- Correcció: l'opció de registre del nucli de WP se sincronitza en l'activació del plugin i en desar la configuració.
- Correcció: s'ha afegit una protecció contra expiració nul·la a `calculate_expiration` per a la compatibilitat amb PHP 8.4.
- Correcció: es bloquegen les inscripcions duplicades quan el client ja té una membership activa.
- Correcció: s'ha afegit una comprovació de nul per a `date_expiration` al checkout.
- Correcció: s'ha reforçat el proveïment del site — limitacions, inferència de membership, promoció de domini.
- Correcció: l'etiqueta d'estat de la comprovació prèvia a la instal·lació s'ha corregit a NOT Activated quan la comprovació falla.
- Correcció: s'utilitza el domini del checkout per als URL de verificació de correu electrònic.
- Correcció: inici de sessió automàtic després del checkout quan no hi ha cap camp de contrasenya present.
- Correcció: les memberships gratuïtes ja no caduquen — es tracten com a vitalícies.
- Correcció: la porta de verificació de correu electrònic manté la publicació del site fins que el client verifica el correu electrònic.
- Correcció: s'han corregit el camí base de l'endpoint de l'API SES v2 i la ruta d'identitat.
- Correcció: el hook `wu_inline_login_error` s'emet al bloc de captura previ a l'enviament.
