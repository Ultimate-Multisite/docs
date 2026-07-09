---
title: Netaskókn
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Netlsóknir í Internét {#internet-search}

Gratis AI Agent v1.5.0 hefur nýsköpunna **Internet Search** (Netlsókn) að leiða, sem leyfir AI-hjálparinn að hringja upp nýjustu upplýsingar frá netinu á meðan samræðinni er í gangi. Þetta er hannað með [Brave Search API](https://brave.com/search/api/) eða [Tavily API](https://tavily.com/).

## Hvernig það virkar {#how-it-works}

Þegar netlsókn er á, getur hjálparinn sjálfskiptlega spyrja eftir því að nota þann netlsóknarveittandi sem þú hefur sett upp þegar hann finnur fram til að spurning nauðsynleg sé nýjustu eða ybtulupplýsingar – t.d. nýjustu fréttir, liveness-prísa, eða skjal sem gæti breytt sig síðan en þjónustuframkvæmduninn er hámarkaður.

Niðurstaðir eru hringja upp í rauntime og innleyddu í samhengi hjálparmannins áður en hann gerir svari. Hjálparmanninn sýnir hvort hann hafi notað netlsóknarniðurstaða til að svara spurning.

## Að opna Internet Search {#enabling-internet-search}

Internet search þarf API-nniöndu (API key) frá valinn netlsóknarveittandi. Til uppsetningar:

1. Gangi í **Gratis AI Agent → Settings → Advanced**.
2. Finndu dráttingu **Internet Search Provider** og veldu eða **Brave Search** eða **Tavily**.
3. Skrifa inn API-nniönduna þína í viðkomandi vöxtu. Linkar til uppsetningar eru sýnt næst hvert fält.
4. Klikka á **Save Settings** (Sérðu uppsetningarnar).

Eftir að nniöndun er séð, er Internet Search möguleiki sjálfskipta tilgjörünu fyrir hjálparmanninn.

## Brave Search {#brave-search}

### Að fá Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Gangi yfir [Brave Search API page](https://brave.com/search/api/).
2. Skráðu þig í plan. Frelstaklega er til að nota með takmarki á spurningum per mánuði.
3. Kopya API-nniönduna þína frá Brave Search developer dashboard.
4. Skrifa inn hana í fält **Brave Search API Key** í uppsetningum Gratis AI Agent.

### Takmarkar fyrir notkun {#usage-limits}

Notkun blir reikna út af Brave Search eftir fjölda leita sem er gerð fram. Hver AI svari sem skiptir með leiti er ein leita. Fylgjast með notkunni í [Brave Search developer dashboard](https://brave.com/search/api/) til að undan koma óvæntum skuldingum.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 hefur lagt **Tavily** í gegnum sem almenn netleitandi, og býður upp á ríkar leita-einingar og framkvæmdar fyrir flóknari rannsóknir.

### Að fá Tavily API Key {#obtaining-a-tavily-api-key}

1. Umsaki [Tavily API page](https://tavily.com/).
2. Skráðu þig í reikningi. Frelstakandi nivå er til við meðlimskipta skýrblöndun á mánuðarviði.
3. Kopla API key-inn þinn frá Tavily dashboard.
4. Setu hann í felt **Tavily API Key** í innstillingum Gratis AI Agent.

### Notkunarbeglim {#usage-limits-1}

Notkun er reikna út af Tavily eftir fjölda API kalla sem eru gerð fram. Hver AI svari sem skiptir með leiti telst sem ein kall. Fylgjast með notkunni í [Tavily dashboard](https://tavily.com/) til að undan koma óvæntum skuldingum.

## Skilning netleita {#disabling-internet-search}

Fjármaðu API key-inn úr aktivum leitandi stjórnanda og spara. Leita-einingarinn mun ekki lengur verið sýnd í hjálparvinnunni.

:::note
Netleita hefur viðbótun í svari sem er því að hjálparvinnunni verður að bíða eftir leitastjórnandi áður en svar er gerð fram. Til tveimur tilfellum sem krefjast tíma-eininga, skoðaðu hvort raunverulegt leita sé nauðsynlegt eða hvort þekkingu hjá hjálparvinnunni er tilstrekt.
:::
