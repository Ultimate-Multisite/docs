---
title: Migreer van V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migreer van V1 {#migrating-from-v1}

## Ultimate Multisite het geskakel van sy oorspronklike 1.x vrystellingslyn na die 2.x vrystellingslyn. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite weergawe 2.0 en hoër is 'n volledige herskrywing van die kodebasis, wat beteken dat daar baie min gedeel is tussen die ou weergawe en die nuwe. Om hierdie rede, wanneer jy van 1.x na 2.x opgradeer, sal jou data migreer word na 'n formaat wat die nuwe weergawe kan verstaan.

Gelukkig kom Ultimate Multisite 2.0+ **met 'n migrator** ingebou in die kern wat in staat is om data van die ou weergawe te opspoor en dit na die nuwe formaat te konverteer. Hierdie migrasie gebeur tydens die **Setup Wizard** van weergawe 2.0+.

Hierdie les dek hoe die migrator werk, wat om te doen is in geval van mislukkings, en hoe om probleme op te spoor wat tydens hierdie proses kan ontstaan.

_**BELANGRIK: Voordat jy begin om van weergawe 1.x na weergawe 2.0 op te gradeer, verseker asseblief dat jy 'n back-up van jou sywebwerkbasis skep**_

## Eerste stappe {#first-steps}

Die eerste stap is om die plugin .zip lêer te laai en weergawe 2.0 op jou network admin dashboard te installeer.

Nadat jy [weergawe 2.0 installeer en aktiveer](../getting-started/installing-ultimate-multisite.md), sal die stelsel outomaties opspoor dat jou Multisite op die ou weergawe loop en jy sal hierdie boodskap bo-op die plugin-bladsy sien.

_**NOTA:** As jy Ultimate Multisite 1.x op jou Multisite geïnstalleer het, sal jy die opsie hê om die plugin te vervang met die weergawe wat jy pas gedalan het. Klik asseblief op **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Die volgende bladsy sal jou laat weet watter ou add-ons jy saam met weergawe 1.x geïnstalleer het. Dit sal instruksies bevat oor of die weergawe wat jy gebruik, kompatibel is met weergawe 2.0, of of jy 'n opgedateerde weergawe van die add-on moet installeer na die migrasie.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Sodra jy gereed is om voort te gaan, kan jy op die knoppie klik wat sê **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Dit sal jou dan na die installasiewizard-bladsy neem met 'n paar welkomstboodskappe. Jy hoef net op **Get Started** te klik om na die volgende bladsy te beweeg.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Nadat jy op **Get Started** geklik het, sal dit jou herlei na die Pre-install Checks_._ Hierdie sal jou Sisteminligting en WordPress-installasie toon en jou vertel of dit aan **Ultimate Multisite se vereistes** voldoen.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Die volgende stap is om jou Ultimate Multisite lisensie sleutel in te voer en die plugin te aktiveer. Dit verseker dat alle kenmerke, insluitend add-ons, op jou webwerf beskikbaar sal wees.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Nadat jy jou sleutel ingevoer het, klik op **Agree & Activate**.

Nadat die lisensie geaktiveer is, kan jy die werklike installasie begin deur op **Install** op die volgende bladsy te klik. Dit sal outomaties die nodige lêers en die database skep wat nodig is vir weergawe 2.0 om te funksioneer.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Nou, die migrasie {#now-the-migration}

Die migrator het 'n ingeboude veiligheidsfunksie wat jou hele multisite sal nagaan om te verseker dat al jou Ultimate Multisite data gemigreer kan word sonder enige probleme. Klik op die **Run Check** knoppie om die proses te begin.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Nadat die ondersoek gerun is, het jy twee moontlikhede: die resultaat kan óf **met** 'n fout óf **sonder 'n fout** wees.

### Met Fout {#with-error}

Indien jy 'n foutboodskap ontvang, sal jy die ondersteuningsspan moet kontak sodat hulle jou kan help om die fout reg te stel. Maak seker dat jy die **foutlog** verskaf wanneer jy 'n tiket skep. Jy kan die log afskakel of jy kan op die skakel klik wat sê kontak ons ondersteuningsspan. Dit sal die hulpwidget aan die regterkant van jou bladsy oopmaak met die velde wat vir jou vooraf gevul is, insluitend die foutlogboeke onder die beskrywing.

_**Aangesien die stelsel 'n fout gevind het, sal jy nie kan voortgaan om na weergawe 2.0 te migreer nie. Jy kan dan terugrol na weergawe 1.x om jou netwerk te laat loop totdat die fout reggestel is.**_

### Sonder Fout {#without-error}

As die stelsel geen fout vind nie, sal jy 'n suksesboodskap en 'n **Migrate** knoppie onderaan sien wat jou sal laat voortgaan met die migrasie. Op hierdie bladsy sal jy herinner word om 'n back-up van jou database te skep voordat jy verder beweeg, wat ons sterk aanbeveel. Druk op **Migrate** as jy reeds 'n back-up het.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

En dit is alles wat nodig is!

Jy kan voortgaan met die Wizard-opstelling om jou logo en ander dinge op jou netwerk op te dateer, of jy kan begin om jou Ultimate Multisite weergawe 2.0-menu en sy nuwe koppelvlak te navigeer. Gaan en geniet dit.
