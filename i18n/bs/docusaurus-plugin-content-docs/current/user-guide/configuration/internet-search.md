---
title: Pretraživanje interneta
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internetski pretraga {#internet-search}

Gratis AI Agent v1.5.0 dodaje mogućnost **Internetske pretrage** koja AI asistentu omogućava dohvaćanje ažurnih informacija s web stranice tokom razgovora. Ovo je omogućeno putem [Brave Search API](https://brave.com/search/api/) ili [Tavily API](https://tavily.com/).

## Kako funkcioniše {#how-it-works}

Kada je internetska pretraga omogućena, asistent može automatski upitati vaš konfigurisanog provajdera pretrage kada utvrdi da je pitanje potrebno trenutne ili eksterne informacije — na primjer, nedavne vijesti, trenutne cijene ili dokumentaciju koja se mogla promijeniti od prekida učenja modela.

Rezultati se dohvaćaju u realnom vremenu i ubacuju u kontekst asistenta prije nego što on generiše odgovor. Asistent će ukazati kada je koristio rezultate pretrage za odgovor na pitanje.

## Omogućavanje Internetske pretrage {#enabling-internet-search}

Internetska pretraga zahtijeva API ključ od vašeg odabranog provajdera pretrage. Da biste je konfigurisali:

1. Idite na **Gratis AI Agent → Settings → Advanced**.
2. Pronađite padajući izbornik **Internet Search Provider** i odaberite ili **Brave Search** ili **Tavily**.
3. Unesite svoj API ključ u odgovarajuće polje. Linkovi za registraciju prikazani su pored svakog polja.
4. Kliknite na **Save Settings**.

Nakon što se ključ sačuva, mogućnost Internetske pretrage automatski je dostupna asistentu.

## Brave Search {#brave-search}

### Dobijanje Brave Search API ključa {#obtaining-a-brave-search-api-key}

1. Posjetujte [Brave Search API stranicu](https://brave.com/search/api/).
2. Registrujte se za plan. Dostupan je besplatni nivo sa ograničenjem zahtjeva mjesečno.
3. Kopirajte svoj API ključ sa Brave Search developer dashboard-a.
4. Zalijepite ga u polje **Brave Search API Key** u podešavanjima Gratis AI Agent-a.

### Limiti korištenja {#usage-limits}

Korištenje se naplaćuje od strane Brave Search-a na osnovu broja upita. Svaki AI odgovor koji pokrene pretragu računa se kao jedan upit. Pratite svoje korištenje na [Brave Search developer dashboard-u](https://brave.com/search/api/) kako biste izbjegli neočekivane naplate.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 dodaje **Tavily** kao alternativnog provajdera internetske pretrage, nudeći bogatije rezultate pretrage i napredne istraživačke mogućnosti.

### Dobijanje Tavily API ključa {#obtaining-a-tavily-api-key}

1. Posjetujte [Tavily API stranicu](https://tavily.com/).
2. Registrujte se za nalog. Dostupan je besplatni nivo sa ograničenjem zahtjeva mjesečno.
3. Kopirajte svoj API ključ sa Tavily dashboard-a.
4. Zalijepite ga u polje **Tavily API Key** u podešavanjima Gratis AI Agent-a.

### Limiti korištenja {#usage-limits-1}

Korištenje se naplaćuje od strane Tavily-ja na osnovu broja API poziva. Svaki AI odgovor koji pokrene pretragu računa se kao jedan poziv. Pratite svoje korištenje na [Tavily dashboard-u](https://tavily.com/) kako biste izbjegli neočekivane naplate.

## Onemogućavanje Internetske pretrage {#disabling-internet-search}

Uklonite API ključ iz polja aktivnog provajdera pretrage i sačuvajte. Mogućnost Internetske pretrage više neće biti dostupna asistentu.

:::note
Internetska pretraga dodaje kašnjenje odgovorima jer asistent mora sačekati rezultate pretrage prije nego što generiše odgovor. Za slučajeve upotrebe ovisne o vremenu, razmislite o tome da li je realno vrijeme pretraga potrebno ili je dovoljna ugrađena znanja asistenta.
:::
