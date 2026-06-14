---
title: Cilësimet e Agjentit AI Gratis
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Caktimet e Agjentit AI Gratis

Ekranin **Settings → Advanced** në Gratis AI Agent ofron konfigurime me nivel administrator për integrimet e pasme të hyrë në v1.5.0. Ky faqje dokumenton fushën **Feedback Endpoint** dhe formatin e pritshëm i saj.

## Aksesi në Settings

1. Në panelin e administratorit të WordPress, shko te **Gratis AI Agent → Settings**.
2. Kliko te tab-i **Advanced**.

## Konfigurimi i Pikat e Kthimit (Feedback Endpoint)

Endpointi i feedback-it merr kërkesa POST nga agjenti AI çdo herë që një përdorues dërgon feedback duke shtypur butonin me gishtin të ulur (thumbs-down), bannerin e auto-prompt-it, ose komandën `/report-issue`.

| Fushë | Përshkrimi |
|---|---|
| **URL-ja e Pikatit të Feedback-it** | URL-ja që merr dërgimet e feedback-it si kërkesa HTTP POST me një trupë JSON.

| **API Key për Feedback** | Një token i autorizimit (bearer token) që dërgohet në headerin `Authorization` të çdo kërkesë feedback. Lëreni të zbrazët nëse endpoint-i juaj nuk kërkon autentifikim. |

### Përdorimi i JSON Payload-it të Pritshëm

Pikat tuaja të feedback-it duhet të pranojnë një trupë JSON me të paktën këto fusha:

{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Përgjigjja ishte e gabuar rreth çmimeve.",
  "triage_category": "factual_error"
}

Mund të ketë fusha shtesë në payload, në varësi të kontekstit të bisedës.

### Vlera për `triage_category`

Lira e triazhit (triage layer) e AI-s së vendos një nga këto vlerë për `triage_category` para se të dërgojë payload-in:

| Vlera | Kuqyrja |
|---|---|
| `factual_error` | Asistenti ofrua informacion faktik të gabuar. |
| `unhelpful_answer` | Përgjigja ishte teknikisht e saktë por nuk u shërbeu. |

### Autentikimi (Authentication)

Nëse endpoint-i ju kërkon autentifikim, vendosni fushën **Feedback API Key** me tokenin tuaj bearer. Agjenti dërgon:

```
Authorization: Bearer <your-api-key>
```

Nëse fusha **Feedback API Key** është e zbrazët, nuk do të dërgohet asnjë header `Authorization`.

### Ndalimi i Mbledhjes të Feedback-it

Lëreni të dy fushat e **Feedback Endpoint URL** dhe **Feedback API Key** të zbrazëta (të paka). Butoni me thumbs-down dhe interfejsi i feedback-it mbeten të dukshëm për përdoruesit, por dorën e dëshirave nuk dërrohen në asnjë shërbim të jashtëm.

## Claviera API për Kërkimin e Brave

Gjithashtu në tabin **Advanced**, fusha **Brave Search API Key** ju lejon të përdorni aftësinë e kërkimit në internet [Internet Search](../configuration/internet-search).

| Fushë | Përshkrimi |
|---|---|
| **Brave Search API Key** | Klavejke e API-së nga Brave Search developer dashboard. E nevojshme për të aktivizuar kërkimin në internet në asistentin AI.

Etiketi i fushës përfshin një link klikues drejt faqes së regjistrimit të Brave Search API. Lëreni të zbrazët për të deaktivizuar kërkimin në internet.

Shikoni [Kërkimi në Internet](../configuration/internet-search) për dokumentacionin e përdoruesve mbi këtë veçori.

## Feature Flags

Në v1.9.0 u shtua edhe tab-i **Settings → Feature Flags**, i cili ofron ndryshues (toggle switches) për funksionalitete opsionale. Çdo flag është ose aktiv në të gjithë rrjetin, ose i deaktivuar; aktualisht nuk ka mjet për të e ndryshuar këtë nivel për çdo faqe (per-site override).

### Aksesi në Feature Flags

1. Në panelin administrator të WordPress, shko te **Gratis AI Agent → Settings**.
2. Kliko te tab-i **Feature Flags**.

### Feature Flags për Kontrollin e Qasjes (Access Control Flags)

| Band | Viforueshëm për Administratorë | Kur është i aktivizuar, vetëm përdoruesit me rolin `administrator` mund të hapin paneli i bisedës AI Agent. Të gjithë rolet e tjera shohin mesazhin "Kontaktoni administratorin tuaj". |

| **Restiko në Administratorët e Alojimit (Network Admins)** | I Ofor | Kur kjo është e aktivizuar në një rrjet multisite, vetëm Super Adminët mund të përdorin agentin. Administratorët individualë të saj janë bllokuar. Kjo ka prioritet mbi "Restikimin në Administratorë" nëse të dy janë të aktivizuar. |

| **Lejojim akses për abonentë** | I Ofor | Kur është i aktivizuar, përdoruesit me rolin `subscriber` mund të përdorin interfejsin e bisedës por janë të kufizuar në aftësitë e leximit vetëm (nuk mund të krijojnë postime ose ndryshojnë cilësimet). |

| **Për të i ndaluar për jo-anëtari** | I Ndaluar | Integruar me statusin e anëtarisë të Ultimate Multisite. Kur është i aktivizuar, biseda (chat) fshihet për ato loja që nuk kanë një anëtarësi aktive. |

### Flaga të Markës

| Band | Viforueshja e "Powered by Gratis AI Agent" në footer | Përshkrim | Zbejnë linjën e atribucionit të markës që shfaqet në fundin i pajisjes së bisedës (chat widget). Rekomandohet për implementime me etiketë të bardha. |

| **Emri i Agjentit Personalizuar** | *(zgjidhja e zbrazët)* | Zëvendëson etiketën e paracaktuar "Gratis AI Agent" në kornizën e bisedës dhe menyn admin me emrin tuaj të produktit. Lëreni të zbrazët për të përdorur atë standarde. |

| **Fsheh Zgjatjen Agjentit** | I Ndryshues (Off) | Kur është i aktivizuar, përdoruesit nuk mund të ndërrojnë midis pesë agjentëve të integruar. Agjenti aktual mbetet fiksuar në atë që është konfiguruar si paradat në Settings → General. |

| **Përdor Ikona të Sitetin si Avatar i Bisedës** | I Ofor | Zëvendëson ikonën e paracaktuar AI në kabinetin e bisedës me ikonën e sitit WordPress (përfaqësohet në Aparanca → Personalizo → Identiteti i Sitetit). |

### Aplikimi i Ndryshimeve

Klikoni **Save Settings** pas që ndryshoni çdo flag. Ndryshimet hyn në fuqi menjëherë – nuk keni nevojë të fshini cache ose të riaktivizoni pluginin.
