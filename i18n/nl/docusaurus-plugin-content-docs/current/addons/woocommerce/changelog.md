---
title: WooCommerce Integratie Changelog
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integratie Wijzigingslog

Versie 2.0.6 - Uitgebracht op 2026-01-16
* Verbetering: Core-abonnementen opnemen in de addon. Vereist niet langer de Woocommerce Subscriptinos-extensie.

Versie 2.0.5 - Uitgebracht op 2026-01-09
* Verbetering: Vertalingen laden vanaf glotpress API.
* Oplossing: Fatale fout in sommige page builders.
* Oplossing: Oneindige redirect wanneer de klant lid is van de hoofdsite.

Versie 2.0.4 - Uitgebracht op 2025-11-14
* Toegevoegd: Vertalingen voor veel meer talen.
* Veranderd: Naam gewijzigd naar Ultimate Multisite: Woocommerce Integration.
* Toegevoegd: Compatibiliteit met Woocommerce 10.2.1.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 7.7.0.
* Oplossing: Compatibiliteit met PHP 8.4
* Oplossing: Redirect wanneer er geen WC accountpagina bestaat.

Versie 2.0.3 - Uitgebracht op 2025-08-13
* Veranderd: Automatische updates ingeschakeld met nieuwe marketplace.

Versie 2.0.2 - Uitgebracht op 2025-07-05
* Veranderd: Naam gewijzigd naar Multisite Ultimate: Woocommerce Integration.
* Toegevoegd: Compatibiliteit met Woocommerce 9.8.1.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 7.3.0.
* Oplossing: Annuleren van een abonnement door de klant.
* Oplossing: Fatale fout bij gebruik van checkout block.
* Verbetering: Nu compatibel met Woocommerce high performance custom order tables.
* Oplossing: Annuleren bij WooCommerce checkout kan nog steeds een lidmaatschap upgraden.

Versie 2.0.1 - Uitgebracht op 2023-08-09
* Toegevoegd: Compatibiliteit met Woocommerce 7.9.0.
* Toegevoegd: Compatibiliteit met Woocommerce Subscriptions 5.3.0.
* Toegevoegd: Ondersteuning voor lidmaatschap updates.
* Toegevoegd: Meldingen over proefperiodes en setup fees in Woocommerce.
* Toegevoegd: Identificatie van Ultimate Multisite Woocommerce producten met een meta waarde.
* Toegevoegd: Een eenmalige fix ingevoegd om alle Ultimate Multisite gerelateerde Woocommerce producten te markeren.
* Toegevoegd: Verwijderd Ultimate Multisite aangemaakte producten uit de Woocommerce lijst.
* Verbetering: Een niet-herhalende Woocommerce korting gemaakt om toe te passen op het winkelwagentje.
* Verbetering: De herhalende korting hersteld voor het Woocommerce product.
* Verbetering: Een herhalende korting label toegevoegd aan het Woocommerce product.
* Verbetering: Producttype op checkout gegarandeerd.
* Oplossing: Lidmaatschap status behouden tijdens het downgrade proces.
* Oplossing: Controle of een abonnement bestaat om fouten tijdens het annuleringsproces te voorkomen.
* Oplossing: De startdatum van het abonnement toegevoegd voor gebruik in Woocommerce abonnementen.
* Intern: Nieuwe PHP 8.1 build proces geïmplementeerd.

Versie 2.0.0 - Volledige herschrijving
* Toegevoegd: Procesannulatie methode om woo abonnement te verwijderen bij het wijzigen van de gateway of het annuleren van het lidmaatschap;
* Toegevoegd: Handler om lidmaatschappen te downgraden en upgraden;
* Verbetering: Woocommerce afhankelijkheden laden op klantupdateformulier in subsites om accountupdate mogelijk te maken;
* Verbetering: Woocommerce winkelwagen correct laden als deze niet bestaat;
* Verbetering: Zekerstellen dat we op de hoofdsite tabellen zijn bij het verwerken van een checkout;
* Verbetering: Maak Ultimo verlengingsorder gebaseerd op Woocommerce abonnement order waarde en niet op laatste betaling;
* Oplossing: Ga naar WU Membership knop link;
* Oplossing: Zet Ultimo order als betaald wanneer Woocommerce abonnement verlenging betaald is;
* Build: Voeg MPB toe als builder;

Versie 2.0.0-beta-5 - Uitgebracht op 2022-01-21
* Intern: Hooks en filters generator toegevoegd;
* Intern: Ultimate Multisite stubs toegevoegd voor ontwikkelaar kwaliteit van leven;
* Opgelost: Voorkomen van het creëren van meerdere producten wanneer niet nodig;

Versie 2.0.0-beta.4 - 2021-09-23
* Oplossing: Vereist dat WooCommerce netwerkactief is in plaats van alleen op hoofdsite;
* Verbetering: filter toegevoegd om het add-on te gebruiken als mu-plugin;

Versie 2.0.0-beta.3 - 2021-05-28
* Oplossing: Dashboard toegangscontrole was te agressief;
* Verbetering: WooCommerce help links toegevoegd aan Ultimate Multisite top-menu;

Versie 2.0.0-beta.2 - 2021-05-04
* Verbetering: Maakt pending betalingen op Ultimo bij WCS verlengingsorder creatie;
* Verbetering: Voor vult factureringsvelden met Ultimate Multisite klantgegevens;
* Verbetering: Voegt terug factureringsvelden voor gateways;

Versie 2.0.0-beta.1 - 2021-05-04
* Initiële beta release

-- Legacy Versies --

Versie 1.2.6 - 26/03/2020
* Opgelost: Kleine incompatibiliteit met nieuwere versies van WooCommerce Subscriptions;

Versie 1.2.5 - 26/08/2019
* Opgelost: Fout in vorige release;

Versie 1.2.4 - 22/08/2019
* Verbeterd: Optie toegevoegd om direct te redirecten naar WooCommerce checkout scherm na integratie;

Versie 1.2.3 - 26/05/2019
* Opgelost: Betalings e-mail voor WooCommerce verdwenen in sommige edge cases;

Versie 1.2.2 - 27/02/2019
* Toegevoegd: Ondersteuning voor setup fees op de WooCommerce Subscription integratie;

Versie 1.2.1 - 17/11/2018
* Opgelost: Compatibiliteitsproblemen met Ultimate Multisite versie 1.9.0;

Versie 1.2.0 - 10/09/2018
* Verbeterd: Nieuwe updates URL voor add-ons;
* Toegevoegd: Beta ondersteuning voor WooCommerce Subscription;

Versie 1.1.2 - 11/02/2018
* Opgelost: Link naar Pay wordt dynamisch gegenereerd om te reageren op veranderingen aan WooCommerce endpoints;
* Verbeterd: We dwingen nu de voltooide status voor onze orders wanneer payment_completed wordt aangeroepen om te zorgen dat onze verlengingshooks draaien wanneer ze zouden moeten;

Versie 1.1.1 - 24/01/2018
* Opgelost: Controleert nu ook of WooCommerce alleen geactiveerd is op de hoofdsite;
* Opgelost: Overloadings toegevoegd om ordercreatie inclusief belastingen toe te staan;

Versie 1.1.0 - 04/11/2017
* Opgelost: De label van de integratieknop verandert nu daadwerkelijk om de instellingen weer te geven. Vereist Ultimate Multisite 1.5.0;
* Opgelost: WooCommerce Integratie werkt nu zelfs als WooCommerce niet netwerkactief is en alleen geactiveerd op de hoofdsite;

1.0.0 - Initiële Release
