---
title: Nemokami AI agentų nustatymai
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Ulangios AI Agent nustatymai

Ekranas **Settings → Advanced** Gratis AI Agent suteikia administratorio lygio konfigūracijos backend integracijoms, įvedžiamos v1.5.0 versijoje. Šiame puslapyje dokumentuojami laukelis **Feedback Endpoint** ir jų tikėtas formatas.

## Nustatymų pasiekimas

1. WordPress admin'e eikite į **Gratis AI Agent → Settings**.
2. Paspauskite **Advanced** (Paskutinis) tvarka.

## Feedback Endpoint konfigūracija

Feedback endpoint priima POST užklausas iš AI agento kiekvienai kartui, kai vartotojas pateikia atsiliepimą per "šaltinio" mygtuką (thumbs-down), automatinį pranešimo žinutę ar komandą `/report-issue`.

| Laikelis | Aprašymas |
|---|---|
| **Feedback Endpoint URL** | URL, kurio priima atsiliepimų pateikimus kaip HTTP POST užklausas su JSON kūnu. |
| **Feedback API Key** | Bearer token, siųstas kiekvienam atsiliepimo užklausai `Authorization` galutinėje lauke. Palikite laukelį tuščia, jei jūsų endpoint ne reikalauja autentifikacijos. |

### Tikėtas JSON payload

Jūsų feedback endpoint turi priimti JSON kūną su šiais laikais minimaliai:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Atsakymas buvo netinkamas dėl kainos.",
  "triage_category": "factual_error"
}
```

Payloadui gali būti pateikti papildomi laukeliai, prieldant kontekstui.

### `triage_category` vertės

AI triažo lygis nurodo vieną iš šių vertę `triage_category` prieš siuntant payload:

| Vertė | Reikalavimas |
|---|---|
| `factual_error` | Asistentas pateikė netinkamą faktinę informaciją. |
| `unhelpful_answer` | Atsakymas techniškai teisingas, bet nėra naudingas. |
| `inappropriate_content` | Atsakymo turėjo turinį, kurį negali parodyti vartotojams. |
| `other` | Atsiliepimas neatsivaizdžiam žinomai kategorijai. |

### Autentifikacija

Jei jūsų endpoint reikalauja autentifikacijos, nustatykite laukelį **Feedback API Key** savo bearer tokenui. Agentas išsiųsa:

```
Authorization: Bearer <jūsų-api-key>
```

Jei laukelis **Feedback API Key** yra tuščias, nebus siųstas `Authorization` headeris.

### Feedback laiko uždarymas

Palikykite tiek laukelį **Feedback Endpoint URL**, tiek laukelį **Feedback API Key** tuščiais. Jaublio (thumbs-down) mygtukas ir UI pateikimo likimas bus matomi vartotojams, bet pateikimai nebus siunami į kurį nors išorį paslaugą.

## Brave Search API Key

Taip pat **Advanced** paveikslėlyje laukelis **Brave Search API Key** leidoja [Internet Search](../configuration/internet-search) galimybę naudoti internet paiešką.

| Laukelis | Aprašymas |
|---|---|
| **Brave Search API Key** | Jūsų API key iš Brave Search developer dashboardo. Reikalaujama, kad įjungtumėte internet paiešką AI asistentui. |

Laukelio etiketėje yra paspaudžiamas nuoroda į svetainę registracijos Brave Search API. Palikykite tuščias, jei norite išjungti internet paiešką.

Pateikime [Internet Search](../configuration/internet-search) dokumentaciją vartotojams apie šią funkciją.

## Feature Flags (Funkciniai žyginiai)

Taip pat įdėta v1.9.0 versijoje, paveikslėlyje **Settings → Feature Flags** pateikiama mygtukų svyresys (toggle switches) opcionalioms funkcijoms. Kiekvienas žyginis yra arba įjungtas, arba išjungtas visame tinklu; šiuo metu nėra per-site override'o (per site nustatymo).

### Priešdarymas Feature Flags

1. WordPress admin paveikslėlyje eikite į **Gratis AI Agent → Settings**.
2. Spauskite **Feature Flags** paveikslėlį.

### Access Control Flags

| Flag | Default | Opis |
|---|---|---|
| **Ogranodėti dožmeniu administratoriams** | Off | Jei įjungtas, tik vartotojai su `administrator` vaidmeniu gali atidaryti AI Agento čatis panelį. Kiti visi vaidmeniai matys pranešimą „Susisiekti su administratoriumi“. |
| **Ogranodėti tinklo administratoriams** | Off | Jei įjungtas multisite tinklu, tik Super Administratoriai gali naudoti agentą. Individualių svetainų administratoriai blokuojami. Tai prioritetas prieš „Ogranodėti dožmeniu administratoriams“, jei bus įjungti abi nustatymai. |
| **Leisti abonentams prieigą** | Off | Jei įjungtas, vartotojai su `subscriber` vaidmeniu gali naudoti čatis svetainėje, tačiau jų galimybės bus apribotu tik skaitymo (nėra įtraukimo kūrimo ar nustatymų keitimo). |
| **Išjungti neįsakymai** | Off | Integruojama su Ultimate Multisite abonentų statusu. Jei įjungtas, čatis bus paslėptus svetainose, kurioms nėra aktyvios abonentos. |

### Brendavimo flags

| Flag | Default | Opis |
|---|---|---|
| **Paslėpti „Pagalba pateikta Gratis AI Agentas“ pagrindinė juosta** | Off | Išdaro pranešimą apie prekės ženklą, esantį čatis widgeto apačioje. Rekomenduojama šiuose atvejais, kai naudojami švarus (white-label) sprendimai. |
| **Pridėti pritaikytą agentų vardą** | *(laikiai)* | Prideda savo prekės žymę į čatis meniu ir administratoriaus meniu, atitinkantį jūsų produktą. Palikykite laikinai laiku, jei norite naudoti pagrindinį „Gratis AI Agentas“. |
| **Paslėpti agentų pasirinkimo mygtuką** | Off | Jei įjungtas, vartotojai negali keisti tarp vienos built-in agentų. Dabartinis agentas bus fiksuotas pagal tai, kas nustatytas kaip pagrindinis nustatymas „Settings → General“. |
| **Naudoti svetainės ikoną kaip čatis avataro** | Off | Prideda WordPress svetainės ikoną į čatis widgeto apačioje (nustatoma „Appearance → Customize → Site Identity“). |

### Keisimų taikymas

Spauskite **Save Settings** po kiekvienos flags pakeitimo. Pakeitimai įvyksta iš karto – ne reikia atšvęsti keščiui ar veikti pluginą.
