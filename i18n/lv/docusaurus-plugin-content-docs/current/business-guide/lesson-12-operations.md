---
title: '12. nodarbība: Uzņēmuma vadīšana'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Nodarbība 12: Uzņēmuma vadīšana

Platforma nav projekts, ko pabeidz -- tas ir uzņēmums, ko vadi. Šī nodarbība aptver FitSite pārvaldības ikdienas darbības: atbalstu, norēķinus, uzturēšanu un klientu apmierinātības uzturēšanu.

## Kur mēs palikām {#where-we-left-off}

FitSite ir palaists, un klienti reģistrējas. Tagad tev jāvada darbība ilgtspējīgi.

## Ikdienas darbības {#daily-operations}

### Uzraudzība {#monitoring}

Pārbaudi šo katru dienu (vai iestati brīdinājumus):

- **Darbspējas laiks**: Vai platforma ir pieejama? Izmanto darbspējas laika uzraudzības pakalpojumu.
- **Jaunas reģistrācijas**: Cik jaunu klientu šodien reģistrējās?
- **Neizdevušies maksājumi**: Vai ir maksājumu kļūmes, kurām jāpievērš uzmanība?
- **Atbalsta pieprasījumi**: Vai ir neatbildēti klientu jautājumi?

### Klientu atbalsts {#customer-support}

Tavs nišas fokuss šeit ir priekšrocība. Tā kā visi tavi klienti ir fitnesa studijas, tu atkārtoti redzēsi tos pašus jautājumus:

**Biežākie jautājumi, ko saņemsi:**

- "Kā atjaunināt savu nodarbību grafiku?"
- "Vai varu mainīt savas vietnes krāsas?"
- "Kā pievienot jaunu treneri savai vietnei?"
- "Mans domēns nedarbojas"
- "Kā atcelt/jaunināt savu plānu?"

Veido savu zināšanu bāzi (sāktu 8. nodarbībā) ap šiem atkārtotajiem jautājumiem. Katrs atbalsta pieteikums, kas varēja būt zināšanu bāzes raksts, ir signāls uzrakstīt šo rakstu.

### Atbalsta līmeņi {#support-tiers}

Augot strukturē atbalstu pēc plāna:

| Plāns | Atbalsta līmenis | Atbildes laiks |
|------|--------------|---------------|
| Starter | Zināšanu bāze + e-pasts | 48 stundas |
| Growth | E-pasta atbalsts | 24 stundas |
| Pro | Prioritārs e-pasts + ievadapmācības zvans | 4 stundas |

[Support Tickets papildinājums](/addons/support-tickets) var palīdzēt pārvaldīt atbalsta pieprasījumus platformā.

## Norēķinu darbības {#billing-operations}

### Periodiskie maksājumi {#recurring-payments}

Ultimate Multisite automātiski apstrādā periodiskos norēķinus caur tavu maksājumu vārteju. Tavs uzdevums ir uzraudzīt:

- **Neizdevušies maksājumi**: Sazinies nekavējoties. Lielākā daļa kļūmju ir beigušās kartes, nevis apzinātas atcelšanas.
- **Parādu atgūšanas paziņojumi**: Iestati automātisku atkārtotu mēģinājumu loģiku caur savu maksājumu vārteju (Stripe ar to labi tiek galā)
- **Atcelšanas pieprasījumi**: Izproti, kāpēc klienti aiziet. Katra atcelšana ir atgriezeniskā saite.

### Memberships pārvaldība {#managing-memberships}

Dodieties uz **Ultimate Multisite > Memberships**, lai:

- Skatītu visas aktīvās abonementus
- Apstrādātu jaunināšanas un pazemināšanas pieprasījumus
- Vajadzības gadījumā apstrādātu atmaksas
- Pārvaldītu izmēģinājuma periodu beigas

Pilnu atsauci skatiet [Memberships pārvaldība](/user-guide/administration/managing-memberships).

### Rēķinu izrakstīšana {#invoicing}

Pārliecinies, ka rēķini tiek pareizi ģenerēti par katru maksājumu. Klientiem var būt nepieciešami rēķini uzņēmuma izdevumu atskaitēm. Skatiet [Maksājumu un rēķinu pārvaldība](/user-guide/administration/managing-payments-and-invoices).

## Platformas uzturēšana {#platform-maintenance}

### WordPress un plugin atjauninājumi {#wordpress-and-plugin-updates}

Kā tīkla administratoram tev ir pienākums:

- **WordPress kodola atjauninājumi**: Testē uz staging vietnes pirms piemērošanas production vidē
- **Plugin atjauninājumi**: Tāpat -- vispirms testē, pēc tam piemēro visā tīklā
- **Theme atjauninājumi**: Pārliecinies, ka veidnes pēc theme atjauninājumiem joprojām izskatās pareizi
- **Ultimate Multisite atjauninājumi**: Seko izmaiņu žurnālam un testē pirms atjaunināšanas

:::warning Nekad neatjaunini production vidē bez testēšanas
Bojāts atjauninājums ietekmē katru klienta vietni tavā tīklā. Vienmēr vispirms testē atjauninājumus sava tīkla staging kopijā.
:::

### Drošība {#security}

- Uzturi visu programmatūru atjauninātu
- Izmanto spēcīgas paroles un divfaktoru autentifikāciju administratora kontiem
- Uzraugi aizdomīgas aktivitātes
- Izstrādā plānu drošības incidentiem

### Veiktspēja {#performance}

Tavam tīklam augot, uzraugi:

- **Lapu ielādes laiki**: Vai klientu vietnes ir ātras?
- **Servera resursu izmantošana**: CPU, atmiņa, diska vieta
- **Datubāzes veiktspēja**: Lieliem tīkliem laika gaitā nepieciešama datubāzes optimizācija

Apsver kešošanas ieviešanu (lapu kešs, objektu kešs) un CDN, ja vēl neesi to izdarījis. [Cloudflare integrācija](/user-guide/host-integrations/cloudflare) paveic lielu daļu no tā.

## Klientu dzīves cikla pārvaldība {#customer-lifecycle-management}

### Atbiruma samazināšana {#reducing-churn}

Atbirums ir to klientu procentuālā daļa, kuri katru mēnesi atceļ pakalpojumu. Abonēšanas uzņēmumam atbiruma samazināšana ir tikpat svarīga kā jaunu klientu iegūšana.

**Biežākie iemesli, kāpēc fitnesa studiju klienti aiziet:**

- Viņi nespēja saprast, kā izmantot platformu → uzlabo ievadapmācību
- Vietne neizskatījās pietiekami labi → uzlabo veidnes
- Viņi neredzēja vērtību → uzlabo funkcijas vai komunikāciju
- Viņi atrada lētāku alternatīvu → pastiprini savas nišas vērtību
- Viņu uzņēmums tika slēgts → neizbēgami, bet uzskaiti to atsevišķi

### Jauninājumu veicināšana {#encouraging-upgrades}

Klienti Starter plānā, kuriem klājas veiksmīgi, jāmudina jaunināt:

- Kad viņi sasniedz plāna limitus (vietnes, krātuve), parādi jaunināšanas pamudinājumus
- Sūti mērķētus e-pastus, izceļot Growth plāna funkcijas, no kurām viņi gūtu labumu
- Parādi, ko Growth/Pro klienti ir izveidojuši

### Atgūšanas kampaņas {#win-back-campaigns}

Kad klients atceļ:

1. Pajautā, kāpēc (izejas aptauja vai e-pasts)
2. Ja iespējams, risini viņa bažas
3. Piedāvā atlaidi, lai atgrieztos (30–60 dienas pēc atcelšanas)

## Nedēļas un mēneša rutīnas {#weekly-and-monthly-routines}

### Katru nedēļu {#weekly}

- Pārskati jaunas reģistrācijas un atcelšanas
- Atbildi uz visiem atvērtajiem atbalsta pieteikumiem
- Pārbaudi platformas veiktspēju un darbspējas laiku
- Pārskati visus neizdevušos maksājumus

### Katru mēnesi {#monthly}

- Analizē galvenos rādītājus (MRR, atbirums, jauni klienti, jauninājumi)
- Piemēro WordPress un plugin atjauninājumus (pēc staging testa)
- Pārskati un atjaunini zināšanu bāzi, balstoties uz atbalsta modeļiem
- Nosūti klientiem jaunumu vēstuli vai atjauninājumu (jaunas funkcijas, padomi, fitnesa nozares ziņas)

### Katru ceturksni {#quarterly}

- Pārskati cenas salīdzinājumā ar konkurentiem un klientu atsauksmēm
- Izvērtē veidņu dizainus -- vai tos nepieciešams atsvaidzināt?
- Novērtē hostinga kapacitāti -- vai tev jāpalielina mērogs?
- Pārskati un uzlabo ievadapmācību, balstoties uz aktivizācijas datiem

## Ko mēs izveidojām šajā nodarbībā {#what-we-built-this-lesson}

- **Ikdienas uzraudzības rutīnas** darbspējas laikam, reģistrācijām, maksājumiem un atbalstam
- **Līmeņota atbalsta struktūra**, kas pielāgota plānu līmeņiem
- **Norēķinu operācijas**, tostarp parādu piedziņa un atcelšanas apstrāde
- **Uzturēšanas procedūras** atjauninājumiem, drošībai un veiktspējai
- **Klientu aizplūšanas mazināšanas stratēģijas**, kas specifiskas fitnesa nišai
- **Iknedēļas, ikmēneša un ceturkšņa operatīvās rutīnas**

---

**Nākamais:** [13. nodarbība: Mērogošana](lesson-13-growth) -- FitSite audzēšana no nelielas darbības līdz īstam biznesam.
