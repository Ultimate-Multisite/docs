---
title: Diari de canvis de l'integració de WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Historial de canvis de WooCommerce Integration

Versió 2.0.6 - Publicada el 2026-01-16
* Millora: Inclou les subscripcions bàsiques a l'add-on. Ja no requereix l'extensió Woocommerce Subscriptions.

Versió 2.0.5 - Publicada el 2026-01-09
* Millora: Carrega les traduccions de l'API de glotpress.
* Correcció: Error fatal en alguns constructoris de pàgines.
* Correcció: Redirecció infinita quan el client és membre del lloc principal.

Versió 2.0.4 - Publicada el 2025-11-14
* Afegit: Traduccions per a molts més idiomes.
* Canviat: Nombert a Ultimate Multisite: Woocommerce Integration.
* Afegit: Compatibilitat amb Woocommerce 10.2.1.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 7.7.0.
* Correcció: Compatibilitat amb PHP 8.4
* Correcció: Redirecciona, però quan no existeix la pàgina de compte WC.

Versió 2.0.3 - Publicada el 2025-08-13
* Canviat: Habilitat les actualitzacions automàtiques amb el nou marketplace.

Versió 2.0.2 - Publicada el 2025-07-05
* Canviat: Nombert a Multisite Ultimate: Woocommerce Integration.
* Afegit: Compatibilitat amb Woocommerce 9.8.1.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 7.3.0.
* Correcció: Cancel·lar una subscripció per part del client.
* Correcció: Error fatal quan s'utilitza el bloc de checkout.
* Millora: Ara és compatible amb les taules personalitzades de alt rendiment de Woocommerce.
* Correcció: Cancel·lar a la caixa de pagament de WooCommerce encara pot actualitzar una membresria.

Versió 2.0.1 - Publicada el 2023-08-09

* Afegit: Compatibilitat amb Woocommerce 7.9.0.
* Afegit: Compatibilitat amb Woocommerce Subscriptions 5.3.0.
* Afegit: Suport per a les actualitzacions de membresria.
* Afegit: Notificacions sobre proves i taxa d'alta a Woocommerce.
* Afegit: Identificació dels productes de Ultimate Multisite Woocommerce amb un valor meta.
* Afegit: S'ha incorporat una correcció puntual per marcar tots els productes Woocommerce relacionats amb Ultimate Multisite.
* Afegit: S'han eliminat els productes creats per Ultimate Multisite de la llista de Woocommerce.
* Millora: Creat un descompte Woocommerce no recurrent per aplicar al carret.
* Millora: S'ha restaurat el descompte recurrent al producte Woocommerce.
* Millora: Afegat un etiquetat de descompte recurrent al producte Woocommerce.
* Millora: Assegurar el tipus de producte al checkout.
* Correcció: Mantenir l'estat de membresria durant el procés de degradació.
* Correcció: Es comprueba si existeix una subscripció per evitar errors durant el procés de cancel·lació.
* Correcció: Afegir la data de inici de la subscripció per utilitzar-la en les subscripcions de Woocommerce.
* Intern: Implementat un nou procés de construcció PHP 8.1.

Versió 2.0.0 - Reescriptura completa.

* Afegit: Mètode de processament de cancel·lació per eliminar la subscripció woo quan es canvia la passarela o es cancela la membresria;
* Afegit: Gestor per degradar i actualitzar membresries;
* Millora: Carrega les dependències de woocommerce en el formulari d'actualització del client en els subsites per permetre l'actualització de comptes;
* Millora: Corregir la càrrega del carret de Woocommerce si no existeix;
* Millora: Assegurar que estem a les taules del lloc principal quan es processa un checkout;
* Millora: Fer que la comanda de renovació d'Ultimo es basi en el valor de la subscripció de Woocommerce i no en elúltim pagament;
* Correcció: Enllaç al botó de membresria WU;
* Correcció: Estableix la comanda d'Ultimo com a pagada quan la renovació de subscripcions de Woocommerce ha pagat;
* Construcció: Afegir MPB com a constructor;

Versió 2.0.0-beta-5 - Publicada el 2022-01-21

* Intern: Afegat generador de hooks i filtres;
* Intern: Afegats stubs d'Ultimate Multisite per a la qualitat de vida del desenvolupador;
* Corregit: Prevenir la creació de múltiples productes quan no és necessari;

Versió 2.0.0-beta.4 - 2021-09-23

* Correcció: Requerir que WooCommerce estigui actiu a nivell de xarxa i no només al lloc principal;
* Millora: Afegir un filtre per permetre que l'add-on es faci servir com a mu-plugin;

Versió 2.0.0-beta.3 - 2021-05-28

* Correcció: El control d'accés del dashboard era massa agressiu;
* Millora: Afegir enllaços d'ajuda de WooCommerce al menú superior d'Ultimate Multisite;

Versió 2.0.0-beta.2 - 2021-05-04

* Millora: Crea pagaments pendents en Ultimo al crear la comanda de renovació de WCS;
* Millora: Pre-rellèn els camps de facturació amb dades del client d'Ultimate Multisite;
* Millora: Afegir camps de facturació per a les passarelles;

Versió 2.0.0-beta.1 - 2021-05-04

* Primera crida beta

-- Versió Antiques --

Versió 1.2.6 - 26/03/2020

* Correcció: Petita incompatibilitat amb versions més noves de WooCommerce Subscriptions;

Versió 1.2.5 - 26/08/2019

* Correcció: Error en la publicació anterior;

Versió 1.2.4 - 22/08/2019

* Millora: Afegir opció per redirigir a la pantalla de checkout de WooCommerce després de l'integració immediatament;

Versió 1.2.3 - 26/05/2019

* Correcció: L'email de pagament per a WooCommerce desapareix en alguns casos extrem.

Versió 1.2.2 - 27/02/2019

* Afegit: Suport per a les taxes d'alta a la integració de WooCommerce Subscription;

Versió 1.2.1 - 17/11/2018

* Correcció: Problemes de compatibilitat amb la versió 1.9.0 d'Ultimate Multisite;

Versió 1.2.0 - 10/09/2018

* Millora: Nova URL d'actualitzacions per als add-ons;
* Afegit: Suport beta per a WooCommerce Subscription;

Versió 1.1.2 - 11/02/2018

* Correcció: Enllaç a Pagar generat dinàmicament per respondre a canvis als endpoints de WooCommerce;
* Millora: Ara forcem l'estat completat per als nostres ordres quan es truca payment_completed per assegurar que els nostres hooks de renovació s'executen quan ha de fer;

Versió 1.1.1 - 24/01/2018

* Correcció: Ara també comprueba si WooCommerce acaba de ser activat al lloc principal;
* Correcció: Inclogut sobrecàrrecs per permetre que la creació d'ordres inclogui impostos;

Versió 1.1.0 - 04/11/2017

* Correcció: Ara l'etiqueta del botó d'integració realment canvia per reflectir la configuració. Requer menys Ultimate Multisite 1.5.0;
* Correcció: WooCommerce Integration ara funciona encara que WooCommerce no estigui actiu a nivell de xarxa i estigui activat només al lloc principal;

1.0.0 - Lançament inicial
