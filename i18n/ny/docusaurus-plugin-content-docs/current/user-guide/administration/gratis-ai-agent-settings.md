---
title: Mawone AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Settings za AI Agent wa Bure

Skrini ya **Settings → Advanced** ya Gratis AI Agent inakupa uwezo wa kuweka mipangilio ya kiwango cha msimamizi kwa ajili ya vipengele vya nyuma (backend integrations) vilivyowekwa katika v1.5.0. Ukurasa huu unatoa maelezo kuhusu sehemu za **Feedback Endpoint** na muundo wake unaotarajiwa.

## Kujua Settings

1. Katika admin ya WordPress, nenda kwenye **Gratis AI Agent → Settings**.
2. Bonyeza tab ya **Advanced**.

## Kuweka Mipangilio ya Feedback Endpoint

Feedback endpoint inapokea POST requests kutoka kwa AI agent kila wakati mtumiaji anapotoa maoni kupitia kitufe cha "thumbs-down", banner ya auto-prompt, au amri `/report-issue`.

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
  "feedback_text": "Jibu lilikuwa lisilo sahihi kuhusu bei.",
  "triage_category": "factual_error"
}
```

Sehemu nyingine zinaweza kuwepo kwenye payload kulingana na muktadha wa mazungumzo.

### Thamani za `triage_category`

Layer ya AI inachagua moja kati ya thamani hizi kwa `triage_category` kabla ya kuwasilisha payload:

| Value | Maana |
|---|---|
| `factual_error` | Msaidizi alitoa habari isiyo sahihi. |
| `unhelpful_answer` | Jibu lilikuwa sahihi kiufundi lakini halikuwa na msaada. |
| `inappropriate_content` | Jibu lilikuwa na maudhui ambayo hayapaswi kuonyeshwa kwa watumiaji. |
| `other` | Maoni hayakutafiti katika kategoria iliyojulikana. |

### Uthibitishaji (Authentication)

Muli muli, muli muli!

Kung mwamba wanuwamba (endpoint) umayamba naliye mwamba (authentication), muli muwamba wanuwamba **Feedback API Key** muliye kuliye na token wanuwamba (bearer token). Muliye muliye:

```
Authorization: Bearer <your-api-key>
```

Kung **Feedback API Key** umayamba, hakumbiri `Authorization` header haitendwa.

### Kutsira Feedback Collection

Muliye muwamba wanuwamba (Feedback Endpoint URL) na **Feedback API Key** muliye kuliye. Button ya thumbs-down na UI ya feedback zikukumbirira kwa users, koma zikuperekera ku service yotaliye.

## Brave Search API Key

Muliye mu tabu ya **Advanced**, **Brave Search API Key** umayamba ufunika ufunika [Internet Search](../configuration/internet-search) ufunika.

| Field | Mwayi |
|---|---|
| **Brave Search API Key** | Api key yanuwamba ku dashboard ya Brave Search developer. Umayamba kuti muliye ufunika internet search mu AI assistant. |

Mwayi wanuwamba umayamba link yotaliye ku Brave Search api sign-up page. Muliye kuliye kuti ututse internet search.

Muliye [Internet Search](../configuration/internet-search) muliye documentation ya users ku feature iyi.

## Feature Flags

Umayamba mu v1.9.0, **Settings → Feature Flags** umayamba toggle switches (mwayi wamwamba) kuti functionality yotaliye. Kuti flag imwezi imayamba kapena imayamba network-wide; hakukuna override ya per-site muliye.

### Kupeza Feature Flags

1. Mu WordPress admin, muliye mu **Gratis AI Agent → Settings**.
2. Muliye mu tabu ya **Feature Flags**.

### Access Control Flags

| Flag | Default | Maulonda |
|---|---|---|
| **Restrict to Administrators** | Off | Pamene muli, pamene ndi wosangalala (administrator) matuonse kuti awonje panel ya AI Agent chat. Wosangalala wosiyanasiyana anayamba kuona meseji "Fonetsera wosangalala wanu". |
| **Restrict to Network Admins** | Off | Pamene ikuyenera m'muli wosiyanasiyana (multisite network), pamene ikuyenera, matuonse ndi Super Admins matuonse kuti awonje agent. Wosangalala wa site wosiyanasiyana amapangidwa. Iyi imapereka mphamvu kuposa "Restrict to Administrators" ngati zambiri zimene zikuyenera. |
| **Allow Subscriber Access** | Off | Pamene ikuyenera, wosangalala (subscriber) anayamba kuwunje interface ya chat komwe amapereka ulemu monga chifukwa cha kukhala ndi ulemu (read-only abilities) (samapereka kupanga posts kapena kusintha settings). |
| **Disable for Non-Members** | Off | Iyi ikuyenera ndi Ultimate Multisite membership status. Pamene ikuyenera, chat limapangidwa kwa sites zomwe si mungakhale ulemu wosangalala (membership) woperekedwa. |

### Branding Flags

| Flag | Default | Maulonda |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Limapangidwa lalikulu la chithunzi lomwe limapereka m'muli ya chat. Limapangidwa kuti muli wosangalala (white-label deployments). |
| **Custom Agent Name** | *(blank)* | Limapereka m'chithunzi cha agent lalikulu m'chat header ndi admin menu ndi dzina lanu la chinthu. Simapereka ngati muli wosangalala (default). |
| **Hide Agent Picker** | Off | Pamene ikuyenera, anthu siwanje kusintha monga m'muli ya agents m'mili imodzi. Muli wa agent wosiyanasiyana umapereka monga momwe umaperekedwa m'Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Limapangidwa lalikulu la AI m'chat widget header limapereka chithunzi cha site ya WordPress (limaperekedwa m'Appearance → Customize → Site Identity). |

### Applying Changes

Muli **Save Settings** poyenera kusintha yofunsa yotani. Zomwe zimene zikuyenera kumukonza m'mili — samapereka kukhala ndi cache kapena kuyesa plugin.
