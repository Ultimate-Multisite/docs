---
title: WooCommerce-integrationsändringslogg
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration ändringslogg

Version 2.2.0 - Släppt 2026-07-01
* Nytt: Ultimate Multisite skattebelopp visas nu som separata WooCommerce avgiftsrader i checkout, vilket gör skattesummor tydligare före betalning.
* Nytt: Lade till en valfri inställning "Stäng av medlemskap omedelbart vid misslyckade förnyelser" och filtret `wu_woo_suspend_on_payment_failure` för webbplatser som vill ha avstängning vid misslyckad förnyelse under WooCommerce Subscriptions återförsöksfönster.
* Fix: Stämde av WooCommerce Subscription-statusar som kunde förbli osynkroniserade med Ultimate Multisite medlemskap efter misslyckade eller återställda förnyelser.
* Fix: Lade till WooCommerce-butikens valuta i Ultimate Multisite valutalista när den saknades.
* Fix: Bevarade kundens faktureringsuppgifter vid omdirigering av prenumeranter till WooCommerce checkout.
* Förbättrat: Lade till kompatibilitet med Jetpack Autoloader 5.
* Förbättrat: Rensade genereringen av releasepaket så att GitHub- och marketplace-zippar undviker nästlade staging-kataloger och utvecklingsfiler.

Version 2.0.6 - Släppt 2026-01-16
* Förbättring: Inkludera core-prenumerationer i tillägget. Kräver inte längre Woocommerce Subscriptinos-tillägget.

Version 2.0.5 - Släppt 2026-01-09
* Förbättring: Ladda översättningar från glotpress API.
* Fix: Fatal error i vissa page builders.
* fix: Oändlig omdirigering när kunden är medlem på huvudwebbplatsen.

Version 2.0.4 - Släppt 2025-11-14
* Tillagt: Översättningar för många fler språk.
* Ändrat: Omdöpt till Ultimate Multisite: Woocommerce Integration.
* Tillagt: Kompatibilitet med Woocommerce 10.2.1.
* Tillagt: Kompatibilitet med Woocommerce Subscriptions 7.7.0.
* Fix: Kompatibilitet med PHP 8.4
* Fix: Omdirigering men när ingen WC-kontosida finns.

Version 2.0.3 - Släppt 2025-08-13
* Ändrat: Aktiverade automatiska uppdateringar med ny marketplace.

Version 2.0.2 - Släppt 2025-07-05
* Ändrat: Omdöpt till Multisite Ultimate: Woocommerce Integration.
* Tillagt: Kompatibilitet med Woocommerce 9.8.1.
* Tillagt: Kompatibilitet med Woocommerce Subscriptions 7.3.0.
* Fix: Avbrytande av en prenumeration av kunden.
* Fix: Fatal error vid användning av checkout-block.
* Förbättring: Nu kompatibel med Woocommerce högpresterande anpassade ordertabeller.
* Fix: Avbrytande i WooCommerce checkout kan fortfarande uppgradera ett medlemskap.

Version 2.0.1 - Släppt 2023-08-09

* Tillagt: Kompatibilitet med Woocommerce 7.9.0.
* Tillagt: Kompatibilitet med Woocommerce Subscriptions 5.3.0.
* Tillagt: Stöd för medlemskapsuppdateringar.
* Tillagt: Meddelanden om provperioder och startavgifter i Woocommerce.
* Tillagt: Identifiering av Ultimate Multisite Woocommerce-produkter med ett metavärde.
* Tillagt: Införde en engångsfix för att markera alla Ultimate Multisite-relaterade Woocommerce-produkter.
* Tillagt: Tog bort produkter skapade av Ultimate Multisite från Woocommerce-listan.
* Förbättring: Skapade en icke-återkommande Woocommerce-rabatt att tillämpa på varukorgen.
* Förbättring: Återställde den återkommande rabatten till Woocommerce-produkten.
* Förbättring: Lade till en återkommande rabattetikett till Woocommerce-produkten.
* Förbättring: Säkerställde produkttyp vid checkout.
* Fix: Bibehöll medlemskapsstatus under nedgraderingsprocessen.
* Fix: Kontrollerade om en prenumeration finns för att undvika fel under uppsägningsprocessen.
* Fix: Lade till startdatum för prenumeration att använda i Woocommerce-prenumerationer.
* Internt: Implementerade en ny PHP 8.1-byggprocess.

Version 2.0.0 - Fullständig omskrivning.

* Tillagt: Processmetod för uppsägning för att ta bort woo-prenumeration vid byte av gateway eller uppsägning av medlemskapet;
* Tillagt: Handler för att nedgradera och uppgradera medlemskap;
* Förbättring: Ladda woocommerce-beroenden på kunduppdateringsformulär i underwebbplatser för att tillåta kontouppdatering;
* Förbättring: Korrekt laddning av Woocommerce-varukorg om den inte finns;
* Förbättring: Säkerställ att vi är på huvudwebbplatsens tabeller när en checkout behandlas;
* Förbättring: Gör Ultimo-förnyelseorder baserad på Woocommerce-prenumerationsorderns värde och inte på senaste betalningen;
* Fix: Länk för knappen Gå till WU Membership;
* Fix: Sätt Ultimo-order som betald när Woocommerce-prenumerationsförnyelsen har betalats;
* Bygge: Lägg till MPB som byggare;

Version 2.0.0-beta-5 - Släppt 2022-01-21

* Internt: Lade till generator för hooks och filter;
* Internt: Lade till Ultimate Multisite stubs för bättre utvecklarupplevelse;
* Fixat: Förhindra skapandet av flera produkter när det inte är nödvändigt;

Version 2.0.0-beta.4 - 2021-09-23

* Fix: kräver att WooCommerce är nätverksaktiverat i stället för endast på huvudwebbplatsen;
* Förbättring: lade till filter för att tillåta att tillägget används som en mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Fix: åtkomstkontroll för dashboard var för aggressiv;
* Förbättring: Lade till WooCommerce hjälplänkar i Ultimate Multisite toppmeny;

Version 2.0.0-beta.2 - 2021-05-04

* Förbättring: skapar väntande betalningar i Ultimo vid skapande av WCS-förnyelseorder;
* Förbättring: förifyller faktureringsfält med Ultimate Multisite kunddata;
* Förbättring: lägger tillbaka faktureringsfält för gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Första betaversionen

-- Äldre versioner --

Version 1.2.6 - 26/03/2020

* Fixat: Liten inkompatibilitet med nyare versioner av WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Fixat: Fel i föregående release;

Version 1.2.4 - 22/08/2019

* Förbättrat: Lade till alternativ för att omdirigera till WooCommerce checkout-skärmen omedelbart efter integration;

Version 1.2.3 - 26/05/2019

* Fixat: Betalnings-e-post för WooCommerce försvann i vissa edge cases;

Version 1.2.2 - 27/02/2019

* Tillagt: Stöd för startavgifter i WooCommerce Subscription-integrationen;

Version 1.2.1 - 17/11/2018

* Fixat: Kompatibilitetsproblem med Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Förbättrat: Ny uppdaterings-URL för tillägg;
* Tillagt: Betastöd för WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Fixat: Länk till betalning genereras dynamiskt för att svara på ändringar i WooCommerce endpoints;
* Förbättrat: Vi tvingar nu statusen slutförd för våra ordrar när payment_completed anropas för att säkerställa att våra förnyelse-hooks körs när de ska;

Version 1.1.1 - 24/01/2018

* Åtgärdat: Nu kontrollerar den också om WooCommerce precis har aktiverats på den huvudsakliga webbplatsen;
* Åtgärdat: Inkluderade överlagringar för att tillåta att orderskapande inkluderar skatter;

Version 1.1.0 - 04/11/2017

* Åtgärdat: Nu ändras etiketten på integrationsknappen faktiskt för att återspegla inställningarna. Kräver Ultimate Multisite 1.5.0;
* Åtgärdat: WooCommerce Integration fungerar nu även om WooCommerce inte är nätverksaktivt och endast aktiverat på den huvudsakliga webbplatsen;

1.0.0 - Första utgåvan
