---
title: Notes de les versions
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Notes de Versió

## Versió 2.12.0 — Publicada el 2026-05-15

- Nou: S'ha afegat Hostinger (hPanel) com a proveïdor d'hosting suportat amb integració de mapeig de domini.
- Nou: Site Exporter ara gestiona els paquets d'importació de xarxa per a una restauració del site a nivell de xarxa més fluida.
- Correcció: Els correus electrònics de broadcast BCC ara utilitzen un capçalera `undisclosed-recipients` per evitar exposar les adreces dels destinataris.
- Correcció: La data de caducitat de la membresia ja no es corrompeix quan es guarda amb un valor que no és una data.
- Correcció: Les actualitzacions de membresia de Stripe ara netejen correctament els descomtes sense cridar l'API `deleteDiscount` derborrada.
- Correcció: Els redireccions SSO en sites mapejats amb domini estan ara limitades per evitar bucles de redirecció infinitius.
- Correcció: La selecció de l'image del *setup wizard* ara actualitza correctament el model de dades subjacents.
- Correcció: Site Exporter CLI ara preserva la correcta selecció de site de xarxa per defecte.
- Millorat: S'ha eliminat el `wp-cli` empaquetat del paquet de plugin, reduint el dimunsió del plugin.

## Versió 2.11.0 — Publicada el 2026-05-11

- Nou: Les exportacions de site ara inclouen un `index.php` d'autoinici perquè el ZIP es pugui instal·lar en un host nou sense una instal·lació de plugin separada.
- Nou: L'exportació de xarxa permet als administradors exportar tots els subsites en un únic arxiu d'administració de Site Export.
- Nou: El commutador de plan per a Site Templates ara es fa servir mitjançant una cadena de fallback, restringint correctament la disponibilitat de la plantilla per als límits del plan.
- Nou: L'editor de formulari de pagament adverteix quan es afegeix un producte sense que hi hagi un camp requerit configurat.
- Nou: L'onglet de configuració d'Import/Export descriu ara clarament el seu àmbit i enllaça directament a l'eina Site Export.

## Versió 2.10.0 — Publicada el 2026-05-05

- Nou: Wizard de configuració guiada de PayPal per a la inserció manual de credencials amb una porta de bandera OAuth per a una configuració de portal fluida.
- Nou: El panell del client de commutació de plantilles s'ha rediseñat amb la carta de plantilla actual, una grilla persistent i el botó **Reset current template**.
- Correcció: El commutació de plantilles ja no bloqueja la UI en cas d'error AJAX.
- Correcció: Els estats de permís de commutació de plantilles estan seguritzats contra accés no autoritzat.
- Correcció: Les entrades de sobreescritura de site estan validades abans de guardar.
- Correcció: El *prompt* d'adreça de facturació s'afegeix ara quan l'adreça està buida.
- Correcció: S'han resbotat les notificacions de deprecació de null a string de PHP 8.1.
- Correcció: Currents es carrega de forma pèrgula abans del *hook* `init` per evitar problemes de temps.
- Correcció: El camí SSO filtrat es respecta en tots els fluxos de login.
- Correcció: Les opcions d'identitat de site buit es preserven al guardar.

## Versió 2.9.0 — Publicada el 2026-04-30

- Nou: S'ha afegit l'exportació i importació de site únic sota **Tools > Export & Import**.
- Correcció: Els fitxers ZIP d'exportació ara es serveixen mitjançant un punt d'extel·lament d'baixar autenticat.
- Correcció: S'ha corregit el risc d'injecció SQL i els problemes de consulta en les consultes d'exportació/importació pendents.
- Correcció: El site pendent no es publica quan l'administrador verifica manualment l'email del client.
- Correcció: Els registres orfans `pending_site` es netejen quan falta la membresia.
- Correcció: S'ha corregit el *padding* de la navegació de configuració i la navegació d'àncora de cerca.
- Correcció: Els sites pendents ara es mostren primer a la vista de Tots els Sites.
- Correcció: S'ha afegit el capçalera User-Agent del proveïdor de captures d'pantalla (mShots) per evitar errors 403.
- Correcció: S'ha resbotat la dependència circular del cron d'importació.
- Correcció: Els IDs de *Tour* es normalitzen a subratlles en les clau de configuració de l'usuari.
- Millorat: Ara es fa servir ZipArchive en lloc d'Alchemy/Zippy per a una millor compatibilitat.

## Versió 2.8.0 — Publicada el 2026-04-29

- Nou: S'ha afegat el commutador Enable Jumper a la UI de configuració Other Options.
- Nou: S'ha afegat la columna Status a la taula de llista de formularis de pagament.
- Nou: Cargador de fitxer sunrise Addon per a extensió de MU-plugin sunrise personalitzades.
- Millorat: S'ha eliminat la configuració d'opt-in de reportatge d'errors de la pàgina de configuració.
- Correcció: La carta de site de la pàgina de mercècia de gràcies — l'image ara està limitada i els enllaços estan estilitzats correctament.
- Correcció: El proveïdor de captures d'pantalla s'ha canviat de thum.io a WordPress.com mShots.
- Correcció: Enable Registration i Default Role ara estableixen valors predeterminats correctes en una instal·lació nova.
- Correcció: `get_site_url()` ja no retorna buit quan el domini inclou un port.
- Correcció: Els fitxers de medi es copien ara correctament quan la configuració `copy_media` estava buida.
- Correcció: La cache d'objecte s'invalida correctament després d'escriure sitemeta amb network-activate.
- Correcció: El domini personalitzat es promociona automàticament a principal en la verificació DNS per a dominis de 3 parts.
- Correcció: La membresia pendent es cancela quan es neteja un pagament caducat.
- Correcció: El verificador de força de contrasenya es reconecta després de descartar el *prompt* de login en línia.
- Correcció: S'ha aturat el recarregament infinit del pàgina a la pàgina de mercècia quan el site ja ha estat creat.
- Correcció: L'opció de registre de WP core s'ha sincronitzat en l'activació del plugin i el guarre de configuració.
- Correcció: S'ha afegit una guarda de null de caducitat en `calculate_expiration` per a la compatibilitat amb PHP 8.4.
- Correcció: Els registres duplicats estan bloquejats quan el client ja té una membresia activa.
- Correcció: S'ha afegit una verificació de null per a `date_expiration` a pagament.
- Correcció: El provisionament de site està més robust — limitacions, inferència de membresia, promoció de domini.
- Correcció: L'etiqueta d'estat de la verificació de preinstal·lació s'ha corregit a NOT Activated quan la verificació falla.
- Correcció: El domini de pagament s'utilitza per als URL de verificació d'email.
- Correcció: Auto-login després del pagament quan no hi ha camp de contrasenya.
- Correcció: Les membresdies gratuïtes ja no caducen — es tracten com a vitalícies.
- Correcció: La porta de verificació d'email manté el site publicat fins que el client verifica l'email.
- Correcció: El camí base i la ruta d'identitat de l'API SES v2 han estat corregits.
- Correcció: El *hook* `wu_inline_login_error` s'emiteix en el bloc `pre-submit catch`.
