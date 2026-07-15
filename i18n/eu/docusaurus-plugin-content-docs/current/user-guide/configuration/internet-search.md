---
title: Internetako bilakidetze
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Hitzakuntza (Internet Search)

Gratis AI Agent v1.5.0-ek web-a dagoen informazioa zuzenean bilatzen dituen **Internet Search** funtazioa hastertu du, zehatzailuaren (AI assistant) irakaspean galdu eta adierazpen bat ematean internetatik datu onartutako informazioa erabiliz. Horrek [Brave Search API](https://brave.com/search/api/) edo [Tavily API](https://tavily.com/) batekin funtzionatzen du.

## Ondo Zerbatzen (How It Works) {#how-it-works}

Internet hitzakuntza aktibo dagoenean, zehatzaileak galdizki ematen duenean datu onartutako bilatzari automatikoki galdu egiten du — adibidez, iragailu ditu, prezioa errealia edo modeloaren estalki (training cutoff) ondoren aldatu dezake informazioa.

Erakundeak errealan bilatzen dira eta zehatzailearen kontekstua generatu aurretik jokatzen dira. Zehatzaileak galdizketa bat erantzutera bilatzari datu onartutako erabiltzen duela adierazten du.

## Internet Hitzakuntza Aktiboa Egitea (Enabling Internet Search) {#enabling-internet-search}

Internet hitzakuntza zehatzailaren partekatutako bilatzari API key batek behar da. Konfiguratu dezake:

1. **Gratis AI Agent → Settings → Advanced**-ra jarraitu.
2. **Internet Search Provider** lehen menua (dropdown) aurkitu eta **Brave Search** edo **Tavily** bat aukeratu.
3. API key-n duzun testuak erabiliz, harremaneko lekuan sortu nahi duzu. Lehen menuko lekuetan harremaneko linkak daude.
4. **Save Settings** (Konfigurazioak saldatu) klik batean klik egin.

Keya saldatu gtainaren ondoren, Internet Search funtazioa zehatzaileari automatikoki erabilera dauden.

## Brave Search {#brave-search}

### Brave Search API Key Aurretzea {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) bisitatu.
2. Plan batean emateko (sign up) behar duzu. Mensual irudien limitu duen "free tier" (libertatea) daude.
3. Brave Search developer dashboard-etik API key-n duzun testua kopiatu.
4. Gratis AI Agent-ren konfigurazioetan **Brave Search API Key** lekuan haituko.

### Erabilera Limitazioak {#usage-limits}

Etxeko ergitura Brave Search-ekaren arabera iragitzten da. AI eskaera bat (query) gertatzen duen AI zeharrakariak, batezko eskaera bat gisa kontuan hartzen dira. Ez aurrezki iragailu nahi duzu kondikazioak jaiotzeko [Brave Search developer dashboard](https://brave.com/search/api/).

## Tavily {#tavily}

Superdav AI Agent v1.10.0-ek **Tavily**-ri internet ergitura alternatiboa jartzen du, eta horrek rezultatuak luetan eta hautatzera dituzten iragailu-eraketa advancedrak ematen du.

### Tavily API Key aurkitzea {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) funtziari joatu.
2. Kontu bat irekitu. Mensual eskaera limitu bat duten free tier bat dago.
3. Tavily dashboard-etik API key-n iruditu.
4. Horra Gratis AI Agent-aren hengailean dagoen **Tavily API Key** lekuan jarri.

### Ergitura Limitazioak {#usage-limits-1}

Ergitura Tavily-ekaren arabera, egin beharko diren API calls-ekoa kontuan hartzen da. Iragailu gertatzen duen AI eskaera bat (AI response) bat gisa kontuan hartzen da. Aurrezki iragailu nahi duzu kondikazioak jaiotzeko [Tavily dashboard](https://tavily.com/) monitorizatu.

## Internet ergitura deshabilitatzea {#disabling-internet-search}

API key-a aktibo iragailu ergitura lekuan aldatu eta salduki. AI zeharrakari bihurtzen duen internet ergitura ez izango da emateko.

:::note
Internet ergiturak zeharrakarien atazpenetan latentez (latency) jartzen du, koska zeharrakari eskaera bat emate baino lehen iragailu-eraketa eskatzen du. Alda-erregatik erabiltzeko kasuak dira, real-time ergitura beharrezkoa da edo zeharrakarien itxarren jakinbidea (built-in knowledge) ez du?
:::
