---
title: Gratis AI Agentinnstillingar
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Innstillingar

Skjermen **Innstillinger → Avansert** í Gratis AI Agent hefur administratorinnstillingar for bakgrunnsintegrasjonir som vart innført i v1.5.0. Þessi síða skýrðir **Feedback Endpoint** felta og þeim fyrirhugað formét.

## aðgang til Innstillingum

1. Í WordPress admin, gætið í **Gratis AI Agent → Innstillingar**.
2. Klikkað á flugbúnaðinn **Avansert**.

## Innstillingar fyrir Feedback Endpoint

Feedback endpoint tekur POST-skjalði frá AI agent þegar notari sender feedback með því að trykkja á knaprannar (thumbs-down) knapp, sjálfskiptu banneri eða kommando `/report-issue`.

| Felt | Skýring |
|---|---|
| **Feedback Endpoint URL** | URL sem tekur við feedback skjalði sem HTTP POST skjaldi með JSON body. |
| **Feedback API Key** | Bearer token sem sendist í `Authorization` header fyrir hvert feedback skjaldi. Látðu það blankt ef endpoint þinn ekki krefst aukna samþykki (authentication). |

### Fyrirhugaður JSON Skjaldi

Þin feedback endpoint verður að taka við JSON body með mínst eftirfarandi felta:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Svarinn var órétt um setningu.",
  "triage_category": "factual_error"
}
```

Aðgerðarfeldi gæti verið til staðar í skjalðinu eftir samhengi samtalins.

### Verði fyrir `triage_category` Gildi

AI triage laginn gefur einn af eftirfarandi gildi við `triage_category` áður en það sendir skjaldið:

| Gildi | Meining |
|---|---|
| `factual_error` | Hjálparinn gaf órétta upplýsingar um sanningu. |
| `unhelpful_answer` | Svarinn var tæknilega réttur en ekki hlekkandi. |
| `inappropriate_content` | Svarinn innehildi innihald sem þarf að vera í raun ekki sýnt fyrir notendur. |
| `other` | Feedbackinn fór ekki við munaðan gildi. |

### Samþykki (Authentication)

Ef þitt endpunkt krefst auðkenningu, setji **Feedback API Key** fältið settur á þennan bearer token. Agéntinn sendir:

```
Authorization: Bearer <your-api-key>
```

Ef **Feedback API Key** fältið er beint, sendist ekki `Authorization` header.

### Afskjálningu Feedback samleðar

Látui bæði **Feedback Endpoint URL** og **Feedback API Key** fälta beint. Þúkki ábyrðin (thumbs-down button) og UI fyrir feedback eru framkvæmdar fyrir notendur, en innsendingar eru ekki sendar til efnilega þess hvar.

## Brave Search API Key

Eftir sama á **Advanced** tabinn, gerir **Brave Search API Key** fältið möguleika að nota [Internet Search](../configuration/internet-search).

| Fält | Áskipti |
|---|---|
| **Brave Search API Key** | Þín API key frá Brave Search developer dashboard. Nauðsynleg til að aktíva internet search í AI assistant. |

Miðlunin fältarinn hefur einn klikkjanlegan link á síðuna fyrir Brave Search API sign-up. Látui beint til að afskjálna internet search.

Sjá [Internet Search](../configuration/internet-search) fyrir niðurstaða notenda um þennan eiginleika.

## Feature Flags

Eftir sama innført í v1.9.0, gerir **Settings → Feature Flags** tabinn til að setja skiptaþögnar (toggle switches) fyrir valfærð möguleikaliðferli. Hvert flag er eða aktíva eða afskjálna nálægt netinu; ekki er það yfirskjaldandi á síðu í þessum tíma.

### Til að hleðja Feature Flags

1. Í WordPress admin, ferst til **Gratis AI Agent → Settings**.
2. Klikkað á tabinn **Feature Flags**.

### Access Control Flags

| Flag | Default | Áskildur |
|---|---|---|
| **Begjarnir að Administratorum** | Off | Þegar þetta er á, geta einungjar með `administrator` rólum opna AI Agent chat panelinn. Allir öðlingar sjá texta sem segir "Vinsandi við administratorann þinni". |
| **Begjarnir að Netverkstjórnarmönnum** | Off | Þegar þetta er á í multisite netverkinu getur einungis Super Admins nota agentinn. Innangur smávarðmanna einstaklingssitustu er hönnuð. Þetta hefur fyrir vágmark á "Begjarnir að Administratorum" ef það er á bæði. |
| **Leita að Subscriber Access** | Off | Þegar þetta er á, geta notendur með `subscriber` rólum nota chat-menureinnu en eru takmarkað til lesunar (engin skráning eða breytingar). |
| **Skipti frá fyrir ekki lánamaður** | Off | Inniheldur tengingu við membership status Ultimate Multisite. Þegar þetta er á, er chat hýrt fyrir situstu sem hefur ekki aktivt lánamaðurskap. |

### Branding Flags (Áskildar merki)

| Flag | Default | Áskildur |
|---|---|---|
| **Skipti frá "Powered by Gratis AI Agent" Footer** | Off | Fjármunir þessari merki í undirskrifum við botnin chat-menureinni. Til að nota þetta er á meðal til að gera situstu sérstaka. |
| **Sérstakt nafn fyrir Agentinn** | *(tommt)* | Erstatt almennum nafni "Gratis AI Agent" í hvarfari upphafsmenureinni og administrator-menú með eiga nafninu. Látið það tommt til að nota almenna nafninu. |
| **Skipti frá Valgandi Agentinn** | Off | Þegar þetta er á, geta notendur ekki skipti milli af fimm innbyggðum agentum. Notkun dagseturðar agentar er fastsett í það sem er sett sem vágmark í Settings → General. |
| **Noti Situstu Íkoninn sem Chat Avatar** | Off | Erstatt almennum AI-íkoninni í hvarfari upphafsmenureinni með íkon situstu WordPress (setur undir Appearance → Customize → Site Identity). |

### Áskiptum breytingum

Klikkið á **Save Settings** eftir að skipta á öllum flaggum. Breytingar virka strax — þú þarft ekki að flúta cache eða vakna plugin.
