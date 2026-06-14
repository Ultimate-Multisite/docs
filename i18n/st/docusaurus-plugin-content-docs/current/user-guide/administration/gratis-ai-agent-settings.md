---
title: Setso sa AI Agent a tšepo
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Setso sa AI Agent lebo

Kapa o ka setse setso sa AI Agent ka botsa.

Mora **Settings → Advanced** le ho ba lehlelo la leba la admin (administrator) ho fana ka tsela e ntle ea ho setsoa haholo ho diketso tsa ho ba leho le backend tse di fetileng haholo haholo haholo ha v1.5.0. Le lapa le lehlelo le li fana ka diketso tsa **Feedback Endpoint** le litse tsa ho ba lemo la ho ba lemo (expected format).

## Ho Ba Leha Settings

1. Ha le mo WordPress admin, fana ka **Gratis AI Agent → Settings**.
2. Leha **Advanced** (Advanced) tab e tsamaea.

## Feedback Endpoint Configuration

Le tshedi la fali (feedback endpoint) le tšoa ho sebelisa POST requests ho botsa le liti tse di fetang ho AI agent ha morao o ipotsa feedback ka lebaka la go tsamaya ka thaba e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e

| Sefa | Leano la URL le le fetang le sefalo sa fona (feedback) se fetang ka HTTP POST request le body ya JSON. |

| **API Key ea Feedback** | Se-bearer token sefetsang ka `Authorization` header ea tšepo ea feedback ea hau. Le hloekisa le hloka ha ho hloekise ha sefetsang. |

### Payload e Tšepo ea JSON

Ho fana'a le fetolelo la hau (feedback endpoint) ho ba le tšepo ya JSON le fa le fa litlhogo tse fapaneng tse di hlophisang:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Boetsope e ne e le tsela e teng ka mofuta o tsena.",
  "triage_category": "factual_error"
}
```

Ho na le fa faka mo payload, ho na le fa tsela e fanaang ka lebaka la bokao ba sebope.

### Tsela ea `triage_category`

Layer ea AI ya triage e rata isa kholo ea tsela ena ea `triage_category` pele e fanae mo payload:

| Tlhaloso | Maanoa a leboha |
|---|---|
| `factual_error` | Boitshwaro bo leboha ba ntlha e ne e le maanoa a leboha. |
| `unhelpful_answer` | Boitshwaro bo ne bo leboha, mme bo ne bo le tsela ya go thusa. |

### Hohoho (Authentication)

Hohoho, ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha (authentication) ba leboha. Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

**Ho Fana Ka Tsela E Fapaneng (Authentication)**

Ke tla re bolela ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha. Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

*   **Ho Fana Ka Tsela E Fapaneng (Authentication):** Ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.
    *   Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

Ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha. Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

*   **Ho Fana Ka Tsela E Fapaneng (Authentication):** Ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.
    *   Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

Ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha. Ke tla re bolela ka sebopeho sa ho fana ka tsela e fapaneng ea hore bohlokoa ba leboha ba leboha.

Ha o ka hloka authentication (authentication) ho fana, u rata ho setse tsela ya **Feedback API Key** le token ya bearer ea hau. Agent e sefana:

```
Authorization: Bearer <your-api-key>
```

Ha tsela ya **Feedback API Key** e le kholo (empty), ha ho fana `Authorization` header.

### Ho lapa le ho fana ka lipoto (Disabling Feedback Collection)

Lapa la **Feedback Endpoint URL** le **Feedback API Key** se fana ka tšepo. Le fa bohloko ba thumbs-down button le feedback UI ba hala, empa lipoto tsa lipoto (submissions) ha di fana ka ntlha e leng le sefapeng se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se fana ka setso se se f

## Brave Search API Key

Ha oona la **Advanced** tab, sefaka sehlopha sa **Brave Search API Key** sefaka bo lefetso la [Internet Search](../configuration/internet-search).

| Sefa | Leano la API la Brave Search |
|---|---|
| **Brave Search API Key** | Leano la API la hau loha mo dashboard ya Brave Search. Ho hlophisa ho feta lehlelo la internet mo ai (AI) assistant. |

Le lefa la fono le na le lapa le bonolo le le fetang ka sefalo sa Brave Search API sign-up page. Le fana ka sefalo le fetang ho feta ho ba le bohlokoa (blank) ho ho fana ka ho fana ka ho hlalosa (disable) ho hloboho la internet search.

Hlola [Internet Search](../configuration/internet-search) ho bona litshobelo tsa batho ba ntlha (end-user documentation) ho tsela eo.

## Feature Flags

Ho fana'a ka ho fana'a haholo ka v1.9.0, sefaka **Settings → Feature Flags** se fana ka toggles (sehlopho) ho tsela le litlhahlo tse di fetang ho ba le boikemisetso. Flag e nna ya gobaolwa kapa e a tsamaisang ho tle la setlo sa netfana; ho nna le sehlopho se fana ka setlo se fapaneng (per-site) se fana ka tsela eona.

### Ho fetola Feature Flags

Ho fetola Feature Flags, o tla u fana ka toggles tse di fetang ho ba le boikemisetso. Flag e nna ya gobaolwa kapa e a tsamaisang ho tle la setlo sa netfana; ho nna le sehlopho se fana ka setlo se fapaneng (per-site) se fana ka tsela eona.

1. Moramo (admin) ea WordPress, fana ka **Gratis AI Agent → Settings**.
2. Hlalosa seboetso sa **Feature Flags**.

### Ho Baetsi Ba Thuto (Access Control Flags)

| Flag | Default | Lehetseng |
|---|---|---|
| **Restrict to Administrators** | Off | Le fa le fetang, botsa ba leba le `administrator` le ka fana ka panel ya AI Agent chat. Ba leba ba bangata ba bona litlhahlo tsa "Contact your administrator".

| **Ho fana'a ho ba le ka Nnete (Network Admins)** | A | Ha e fana'a ka multisite network, ke Super Admins leba ba ba ka u sebelisa agent. Ba ba admins ea site e kholo ba ba hlokomisa. E reba ha "Restrict to Administrators" ha se e fana'a ho ba le ka Nnete. |

| **Tsauloa ho tsoalo ea subscriber** | Off | Ho ba lehle, baalope le rōlo ea `subscriber` ba ka sebelisa sehlopha sa chat, empa ba le thuto ea ho bala fela (ba ne ba le lilikong la ho fetola maikutlo a post kapa setso).

| **A re le ho fana ka ba ba ba neng ba le litswalo** | Off | Ho fana ka litswalo la Ultimate Multisite. Ha e le ho fana, chat ho fihlaa fa sites tse a nang le litswalo tsa ho ba le. |

### Branding Flags

| Flag | Default | Lehetseng |
|---|---|---|
| **Ho a fihla "Powered by Gratis AI Agent" Footer** | Off | Ho a fihla lina le fetang la tshedi le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le le fetang le

| **Lumela le Lihlobo la Morero** | *(blank)* | Ho fana ka leela la morero lehle (default) "Gratis AI Agent" mo sehlopha sa chat le mo menu ya admin le lela la hau le hau. Le hlalosa ho fana ka leela la default, ha u phele. |

| **Leka Morero ea Agent Picker** | Off | Le fa e le lehle, ba banga ha ba kae ho tsamaea petso tse lima tse di fetang. Agent e ntlha e ntse e tsoela ho eona e le e leng e le e le e leng e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e le e

| **Usa Sika Sebope ka Avatar ya Chat** | Afe | E sebope ea sika sa default sa AI mo header ya chat le sika sa WordPress (se fana ka ho setsoe ka Appearance → Customize → Site Identity). |

### Ho Setsoetsoetso

| **Ho Setsoetsoa** |
| :--- |
| [Link to relevant settings page] |

Ho fana **Save Settings** haholo fa u fetola ntho e ntse e le 'on' kapa 'off'. Fetletsetsi li fana ka tsela e le ntlha—ha ho hlokahali ho fana cache (cache flush) kapa ho refa plugin.
