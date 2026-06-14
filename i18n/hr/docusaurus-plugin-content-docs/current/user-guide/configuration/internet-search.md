---
title: Interno pretraživanje
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Pretraživanje na Internetskoj Mreži

Gratis AI Agent v1.5.0 dodaje mogućnost **Internet pretraživanja** koja omogućuje asistentu umjetne inteligencije da dohvati najnovije informacije s interneta tijekom razgovora. Ovo je omogućeno putem [Brave Search API](https://brave.com/search/api/) ili [Tavily API](https://tavily.com/).

## Kako to radi

Kada je internet pretraživanje uključeno, asistent će automatski upitati vašu podešenu provajdera pretrage kada utvrdi da pitanje zahtijeva trenutne ili eksterne informacije — na primjer, najnovije vijesti, trenutne cijene ili dokumentaciju koja se može promijeniti od datuma prekida obuke modela.

Rezultati se dohvaćaju u stvarnom vremenu i ubacuju u kontekst asistenta prije nego što generira odgovor. Asistent će ukazati kada je koristio rezultate pretrage kako bi odgovorio na pitanje.

## Omogućavanje Internetskog Pretraživanja

Internet pretraživanje zahtijeva API ključ od vašeg izabranog provajdera pretrage. Za konfiguriranje:

1. Idite na **Gratis AI Agent → Settings → Advanced**.
2. Pronađite pad **Internet Search Provider** i odaberite ili **Brave Search** ili **Tavily**.
3. Unesite svoj API ključ u odgovarajući polje. Linkovi za registraciju su prikazani pored svakog polja.
4. Kliknite na **Save Settings** (Spremi postavke).

Nakon što se ključ sačuva, mogućnost Internetskog Pretraživanja je automatski dostupna za asistenta.

## Brave Search

### Dobijanje Brave Search API Ključa

1. Posjetite [Brave Search API stranicu](https://brave.com/search/api/).
2. Registrirajte se za plan. Dostupna je besplatna varijanta s ograničenjem zahtjeva mjesečno.
3. Kopirajte svoj API ključ s razvojne ploče Brave Search-a.
4. Zalijepite ga u polje **Brave Search API Key** u postavkama Gratis AI Agent.

### Ograničenja Korištenja

Korištenje se naplaćuje na temelju broja izvršenih upita od strane Brave Searcha. Svaki AI odgovor koji pokreće pretraživanje računa se kao jedan upit. Pratite svoje korištenje u [Brave Search developer dashboardu](https://brave.com/search/api/) kako biste izbjegli neočekivane naplate.

## Tavily

Superdav AI Agent v1.10.0 dodaje **Tavily** kao alternativni provajder internetskog pretraživanja, nudeći bogatije rezultate pretrage i napredne mogućnosti istraživanja.

### Dobijanje ključa API-ja Tavilyja

1. Posjetite [stranicu Tavily API](https://tavily.com/).
2. Registrirajte se za račun. Dostupna je besplatna razina s ograničenjem zahtjeva mjesečno.
3. Kopirajte svoj API ključ iz Tavily dashboarda.
4. Zalijepite ga u polje **Tavily API Key** u postavkama Gratis AI Agent-a.

### Ograničenja korištenja

Korištenje se naplaćuje na temelju broja poziva API-ja od strane Tavilyja. Svaki AI odgovor koji pokreće pretraživanje računa se kao jedan poziv. Pratite svoje korištenje u [Tavily dashboardu](https://tavily.com/) kako biste izbjegli neočekivane naplate.

## Uključivanje internetskog pretraživanja

Uklonite API ključ iz polja aktivnog provajdera pretraživanja i spremite promjene. Sposobnost internetskog pretraživanja više neće biti ponudena asistentu.

:::note
Internetsko pretraživanje dodaje kašnjenje odgovorima jer asistent mora čekati rezultate pretrage prije generiranja odgovora. Za situacije koje zahtijevaju trenutno ažurirane podatke, razmislite hoćete li stvarno vrijeme pretraživanja biti potrebno ili je li ugrađena znanja asistenta dovoljna.
:::
