---
title: Internet-serĉo
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# İnternet-Søk {#internet-search}

Gratis AI Agent v1.5.0 donas **Internet-Søk**-kapabelon, kiu per permetti al la AI asistento reteni informojn ĝis la nunaj de la web dum konversacio. Ĉi tio estas provista per la [Brave Search API](https://brave.com/search/api/) aŭ la [Tavily API](https://tavily.com/).

## Kiel Ĝi Funkcias {#how-it-works}

Kiam internet-søk estas aktivita, la asistento povas aŭtomate interrogi vian konfiguritan sövkonduon, kiam ĝi determinas, ke la demando bezonas nunajn aŭ eksterajn informojn — paŭ, novaj noticias, vivaj precoj, aŭ dokumentadon, kiun eble ŝanĝiĝis desde la freŝa ĉuon de la modelo.

Rezultoj estas reteni en reala tempo kaj injektita en la konteksto de la asistento antaŭ ol ĝi generas respondon. La asistento indikas, kiam li uzis sövk rezultojn por respondi al demando.

## Aktivado de Internet-Søk {#enabling-internet-search}

Internet-søk bezonas API-chiaven per la vian elektita sövkonduo. Por konfigurigi ĝin:

1. Altiĝu al **Gratis AI Agent → Settings → Advanced**.
2. Trovu la nedropu **Internet Search Provider** kaj selekciu siajn **Brave Search** aŭ **Tavily**.
3. Enservu vian API-chiaven en la korespondanta kampo. Linkoj por registriĝi estas prezentita apud ĉiu kampo.
4. Kliku sur **Save Settings** (Konservi konfiguracion).

Unfoje la chiavo estas konservita, la kapablo de Internet-søk estas aŭtomate dispona al la asistento.

## Brave Search {#brave-search}

### Akviziado de Brave Search API-chiavo {#obtaining-a-brave-search-api-key}

1. Vizitu la [Brave Search API page](https://brave.com/search/api/).
2. Registriĝu por planon. Libera nivelo estas dispona kun mensia limito de petoj.
3. Kopiu vian API-chiaven el la developer dashboard de Brave Search.
4. Enservu ĝin en la kampo **Brave Search API Key** en la konfiguracioj de Gratis AI Agent.

### Limitaĵoj de Uso {#usage-limits}

La utilizo estas fakturita de Brave Search bazita sur la nombro de serĉitaj. Ĉiu AI respondo, kiu provokas serĉon, vidas kiel unu serĉo. Monitoru vian utilizadon en [Brave Search developer dashboard](https://brave.com/search/api/) por eviti neekspektitaj fakturoj.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 adigas **Tavily** kiel alternativon de internet serĉisto, ofrante riĉajnaj rezultojn kaj avanjn raketa kapablitajn.

### Akviziado de Tavily API-chiavo {#obtaining-a-tavily-api-key}

1. Vizitu la [Tavily API page](https://tavily.com/).
2. Registaru por konto. Libera nivelo estas disponabla kun mensia limito de petoj.
3. Kopiu vian API-chiaven de la Tavily dashboardo.
4. Atendi ĝin en la **Tavily API Key** campo en la ĝustaj AI Agent ĝustoj.

### Utilizaj Limitaĵoj {#usage-limits-1}

Utilizo estas fakturita de Tavily bazita sur la nombro de API-vokoj farit. Ĉiu AI respondo, kiu provokas serĉon, vidas kiel unu vokado. Monitoru vian utilizadon en [Tavily dashboardo](https://tavily.com/) por eviti neekspektitaj fakturoj.

## Dezaktiveado de Internet Serĉo {#disabling-internet-search}

Elimu la API-chiaven el la aktiva serĉisto provizanto campo kaj savu. La kapablo de Internet Serĉi ne ofrebone al la asistanto pli.

:::note
Internet serĉo adigas latencon al respondoj ĉar la asistanto devas pati la serĉajn rezultojn antaŭ generi respondon. Por tempo-sensaj uzdogoj, konsideru, ĉu reala tempo serĉo estas necesa aŭ ĉu la integrita scio de la asistanto estas suficienca.
:::
