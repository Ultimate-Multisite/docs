---
title: Registre de canvis del Venedor de Domínis
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Diari de canvis de Domain Seller

Versió 1.1.0 - Publicat el 2026-05-08
- Nou: Creació de records DNS (add_dns_record) implementada per ResellerClub, Enom i OpenSRS registrars
- Correcció: L'analitzador de records DNS per defecte ara tolera els tokens {DOMAIN} i {SITE_URL}
- Correcció: Els slugs dels camps de pagament de selecció de domini estan desaclopats (namespaced) per evitar col·lisi amb site_url

Versió 1.0.8 - Publicat el 2026-05-07
- Correcció: La cotització de domini de ResellerClub ara recupera els preus de cost en temps real de l'endpoint API correcte

Versió 1.0.7 - Publicat el 2026-05-06
* Correcció: La prova de connexió de ResellerClub envia el paràmetre tlds requerit (#224)

Versió 1.0.6 - Publicat el 2026-05-05
* Correcció: La registració de domini de ResellerClub funciona correctament ara amb una millor gestió de la resposta de l'API i el ruteig del proveïdor basat en el registre
* Correcció: Millores en l'experiència d'usuari (UX) de la pàgina d'administració de Registre de Domini
* Eliminat: Integració de registrars de CyberPanel

Versió 1.0.5 - Publicat el 2026-04-02
* Nou: Integració del registrar GoDaddy per a la registració i la gestió de domini
* Nou: Integració del registrar NameSilo
* Nou: Integració del registrar ResellerClub
* Nou: Verificació automàtica de l'enviament de domini SES al comprar un domini i mapeig
* Correcció: Constantes del plugin Guard contra la redefinició en l'entorn de prova
* Correcció: MySQL flags es divideixen correctament en install-wp-tests.sh

Versió 1.0.4 - Publicat el 2026-03-14
* **Correcció:** Alguns assets CSS faltants
* **Correcció:** Error relatiu a tlds no disponibles

Versió 1.0.3 - Publicat el 2026-03-09
* **Correcció:** Errors de propietat reactiva de Vue (domain_option, selected_domain, domain_provider) quan es fa servir la plantilla de sign-up antiga amb el shortcode de pagament
* **Correcció:** Desalineació del camp d'entrada de subdomain i text excessiu a la selecció de domini del pagament
* **Correcció:** Es barra el bloc de previsualització "Your URL will be" quan el camp de selecció de domini és present

Versió 1.0.2 - Publicat el 2026-03-01
* **Millorat:** Eliminades les configuracions de marcatge global de la pàgina de configuració; ara el preu és exclusivament per producte
* **Millorat:** Afegat el enllaç "Manage Domain Products" a la pàgina de configuració per a una navegació ràpida
* **Millorat:** Descripcions de camps i *tooltips* més clars per a les configuracions de producte de domini (catch-all vs TLD-specific, tipus de marcatge, preu introdutori)
* **Millorat:** Millores descripcions en tota la pàgina de configuració (cercar TLDs, renovacions, DNS, notificacions)

Versió 1.0.1 - Publicat el 2026-02-27

* **Nou:** Eina d'importació de TLD per a la gestió de preus en massa
* **Nou:** Suport per a preus introdutòris per a productes de domini
* **Nou:** Suite de tests E2E amb Cypress
* **Nou:** Plantilles de correu electrònic per a notificacions del cicle de vida del domini
* **Nou:** Camps d'adreça del registrant a la modal d'administració de domini, pre-rellenchs des de la configuració
* **Nou:** Interfície de gestió de DNS per al client amb suport per a afegir, editar i eliminar records
* **Nou:** Opció de pagament "Bring your own domain" amb mapeig automàtic de domini
* **Nou:** Generació automàtica de l'URL del site a partir del nom de domini durant el pagament
* **Nou:** Configuració de nameserver i record DNS per defecte a la configuració
* **Nou:** Detalls de registració de domini i gestió de DNS a la pàgina de edició del domini del núcli
* **Nou:** El *setup wizard* crea automàticament un producte de domini per defecte amb valors raonables
* **Nou:** Sincronització TLD automàtica diària via cron per a tots els proveïdors configurats
* **Nou:** Protecció de privacitat WHOIS amb configuració per producte (sempre activa, elecció del client o desactivada)
* **Nou:** Casella de selecció de privacitat WHOIS amb mostratge de preu i suport per a mode fosco
* **Nou:** Pàgina d'administració de Registre de Domini per a la registració manual de domini
* **Nou:** Actualitzacions automàtiques de plugins via Ultimate Multisite update server
* **Nou:** Tabulador de filtre de tipus de producte de domini a la taula de llista de productes amb estil de *badge* púrpura
* **Nou:** Camps de contacte del registrant (nom, adreça, ciutat, estat, codi postal, país, telèfon) al formulari de pagament de domini
* **Nou:** Validació de camps del registrant abans de cridar l'API del registrar amb missatges d'error clars
* **Nou:** Canals de *log* específics del proveïdor per a esdeveniments de registració de domini (p. ex., domain-seller-namecheap.log)
* **Nou:** Camps de contacte del registrant al formulari principal de pagament/sign-up (mostrat quan es registra un domini)
* **Millorat:** El camp de pagament "Domain Search" s'ha substituït per un camp de Selecció de Domini unitari que suporta les pestanyes de subdomain, register i domini existent
* **Millorat:** Les configuracions de producte de domini es renderitzen *inline* a la pàgina d'edició de producte a través del sistema de *widget* del núcli
* **Millorat:** Les informacions del domini del client es connecten al *widget* de mapeig de domini del núcli en lloc d'una *metabox* independent
* **Millorat:** El *wizard* d'importació de TLD s'ha simplificat a una sincronització de un clic des de tots els proveïdors
* **Millorat:** La disponibilitat de domini de Namecheap utilitza una crida API per a partitzes per a una cerca més ràpida
* **Millorat:** L'API de cotització de Namecheap utilitza paràmetres i analització de resposta correctes
* **Millorat:** Emmagatzematge centralitzada de TLD en una única opció de xarxa
* **Millorat:** Registre d'activitat de domini per a canvis de DNS, transferències i aplicació de configuració
* **Millorat:** Sincronització completa de TLD per a OpenSRS utilitzant la llista mestra IANA amb validació per partitzes
* **Millorat:** Sincronització completa de TLD per a Namecheap amb sol·licituds API paginades
* **Millorat:** Les classes de proveïdor legaderes han estat substituïdes pel patró Integration Registry
* **Millorat:** Panell de configuració amb configuració de DNS i transferències
* **Millorat:** Els números de telèfon es formategen automàticament a +CC.NNN format de registrar
* **Millorat:** La validació del camp de telèfon elimina els caràcters de formatat abans de la submissió
* **Millorat:** Requisit de versió augmentat a Ultimate Multisite 2.4.12 amb avís més clar
* **Millorat:** El flux de treball CI utilitza el *checkout* proper per al plugin del núcli i l'addon
* **Millorat:** prepare_registrant_info() liu de les metadades d'usuari guardades al *checkout* amb fallback a l'adreça de facturació
* **Correcció:** AJAX de cerca de domini fallant per a usuaris no connectats durant el pagament
* **Correcció:** AJAX de cotització de domini fallant per a usuaris no connectats durant el pagament
* **Correcció:** Error fatal de redeclaració de la classe Spyc quan es fan servir comands WP-CLI
* **Correcció:** Timeout de l'API de sandbox de Namecheap massa curt
* **Correcció:** Text del botó de cerca de domini no visible sobre fons verd
* **Correcció:** Registració de domini fallint amb l'error "RegistrantFirstName is Missing" a causa de faltar informació de contacte
* **Correcció:** Domini registrat amb blog_id=0 quan el site encara no existia al moment del pagament
* **Correcció:** Configuració de TLDs per defecte retornada com a string en lloc d'un array analitzat
* **Eliminat:** Pàgina d'administració de Gestió de Domini independent — ara gestionada a través de les pàgines de domini del núcli

Versió 1.0.0 - Publicat el 2025-09-28

**Reescritge major per a Ultimate Multisite v2**

* **Nou:** Reescritge completa amb arquitectura moderna PHP 7.4+
* **Nou:** Integració fluida amb el sistema de pagament Ultimate Multisite v2
* **Nou:** Gestió de productes de domini amb opcions de cotització flexibles
* **Nou:** Arquitectura de suport per a múltiples proveïdors de domini
* **Nou:** Integració de renovació automàtica i subscripció
* **Nou:** Interfície de gestió de domini del client
* **Nou:** Monitorització i *logs* de domini d'administració
* **Nou:** Suport per a cupons per a productes de domini
* **Nou:** Gestió de configuració completa
* **Nou:** Base de codi extensible i amigable per als desenvolupadors
* **Millorat:** Proveïdor OpenSRS actualitzat amb suport de funcions completes
* **Millorat:** UI moderna consistent amb Ultimate Multisite v2
* **Correcció:** Tot el codi v1 deprecat actualitzat a estàndards v2
* **Eliminat:** Compatibilitat v1 legadera (canvi disruptiu)

### Versiós anteriors (v1 Legadera)

### Versió 0.0.3 - 20/08/2019

* Correcció: Incompatibilitat amb Groundhogg CRM
* Nota: Va ser l'última publicació compatible amb v1

### Versió 0.0.2 - 07/12/2018

* Correcció: Eliminat el camp de Clau de Llicència
* Correcció: Les pestanyes de Plan manquen quan el plugin de funcionalitat està actiu
* Millorat: Afegat un botó de saltar al camp de registració

### Versió 0.0.1 - Lliurament inicial

* Integració bàsica de OpenSRS per a WP Ultimo v1
* Cerca i registració de domini simple
* Permissió de domini basada en plans
