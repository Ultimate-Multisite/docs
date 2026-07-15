---
title: Registre de canvis del venedor de dominis
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Registre de canvis de Domain Seller

Versió 1.3.0 - Publicada el 2026-06-02
- Nou: S'ha afegit un avís d'administració de xarxa quan el saldo de revenedor de HostAfrica baixa massa
- Nou: S'ha afegit el mapatge automàtic dels dominis acabats de registrar al lloc de xarxa
- Correcció: S'han aplicat els requisits dels camps del registrant només quan es registra un domini nou
- Correcció: S'ha fet que els avisos de monitoratge de saldo es puguin descartar
- Correcció: S'ha garantit que es conservin les dades de facturació del registrant de WooCommerce
- Correcció: S'han aplicat els requisits de contacte del registrant durant el registre
- Correcció: S'ha impedit que es creïn productes de registre de dominis amb un marge del 0%
- Correcció: S'han conservat les seleccions de domini i els preus durant el flux de sessió de checkout
- Correcció: S'ha millorat la visualització de la moneda dels preus de domini de HostAfrica
- Correcció: S'ha millorat el comportament de form-action de checkout per evitar discrepàncies de query-var del nucli de WP
- Millora: S'ha enllaçat la documentació de configuració de revenedor de HostAfrica a la guia de configuració

Versió 1.2.0 - Publicada el 2026-05-25
- Nou: S'ha afegit HostAfrica com a integració de venda de dominis amb suport per a checkout, assistent de configuració, cerca, TLD/preus, registre, renovació, transferència, nameserver, DNS, codi EPP, bloqueig de registrador i protecció d'ID
- Nou: S'ha afegit Openprovider com a integració de venda de dominis amb suport per a preus de revenedor, registre, renovació, transferència, nameserver, DNS, codi EPP, bloqueig de registrador, privadesa WHOIS i sincronització de TLD
- Nou: S'ha afegit Hostinger com a integració de venda de dominis utilitzant el token d'API de Hostinger compartit de la integració principal per a comprovacions de disponibilitat, registre, actualitzacions de nameserver, bloqueig de registrador i privadesa WHOIS
- Millora: S'han afegit docblocks d'accions i filtres del cicle de vida del domini per a orientació d'integració per a desenvolupadors
- Millora: S'han actualitzat les metadades de compatibilitat del plugin a WordPress 7.0 al readme de l'addon
- Millora: S'han actualitzat les plantilles de planificació utilitzades per coordinar properes versions

Versió 1.1.0 - Publicada el 2026-05-08
- Nou: S'ha implementat la creació de registres DNS (add_dns_record) per als registradors ResellerClub, Enom i OpenSRS
- Correcció: L'analitzador predeterminat de registres DNS ara tolera els tokens {DOMAIN} i {SITE_URL}
- Correcció: Els slugs dels camps de checkout de selecció de domini ara tenen espai de noms per evitar col·lisions amb site_url

Versió 1.0.8 - Publicada el 2026-05-07
- Correcció: Els preus de domini de ResellerClub ara obtenen els preus de cost en directe des de l'endpoint d'API correcte

Versió 1.0.7 - Publicada el 2026-05-06
* Correcció: ResellerClub test_connection envia el paràmetre tlds requerit (#224)

Versió 1.0.6 - Publicada el 2026-05-05
* Correcció: El registre de dominis de ResellerClub ara funciona correctament amb una gestió millorada de les respostes de l'API i encaminament del proveïdor impulsat pel registre
* Correcció: Millores d'UX a la pàgina d'administració Register Domain
* Eliminat: Integració del registrador CyberPanel

Versió 1.0.5 - Publicada el 2026-04-02
* Nou: Integració del registrador GoDaddy per al registre i la gestió de dominis
* Nou: Integració del registrador NameSilo
* Nou: Integració del registrador ResellerClub
* Nou: Verificació automàtica del domini d'enviament de SES en comprar i mapar un domini
* Correcció: Protecció de les constants del plugin contra redefinicions en l'entorn de proves
* Correcció: Les marques de MySQL es divideixen correctament en paraules a install-wp-tests.sh

Versió 1.0.4 - Publicada el 2026-03-14
* **Correcció:** Alguns recursos css que faltaven
* **Correcció:** Error relacionat amb tlds no disponibles

Versió 1.0.3 - Publicada el 2026-03-09
* **Correcció:** Errors de propietats reactives de Vue (domain_option, selected_domain, domain_provider) en utilitzar la plantilla de registre heretada amb el shortcode de checkout
* **Correcció:** Desalineació del camp d'entrada de subdomini i text massa gran al camp de checkout de selecció de domini
* **Correcció:** Amaga el bloc de previsualització "El vostre URL serà" quan el camp de selecció de domini és present

Versió 1.0.2 - Publicada el 2026-03-01
* **Millora:** S'han eliminat els paràmetres globals de marge de la pàgina de configuració — ara els preus són exclusivament per producte
* **Millora:** S'ha afegit l'enllaç "Gestiona productes de domini" a la pàgina de configuració per a una navegació ràpida
* **Millora:** Descripcions de camps i indicadors de funció més clars per a la configuració de productes de domini (catch-all vs específic de TLD, tipus de marge, preus introductoris)
* **Millora:** Millors descripcions a tota la pàgina de configuració (cerca de TLDs, renovacions, DNS, notificacions)

Versió 1.0.1 - Publicada el 2026-02-27

* **Nou:** Eina d’importació de TLD per a la gestió de preus en bloc
* **Nou:** Suport de preus introductoris per a productes de domini
* **Nou:** Suite de proves E2E amb Cypress
* **Nou:** Plantilles d’email per a notificacions del cicle de vida del domini
* **Nou:** Camps d’adreça del registrant al modal d’administració de registre de domini, preemplenats des de la configuració
* **Nou:** Interfície de gestió de DNS del client amb suport per afegir, editar i suprimir registres
* **Nou:** Opció de checkout "Bring your own domain" amb mapatge automàtic de domini
* **Nou:** Generació automàtica de l’URL del lloc a partir del nom de domini durant el checkout
* **Nou:** Configuració de nameserver i registre DNS predeterminats a la configuració
* **Nou:** Detalls de registre de domini i gestió de DNS a la pàgina principal d’edició de domini
* **Nou:** L’assistent de configuració crea automàticament un producte de domini predeterminat amb valors per defecte raonables
* **Nou:** Sincronització automàtica diària de TLD via cron en tots els proveïdors configurats
* **Nou:** Protecció de privadesa WHOIS amb configuració per producte (sempre activada, a elecció del client o desactivada)
* **Nou:** Casella de selecció de privadesa WHOIS al checkout amb visualització de preus i suport de mode fosc
* **Nou:** Pàgina d’administració Register Domain per al registre manual de dominis
* **Nou:** Actualitzacions automàtiques del plugin via el servidor d’actualitzacions d’Ultimate Multisite
* **Nou:** Pestanya de filtre de tipus de producte de domini a la taula de llista de productes amb estil de distintiu porpra
* **Nou:** Camps de contacte del registrant (nom, adreça, ciutat, estat, codi postal, país, telèfon) al formulari de checkout de domini
* **Nou:** Validació dels camps del registrant abans de cridar l’API del registrador amb missatges d’error clars
* **Nou:** Canals de registre específics del proveïdor per a esdeveniments de registre de domini (p. ex. domain-seller-namecheap.log)
* **Nou:** Camps de contacte del registrant al formulari principal de registre/signup de checkout (es mostren en registrar un domini)
* **Millorat:** Substituït el camp de checkout de cerca de domini per un camp unificat de selecció de domini que admet pestanyes de subdomini, registre i domini existent
* **Millorat:** La configuració de productes de domini es renderitza en línia a la pàgina d’edició de producte mitjançant el sistema de widgets principal
* **Millorat:** La informació de domini del client s’integra amb el widget principal de mapatge de domini en lloc d’una metabox independent
* **Millorat:** L’assistent d’importació de TLD s’ha simplificat a una sincronització amb un sol clic des de tots els proveïdors
* **Millorat:** La disponibilitat de dominis de Namecheap utilitza una crida d’API per lots per a una cerca més ràpida
* **Millorat:** L’API de preus de Namecheap utilitza els paràmetres i l’anàlisi de resposta correctes
* **Millorat:** Emmagatzematge centralitzat de TLD en una única opció de xarxa
* **Millorat:** Registre d’activitat de domini per a canvis de DNS, transferències i aplicació de configuració
* **Millorat:** Sincronització completa de TLD per a OpenSRS utilitzant la llista mestra d’IANA amb validació per lots
* **Millorat:** Sincronització completa de TLD per a Namecheap amb sol·licituds d’API paginades
* **Millorat:** Substituïdes les classes de proveïdor antigues pel patró Integration Registry
* **Millorat:** Tauler de configuració amb configuració de DNS i transferència
* **Millorat:** Els números de telèfon es formaten automàticament al format de registrador +CC.NNN
* **Millorat:** La validació del camp de telèfon elimina els caràcters de format abans de l’enviament
* **Millorat:** Requisit de versió augmentat a Ultimate Multisite 2.4.12 amb avís més clar
* **Millorat:** El flux de treball de CI utilitza el checkout adequat tant per a l’addon com per al plugin principal
* **Millorat:** prepare_registrant_info() llegeix des de les metadades d’usuari desades al checkout amb alternativa a l’adreça de facturació
* **Corregit:** L’AJAX de cerca de domini fallava per a usuaris no connectats durant el checkout
* **Corregit:** L’AJAX de preus de domini fallava per a usuaris no connectats durant el checkout
* **Corregit:** Error fatal de redeclaració de la classe Spyc en executar ordres WP-CLI
* **Corregit:** Temps d’espera de l’API sandbox de Namecheap massa curt
* **Corregit:** El text del botó Selecciona de la cerca de domini no era visible sobre el fons verd
* **Corregit:** El registre de domini fallava amb l’error "RegistrantFirstName is Missing" a causa de la manca d’informació de contacte
* **Corregit:** Registre de domini creat amb blog_id=0 quan el lloc encara no existia en el moment del checkout
* **Corregit:** La configuració de TLD predeterminats es retornava com a cadena en lloc d’una matriu analitzada
* **Eliminat:** Pàgina d’administració independent de gestió de dominis — ara es gestiona a través de les pàgines principals de dominis

Versió 1.0.0 - Publicada el 2025-09-28

**Reescriptura important per a Ultimate Multisite v2**

* **Nou:** Reescriptura completa amb arquitectura moderna PHP 7.4+
* **Nou:** Integració fluida amb el sistema de checkout d’Ultimate Multisite v2
* **Nou:** Gestió de productes de domini amb opcions de preus flexibles
* **Nou:** Arquitectura de suport per a múltiples proveïdors de domini
* **Nou:** Integració de renovació automàtica i subscripció
* **Nou:** Interfície de gestió de dominis del client
* **Nou:** Supervisió i registres de dominis per a l’administració
* **Nou:** Suport de cupons per a productes de domini
* **Nou:** Gestió integral de la configuració
* **Nou:** Base de codi extensible i adequada per a desenvolupadors
* **Millorat:** Proveïdor OpenSRS actualitzat amb suport complet de funcionalitats
* **Millorat:** UI moderna coherent amb Ultimate Multisite v2
* **Corregit:** Tot el codi v1 obsolet actualitzat als estàndards v2
* **Eliminat:** Compatibilitat amb v1 antiga (canvi incompatible)

### Versions anteriors (v1 antiga) {#previous-versions-v1-legacy}

### Versió 0.0.3 - 20/08/2019 {#version-003---20082019}

* Corregit: Incompatibilitat amb Groundhogg CRM
* Nota: Aquesta va ser l’última versió compatible amb v1

### Versió 0.0.2 - 07/12/2018 {#version-002---07122018}

* Corregit: Eliminat el camp License Key
* Corregit: Faltaven les pestanyes de pla quan el plugin de funcionalitat està actiu
* Millorat: Afegit un botó de saltar al camp de registre

### Versió 0.0.1 - Llançament inicial {#version-001---initial-release}

* Integració bàsica d’OpenSRS per a WP Ultimo v1
* Cerca i registre simples de dominis
* Permisos de domini basats en pla
