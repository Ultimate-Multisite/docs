---
title: WooCommerce Integrasjonslogg
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Endringslogg for WooCommerce Integration

Version 2.0.6 - Utgitt 2026-01-16
* Forbedring: Inkluderer kjerneabonnementer i tilleggspakken. Krever ikke lenger Woocommerce Subscriptions-tillegg.

Version 2.0.5 - Utgitt 2026-01-09
* Forbedring: Laster over oversettelser fra glotpress API.
* Feilretting: Kritisk feil i noen page builders.
* Feilretting: Uendelig omdirigering når kunden er medlem av hovednettstedet.

Version 2.0.4 - Utgitt 2025-11-14
* Lagt til: Oversettelser for mange flere språk.
* Endret: Omdøpt til Ultimate Multisite: Woocommerce Integration.
* Lagt til: Kompatibilitet med Woocommerce 10.2.1.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 7.7.0.
* Feilretting: Kompatibilitet med PHP 8.4
* Feilretting: Omdirigerer, men når ingen WC-kontoside eksisterer.

Version 2.0.3 - Utgitt 2025-08-13
* Endret: Aktiverte automatisk oppdatering med nytt marked.

Version 2.0.2 - Utgitt 2025-07-05
* Endret: Omdøpt til Multisite Ultimate: Woocommerce Integration.
* Lagt til: Kompatibilitet med Woocommerce 9.8.1.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 7.3.0.
* Feilretting: Kansellering av et abonnement av kunden.
* Feilretting: Kritisk feil ved bruk av checkout-blokken.
* Forbedring: Nå kompatibel med Woocommerce high performance custom order tables.
* Feilretting: Kansellering i WooCommerce checkout kan fortsatt oppgradere et medlemskap.

Version 2.0.1 - Utgitt 2023-08-09

* Lagt til: Kompatibilitet med Woocommerce 7.9.0.
* Lagt til: Kompatibilitet med Woocommerce Subscriptions 5.3.0.
* Lagt til: Støtte for oppdatering av medlemskap.
* Lagt til: Varsler om prøveperioder og oppsettgebyrer i Woocommerce.
* Lagt til: Identifikasjon av Ultimate Multisite Woocommerce-produkter med en metaverdi.
* Lagt til: Inkluderte en engangsløsning for å merke alle Ultimate Multisite-relaterte Woocommerce-produkter.
* Lagt til: Fjernet Ultimate Multisite-opprettede produkter fra Woocommerce-listen.
* Forbedring: Opprettet en ikke-gjentakende Woocommerce-rabatt for å anvende på handlekurven.
* Forbedring: Gjenopprettet den gjentakende rabatten til Woocommerce-produktet.
* Forbedring: Lagt til en merkelapp for gjentakende rabatt på Woocommerce-produktet.
* Forbedring: Sikret produktetypen i checkout.
* Feilretting: Opprettholdt medlemskapsstatusen under nedgraderingsprosessen.
* Feilretting: Sjekket om et abonnement eksisterer for å unngå feil under kanselleringsprosessen.
* Feilretting: Lagt til startdato for abonnementet for bruk i Woocommerce subscriptions.
* Internt: Implementerte en ny PHP 8.1 byggeprosess.

Version 2.0.0 - Fullstendig omskriving.

* Lagt til: Prosess for kansellering for å fjerne woo-abonnementet ved bytte av betalingsgateway eller kansellering av medlemskapet;
* Lagt til: Håndterer for nedgradering og oppgradering av medlemskap;
* Forbedring: Laster woocommerce-avhengigheter på kundeoppdateringsskjemaet i subsites for å tillate kontooppdatering;
* Forbedring: Korrekt laster Woocommerce-handlekurven hvis den ikke eksisterer;
* Forbedring: Sikrer at vi er på hovednettstedets tabeller når vi behandler en kasse;
* Forbedring: Gjør Ultimo-fornyelsesordren basert på Woocommerce-abonnementets verdi og ikke fra siste betaling;
* Feilretting: Går til WU Membership-knapplenke;
* Feilretting: Setter Ultimo-ordren som betalt når Woocommerce-abonnementets fornyelse er betalt;
* Bygg: Legger til MPB som builder;

Version 2.0.0-beta-5 - Utgitt 2022-01-21

* Internt: Lagt til hooks og filtergenerator;
* Internt: Lagt til Ultimate Multisite stubs for utviklerens livskvalitet;
* Rettet: Forhindrer opprettelse av flere produkter når det ikke er nødvendig;

Version 2.0.0-beta.4 - 2021-09-23

* Feilretting: Krever at WooCommerce er nettverksaktiv i stedet for bare på hovednettstedet;
* Forbedring: Lagt til filter for å tillate at tilleggspakken kan brukes som en mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Feilretting: Dashboard-tilgangskontrollen var for aggressiv;
* Forbedring: Lagt til WooCommerce hjelpelinker i Ultimate Multisite toppmeny;

Version 2.0.0-beta.2 - 2021-05-04

* Forbedring: Oppretter utestående betalinger i Ultimo ved opprettelse av WCS-fornyelsesordre;
* Forbedring: Fyller ut faktureringsfelt med Ultimate Multisite kundeinformasjon;
* Forbedring: Legger til faktureringsfelt for betalingsgatewayer;

Version 2.0.0-beta.1 - 2021-05-04

* Innledende beta-utgivelse

-- Eldre Versjoner --

Version 1.2.6 - 26/03/2020

* Rettet: Liten inkompatibilitet med nyere versjoner av WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Rettet: Feil i forrige utgivelse;

Version 1.2.4 - 22/08/2019

* Forbedret: Lagt til mulighet for å omdirigere til WooCommerce kasseskjerm etter integrasjon umiddelbart;

Version 1.2.3 - 26/05/2019

* Rettet: Betalings-e-post for WooCommerce forsvant i noen grensetilfeller;

Version 1.2.2 - 27/02/2019

* Lagt til: Støtte for oppsettgebyrer i WooCommerce Subscription-integrasjonen;

Version 1.2.1 - 17/11/2018

* Rettet: Kompatibilitetsproblemer med Ultimate Multisite versjon 1.9.0;

Version 1.2.0 - 10/09/2018

* Forbedret: Ny URL for oppdateringer for tilleggspakker;
* Lagt til: Beta-støtte for WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Rettet: Lenken til Betalingsbetaling ble generert dynamisk for å respondere på endringer i WooCommerce-endepunkter;
* Forbedret: Vi tvinger nå statusen "fullført" for våre ordrer når payment_completed kalles, for å sikre at våre fornyelseshooks kjører når de skal;

Version 1.1.1 - 24/01/2018

* Rettet: Sjekker nå også om WooCommerce bare er aktivert på hovednettstedet;
* Rettet: Inkluderte overbelastninger for å tillate at ordreopprettelse kan inkludere skatter;

Version 1.1.0 - 04/11/2017

* Rettet: Merkelappen på integrasjonsknappen endres faktisk for å gjenspeile innstillingene. Krever Ultimate Multisite 1.5.0;
* Rettet: WooCommerce Integration fungerer nå selv om WooCommerce ikke er nettverksaktiv og kun er aktivert på hovednettstedet;

1.0.0 - Opprinnelig utgivelse
