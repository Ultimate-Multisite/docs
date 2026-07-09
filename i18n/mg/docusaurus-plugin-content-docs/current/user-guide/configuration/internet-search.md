---
title: Fikarohana an-tserasera
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Fikarohana (Internet Search) {#internet-search}

Ny dikan'ny Gratis AI Agent v1.5.0 dia manampy anareo ny fahaizana **Internet Search**. Izany dia ahafahana mamerina fampahalalana vaovao avy amin'ny tambajotra maraina mandritra ny resaka miaraka amin'ny ason'ny AI rehefa misy fanontaniana mitaky fampahalalana vaovao na ivelan'ny fotoana nampianarana ilay modelina. Ity fahaizana ity dia miorina amin'ny [Brave Search API](https://brave.com/search/api/) na ny [Tavily API](https://tavily.com/).

## Ahoana no fiasany {#how-it-works}

Rehefa voafidy ny Internet search, afaka manontany ho azy ilay ason'ny AI ny loharanom-baovao nomenao rehefa mahatsapa fa mila fampahalalana vaovao na avy ivelany ny fanontaniana — ohatra, vaovao farany, vidiny miankina amin'ny fotoana, na antontan-taratasy izay mety niova hatramin'izay nanorenana ilay modelina.

Ny vokatra dia azo avy amin'ny fotoana tena izy ary apetaka ao anatin'ny tontolo iainana (context) an'ilay ason'ny AI alohan'ny hanomezany valiny. Ho lazaina ny ason'ny AI rehefa nampiasa vokatra avy amin'ny fikarohana mba hamaliana fanontaniana iray izy.

## Fametrahana Internet Search {#enabling-internet-search}

Mila API key avy amin'ilay loharanom-baovao fikarohana izay safidinao ny Internet search. Mba hanamboarana azy:

1. Mandehin'ny **Gratis AI Agent → Settings → Advanced**.
2. Mitadiava ny dropdown anarana hoe **Internet Search Provider** ary safidio na **Brave Search** na **Tavily**.
3. Ampidiro ny API key-nao ao amin'ilay toerana mifanandrify. Misy rohy fampidirana (sign-up links) miseho eo anilan'ny tsirairay toerana.
4. Tsindrio ny **Save Settings** (Tehirizina ny Famaritana).

Rehefa voatahiry ny key, dia azo ampiasaina ho azy avy hatrany ilay fahaizana Internet Search.

## Brave Search {#brave-search}

### Fahazoana Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Mandehin'ny [Brave Search API page](https://brave.com/search/api/).
2. Manangana tetikasa (sign up) ho an'ny plan iray. Misy fizarana maimaim-poana misy fetran-tsipiriany isam-bolana ny fangatahana.
3. Apetraho ny API key-nao avy amin'ny developer dashboard an'ny Brave Search.
4. Ampidiro azy ao amin'ilay toerana **Brave Search API Key** ao amin'ny famaritana Gratis AI Agent.

### Fepetra Fampiasana (Usage Limits) {#usage-limits}

Fandrena ny fampiasana dia voalaza amin'ny alalan'ny Brave Search miankina amin'ny isan'ny fanontaniana (queries) natao. Ny valiny AI tsirairay izay mitarika fikarohana iray no hitongilana ho toy ny fanontaniana iray. Jereo ny fampiasanao ao amin'ny [Brave Search developer dashboard](https://brave.com/search/api/) mba hisorohana fandoavam-bola tsy nampoizina.

## Tavily {#tavily}

Ny Superdav AI Agent v1.10.0 dia manampy an'i **Tavily** ho loharano fikarohana an-tserasera hafa, izay manolotra vokatra fikarohana tsara kokoa sy fahaizana fikarohana avo lenta.

### Fandraisana ny Tavily API Key {#obtaining-a-tavily-api-key}

1. Mandehin'ny [Tavily API page](https://tavily.com/).
2. Manangana kaonty. Misy teti-drano (free tier) misy fetran-tsipiriany isam-bolana ho an'ny fangatahana.
3. Apetraho ny Tavily API key avy ao amin'ny tavela Tavily dashboard.
4. Apetraho azy ao amin'ny sehatry ny **Tavily API Key** ao amin'ny fepetra an'ny Gratis AI Agent.

### Fepetra Fampiasana {#usage-limits-1}

Ny fandoavam-bola dia atao avy amin'ny Tavily miankina amin'ny isan'ny antso (API calls) natao. Ny valiny AI tsirairay izay mitarika fikarohana iray no hitongilana ho toy ny antso iray. Jereo ny fampiasanao ao amin'ny [Tavily dashboard](https://tavily.com/) mba hisorohana fandoavam-bola tsy nampoizina.

## Fanalana ny Fikarohana An-tserasera {#disabling-internet-search}

Esory ny API key avy eo amin'ny sehatry ny loharano fikarohana mavitrika ary ataovy save (save). Tsy ho azo atao intsony ny manome ny fahaizana mitady an-tserasera ho an'ilay assistant.

:::note
Ny fikarohana an-tserasera dia manampy fahatarana amin'ny valiny satria tsy maintsy miandry ny vokatra fikarohana alohan'ny hanomezana valiny ny assistant. Ho an'ny toe-javatra mila fotoana, diniho raha ilaina ve ny fikarohana tena izy (real-time search) na raha ampy ny fahalalana efa ao amin'ny assistant.
:::
