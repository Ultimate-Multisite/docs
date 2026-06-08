---
title: Mipangilio ya Agent ya AI Bure
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Mipangilio ya Gratis AI Agent

Sehemu ya **Settings → Advanced** katika Gratis AI Agent inatoa mipangilio ya kiwango cha msimamizi kwa ajili ya viunganisho vya backend vilivyotambulishwa tangu v1.5.0. Ukurasa huu unadokeza sehemu za **Feedback Endpoint** na muundo unaotarajiwa wa data.

## Kupata Mipangilio

1. Katika admin ya WordPress, nenda kwa **Gratis AI Agent → Settings**.
2. Bonyeza kichupo cha **Advanced**.

## Mipangilio ya Feedback Endpoint

Feedback endpoint inapokea maombi ya POST kutoka kwa agent wa AI kila unapomtumia mtumiaji maoni kupitia kitufe cha kidole kinachoshuka (thumbs-down button), banner ya auto-prompt, au amri ya `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Hii ni URL inayopokea maoni kama maombi ya HTTP POST yenye mwili wa JSON. |
| **Feedback API Key** | Ni token ya bearer inayotumwa katika kichwa cha `Authorization` cha kila ombi la feedback. Wacha sehemu iwe tupu ikiwa endpoint yako haihitaji uthibitisho. |

### JSON Payload Inayotarajiwa

Feedback endpoint yako lazima ipokee mwili wa JSON wenye angalau sehemu zifuatazo:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Jibu lilikuwa si sahihi kuhusu bei.",
  "triage_category": "factual_error"
}
```

Sehemu zingine zinaweza kuwepo katika payload kulingana na muktadha wa mazungumzo.

### Thamani za `triage_category`

Tabaka la AI la usimamizi wa maoni (triage layer) linatoa moja ya thamani zifuatazo kwa `triage_category` kabla ya kutuma payload:

| Value | Meaning |
|---|---|
| `factual_error` | Msaidizi alitoa habari za kweli ambazo zilikuwa za uwongo. |
| `unhelpful_answer` | Jibu lilikuwa sahihi kiufundi lakini halikuwa na manufaa. |
| `inappropriate_content` | Jibu liliwa na maudhui ambayo hayapaswi kuonyeshwa kwa watumiaji. |
| `other` | Maoni hayakutana na kategoria inayojulikana. |

### Uthibitisho (Authentication)

Ikiwa endpoint yako inahitaji uthibitisho, weka sehemu ya **Feedback API Key** kwa token yako ya bearer. Agent anatuma:

```
Authorization: Bearer <your-api-key>
```

Ikiwa sehemu ya **Feedback API Key** ni tupu, hakuna kichwa cha `Authorization` kinachotumwa.

### Kuzima Kukusanya Maoni

Wacha sehemu zote za **Feedback Endpoint URL** na **Feedback API Key** ziwe tupu. Kitufe cha kidole kinachoshuka na UI ya maoni bado zinaonekana kwa watumiaji, lakini maombi hayatutumiwi kwa huduma yoyote ya nje.

## Brave Search API Key

Pia kwenye kichupo cha **Advanced**, sehemu ya **Brave Search API Key** inafungua uwezo wa [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | API key yako kutoka kwa dashibodi ya watengenezaji wa Brave Search. Inahitajika kuwezesha utafutaji wa mtandao katika msaidizi wa AI. |

Jina la sehemu lina kiungo kinabonyezwa kwenda ukurasa wa kujisajili kwa Brave Search API. Wacha iwe tupu ili kuzima utafutaji wa mtandao.

Tazama [Internet Search](../configuration/internet-search) kwa hati kwa mtumiaji wa mwisho kuhusu kipengele hiki.

## Feature Flags

Pia zilizotambulishwa katika v1.9.0, kichupo cha **Settings → Feature Flags** kinatoa swichi za kuwasha/kuzima kwa ajili ya utendaji wa hiari. Kila bendera (flag) inaweza kuwimwa au kuzimwa kwa kiwango chote; hakuna kubadilisha kwa kiwango cha tovuti moja kwa sasa.

### Kupata Feature Flags

1. Katika admin ya WordPress, nenda kwa **Gratis AI Agent → Settings**.
2. Bonyeza kichupo cha **Feature Flags**.

### Feature Flags za Udhibiti wa Ufikiaji (Access Control Flags)

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Wakizimwa, ni watumiaji wenye jukumu la `administrator` tu wanaoweza kufungua panel ya mazungumzo ya AI Agent. Njia zingine zote zinaona ujumbe wa "Wasiliana na msimamizi wako." |
| **Restrict to Network Admins** | Off | Wakizimwa kwenye mtandao wa multisite, ni Super Admins tu wanaweza kutumia agent. Wasimamizi wa tovuti moja wamezuiliwa. Hii inapita juu ya "Restrict to Administrators" ikiwa zote mbili zimezimwa. |
| **Allow Subscriber Access** | Off | Wakizimwa, watumiaji wenye jukumu la `subscriber` wanaweza kutumia kiolesura cha mazungumzo lakini wanapunguzwa kwa uwezo wa kusoma tu (hakuna uundaji wa chapisho au mabadiliko ya mipangilio). |
| **Disable for Non-Members** | Off | Inajumuishwa na hali ya ushciamano wa Ultimate Multisite. Wakizimwa, mazungumzo yanaficha kwa tovuti ambazo hazina ushciamano hai. |

### Feature Flags za Ujenzi wa Chapa (Branding Flags)

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Inatoa mstari wa utambulisho unaoonyeshwa chini ya widget ya mazungumzo. Inapendekezwa kwa uwekaji wa white-label. |
| **Custom Agent Name** | *(blank)* | Inabadilisha jina la kiwango cha "Gratis AI Agent" katika kichwa cha mazungumzo na menyu ya admin na jina lako la bidhaa. Wacha iwe tupu kutumia chaguo la kiwango. |
| **Hide Agent Picker** | Off | Wakizimwa, watumiaji hawawezi kubadilisha kati ya agents tano zilizojengwa. Agent ya sasa inabaki kwenye kile kilichowekwa kama chaguo la kiwango katika Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Inabadilisha icon ya AI ya kiwango katika kichwa cha widget ya mazungumzo na icon ya tovuti ya WordPress (iliyowekwa chini ya Appearance → Customize → Site Identity). |

### Kutumia Mabadiliko

Bonyeza **Save Settings** baada ya kubadilisha bendera yoyote. Mabadiliko yanatumika mara moja — hakuna kufuta cache au kuwasha upya plugin inayohitajika.
