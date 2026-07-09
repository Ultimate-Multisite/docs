---
title: Registre de canvis de la integració amb WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Registre de canvis de la integració amb WooCommerce

Versió 2.2.0 - Publicada el 2026-07-01
* Nou: Els imports d’impostos d’Ultimate Multisite ara apareixen com a línies de tarifa separades de WooCommerce al checkout, fent que els totals d’impostos siguin més clars abans del pagament.
* Nou: S’ha afegit una configuració opcional "Suspendre les afiliacions immediatament en renovacions fallides" i el filtre `wu_woo_suspend_on_payment_failure` per als llocs que volen la suspensió per renovació fallida durant la finestra de reintent de WooCommerce Subscriptions.
* Correcció: S’han conciliat els estats de WooCommerce Subscription que podien quedar desincronitzats amb les afiliacions d’Ultimate Multisite després de renovacions fallides o recuperades.
* Correcció: S’ha afegit la moneda de la botiga WooCommerce a la llista de monedes d’Ultimate Multisite quan hi faltava.
* Correcció: S’han conservat les dades de facturació del client en redirigir els subscriptors al checkout de WooCommerce.
* Millorat: S’ha afegit compatibilitat amb Jetpack Autoloader 5.
* Millorat: S’ha netejat la generació del paquet de llançament perquè els zips de GitHub i del marketplace evitin directoris de preparació imbricats i fitxers de desenvolupament.

Versió 2.0.6 - Publicada el 2026-01-16
* Millora: Inclou subscripcions bàsiques a l’addon. Ja no requereix l’extensió Woocommerce Subscriptinos.

Versió 2.0.5 - Publicada el 2026-01-09
* Millora: Carrega traduccions des de l’API de glotpress.
* Correcció: Error fatal en alguns constructors de pàgines.
* correcció: Redirecció infinita quan el client és membre del lloc principal.

Versió 2.0.4 - Publicada el 2025-11-14
* Afegit: Traduccions per a molts més idiomes.
* Canviat: S’ha canviat el nom a Ultimate Multisite: Woocommerce Integration.
* Afegit: Compatibilitat amb Woocommerce 10.2.1.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 7.7.0.
* Correcció: Compatibilitat amb PHP 8.4
* Correcció: Redirecció, però quan no existeix cap pàgina d’Account de WC.

Versió 2.0.3 - Publicada el 2025-08-13
* Canviat: S’han habilitat les actualitzacions automàtiques amb el nou marketplace.

Versió 2.0.2 - Publicada el 2025-07-05
* Canviat: S’ha canviat el nom a Multisite Ultimate: Woocommerce Integration.
* Afegit: Compatibilitat amb Woocommerce 9.8.1.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 7.3.0.
* Correcció: Cancel·lació d’una subscripció per part del client.
* Correcció: Error fatal en utilitzar el bloc de checkout.
* Millora: Ara és compatible amb les taules d’ordres personalitzades d’alt rendiment de Woocommerce.
* Correcció: Cancel·lar al checkout de WooCommerce encara pot actualitzar una afiliació.

Versió 2.0.1 - Publicada el 2023-08-09

* Afegit: Compatibilitat amb Woocommerce 7.9.0.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 5.3.0.
* Afegit: Suport per a actualitzacions d’afiliació.
* Afegit: Avisos sobre períodes de prova i tarifes de configuració a Woocommerce.
* Afegit: Identificació dels productes Woocommerce d’Ultimate Multisite amb un valor meta.
* Afegit: S’ha inserit una correcció única per marcar tots els productes Woocommerce relacionats amb Ultimate Multisite.
* Afegit: S’han eliminat els productes creats per Ultimate Multisite de la llista de Woocommerce.
* Millora: S’ha creat un descompte Woocommerce no recurrent per aplicar-lo al carret.
* Millora: S’ha restaurat el descompte recurrent al producte Woocommerce.
* Millora: S’ha afegit una etiqueta de descompte recurrent al producte Woocommerce.
* Millora: S’ha assegurat el tipus de producte al checkout.
* Correcció: S’ha mantingut l’estat de l’afiliació durant el procés de descens de pla.
* Correcció: S’ha comprovat si existeix una subscripció per evitar errors durant el procés de cancel·lació.
* Correcció: S’ha afegit la data d’inici de la subscripció per utilitzar-la a les subscripcions de Woocommerce.
* Intern: S’ha implementat un nou procés de compilació amb PHP 8.1.

Versió 2.0.0 - Reescriptura completa.

* Afegit: Mètode de cancel·lació de procés per eliminar la subscripció woo en canviar la passarel·la o cancel·lar l’afiliació;
* Afegit: Gestor per rebaixar i millorar afiliacions;
* Millora: Carrega les dependències de woocommerce al formulari d’actualització del client en subllocs per permetre l’actualització de l’Account;
* Millora: Carrega correctament el carret de Woocommerce si no existeix;
* Millora: Assegura que som a les taules del lloc principal en processar un checkout;
* Millora: Fes que l’ordre de renovació d’Ultimo es basi en el valor de l’ordre de subscripció de Woocommerce i no en l’últim pagament;
* Correcció: Enllaç del botó Anar a l’afiliació WU;
* Correcció: Marca l’ordre d’Ultimo com a pagada quan la renovació de Woocommerce Subscriptions s’ha pagat;
* Compilació: Afegeix MPB com a constructor;

Versió 2.0.0-beta-5 - Publicada el 2022-01-21

* Intern: S’ha afegit un generador de hooks i filtres;
* Intern: S’han afegit stubs d’Ultimate Multisite per millorar la qualitat de vida del desenvolupador;
* Corregit: Evita la creació de múltiples productes quan no és necessari;

Versió 2.0.0-beta.4 - 2021-09-23

* Correcció: requerir que WooCommerce estigui actiu a la xarxa en lloc de només al lloc principal;
* Millora: s’ha afegit un filtre per permetre que l’addon s’utilitzi com a mu-plugin;

Versió 2.0.0-beta.3 - 2021-05-28

* Correcció: el control d’accés al Dashboard era massa agressiu;
* Millora: S’han afegit enllaços d’ajuda de WooCommerce al menú superior d’Ultimate Multisite;

Versió 2.0.0-beta.2 - 2021-05-04

* Millora: crea pagaments pendents a Ultimo en la creació de l’ordre de renovació de WCS;
* Millora: emplena prèviament els camps de facturació amb dades de client d’Ultimate Multisite;
* Millora: torna a afegir camps de facturació per a passarel·les;

Versió 2.0.0-beta.1 - 2021-05-04

* Llançament beta inicial

-- Versions antigues --

Versió 1.2.6 - 26/03/2020

* Corregit: Petita incompatibilitat amb versions més noves de WooCommerce Subscriptions;

Versió 1.2.5 - 26/08/2019

* Corregit: Error en la versió anterior;

Versió 1.2.4 - 22/08/2019

* Millorat: S’ha afegit una opció per redirigir a la pantalla de checkout de WooCommerce immediatament després de la integració;

Versió 1.2.3 - 26/05/2019

* Corregit: El correu electrònic de pagament per a WooCommerce desapareixia en alguns casos límit;

Versió 1.2.2 - 27/02/2019

* Afegit: Suport per a tarifes de configuració a la integració de WooCommerce Subscription;

Versió 1.2.1 - 17/11/2018

* Corregit: Problemes de compatibilitat amb la versió 1.9.0 d’Ultimate Multisite;

Versió 1.2.0 - 10/09/2018

* Millorat: Nou URL d’actualitzacions per a complements;
* Afegit: Suport beta per a WooCommerce Subscription;

Versió 1.1.2 - 11/02/2018

* Corregit: Enllaç a Pagar generat dinàmicament per respondre als canvis als endpoints de WooCommerce;
* Millorat: Ara forcem l’estat completat per a les nostres ordres quan es crida payment_completed per assegurar-nos que els nostres hooks de renovació s’executin quan cal;

Versió 1.1.1 - 24/01/2018

* Corregit: Ara també comprova si WooCommerce s'acaba d'activar al lloc principal;
* Corregit: S'han inclòs sobrecàrregues per permetre que la creació de comandes inclogui impostos;

Versió 1.1.0 - 04/11/2017

* Corregit: Ara l'etiqueta del botó d'integració canvia realment per reflectir la configuració. Requereix Ultimate Multisite 1.5.0;
* Corregit: La integració de WooCommerce ara funciona encara que WooCommerce no estigui actiu a la xarxa i estigui activat només al lloc principal;

1.0.0 - Llançament inicial
