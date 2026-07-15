---
title: WooCommerce-integrasjonsendringslogg
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration endringslogg

Versjon 2.2.0 - Utgitt 2026-07-01
* Nytt: Ultimate Multisite skattebeløp vises nå som separate WooCommerce gebyrlinjer ved checkout, noe som gjør skattetotalene tydeligere før betaling.
* Nytt: La til en valgfri innstilling for "Suspend Memberships Immediately on Failed Renewals" og filteret `wu_woo_suspend_on_payment_failure` for nettsteder som ønsker suspendering ved mislykket fornyelse i WooCommerce Subscriptions forsøksvindu.
* Fiks: Avstemte WooCommerce Subscription-statuser som kunne forbli ute av synkronisering med Ultimate Multisite-medlemskap etter mislykkede eller gjenopprettede fornyelser.
* Fiks: La til WooCommerce butikkvaluta i Ultimate Multisite valutaliste når den manglet.
* Fiks: Bevarte kundens faktureringsdetaljer ved omdirigering av abonnenter til WooCommerce checkout.
* Forbedret: La til kompatibilitet med Jetpack Autoloader 5.
* Forbedret: Ryddet opp i generering av utgivelsespakke slik at GitHub- og markedsplass-zip-filer unngår nestede staging-mapper og utviklingsfiler.

Versjon 2.0.6 - Utgitt 2026-01-16
* Forbedring: Inkluder kjerneabonnementer i tillegget. Krever ikke lenger Woocommerce Subscriptinos-utvidelsen.

Versjon 2.0.5 - Utgitt 2026-01-09
* Forbedring: Last inn oversettelser fra glotpress API.
* Fiks: Kritisk feil i noen sidebyggere.
* fiks: Uendelig omdirigering når kunden er medlem av hovednettstedet.

Versjon 2.0.4 - Utgitt 2025-11-14
* Lagt til: Oversettelser for mange flere språk.
* Endret: Omdøpt til Ultimate Multisite: Woocommerce Integration.
* Lagt til: Kompatibilitet med Woocommerce 10.2.1.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 7.7.0.
* Fiks: Kompatibilitet med PHP 8.4
* Fiks: Omdiriger, men når ingen WC-kontoside finnes.

Versjon 2.0.3 - Utgitt 2025-08-13
* Endret: Aktivert automatiske oppdateringer med ny markedsplass.

Versjon 2.0.2 - Utgitt 2025-07-05
* Endret: Omdøpt til Multisite Ultimate: Woocommerce Integration.
* Lagt til: Kompatibilitet med Woocommerce 9.8.1.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 7.3.0.
* Fiks: Kansellering av et abonnement av kunden.
* Fiks: Kritisk feil ved bruk av checkout-blokk.
* Forbedring: Nå kompatibel med Woocommerce high performance custom order tables.
* Fiks: Kansellering ved WooCommerce checkout kan fortsatt oppgradere et medlemskap.

Versjon 2.0.1 - Utgitt 2023-08-09

* Lagt til: Kompatibilitet med Woocommerce 7.9.0.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 5.3.0.
* Lagt til: Støtte for medlemskapsoppdateringer.
* Lagt til: Varsler om prøveperioder og oppstartsgebyrer i Woocommerce.
* Lagt til: Identifisering av Ultimate Multisite Woocommerce-produkter med en metaverdi.
* Lagt til: Satt inn en engangsfiks for å merke alle Ultimate Multisite-relaterte Woocommerce-produkter.
* Lagt til: Fjernet produkter opprettet av Ultimate Multisite fra Woocommerce-listen.
* Forbedring: Opprettet en ikke-gjentakende Woocommerce-rabatt som brukes på handlekurven.
* Forbedring: Gjenopprettet den gjentakende rabatten til Woocommerce-produktet.
* Forbedring: La til en etikett for gjentakende rabatt på Woocommerce-produktet.
* Forbedring: Sikret produkttype ved checkout.
* Fiks: Opprettholdt medlemskapsstatus under nedgraderingsprosessen.
* Fiks: Sjekket om et abonnement finnes for å unngå feil under kanselleringsprosessen.
* Fiks: La til startdato for abonnement til bruk i Woocommerce-abonnementer.
* Internt: Implementerte en ny PHP 8.1 byggeprosess.

Versjon 2.0.0 - Fullstendig omskriving.

* Lagt til: Prosess for kanselleringsmetode for å fjerne woo-abonnement når gateway endres eller medlemskapet kanselleres;
* Lagt til: Håndterer for å nedgradere og oppgradere medlemskap;
* Forbedring: Last inn woocommerce-avhengigheter på skjema for kundeoppdatering på undernettsteder for å tillate kontoopdatering;
* Forbedring: Korrekt lasting av Woocommerce handlekurv hvis den ikke finnes;
* Forbedring: Sørg for at vi er på hovednettstedets tabeller når en checkout behandles;
* Forbedring: Gjør Ultimo fornyelsesordre basert på Woocommerce abonnementsordreverdi og ikke på siste betaling;
* Fiks: Lenke for Gå til WU Membership-knapp;
* Fiks: Sett Ultimo-ordre som betalt når Woocommerce subscriptions-fornyelse er betalt;
* Bygg: Legg til MPB som bygger;

Versjon 2.0.0-beta-5 - Utgitt 2022-01-21

* Internt: La til generator for hooks og filtre;
* Internt: La til Ultimate Multisite stubs for bedre utvikleropplevelse;
* Fikset: Forhindre opprettelse av flere produkter når det ikke er nødvendig;

Versjon 2.0.0-beta.4 - 2021-09-23

* Fiks: krever at WooCommerce er nettverksaktiv i stedet for kun på hovednettstedet;
* Forbedring: la til filter for å tillate at tillegget brukes som en mu-plugin;

Versjon 2.0.0-beta.3 - 2021-05-28

* Fiks: tilgangskontroll for Dashboard var for aggressiv;
* Forbedring: La til WooCommerce hjelpelinker i Ultimate Multisite toppmeny;

Versjon 2.0.0-beta.2 - 2021-05-04

* Forbedring: oppretter ventende betalinger på Ultimo ved opprettelse av WCS fornyelsesordre;
* Forbedring: forhåndsutfyller faktureringsfelter med Ultimate Multisite kundedata;
* Forbedring: legger tilbake faktureringsfelter for gateways;

Versjon 2.0.0-beta.1 - 2021-05-04

* Første beta-utgivelse

-- Eldre versjoner --

Versjon 1.2.6 - 26/03/2020

* Fikset: Liten inkompatibilitet med nyere versjoner av WooCommerce Subscriptions;

Versjon 1.2.5 - 26/08/2019

* Fikset: Feil i forrige utgivelse;

Versjon 1.2.4 - 22/08/2019

* Forbedret: La til alternativ for å omdirigere til WooCommerce checkout-skjerm umiddelbart etter integrering;

Versjon 1.2.3 - 26/05/2019

* Fikset: Betalings-e-post for WooCommerce forsvant i noen grensetilfeller;

Versjon 1.2.2 - 27/02/2019

* Lagt til: Støtte for oppstartsgebyrer i WooCommerce Subscription-integrasjonen;

Versjon 1.2.1 - 17/11/2018

* Fikset: Kompatibilitetsproblemer med Ultimate Multisite versjon 1.9.0;

Versjon 1.2.0 - 10/09/2018

* Forbedret: Ny oppdaterings-URL for tillegg;
* Lagt til: Betastøtte for WooCommerce Subscription;

Versjon 1.1.2 - 11/02/2018

* Fikset: Lenke til betaling genereres dynamisk for å reagere på endringer i WooCommerce endpoints;
* Forbedret: Vi tvinger nå fullført status for ordrene våre når payment_completed kalles, for å sikre at fornyelses-hooks kjører når de skal;

Version 1.1.1 - 24/01/2018

* Rettet: Nå sjekker den også om WooCommerce nettopp er aktivert på hovedsiden;
* Rettet: Inkluderte overstyringer for å tillate ordreopprettelse å inkludere avgifter;

Version 1.1.0 - 04/11/2017

* Rettet: Nå endres etiketten på integrasjonsknappen faktisk for å gjenspeile innstillingene. Krever Ultimate Multisite 1.5.0;
* Rettet: WooCommerce Integration fungerer nå selv om WooCommerce ikke er nettverksaktiv og bare aktivert på t^he hovedsiden;

1.0.0 - Første utgivelse
