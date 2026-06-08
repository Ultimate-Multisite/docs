---
title: WooCommerce Integration Changelog
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Talaan ng Pagbabago ng WooCommerce Integration

Version 2.0.6 - Released on 2026-01-16
* Pagpapabuti: Kasama na ang core subscriptions sa addon. Hindi na kailangan ng Woocommerce Subscriptions extension.

Version 2.0.5 - Released on 2026-01-09
* Pagpapabuti: Naglo-load ng translations mula sa glotpress API.
* Pag-aayos: May kritikal na error sa ilang page builders.
* Pag-aayos: Nagdudulot ng infinite redirect kapag ang customer ay miyembro ng main site.

Version 2.0.4 - Released on 2025-11-14
* Idinagdag: Translations para sa mas maraming wika.
* Binago: Pinalitan ang pangalan para maging Ultimate Multisite: Woocommerce Integration.
* Idinagdag: Compatibility sa Woocommerce 10.2.1.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 7.7.0.
* Pag-aayos: Compatibility sa PHP 8.4
* Pag-aayos: Nagre-redirect kahit walang umiiral na WC account page.

Version 2.0.3 - Released on 2025-08-13
* Binago: Nag-enable ng automatic updates sa bagong marketplace.

Version 2.0.2 - Released on 2025-07-05
* Binago: Pinalitan ang pangalan para maging Multisite Ultimate: Woocommerce Integration.
* Idinagdag: Compatibility sa Woocommerce 9.8.1.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 7.3.0.
* Pag-aayos: Pagkansela ng subscription ng customer.
* Pag-aayos: Kritikal na error kapag gumagamit ng checkout block.
* Pagpapabuti: Ngayon ay tugma na sa high performance custom order tables ng Woocommerce.
* Pag-aayos: Ang pagkansela sa WooCommerce checkout ay maaari pa ring mag-upgrade ng membership.

Version 2.0.1 - Released on 2023-08-09

* Idinagdag: Compatibility sa Woocommerce 7.9.0.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 5.3.0.
* Idinagdag: Suporta para sa pag-update ng membership.
* Idinagdag: Mga paalala tungkol sa trials at setup fees sa Woocommerce.
* Idinagdag: Pagkilala sa mga produkto ng Ultimate Multisite Woocommerce gamit ang meta value.
* Idinagdag: Nagpasok ng isang one-time fix para markahan ang lahat ng produkto ng Ultimate Multisite na nauugnay sa Woocommerce.
* Idinagdag: Tinanggal ang mga produkto na nilikha ng Ultimate Multisite mula sa listahan ng Woocommerce.
* Pagpapabuti: Gumawa ng non-recurring Woocommerce discount para ilapat sa cart.
* Pagpapabuti: Ibinabalik ang recurring discount sa Woocommerce product.
* Pagpapabuti: Nagdagdag ng recurring discount label sa Woocommerce product.
* Pagpapabuti: Tiniyak ang product type sa checkout.
* Pag-aayos: Pinanatili ang membership status habang nagda-downgrade process.
* Pag-aayos: Sinuri kung mayroong subscription para maiwasan ang error sa pagkansela process.
* Pag-aayos: Nagdagdag ng start subscription date para gamitin sa Woocommerce subscriptions.
* Internal: Nagpatupad ng bagong PHP 8.1 build process.

Version 2.0.0 - Complete rewrite.

* Idinagdag: Proseso ng pagkansela para tanggalin ang woo subscription kapag nagpapalit ng gateway o nagka-cancel ng membership;
* Idinagdag: Handler para sa pag-downgrade at pag-upgrade ng memberships;
* Pagpapabuti: Naglo-load ng woocommerce dependencies sa customer update form sa subsites para payagan ang account update;
* Pagpapabuti: Tama na i-load ang Woocommerce cart kung wala;
* Pagpapabuti: Tiniyak na nasa main site tables tayo kapag nagpo-process ng checkout;
* Pagpapabuti: Ginagawa ang Ultimo renewal order batay sa Woocommerce subscription order value at hindi sa huling bayad;
* Pag-aayos: Pumunta sa link ng WU Membership button;
* Pag-aayos: Itinatakda ang Ultimo order bilang paid kapag may bayad na Woocommerce subscriptions renewal;
* Build: Idinagdag ang MPB bilang builder;

Version 2.0.0-beta-5 - Released on 2022-01-21

* Internal: Nagdagdag ng hooks and filters generator;
* Internal: Nagdagdag ng Ultimate Multisite stubs para sa developer quality of life;
* Fixed: Pinigilan ang paggawa ng maraming produkto kung hindi naman kailangan;

Version 2.0.0-beta.4 - 2021-09-23

* Pag-aayos: Kinakailangan na ang WooCommerce ay network active at hindi lang sa main site;
* Pagpapabuti: Nagdagdag ng filter para payagan ang add-on na gamitin bilang mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Pag-aayos: Masyadong agresibo ang dashboard access control;
* Pagpapabuti: Nagdagdag ng WooCommerce help links sa top-menu ng Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04

* Pagpapabuti: Gumagawa ng pending payments sa Ultimo sa paggawa ng WCS renewal order;
* Pagpapabuti: Nagfa-fill ng billing fields gamit ang Ultimate Multisite customer data;
* Pagpapabuti: Nagdadagdag ng back billing fields para sa gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Paunang beta release

-- Legacy Versions --

Version 1.2.6 - 26/03/2020

* Pag-ayos: Maliit na incompatibility sa mas bagong bersyon ng WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Pag-ayos: Error sa nakaraang release;

Version 1.2.4 - 22/08/2019

* Pagpapaganda: Nagdagdag ng option para mag-redirect sa WooCommerce checkout screen pagkatapos ng integration kaagad;

Version 1.2.3 - 26/05/2019

* Pag-aayos: Nawawala ang payment email para sa WooCommerce sa ilang edge cases;

Version 1.2.2 - 27/02/2019

* Idinagdag: Suporta para sa setup fees sa WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Pag-aayos: Compatibility issues sa Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Pagpapaganda: Bagong updates URL para sa add-ons;
* Idinagdag: Beta support sa WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Pag-aayos: Ang link na "Pay" ay dynamically na ginagawa para tumugon sa pagbabago sa WooCommerce endpoints;
* Pagpapaganda: Pinipilit na completed status ang ating mga order kapag tinawag ang payment_completed para masigurong tumatakbo ang ating renewal hooks kapag dapat;

Version 1.1.1 - 24/01/2018

* Pag-aayos: Tinitingnan na rin kung ang WooCommerce ay kakabago lang sa main site;
* Pag-aayos: Isinama ang over-loadings para payagan ang order creation na magsama ng taxes;

Version 1.1.0 - 04/11/2017

* Pag-aayos: Ang label ng integration button ay talagang nagbabago para maipakita ang settings. Kailangan ng Ultimate Multisite 1.5.0;
* Pag-aayos: Gumagana na ang WooCommerce Integration kahit na hindi network active at naka-activate lang sa main site;

1.0.0 - Initial Release
