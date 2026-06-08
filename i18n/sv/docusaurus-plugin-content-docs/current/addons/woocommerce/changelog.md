---
title: WooCommerce Integrationsändringslogg
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integration Versionshistorik

Version 2.0.6 - Släppt den 2026-01-16
* Förbättring: Inkluderar kärnprenumerationer i add-onet. Kräver inte längre Woocommerce Subscriptions-tillägget.

Version 2.0.5 - Släppt den 2026-01-09
* Förbättring: Laddar översättningar från glotpress API.
* Åtgärd: Fatalfel i vissa page builders.
* Åtgärd: Oändlig omdirigering när kunden är medlem i huvudwebbplatsen.

Version 2.0.4 - Släppt den 2025-11-14
* Tillagd: Översättningar för många fler språk.
* Ändrat: Bytt namn till Ultimate Multisite: Woocommerce Integration.
* Tillagd: Kompatibilitet med Woocommerce 10.2.1.
* Tillagd: Kompatibilitet med Woocommerce Subscriptions 7.7.0.
* Åtgärd: Kompatibilitet med PHP 8.4
* Åtgärd: Omdirigerar, men när ingen WC-kontosida existerar.

Version 2.0.3 - Släppt den 2025-08-13
* Ändrat: Aktiverade automatiska uppdateringar med nytt marknadsplats.

Version 2.0.2 - Släppt den 2025-07-05
* Ändrat: Bytt namn till Multisite Ultimate: Woocommerce Integration.
* Tillagd: Kompatibilitet med Woocommerce 9.8.1.
* Tillagd: Kompatibilitet med Woocommerce Subscriptions 7.3.0.
* Åtgärd: Avbokning av en prenumeration av kunden.
* Åtgärd: Fatalfel vid användning av checkout-blocket.
* Förbättring: Kompatibel med Woocommerce high performance custom order tables.
* Åtgärd: Avbokning vid WooCommerce checkout kan fortfarande uppgradera ett medlemskap.

Version 2.0.1 - Släppt den 2023-08-09

* Tillagd: Kompatibilitet med Woocommerce 7.9.0.
* Tillagd: Kompatibilitet med Woocommerce Subscriptions 5.3.0.
* Tillagd: Stöd för medlemskapsuppdateringar.
* Tillagd: Meddelanden om provperioder och uppsättningsavgifter i Woocommerce.
* Tillagd: Identifiering av Ultimate Multisite WooCommerce-produkter med ett meta-värde.
* Tillagd: Införde en engångsfix för att markera alla Ultimate Multisite-relaterade WooCommerce-produkter.
* Tillagd: Tog bort Ultimate Multisite-skapade produkter från WooCommerce-listan.
* Förbättring: Skapade en engångs WooCommerce-rabatt som tillämpas på varukorgen.
* Förbättring: Återställde den återkommande rabatten till WooCommerce-produkten.
* Förbättring: Lägger till en etikett för återkommande rabatt på WooCommerce-produkten.
* Förbättring: Säkerställer produkttyp vid checkout.
* Åtgärd: Bibehåller medlemskapsstatus under nedgraderingsprocessen.
* Åtgärd: Kontrollerar om en prenumeration existerar för att undvika fel under avbokningsprocessen.
* Åtgärd: Lägger till startdatum för prenumerationen att använda i WooCommerce Subscriptions.
* Internt: Implementerade en ny PHP 8.1 build process.

Version 2.0.0 - Komplett omskrivning.

* Tillagd: Processeringsmetod för avbokning för att ta bort woo-prenumeration vid byte av gateway eller avbokning av medlemskapet;
* Tillagd: Hanterare för nedgradering och uppgradering av medlemskap;
* Förbättring: Laddar woocommerce-beroenden på kunduppdateringsformuläret i subsites för att tillåta kontouppdatering;
* Förbättring: Korrekt laddning av WooCommerce-varukorgen om den inte existerar;
* Förbättring: Säkerställer att vi är på huvudwebbplatsens tabeller när vi bearbetar en checkout;
* Förbättring: Gör Ultimo-förnyelseordern baserad på WooCommerce-prenumerationsorderns värde och inte från senaste betalningen;
* Åtgärd: Går till WU Membership-knapplänk;
* Åtgärd: Ställer in Ultimo-ordern som betald när WooCommerce Subscriptions-förnyelsen har betalats;
* Bygg: Lägger till MPB som builder;

Version 2.0.0-beta-5 - Släppt den 2022-01-21

* Internt: Lägger till hooks och filtergenerator;
* Internt: Lägger till Ultimate Multisite stubs för utvecklar livskvalitet;
* Fixat: Förhindrar skapandet av flera produkter när det inte behövs;

Version 2.0.0-beta.4 - 2021-09-23

* Åtgärd: Kräver att WooCommerce är nätverksaktivt istället för bara på huvudwebbplatsen;
* Förbättring: Lägger till filter för att tillåta add-onet att användas som ett mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Åtgärd: Dashboard-åtkomstkontrollen var för aggressiv;
* Förbättring: Lägger till WooCommerce-hjänlänkar i Ultimate Multisite toppmeny;

Version 2.0.0-beta.2 - 2021-05-04

* Förbättring: Skapar utestående betalningar i Ultimo vid skapandet av WCS-förnyelseorder;
* Förbättring: Fyller i faktureringsfält med Ultimate Multisite kunddata;
* Förbättring: Lägger till faktureringsfält för gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Initial beta-utgivning

-- Äldre versioner --

Version 1.2.6 - 26/03/2020

* Åtgärd: Mindre inkompatibilitet med nyare versioner av WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Åtgärd: Fel i föregående utgivning;

Version 1.2.4 - 22/08/2019

* Förbättrad: Läggde till alternativ att omdirigera till WooCommerce checkout-skärmen efter integrationen omedelbart;

Version 1.2.3 - 26/05/2019

* Åtgärd: Betalningsmejlet för WooCommerce försvann i vissa undantagssituationer;

Version 1.2.2 - 27/02/2019

* Tillagd: Stöd för uppsättningsavgifter i WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Åtgärd: Kompatibilitetsproblem med Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Förbättrad: Ny URL för add-ons;
* Tillagd: Beta-stöd för WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Åtgärd: Länken till Betala genereras dynamiskt för att svara på ändringar i WooCommerce endpoints;
* Förbättrad: Vi tvingar nu statusen "completed" för våra order när payment_completed anropas för att säkerställa att våra förnyelsehooks körs när de ska;

Version 1.1.1 - 24/01/2018

* Åtgärd: Kontrollerar nu också om WooCommerce bara aktiverats på huvudwebbplatsen;
* Åtgärd: Inkluderade överbelastningar för att tillåta order skapande som inkluderar skatter;

Version 1.1.0 - 04/11/2017

* Åtgärd: Etiketten på integrationsknappen ändras nu faktiskt för att återspegla inställningarna. Kräver Ultimate Multisite 1.5.0;
* Åtgärd: WooCommerce Integration fungerar nu även om WooCommerce inte är nätverksaktivt och endast aktiverat på huvudwebbplatsen;

1.0.0 - Initial utgivning
