---
title: WooCommerce Kev Sib Xyaw Daim Ntawv Teev Kev Hloov Tshiab
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration Daim Ntawv Hloov Tshiab

Version 2.2.0 - Tso tawm rau 2026-07-01
* Tshiab: Cov nyiaj se ntawm Ultimate Multisite tam sim no tshwm ua cov kab nqi WooCommerce cais ntawm checkout, ua rau tag nrho se pom meej dua ua ntej them nyiaj.
* Tshiab: Ntxiv ib qho kev teeb tsa xaiv nkag "Suspend Memberships Immediately on Failed Renewals" thiab `wu_woo_suspend_on_payment_failure` filter rau cov site uas xav kom ncua membership thaum rov txuas hnub nyoog tsis tiav nyob rau hauv WooCommerce Subscriptions lub sijhawm rov sim.
* Kho: Kho kom WooCommerce Subscription cov xwm txheej uas tej zaum yuav tsis sib phim nrog Ultimate Multisite memberships tom qab rov txuas hnub nyoog tsis tiav lossis rov qab tau.
* Kho: Ntxiv WooCommerce lub khw tus txiaj rau Ultimate Multisite daim npe txiaj thaum nws tsis muaj.
* Kho: Khaws cov ntsiab lus billing ntawm customer cia thaum xa subscribers mus rau WooCommerce checkout.
* Txhim kho: Ntxiv kev sib haum nrog Jetpack Autoloader 5.
* Txhim kho: Tu kev tsim release package kom GitHub thiab marketplace zips tsis muaj nested staging directories thiab development files.

Version 2.0.6 - Tso tawm rau 2026-01-16
* Kev txhim kho: Muab core subscriptions tso rau hauv addon. Tsis tas yuav tsum muaj Woocommerce Subscriptinos extension lawm.

Version 2.0.5 - Tso tawm rau 2026-01-09
* Kev txhim kho: Load cov kev txhais lus los ntawm glotpress API.
* Kho: Fatal error hauv qee page builders.
* kho: Redirect tsis kawg thaum customer yog member ntawm main site.

Version 2.0.4 - Tso tawm rau 2025-11-14
* Ntxiv: Kev txhais lus rau ntau yam lus ntxiv.
* Hloov: Hloov npe mus rau Ultimate Multisite: Woocommerce Integration.
* Ntxiv: Kev sib haum nrog Woocommerce 10.2.1.
* Ntxiv: Kev sib haum nrog Woocommerce Subscriptions 7.7.0.
* Kho: Kev sib haum nrog PHP 8.4
* Kho: Redirect tab sis thaum tsis muaj WC account page.

Version 2.0.3 - Tso tawm rau 2025-08-13
* Hloov: Qhib automatic updates nrog marketplace tshiab.

Version 2.0.2 - Tso tawm rau 2025-07-05
* Hloov: Hloov npe mus rau Multisite Ultimate: Woocommerce Integration.
* Ntxiv: Kev sib haum nrog Woocommerce 9.8.1.
* Ntxiv: Kev sib haum nrog Woocommerce Subscriptions 7.3.0.
* Kho: Customer tshem ib subscription.
* Kho: Fatal error thaum siv checkout block.
* Kev txhim kho: Tam sim no sib haum nrog Woocommerce high performance custom order tables.
* Kho: Kev tshem ntawm WooCommerce checkout tseem tuaj yeem upgrade ib membership.

Version 2.0.1 - Tso tawm rau 2023-08-09

* Ntxiv: Kev sib haum nrog Woocommerce 7.9.0.
* Ntxiv: Kev sib haum nrog Woocommerce Subscriptions 5.3.0.
* Ntxiv: Kev txhawb rau membership updates.
* Ntxiv: Cov ntawv ceeb toom txog trials thiab setup fees hauv Woocommerce.
* Ntxiv: Kev txheeb xyuas Ultimate Multisite Woocommerce products nrog ib meta value.
* Ntxiv: Muab ib qho kho ib zaug tso rau los cim tag nrho cov Woocommerce products uas cuam tshuam nrog Ultimate Multisite.
* Ntxiv: Tshem cov products uas Ultimate Multisite tsim tawm ntawm Woocommerce list.
* Kev txhim kho: Tsim ib Woocommerce discount uas tsis rov tshwm dua los siv rau cart.
* Kev txhim kho: Rov qab tso recurring discount rau Woocommerce product.
* Kev txhim kho: Ntxiv recurring discount label rau Woocommerce product.
* Kev txhim kho: Xyuas kom muaj product type ntawm checkout.
* Kho: Khaws membership status thaum lub downgrade process.
* Kho: Xyuas seb puas muaj ib subscription kom zam errors thaum lub cancellation process.
* Kho: Ntxiv start subscription date los siv hauv Woocommerce subscriptions.
* Sab hauv: Siv ib txoj kev build tshiab rau PHP 8.1.

Version 2.0.0 - Sau dua tshiab tag nrho.

* Ntxiv: Process cancellation method kom tshem woo subscription thaum hloov gateway lossis canceling membership;
* Ntxiv: Handler los downgrade thiab upgrade memberships;
* Kev txhim kho: Load woocommerce dependencies ntawm customer update form hauv subsites kom tso cai account update;
* Kev txhim kho: Load Woocommerce cart kom raug yog tias tsis muaj;
* Kev txhim kho: Xyuas kom peb nyob ntawm main site tables thaum process ib checkout;
* Kev txhim kho: Ua Ultimo renewal order raws li Woocommerce subscription order value thiab tsis yog los ntawm last payment;
* Kho: Go to WU Membership button link;
* Kho: Teem Ultimo order ua paid thaum Woocommerce subscriptions renewal tau paid;
* Build: Ntxiv MPB ua builder;

Version 2.0.0-beta-5 - Tso tawm rau 2022-01-21

* Sab hauv: Ntxiv hooks thiab filters generator;
* Sab hauv: Ntxiv Ultimate Multisite stubs kom developer ua haujlwm yooj yim dua;
* Kho: Tiv thaiv kev tsim ntau products thaum tsis tsim nyog;

Version 2.0.0-beta.4 - 2021-09-23

* Kho: yuav tsum kom WooCommerce network active es tsis yog main site xwb;
* Kev txhim kho: ntxiv filter kom tso cai rau add-on siv tau ua ib mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Kho: dashboard access control nruj dhau lawm;
* Kev txhim kho: Ntxiv WooCommerce help links rau Ultimate Multisite top-menu;

Version 2.0.0-beta.2 - 2021-05-04

* Kev txhim kho: tsim pending payments ntawm Ultimo thaum WCS renewal order creation;
* Kev txhim kho: pre-fills billing fields nrog Ultimate Multisite customer data;
* Kev txhim kho: ntxiv rov qab billing fields rau gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Thawj beta release

-- Cov Version Qub --

Version 1.2.6 - 26/03/2020

* Kho: Kev tsis sib haum me me nrog WooCommerce Subscriptions cov version tshiab dua;

Version 1.2.5 - 26/08/2019

* Kho: Error ntawm release ua ntej;

Version 1.2.4 - 22/08/2019

* Txhim kho: Ntxiv kev xaiv kom redirect mus rau WooCommerce checkout screen tam sim tom qab integration;

Version 1.2.3 - 26/05/2019

* Kho: Payment email rau WooCommerce ploj hauv qee edge cases;

Version 1.2.2 - 27/02/2019

* Ntxiv: Kev txhawb rau setup fees ntawm WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Kho: Compatibility issues nrog Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Txhim kho: URL tshiab rau add-ons updates;
* Ntxiv: Beta support rau WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Kho: Link to Pay raug tsim dynamically kom teb tau rau kev hloov rau WooCommerce endpoints;
* Txhim kho: Tam sim no peb yuam completed status rau peb orders thaum payment_completed raug hu kom paub tseeb tias peb cov renewal hooks khiav thaum lawv yuav tsum khiav;

Version 1.1.1 - 24/01/2018

* Kho lawm: Tam sim no nws kuj kuaj saib WooCommerce puas nyuam qhuav qhib rau ntawm lub site tseem ceeb;
* Kho lawm: Ntxiv cov over-loadings kom kev tsim order suav tau se nrog;

Version 1.1.0 - 04/11/2017

* Kho lawm: Tam sim no label ntawm lub pob integration hloov tiag tiag kom phim cov settings. Yuav tsum muaj Ultimate Multisite 1.5.0;
* Kho lawm: WooCommerce Integration tam sim no ua haujlwm tau txawm tias WooCommerce tsis active thoob network thiab tsuas qhib rau hauv lub site tseem ceeb xwb;

1.0.0 - Kev Tso Tawm Thawj Zaug
