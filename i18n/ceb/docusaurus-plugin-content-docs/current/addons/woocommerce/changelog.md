---
title: WooCommerce Integrasyon Talaan sa mga Kausaban
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Talaan sa Kausaban sa WooCommerce Integration {#woocommerce-integration-changelog}

Version 2.2.0 - Gipagawas niadtong 2026-07-01
* Bag-o: Ang mga kantidad sa buhis sa Ultimate Multisite karon makita na isip bulag nga mga linya sa bayronon sa WooCommerce sa pag-checkout, nga naghimo sa kinatibuk-ang buhis nga mas klaro sa wala pa ang pagbayad.
* Bag-o: Gidugang ang opt-in nga setting nga "Suspindihon Dayon ang mga Pagkamiyembro sa Napakyas nga mga Renewal" ug `wu_woo_suspend_on_payment_failure` filter alang sa mga site nga gusto ug suspension sa napakyas nga renewal sulod sa retry window sa WooCommerce Subscriptions.
* Ayos: Gipahiuyon ang mga status sa WooCommerce Subscription nga mahimong magpabiling dili sinkronisado sa mga pagkamiyembro sa Ultimate Multisite human sa napakyas o nabawi nga mga renewal.
* Ayos: Gidugang ang salapi sa WooCommerce store ngadto sa lista sa salapi sa Ultimate Multisite kung wala kini.
* Ayos: Gipreserbar ang mga detalye sa billing sa customer sa pag-redirect sa mga subscriber ngadto sa WooCommerce checkout.
* Gipaayo: Gidugang ang compatibility sa Jetpack Autoloader 5.
* Gipaayo: Gilimpyohan ang paghimo sa release package aron ang mga zip sa GitHub ug marketplace makalikay sa nested staging directories ug development files.

Version 2.0.6 - Gipagawas niadtong 2026-01-16
* Pagpaayo: Ilakip ang core subscriptions sa addon. Dili na kinahanglan ang Woocommerce Subscriptinos extension.

Version 2.0.5 - Gipagawas niadtong 2026-01-09
* Pagpaayo: I-load ang mga hubad gikan sa glotpress API.
* Ayos: Fatal error sa pipila ka page builders.
* ayos: Walay kataposang redirect kung ang customer miyembro sa main site.

Version 2.0.4 - Gipagawas niadtong 2025-11-14
* Gidugang: Mga hubad para sa daghan pang pinulongan.
* Giusab: Giilisdan ang ngalan ngadto sa Ultimate Multisite: Woocommerce Integration.
* Gidugang: Compatibility sa Woocommerce 10.2.1.
* Gidugang: Compatibility sa Woocommerce Subscriptions 7.7.0.
* Ayos: Compatibility sa PHP 8.4
* Ayos: Redirect apan kung walay WC account page nga anaa.

Version 2.0.3 - Gipagawas niadtong 2025-08-13
* Giusab: Gipaandar ang automatic updates gamit ang bag-ong marketplace.

Version 2.0.2 - Gipagawas niadtong 2025-07-05
* Giusab: Giilisdan ang ngalan ngadto sa Multisite Ultimate: Woocommerce Integration.
* Gidugang: Compatibility sa Woocommerce 9.8.1.
* Gidugang: Compatibility sa Woocommerce Subscriptions 7.3.0.
* Ayos: Pagkansela sa subscription sa customer.
* Ayos: Fatal error kung naggamit ug checkout block.
* Pagpaayo: Karon compatible na sa Woocommerce high performance custom order tables.
* Ayos: Ang pagkansela sa WooCommerce checkout mahimo gihapon nga maka-upgrade sa pagkamiyembro.

Version 2.0.1 - Gipagawas niadtong 2023-08-09

* Gidugang: Compatibility sa Woocommerce 7.9.0.
* Gidugang: Compatibility sa Woocommerce Subscriptions 5.3.0.
* Gidugang: Suporta para sa mga update sa pagkamiyembro.
* Gidugang: Mga pahibalo bahin sa mga trial ug setup fees sa Woocommerce.
* Gidugang: Pag-ila sa mga produkto sa Ultimate Multisite Woocommerce gamit ang meta value.
* Gidugang: Gisulod ang one-time fix aron markahan ang tanang produkto sa Woocommerce nga may kalabotan sa Ultimate Multisite.
* Gidugang: Gitangtang ang mga produkto nga gihimo sa Ultimate Multisite gikan sa lista sa Woocommerce.
* Pagpaayo: Gihimo ang non-recurring Woocommerce discount aron i-apply sa cart.
* Pagpaayo: Gibalik ang recurring discount sa produkto sa Woocommerce.
* Pagpaayo: Gidugang ang recurring discount label sa produkto sa Woocommerce.
* Pagpaayo: Gisiguro ang type sa produkto sa checkout.
* Ayos: Gipadayon ang status sa pagkamiyembro atol sa proseso sa downgrade.
* Ayos: Gisusi kung adunay subscription aron malikayan ang mga sayop atol sa proseso sa pagkansela.
* Ayos: Gidugang ang petsa sa pagsugod sa subscription aron gamiton sa Woocommerce subscriptions.
* Sulodnon: Gi-implementar ang bag-ong PHP 8.1 build process.

Version 2.0.0 - Kompletong pagsulat pag-usab.

* Gidugang: Pamaagi sa proseso sa pagkansela aron tangtangon ang woo subscription kung mag-usab sa gateway o magkansela sa pagkamiyembro;
* Gidugang: Handler aron i-downgrade ug i-upgrade ang mga pagkamiyembro;
* Pagpaayo: I-load ang woocommerce dependencies sa customer update form sa mga subsite aron tugotan ang account update;
* Pagpaayo: Hustong pag-load sa Woocommerce cart kung wala;
* Pagpaayo: Sigurohon nga naa kita sa main site tables kung magproseso ug checkout;
* Pagpaayo: Himoon ang Ultimo renewal order base sa Woocommerce subscription order value ug dili gikan sa kataposang bayad;
* Ayos: Link sa Go to WU Membership button;
* Ayos: I-set ang Ultimo order isip bayad na kung ang Woocommerce subscriptions renewal nabayran na;
* Build: Idugang ang MPB isip builder;

Version 2.0.0-beta-5 - Gipagawas niadtong 2022-01-21

* Sulodnon: Gidugang ang hooks ug filters generator;
* Sulodnon: Gidugang ang Ultimate Multisite stubs para sa developer quality of life;
* Giayos: Gipugngan ang paghimo ug daghang produkto kung dili kinahanglan;

Version 2.0.0-beta.4 - 2021-09-23

* Ayos: nanginahanglan nga ang WooCommerce mahimong network active imbis nga main site lang;
* Pagpaayo: gidugang ang filter aron tugotan ang add-on nga magamit isip mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Ayos: ang kontrol sa access sa dashboard sobra ra ka agresibo;
* Pagpaayo: Gidugang ang mga link sa tabang sa WooCommerce ngadto sa top-menu sa Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04

* Pagpaayo: naghimo ug pending payments sa Ultimo sa paghimo sa WCS renewal order;
* Pagpaayo: daan nang gipuno ang billing fields gamit ang data sa customer sa Ultimate Multisite;
* Pagpaayo: gibalik ang billing fields para sa mga gateway;

Version 2.0.0-beta.1 - 2021-05-04

* Unang beta release

-- Karaang mga Version --

Version 1.2.6 - 26/03/2020

* Giayos: Gamay nga incompatibility sa mas bag-ong mga version sa WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Giayos: Sayop sa miaging release;

Version 1.2.4 - 22/08/2019

* Gipaayo: Gidugang ang opsyon aron i-redirect dayon ngadto sa WooCommerce checkout screen human sa integration;

Version 1.2.3 - 26/05/2019

* Giayos: Ang payment email para sa WooCommerce nawala sa pipila ka edge cases;

Version 1.2.2 - 27/02/2019

* Gidugang: Suporta sa setup fees sa WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Giayos: Mga isyu sa compatibility sa Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Gipaayo: Bag-ong updates URL para sa add-ons;
* Gidugang: Beta support sa WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Giayos: Link to Pay nga gihimo nga dinamiko aron motubag sa mga kausaban sa WooCommerce endpoints;
* Gipaayo: Karon gipugos nato ang completed status para sa atong mga order kung tawagon ang payment_completed aron masiguro nga ang atong renewal hooks modagan kung angay;

Version 1.1.1 - 24/01/2018

* Giayo: Karon susihon usab niini kon ang WooCommerce bag-o lang gi-activate sa nag-unang site;
* Giayo: Giapil ang mga over-loading aron tugotan ang paghimo og order nga maglakip sa mga buhis;

Version 1.1.0 - 04/11/2017

* Giayo: Karon ang label sa integration button tinuod nga mausab aron ipakita ang settings. Nagkinahanglan og Ultimate Multisite 1.5.0;
* Giayo: Ang WooCommerce Integration karon molihok bisan kon ang WooCommerce dili network active ug gi-activate lamang sa t^he nag-unang site;

1.0.0 - Unang Release
