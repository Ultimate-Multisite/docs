---
title: Vsebinski iskanje
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Iskanje {#internet-search}

Gratis AI Agent v1.5.0 dodaja možnost **Internet Iskanja**, ki omogoča asistentu, da povzroči najdenje najaktualnejših informacij iz spleta med pogovorom. To je močan na [Brave Search API](https://brave.com/search/api/) ali [Tavily API](https://tavily.com/).

## Kako deluje {#how-it-works}

Ko je Internet Iskanje vključeno, asistent lahko sam avtomatsko povzroči zapravo vašega konfiguriranega iskalnega dostavitelja, ko ugotovi, da je vprašanje zahtevale trenutne ali zunanjih informacij – na primer, zadnje novice, življenjske cene ali dokumentacijo, ki se je lahko spremenila od datuma pre treniranja modela.

Rezultati so pridobljeni v realnem času in vstavljeni v kontekst asistenta pred tem, ko generira odgovor. Asistent označuje, če je uporabil rezultate iskanja za odgovor na vprašanje.

## Vključevanje Internet Iskanja {#enabling-internet-search}

Internet Iskanje zahteva API ključ od izbranega iskalnega dostavitelja. Za konfiguracijo:

1. Pojdite do **Gratis AI Agent → Settings → Advanced**.
2. Poiščite spuščilo **Internet Search Provider** in izberite **Brave Search** ali **Tavily**.
3. Vnesite svoj API ključ v odgovarjajoče polje. Linki za registracijo so prikazani ob vsakem polju.
4. Kliknite na **Save Settings** (Shrani nastavitve).

Ko je ključ shranjen, možnost Internet Iskanja je avtomatsko na voljo za asistenta.

## Brave Search {#brave-search}

### Dobavo API ključa Brave Search {#obtaining-a-brave-search-api-key}

1. Obiščite [Brave Search API stran](https://brave.com/search/api/).
2. Registrirajte se za paket. Na voljo je brezplačna različica z omejitvo na mesečno količino zahtevov.
3. Kopirajte svoj API ključ iz razdelka za razvoj Brave Search.
4. Nalepite ga v polje **Brave Search API Key** v nastavitvah Gratis AI Agent.

### Omejitve uporabe {#usage-limits}

Uporaba se določa na podlagi števila vprašanj, ki so opravljeni z Brave Search. Vsak odgovor AI, ki sproži iskanje, šteje kot eno vprašanje. Nadzirajte uporabo na [dashboardu razvijalca Brave Search](https://brave.com/search/api/), da bi izognili nepredvidljivim stroškom.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 dodaja **Tavily** kot alternativni dostavatel iskanja na spletu, ki ponuja bogate rezultate iskanjanj in napredne sposobnosti raziskave.

### Dobavo ključa API za Tavily {#obtaining-a-tavily-api-key}

1. Obiščite [stranico Tavily API](https://tavily.com/).
2. Registrirajte se za račun. Na voljo je brezplačna različica z mesečno omejitvo na zahtevanje.
3. Kopirajte svoj API ključ iz tavily dashboarda.
4. Nalijte ga v polje **Tavily API Key** v nastavitvah Gratis AI Agent.

### Omejitve uporabe {#usage-limits-1}

Uporaba se določa na podlagi števila API povprašanj, ki so opravljeni z Tavily. Vsak odgovor AI, ki sproži iskanje, šteje kot eno povprašanje. Nadzirajte uporabo na [tavily dashboardu](https://tavily.com/), da bi izognili nepredvidljivim stroškom.

## Uporaba iskanja na spletu (Disabling Internet Search) {#disabling-internet-search}

Odstranite API ključ iz polja za aktivni dostavatel iskanja in shranite spremembe. Sposobnost iskanja na spletu bo več ne ponujena asistentu.

:::note
Iskanje na spletu dodaja latencijo odgovorom, ker asistent mora počakati na rezultate iskanja pred generiranjem odgovora. Za uporabo, ki je občutljiva glede časa, razmislite, ali je potrebno preprosto iskanje v realnem času ali če je zamenjajoč znanje asistentu dovolj.
:::
