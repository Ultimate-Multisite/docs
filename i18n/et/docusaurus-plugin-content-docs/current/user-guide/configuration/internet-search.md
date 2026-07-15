---
title: Internetutundus
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet otsing

Gratis AI Agent v1.5.0 lisab **Internet otsing** võimalust, mis võimaldab AI assistentile jutust teada veebist suheldes. See on võimendatud [Brave Search API](https://brave.com/search/api/) või [Tavily API](https://tavily.com/) abil.

## Kuidas see toimib {#how-it-works}

Kui internet otsing on aktiveeritud, assistent saab automaatselt küsida konfiguratsiooni poolt teie valitud otsingukonnectori, kui ta mõistab, et küsimus nõuab ajakohast või välise teavet – näiteks hiljutisi uutiseid, elava hinnad või dokumentatsiooni, mis võib olla muutunud selle modeli trüningu lõppkättest pärast.

Tulemused on paljudesegad ja sisestatakse assistentin konteksti sisse enne vastuse genereerimist. Assistent teavitakse, kui ta otsingutulemusi kasutab küsimuse vastamiseks.

## Internet otsingu aktiveerimine {#enabling-internet-search}

Internet otsing nõuab API-kaudi valitud otsingukonnectori poolt. Selle konfiguratsiooniks:

1. Minenda **Gratis AI Agent → Settings → Advanced**.
2. Leida **Internet Search Provider** dropdown ja valuda kas **Brave Search** või **Tavily**.
3. Sisestage oma API-kaud vastava fieldisse. Registreerimise linkid on nähtavad iga fieldi kõrval.
4. Klõpsake **Save Settings**.

Kord, kui kaud salvestatakse, Internet otsingu võimalus on automaatselt saadaval assistentile.

## Brave Search {#brave-search}

### Brave Search API-kaudi omamine {#obtaining-a-brave-search-api-key}

1. Minenda [Brave Search API lehel](https://brave.com/search/api/).
2. Registreeruda plaani. Välja on saadaval tasuta taseme, mis sisaldab kuudlaatasi küsimuste piiri.
3. Kopienda oma API-kaud Brave Search developer dashboardist.
4. Liidese selle **Brave Search API Key** fieldisse Gratis AI Agenti asetustesse.

### Kasutuse piirid {#usage-limits}

Kasutus on tasub Brave Searchi põhjal teostatud küsimuste arvuga. Iga AI vastus, mis käivitab otsingut, hinnatakse ühe küsimuse kui ühe küsimuse. Järgige oma kasutamist [Brave Search developer dashboardil](https://brave.com/search/api/), et vältida ootamatud eelarveid.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 lisab **Tavily** alternatiivse interneti otsingupроваiderina, pakkudes rikkamaid otsingutulemusi ja arengatud uurimisvõimeid.

### Tavily API-kaudi omamine {#obtaining-a-tavily-api-key}

1. Minenda [Tavily API lehel](https://tavily.com/).
2. Registreeruda konti. On saadaval tasuta taseme, mis on piiratud kuudlausel küsimuste arvuga.
3. Kopienda oma API-kood Tavily dashboardist.
4. Liiga see **Tavily API Key** välja Gratis AI Agent asetustesse.

### Kasutuse piirused {#usage-limits-1}

Kasutus on tasub Tavily põhjal teostatud API-kutside arvu. Iga AI vastus, mis käivitab otsingut, hinnatakse ühe kutse kui ühe küsimuse. Järgige oma kasutamist [Tavily dashboardil](https://tavily.com/), et vältida ootamatud eelarveid.

## Interneti otsingu välja lülitamine {#disabling-internet-search}

Eemaldage API-kood aktiivse otsingupроваideri kohta ja salvestage. Interneti otsingvõime ei ole enam saadaval assistentile.

:::note
Interneti otsing lisab vastuste aeglustuse, kuna assistent peab oodata otsingutulemusi enne vastaamise. Aja kriitiliste kasutuse juhtudel mõeldud on arutada, kas reaalseaegne otsing on vajalik või kas assistenti sissejuhatatud teadmised on piisavad.
:::
