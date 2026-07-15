---
title: Internet keresés
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internetkeresés

A Gratis AI Agent v1.5.0 hozzáad egy **Internetkeresést** (Internet Search) képességet, amely lehetővé teszi az AI asszisztens számára, hogy a beszélgetés során friss információkat szerezzen be a webről. Ez a funkció a [Brave Search API](https://brave.com/search/api/) vagy a [Tavily API](https://tavily.com/) segítségével működik.

## Hogyan működik {#how-it-works}

Amikor az internetkeresés aktiválva van, az asszisztens automatikusan lekérdezheti a beállított kereső szolgáltatóját, ha úgy dönti el, hogy egy kérdés aktuális vagy külső információkat igényel – például legfrissebb híreket, élő árakat vagy olyan dokumentációt, amely az AI modell képzési időpontjától hogy más, hogy megváltozhatott.

A találatok valós időben kerülnek lekérése és beépítésre az asszisztens kontextusába, mielőtt válaszol. Az asszisztens jelezheti, hogy keresési eredményeket használt a kérdésre válaszolásához.

## Internetkeresés aktiválása {#enabling-internet-search}

Az internetkereséshez egy API kulcsra van szüksége a választott kereső szolgáltatójától. Ahhoz, hogy beállítsa:

1.  Gyer át a **Gratis AI Agent → Beállítások (Settings) → Haladó (Advanced)** menüpontra.
2.  Keresse meg az **Internetkereső szolgáltató (Internet Search Provider)** legördülő menüpontját, és válassza ki az **Brave Search**-ot vagy a **Tavily**-t.
3.  Adja meg az API kulcsát a megfelelő mezőbe. A regisztrációs linkek megjelennek minden mező mellett.
4.  Kattintson a **Beállítások mentése (Save Settings)** gombra.

Miután elmentette a kulcsot, az Internetkeresés képessége automatikusan elérhető az asszisztens számára.

## Brave Search {#brave-search}

### Brave Search API kulcs megszerzése {#obtaining-a-brave-search-api-key}

1.  Látogasson el a [Brave Search API oldalra](https://brave.com/search/api/).
2.  Regisztráljon egy tervre. Ücretsiz szintet biztosítanak havi kéréskorlátokkal.
3.  Másolja ki az API kulcsát a Brave Search fejlesztői irányít felületéről (developer dashboard).
4.  Dőlját be a **Brave Search API Key** mezőbe a Gratis AI Agent beállításain.

### Használati korlátok {#usage-limits}

A használatot Brave Search díjazza a végrehajtott kérések számától. Minden AI válasz, amely keresést indít el, egy kérésnek számít. Figyelje át a használatát a [Brave Search fejlesztői irányít felületén](https://brave.com/search/api/), hogy elkerülje az elvárt díjakat.

## Tavily {#tavily}

A Superdav AI Agent v1.10.0 hozzáadja a **Tavily**-t alternatív internetkereső szolgáltatóként, amely gazdagabb keresési eredményeket és fejlettebb kutatási képességeket kínál.

### Tavily API kulcs megszerzése {#obtaining-a-tavily-api-key}

1.  Látogasson el a [Tavily API oldalra](https://tavily.com/).
2.  Regisztráljon egy fiókra. Ücretsiz szintet biztosítanak havi kéréskorlátokkal.
3.  Másolja ki az API kulcsát a Tavily irányít felületéről (dashboard).
4.  Dőlját be a **Tavily API Key** mezőbe a Gratis AI Agent beállításain.

### Használati korlátok {#usage-limits-1}

A használatot Tavily díjazza a végrehajtott API hívások számától. Minden AI válasz, amely keresést indít el, egy hívásnak számít. Figyelje át a használatát a [Tavily irányít felületén](https://tavily.com/), hogy elkerülje az elvárt díjakat.

## Internetkeresés kikapcsolása {#disabling-internet-search}

Távolítsa el az API kulcsot az aktív kereső szolgáltató mezőből, és mentse el. Az Internetkeresés képessége többé nem lesz elérhető az asszisztens számára.

:::note
Az internetkeresés növeli a válaszok késlekedését, mert az asszisztensnek várnia kell a keresési eredmények megérkezésére, mielőtt válaszolt. Az időérzékeny felhasználási esetekben fontolja meg, hogy valóban szükséges-e a valós idejű keresés, vagy elegendő az asszisztens beépített tudása.
:::
