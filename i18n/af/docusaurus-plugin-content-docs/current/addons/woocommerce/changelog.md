---
title: WooCommerce-integrasie Veranderingslogboek
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce-integrasie-veranderingslog {#woocommerce-integration-changelog}

Weergawe 2.2.0 - Vrygestel op 2026-07-01
* Nuut: Ultimate Multisite-belastingbedrae verskyn nou as aparte WooCommerce-fooireëls by betaalpunt, wat belastingtotale duideliker maak voor betaling.
* Nuut: Het ’n intekenbare "Suspend Memberships Immediately on Failed Renewals"-instelling en `wu_woo_suspend_on_payment_failure`-filter bygevoeg vir werwe wat opskorting by mislukte hernuwing tydens die WooCommerce Subscriptions-herprobeervenster wil hê.
* Regstelling: WooCommerce Subscription-statusse versoen wat ná mislukte of herstelde hernuwings uit pas met Ultimate Multisite-lidmaatskappe kon bly.
* Regstelling: Die WooCommerce-winkelgeldeenheid by die Ultimate Multisite-geldeenheidslys gevoeg toe dit ontbreek het.
* Regstelling: Kliëntfaktureringsbesonderhede behou wanneer intekenare na WooCommerce-betaalpunt herlei word.
* Verbeter: Verenigbaarheid met Jetpack Autoloader 5 bygevoeg.
* Verbeter: Vrystellingspakketgenerering opgeskoon sodat GitHub- en markplek-zip-lêers geneste voorbereidingsgidse en ontwikkelingslêers vermy.

Weergawe 2.0.6 - Vrygestel op 2026-01-16
* Verbetering: Sluit kernintekeninge in die byvoeging in. Vereis nie meer die Woocommerce Subscriptinos-uitbreiding nie.

Weergawe 2.0.5 - Vrygestel op 2026-01-09
* Verbetering: Laai vertalings vanaf glotpress API.
* Regstelling: Fatale fout in sommige bladsybouers.
* regstelling: Oneindige herleiding wanneer die kliënt ’n lid van die hoofwerf is.

Weergawe 2.0.4 - Vrygestel op 2025-11-14
* Bygevoeg: Vertalings vir baie meer tale.
* Verander: Hernoem na Ultimate Multisite: Woocommerce Integration.
* Bygevoeg: Verenigbaarheid met Woocommerce 10.2.1.
* Bygevoeg: Verenigbaarheid met Woocommerce Subscriptions 7.7.0.
* Regstelling: Verenigbaarheid met PHP 8.4
* Regstelling: Herlei, maar wanneer geen WC-rekeningbladsy bestaan nie.

Weergawe 2.0.3 - Vrygestel op 2025-08-13
* Verander: Outomatiese opdaterings met nuwe markplek geaktiveer.

Weergawe 2.0.2 - Vrygestel op 2025-07-05
* Verander: Hernoem na Multisite Ultimate: Woocommerce Integration.
* Bygevoeg: Verenigbaarheid met Woocommerce 9.8.1.
* Bygevoeg: Verenigbaarheid met Woocommerce Subscriptions 7.3.0.
* Regstelling: Kansellering van ’n intekening deur die kliënt.
* Regstelling: Fatale fout wanneer die betaalpuntblok gebruik word.
* Verbetering: Nou versoenbaar met Woocommerce-hoëprestasie-pasmaakbestellingstabelle.
* Regstelling: Kansellering by WooCommerce-betaalpunt kan steeds ’n lidmaatskap opgradeer.

Weergawe 2.0.1 - Vrygestel op 2023-08-09

* Bygevoeg: Verenigbaarheid met Woocommerce 7.9.0.
* Bygevoeg: Verenigbaarheid met Woocommerce Subscriptions 5.3.0.
* Bygevoeg: Ondersteuning vir lidmaatskapopdaterings.
* Bygevoeg: Kennisgewings oor proeftydperke en opstelfooie in Woocommerce.
* Bygevoeg: Identifikasie van Ultimate Multisite Woocommerce-produkte met ’n meta-waarde.
* Bygevoeg: ’n Eenmalige regstelling ingevoeg om alle Ultimate Multisite-verwante Woocommerce-produkte te merk.
* Bygevoeg: Produkte wat deur Ultimate Multisite geskep is, uit die Woocommerce-lys verwyder.
* Verbetering: ’n Nie-herhalende Woocommerce-afslag geskep om op die mandjie toe te pas.
* Verbetering: Die herhalende afslag na die Woocommerce-produk herstel.
* Verbetering: ’n Herhalende afslagetiket by die Woocommerce-produk gevoeg.
* Verbetering: Produksoort by betaalpunt verseker.
* Regstelling: Lidmaatskapstatus tydens die afgraderingsproses behou.
* Regstelling: Gekontroleer of ’n intekening bestaan om foute tydens die kansellasieproses te vermy.
* Regstelling: Die beginintekeningdatum bygevoeg vir gebruik in Woocommerce-intekeninge.
* Intern: ’n Nuwe PHP 8.1-bouproses geïmplementeer.

Weergawe 2.0.0 - Volledige herskryf.

* Bygevoeg: Kansellasiemetode verwerk om woo-intekening te verwyder wanneer die poort verander of die lidmaatskap gekanselleer word;
* Bygevoeg: Hanteerder om lidmaatskappe af te gradeer en op te gradeer;
* Verbetering: Laai woocommerce-afhanklikhede op kliëntopdateringsvorm in subwerwe om rekeningopdatering toe te laat;
* Verbetering: Korrigeer die laai van Woocommerce-mandjie indien dit nie bestaan nie;
* Verbetering: Verseker dat ons op hoofwerftabelle is wanneer ’n betaalpunt verwerk word;
* Verbetering: Maak Ultimo-hernuwingsbestelling gebaseer op Woocommerce-intekeningbestellingswaarde en nie vanaf laaste betaling nie;
* Regstelling: Gaan na WU Membership-knoppieskakel;
* Regstelling: Stel Ultimo-bestelling as betaal wanneer Woocommerce Subscriptions-hernuwing betaal is;
* Bou: Voeg MPB as bouer by;

Weergawe 2.0.0-beta-5 - Vrygestel op 2022-01-21

* Intern: Hooks- en filtersgenerator bygevoeg;
* Intern: Ultimate Multisite-stubs vir ontwikkelaarslewensgehalte bygevoeg;
* Reggestel: Voorkom die skepping van veelvuldige produkte wanneer dit nie nodig is nie;

Weergawe 2.0.0-beta.4 - 2021-09-23

* Regstelling: vereis dat WooCommerce netwerkaktief is in plaas van slegs op die hoofwerf;
* Verbetering: filter bygevoeg om toe te laat dat die byvoeging as ’n mu-plugin gebruik word;

Weergawe 2.0.0-beta.3 - 2021-05-28

* Regstelling: Dashboard-toegangsbeheer was te aggressief;
* Verbetering: WooCommerce-hulpskakels by Ultimate Multisite-boonste-kieslys gevoeg;

Weergawe 2.0.0-beta.2 - 2021-05-04

* Verbetering: skep hangende betalings op Ultimo by skepping van WCS-hernuwingbestelling;
* Verbetering: vul faktureringsvelde vooraf met Ultimate Multisite-kliëntdata;
* Verbetering: voeg faktureringsvelde vir poorte terug;

Weergawe 2.0.0-beta.1 - 2021-05-04

* Aanvanklike beta-vrystelling

-- Nalatenskapweergawes --

Weergawe 1.2.6 - 26/03/2020

* Reggestel: Klein onverenigbaarheid met nuwer weergawes van WooCommerce Subscriptions;

Weergawe 1.2.5 - 26/08/2019

* Reggestel: Fout in vorige vrystelling;

Weergawe 1.2.4 - 22/08/2019

* Verbeter: Opsie bygevoeg om onmiddellik ná integrasie na WooCommerce-betaalpuntskerm te herlei;

Weergawe 1.2.3 - 26/05/2019

* Reggestel: Betaling-e-pos vir WooCommerce het in sommige randgevalle verdwyn;

Weergawe 1.2.2 - 27/02/2019

* Bygevoeg: Ondersteuning vir opstelfooie op die WooCommerce Subscription-integrasie;

Weergawe 1.2.1 - 17/11/2018

* Reggestel: Verenigbaarheidskwessies met Ultimate Multisite weergawe 1.9.0;

Weergawe 1.2.0 - 10/09/2018

* Verbeter: Nuwe opdaterings-URL vir byvoegings;
* Bygevoeg: Beta-ondersteuning vir WooCommerce Subscription;

Weergawe 1.1.2 - 11/02/2018

* Reggestel: Skakel om te betaal word dinamies gegenereer om op veranderinge aan WooCommerce-eindpunte te reageer;
* Verbeter: Ons dwing nou voltooide status vir ons bestellings af wanneer payment_completed geroep word om seker te maak ons hernuwing-hooks loop wanneer hulle moet;

Weergawe 1.1.1 - 24/01/2018

* Reggestel: Nou kontroleer dit ook om te sien of die WooCommerce net op die hoofwerf geaktiveer is;
* Reggestel: Oorladings ingesluit om bestellingskepping toe te laat om belastings in te sluit;

Weergawe 1.1.0 - 04/11/2017

* Reggestel: Nou verander die etiket van die integrasieknoppie werklik om die instellings te weerspieël. Vereis Ultimate Multisite 1.5.0;
* Reggestel: WooCommerce Integration werk nou selfs as WooCommerce nie netwerkaktief is nie en slegs op t^he hoofwerf geaktiveer is;

1.0.0 - Aanvanklike vrystelling
