---
title: '5. nodarbība: Jūsu plānu izstrāde'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# 5. nodarbība: Plānu izstrāde {#lesson-5-designing-your-plans}

Jūsu plānu līmeņi nav tikai cenu līmeņi -- tie atspoguļo to, kā jūsu nišas klienti patiesībā darbojas. Šajā nodarbībā jūs izstrādāsiet produktu līmeņus, kas atbilst fitnesa uzņēmumu reālajām vajadzībām dažādos posmos.

## Kur mēs apstājāmies {#where-we-left-off}

FitSite ir gatavas trīs veidnes (Studio Essential, Gym Pro, Fitness Chain). Tagad mēs izveidosim plānus, kas nosaka, kam klienti iegūst piekļuvi un cik viņi maksā.

## Domāšana klientu segmentos {#thinking-in-customer-segments}

Kļūda, ko pieļauj lielākā daļa cilvēku, ir plānu izstrāde, balstoties uz tehniskām funkcijām (krātuve, joslas platums, lapu skaits). Jūsu nišas klienti nedomā šādos terminos. Sporta zāles īpašnieks domā par to, kas viņam nepieciešams uzņēmuma vadīšanai.

Fitnesa studijām ir trīs dabiski segmenti:

| Segments | Kas viņi ir | Kas viņiem nepieciešams |
|---------|-------------|----------------|
| **Individuālie treneri / mazās studijas** | 1-3 darbinieki, viena atrašanās vieta, sāk darbību | Profesionāla vietne, nodarbību informācija, saziņas forma |
| **Nostiprinājušās sporta zāles** | 5-20 darbinieki, viena atrašanās vieta, augošs uzņēmums | Viss iepriekš minētais, kā arī rezervēšana, blogs, galerija, pielāgots domēns |
| **Fitnesa ķēdes** | Vairākas atrašanās vietas, nostiprināts zīmols | Viss iepriekš minētais, kā arī vairākas vietnes, atrašanās vietu lapas, darbinieku katalogs |

Jūsu plāniem jāatbilst šiem segmentiem, nevis patvaļīgām funkciju pakotnēm.

## FitSite plānu izveide {#creating-the-fitsite-plans}

Dodieties uz **Ultimate Multisite > Produkti > Pievienot produktu** katram plānam.

### 1. plāns: FitSite Starter -- $49/mēnesī {#plan-1-fitsite-starter----49month}

**Mērķauditorija**: Individuālie treneri un mazās studijas

**Apraksta cilne**:
- Nosaukums: FitSite Starter
- Apraksts: "Viss, kas personīgajam trenerim vai mazai studijai nepieciešams, lai tiešsaistē izskatītos profesionāli."

**Vispārīgā cilne**:
- Produkta tips: Plāns
- Klienta loma: Administrators

**Vietņu veidņu cilne**:
- Atļaut vietņu veidnes: Iespējots
- Pieejamās veidnes: Tikai Studio Essential

**Ierobežojumi**:
- Vietnes: 1
- Diska vieta: 1 GB
- Pielāgots domēns: Atspējots (izmanto `studioname.fitsite.com`)

**Plugin cilne**:
- Saziņas formas plugin: Piespiedu aktivizēšana
- SEO plugin: Piespiedu aktivizēšana
- Rezervēšanas plugin: Nav pieejams (stimuls jaunināšanai)

**Theme cilne**:
- Jūsu izvēlētā theme: Piespiedu aktivizēšana
- Visas pārējās themes: Paslēptas

### 2. plāns: FitSite Growth -- $99/mēnesī {#plan-2-fitsite-growth----99month}

**Mērķauditorija**: Nostiprinājušās sporta zāles ar vienu atrašanās vietu

**Apraksta cilne**:
- Nosaukums: FitSite Growth
- Apraksts: "Nostiprinājušām sporta zālēm, kas ir gatavas attīstīt savu tiešsaistes klātbūtni un piesaistīt jaunus biedrus."

**Vietņu veidņu cilne**:
- Pieejamās veidnes: Studio Essential un Gym Pro

**Ierobežojumi**:
- Vietnes: 1
- Diska vieta: 5 GB
- Pielāgots domēns: Iespējots

**Plugin cilne**:
- Viss, kas iekļauts Starter, kā arī:
- Rezervēšanas plugin: Piespiedu aktivizēšana
- Galerijas plugin: Piespiedu aktivizēšana
- Bloga funkcionalitāte: Pieejama

**Jauninājumu un pazeminājumu cilne**:
- Plānu grupa: FitSite Plans
- Produkta secība: 2

### 3. plāns: FitSite Pro -- $199/mēnesī {#plan-3-fitsite-pro----199month}

**Mērķauditorija**: Fitnesa ķēdes ar vairākām atrašanās vietām

**Apraksta cilne**:
- Nosaukums: FitSite Pro
- Apraksts: "Pilnīga platforma fitnesa zīmoliem ar vairākām atrašanās vietām."

**Vietņu veidņu cilne**:
- Pieejamās veidnes: Visas trīs veidnes

**Ierobežojumi**:
- Vietnes: 5 (viena katrai atrašanās vietai)
- Diska vieta: 20 GB
- Pielāgots domēns: Iespējots

**Plugin cilne**:
- Viss, kas iekļauts Growth, kā arī:
- Visi premium plugins: Piespiedu aktivizēšana

**Jauninājumu un pazeminājumu cilne**:
- Plānu grupa: FitSite Plans
- Produkta secība: 3

## Plānu grupas iestatīšana {#setting-up-the-plan-group}

Plānu grupa nodrošina, ka klienti var jaunināt vai pazemināt plānu tikai FitSite plānu saimes ietvaros. Katra plāna cilnē **Jauninājumi un pazeminājumi**:

1. Iestatiet **Plānu grupu** uz "FitSite Plans" visiem trim plāniem
2. Iestatiet **Produkta secību** uz 1 (Starter), 2 (Growth), 3 (Pro)

Tas izveido skaidru jaunināšanas ceļu: Starter → Growth → Pro.

## Pasūtījuma papildpiedāvājumu pievienošana {#adding-order-bumps}

Pasūtījuma papildpiedāvājumi ir papildu produkti, kas tiek piedāvāti norēķināšanās laikā. FitSite gadījumā apsveriet:

- **Papildu krātuves paka** ($19/mēnesī) -- papildu 5 GB diska vietas
- **Prioritārais atbalsts** ($29/mēnesī) -- ātrāks atbildes laiks
- **Papildu vietne** ($39/mēnesī) -- klientiem, kuriem nepieciešams vairāk vietņu, nekā atļauj viņu plāns

Izveidojiet tos kā **Pakotnes** tipa produktus Ultimate Multisite un saistiet tos ar attiecīgajiem plāniem.

## Kāpēc šī struktūra darbojas {#why-this-structure-works}

- **Starter** novērš šķēršļus uzsākšanai -- zema cena, vienkāršs piedāvājums, ātri nodrošina treneru klātbūtni tiešsaistē
- **Growth** pievieno funkcijas, ko sporta zāles patiesībā prasa -- rezervēšanu, galerijas, pielāgotus domēnus
- **Pro** apkalpo augstas vērtības segmentu, kam nepieciešams atbalsts vairākām atrašanās vietām
- **Pasūtījuma papildpiedāvājumi** ļauj klientiem pielāgot piedāvājumu, nesarežģījot pamatplānus
- **Skaidrs jaunināšanas ceļš** nozīmē, ka klienti aug kopā ar jums, nevis aiziet

## FitSite tīkls līdz šim {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Ko mēs izveidojām šajā nodarbībā {#what-we-built-this-lesson}

- **Trīs plānu līmeņi**, kas piesaistīti reāliem fitnesa uzņēmumu segmentiem
- **Funkciju piekļuves ierobežošana**, izmantojot Ultimate Multisite plugin un veidņu kontroles
- **Plānu grupa** ar skaidru jaunināšanas ceļu
- **Pasūtījuma papildpiedāvājumu produkti** papildu ieņēmumiem
- **Cenu struktūra**, kas balstīta uz klienta vērtību, nevis tehniskajām specifikācijām

---

**Tālāk:** [6. nodarbība: Reģistrēšanās pieredze](lesson-6-checkout) -- mēs izveidosim norēķināšanās plūsmu, kas fitnesa studiju īpašniekus pārvērš maksājošos klientos.
