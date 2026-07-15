---
title: WooCommerce Integration ændringslog
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration ændringslog

Version 2.2.0 - Udgivet den 2026-07-01
* Ny: Ultimate Multisite skattebeløb vises nu som separate WooCommerce gebyrlinjer ved checkout, hvilket gør skattetotaler tydeligere før betaling.
* Ny: Tilføjede en valgfri indstilling "Suspend Memberships Immediately on Failed Renewals" og `wu_woo_suspend_on_payment_failure`-filter for sites, der ønsker suspendering ved mislykket fornyelse under WooCommerce Subscriptions' genforsøgsvindue.
* Rettelse: Afstemte WooCommerce Subscription-statusser, der kunne forblive ude af synkronisering med Ultimate Multisite medlemskaber efter mislykkede eller gendannede fornyelser.
* Rettelse: Tilføjede WooCommerce butiksvalutaen til Ultimate Multisite valutalisten, når den manglede.
* Rettelse: Bevarede kundens faktureringsoplysninger ved omdirigering af abonnenter til WooCommerce checkout.
* Forbedret: Tilføjede kompatibilitet med Jetpack Autoloader 5.
* Forbedret: Ryddede op i generering af udgivelsespakken, så GitHub- og marketplace-zips undgår indlejrede staging-mapper og udviklingsfiler.

Version 2.0.6 - Udgivet den 2026-01-16
* Forbedring: Inkluder kerneabonnementer i addon. Kræver ikke længere Woocommerce Subscriptinos-udvidelsen.

Version 2.0.5 - Udgivet den 2026-01-09
* Forbedring: Indlæs oversættelser fra glotpress API.
* Rettelse: Fatal fejl i nogle page builders.
* rettelse: Uendelig omdirigering, når kunden er medlem af hovedsitet.

Version 2.0.4 - Udgivet den 2025-11-14
* Tilføjet: Oversættelser til mange flere sprog.
* Ændret: Omdøbt til Ultimate Multisite: Woocommerce Integration.
* Tilføjet: Kompatibilitet med Woocommerce 10.2.1.
* Tilføjet: Kompatibilitet med Woocommerce Subscriptions 7.7.0.
* Rettelse: Kompatibilitet med PHP 8.4
* Rettelse: Omdirigering, men når der ikke findes en WC-accountside.

Version 2.0.3 - Udgivet den 2025-08-13
* Ændret: Aktiverede automatiske opdateringer med ny marketplace.

Version 2.0.2 - Udgivet den 2025-07-05
* Ændret: Omdøbt til Multisite Ultimate: Woocommerce Integration.
* Tilføjet: Kompatibilitet med Woocommerce 9.8.1.
* Tilføjet: Kompatibilitet med Woocommerce Subscriptions 7.3.0.
* Rettelse: Annullering af et abonnement af kunden.
* Rettelse: Fatal fejl ved brug af checkout-blok.
* Forbedring: Nu kompatibel med Woocommerce brugerdefinerede ordretabeller med høj ydeevne.
* Rettelse: Annullering ved WooCommerce checkout kan stadig opgradere et medlemskab.

Version 2.0.1 - Udgivet den 2023-08-09

* Tilføjet: Kompatibilitet med Woocommerce 7.9.0.
* Tilføjet: Kompatibilitet med Woocommerce Subscriptions 5.3.0.
* Tilføjet: Understøttelse af medlemskabsopdateringer.
* Tilføjet: Meddelelser om prøveperioder og oprettelsesgebyrer i Woocommerce.
* Tilføjet: Identifikation af Ultimate Multisite Woocommerce produkter med en metaværdi.
* Tilføjet: Indsatte en engangsrettelse for at markere alle Ultimate Multisite relaterede Woocommerce produkter.
* Tilføjet: Fjernede produkter oprettet af Ultimate Multisite fra Woocommerce-listen.
* Forbedring: Oprettede en ikke-tilbagevendende Woocommerce rabat til anvendelse i kurven.
* Forbedring: Gendannede den tilbagevendende rabat til Woocommerce produktet.
* Forbedring: Tilføjede en etiket for tilbagevendende rabat til Woocommerce produktet.
* Forbedring: Sikrede produkttype ved checkout.
* Rettelse: Bevarede medlemskabsstatus under nedgraderingsprocessen.
* Rettelse: Kontrollerede, om et abonnement findes, for at undgå fejl under annulleringsprocessen.
* Rettelse: Tilføjede startdatoen for abonnementet til brug i Woocommerce subscriptions.
* Internt: Implementerede en ny PHP 8.1 build-proces.

Version 2.0.0 - Komplet omskrivning.

* Tilføjet: Behandl annulleringsmetode for at fjerne woo-abonnement, når gatewayen ændres, eller medlemskabet annulleres;
* Tilføjet: Handler til at nedgradere og opgradere medlemskaber;
* Forbedring: Indlæs woocommerce-afhængigheder på kundens opdateringsformular i subsites for at tillade account-opdatering;
* Forbedring: Korrekt indlæsning af Woocommerce kurv, hvis den ikke findes;
* Forbedring: Sørg for, at vi er på hovedsitets tabeller, når en checkout behandles;
* Forbedring: Gør Ultimo fornyelsesordre baseret på Woocommerce abonnementsordreværdi og ikke på sidste betaling;
* Rettelse: Link til WU Membership-knap;
* Rettelse: Sæt Ultimo ordre som betalt, når Woocommerce subscriptions-fornyelse er betalt;
* Build: Tilføj MPB som builder;

Version 2.0.0-beta-5 - Udgivet den 2022-01-21

* Internt: Tilføjede generator til hooks og filtre;
* Internt: Tilføjede Ultimate Multisite stubs for bedre udviklerlivskvalitet;
* Rettet: Forhindr oprettelse af flere produkter, når det ikke er nødvendigt;

Version 2.0.0-beta.4 - 2021-09-23

* Rettelse: kræver, at WooCommerce er netværksaktiv i stedet for kun på hovedsitet;
* Forbedring: tilføjede filter for at tillade, at add-on'et bruges som et mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Rettelse: adgangskontrol til dashboard var for aggressiv;
* Forbedring: Tilføjede WooCommerce hjælpelinks til Ultimate Multisite topmenu;

Version 2.0.0-beta.2 - 2021-05-04

* Forbedring: opretter afventende betalinger på Ultimo ved oprettelse af WCS-fornyelsesordre;
* Forbedring: udfylder faktureringsfelter på forhånd med Ultimate Multisite kundedata;
* Forbedring: tilføjer faktureringsfelter tilbage for gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Første betaudgivelse

-- Ældre versioner --

Version 1.2.6 - 26/03/2020

* Rettet: Lille inkompatibilitet med nyere versioner af WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Rettet: Fejl i forrige udgivelse;

Version 1.2.4 - 22/08/2019

* Forbedret: Tilføjede mulighed for at omdirigere til WooCommerce checkout-skærm umiddelbart efter integration;

Version 1.2.3 - 26/05/2019

* Rettet: Betalings-e-mail for WooCommerce forsvandt i nogle edge cases;

Version 1.2.2 - 27/02/2019

* Tilføjet: Understøttelse af oprettelsesgebyrer i WooCommerce Subscription-integrationen;

Version 1.2.1 - 17/11/2018

* Rettet: Kompatibilitetsproblemer med Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Forbedret: Ny opdaterings-URL for add-ons;
* Tilføjet: Beta-understøttelse af WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Rettet: Link til betaling genereres dynamisk for at reagere på ændringer i WooCommerce endpoints;
* Forbedret: Vi gennemtvinger nu fuldført status for vores ordrer, når payment_completed kaldes, for at sikre, at vores fornyelseshooks kører, når de skal;

Version 1.1.1 - 24/01/2018

* Rettet: Nu tjekker den også, om WooCommerce netop er aktiveret på hovedwebstedet;
* Rettet: Inkluderede overbelastninger for at tillade ordreoprettelse at inkludere skatter;

Version 1.1.0 - 04/11/2017

* Rettet: Nu ændres etiketten på integrationsknappen faktisk for at afspejle indstillingerne. Kræver Ultimate Multisite 1.5.0;
* Rettet: WooCommerce Integration virker nu, selv hvis WooCommerce ikke er netværksaktiv og kun er aktiveret på t^he hovedwebstedet;

1.0.0 - Første udgivelse
