---
title: Historial de Canvis de Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Historial de versions de Admin Page Creator

### Versió 1.9.0 - Publicada el 2026-01-18

* Corregit: Errors fatals al activar.
* Refactoritzat: Classes de font de contingut per utilitzar el *trait* Singleton amb la inicialització correcta del constructor del pare.
* Corregit: Errors de compilació de *template* de Vue.js que impedien que el selector de tipus de contingut es renderitzés.
* Corregit: Propietats de dades de Vue faltants (*template_id*, *external_link_url_embedable*, *external_link_url_checking*).
* Corregit: L'editor TinyMCE no s'inicialitza correctament al carregar la pàgina.
* Corregit: El fitxer de suport de Divi no s'autocarrega via Composer.
* Corregit: Sintaxi PHP corrupta a la classe de suport de Divi.
* Millorat: Organització i minificació dels assets de JavaScript.
* Millorat: Compatibilitat amb les últimes versions de WordPress i els *page builders*.

= Versió: 1.8.8 - Publicada el 2025-09-28

* Canvi de prefix a ultimate-multisite; actualització del domini de text; increment de versió.

### Versió 1.8.7 - 04/10/2023

* Corregit: Error fatal al intentar afegir una nova pàgina d'administració;
* Corregit: Conflicte amb el prefix de *stylesheets* d'Oxygen;

### Versió 1.8.6 - 09/08/2023

* Afegat: S'ha afegat una opció per mostrar dades del site principal o del subsite actual.
* Afegat: Suport per al Editor de Bloc de WordPress (Gutenberg).
* Corregit: S'ha corregit el problema amb els assets de pàgina de Brizy que no es carregaven.

### Versió 1.8.5 - 09/12/2020

* Corregit: Problema amb les Opcions de Pantalla (*Screen Options*) per ocultar el menú que no desapareixia;

### Versió 1.8.4 - 11/11/2020

* Corregit: Suport per a Multisite Ultimate v2;

### Versió 1.8.3 - 01/10/2020

* Corregit: Incompatibilitats amb Beaver Builder de la versió anterior;
* Corregit: Inconsistències de marges amb WP 5.5;

### Versió 1.8.2 - 21/09/2020

* Corregit: Petites incompatibilitats amb WP 5.5;

### Versió 1.8.1 - 05/08/2020

* Corregit: Incompatibilitat amb Brizy 2.0;
* Corregit: Petits problemes de rendiment al construir la llista de menús;

### Versió 1.8.0 - 27/04/2020

* Corregit: Notificacions que es nescaven sota la barra superior quan no es selecciona el mode sense marges;
* Afegat: Les pàgines personalitzades poden substituir múltiples pàgines de nivell superior i subpàgines d'administració de WordPress al mateix temps;
* Afegat: Els admins poden ocultar pàgines d'administració utilitzant WP Admin Pages PRO;

### Versió 1.7.9 - 01/04/2020

* Corregit: Brizy 1.10.118 i superiors que canvien el suport SVG a les pàgines d'administració;

### Versió 1.7.8 - 26/03/2020

* Corregit: Error d'escapament que canvien la pàgina de l'Editor quan s'utilitza el francès;

### Versió 1.7.7 - 04/03/2020

* Corregit: Petita incompatibilitat amb Brizy Builder;
* Millorat: Actualitzat el Freemius SDK a 2.3.2;

### Versió 1.7.6 - 10/02/2020

* Corregit: Botó d'edició de la pàgina d'administració a la cantonada inferior dreta que no funcionava en els *Dashboard Widgets*;
* Corregit: Petita incompatibilitat amb Astra;
* Corregit: Nova versió de Brizy que canvien la compatibilitat;

### Versió 1.7.5 - 14/12/2019

* Corregit: Afegat un nou gestor d'escenaris extrem (*edge-case handler*) per poblar els elements del menú en l'opció de Substituir Pàgina;
* Corregit: Fonts d'Elementor que no funcionaven;
* Millorat: Actualitzat el Freemius SDK per suportar l'ocultament d'informació sensible des de la pàgina de Comptes;

### Versió 1.7.4 - 29/11/2019

* Corregit: Incompatibilitat amb WooCommerce Memberships;
* Corregit: Component de la pestanya Oxygen Builder que no funcionava;
* Corregit: Beaver Themer que no funcionava;

### Versió 1.7.3 - 12/07/2019

* Corregit: Pàgines que desapareixen quan el seu pare es converteix a un altre tipus de pàgina d'administració;
* Millorat: Millors divisores de taula de llista entre tipus de pàgines d'administració;
* Millorat: Revisió de seguretat de tot el codi base del *plugin*;
* Millorat: Nota d'advertència a la pestanya Separador quan la funcionalitat no està disponible per a un tipus de menú/font de contingut determinat;

### Versió 1.7.2 - 01/07/2019

* Corregit: Versió actualitzada del Freemius SDK a 2.3.0;
* Corregit: Problema d'incompatibilitat amb Flywheel;

### Versió 1.7.1 - 27/06/2019

* Corregit: El Widget de Benvinguda (*Welcome Widget*) ara es mostra a tots els rol;
* Corregit: L'opció de Pantalla (*Screen Option*) per ocultar/mostrar el menú de Pàgines d'Administració no s'afegeix si el menú es pot ocultar mitjançant el filtre documentat a https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Millorat: L'ocultament dels menús de Pàgines d'Administració ara també oculta els *templates* creats des de la llista de *templates* guardats de Beaver Builder a la UI del constructor;
* Afegat: Opcions per activar i desactivar en massa pàgines d'administració;
* Afegat: Opció per mostrar pàgines al site principal també;
* Afegat: Opció per canviar el nom de les etiquetes de menús de nivell superior i subnivell en mode de Substitució;

### Versió 1.7.0 - 04/06/2019

* Corregit: Problemes amb els *templates* d'Oxygen que no apareixen;
* Afegat: Suport per a la Creació de Widgets!

### Versió 1.6.1 - 22/05/2019

* Corregit: Errors tipogràfics;
* Corregit: Submenús que sobrescreveu els elements de submenú anteriors amb el mateix valor d'ordre;
* Corregit: La duplicació ara reinicia lo *slug* de la pàgina duplicada;
* Millorat: Actualitzats els fitxers po de pt_BR i es_ES;
* Millorat: La taula de llista ara també lista el nom de les pàgines personalitzades com a pàgines mares;

### Versió 1.6.0 - 21/05/2019

* Afegat: Els Enllaços Externs ara també suporten el carregament d'iframe;

### Versió 1.5.5 - 17/05/2019

* Corregit: Missatge d'advertència que es llança quan es suprimeix o duplica una pàgina;
* Corregit: Configuració de permisos que no s'aplicaven als Admins;

### Versió 1.5.4 - 08/05/2019

* Corregit: Incompatibilitats amb Sliced Invoices;
* Corregit: Petit problema amb Oxygen;
* Corregit: El marcador (*placeholder*) al nou camp de títol de pàgina d'administració no desapareix al teure;

### Versió 1.5.3 - 03/05/2019

* Corregit: Incompatibilitat amb pàgines d'opció de Advanced Custom Field;
* Afegat: Opció per afegir usuaris específics com a objectius de pàgines d'administració personalitzades;

### Versió 1.5.2 - 30/04/2019

* Corregit: Incompatibilitats amb versions més noves de Brizy;
* Afegat: Traducció al castellà afegida - gràcies a John Rozzo. Anem, John!
* Afegat: Suport beta per a Oxygen Builder;

### Versió 1.5.1 - 15/04/2019

* Corregit: Problema amb els *placeholders* als editors Normal i HTML;
* Corregit: Pàgines d'Administració que no apareixen a Tools -> Export;
* Corregit: Carregar els scripts i els *styles* només a les nostres pròpies pàgines;
* Afegat: Els Super Admins ara poden duplicar Pàgines d'Administració;

### Versió 1.5.0 - 29/03/2019

* Corregit: Pequets bugs detectats per Sentry;
* Corregit: Botó de supoli no funcionava a la pantalla d'Edició de la pàgina d'administració;
* Millorat: Canviat el botó de BeaverBuilder per deixar clar que també es suporta la llicència Standard BB;
* Afegat: Els Admins també poden configurar l'ordre dels submenús;
* Afegat: El mode de Substitució ara té suport a tots els elements de menú disponibles;

### Versió 1.4.0 - 14/02/2019 (indepent) & 27/02/2019 (add-on)

* Afegat: Lançat com a *plugin* independent en https://wpadminpagespro.com
* Afegat: Opció per eliminar l'element de menú de Pàgines d'Administració del menú després de completar el procés de creació de la pàgina;
* Afegat: Opció per eliminar notificacions d'administració de les pàgines d'administració;
* Afegat: Processament de contingut, així que pots posar *placeholders* com {{user:first_name}} i que es substitueixi automàticament pel metadada *first_name* de l'usuari;
* Afegat: Editor en Línia (*Inline Editor*);
* Afegat: Classe mare de font de contingut consolidada per facilitar l'afegir de nous *Page Builders*/Fonts de Contingut a l'avenir;
* Afegat: Suport per a URL Externes;

### Versió 1.3.0 - 15/01/2019

* Corregit: Pàgines d'Administració no apareixen al site principal en entorns multisite;
* Millorat: Eliminats els tipus de contingut personalitzats de Multisite Ultimate de l'e pantalla d'exportació dels subsites;
* Afegat: Barra superior amb accions ràpides per als admins de la xarxa a les pàgines de creació;
* Afegat: ¡ENORME! Suport per a Elementor!
* Afegat: ¡ENORME! Suport per a Brizy!

### Versió 1.2.1 - 17/11/2018

* Corregit: Fer el *plugin* compatible amb Multisite Ultimate 1.9.0;

### Versió 1.2.0 - 10/09/2018

* Afegat: Suport PHP afegit si WU_APC_ALLOW_PHP_PROCESSING es configura a *true* a wp-config.php. Això no utilitza l'eval de PHP, però encara pot provocar ressenyes de seguretat. Utilitzar amb cura;
* Millorat: Actualitzador de *plugin* add-on;
* Millorat: Nova URL per al servidor d'actualitzacions;

### Versió 1.1.2 - 16/08/2018

* Corregit: Petit problema amb WP Engine;

### Versió 1.1.1 - 16/08/2018

* Corregit: Permisos que no es aplicaven correctament a les pàgines de substitució;

### Versió 1.1.0 - 15/08/2018

* Afegat: Els *templates* de Beaver Builder ara són suportats! Pots utilitzar el teu *page builder* preferit per crear pàgines d'administració personalitzades;
* Afegat: Ara és possible substituir el contingut de les pàgines d'administració predeterminades de WordPress també;
* Afegat: Ara és possible afegir el contingut creat a la part superior o inferior de les pàgines d'administració predeterminades de WordPress també;

### 0.0.1
- Lançament inicial
