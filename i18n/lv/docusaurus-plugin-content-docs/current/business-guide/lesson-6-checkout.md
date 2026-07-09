---
title: '6. nodarbība: Reģistrēšanās pieredze'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Nodarbība 6: Reģistrēšanās pieredze

Norēķinu plūsma ir vieta, kur interese kļūst par ieņēmumiem. Mulsinošs vai pārāk vispārīgs reģistrēšanās process zaudē klientus. Nišai pielāgota plūsma, kas runā viņu valodā un šķiet vienkārša, pārvērš viņus par klientiem.

## Kur mēs apstājāmies

FitSite ir konfigurētas veidnes un plāni. Tagad mēs veidojam reģistrēšanās un norēķinu pieredzi, kas fitnesa studiju īpašniekus pārvērš par maksājošiem klientiem.

## Reģistrācijas plūsmas izpratne

Ultimate Multisite norēķinu veidlapas ir pilnībā pielāgojamas daudzsoļu veidlapas. FitSite vajadzībām mēs vēlamies plūsmu, kas:

1. Šķiet veidota tieši fitnesa uzņēmumiem
2. Ievāc tikai nepieciešamo
3. Pēc iespējas ātrāk noved klientu līdz strādājošai vietnei

Pilnu tehnisko uzziņu skatiet sadaļā [Reģistrācijas plūsma](/user-guide/configuration/the-registration-flow).

## FitSite norēķinu procesa izstrāde

Dodieties uz **Ultimate Multisite > Norēķinu veidlapas** un izveidojiet jaunu veidlapu.

### 1. solis: plāna izvēle

Pirmajam, ko fitnesa studijas īpašnieks redz, vajadzētu būt plāniem, kas izklāstīti viņam saprotamos terminos.

- Pievienojiet **Cenu tabulas** lauku
- Konfigurējiet to, lai rādītu visus trīs FitSite plānus
- Plānu apraksti, ko uzrakstījāt 5. nodarbībā, parādās šeit -- pārliecinieties, ka tie runā par fitnesa uzņēmumu vajadzībām, nevis tehniskām funkcijām

:::tip Nišas valodai ir nozīme
"1 GB krātuves" sporta zāles īpašniekam neko neizsaka. "Viss, kas nepieciešams profesionālai studijas tīmekļa vietnei" izsaka visu. Rakstiet plānu aprakstus klienta valodā.
:::

### 2. solis: veidnes izvēle

Pēc plāna izvēles klients izvēlas sākuma veidni.

- Pievienojiet **Veidnes izvēles** lauku
- Pieejamās veidnes tiek filtrētas pēc izvēlētā plāna (konfigurēts 5. nodarbībā)
- Katrai veidnei vajadzētu būt priekšskatījuma attēlam, kas parāda fitnesam pielāgotu dizainu

### 3. solis: Account izveide

Saglabājiet to minimālu. Ievāciet tikai:

- E-pasta adrese
- Parole
- Studijas/uzņēmuma nosaukums (tas kļūst par viņu vietnes nosaukumu)

Neprasiet informāciju, kas reģistrēšanās brīdī nav vajadzīga. Katrs papildu lauks samazina konversijas.

### 4. solis: vietnes iestatīšana

- **Vietnes virsraksts**: automātiski aizpildiet no studijas nosaukuma, kas ievadīts 3. solī
- **Vietnes URL**: automātiski ģenerējiet no studijas nosaukuma (piem., `ironworks.fitsite.com`)

### 5. solis: maksājums

- Pievienojiet **Maksājuma** lauku
- Konfigurējiet savu maksājumu vārteju ([Stripe](/user-guide/payment-gateways/stripe) ir ieteicams abonementu norēķiniem)
- Ja 5. nodarbībā izveidojāt pasūtījuma papildpiedāvājumus, pirms maksājuma soļa pievienojiet **Pasūtījuma papildpiedāvājuma** lauku

### 6. solis: apstiprinājums

- Pielāgojiet apstiprinājuma ziņojumu ar fitnesam specifisku valodu
- Piemērs: "Jūsu fitnesa studijas tīmekļa vietne tiek veidota. Pēc dažām sekundēm jūs tiksiet novirzīts uz savu jauno vietni."

## Perioda izvēles pārslēga pievienošana

Ja savos plānos iestatījāt cenu variācijas (mēneša pret gada), pievienojiet norēķinu veidlapai **Perioda izvēles** lauku, lai klienti varētu pārslēgties starp norēķinu periodiem. Norādījumus skatiet sadaļā [Norēķinu veidlapas](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Maksājumu konfigurēšana

Ja vēl neesat iestatījis maksājumu vārteju:

1. Dodieties uz **Ultimate Multisite > Iestatījumi > Maksājumu vārtejas**
2. Izpildiet [Stripe iestatīšanas rokasgrāmatu](/user-guide/payment-gateways/stripe) vai savas izvēlētās vārtejas norādījumus
3. Pārbaudiet pilnu norēķinu plūsmu ar testa maksājumu

Sīkāku informāciju par to, kā maksājumi nonāk jūsu kontā, skatiet sadaļā [Maksājumu saņemšana](/user-guide/payment-gateways/getting-paid).

## Plūsmas testēšana

Pirms turpināt, pabeidziet pilnu testa reģistrēšanos:

1. Atveriet norēķinu veidlapu inkognito/privātā pārlūka logā
2. Izvēlieties plānu
3. Izvēlieties veidni
4. Izveidojiet Account
5. Pabeidziet maksājumu (izmantojiet testa režīmu)
6. Pārbaudiet, vai vietne ir izveidota ar pareizo veidni

Pārbaudiet, ka:

- [ ] Plānu apraksti ir skaidri un nišai specifiski
- [ ] Veidņu priekšskatījumi rāda fitnesam atbilstošus dizainus
- [ ] Vietnes URL tiek pareizi ģenerēts no studijas nosaukuma
- [ ] Maksājums tiek veiksmīgi apstrādāts
- [ ] Klients nonāk strādājošā vietnē ar izvēlēto veidni
- [ ] Apstiprinājuma e-pasti izmanto fitnesam specifisku valodu

## FitSite tīkls līdz šim

```
FitSite tīkls
├── WordPress Multisite (apakšdomēnu režīms)
├── Ultimate Multisite (konfigurēts)
├── Hostings ar wildcard SSL + domēnu kartēšanu
├── Vietņu veidnes (Studio Essential, Gym Pro, Fitness Chain)
├── Produkti (Starter, Growth, Pro + pasūtījuma papildpiedāvājumi)
├── Norēķinu plūsma
│   ├── Plāna izvēle ar nišai specifiskiem aprakstiem
│   ├── Veidnes izvēle ar fitnesa priekšskatījumiem
│   ├── Minimāla Account izveide
│   ├── Maksājums, izmantojot Stripe
│   └── Fitnesam specifisks apstiprinājums
└── Gatavs zīmolvedībai (nākamā nodarbība)
```

## Ko mēs izveidojām šajā nodarbībā

- **Daudzsoļu norēķinu veidlapa**, kas pielāgota fitnesa studiju īpašniekiem
- **Nišai specifiska valoda** visā reģistrēšanās plūsmā
- **Minimāla berze** -- tikai būtiskie lauki, ātrs ceļš līdz strādājošai vietnei
- **Maksājumu integrācija** ar testa pārbaudi
- **Pārbaudīta pilna plūsma** no plāna izvēles līdz strādājošai vietnei

---

**Tālāk:** [7. nodarbība: Padarīt to par savu](lesson-7-branding) -- mēs white-label platformu un nostiprinām FitSite kā zīmolu.
