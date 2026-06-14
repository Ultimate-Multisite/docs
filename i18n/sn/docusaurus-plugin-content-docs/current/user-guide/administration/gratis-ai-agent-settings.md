---
title: Zvinhu zveAI Agent settings zvakawanda
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Settings za AI Agent kwa Bure

Skrini ya **Settings → Advanced** kwenye Gratis AI Agent inakupa uwezo wa kuweka mipangilio ya kiwango cha msimamizi kwa ajili ya vipengele vya nyuma (backend integrations) vilivyowekwa katika v1.5.0. Ukurasa huu unatoa maelezo kuhusu sehemu za **Feedback Endpoint** na muundo wake unaotarajiwa.

## Kujumu kwenye Settings

1. Katika admin ya WordPress, nenda kwenda **Gratis AI Agent → Settings**.
2. Bonyeza tab ya **Advanced**.

## Kuweka Mipangilio ya Feedback Endpoint

Feedback endpoint inapokea POST requests kutoka kwa AI agent kila wakati mtumiaji anapotoa maoni kupitia kitufe cha thumbs-down, banner ya auto-prompt, au amri `/report-issue`.

| Field | Maelezo |
|---|---|
| **Feedback Endpoint URL** | URL inayopokea maombi ya feedback kama POST requests yenye mwili (body) wa JSON. |
| **Feedback API Key** | bearer token inatumiwa kwenye header ya `Authorization` ya kila ombi la feedback. Iacha tupu ikiwa endpoint yako haihitaji uthibitisho (authentication). |

### Payload ya JSON Inayotarajiwa

Feedback endpoint yako lazima iweze kukubali mwili wa JSON wenye angalau sehemu zifuatazo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jibu lilikuwa lisilokubalika kuhusu bei.",
  "triage_category": "factual_error"
}
```

Sehemu zingine zinaweza kuwepo kwenye payload kulingana na muktadha wa mazungumzo.

### Matokeo ya `triage_category`

Layer ya triage ya AI inatoa moja kati ya matokeo haya kwa `triage_category` kabla ya kuwasilisha payload:

| Value | Maana |
|---|---|
| `factual_error` | Msaidizi alitoa habari isiyofaa kiufundi. |
| `unhelpful_answer` | Jibu lilikuwa sahihi kimaufundi lakini halikuwa na msaada. |
| `inappropriate_content` | Jibu lilikuwa na maudhui ambayo hayapaswi kuonyeshwa kwa watumiaji. |
| `other` | Maoni hayakutana na kategoria iliyojulikana. |

### Uthibitishaji (Authentication)

Kana uri vhizha kana endpoint yako inoda authentication (kufamba nekuona kuti unenge wose), chibvumira **Feedback API Key** kuva nebearer token yako. Agent inenge inenge inenge inenge ine iye:

```
Authorization: Bearer <your-api-key>
```

Kana **Feedback API Key** field ine kana, hauri header ya `Authorization` inenge inenge isendeki.

### Kuva Feedback Collection (Kutenga/Kusimbisa)

Ramba zvakasiya fields dziri **Feedback Endpoint URL** uye **Feedback API Key** dzinenge dziri ne. Button ya thumbs-down uye UI ya feedback dziri dziri kuona kwemudzidzi, asi submissions hazvazovaka ku service yose yakachengetedza.

## Brave Search API Key

Panguvauri **Advanced**, field ya **Brave Search API Key** inenge inenge inenge inenge ine zvinenge zvinhu dziri kuita [Internet Search](../configuration/internet-search).

| Field | Chirevo |
|---|---|
| **Brave Search API Key** | API key yako yakanzvimbo raine Brave Search developer dashboard. Inoda kuti uwe internet search munenge wose we AI assistant. |

Chirevo chefieldi chinoratidza link inoshandiswa ku sign-up page ya Brave Search API. Ramba ne kana ine, unenge ukavira internet search.

Simbisa [Internet Search](../configuration/internet-search) kuti uone documentation yakagadzirwa kwemudzidzi pamusoro pefeature iyi.

## Feature Flags (Mavhizha Efeature)

Inenge inenge yakaedza vachida m v1.9.0, tab ya **Settings → Feature Flags** inenge ine toggle switches dziri kuita zvinhu zvinoda. Flag dzese dzinenge dzine chii: dziri munenge dzine (enabled) kana dziri dzakavira (disabled) munenge wose we network; hauri override yechikuru chesite mune nguva iyi.

### Kuona Feature Flags

1. Mu WordPress admin, ndaenda ku **Gratis AI Agent → Settings**.
2. Chibvumira tab ya **Feature Flags**.

### Access Control Flags

| Flag | Default | Maombva |
|---|---|---|
| **Restrict to Administrators** | Off | Izvisira Kune Vadeya |
| **Restrict to Network Admins** | Off | Izvisira Kune Vadeya Rudo |
| **Allow Subscriber Access** | Off | Kubvura Kune Vadeya** |
| **Disable for Non-Members** | Off | Kupfura Kune Vadeya Vakuru |

### Branding Flags

| Flag | Default | Maombva |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Kupfura "Gratis AI Agent" Footer |
| **Custom Agent Name** | *(blank)* | Zitaina Zitaina Agent |
| **Hide Agent Picker** | Off | Kupfura Agent Picker |
| **Use Site Icon as Chat Avatar** | Off | Kutsa Site Icon Kune Chat Avatar |

### Applying Changes

Chirara **Save Settings** panguva uchigadzira flag. Mutaura inenge inotora chokwadi — hauna kuitira cache kana kuita plugin kubva.
