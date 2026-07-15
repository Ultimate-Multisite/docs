---
title: Eksport & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportér & Importer

Ultimate Multisite 2.9.0 tilføjer et enkelt single-site **Eksportér & Importer** værktøj under **Værktøjer > Eksportér & Importer**. Brug det, når du skal pakke én WordPress-side som en ZIP-fil, gendanne den ZIP, eller flytte en side mellem kompatible Ultimate Multisite og single-site WordPress-installationer.

## Nødvendige rettigheder {#required-permissions}

Du skal være logget ind som administrator med adgang til **Værktøjer** menuen i WordPress på den side, du eksporterer fra eller importerer til. På et multisite netværk skal du bruge en netværksadministrator-konto, når du eksporterer eller importerer subsider fra netværksniveau Ultimate Multisite værktøjer.

Eksportér ZIP-downloads serveres via et autentificeret download-endpoint, så hold admin-sessionen aktiv indtil downloaden er færdig, og del aldrig de genererede download-URL'er offentligt.

## Eksport af en side til en ZIP {#exporting-a-site-to-a-zip}

1. I WordPress-administratoren for den side, du vil kopiere, gå til **Værktøjer > Eksportér & Importer**.
2. Åbn eksportområdet og vælg siden, du vil pakke.
3. Vælg det valgfrie indhold, der skal inkluderes, såsom uploads, plugins og themes, når disse muligheder er tilgængelige.
4. Start eksporten og vent på, at processen er færdig. Store sider kan være nødt til at blive afsluttet i baggrunden, før ZIP-filen er klar.
5. Download den færdige ZIP fra eksporteringslisten.

Gem ZIP-filen på et sikkert sted. Den kan indeholde sidens indhold, indstillinger, mediefiler og valgte kodeaktiver.

## Hvad eksporten inkluderer {#what-the-export-includes}

En eksport ZIP kan indeholde:

- Databasens indhold og konfiguration for den valgte side.
- Uploadede mediefiler, hvis uploads er inkluderet.
- Plugins og themes, hvis disse muligheder er valgt.
- Importmetadata brugt af Eksportér & Importer værktøjet til at genopbygge siden på målsiden.

Den præcise ZIP-størrelse afhænger af mængden af medier, de valgte plugins og themes samt størrelsen på websitets database-tabeller.

## Importere en side fra en ZIP {#importing-a-site-from-a-zip}

1. Gå til **Tools > Export & Import** på det destinations WordPress site.
2. Åbn importområdet og uploader den ZIP, der er oprettet af Export & Import værktøjet.
3. Indtast en erstatnings-URL, hvis siden skal bruge en ny adresse, eller lad feltet stå tomt for at bevare den oprindelige URL.
4. Vælg, om du vil slette den uploadede ZIP efter importens færdiggørelse.
5. Klik på **Begin Import**.
6. Overvåg den ventende import, indtil den er færdig. Brug **Cancel Import** kun, hvis du har brug for at stoppe processen før fuldførelse.
7. Gennemse den importerede side, før du tillader normal trafik eller kundeadgang.

På en enkelt-site WordPress installation erstatter import af en ZIP den nuværende side med den importerede side. Lav en fuld backup af målsiden, før du starter, og undgå at starte flere imports for samme site på samme tid.

## Begrænsninger og kompatibilitetsnoter {#limitations-and-compatibility-notes}

Store meget store uploadmapper eller medielagre kan skabe store ZIP-filer. Bekræft PHP's uploadgrænser, eksekveringsgrænser, diskplads, hukommelse og servertimeoutindstillinger, før du eksporterer eller importerer store sider.
Meget store medielagre kan muligvis skulle flyttes i et lavtrafik vedligeholdelsesvindue.
Den mål-WordPress-installation skal køre kompatible versioner af WordPress, PHP, Ultimate Multisite, plugin og tema.
En enkelt-site import erstatter den mål-site. Det er ikke et merge-værktøj.
Multisite-til-enkelt-site og enkelt-site-til-multisite flytninger understøttes kun, når det mål-miljø kan køre de plugins, temaer, URL'er og nødvendige Ultimate Multisite komponenter fra den eksporterede site.
Hold ZIP'en privat. Den kan indeholde databaseindhold, uploadede filer og konfigurationsdetaljer fra den eksporterede site.

For ældre netværksbaserede eksportworkflows findes der information i [Site Export](/user-guide/administration/site-export).
