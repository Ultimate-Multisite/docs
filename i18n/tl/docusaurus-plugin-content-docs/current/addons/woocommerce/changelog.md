---
title: Changelog ng WooCommerce Integration
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Talaan ng Pagbabago ng WooCommerce Integration

Bersyon 2.2.0 - Inilabas noong 2026-07-01
* Bago: Ang mga halaga ng buwis ng Ultimate Multisite ay lumalabas na ngayon bilang hiwalay na mga linya ng bayarin sa WooCommerce sa checkout, kaya mas malinaw ang kabuuan ng buwis bago ang pagbabayad.
* Bago: Nagdagdag ng opt-in na setting na "Suspindihin Kaagad ang Memberships sa Nabigong Renewals" at filter na `wu_woo_suspend_on_payment_failure` para sa mga site na gustong magkaroon ng suspensiyon sa nabigong renewal habang nasa retry window ng WooCommerce Subscriptions.
* Ayos: Pinagkasundo ang mga status ng WooCommerce Subscription na maaaring manatiling hindi naka-sync sa Ultimate Multisite memberships pagkatapos ng nabigo o nabawing renewals.
* Ayos: Idinagdag ang currency ng WooCommerce store sa listahan ng currency ng Ultimate Multisite kapag nawawala ito.
* Ayos: Napanatili ang mga detalye ng billing ng customer kapag nire-redirect ang mga subscriber sa WooCommerce checkout.
* Pinahusay: Nagdagdag ng compatibility sa Jetpack Autoloader 5.
* Pinahusay: Nilinis ang pagbuo ng release package upang maiwasan ng GitHub at marketplace zips ang nested staging directories at development files.

Bersyon 2.0.6 - Inilabas noong 2026-01-16
* Pagpapahusay: Isama ang core subscriptions sa addon. Hindi na nangangailangan ng Woocommerce Subscriptinos extension.

Bersyon 2.0.5 - Inilabas noong 2026-01-09
* Pagpapahusay: I-load ang mga pagsasalin mula sa glotpress API.
* Ayos: Fatal error sa ilang page builders.
* Ayos: Walang katapusang redirect kapag ang customer ay member ng main site.

Bersyon 2.0.4 - Inilabas noong 2025-11-14
* Idinagdag: Mga pagsasalin para sa mas marami pang wika.
* Binago: Pinalitan ang pangalan sa Ultimate Multisite: Woocommerce Integration.
* Idinagdag: Compatibility sa Woocommerce 10.2.1.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 7.7.0.
* Ayos: Compatibility sa PHP 8.4
* Ayos: Redirect ngunit kapag walang umiiral na WC account page.

Bersyon 2.0.3 - Inilabas noong 2025-08-13
* Binago: Pinagana ang awtomatikong updates gamit ang bagong marketplace.

Bersyon 2.0.2 - Inilabas noong 2025-07-05
* Binago: Pinalitan ang pangalan sa Multisite Ultimate: Woocommerce Integration.
* Idinagdag: Compatibility sa Woocommerce 9.8.1.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 7.3.0.
* Ayos: Pagkansela ng subscription ng customer.
* Ayos: Fatal error kapag gumagamit ng checkout block.
* Pagpapahusay: Compatible na ngayon sa Woocommerce high performance custom order tables.
* Ayos: Ang pagkansela sa WooCommerce checkout ay maaari pa ring mag-upgrade ng membership.

Bersyon 2.0.1 - Inilabas noong 2023-08-09

* Idinagdag: Compatibility sa Woocommerce 7.9.0.
* Idinagdag: Compatibility sa Woocommerce Subscriptions 5.3.0.
* Idinagdag: Suporta para sa mga update sa membership.
* Idinagdag: Mga abiso tungkol sa trials at setup fees sa Woocommerce.
* Idinagdag: Pagkakakilanlan ng Ultimate Multisite Woocommerce products gamit ang meta value.
* Idinagdag: Nagpasok ng isang one-time fix upang markahan ang lahat ng Ultimate Multisite related Woocommerce products.
* Idinagdag: Inalis ang mga product na nilikha ng Ultimate Multisite mula sa listahan ng Woocommerce.
* Pagpapahusay: Gumawa ng non-recurring Woocommerce discount upang ilapat sa cart.
* Pagpapahusay: Ibinalik ang recurring discount sa Woocommerce product.
* Pagpapahusay: Nagdagdag ng recurring discount label sa Woocommerce product.
* Pagpapahusay: Tiniyak ang uri ng product sa checkout.
* Ayos: Napanatili ang status ng membership sa panahon ng proseso ng downgrade.
* Ayos: Sinuri kung may umiiral na subscription upang maiwasan ang mga error sa panahon ng proseso ng pagkansela.
* Ayos: Idinagdag ang petsa ng pagsisimula ng subscription upang gamitin sa Woocommerce subscriptions.
* Panloob: Nagpatupad ng bagong PHP 8.1 build process.

Bersyon 2.0.0 - Kumpletong muling pagsulat.

* Idinagdag: Paraan ng proseso ng pagkansela upang alisin ang woo subscription kapag binabago ang gateway o kinakansela ang membership;
* Idinagdag: Handler upang i-downgrade at i-upgrade ang memberships;
* Pagpapahusay: I-load ang woocommerce dependencies sa form ng update ng customer sa subsites upang payagan ang update ng account;
* Pagpapahusay: Tamang i-load ang Woocommerce cart kung hindi umiiral;
* Pagpapahusay: Tiyaking nasa main site tables tayo kapag nagpoproseso ng checkout;
* Pagpapahusay: Gawing nakabatay ang Ultimo renewal order sa halaga ng Woocommerce subscription order at hindi mula sa huling bayad;
* Ayos: Link ng Go to WU Membership button;
* Ayos: Itakda ang Ultimo order bilang bayad kapag nabayaran na ang renewal ng Woocommerce subscriptions;
* Build: Idagdag ang MPB bilang builder;

Bersyon 2.0.0-beta-5 - Inilabas noong 2022-01-21

* Panloob: Nagdagdag ng hooks at filters generator;
* Panloob: Nagdagdag ng Ultimate Multisite stubs para sa kalidad ng buhay ng developer;
* Inayos: Pigilan ang paggawa ng maraming product kapag hindi kinakailangan;

Bersyon 2.0.0-beta.4 - 2021-09-23

* Ayos: pag-aatas na ang WooCommerce ay network active sa halip na main site lamang;
* Pagpapahusay: nagdagdag ng filter upang payagang magamit ang add-on bilang mu-plugin;

Bersyon 2.0.0-beta.3 - 2021-05-28

* Ayos: masyadong agresibo ang access control ng dashboard;
* Pagpapahusay: Nagdagdag ng WooCommerce help links sa Ultimate Multisite top-menu;

Bersyon 2.0.0-beta.2 - 2021-05-04

* Pagpapahusay: gumagawa ng pending payments sa Ultimo sa paglikha ng WCS renewal order;
* Pagpapahusay: paunang pinupunan ang billing fields gamit ang data ng Ultimate Multisite customer;
* Pagpapahusay: ibinabalik ang billing fields para sa gateways;

Bersyon 2.0.0-beta.1 - 2021-05-04

* Paunang beta release

-- Mga Legacy na Bersyon --

Bersyon 1.2.6 - 26/03/2020

* Inayos: Maliit na incompatibility sa mas bagong mga bersyon ng WooCommerce Subscriptions;

Bersyon 1.2.5 - 26/08/2019

* Inayos: Error sa nakaraang release;

Bersyon 1.2.4 - 22/08/2019

* Pinahusay: Nagdagdag ng opsyon upang mag-redirect kaagad sa WooCommerce checkout screen pagkatapos ng integration;

Bersyon 1.2.3 - 26/05/2019

* Inayos: Nawala ang payment email para sa WooCommerce sa ilang edge cases;

Bersyon 1.2.2 - 27/02/2019

* Idinagdag: Suporta sa setup fees sa WooCommerce Subscription integration;

Bersyon 1.2.1 - 17/11/2018

* Inayos: Mga isyu sa compatibility sa Ultimate Multisite bersyon 1.9.0;

Bersyon 1.2.0 - 10/09/2018

* Pinahusay: Bagong updates URL para sa add-ons;
* Idinagdag: Beta support sa WooCommerce Subscription;

Bersyon 1.1.2 - 11/02/2018

* Inayos: Link to Pay na binubuo nang dinamiko upang tumugon sa mga pagbabago sa WooCommerce endpoints;
* Pinahusay: Pinipilit na namin ngayon ang completed status para sa aming orders kapag tinatawag ang payment_completed upang matiyak na tumatakbo ang aming renewal hooks kapag dapat;

Version 1.1.1 - 24/01/2018

* Inayos: Ngayon, sinusuri rin nito kung ang WooCommerce ay kaka-activate lang sa pangunahing site;
* Inayos: Isinama ang mga over-loading upang pahintulutan ang paggawa ng order na magsama ng mga buwis;

Version 1.1.0 - 04/11/2017

* Inayos: Ngayon, talagang nagbabago ang label ng integration button upang ipakita ang settings. Nangangailangan ng Ultimate Multisite 1.5.0;
* Inayos: Gumagana na ngayon ang WooCommerce Integration kahit hindi network active ang WooCommerce at naka-activate lamang sa pangunahing site;

1.0.0 - Paunang Release
