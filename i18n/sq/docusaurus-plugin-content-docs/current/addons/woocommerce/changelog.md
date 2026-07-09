---
title: Regjistri i ndryshimeve të integrimit me WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Ditari i ndryshimeve të integrimit WooCommerce {#woocommerce-integration-changelog}

Versioni 2.2.0 - Publikuar më 2026-07-01
* E re: Shumat e taksave të Ultimate Multisite tani shfaqen si rreshta të veçantë tarifash të WooCommerce në checkout, duke i bërë totalet e taksave më të qarta para pagesës.
* E re: U shtua një cilësim me zgjedhje "Pezullo Memberships menjëherë në rinovime të dështuara" dhe filtri `wu_woo_suspend_on_payment_failure` për site që duan pezullim pas rinovimit të dështuar gjatë dritares së riprovimit të WooCommerce Subscriptions.
* Rregullim: U pajtuan statuset e WooCommerce Subscription që mund të mbeteshin jashtë sinkronizimit me membership-et e Ultimate Multisite pas rinovimeve të dështuara ose të rikuperuara.
* Rregullim: U shtua monedha e dyqanit WooCommerce në listën e monedhave të Ultimate Multisite kur mungonte.
* Rregullim: U ruajtën të dhënat e faturimit të klientit kur abonentët ridrejtohen te WooCommerce checkout.
* Përmirësuar: U shtua përputhshmëria me Jetpack Autoloader 5.
* Përmirësuar: U pastrua gjenerimi i paketës së publikimit që skedarët zip të GitHub dhe marketplace të shmangin drejtoritë e ndërmjetme të futura brenda dhe skedarët e zhvillimit.

Versioni 2.0.6 - Publikuar më 2026-01-16
* Përmirësim: Përfshi subscription-et bazë në addon. Nuk kërkon më shtesën WooCommerce Subscriptions.

Versioni 2.0.5 - Publikuar më 2026-01-09
* Përmirësim: Ngarko përkthimet nga glotpress API.
* Rregullim: Gabim fatal në disa page builders.
* rregullim: Ridrejtim i pafund kur klienti është anëtar i site kryesor.

Versioni 2.0.4 - Publikuar më 2025-11-14
* Shtuar: Përkthime për shumë më tepër gjuhë.
* Ndryshuar: U riemërtua në Ultimate Multisite: WooCommerce Integration.
* Shtuar: Përputhshmëri me WooCommerce 10.2.1.
* Shtuar: Përputhshmëri me WooCommerce Subscriptions 7.7.0.
* Rregullim: Përputhshmëri me PHP 8.4
* Rregullim: Ridrejtim, por kur nuk ekziston faqe Account e WC.

Versioni 2.0.3 - Publikuar më 2025-08-13
* Ndryshuar: U aktivizuan përditësimet automatike me marketplace-in e ri.

Versioni 2.0.2 - Publikuar më 2025-07-05
* Ndryshuar: U riemërtua në Multisite Ultimate: WooCommerce Integration.
* Shtuar: Përputhshmëri me WooCommerce 9.8.1.
* Shtuar: Përputhshmëri me WooCommerce Subscriptions 7.3.0.
* Rregullim: Anulimi i një subscription nga klienti.
* Rregullim: Gabim fatal kur përdoret blloku i checkout.
* Përmirësim: Tani është i përputhshëm me tabelat e porosive të personalizuara me performancë të lartë të WooCommerce.
* Rregullim: Anulimi në WooCommerce checkout ende mund të përmirësojë një membership.

Versioni 2.0.1 - Publikuar më 2023-08-09

* Shtuar: Përputhshmëri me WooCommerce 7.9.0.
* Shtuar: Përputhshmëri me WooCommerce Subscriptions 5.3.0.
* Shtuar: Mbështetje për përditësimet e membership.
* Shtuar: Njoftime rreth provave dhe tarifave të konfigurimit në WooCommerce.
* Shtuar: Identifikim i produkteve Ultimate Multisite WooCommerce me një vlerë meta.
* Shtuar: U fut një rregullim njëherësh për të shënuar të gjitha produktet WooCommerce të lidhura me Ultimate Multisite.
* Shtuar: U hoqën produktet e krijuara nga Ultimate Multisite nga lista WooCommerce.
* Përmirësim: U krijua një zbritje WooCommerce jo e përsëritur për t’u aplikuar në shportë.
* Përmirësim: U rikthye zbritja e përsëritur te produkti WooCommerce.
* Përmirësim: U shtua një etiketë zbritjeje e përsëritur te produkti WooCommerce.
* Përmirësim: U sigurua lloji i produktit në checkout.
* Rregullim: U ruajt statusi i membership gjatë procesit të uljes së planit.
* Rregullim: U kontrollua nëse ekziston një subscription për të shmangur gabimet gjatë procesit të anulimit.
* Rregullim: U shtua data e fillimit të subscription për përdorim në WooCommerce subscriptions.
* I brendshëm: U zbatua një proces i ri ndërtimi PHP 8.1.

Versioni 2.0.0 - Rishkrim i plotë.

* Shtuar: Metodë procesimi anulimi për të hequr woo subscription kur ndryshohet gateway ose anulohet membership;
* Shtuar: Trajtues për uljen dhe ngritjen e membership-eve;
* Përmirësim: Ngarko varësitë e WooCommerce në formularin e përditësimit të klientit në subsite për të lejuar përditësimin e account;
* Përmirësim: Ngarko saktë shportën WooCommerce nëse nuk ekziston;
* Përmirësim: Siguro që jemi në tabelat e site kryesor kur përpunohet një checkout;
* Përmirësim: Bëj që porosia e rinovimit Ultimo të bazohet në vlerën e porosisë së WooCommerce subscription dhe jo në pagesën e fundit;
* Rregullim: Lidhja e butonit Shko te WU Membership;
* Rregullim: Vendos porosinë Ultimo si të paguar kur rinovimi i WooCommerce subscriptions është paguar;
* Ndërtim: Shto MPB si builder;

Versioni 2.0.0-beta-5 - Publikuar më 2022-01-21

* I brendshëm: U shtua gjenerator hooks dhe filtrash;
* I brendshëm: U shtuan Ultimate Multisite stubs për cilësinë e jetës së zhvilluesit;
* Rregulluar: Parandalo krijimin e produkteve të shumëfishta kur nuk është e nevojshme;

Versioni 2.0.0-beta.4 - 2021-09-23

* Rregullim: kërkimi që WooCommerce të jetë aktiv në rrjet në vend të vetëm në site kryesor;
* Përmirësim: u shtua filtër për të lejuar që add-on të përdoret si mu-plugin;

Versioni 2.0.0-beta.3 - 2021-05-28

* Rregullim: kontrolli i aksesit në dashboard ishte shumë agresiv;
* Përmirësim: U shtuan lidhje ndihme WooCommerce në menunë e sipërme të Ultimate Multisite;

Versioni 2.0.0-beta.2 - 2021-05-04

* Përmirësim: krijon pagesa në pritje në Ultimo gjatë krijimit të porosisë së rinovimit WCS;
* Përmirësim: paraplotëson fushat e faturimit me të dhënat e klientit të Ultimate Multisite;
* Përmirësim: rishton fushat e faturimit për gateways;

Versioni 2.0.0-beta.1 - 2021-05-04

* Publikimi fillestar beta

-- Versione të vjetra --

Versioni 1.2.6 - 26/03/2020

* Rregulluar: Papajtueshmëri e vogël me versionet më të reja të WooCommerce Subscriptions;

Versioni 1.2.5 - 26/08/2019

* Rregulluar: Gabim në publikimin e mëparshëm;

Versioni 1.2.4 - 22/08/2019

* Përmirësuar: U shtua opsion për ridrejtim menjëherë te ekrani WooCommerce checkout pas integrimit;

Versioni 1.2.3 - 26/05/2019

* Rregulluar: Email-i i pagesës për WooCommerce u zhduk në disa raste skajore;

Versioni 1.2.2 - 27/02/2019

* Shtuar: Mbështetje për tarifat e konfigurimit në integrimin WooCommerce Subscription;

Versioni 1.2.1 - 17/11/2018

* Rregulluar: Probleme përputhshmërie me versionin 1.9.0 të Ultimate Multisite;

Versioni 1.2.0 - 10/09/2018

* Përmirësuar: URL e re përditësimesh për add-ons;
* Shtuar: Mbështetje beta për WooCommerce Subscription;

Versioni 1.1.2 - 11/02/2018

* Rregulluar: Lidhja për pagesë që gjenerohet dinamikisht për t’iu përgjigjur ndryshimeve në endpoints të WooCommerce;
* Përmirësuar: Tani detyrojmë statusin e përfunduar për porositë tona kur thirret payment_completed për t’u siguruar që hooks-et tona të rinovimit ekzekutohen kur duhet;

Version 1.1.1 - 24/01/2018

* Rregulluar: Tani kontrollon gjithashtu nëse WooCommerce sapo është aktivizuar në site-in kryesor;
* Rregulluar: U përfshinë mbingarkime për të lejuar krijimin e porosive që të përfshijë taksat;

Version 1.1.0 - 04/11/2017

* Rregulluar: Tani etiketa e butonit të integrimit ndryshon vërtet për të pasqyruar cilësimet. Kërkon Ultimate Multisite 1.5.0;
* Rregulluar: WooCommerce Integration tani funksionon edhe nëse WooCommerce nuk është aktiv në rrjet dhe është aktivizuar vetëm në site-in kryesor;

1.0.0 - Publikimi fillestar
