---
title: Gratis AI Agent iestatījumi
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent iestatījumi

**Iestatījumi → Papildu** ekrāns Gratis AI Agent nodrošina administratora līmeņa konfigurāciju backend integrācijām. Šajā lapā dokumentēta atsauksmju pārsūtīšana, meklēšanas pakalpojumu sniedzēju atslēgas, pārvaldītā Superdav pakalpojuma iestatīšana, Google Calendar vadīklas, TextBee SMS iestatījumi un tīkla mēroga funkciju karodziņi.

## Piekļuve iestatījumiem

1. WordPress administrācijā dodieties uz **Gratis AI Agent → Iestatījumi**.
2. Noklikšķiniet uz cilnes **Papildu**.

## Atsauksmju endpoint konfigurācija

Atsauksmju endpoint saņem POST pieprasījumus no AI aģenta ikreiz, kad lietotājs iesniedz atsauksmi, izmantojot īkšķa uz leju pogu, automātiskās uzvednes baneri vai komandu `/report-issue`.

| Lauks | Apraksts |
|---|---|
| **Atsauksmju endpoint URL** | URL, kas saņem atsauksmju iesniegumus kā HTTP POST pieprasījumus ar JSON ķermeni. |
| **Feedback API Key** | bearer token, kas tiek nosūtīts katra atsauksmju pieprasījuma `Authorization` header. Atstājiet tukšu, ja jūsu endpoint nepieprasa autentifikāciju. |

### Sagaidāmā JSON slodze

Jūsu atsauksmju endpoint jāpieņem JSON ķermenis ar vismaz šādiem laukiem:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Slodzē var būt papildu lauki atkarībā no sarunas konteksta.

### `triage_category` vērtības

AI šķirošanas slānis piešķir vienu no tālāk norādītajām vērtībām `triage_category`, pirms pārsūta slodzi:

| Vērtība | Nozīme |
|---|---|
| `factual_error` | Asistents sniedza nepareizu faktisko informāciju. |
| `unhelpful_answer` | Atbilde bija tehniski pareiza, bet nebija noderīga. |
| `inappropriate_content` | Atbildē bija saturs, ko nevajadzētu rādīt lietotājiem. |
| `other` | Atsauksme neatbilda zināmai kategorijai. |

### Autentifikācija

Ja jūsu endpoint pieprasa autentifikāciju, iestatiet lauku **Feedback API Key** uz savu bearer token. Aģents nosūta:

```
Authorization: Bearer <your-api-key>
```

Ja lauks **Feedback API Key** ir tukšs, `Authorization` header netiek nosūtīts.

### Atsauksmju vākšanas atspējošana

Atstājiet gan **Atsauksmju endpoint URL**, gan **Feedback API Key** laukus tukšus. Īkšķa uz leju poga un atsauksmju UI lietotājiem paliek redzami, bet iesniegumi netiek pārsūtīti nevienam ārējam pakalpojumam.

## Brave Search API Key

Arī cilnē **Papildu** lauks **Brave Search API Key** iespējo [interneta meklēšanas](../configuration/internet-search) spēju.

| Lauks | Apraksts |
|---|---|
| **Brave Search API Key** | Jūsu API atslēga no Brave Search izstrādātāja Dashboard. Nepieciešama, lai AI asistentā iespējotu interneta meklēšanu. |

Lauka etiķetē ir klikšķināma saite uz Brave Search API reģistrācijas lapu. Atstājiet tukšu, lai atspējotu interneta meklēšanu.

Skatiet [Interneta meklēšana](../configuration/internet-search), lai iegūtu galalietotājiem paredzētu dokumentāciju par šo funkciju.

## Pārvaldītais Superdav pakalpojums

Superdav AI Agent v1.18.0 pievieno pārvaldītus Superdav pakalpojuma endpointus un automātisku savienojuma nodrošināšanu atbalstītām vietnēm. Izmantojiet šīs vadīklas, ja jūsu vietnei jāpieslēdzas mitinātajam pakalpojumu sniedzējam, nevis manuāli konfigurētam pakalpojuma endpoint.

| Lauks | Apraksts |
|---|---|
| **Pārvaldītais Superdav pakalpojums** | Iespējo mitinātā Superdav pakalpojuma savienojumu atbalstītām vietnēm. |
| **Nodrošināt savienojumu** | Sāk automātisku endpoint un akreditācijas datu nodrošināšanu. Izmantojiet to pēc apstiprināšanas, ka vietnei jāizmanto pārvaldītais pakalpojumu sniedzējs. |
| **Pakalpojuma endpoint / savienojuma statuss** | Pēc nodrošināšanas rāda pašreizējo endpoint vai savienojuma stāvokli. |

Pēc nodrošināšanas saglabājiet iestatījumus un pārbaudiet savienojuma statusu, pirms paļaujaties uz pārvaldītā pakalpojuma darbplūsmām. Ja nodrošināšana neizdodas, pārskatiet parādītos atkārtota mēģinājuma norādījumus un apstipriniet, ka vietnei ir atļauja izmantot mitināto pakalpojumu sniedzēju.

## Google Calendar konfigurācija

Kad Superdav AI Agent v1.18.0 kalendāra funkcijas ir iespējotas, aģents var lasīt konfigurētos kalendārus un notikumu informāciju. Kalendāra rīki ir orientēti uz lasīšanu un ir noderīgi grafiku apzinošiem atgādinājumiem, dalībnieku turpmākai saziņai un kontaktu saskaņošanai.

| Lauks | Apraksts |
|---|---|
| **Google Calendar akreditācijas dati** | Glabā akreditācijas datus vai token savienojumu, kas nepieciešams kalendāra datu lasīšanai. |
| **Kalendāra atlase** | Ierobežo, kurus konfigurētos kalendārus aģents drīkst pārbaudīt. |
| **Kalendāra savienojuma statuss** | Apstiprina, vai pašreizējie akreditācijas dati var lasīt kalendārus un notikumus. |

Ierobežojiet kalendāra akreditācijas datus tikai līdz tiem kalendāriem, kas aģentam nepieciešami. Atkārtoti pieslēdziet vai rotējiet akreditācijas datus, ja statuss norāda uz token derīguma termiņa beigām.

## TextBee SMS paziņojumi

Superdav AI Agent v1.18.0 pievieno TextBee kā SMS pakalpojumu sniedzēju konfigurētām paziņojumu darbplūsmām. SMS paziņojumi jāsavieno ar cilvēka apstiprinājuma vārtejām sensitīviem vai lietotājiem redzamiem ziņojumiem.

| Lauks | Apraksts |
|---|---|
| **TextBee API Key** | Autentificē pieprasījumus TextBee SMS pakalpojumu sniedzējam. |
| **TextBee ierīce / sūtītājs** | Atlasa TextBee sūtītāju vai ierīci, kas tiek izmantota izejošajiem ziņojumiem, ja pakalpojumu sniedzējs to pieprasa. |
| **SMS paziņojumi iespējoti** | Ļauj apstiprinātām darbplūsmām sūtīt īsziņu paziņojumus. Atstājiet atspējotu, lai novērstu SMS sūtīšanu. |

Nosūtiet testa ziņojumu tikai uz administratoram piederošu numuru, pēc tam apstipriniet apstiprinājuma vārtejas darbību, pirms iespējojat ieplānotus vai dalībniekiem paredzētus atgādinājumus.

## Funkciju karodziņi

Arī v1.9.0 ieviestā cilne **Iestatījumi → Funkciju karodziņi** nodrošina pārslēgšanas slēdžus izvēles funkcionalitātei. Katrs karodziņš ir vai nu iespējots, vai atspējots tīkla mērogā; pašlaik nav atsevišķas vietnes līmeņa pārrakstīšanas.

### Piekļuve funkciju karodziņiem

1. WordPress administrācijā dodieties uz **Gratis AI Agent → Iestatījumi**.
2. Noklikšķiniet uz cilnes **Funkciju karodziņi**.

### Piekļuves kontroles karodziņi

| Karodziņš | Noklusējums | Apraksts |
|---|---|---|
| **Ierobežot līdz administratoriem** | Izslēgts | Kad iespējots, tikai lietotāji ar `administrator` lomu var atvērt AI Agent tērzēšanas paneli. Visas pārējās lomas tā vietā redz ziņojumu "Sazinieties ar savu administratoru". |
| **Ierobežot līdz Network Admins** | Izslēgts | Kad iespējots multisite tīklā, tikai Super Admins var izmantot agent. Atsevišķu vietņu administratori tiek bloķēti. Ja abi ir iespējoti, tam ir prioritāte pār "Ierobežot līdz administratoriem". |
| **Atļaut Subscriber piekļuvi** | Izslēgts | Kad iespējots, lietotāji ar `subscriber` lomu var izmantot tērzēšanas saskarni, bet ir ierobežoti tikai ar lasīšanas iespējām (bez ierakstu izveides vai iestatījumu izmaiņām). |
| **Atspējot ne-biedriem** | Izslēgts | Integrējas ar Ultimate Multisite dalības statusu. Kad iespējots, tērzēšana tiek paslēpta vietnēm, kurām nav aktīvas dalības. |

### Zīmola karodziņi

| Karodziņš | Noklusējums | Apraksts |
|---|---|---|
| **Paslēpt "Powered by Gratis AI Agent" kājeni** | Izslēgts | Noņem zīmola atribūcijas rindu, kas tiek rādīta tērzēšanas logrīka apakšā. Ieteicams white-label izvietojumiem. |
| **Pielāgots agent nosaukums** | *(tukšs)* | Aizstāj noklusējuma "Gratis AI Agent" etiķeti tērzēšanas galvenē un admin izvēlnē ar jūsu paša produkta nosaukumu. Atstājiet tukšu, lai izmantotu noklusējumu. |
| **Paslēpt agent izvēlētāju** | Izslēgts | Kad iespējots, lietotāji nevar pārslēgties starp pieciem iebūvētajiem agent. Pašreizējais agent ir fiksēts uz to, kas ir konfigurēts kā noklusējums sadaļā Iestatījumi → Vispārīgi. |
| **Izmantot vietnes ikonu kā tērzēšanas avatāru** | Izslēgts | Aizstāj noklusējuma AI ikonu tērzēšanas logrīka galvenē ar WordPress vietnes ikonu (iestatīta sadaļā Izskats → Pielāgot → Vietnes identitāte). |

### Automatizācijas drošības karodziņi

Superdav AI Agent v1.18.0 ievieš cilvēka apstiprinājuma vārtus un atgādinājumu ierakstus drošākām automatizācijas izpildēm. Šīs vadīklas var parādīties funkciju karodziņos vai paplašinātajos automatizācijas iestatījumos atkarībā no instalētās pakotnes.

| Karodziņš | Noklusējums | Apraksts |
|---|---|---|
| **Pieprasīt cilvēka apstiprinājumu** | Ieteicams ieslēgt | Aptur sensitīvas automatizācijas, līdz pilnvarots lietotājs pārskata un apstiprina piedāvāto darbību. |
| **Atgādinājumu deduplikācija** | Ieslēgts | Reģistrē nosūtītos atgādinājumus, lai atkārtoti mēģinājumi vai ieplānotas izpildes nesūtītu dublētus paziņojumus. |
| **Iespējot kalendāra rīkus** | Izslēgts līdz konfigurēšanai | Ļauj agent lasīt konfigurētos Google kalendārus un notikumus. |
| **Iespējot SMS paziņojumus** | Izslēgts līdz konfigurēšanai | Ļauj apstiprinātām darbplūsmām nosūtīt TextBee SMS paziņojumus pēc akreditācijas datu saglabāšanas. |

### Izmaiņu piemērošana

Noklikšķiniet uz **Saglabāt iestatījumus** pēc jebkura karodziņa pārslēgšanas. Izmaiņas stājas spēkā nekavējoties — nav nepieciešama kešatmiņas iztīrīšana vai plugin atkārtota aktivizēšana.
