---
title: Bejēji AI agentu iestatījumi
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Bezmaksas AI Agent Iestatījumi

Ekran **Settings → Advanced** Gratis AI Agent piedāvā administratora līmeņa konfigurēšanu backend integrācijām, kas ieviestas v1.5.0 versijā. Šajā lapā dokumentējamie ir laika punkts **Feedback Endpoint** lauki un to atbilstības formāts.

## Iestatījumu piekļuvei

1. WordPress admina menu no **Gratis AI Agent → Settings**.
2. Nospiediet posmu **Advanced**.

## Feedback Endpoint konfigurēšana

Feedback endpoint saņem POST pieprasījumus no AI agenta, kad lietotājs nosaucas atsauksmi ar pusam lejupējotā pogas, automātiskās prompt banner vai `/report-issue` komandu.

| Laiks | Apraksts |
|---|---|
| **Feedback Endpoint URL** | URL adrese, kas saņem atsauksmes kā HTTP POST pieprasījumus ar JSON ķermeņa (body). |
| **Feedback API Key** | Bearer token, kas nosūtīts katram atsauksmes pieprasījumam `Authorization` sarakstā. Ja jūsu endpoint nepieciešama autentifikācija, ļaujiet to laiku tukšam. |

### Jautājums par JSON datumu (Payload)

Jums feedback endpointa jāatļauj JSON ķermeņa, kurā ir vismaz šādi lauki:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Atbilde par cenu bija nepareiza.",
  "triage_category": "factual_error"
}
```

Payloadā var būt arī papildu lauki, atkarībā no sarunas konteksta.

### `triage_category` vērtības

AI triage slēdzsens iepilda `triage_category`-i vismaz šo vērtību pirms datumu pārsūtīšanu:

| Vērtība | Nozīme |
|---|---|
| `factual_error` | Asistenta snoga nepareizu faktiisko informāciju. |
| `unhelpful_answer` | Atbilde tehniski ir pareiza, bet nav noderīga. |
| `inappropriate_content` | Atbildē iekļauta satura, kas nepiemērots lietotājiem. |
| `other` | Atsauksme nesaskaņojas ar zināmu kategoriju. |

### Autentifikācija

Ja ja, šeit ir tulkojums:

Ja jūsuji endpoint prasīja autentifikāciju, iestatīt lauku **Feedback API Key** vērtību kā savu bearer tokeni. Agents nosūtīs šādi:

```
Authorization: Bearer <jūsu-api-key>
```

Ja lauks **Feedback API Key** ir tukšs, neбу nosūtīts `Authorization` sēkavs (header).

### Feedback savākšanas deaktivizēšana

Atstāj visus laukus **Feedback Endpoint URL** un **Feedback API Key** tukšiem. Pēc tam lietotāji var redzēt pirkuma (thumbs-down) pogu un feedback UI, bet sūtījumus nebudēs pārsūtīti nekādam ārējam pakalpojumam.

## Brave Search API Key

Tāpat **Advanced** posmā lauks **Brave Search API Key** atrod savu [Internet Search](../configuration/internet-search) spējību.

| Laiks | Apraksts |
|---|---|
| **Brave Search API Key** | Jūsu API kluāvs no Brave Search attīstītāja dashboarda. Nepieciešams, lai aktivizētu internetu meklēšanu AI asistentā. |

Laukuma nosaukumā ir klikšķinams saite uz Brave Search API reģistrācijas lapu. Atstāj tukšu, lai deaktivizētu internetu meklēšanu.

Par lietotāju dokumentāciju šajā funkcijā skatieties [Internet Search](../configuration/internet-search).

## Feature Flags (Funkcionālo saskaņas)

Tāpat ieviests v1.9.0 versijā, posmā **Settings → Feature Flags** piedāvā izvēlnes (toggle switches) optacionālām funkcijām. Katra flag ir vai aktivizēta vai deaktivate rotaļlietu; pašlaik nav iespēju pārslēgt to atšķirīgi katras vietnes starp.

### Piekļuve Feature Flags

1. WordPress adminā dodieties uz **Gratis AI Agent → Settings**.
2. Klikšķiniet uz posma **Feature Flags**.

### Access Control Flags (Piekļuves kontroles flags)

| Flag | Default | Apraksts |
|---|---|---|
| **Restrict to Administrators** | Out | Kadrojam, ja šis ir ieslēgts, tikai lietotāji ar `administrator` lomu var atvērt AI Agent čata panelu. Citi locekļi redz "Sazināties ar administratoru" ziņojumu. |
| **Restrict to Network Admins** | Out | Ja šis ir ieslēgts multisite tīklā, tikai Super Administratori var izmantot agentu. Individulu vietnes administratorus tiek bloķēti. Tas priekšroku ņem pret "Restrict to Administrators", ja abotu ir ieslēgti. |
| **Allow Subscriber Access** | Out | Ja šis ir ieslēgts, `subscriber` lomu dienestāji var izmantot čata interfeisu, bet viņu iespējas ir ierobežotas tikai lasīšanai (nav iespējams veidot postus vai mainīt iestatījumus). |
| **Disable for Non-Members** | Out | Integrējas ar Ultimate Multisite locekļu statusu. Ja šis ir ieslēgts, čats tiek slēpts vietnēs, kas nav aktīvi locekļi. |

### Brändu Iestatījumi (Branding Flags)

| Flag | Default | Apraksts |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Out | Tuks slēdz attiecību līniju, kas redzama čata widgeta apakšā. Ieteikts white-label izmantošanai. |
| **Custom Agent Name** | *(tāls)* | Atliec vietā defaulta "Gratis AI Agent" zīmes čata galvenajā sarakstā un admin menu, uzlabojot to ar savu produktas nosaukumu. Ja atlaicāt lauku, izmantots defaultais nosaukums. |
| **Hide Agent Picker** | Out | Ja šis ir ieslēgts, lietotāji nevar skaitīties starp piec iedarbīgajiem agentiem. Aktuālā agents ir fiksēts uz tiem, kas noteikts kā defaultais Iestatījumi → Vispārīgi. |
| **Use Site Icon as Chat Avatar** | Out | Atliec vietā defaulta AI ikonas čata galvenajā sarakstā WordPress vietnes ikonu (noteikts under Appearance → Customize → Site Identity). |

### Izmaiņu pielietošana

Atspējiet **Save Settings** pēc tam, kad izvēlaties kādu flagu. Izmaiņas ieviestas neatkarīgi no cache skaitīšanas vai pluginu atjaunināšanas.
