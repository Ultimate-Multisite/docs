---
title: Wijzigingslog voor WooCommerce-integratie
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integratiechangelog {#woocommerce-integration-changelog}

Versie 2.2.0 - Uitgebracht op 2026-07-01
* Nieuw: Ultimate Multisite belastingbedragen verschijnen nu als afzonderlijke WooCommerce kostenregels bij checkout, waardoor belastingtotalen vóór betaling duidelijker zijn.
* Nieuw: Een opt-in instelling "Lidmaatschappen onmiddellijk opschorten bij mislukte verlengingen" en de `wu_woo_suspend_on_payment_failure` filter toegevoegd voor sites die opschorting bij mislukte verlenging willen tijdens het retry-venster van WooCommerce Subscriptions.
* Oplossing: WooCommerce Subscription-statussen gesynchroniseerd die niet synchroon konden blijven met Ultimate Multisite lidmaatschappen na mislukte of herstelde verlengingen.
* Oplossing: De WooCommerce winkelvaluta toegevoegd aan de Ultimate Multisite valutalijst wanneer deze ontbrak.
* Oplossing: Factuurgegevens van klanten behouden bij het doorsturen van abonnees naar WooCommerce checkout.
* Verbeterd: Compatibiliteit met Jetpack Autoloader 5 toegevoegd.
* Verbeterd: Generatie van releasepakketten opgeschoond zodat GitHub- en marketplace-zips geen geneste stagingmappen en ontwikkelbestanden bevatten.

Versie 2.0.6 - Uitgebracht op 2026-01-16
* Verbetering: Core-abonnementen opgenomen in de addon. Vereist niet langer de Woocommerce Subscriptinos extensie.

Versie 2.0.5 - Uitgebracht op 2026-01-09
* Verbetering: Vertalingen laden vanuit de glotpress API.
* Oplossing: Fatale fout in sommige page builders.
* oplossing: Oneindige omleiding wanneer de klant lid is van de hoofdsite.

Versie 2.0.4 - Uitgebracht op 2025-11-14
* Toegevoegd: Vertalingen voor veel meer talen.
* Gewijzigd: Hernoemd naar Ultimate Multisite: Woocommerce Integration.
* Toegevoegd: Compatibiliteit met Woocommerce 10.2.1.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 7.7.0.
* Oplossing: Compatibiliteit met PHP 8.4
* Oplossing: Omleiding, maar wanneer er geen WC Account-pagina bestaat.

Versie 2.0.3 - Uitgebracht op 2025-08-13
* Gewijzigd: Automatische updates ingeschakeld met nieuwe marketplace.

Versie 2.0.2 - Uitgebracht op 2025-07-05
* Gewijzigd: Hernoemd naar Multisite Ultimate: Woocommerce Integration.
* Toegevoegd: Compatibiliteit met Woocommerce 9.8.1.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 7.3.0.
* Oplossing: Annuleren van een abonnement door de klant.
* Oplossing: Fatale fout bij gebruik van checkout block.
* Verbetering: Nu compatibel met Woocommerce high performance custom order tables.
* Oplossing: Annuleren bij WooCommerce checkout kan nog steeds een lidmaatschap upgraden.

Versie 2.0.1 - Uitgebracht op 2023-08-09

* Toegevoegd: Compatibiliteit met Woocommerce 7.9.0.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 5.3.0.
* Toegevoegd: Ondersteuning voor lidmaatschapsupdates.
* Toegevoegd: Meldingen over proefperiodes en setup fees in Woocommerce.
* Toegevoegd: Identificatie van Ultimate Multisite Woocommerce producten met een metawaarde.
* Toegevoegd: Een eenmalige oplossing ingevoegd om alle aan Ultimate Multisite gerelateerde Woocommerce producten te markeren.
* Toegevoegd: Door Ultimate Multisite aangemaakte producten verwijderd uit de Woocommerce lijst.
* Verbetering: Een niet-terugkerende Woocommerce korting aangemaakt om toe te passen op de winkelwagen.
* Verbetering: De terugkerende korting hersteld op het Woocommerce product.
* Verbetering: Een label voor terugkerende korting toegevoegd aan het Woocommerce product.
* Verbetering: Producttype bij checkout gewaarborgd.
* Oplossing: Lidmaatschapsstatus behouden tijdens het downgradeproces.
* Oplossing: Gecontroleerd of er een abonnement bestaat om fouten tijdens het annuleringsproces te voorkomen.
* Oplossing: De startdatum van het abonnement toegevoegd voor gebruik in Woocommerce subscriptions.
* Intern: Een nieuw PHP 8.1-buildproces geïmplementeerd.

Versie 2.0.0 - Volledig herschreven.

* Toegevoegd: Verwerkingsmethode voor annulering om woo-abonnement te verwijderen bij het wijzigen van de gateway of het annuleren van het lidmaatschap;
* Toegevoegd: Handler om lidmaatschappen te downgraden en te upgraden;
* Verbetering: Woocommerce-afhankelijkheden laden op klantupdateformulier in subsites om Account-update mogelijk te maken;
* Verbetering: Woocommerce winkelwagen correct laden als deze niet bestaat;
* Verbetering: Waarborgen dat we op hoofdsite-tabellen zitten bij het verwerken van een checkout;
* Verbetering: Ultimo-verlengingsbestelling baseren op de bestelwaarde van het Woocommerce-abonnement en niet op de laatste betaling;
* Oplossing: Link van WU Membership-knop;
* Oplossing: Ultimo-bestelling als betaald instellen wanneer de verlenging van Woocommerce subscriptions is betaald;
* Build: MPB toevoegen als builder;

Versie 2.0.0-beta-5 - Uitgebracht op 2022-01-21

* Intern: Generator voor hooks en filters toegevoegd;
* Intern: Ultimate Multisite stubs toegevoegd voor betere developer quality of life;
* Opgelost: Het aanmaken van meerdere producten voorkomen wanneer dit niet nodig is;

Versie 2.0.0-beta.4 - 2021-09-23

* Oplossing: vereisen dat WooCommerce netwerkactief is in plaats van alleen op de hoofdsite;
* Verbetering: filter toegevoegd om toe te staan dat de add-on als mu-plugin wordt gebruikt;

Versie 2.0.0-beta.3 - 2021-05-28

* Oplossing: toegangscontrole voor dashboard was te agressief;
* Verbetering: WooCommerce helplinks toegevoegd aan het topmenu van Ultimate Multisite;

Versie 2.0.0-beta.2 - 2021-05-04

* Verbetering: maakt openstaande betalingen aan in Ultimo bij het aanmaken van WCS-verlengingsbestellingen;
* Verbetering: vult factuurvelden vooraf in met Ultimate Multisite klantgegevens;
* Verbetering: voegt factuurvelden weer toe voor gateways;

Versie 2.0.0-beta.1 - 2021-05-04

* Eerste bèta-release

-- Oude versies --

Versie 1.2.6 - 26/03/2020

* Opgelost: Kleine incompatibiliteit met nieuwere versies van WooCommerce Subscriptions;

Versie 1.2.5 - 26/08/2019

* Opgelost: Fout in vorige release;

Versie 1.2.4 - 22/08/2019

* Verbeterd: Optie toegevoegd om na integratie onmiddellijk om te leiden naar het WooCommerce checkout-scherm;

Versie 1.2.3 - 26/05/2019

* Opgelost: Betalingsmail voor WooCommerce verdween in sommige randgevallen;

Versie 1.2.2 - 27/02/2019

* Toegevoegd: Ondersteuning voor setup fees in de WooCommerce Subscription-integratie;

Versie 1.2.1 - 17/11/2018

* Opgelost: Compatibiliteitsproblemen met Ultimate Multisite versie 1.9.0;

Versie 1.2.0 - 10/09/2018

* Verbeterd: Nieuwe updates-URL voor add-ons;
* Toegevoegd: Bèta-ondersteuning voor WooCommerce Subscription;

Versie 1.1.2 - 11/02/2018

* Opgelost: Link om te betalen die dynamisch wordt gegenereerd om te reageren op wijzigingen in WooCommerce endpoints;
* Verbeterd: We forceren nu de voltooide status voor onze bestellingen wanneer payment_completed wordt aangeroepen om ervoor te zorgen dat onze verlengingshooks worden uitgevoerd wanneer dat moet;

Versie 1.1.1 - 24/01/2018

* Opgelost: Nu wordt ook gecontroleerd of WooCommerce net is geactiveerd op de hoofdsite;
* Opgelost: Over-loadings opgenomen om het aanmaken van bestellingen inclusief belastingen mogelijk te maken;

Versie 1.1.0 - 04/11/2017

* Opgelost: Nu verandert het label van de integratieknop daadwerkelijk om de instellingen weer te geven. Vereist Ultimate Multisite 1.5.0;
* Opgelost: WooCommerce Integration werkt nu zelfs als WooCommerce niet netwerkactief is en alleen op de hoofdsite is geactiveerd;

1.0.0 - Eerste release
