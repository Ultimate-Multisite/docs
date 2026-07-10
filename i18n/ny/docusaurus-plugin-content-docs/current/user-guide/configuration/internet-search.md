---
title: Kuteteza Kufuna
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Kufunso kwa Intaneti (Internet Search) {#internet-search}

Gratis AI Agent v1.5.0 imapanga uwezo wa **Internet Search** ambao unaruhusu msaidizi wa AI kupata habari za kisasa kutoka kwenye mtandao wakati wa mazungumzo. Hii inafanywa na [Brave Search API](https://brave.com/search/api/) au [Tavily API](https://tavily.com/).

## Inafanya Nini {#how-it-works}

Wakati Internet search imewezeshwa, msaidizi anaweza kuuliza kwa kiotomatiki mtoa utafutaji wako ulioanzishwa wakati anapobaini kuwa swali linahitaji habari za sasa au kutoka nje ya mfumo — kwa mfano, habari za hivi punde, bei hai, au hati ambayo inaweza kubadilika tangu muda wa mafunzo ya model.

Matokeo yanapatikana kwa wakati halisi na kuingizwa kwenye muktadha wa msaidizi kabla ya kutoa majibu. Msaidizi unaonyesha wakati ametumia matokeo ya utafutaji kujibu swali.

## Kuwezesha Internet Search {#enabling-internet-search}

Internet search inahitaji API key kutoka kwa mtoa utafutaji wako uliochagua. Ili kuifanya iweze kufanya kazi:

1. Nenda kwenye **Gratis AI Agent → Settings → Advanced**.
2. Tafuta dropdown ya **Internet Search Provider** na uchague **Brave Search** au **Tavily**.
3. Ingiza API key yako katika sehemu inayohusiana. Vifungo vya kujisajili vinaonekana karibu na kila sehemu.
4. Bonyeza **Save Settings**.

Baada ya kuhifadhi key, uwezo wa Internet Search unafanya kazi kiotomatiki kwa msaidizi.

## Brave Search {#brave-search}

### Kupata Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Nenda kwenye [Brave Search API page](https://brave.com/search/api/).
2. Jisajili kwa mpango wako. Kuna kiwango cha bure kinachopatikana na kikomo cha maombi kila mwezi.
3. Nakili (Copy) API key yako kutoka kwenye dashboard ya Brave Search developer.
4. Bandika (Paste) katika sehemu ya **Brave Search API Key** kwenye mipangilio ya Gratis AI Agent.

### Vizuizi vya Matumizi {#usage-limits}

Kufuna kuli kufunsa kwa Brave Search kuufunsa kwa Brave Search mwachidwe wa idziwiri (queries) zikufunsa. Kifado cha AI kila chisoni cha majibu kinachochochea utafutaji kinahesabiwa kama chisoni kimoja. Chulika matumizi yako kwenye [Brave Search developer dashboard](https://brave.com/search/api/) ili kuepuka gharama zisizotarajiwa.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 inaleta **Tavily** kama njia mbadala ya kutafuta mtandaoni, ikitoa matokeo ya utafutaji yanayokuwa na maelezo zaidi na uwezo wa utafiti unaosongozwa.

### Kupata Tavily API Key {#obtaining-a-tavily-api-key}

1. Nenda kwenye [Tavily API page](https://tavily.com/).
2. Jiandikie akaunti. Kuna kiwango cha bure kinachopatikana na kikomo cha maombi kwa mwezi.
3. Nakili api key yako kutoka kwenye tavily dashboard.
4. Iweke katika sehemu ya **Tavily API Key** kwenye mipangilio ya Gratis AI Agent.

### Viwango vya Matumizi {#usage-limits-1}

Matumizi yanalipwa na Tavily kulingana na idziwiri za API zilizofanywa. Kila majibu ya AI yanayochochea utafutaji kinahesabiwa kama idziwiri moja. Fuatilia matumizi yako kwenye [Tavily dashboard](https://tavily.com/) ili kuepuka gharama zisizotarajiwa.

## Kuzima Utafutaji Mtandaoni {#disabling-internet-search}

Ongeza api key kutoka kwenye sehemu ya mtoa utafutaji unaofanya kazi na hufanya save. Uwezo wa kutafuta mtandaoni hautakuwa unawapa msaidizi tena.

:::note
Utafutaji mtandaoni unaongeza muda (latency) katika majibu kwa sababu msaidizi lazima asubiri matokeo ya utafutaji kabla ya kutoa jibu. Kwa matumizi yanayohitaji wakati, zingatia kama utafutaji wa wakati halisi ni muhimu au kama maarifa yaliyopo ndani ya msaidizi ni vya kutosha.
:::
