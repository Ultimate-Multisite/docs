---
title: Conceptus ad primum
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Concepti Fundamentali

Pentru un nou utilizator WordPress Multisite și pentru cineva care începe să folosească Ultimate Multisite, există multe cuvinte și expresii noi pe care trebuie să le înveți la început. Învățarea lor este o sarcină importantă deoarece vei avea nevoie de înțelegerea platformei și a modului în care funcționează ca întreg.

În acest articol, vom încerca să definim și să explic câteva dintre conceptele cheie WordPress. Unele sunt mai relevante pentru utilizatori, altele pentru dezvoltatori, iar unele pentru amândoi.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** este un tip de instalare WordPress care îți permite să creezi și să gestionezi o rețea de site-uri multiple din un singur dashboard WordPress. Poți gestiona totul, inclusiv numărul de site-uri, funcționalitățile, temele și rolurile utilizatorilor. Este posibil să gestionezi sute și mii de site-uri.

## Rețea (Network) {#network}

În termeni WordPress, o rețea Multisite este locul unde se pot gestiona mai multe **subsite-uri** din un singur dashboard. Deși crearea unei rețele Multisite diferă în funcție de furnizorii de hosting, rezultatul final este de obicei câteva directive suplimentare în fișierul **wp-config.php** pentru a le spune WordPress că operează în acest mod specific.

Există o serie de diferențe distincte între o rețea Multisite și o instalare WordPress independentă pe care le vom discuta scurt.

## Bază de Date (Database) {#database}

O bază de date este un set structurat și organizat de date. În terminologia informatică, baza de date se referă la software utilizat pentru a stoca și organiza datele. Imaginează-ți că este o dulap de fișiere unde stochezi date în secțiuni numite tabele.

WordPress Multisite folosește o singură bază de date iar fiecare subsite primește propriile sale tabele cu ID-ul blogului ca prefix, așa că odată ce instalezi o instalare rețea și creezi un subsite, ar trebui să ai aceste tabele:

_wp_1_options_ \- tabla de opciones para el primer subsitio

_wp_2_options_ \- tabla de opciones para el segundo subsitio

## Proveedor de alojamiento (Hosting provider) {#hosting-provider}

Un proveedor de alojamiento es una empresa que permite a negocios e individuos poner sus sitios web a disposición a través de la World Wide Web. Los servicios que ofrecen los proveedores de alojamiento web varían, pero generalmente incluyen diseño de sitios web, espacio de almacenamiento en el host y conectividad a Internet.

## Dominio (Domain) {#domain}

Un nombre de dominio es una dirección que la gente usa para visitar tu sitio. Le dice al navegador dónde buscar tu sitio. Al igual que una dirección de calle, un dominio es cómo la gente visita tu sitio web en línea. Y, como tener un letrero delante de tu tienda. Si deseas visitar nuestro sitio web, deberás escribir nuestra dirección web en la barra de direcciones de tu navegador, que es [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, donde [**ultimatemultisite.com**](http://ultimatemultisite.com) es el nombre del dominio.

## Subdominio (Subdomain) {#subdomain}

Un subdominio es un tipo de jerarquía de sitio web bajo el dominio principal, pero en lugar de usar carpetas para organizar el contenido en un sitio web, esencialmente obtiene su propio sitio web. Se presenta como [**https://site1.domain.com/**](https://site1.domain.com/) donde _site1_ es el nombre del subdominio y [_domain.com_](http://domain.com) es el dominio principal.

## Subdirectorio (Subdirectory) {#subdirectory}

Un subdirectorio es un tipo de jerarquía de sitio web bajo un dominio raíz que utiliza carpetas para organizar el contenido en un sitio web. Un subdirectorio es lo mismo que una subcarpeta y los nombres se pueden usar indistintamente. Se presenta como [**https://domain.com/site1**](https://domain.com/site1) donde _site1_ es el nombre del subdirectorio y [_domain.com_](http://domain.com) es el dominio principal.

## Subsitio (Subsite) {#subsite}

Subsite est un site enfant que vous créez sur un réseau Multisite. Il peut être soit un **sous-domaine** ou un **sous-répertoire**, selon la manière dont votre installation WordPress Multisite est configurée.

## Super Admin {#super-admin}

Un rôle d'utilisateur WordPress Super Admin est un rôle avec toutes les capacités pour gérer tous les subsites sur un réseau Multisite. Pour les utilisateurs Multisite, c'est le **niveau d'accès le plus élevé** que vous pouvez offrir à votre installation WordPress.

## Plugin {#plugin}

En général, un plugin est un ensemble de code qui ajoute des fonctionnalités supplémentaires à votre site WordPress. Cela peut être aussi simple que changer le logo de connexion ou aussi complexe que d'ajouter une fonctionnalité de commerce électronique. _Woocommerce et Contact Form_ sont des exemples de plugins.

Sur un WordPress Multisite, les plugins ne peuvent être installés que depuis le tableau de bord de l'administrateur du réseau par le Super Admin. Les administrateurs de sous-site ne peuvent activer et désactiver les plugins que dans leur propre sous-site.

## Thèmes {#themes}

Un thème WordPress est un groupe de fichiers (_graphiques, feuilles de style et code_) qui dicte l'apparence générale du site. Il fournit tous les styles front-end tels que le style des polices, la mise en page des pages, les couleurs, etc.

Comme pour les plugins, les thèmes sur WordPress Multisite ne peuvent être installés que par le Super Admin et peuvent être activés au niveau du sous-site par les administrateurs de sous-site.

## Site Template {#site-template}

Le **Site Template** est un modèle de site qui peut être utilisé comme base lors de la création de nouveaux sites dans votre réseau.

Cela signifie que vous pouvez créer un site de base, activer différents plugins, définir un thème actif et le personnaliser comme vous voulez. Ensuite, lorsque votre client crée un nouveau compte, au lieu d'obtenir un site WordPress par défaut sans contenu significatif à l'intérieur, il obtiendra une copie de votre site de base avec toutes les personnalisations et contenus déjà en place.

## Domain Mapping {#domain-mapping}

**Mappatio domini** cum WordPress est via ad redirectionem utentes ad hostum aequam, per adressamque huius universi. In WordPress Multisite, sub-sitae creantur utrurus subdirectory vel subdomain. Mappatio dominii permittit ut sub-situm utentes top-level domain ut [**joesbikeshop.com**](http://joesbikeshop.com) ut ad adressam situi suum melius professionale ostendat.

## SSL {#ssl}

SSL significat **Secure Sockets Layer**. Est certificatum digitalem quod identitat situs web authenticit et connectionem cryptam permittit. Hodie ut technologia standard usum est ad conservandum connectionis internettinae securae et ad salvacionem omnium data sensivarum quae inter duos systema transmittuntur, praecipue contra crimines qui informationes transfertas, inclusas dati personales potentialia, legere et modifi. Browser moderni SSL requirunt, quod esset essentiae in creatione et operandi huius universi.

## Media {#media}

Media sunt imagines, audia, video et aliae res quae situs web facient.

Sitae network share database unicum in WordPress Multisite; separate vias in filesystem ad media files conservant.

Locus standard WordPress (wp-content/uploads) manet; tamen via eius alteratur ut uniqueum ID huius universi reflectat. Consequentiam, media files pro universitate network apparunt ut wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks sunt URL permanentes pro post vel pagina blogmatis individuae tua in situi tuo. Permalinks etiam appellantur **pretty links**. Per default, URLs WordPress formatum query string usant quod sicut hoc ordinatur:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite est un plugin WordPress, fatto per installazioni WordPress Multisite, che trasforma la tua installazione WordPress in una rete premium di siti – come [WordPress.com](https://WordPress.com) – permettendo ai clienti di creare siti tramite abbonamenti mensili, trimestrali o annuali (puoi anche creare piani Gratuiti).

## Checkout Form (Modulo di Pagamento) {#checkout-form}

Il Checkout Form è un modulo d'ordine singolo o a più passaggi che coinvolge la creazione di sottodomini, l'adesione e gli account utente tramite la registrazione Ultimate Multisite. È composto da diversi campi e moduli di pagamento che l'utente deve inviare durante il processo di iscrizione.

## Webhook {#webhook}

Un webhook (chiamato anche web callback o HTTP push API) è un modo per un'app di fornire informazioni in tempo reale ad altre applicazioni. Un webhook consegna i dati ad altre applicazioni man mano che accadono, il che significa che ricevi i dati immediatamente.

**Ultimate Multisite webhooks** aprono infinite possibilità, permettendo agli amministratori della rete di fare tutti i tipi di integrazioni folli ma utili, specialmente se usati in combinazione con servizi come _Zapier e IFTTT_.

## Events (Eventi) {#events}

Un Evento è un'azione che si verifica come risultato dell'azione di un utente o di un'altra sorgente, come un clic del mouse. Ultimate Multisite tiene traccia di tutti gli eventi e dei log che accadono in tutta la tua rete. Traccia diverse attività che avvengono nel tuo multisite, come i cambiamenti di piano.
