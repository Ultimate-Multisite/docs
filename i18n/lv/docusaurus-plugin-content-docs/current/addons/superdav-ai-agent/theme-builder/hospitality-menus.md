---
title: Viesmīlības nozares ēdienkartes
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Viesmīlības ēdienkartes

**Viesmīlības ēdienkartes** funkcija ļauj Theme Builder ģenerēt un iegult strukturētas ēdienu un dzērienu ēdienkaršu lapas tieši jūsu WordPress vietnē.

## Pārskats

Theme Builder tagad var izveidot profesionālas, strukturētas ēdienkaršu lapas viesmīlības uzņēmumiem, tostarp restorāniem, kafejnīcām, bāriem un ēdināšanas pakalpojumiem. Šīs ēdienkartes ir pilnībā integrētas jūsu vietnes dizainā, un tās var viegli atjaunināt un pārvaldīt.

## Atbalstītie viesmīlības veidi

- **Restorāni** — pilna servisa ēdināšanas ēdienkartes
- **Kafejnīcas** — kafijas un vieglu uzkodu ēdienkartes
- **Bāri un atpūtas telpas** — dzērienu un uzkodu ēdienkartes
- **Maiznīcas** — konditorejas izstrādājumu un maizes ēdienkartes
- **Ēdināšanas pakalpojumi** — pasākumu ēdienkartes iespējas
- **Ēdienu furgoni** — mobilās ēdināšanas pakalpojumu ēdienkartes
- **Alus darītavas un vīna darītavas** — dzērienu ēdienkartes ar aprakstiem

## Ēdienkartes struktūra

### Ēdienkartes kategorijas

Ēdienkartes tiek organizētas kategorijās:

- **Uzkodas** — sākuma ēdieni un mazas porcijas
- **Pamatēdieni** — galvenie ēdieni
- **Piedevas** — piedevas un dārzeņi
- **Deserti** — saldie kārumi
- **Dzērieni** — dzērieni (alkoholiskie un bezalkoholiskie)
- **Īpašie piedāvājumi** — dienas vai sezonas īpašie piedāvājumi

### Ēdienkartes vienuma formāts

Katrs ēdienkartes vienums ietver:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Vienuma lauki

| Lauks | Tips | Apraksts |
|-------|------|-------------|
| `name` | string | Ēdiena vai dzēriena nosaukums |
| `description` | string | Detalizēts vienuma apraksts |
| `price` | string | Cena (formatēta ar valūtu) |
| `dietary_info` | array | Uztura atribūti (vegāns, bez glutēna utt.) |
| `allergens` | array | Biežākie alergēni (rieksti, vēžveidīgie utt.) |
| `availability` | string | Kad pieejams (katru dienu, sezonāli utt.) |

## Viesmīlības ēdienkaršu izveide

### 1. solis: sniedziet ēdienkartes informāciju

Pastāstiet Theme Builder par savu ēdienkarti:

```
Izveido restorāna ēdienkarti manam itāļu restorānam ar uzkodām,
pastas ēdieniem, pamatēdieniem un desertiem. Iekļauj cenas un aprakstus.
```

### 2. solis: Theme Builder ģenerē ēdienkarti

Theme Builder:

1. Izveido strukturētu ēdienkartes lapu
2. Noformē to atbilstoši jūsu vietnes tēmai
3. Organizē vienumus kategorijās
4. Formatē cenas un aprakstus
5. Pievieno uztura un alergēnu informāciju

### 3. solis: pārskatiet un pielāgojiet

Jūs varat:

1. Rediģēt ēdienkartes vienumus un cenas
2. Pievienot vai noņemt kategorijas
3. Pārkārtot vienumus kategorijās
4. Atjaunināt aprakstus un uztura informāciju
5. Pielāgot stilu un izkārtojumu

## Ēdienkartes attēlošanas opcijas

### Pilna ēdienkartes lapa

Īpaši veltīta lapa, kurā tiek attēlota jūsu pilnā ēdienkarte:

- Organizēta pēc kategorijām
- Meklējama un filtrējama
- Drukai draudzīgs izkārtojums
- Mobilajām ierīcēm pielāgots dizains

### Ēdienkartes logrīks

Ieguliet ēdienkartes sadaļas citās lapās:

- Izceltie vienumi sākumlapā
- Dienas īpašie piedāvājumi sānjoslā
- Dzērienu ēdienkarte bāra lapā
- Desertu vitrīna kājenē

### Ēdienkartes PDF

Ģenerējiet lejupielādējamu PDF ēdienkarti:

- Profesionāls formatējums
- Drukai gatava kvalitāte
- Ietver attēlus un aprakstus
- Viegli kopīgot un nosūtīt pa e-pastu

## Uztura un alergēnu informācija

### Uztura atribūti

Atzīmējiet vienumus ar uztura informāciju:

- **Vegāns** — bez dzīvnieku izcelsmes produktiem
- **Veģetārs** — bez gaļas
- **Bez glutēna** — drošs celiakijas gadījumā
- **Bez piena produktiem** — bez piena produktiem
- **Bez riekstiem** — bez koku riekstiem vai zemesriekstiem
- **Ar zemu ogļhidrātu saturu** — samazināts ogļhidrātu daudzums
- **Ar augstu olbaltumvielu saturu** — bagāts ar olbaltumvielām

### Alergēnu brīdinājumi

Iekļaujiet biežākos alergēnus:

- **Rieksti** — koku rieksti un zemesrieksti
- **Vēžveidīgie un gliemji** — vēžveidīgie un gliemji
- **Zivis** — visas zivju sugas
- **Piena produkti** — piens un piena produkti
- **Olas** — vistu olas
- **Soja** — sojas produkti
- **Glutēns** — kvieši un glutēnu saturoši graudi
- **Sezams** — sezama sēklas un eļļa

## Ēdienkartes pārvaldība

### Cenu atjaunināšana

Viegli atjauniniet ēdienkartes cenas:

1. Dodieties uz ēdienkartes lapu
2. Noklikšķiniet uz "Rediģēt ēdienkarti"
3. Atjauniniet vienumu cenas
4. Saglabājiet izmaiņas
5. Izmaiņas nekavējoties parādās jūsu vietnē

### Sezonas vienumu pievienošana

Izveidojiet sezonālas ēdienkartes variācijas:

1. Izveidojiet jaunu ēdienkartes versiju
2. Pievienojiet sezonas vienumus
3. Atzīmējiet vienumus kā "Sezonāli"
4. Ieplānojiet pieejamības datumus
5. Automātiski attēlojiet sezonas laikā

### Īpašo piedāvājumu pārvaldība

Attēlojiet dienas vai nedēļas īpašos piedāvājumus:

1. Izveidojiet kategoriju "Īpašie piedāvājumi"
2. Pievienojiet vienumus ar pieejamības datumiem
3. Izceliet īpašos piedāvājumus sākumlapā
4. Atjauniniet katru dienu vai katru nedēļu
5. Arhivējiet vecos īpašos piedāvājumus

## Integrācija ar Theme Builder

Izmantojot Theme Builder viesmīlības vietnēm:

1. **Automātiska ēdienkartes noteikšana** — identificē, vai esat ēdienu/dzērienu uzņēmums
2. **Ēdienkartes lapas izveide** — ģenerē profesionālas ēdienkaršu lapas
3. **Dizaina saskaņošana** — ēdienkartes atbilst jūsu vietnes tēmai
4. **Mobilā optimizācija** — ēdienkartes skaisti tiek attēlotas tālruņos
5. **SEO optimizācija** — ēdienkartes ir meklētājprogrammām draudzīgas

## Labākā prakse

### Ēdienkartes dizains

- **Skaidra organizācija** — loģiska kategoriju struktūra
- **Lasāmi apraksti** — apetīti rosinoši un informatīvi
- **Konsekventa cenu norāde** — skaidra valūta un formatējums
- **Profesionāli fotoattēli** — augstas kvalitātes ēdienu attēli
- **Tukšā vieta** — nepārblīvējiet lapu

### Saturs

- **Precīzi apraksti** — aprakstiet vienumus precīzi
- **Izceliet īpašos piedāvājumus** — padariet īpašos piedāvājumus pamanāmus
- **Iekļaujiet alergēnus** — vienmēr norādiet alergēnus
- **Regulāri atjauniniet** — uzturiet cenas un vienumus aktuālus
- **Izmantojiet apetīti rosinošu valodu** — panāciet, lai vienumi izklausītos gardi

### Pieejamība

- **Lasāmi fonti** — izmantojiet skaidrus, viegli salasāmus burtveidolus
- **Pietiekams kontrasts** — nodrošiniet, ka teksts ir salasāms
- **Uztura marķējumi** — skaidri atzīmējiet uztura opcijas
- **Alergēnu brīdinājumi** — pamanāmi attēlojiet alergēnus
- **Draudzīgs mobilajām ierīcēm** — testējiet visās ierīcēs

## Piemēri

### Restorāna ēdienkartes struktūra

```
Uzkodas
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese salāti

Makaronu ēdieni
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Pamatēdieni
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Deserti
├── Tiramisu
├── Panna Cotta
└── Gelato izlase
```

### Kafejnīcas ēdienkartes struktūra

```
Kafija
├── Espresso
├── Cappuccino
└── Latte

Konditorejas izstrādājumi
├── Kruasāni
├── Mafini
└── Skones

Sviestmaizes
├── Caprese panini
├── Club sviestmaize ar kūpinātu tītaru
└── Veģetārais tortiljas rullītis
```

## Saistītās funkcijas

- [Izveidot izvēlni](../abilities/create-menu.md) — izveido navigācijas izvēlnes
- [Dizaina virziens](./design-direction.md) — pielāgo savas vietnes dizainu
- [Atklāšanas intervija](./discovery-interview.md) — plāno savas vietnes struktūru
