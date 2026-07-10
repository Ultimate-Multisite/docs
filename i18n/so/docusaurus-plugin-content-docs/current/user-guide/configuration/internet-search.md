---
title: Raadinta internetka
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Baadhista Internetka (Internet Search) {#internet-search}

Gratis AI Agent v1.5.0 wuxirtaa awoodda **Baadhista Internetka (Internet Search)** oo u oggolaanaysa agabka AI-ga inuu soo qaado macluumaad cusub oo ka yimid internetka inta uu la hadlayo. Waxaa lagu haysaa [Brave Search API](https://brave.com/search/api/) ama [Tavily API](https://tavily.com/).

## Sida Ay U Shaqeeyo (How It Works) {#how-it-works}

Marka baadhista internetka la furayo, agabka AI-ga wuxuu si toos ah u weydiin karaa barnaamijka aad dejisay marka uu ogaado in su'aashu u baahan macluumaad hadda jira ama dibadda ah — tusaale ahaan, warar cusub, qiimeyn la socda, ama dukumeenti oo laga yaabo inay isbeddelan tahay tan iyo markii model-ka la tababaray.

Waxaa la soo celinayaa natiijooyinka wakhtiga dhabta ah (real time) waxayna lagu dhejisaa macnaha agabka AI-ga ka hor inta u jawaab bixiyo. Agabka AI-ga wuxuu tilmaamayaa marka uu isticmaalay natiijooyinka baadhista si uu uga jawaabo su'aal.

## Furita Baadhista Internetka (Enabling Internet Search) {#enabling-internet-search}

Baadhista internetku waxay u baahan tahay furayaada API key laga helo barnaamijka aad dooratay oo baadhista. Si aad u dejisid:

1. Tag **Gratis AI Agent → Settings → Advanced**.
2. Hel **Internet Search Provider** (Doorka Baadhista Internetka) ee hoos ka dhigta oo dooro mid ka mid ah **Brave Search** ama **Tavily**.
3. Ku qor API key-gaaga meesha la midka ah. Xiriirada lagu bilaabo waxay ku muuqdaan dhanka koox kasta.
4. Guji **Save Settings** (Kaydi Dejitaanka).

Marka laga kaydiyo, awoodda Baadhista Internetka ayaa si toos ah u heli doonta agabka AI-ga.

## Brave Search {#brave-search}

### Helita API Key-ga Brave Search {#obtaining-a-brave-search-api-key}

1. Tag bogga [Brave Search API](https://brave.com/search/api/).
2. Iska biir qorshe (plan). Waxaa jira fursad bilaash ah oo lahayd xaddid ku saabsan tirada weydiinta bil kasta.
3. Cop-ka API key-gaaga ka soo qaado dashboard-ka developer-ka Brave Search.
4. Ku dheji meesha **Brave Search API Key** ee dejitaanka Gratis AI Agent.

### Xaddidda Isticmaalka (Usage Limits) {#usage-limits}

Isticda lagu bixiyo isticmaalka Brave Search iyadoo ku xiran tirada su'aalaha la weydiiyo. Marka uu jawaab AI ah uu keeno raadinta, wuxuu lahayd mid ka mid ah su'aalahaas. Si aad uga fogaato lacag aan la filayn, si fiican ula socodow isticmaalkaaga [brave.com/search/api/](https://brave.com/search/api/).

## Tavily {#tavily}

Superdav AI Agent v1.10.0 wuxuu ku daray **Tavily** oo ah hab kale oo raadinta internetka, isagoo bixiya natiijooyin raadinta aad u faahfaahsan iyo awoodo horumarineed oo sare leh.

### Helitaaya Furaha API (API Key) ee Tavily {#obtaining-a-tavily-api-key}

1. booqo [tavily.com/api](https://tavily.com/).
2. samayso akoon. Waxaa jira fursad bilaash ah oo lahayd xaddid ku xiran tirada codsiyada bil kasta.
3. Copy furaha API (API key) ee dashboard-ka Tavily.
4. Ku dheji si aad u isticmaasho meesha **Tavily API Key** ee settings-ka Gratis AI Agent.

### Xaddidda Isticmaalka {#usage-limits-1}

Isticmaalka waxaa lagu bixiyaa iyadoo ku xiran tirada call-yada API la samaynayo. Marka jawaab AI ah uu keeno raadinta, wuxuu lahayd mid ka mid ah call-kaas. Si aad uga fogaato lacag aan la filayn, si fiican ula socodow isticmaalkaaga [tavily.com](https://tavily.com/).

## Xiritaanka Raadinta Internetka (Disabling Internet Search) {#disabling-internet-search}

Ka saar furaha API-ga laga yaqaannaa meesha raadinta goobta la haysto oo ku kaydi. Awoodda raadinta internetka ma dibadda ka bixin doonto assistant-ka.

:::note
Raadinta internetka waxay keenta in jawaabaha ay qaataan waqti (latency) sababtoo ah assistant-ku wuxuu sugayaa natiijooyinka raadinta ka hor inta u soo saari jawaab. Haddii aad u baahan tahay isticmaal goobo degdeg ah, si fiicanu u ogaadaa in raadinta wakhtiga dhabta ah (real-time search) ay laguma baahnaa ama ma laha wax ka badan aqoonta ku jirta assistant-ka.
:::
