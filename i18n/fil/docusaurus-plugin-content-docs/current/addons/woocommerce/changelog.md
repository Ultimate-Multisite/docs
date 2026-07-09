---
title: Talaan ng mga Pagbabago sa Integrasyon ng WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Changelog ng WooCommerce Integration

Bersyon 2.2.0 - Inilabas noong 2026-07-01
* Bago: Lumilitaw na ngayon ang mga halaga ng buwis ng Ultimate Multisite bilang magkakahiwalay na linya ng bayarin sa WooCommerce sa checkout, kaya mas malinaw ang kabuuang buwis bago magbayad.
* Bago: Nagdagdag ng opt-in na setting na "I-suspend Kaagad ang mga Membership sa Nabigong Renewal" at `wu_woo_suspend_on_payment_failure` filter para sa mga site na nais ng suspensyon dahil sa nabigong renewal sa loob ng retry window ng WooCommerce Subscriptions.
* Ayos: Pinagtugma ang mga status ng WooCommerce Subscription na maaaring manatiling hindi naka-sync sa mga membership ng Ultimate Multisite matapos ang nabigo o nabawing mga renewal.
* Ayos: Idinagdag ang currency ng WooCommerce store sa listahan ng currency ng Ultimate Multisite kapag nawawala ito.
* Ayos: Pinanatili ang mga detalye ng billing ng customer kapag nire-redirect ang mga subscriber sa WooCommerce checkout.
* Pinahusay: Nagdagdag ng compatibility sa Jetpack Autoloader 5.
* Pinahusay: Nilinis ang pagbuo ng release package upang maiwasan ng mga zip ng GitHub at marketplace ang nested staging directories at development files.

Bersyon 2.0.6 - Inilabas noong 2026-01-16
* Pagpapahusay: Isinama ang core subscriptions sa addon. Hindi na nangangailangan ng Woocommerce Subscriptinos extension.

Bersyon 2.0.5 - Inilabas noong 2026-01-09
* Pagpapahusay: I-load ang mga salin mula sa glotpress API.
* Ayos: Fatal error sa ilang page builder.
* ayos: Walang katapusang redirect kapag ang customer ay miyembro ng pangunahing site.

Bersyon 2.0.4 - Inilabas noong 2025-11-14
* Idinagdag: Mga salin para sa mas marami pang wika.
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
* Idinagdag: Suporta para sa mga update ng membership.
* Idinagdag: Mga abiso tungkol sa trials at setup fees sa Woocommerce.
* Idinagdag: Pagkilala sa mga produkto ng Ultimate Multisite Woocommerce gamit ang meta value.
* Idinagdag: Nagpasok ng isang beses na pag-aayos upang markahan ang lahat ng produktong Woocommerce na may kaugnayan sa Ultimate Multisite.
* Idinagdag: Inalis ang mga produktong nilikha ng Ultimate Multisite mula sa listahan ng Woocommerce.
* Pagpapahusay: Gumawa ng non-recurring na Woocommerce discount upang ilapat sa cart.
* Pagpapahusay: Ibinalik ang recurring discount sa produktong Woocommerce.
* Pagpapahusay: Nagdagdag ng recurring discount label sa produktong Woocommerce.
* Pagpapahusay: Tiniyak ang uri ng produkto sa checkout.
* Ayos: Pinanatili ang status ng membership habang nasa proseso ng downgrade.
* Ayos: Sinuri kung may umiiral na subscription upang maiwasan ang mga error habang nasa proseso ng pagkansela.
* Ayos: Idinagdag ang petsa ng pagsisimula ng subscription upang gamitin sa Woocommerce subscriptions.
* Internal: Nagpatupad ng bagong proseso ng PHP 8.1 build.

Bersyon 2.0.0 - Kumpletong muling pagsulat.

* Idinagdag: Paraan ng proseso ng pagkansela upang alisin ang woo subscription kapag binabago ang gateway o kinakansela ang membership;
* Idinagdag: Handler upang i-downgrade at i-upgrade ang mga membership;
* Pagpapahusay: I-load ang mga dependency ng woocommerce sa form ng pag-update ng customer sa mga subsite upang payagan ang pag-update ng account;
* Pagpapahusay: Tamang i-load ang Woocommerce cart kung wala ito;
* Pagpapahusay: Tiyaking nasa pangunahing site tables tayo kapag nagpoproseso ng checkout;
* Pagpapahusay: Gawing batay ang renewal order ng Ultimo sa halaga ng order ng Woocommerce subscription at hindi mula sa huling bayad;
* Ayos: Link ng Go to WU Membership button;
* Ayos: Itakda ang Ultimo order bilang bayad kapag nabayaran na ang renewal ng Woocommerce subscriptions;
* Build: Idagdag ang MPB bilang builder;

Bersyon 2.0.0-beta-5 - Inilabas noong 2022-01-21

* Internal: Nagdagdag ng generator ng hooks at filters;
* Internal: Nagdagdag ng Ultimate Multisite stubs para sa kalidad ng buhay ng developer;
* Inayos: Pigilan ang paggawa ng maraming produkto kapag hindi kinakailangan;

Bersyon 2.0.0-beta.4 - 2021-09-23

* Ayos: kinakailangang maging network active ang WooCommerce sa halip na sa pangunahing site lamang;
* Pagpapahusay: nagdagdag ng filter upang payagan ang add-on na magamit bilang mu-plugin;

Bersyon 2.0.0-beta.3 - 2021-05-28

* Ayos: masyadong agresibo ang kontrol sa access sa dashboard;
* Pagpapahusay: Nagdagdag ng mga link ng tulong sa WooCommerce sa top-menu ng Ultimate Multisite;

Bersyon 2.0.0-beta.2 - 2021-05-04

* Pagpapahusay: lumilikha ng pending payments sa Ultimo sa paggawa ng WCS renewal order;
* Pagpapahusay: paunang pinupunan ang billing fields gamit ang data ng customer ng Ultimate Multisite;
* Pagpapahusay: ibinabalik ang billing fields para sa gateways;

Bersyon 2.0.0-beta.1 - 2021-05-04

* Paunang beta release

-- Mga Lumang Bersyon --

Bersyon 1.2.6 - 26/03/2020

* Inayos: Maliit na incompatibility sa mas bagong mga bersyon ng WooCommerce Subscriptions;

Bersyon 1.2.5 - 26/08/2019

* Inayos: Error sa nakaraang release;

Bersyon 1.2.4 - 22/08/2019

* Pinahusay: Nagdagdag ng opsyon upang agad na i-redirect sa WooCommerce checkout screen pagkatapos ng integration;

Bersyon 1.2.3 - 26/05/2019

* Inayos: Nawala ang payment email para sa WooCommerce sa ilang edge cases;

Bersyon 1.2.2 - 27/02/2019

* Idinagdag: Suporta sa setup fees sa WooCommerce Subscription integration;

Bersyon 1.2.1 - 17/11/2018

* Inayos: Mga isyu sa compatibility sa Ultimate Multisite version 1.9.0;

Bersyon 1.2.0 - 10/09/2018

* Pinahusay: Bagong URL ng updates para sa add-ons;
* Idinagdag: Beta support sa WooCommerce Subscription;

Bersyon 1.1.2 - 11/02/2018

* Inayos: Link to Pay na dynamic na nabubuo upang tumugon sa mga pagbabago sa WooCommerce endpoints;
* Pinahusay: Pinipilit na namin ngayon ang completed status para sa aming mga order kapag tinatawag ang payment_completed upang matiyak na tumatakbo ang aming renewal hooks kapag dapat;

Version 1.1.1 - 24/01/2018

* Inayos: Ngayon sinusuri rin nito kung ang WooCommerce ay kaka-activate lang sa pangunahing site;
* Inayos: Isinama ang mga over-loading upang payagan ang paggawa ng order na magsama ng mga buwis;

Version 1.1.0 - 04/11/2017

* Inayos: Ngayon ang label ng button ng integration ay talagang nagbabago upang ipakita ang mga setting. Nangangailangan ng Ultimate Multisite 1.5.0;
* Inayos: Gumagana na ngayon ang WooCommerce Integration kahit na ang WooCommerce ay hindi network active at naka-activate lamang sa pangunahing site;

1.0.0 - Paunang Release
