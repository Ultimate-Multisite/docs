---
title: Bincike na Intanet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Maganarwar Intanet (Internet Search)

Gratis AI Agent v1.5.0 wajibi ne aini **Maganarwar Intanet (Internet Search)** da wata, wanda ke ba shi wa AI assistant don samun bayanai na sabon gaba daga intanet yayin tattaunawa. Wannan yana aiki ta hanyar [Brave Search API](https://brave.com/search/api/) ko [Tavily API](https://tavily.com/).

## Yadda Ake Aiki {#how-it-works}

Idan an shigar Maganarwar Intanet, assistant zai iya neman bayanai daga wajen bincike da kake tsara lokacin da ya gani cewa tambayar tana buƙatar bayani na sabon gaba ko wanda ba shi ne na asali — misali, labarai na yau da kullum, farashin kai yayin nan da nan, ko takaitaccen bayanan da suka iya canzawa daga lokacin da an horar da model ɗin.

An samu rahotojin a zahiri kuma an saka su cikin bayanin assistant kafin ya samar da amsa. Assistant zai nuna lokacin da ya yi amfani da rahotojin bincike don a jawab tambaya.

## Shigar Maganarwar Intanet {#enabling-internet-search}

Maganarwar Intanet tana buƙatar kunci API daga wajen binciken da kake zaɓa. Don tsara shi:

1. Zuwa **Gratis AI Agent → Settings → Advanced**.
2. Ka nemo bayanan **Internet Search Provider** kuma ka zaɓi ko **Brave Search** ko **Tavily**.
3. Ka shigar kunci API ɗinka a cikin wajen da ya dace. Linkin shiga shiga an wurin kowane wuri.
4. Ka danna **Save Settings**.

Bayan an tsara kunci, ikon Maganarwar Intanet zai kasance mai sauƙi don assistant.

## Brave Search {#brave-search}

### Samun Kunci API na Brave Search {#obtaining-a-brave-search-api-key}

1. Zuwa [Brave Search API page](https://brave.com/search/api/).
2. Ka yi shiga wata tsari (plan). Akwai mataki mai kyau da babu kuɗi tare da dukiya buƙatar wata kowace wata wata kowace mako.
3. Ka ɗauki kunci API ɗinka daga dashboard na masu tasirin Brave Search.
4. Ka shigar shi a cikin wajen **Brave Search API Key** a cikin tsara Gratis AI Agent.

### Ilimin Amfani (Usage Limits) {#usage-limits}

Amfaniyarwa da amfani da ita yana bayarwa ne daga Brave Search bisa ga yawan tambayoyi da aka yi. Kowane amsa na AI wadda take haifar bincike tana kaunu da wata tambaya ɗaya. Don ku tsara amfani, ku duba amfani ɗinku a [Brave Search developer dashboard](https://brave.com/search/api/) don su yi taka rawar rashin samun kuɗi na baƙin ciki.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 ya ƙara **Tavily** a matsayin wata hanya ta bincike ta Intanet, yana bayarwa da sakamako mafi girma na bincike da kuma ikon bincike mai tasiri.

### Samun Tavily API Key {#obtaining-a-tavily-api-key}

1. Zuwa [Tavily API page](https://tavily.com/).
2. Yi shiga asusun. Akwai mataki mai sauƙi (free tier) tare da iyakacin tambayoyi na kowace wata shayi.
3. Ɗauki API key ɗinka daga Tavily dashboard.
4. Ka dabba shi a cikin lambar **Tavily API Key** a cikin siffar Gratis AI Agent.

### Iyakacin Amfani {#usage-limits-1}

Amfani yana kaunu da Tavily bisa ga yawan ƙoƙarin lafazi (API calls) da aka yi. Kowane amsa na AI wadda take haifar bincike tana kaunu da wata ƙoƙari ɗaya. Don ku tsara amfani, ku duba amfani ɗinku a [Tavily dashboard](https://tavily.com/) don su yi taka rawar rashin samun kuɗi na baƙin ciki.

## Kawo Bincike ta Intanet (Disabling Internet Search) {#disabling-internet-search}

Ka cire API key daga lambar wajen binciken da ke aiki kuma ka dabba shi. Iyakacin ikon bincike ta Intanet ba za a bayarwa ga asistin ba.

:::note
Binciken ta Intanet yana ƙara tsanani (latency) ga amsoshin saboda asistin dole ne ya jira sakamako na bincike kafin ya samar da amsa. Don ayyukan da ke buƙatar lokaci, ka yi la'akari ko bincike na gaba ɗaya ne mai zama, ko ilimin da yake cikin asistin ya fi dacewa.
:::
