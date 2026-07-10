---
title: Conceptes bàsics
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Conceptes bàsics {#basic-concepts}

Per a un nou usuarí de WordPress Multisite o per a qualsevol persona que estigui acabant de començar a utilitzar Ultimate Multisite, hi ha moltíssimes paraules i frases noves que absorbir al principi. Aprender-les és una tasca important perquè ha deis entendre la plataforma i com funciona en totalitat.

En aquest article, intentarem definir i explicar alguns dels conceptes clau de WordPress. Alguns són més rellevants per als usuaris, altres per als desenvolupadors i alguns per a tots dos.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** és un tipus d'instal·lació de WordPress que et permet crear i gestionar una xarxa de múltiples llocs web des d'un únic *dashboard* de WordPress. Pots gestionar-ho tot, incloent el nombre de sites, les funcionalitats, els *themes* i els rol d'usuari. És possible gestionar centenars i milers de sites.

## Xarxa (Network) {#network}

En termes de WordPress, una xarxa multisite és l'espai on es poden gestionar múltiples **subsites** des d'un únic *dashboard*. Tot i que crear una xarxa multisite difereix entre proveïdors d'hosting, el resultat final són normalment unes quantes directives addicionals al fitxer **wp-config.php** per fer saber a WordPress que està operant en aquest mode específic.

Hi ha diverses diferències notables entre una xarxa multisite i una instal·lació de WordPress independent, que discutirem breument.

## Base de dades (Database) {#database}

Una base de dades és un conjunt de dades estructurat i organitzat. En terminologia informàtica, una base de dades es refereix al programari utilitzat per emmagatzemar i organitzar dades. Pensa-hi com a un armari de fitxes on emmagatzemes dades en diferents seccions anomenades taules.

WordPress Multisite utilitza una única base de dades i cada subsite té les seves pròpies taules amb l'id del blog com a prefix, així que quan instal·l·is una xarxa i creïs un subsite, hauràs aquestes taules:

_wp_1_options_ \- taula d'opcions per al primer subsite

_wp_2_options_ \- taula d'opcions per al segon subsite

## Proveïdor d'hosting (Hosting provider) {#hosting-provider}

Un proveïdor d'hosting és una empresa que permet a empreses i individus que els seus llocs web estiguin disponibles a través de la World Wide Web. Els serveis que ofereixen els proveïdors d'hosting web variaran, però normalment inclouen el disseny de lloc web, espai de magatzematge en un *host* i connectivitat a Internet.

## Domini (Domain) {#domain}

Un nom de domini és una adreça que la gent utilitza per visitar el teu site. Indica al navegador web on ha de buscar el teu site. Igual que una adreça de carrer, un domini és la manera com la gent visita el teu lloc web en línia. I, com tenir un cartell davant de la teva botiga. Si vols visitar el nostre lloc web, hauràs de diguard el nostre adreça web al *address* del teu navegador, que és [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), on [**ultimatemultisite.com**](http://ultimatemultisite.com) és el nom de domini.

## Subdomini (Subdomain) {#subdomain}

Un subdomini és un tipus de jerarquia de lloc web sota el domini principal, però en lloc d'utilitzar carpetes per organitzar contingut en un lloc web, de alguna manera té un lloc web propi. Es presenta com [**https://site1.domain.com/**](https://site1.domain.com/) on _site1_ és el nom del subdomini i [_domain.com_](http://domain.com) és el domini principal.

## Subcarpeta (Subdirectory) {#subdirectory}

Una subcarpeta és un tipus de jerarquia de lloc web sota un domini radical que utilitza carpetes per organitzar contingut en un lloc web. Una subcarpeta és el mateix que una subcarpeta i els noms es poden utilitzar de manera intercanviable. Es presenta com [**https://domain.com/site1**](https://domain.com/site1) on _site1_ és el nom de la subcarpeta i [_domain.com_](http://domain.com) és el domini principal.

## Subsite {#subsite}

Subsite és un site filial que crees en una xarxa Multisite. Pot ser un **subdomini** o una **subcarpeta** depenent de com estigui configurada la teva instal·lació de WordPress Multisite.

## Super Admin {#super-admin}

Un Super Admin de WordPress és un rol d'usuari amb capacitats completes per gestionar tots els subsites d'una xarxa Multisite. Per als usuaris Multisite, és el **nivell més alt d'accés** que pots proporcionar a la teva instal·lació de WordPress.

## Plugin {#plugin}

En general, un plugin és un conjunt de codi que afegeix funcionalitat addicional al teu site de WordPress. Pot ser tan senzill com canviar el logo de *login* o tan complex com afegir funcionalitat de comerç electrònic. _Woocommerce i Contact Form_ són exemples de plugins.

En un WordPress Multisite, els plugins només poden instal·lar-se des del *dashboard* de l'administrador de la xarxa per un Super Admin. Els Admins de subsites només poden activar i desactivar plugins dins del seu subsite.

## Themes {#themes}

Un *theme* de WordPress és un grup de fitxers (_gràfics, *style sheets* i codi_) que dicten l'aspecte general del site. Proporciona tots els estilismes del *front-end*, com el estil de la tipografia, la disposició de la pàgina, els colors, etc.

De mateixa amb els plugins, els *themes* en WordPress Multisite només poden ser instal·lats per un Super Admin i poden ser activats al nivell del subsite pels admins de subsites.

## Site Template {#site-template}

**Site Template** és un *boilerplate* de site que es pot utilitzar com a base quan es creen nous sites a la teva xarxa.

Això significa que pots crear un site base, activar diferents plugins, configurar un *theme* actiu i personalitzar-lo com desitgeis. Després, quan el teu client crei un compte nou, en lloc de rebre un site de WordPress per defecte sense contingut significatiu, rebran una còpia del teu site base amb totes les personalitzacions i continguts ja posats.

## Domain Mapping {#domain-mapping}

**Domain mapping** amb WordPress és una manera de redirigir els usuaris al *host* correcte, a través de l'adreça d'un lloc web. En un WordPress Multisite, els subsites es creen utilitzant o una subcarpeta o un subdomini. El *domain mapping* permet als usuaris de subsites utilitzar un domini de nivell superior com [**joesbikeshop.com**](http://joesbikeshop.com) per fer que l'adreça del seu site es vegi més professional.

## SSL {#ssl}

SSL significa **Secure Sockets Layer**. És un certificat digital que autentica l'identitat d'un lloc web i permet una connexió criptogràfica. Actualment es fa servir com la tecnologia estàndard per mantenir segura una connexió a Internet i protegir qualsevol dada sensible que es transmeti entre dos sistemes, evitant que criminals puguin llegir i modificar qualsevol informació transmesa, incloent possibles detalls personals. Els navegadors moderns requereixen SSL, cosa que el fa essencial quan es crea i es manté un lloc web.

## Media {#media}

Els *Media* són imatges, àudio, vídeo i altres fitxers que compon un lloc web.

Els sites de xarxa comparteixen una única base de dades en un WordPress Multisite, però mantenen rutes separades a la *filesystem* per als fitxers *media*.

La ubicació estàndard de WordPress (wp-content/uploads) es manté; no obstant això, la seva ruta es modifica per reflectir l'ID únic del site de xarxa. Conseqüentment, els fitxers *media* d'un site de xarxa apareixen com wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Els Permalinks són les URL permanents del teu article de blog o pàgina individual dins del teu site. Els Permalinks també es refereixen com a **enllaços bonics** (*pretty links*). Per defecte, les URL de WordPress utilitzen el format de *query string*, que sembla a això:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite és un plugin de WordPress, creat per instal·lacions de WordPress Multisite, que transforma la teva instal·lació de WordPress en una xarxa premium de sites, com [WordPress.com](https://WordPress.com), permetent als clients crear sites mitjançant tarifes mensuals, trimestrals o anuals (també pots crear plans Gratius).

## Checkout Form {#checkout-form}

Checkout Form és un formulari de comanda de un o múltiples passos que implica la creació de subsites, membres i comptes d'usuari mitjançant l'registrament d'Ultimate Multisite. Consisteix en diferents camps i formularis de pagament que un usuari ha de presentar durant el procés d'alta.

## Webhook {#webhook}

Un webhook (també anomenat *web callback* o API de *push* HTTP) és una manera perquè una aplicació proporcioni informació en temps real a altres aplicacions. Un webhook envia dades a altres aplicacions en el moment en què es produeixen, cosa que significa que rebtes les dades immediatament.

**Ultimate Multisite webhooks** estan oberts a infinites possibilitats, permetent als admins de xarxa fer tot tipus d'integracions folques però útils, especialment si es fan servir en conjunció amb serveis com _Zapier i IFTTT_.

## Events {#events}

Un Event és una acció que es produeix com a resultat de l'usuari o d'una altra acció de font, com un clic de ratolí. Ultimate Multisite manté un registre de tots els *events* i *logs* que es produeixen dins de tota la teva xarxa. Registra diverses activitats que es produeixen en el teu multisite, com els canvis de plan.
