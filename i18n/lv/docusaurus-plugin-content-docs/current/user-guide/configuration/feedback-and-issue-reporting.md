---
title: Klientu atsauksmes un problēmu ziņošana
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Klientu atsauksmes un problēmu ziņošana

Gratis AI Agent v1.5.0 ieviesta sistēmas, kas ļauj lietotājiem tieši no čata interfeisa norādīt nepalīdzīgas atbildes un ziņot par problēmām. Šajā sistēmā ir piekrišanas pārvaldība, automātiskais ziņošanas komandas veiksmiņš un AI palīdzētais triējums (triage) serverstrānā.

## Pēc "Ne" (Thumbs-Down) pogas {#thumbs-down-button}

Katras atbildes, ko sulaic AI asistentas nosūtīts, parādās **poga ar "ne" (👎)**. Kad lietotājs to sulaic, viņš var norādīt atbildi kā nepalīdzīgu vai nepareizu.

- Poga parādās uz kursora virs katras asistentas ziņojuma.
- Sulaicēto poga atver **Atsauksmes piekrišanas modālu (Feedback Consent Modal)**.
- Atsauksmes tiek saistītas ar sarunas strāvu un konkrētu ziņojumu.

## Atsauksmes piekrišanas modāls (Feedback Consent Modal) {#feedback-consent-modal}

Kad lietotājs sulaic "ne" pogu, pirms jebkāda dānu nosūtīšanās, parādās piekrišanas modāls. Modāls:

- Izjaucas, kāda informācija tiks savainota (sarunas izziņa, brauzera konteksts).
- Lūdz lietotāju apstāt, vai viņš piekrīt dalīties ar šai informāciju.
- Piedāvā brīvu tekstas lauku, kur lietotājs var aprakstīt, kas notika nepareizi.
- Piedāvā **Atcelt** (Cancel) opciju, lai aizvērtu bez sūtīšanas.

Atsauksmes nepietaik tiek ierakstītas, līdz lietotājs to ekspluatāti apstāt.

## Automātiskais atsauksmes bārs (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Sarunas beigās asistentas var parādīt **automātisko atsauksmes bāru** — neinvadīgu ziņojumu, kas jautā, vai sesija bija noderīga.

Šis bars automātiski parādās atkarībā no sarunas garuma un rezultāta heuristikām. Tas saistīts ar to pašu atsauksmes plūsmu kā "ne" pogas. Lietotāji var aizvērt bāru bez sniegšanas atsauksmēm.

## `/report-issue` slaidējošais komanda (Slash Command) {#report-issue-slash-command}

Lietotāji var tieši izraisīt atsauksmes plūsmu, ievadot `/report-issue` čata iekļuvei. Šī komanda:

Atrod atvērš atsauksmes piekrišanas modalni blakus.
Atslēdz apraksta lauku automātiski ar kontekstu par pašreizējā sarunu.
Ļauj lietotājiem pievienot papildu detaļas pirms sūtīšanas.

`/report-issue` komanda ir pieejama visos чаt modeļos (inline, floating widget, full-screen).

## AI-palīdzēta triežēšana {#ai-assisted-triage}

Sūtītas atsauksmes tiek novirzītas uz AI triežu slācienu, kas:

- Kategorizē ziņojumu (faktiskais kļūda, nepalīdzīga atbilde, nepieciešamais saturs, etc.).
- Pievieca attiecīgo sarunas metadatus.
- Priecina triežu summatu konfigurētā **Feedback Endpoint** (skatīt [Settings > Advanced](#settings-advanced)).

Tas samazina manuālās pārskatīšanas laiku, prioritizējot viskritiski problēmas pirms citām.

## Settings > Advanced {#settings-advanced}

Lai aktivizētu atsauksmes backendu, konfiguriet šos laukus zem **Gratis AI Agent → Settings → Advanced**:

| Laiks | Apraksts |
|---|---|
| **Feedback Endpoint URL** | URL adrese, kas saņem POST pieprasījumus ar atsauksmju datumu (JSON). |
| **Feedback API Key** | Bearer token, kas nosūtīts `Authorization` sarakstā atsauksmes iesniegšanai autentifikācijas. |

Ļaujiet abos laukiem palikt tukšiem, lai deaktivizētu atsauksmju savienojumu. Individālās atsauksmes pogas paliek redzamas lietotājiem, bet sūtīšanas nepiecinsa.

:::tip
Atsauksmes endpointa jāatņem JSON ķermenis ar vismaz `message_id`, `conversation_id`, `feedback_text` un `triage_category` laukiem. Skatieties savas endpointu sniedzēja dokumentāciju, lai uzzinātu gaidīto skemu.
:::
