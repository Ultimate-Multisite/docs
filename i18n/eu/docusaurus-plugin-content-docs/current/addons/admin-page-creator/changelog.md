---
title: Admin Page Creator-aren hasierak
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog {#admin-page-creator-changelog}

### Versioa 1.9.0 - Iragitzu 2026-01-18an {#version-190---released-on-2026-01-18}

* Iragitzu: Erro fatalak eta aktibatzeko prozesuan.
* Refactorizatu: Content source classes hauek Singleton trait batekin erabilizten, parent constructoraren irakuntzak ondo egin dezaten.
* Iragitzu: Vue.js template compilation errorrak eta content type selector-rek ez aurkitzen dituztenak.
* Iragitzu: Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) ez dagoen.
* Iragitzu: TinyMCE editora ez dagoen irakuntzen duen bitartean load-ean ez dagoen irakurtzeko.
* Iragitzu: Divi support filea Composer-ek autoload ez dagoen bitartean.
* Iragitzu: Divi support class-eko PHP syntax erruptua.
* Hobatuta: JavaScript asset-ezkin eta minification (minifikazio) ondo egin dezaten.
* Hobatuta: WordPress eta page builderaren daude beste baten versionakarekin kompatibilitatea.

= Versioa 1.8.8 - Iragitzu 2025-09-28an

* Prefix-a ultimate-multisite iragitzatu; text domaina update egin; versioa handitu.

### Versioa 1.8.7 - 04/10/2023 {#version-187---04102023}

* Iragitzu: New admin page bat adding gabe erro fatalak;
* Iragitzu: Oxygen stylesheets prefixarekin konfrontazioa (conflict).

### Versioa 1.8.6 - 09/08/2023 {#version-186---09082023}

* Zaharra: Main site-n edo sub-sitearen data ezarri display egiteko opszio bat hasi.
* Zaharra: WordPress Block Editorra (Gutenberg) suporta hasi.
* Iragitzu: Brizy page assets ez loadatzen dituzten problemaa iragitzatu.

### Versioa 1.8.5 - 09/12/2020 {#version-185---09122020}

* Iragitzu: Menu-a horretan ez aukeratzeko Screen Options-eko problemaa iragitzatu.

### Versioa 1.8.4 - 11/11/2020 {#version-184---11112020}

* Iragitzu: Multisite Ultimate v2 suporta hasi;

### Versioa 1.8.3 - 01/10/2020 {#version-183---01102020}

* Horbatutakoa: Beaver Builder-rekin irizketa ezberdintasak (previous build) konponbideak;
* Horbatutakoa: WP 5.5-rekin marginea ezberdintasunak.

### Versio 1.8.2 - 21/09/2020 {#version-182---21092020}

* Horbatutakoa: WP 5.5-rekin txiki irizketa ezberdintasunak;

### Versio 1.8.1 - 05/08/2020 {#version-181---05082020}

* Horbatutakoa: Brizy 2.0-rekin irizketa ezberdintasuna;
* Horbatutakoa: Menu listak ematean txiki eragiketa problema batzuk.

### Versio 1.8.0 - 27/04/2020 {#version-180---27042020}

* Horbatutakoa: Marginea moduko edo margin mode ez duen bitartean, üsto-barrako ondorekin notiziak horretan itxiltzen dira;
* Zaharra: Testu pertsonalak (Custom pages) lehiak WordPress adminaren bitortutako eta sub-bitortutako eskuilerak aldatzeko gabe.
* Zaharra: Adminak WP Admin Pages PRO erabiliz zure admin eskuilak horretan itxiltzen dezaten.

### Versio 1.7.9 - 01/04/2020 {#version-179---01042020}

* Horbatutakoa: Brizy 1.10.118 eta horrek ondoren, admin eskuilakaren bitortutako SVG suporta ezarritzen zuen;

### Versio 1.7.8 - 26/03/2020 {#version-178---26032020}

* Horbatutakoa: Frantzagarri erabiltzen bitartean Editor-ko lapia horretan eskaping error bat (Escaping error) eragiketa ezarritzen zuen;

### Versio 1.7.7 - 04/03/2020 {#version-177---04032020}

* Horbatutakoa: Brizy Builder-rekin txiki irizketa ezberdintasuna;
* Hobatutakoa: Freemius SDK-a 2.3.2-ra aktualizatu zen;

### Versio 1.7.6 - 10/02/2020 {#version-176---10022020}

* Horbatutakoa: Dashboard Widgets-en leku-ekeditze botontik (bottom-right corner) ez zarekin funtzionatzen zuen;
* Horbatutakoa: Astra-rekin txiki irizketa ezberdintasuna;
* Horbatutakoa: Brizy-ren berri bertsioak irizketa ezberdintasun eragiketa ezarritzen zuen.

### Versio 1.7.5 - 14/12/2019 {#version-175---14122019}

* Horbatutakoa: Replace Page opsionan menu itemak emateko lehiak (edge-case handler) berri bat gehitu zen;
* Horbatutakoa: Elementor fontak ez zarekin funtzionatzen ziren;
* Hobatutakoa: Freemius SDK-a Account lapia ondorekin sensitiboa informazio horretak horretan itxiltzen suportatzeko aktualizatu zen.

### Versio 1.7.4 - 29/11/2019 {#version-174---29112019}

* Konpondu: Inkompatibilitatea WooCommerce Membershipsarekin;
* Konpondu: Komponentearen tab Oxygen Builderrak ez ez du;
* Konpondu: Beaver Themerra ez du;

### Bertsio 1.7.3 - 12/07/2019 {#version-173---12072019}

* Konpondu: Pagak ez du hori bere parent-a beste admin menua erantzute iragitzenean;
* Hobatuta: Admin Page dituak arteko lista tabularen partizipoak hobetuta dira;
* Hobatuta: Plugin-aren kodearen guztia segurtasun ikertua egin da;
* Hobatuta: Menu/kontuentu esuraren (menu/content source type) bitartean Separator tab warniguna nota hasi da, horrek ez dagoenean.

### Bertsio 1.7.2 - 01/07/2019 {#version-172---01072019}

* Konpondu: Freemius SDK bertsioa 2.3.0-ra irekituta da;
* Konpondu: Flywheelarekin inkompatibilitatea konpondu da.

### Bertsio 1.7.1 - 27/06/2019 {#version-171---27062019}

* Konpondu: Welcome Widget-ak gure guztietan erakusten dira;
* Konpondu: Admin Pages menua hori ez dagoenean (https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ artikuluaren bitartean dokumentatutako filtrearekin) hori gizotzeko/erakustzeko opsioa ez da hasiturik;
* Hobatuta: Admin Pages menuegizak Beaver Builderren saved templates listatik eratu dituen template-ak ere gizotzen dira.
* Zaharra: admin pages bulk aktiboa eta deaktiboa egiteko opsioa hasi da;
* Zaharra: pagak main sitean ere erakusteko opsioa hasi da;
* Zaharra: Replace moduan itxura eta sub-nivel menua lebeluak irekitzeko opsioa hasi da.

### Bertsio 1.7.0 - 04/06/2019 {#version-170---04062019}

* Konpondu: Oxygen templateak ez erakusten dituen problemaak;
* Zaharra: Widget Creation (Widget-ak sortzea) suporta hasi da!

### Bertsio 1.6.1 - 22/05/2019 {#version-161---22052019}

* Horra: Errores de tipeo corregidos;
* Horra: Páginas del submenú que sobrescribían los elementos anteriores del submenú con el mismo valor de orden;
* Horra: La duplicación ahora restablece la slug de la página duplicada;
* Mejorado: Actualizados los archivos de traducción pt_BR y es_ES;
* Mejorado: La tabla de listas ahora muestra el nombre de las páginas personalizadas como páginas padre también.

### Versión 1.6.0 - 21/05/2019 {#version-160---21052019}

* Añadido: Los enlaces externos ahora también soportan la carga de iframes;

### Versión 1.5.5 - 17/05/2019 {#version-155---17052019}

* Horra: Mensaje de advertencia que se lanzaba cuando se eliminaba o duplicaba una página;
* Horra: La configuración de permisos no se aplicaba a los Administradores;

### Versión 1.5.4 - 08/05/2019 {#version-154---08052019}

* Horra: Incompatibilidades con Sliced Invoices;
* Horra: Pequeño problema con Oxygen;
* Horra: El marcador de posición en el campo del título de la nueva página de administración no se movía al escribir;

### Versión 1.5.3 - 03/05/2019 {#version-153---03052019}

* Horra: Incompatibilidad con las páginas de opciones de Advanced Custom Field;
* Añadido: Opción para añadir usuarios específicos como objetivos de páginas de administración personalizadas;

### Versión 1.5.2 - 30/04/2019 {#version-152---30042019}

* Horra: Incompatibilidades con versiones más recientes de Brizy;
* Añadido: Se añadió la traducción al español - gracias a John Rozzo. ¡Gracias, John!
* Añadido: Soporte beta para Oxygen Builder;

### Versión 1.5.1 - 15/04/2019 {#version-151---15042019}

* Horra: Problema con los marcadores de posición en los editores Normal y HTML;
* Horra: Las páginas de administración no aparecían en Herramientas -> Exportar;
* Horra: Carga de scripts y estilos solo en nuestras propias páginas;
* Añadido: Los Super Administradores ahora pueden duplicar Páginas de Administración;

### Versión 1.5.0 - 29/03/2019 {#version-150---29032019}

* Konpondu: Ezki bugak aur Sentry-tik duten;
* Konpondu: Edit Admin eskuan ekraneko delete boto ez du;
* Hobatuta: BeaverBuilder boto aldatu, Standard BB lisentia ere suportatu da hautatzea handiago;
* Zaharra: Administrazioak submenuko ordezka-ordena ere emateko dira;
* Zaharra: Erregistroaren modua erabiliziek gabe guztietan suporta egiten du.

### Bertsio 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Zaharra: https://wpadminpagespro.com-ean Stand-alone plugin gisa lan egin da
* Zaharra: Erregistroa egindako prozesuaren ondoren, Admin Pages menuko itema menuketik hartzea erabiliziek emateko opszioa hasi da
* Zaharra: Admin pages-ek gertzen dituzten noturia ezarri opszioa hasi da
* Zaharra: Kontuentu procesamendua hasi da, zehazki {{user:first_name}} gureak lehen pertsona-irakurri meta-fieldarekin otomatikoki aldatzeko modua emateke du;
* Zaharra: Inline Editor hasi da;
* Zaharra: Erregistroa erregitu behar diren Page Builders/Content Sources berriak lehenengo ez daitezkeenak lehenengatik ez daiteko erraztxari eta iraupizuneko modu berezia emateke du;
* Zaharra: External URLs-ek suporta hasi da.

### Bertsio 1.3.0 - 15/01/2019 {#version-130---15012019}

* Konpondu: Multisite erregimenetan main-site-an Admin Pages ez gertzen dituzte;
* Hobatuta: Subsites-ek exporta ekranekoaren Multisite Ultimate custom post typesak aldatu da;
* Zaharra: Erregistroak egindako lehiak (network admins) irudiari hasi da, pages erregitu dituenean;
* Zaharra: GIGANTZA! Elementor suporta!
* Zaharra: GIGANTZA! Brizy suporta!

### Bertsio 1.2.1 - 17/11/2018 {#version-121---17112018}

* Konpondu: Multisite Ultimate 1.9.0-re kompatiboa emateko plugin berriagoa hasi da;

### Bertsio 1.2.0 - 10/09/2018 {#version-120---10092018}

* Ezten gehitu: PHP suport has er gisa, bai WU_APC_ALLOW_PHP_PROCESSING in wp-config.php-an true daiko dago. Horrek PHP-ren eval ez du, baina segurtasun problema berekin iradokia izan daiteke. Horrek adierazpenak dikkatatuz erailduzu behar dira;
* Hobatu: Add-on plugin updater (plugin bat updateatzeko programa);
* Hobatu: Update server-ren URL berria.

### Versio 1.1.2 - 16/08/2018 {#version-112---16082018}

* Jakeldiak hasiturik: WP Engine-arekin eskaintzen badia eskerrikun problema bat arregiatu.

### Versio 1.1.1 - 16/08/2018 {#version-111---16082018}

* Jakeldiak hasiturik: Pagintuak er reemplatzea (replace pages) berezpena ez da aplikatu.

### Versio 1.1.0 - 15/08/2018 {#version-110---15082018}

* Hasiturik: Beaver Builder template-ek suportatzen dira! Pagintzak eskaintzen dituzko favorite page builder-rek erailu admin pages desgaituak (admin pages) egiteko.
* Hasiturik: WordPress default admin pages-en kontentua ere er reemplatzea posible da.
* Hasiturik: Default WordPress admin pages-en kontentua gain edo ondore laitzen ezarria kontentua hasi eta amaitu dezake.

### 0.0.1 {#001}
- Lehen iradokia
