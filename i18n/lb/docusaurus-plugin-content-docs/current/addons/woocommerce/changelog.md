---
title: WooCommerce Integratioun Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integratiouns-Changelog

Versioun 2.2.0 - Verëffentlecht den 2026-07-01
* Nei: Ultimate Multisite Steierbeträg erschéngen elo als separat WooCommerce Taxe-Linnen beim Checkout, wat d'Steiertotaler virun der Bezuelung méi kloer mécht.
* Nei: Eng opt-in Astellung "Suspend Memberships Immediately on Failed Renewals" an de `wu_woo_suspend_on_payment_failure` Filter bäigefüügt fir Säiten, déi eng Suspendéierung bei gescheiterten Erneierungen wärend der WooCommerce Subscriptions Retry-Fënster wëllen.
* Fix: WooCommerce Subscription Statusen ofgeglach, déi no gescheiterten oder erhuelten Erneierungen net méi synchron mat Ultimate Multisite Memberschaften hätte kënne bleiwen.
* Fix: D'WooCommerce Buttekswährung an d'Ultimate Multisite Währungslëscht bäigefüügt, wann se gefeelt huet.
* Fix: Client-Rechnungsdetailer erhale gelooss, wann Abonnenten op de WooCommerce Checkout weidergeleet ginn.
* Verbessert: Kompatibilitéit mat Jetpack Autoloader 5 bäigefüügt.
* Verbessert: D'Generéierung vum Release-Package gebotzt, sou datt GitHub- a Marketplace-Zips keng verschachtelt Staging-Verzeechnesser an Entwécklungsdateien enthalen.

Versioun 2.0.6 - Verëffentlecht den 2026-01-16
* Verbesserung: Kär-Abonnementer am Addon abegraff. Erfuerdert net méi d'Woocommerce Subscriptinos Erweiderung.

Versioun 2.0.5 - Verëffentlecht den 2026-01-09
* Verbesserung: Iwwersetzunge vun der Glotpress API lueden.
* Fix: Fatale Feeler an e puer Page-Builderen.
* fix: Onendlech Weiderleedung, wann de Client Member vun der Haaptsäit ass.

Versioun 2.0.4 - Verëffentlecht den 2025-11-14
* Bäigefüügt: Iwwersetzunge fir vill méi Sproochen.
* Geännert: Ëmbenannt op Ultimate Multisite: Woocommerce Integratioun.
* Bäigefüügt: Kompatibilitéit mat Woocommerce 10.2.1.
* Bäigefüügt: Kompatibilitéit mat Woocommerce Subscriptions 7.7.0.
* Fix: Kompatibilitéit mat PHP 8.4
* Fix: Weiderleedung, awer wann keng WC Account Säit existéiert.

Versioun 2.0.3 - Verëffentlecht den 2025-08-13
* Geännert: Automatesch Updates mam neie Marketplace aktivéiert.

Versioun 2.0.2 - Verëffentlecht den 2025-07-05
* Geännert: Ëmbenannt op Multisite Ultimate: Woocommerce Integratioun.
* Bäigefüügt: Kompatibilitéit mat Woocommerce 9.8.1.
* Bäigefüügt: Kompatibilitéit mat Woocommerce Subscriptions 7.3.0.
* Fix: D'Kënnegung vun engem Abonnement duerch de Client.
* Fix: Fatale Feeler beim Benotze vum Checkout-Block.
* Verbesserung: Elo kompatibel mat Woocommerce High-Performance personaliséierten Bestellungstabellen.
* Fix: Kënnege beim WooCommerce Checkout kann nach ëmmer eng Memberschaft upgraden.

Versioun 2.0.1 - Verëffentlecht den 2023-08-09

* Bäigefüügt: Kompatibilitéit mat Woocommerce 7.9.0.
* Bäigefüügt: Kompatibilitéit mat Woocommerce Subscriptions 5.3.0.
* Bäigefüügt: Ënnerstëtzung fir Memberschaftsupdates.
* Bäigefüügt: Hiweiser iwwer Trials an Ariichtungskäschten a Woocommerce.
* Bäigefüügt: Identifikatioun vun Ultimate Multisite Woocommerce Produkter mat engem Meta-Wäert.
* Bäigefüügt: Eng eemoleg Korrektur agefüügt, fir all Ultimate Multisite-bezunnen Woocommerce Produkter ze markéieren.
* Bäigefüügt: Vun Ultimate Multisite erstallt Produkter aus der Woocommerce Lëscht ewechgeholl.
* Verbesserung: Eng net widderhuelend Woocommerce Remise erstallt, fir se op de Weenchen unzewenden.
* Verbesserung: Déi widderhuelend Remise op d'Woocommerce Produkt zeréckgesat.
* Verbesserung: E widderhuelende Remise-Label beim Woocommerce Produkt bäigefüügt.
* Verbesserung: Produkttyp beim Checkout séchergestallt.
* Fix: Memberschaftsstatus wärend dem Downgrade-Prozess bäibehalen.
* Fix: Gepréift, ob en Abonnement existéiert, fir Feeler wärend dem Kënnegungsprozess ze vermeiden.
* Fix: Den Ufanksdatum vum Abonnement bäigefüügt, fir a Woocommerce Abonnementer ze benotzen.
* Intern: En neie PHP 8.1 Build-Prozess implementéiert.

Versioun 2.0.0 - Komplett nei geschriwwen.

* Bäigefüügt: Kënnegungsmethod veraarbechten, fir d'Woo-Abonnement ze läschen, wann de Gateway geännert oder d'Memberschaft gekënnegt gëtt;
* Bäigefüügt: Handler fir Memberschaften erof- an eropzestufen;
* Verbesserung: Woocommerce Ofhängegkeeten am Client-Update-Formulaire op Ënnersäite lueden, fir Account-Update z'erlaben;
* Verbesserung: Woocommerce Weenchen korrekt lueden, wann en net existéiert;
* Verbesserung: Sécherstellen, datt mir op den Tabellen vun der Haaptsäit sinn, wann e Checkout veraarbecht gëtt;
* Verbesserung: Ultimo Erneierungsbestellung op Basis vum Woocommerce Abonnementsbestellungswäert maachen an net op Basis vun der leschter Bezuelung;
* Fix: Link vum WU Membership Knäppchen;
* Fix: Ultimo Bestellung als bezuelt setzen, wann d'Woocommerce Subscriptions Erneierung bezuelt gouf;
* Build: MPB als Builder bäifügen;

Versioun 2.0.0-beta-5 - Verëffentlecht den 2022-01-21

* Intern: Hooks- a Filter-Generator bäigefüügt;
* Intern: Ultimate Multisite Stubs fir d'Liewensqualitéit vun Entwéckler bäigefüügt;
* Fixéiert: D'Erstelle vu méi Produkter verhënnert, wann et net néideg ass;

Versioun 2.0.0-beta.4 - 2021-09-23

* Fix: Fuerderen, datt WooCommerce am Netzwierk aktiv ass amplaz nëmmen op der Haaptsäit;
* Verbesserung: Filter bäigefüügt, fir z'erlaben, datt den Add-on als mu-plugin benotzt gëtt;

Versioun 2.0.0-beta.3 - 2021-05-28

* Fix: Dashboard Zougangskontroll war ze aggressiv;
* Verbesserung: WooCommerce Hëllefslinks an den Ultimate Multisite Top-Menü bäigefüügt;

Versioun 2.0.0-beta.2 - 2021-05-04

* Verbesserung: Erstellt pendend Bezuelungen op Ultimo beim Erstelle vun enger WCS Erneierungsbestellung;
* Verbesserung: Fëllt Rechnungsfelder am Viraus mat Ultimate Multisite Clientendaten aus;
* Verbesserung: Füügt Rechnungsfelder fir Gateways erëm bäi;

Versioun 2.0.0-beta.1 - 2021-05-04

* Éischt Beta-Verëffentlechung

-- Al Versiounen --

Versioun 1.2.6 - 26/03/2020

* Fixéiert: Kleng Inkompatibilitéit mat méi neie Versioune vu WooCommerce Subscriptions;

Versioun 1.2.5 - 26/08/2019

* Fixéiert: Feeler an der viregter Verëffentlechung;

Versioun 1.2.4 - 22/08/2019

* Verbessert: Optioun bäigefüügt, fir direkt no der Integratioun op de WooCommerce Checkout-Ecran weiderzeleeden;

Versioun 1.2.3 - 26/05/2019

* Fixéiert: Bezuelungs-E-Mail fir WooCommerce ass a verschiddene Randfäll verschwonnen;

Versioun 1.2.2 - 27/02/2019

* Bäigefüügt: Ënnerstëtzung fir Ariichtungskäschten an der WooCommerce Subscription Integratioun;

Versioun 1.2.1 - 17/11/2018

* Fixéiert: Kompatibilitéitsproblemer mat Ultimate Multisite Versioun 1.9.0;

Versioun 1.2.0 - 10/09/2018

* Verbessert: Nei Updates-URL fir Add-ons;
* Bäigefüügt: Beta-Ënnerstëtzung fir WooCommerce Subscription;

Versioun 1.1.2 - 11/02/2018

* Fixéiert: Link fir ze bezuelen gëtt dynamesch generéiert, fir op Ännerungen un de WooCommerce Endpoints ze reagéieren;
* Verbessert: Mir forcéieren elo de fäerdege Status fir eis Bestellungen, wann payment_completed opgeruff gëtt, fir sécherzestellen, datt eis Erneierungs-Hooks lafen, wann se solle lafen;

Versioun 1.1.1 - 24/01/2018

* Gefléckt: Elo gëtt och gepréift, ob WooCommerce just op der Haapt-Site aktivéiert ass;
* Gefléckt: Iwwerluedungen agebaut, fir datt d'Erstelle vun enger Bestellung Steieren enthalen kann;

Versioun 1.1.0 - 04/11/2017

* Gefléckt: Elo ännert sech d'Beschrëftung vum Integratiouns-Button tatsächlech, fir d'Astellungen ze reflektéieren. Erfuerdert Ultimate Multisite 1.5.0;
* Gefléckt: WooCommerce Integration funktionéiert elo och, wann WooCommerce net netzwierk-wäit aktiv ass an nëmmen op der Haapt-Site aktivéiert ass;

1.0.0 - Éischt Verëffentlechung
