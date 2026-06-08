---
title: Mga Pagbag-o sa WooCommerce Integration
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Changelog sa Integrasyon sa WooCommerce

Version 2.0.6 - Giliwat sa 2026-01-16
* Pagpaayo: Isama na ang core subscriptions sa addon. Wala na kinahanglan og Woocommerce Subscriptinos extension.

Version 2.0.5 - Giliwat sa 2026-01-09
* Pagpaayo: Mag-load og mga translation gikan sa glotpress API.
* Fix: Fatal error kini sa pipila ka page builder.
* fix: Walay infinite redirect kung ang customer usa ka miyembro sa main site.

Version 2.0.4 - Giliwat sa 2025-11-14
* Dugang: Mga translation para sa daghang ubang lengguwahe.
* Gibag-o: Gi-rename kini ng Ultimate Multisite: Woocommerce Integration.
* Dugang: Compatibility sa Woocommerce 10.2.1.
* Dugang: Compatibility sa Woocommerce Subscriptions 7.7.0.
* Fix: Compatibility sa PHP 8.4
* Fix: Redirect pero kung walay WC account page nga anaa.

Version 2.0.3 - Giliwat sa 2025-08-13
* Gibag-o: Gi-enable ang automatic updates uban sa bag-ong marketplace.

Version 2.0.2 - Giliwat sa 2025-07-05
* Gibag-o: Gi-rename kini ng Multisite Ultimate: Woocommerce Integration.
* Dugang: Compatibility sa Woocommerce 9.8.1.
* Dugang: Compatibility sa Woocommerce Subscriptions 7.3.0.
* Fix: Pagkansela og subscription sa customer.
* Fix: Fatal error kung gamiton ang checkout block.
* Improvement: Karon compatible na kini sa WooCommerce high performance custom order tables.
* Fix: Ang pagkansela sa WooCommerce checkout mahimong mag-upgrade pa sa membership.

Version 2.0.1 - Giliwat sa 2023-08-09

* Dugang: Compatibility sa Woocommerce 7.9.0.
* Dugang: Compatibility sa Woocommerce Subscriptions 5.3.0.
* Dugang: Suporta para sa mga update sa membership.
* Dugang: Mga pahibalo bahin sa trials ug setup fees sa Woocommerce.
* Dugang: Pag-identify sa Ultimate Multisite Woocommerce products gamit ang meta value.
* Dugang: Nagbutang og usa ka one-time fix aron i-marka ang tanang Ultimate Multisite related Woocommerce products.
* Dugang: Gikuha (Removed) ang mga product nga gihimo sa Ultimate Multisite gikan sa listahan sa Woocommerce.
* Pagpaayo (Improvement): Naghimo og non-recurring Woocommerce discount para iapil sa cart.
* Pagpaayo (Improvement): Gi-restore ang recurring discount sa Woocommerce product.
* Pagpaayo (Improvement): Nagdugang og recurring discount label sa Woocommerce product.
* Pagpaayo (Improvement): Gisiguro ang product type sa checkout.
* Pag-ayo (Fix): Gipadayon ang membership status panahon sa downgrade process.
* Pag-ayo (Fix): Gi-check kung naa ba subscription aron malikayan ang mga error atol sa cancellation process.
* Pag-ayo (Fix): Dugang ang start subscription date para gamiton sa Woocommerce subscriptions.
* Internal: Nagpatuman og bag-ong PHP 8.1 build process.

Version 2.0.0 - Complete rewrite.

* Dugang: Proses cancellation method para ma-remove ang woo subscription kung magbabago ka sa gateway o kanselahin ang membership;
* Dugang: Handler para i-downgrade ug i-upgrade ang memberships;
* Pagsigarilyo (Improvement): Pag-load sa woocommerce dependencies sa customer update form sa subsites aron pwedeng ma-update ang account;
* Pagsigarilyo (Improvement): Tugmahan ang pag-load sa Woocommerce cart kung wala pa kini;
* Pagsigarilyo (Improvement): Siguraduhon nga naa kita sa main site tables kung magproseso og checkout;
* Pagsigarilyo (Improvement): Buhaton ang Ultimo renewal order base sa Woocommerce subscription order value ug dili sa katapusang bayad;
* Pag-ayo (Fix): Padulong sa WU Membership button link;
* Pag-ayo (Fix): Ihimong paid ang Ultimo order kung na-renew na ang Woocommerce subscriptions nga nabayran;
* Pagtukod (Build): Dugangan ang MPB isip builder.

Version 2.0.0-beta-5 - Gipa-release niadtong 2022-01-21

* Internal: Dugang mga hooks ug filters generator;
* Internal: Dugang Ultimate Multisite stubs para sa kalipay sa developer (developer quality of life);
* Naayo (Fixed): Gipugngan ang paghimo og dagkong produkto kung dili kinahanglan.

Version 2.0.0-beta.4 - 2021-09-23

* Pag-ayo (Fix): Kinahanglanon nga maging network active ang WooCommerce imbes nga main site lang;
* Pagsigarilyo (Improvement): Dugang filter aron pwedeng gamiton ang add-on isip mu-plugin.

Version 2.0.0-beta.3 - 2021-05-28

* Pag-ayo (Fix): Ang dashboard access control sobra ka agresibo;
* Pagsigarilyo (Improvement): Dugang mga WooCommerce help links sa top-menu sa Ultimate Multisite.

Version 2.0.0-beta.2 - 2021-05-04

Pagsigarilyo: naghimo og pending payments sa Ultimo kung maghimo og WCS renewal order;
Pagsigarilyo: pre-fills ang mga billing fields gamit ang customer data sa Ultimate Multisite;
Pagsigarilyo: nadugang pagbalik sa mga billing fields para sa gateways.

Version 2.0.0-beta.1 - 2021-05-04

* Unang beta release

-- Mga Lumang Bersyon --

Version 1.2.6 - 26/03/2020

* Gitabangan: Gamay nga dili pagka-compatible sa mas bag-ong mga bersyon sa WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Gitabangan: Sayop sa miaging release;

Version 1.2.4 - 22/08/2019

* Gihimna: Nadugang option aron mag-redirect sa WooCommerce checkout screen human sa integration dayon;

Version 1.2.3 - 26/05/2019

* Gitabangan: Ang payment email para sa WooCommerce nawala sa pipila ka mga kaso;

Version 1.2.2 - 27/02/2019

* Nadugang: Suporta sa pag-setup og fees sa WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Gitabangan: Mga isyu sa compatibility sa Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Gihimna: Bag-ong updates URL para sa add-ons;
* Nadugang: Beta support para sa WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Gitabangan: Ang link sa Pay nga gi-generate dynamically aron mag-respond sa mga kausaban sa WooCommerce endpoints;
* Gihimna: Nagpugos na mi og completed status para sa among orders kung tawgon ang payment_completed aron masiguro nga mo-run ang among renewal hooks kung kinahanglan gyud;

Version 1.1.1 - 24/01/2018

* Gitabangan: Naa na kini mag-check kung gi-activate lang ba ang WooCommerce sa main site;
* Gitabangan: Naglakip og over-loadings aron mahimo nga ang paghimo og order apil ang mga buhis (taxes).

Bersyon 1.1.0 - 04/11/2017

* Na-fix na: Ang label sa integration button karon nagbag-o gyud para ipakita ang settings. Kinahanglan Ultimate Multisite 1.5.0;
* Na-fix na: Ang WooCommerce Integration karon molihok bisan kung wala aktibo ang WooCommerce network ug gi-activate lang sa main site;

1.0.0 - Initial Release
