---
title: Pretraživanje na internetu
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet pretraga na internetu

Gratis AI Agent v1.5.0 dodaje mogućnost **Internet pretrage** koja omogućava asistentu da dohvati najnovije informacije sa veba tokom razgovora. Ovo je podržano [Brave Search API](https://brave.com/search/api/) ili [Tavily API](https://tavily.com/).

## Kako to funkcioniše {#how-it-works}

Kada je internet pretraga uključena, asistent može automatski upitati vaš podešeni provajder pretrage kada utvrdi da pitanje zahteva trenutne ili spoljne informacije — na primer, najnovije vesti, trenutne cene ili dokumentaciju koja se možda promenila od datuma prekida obuke modela.

Rezultati se dohvaćaju u realnom vremenu i ubacuju u kontekst asistenta pre nego što generiše odgovor. Asistent će ukazati kada je koristio rezultate pretrage da odgovori na pitanje.

## Omogućavanje internetske pretrage {#enabling-internet-search}

Internet pretraga zahteva API ključ od izabranog provajdera pretrage. Da biste ga konfigurisali:

1. Idite na **Gratis AI Agent → Settings → Advanced**.
2. Pronađite padajući meni **Internet Search Provider** i izaberite ili **Brave Search** ili **Tavily**.
3. Unesite svoj API ključ u odgovarajuće polje. Linkovi za registraciju su prikazani pored svakog polja.
4. Kliknite na **Save Settings** (Sačuvaj podešavanja).

Kada se ključ sačuva, mogućnost internetske pretrage je automatski dostupna asistentu.

## Brave Search {#brave-search}

### Dobijanje Brave Search API ključa {#obtaining-a-brave-search-api-key}

1. Posetite [Brave Search API stranicu](https://brave.com/search/api/).
2. Registrujte se za plan. Dostupna je besplatna verzija sa ograničenjem zahteva mesečno.
3. Kopirajte svoj API ključ iz Brave Search developer dashboard-a.
4. Zalepite ga u polje **Brave Search API Key** u podešavanjima Gratis AI Agent.

### Ograničenja korišćenja {#usage-limits}

Korištenje se naplaćuje na osnovu broja upita koji su napravljeni od strane Brave Search. Svaki AI odgovor koji pokreće pretragu računa kao jedan upit. Pratite svoje korištenje u [Tavily developer dashboard-u](https://tavily.com/) kako biste izbjegli neočekivane naplate.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 dodaje **Tavily** kao alternativni provajder internetske pretrage, nudeći bogatije rezultate pretrage i napredne mogućnosti istraživanja.

### Dobijanje ključa API-ja Tavily {#obtaining-a-tavily-api-key}

1. Posjetite [stranicu Tavily API](https://tavily.com/).
2. Registrujte se za račun. Dostupna je besplatna varijanta sa limitom zahtjeva mjesečno.
3. Kopirajte svoj API ključ iz Tavily dashboard-a.
4. Zalijepite ga u polje **Tavily API Key** u podešavanjima Gratis AI Agent.

### Limiti korištenja {#usage-limits-1}

Korištenje se naplaćuje na osnovu broja poziva API-ja koji su napravljeni od strane Tavily-ja. Svaki AI odgovor koji pokreće pretragu računa kao jedan poziv. Pratite svoje korištenje u [Tavily dashboard-u](https://tavily.com/) kako biste izbjegli neočekivane naplate.

## Odbijanje internetske pretrage {#disabling-internet-search}

Uklonite API ključ iz polja aktivnog provajdera pretrage i sačuvajte promjene. Sposobnost internetske pretrage više neće biti ponuđena asistentu.

:::note
Internetska pretraga dodaje kašnjenje odgovorima jer asistent mora da čeka rezultate pretrage prije generisan odgovora. Za situacije koje zahtijevaju brz odgovor, razmislite da li je potreban pretraživač u realnom vremenu ili da li je znanje koje asistent ima ugrađeno dovoljno.
:::
