---
title: Ostalaritzako menuak
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Ostalaritzako menuak

**Ostalaritzako menuak** eginbideak Theme Builder-i janari eta edarien menu-orri egituratuak zuzenean zure WordPress gunean sortu eta txertatzeko aukera ematen dio.

## Ikuspegi orokorra

Theme Builder-ek orain menu-orri profesional eta egituratuak sor ditzake ostalaritza-negozioentzat, besteak beste jatetxe, kafetegi, taberna eta catering zerbitzuentzat. Menu horiek guztiz integratuta daude zure gunearen diseinuan, eta erraz eguneratu eta kudea daitezke.

## Onartutako ostalaritza motak

- **Jatetxeak** — zerbitzu osoko otordu-menuak
- **Kafetegiak** — kafe eta jaki arinen menuak
- **Tabernak eta lounge-ak** — edari eta aperitiboen menuak
- **Okindegiak** — gozogintza eta ogi-menuak
- **Catering zerbitzuak** — ekitaldietarako menu-aukerak
- **Food truck-ak** — janari-zerbitzu mugikorren menuak
- **Garagardotegiak eta upategiak** — deskribapenak dituzten edari-menuak

## Menuaren egitura

### Menu-kategoriak

Menuak kategorietan antolatzen dira:

- **Aperitiboak** — hasierakoak eta plater txikiak
- **Plater nagusiak** — otordu nagusiak
- **Osagarriak** — lagungarriak eta barazkiak
- **Postreak** — gozoak
- **Edariak** — edariak (alkoholdunak eta alkoholik gabeak)
- **Bereziak** — eguneko edo sasoiko bereziak

### Menu-elementuaren formatua

Menu-elementu bakoitzak hau dauka:

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

#### Elementuaren eremuak

| Eremua | Mota | Deskribapena |
|-------|------|-------------|
| `name` | string | Plateraren edo edariaren izena |
| `description` | string | Elementuaren deskribapen xehatua |
| `price` | string | Prezioa (monetarekin formatua) |
| `dietary_info` | array | Dieta-atributuak (beganoa, glutenik gabea, etab.) |
| `allergens` | array | Alergeno arruntak (fruitu lehorrak, itsaskiak, etab.) |
| `availability` | string | Noiz dagoen erabilgarri (egunero, sasoikoa, etab.) |

## Ostalaritzako menuak sortzea

### 1. urratsa: eman menuaren informazioa

Esan Theme Builder-i zure menuari buruz:

```
Sortu jatetxe-menu bat nire jatetxe italiarrerako, aperitiboekin,
pasta-platerekin, plater nagusiekin eta postreekin. Sartu prezioak eta deskribapenak.
```

### 2. urratsa: Theme Builder-ek menua sortzen du

Theme Builder-ek:

1. Menu-orri egituratu bat sortzen du
2. Zure gunearen theme-arekin bat etortzeko diseinatzen du
3. Elementuak kategorietan antolatzen ditu
4. Prezioak eta deskribapenak formateatzen ditu
5. Dieta- eta alergeno-informazioa gehitzen du

### 3. urratsa: berrikusi eta pertsonalizatu

Hau egin dezakezu:

1. Menu-elementuak eta prezioak editatu
2. Kategoriak gehitu edo kendu
3. Elementuak kategorien barruan berrantolatu
4. Deskribapenak eta dieta-informazioa eguneratu
5. Estiloa eta diseinu-antolamendua doitu

## Menua bistaratzeko aukerak

### Menu-orri osoa

Zure menu osoa erakusten duen orri dedikatu bat:

- Kategoriaren arabera antolatua
- Bilagarria eta iragazgarria
- Inprimatzeko egokia den diseinu-antolamendua
- Mugikorretarako egokitutako diseinua

### Menu-widgeta

Txertatu menu-atalak beste orri batzuetan:

- Nabarmendutako elementuak hasierako orrian
- Eguneko bereziak alboko barran
- Edari-menua tabernaren orrian
- Postreen erakusleihoa oinean

### Menuaren PDFa

Sortu deskargatzeko moduko PDF menu bat:

- Formatu profesionala
- Inprimatzeko prest dagoen kalitatea
- Irudiak eta deskribapenak barne
- Partekatzeko eta posta elektronikoz bidaltzeko erraza

## Dieta- eta alergeno-informazioa

### Dieta-atributuak

Markatu elementuak dieta-informazioarekin:

- **Beganoa** — animalia-produkturik gabe
- **Begetarianoa** — haragirik gabe
- **Glutenik gabea** — gaixotasun zeliakorako segurua
- **Esnekirik gabea** — esne-produkturik gabe
- **Fruitu lehorrik gabea** — zuhaitz-fruitu lehorrik edo kakahueterik gabe
- **Karbohidrato gutxikoa** — karbohidrato murriztuak
- **Proteina askokoa** — proteinatan aberatsa

### Alergeno-ohartarazpenak

Sartu alergeno arruntak:

- **Fruitu lehorrak** — zuhaitz-fruitu lehorrak eta kakahueteak
- **Itsaskiak** — krustazeoak eta moluskuak
- **Arraina** — arrain-espezie guztiak
- **Esnekiak** — esnea eta esne-produktuak
- **Arrautzak** — oilo-arrautzak
- **Soja** — soja-produktuak
- **Glutena** — garia eta glutena duten zerealak
- **Sesamoa** — sesamo-haziak eta olioa

## Menuaren kudeaketa

### Prezioak eguneratzea

Eguneratu menu-prezioak erraz:

1. Joan menu-orrira
2. Egin klik "Edit Menu" aukeran
3. Eguneratu elementuen prezioak
4. Gorde aldaketak
5. Aldaketak berehala agertzen dira zure gunean

### Sasoiko elementuak gehitzea

Sortu sasoiko menu-aldaerak:

1. Sortu menu-bertsio berri bat
2. Gehitu sasoiko elementuak
3. Markatu elementuak "Seasonal" gisa
4. Programatu erabilgarritasun-datak
5. Bistaratu automatikoki sasoian

### Bereziak kudeatzea

Bistaratu eguneko edo asteko bereziak:

1. Sortu "Specials" kategoria bat
2. Gehitu elementuak erabilgarritasun-datekin
3. Nabarmendu bereziak hasierako orrian
4. Eguneratu egunero edo astero
5. Artxibatu berezi zaharrak

## Theme Builder-ekin integrazioa

Theme Builder ostalaritzako guneetarako erabiltzean:

1. **Menuaren detekzio automatikoa** — janari/edari negozioa zaren identifikatzen du
2. **Menu-orria sortzea** — menu-orri profesionalak sortzen ditu
3. **Diseinuarekin bat etortzea** — menuek zure gunearen theme-arekin bat egiten dute
4. **Mugikorretarako optimizazioa** — menuak ederki bistaratzen dira telefonoetan
5. **SEO optimizazioa** — menuak bilatzaileentzat egokiak dira

## Praktika gomendatuak

### Menuaren diseinua

- **Antolaketa argia** — kategoria-egitura logikoa
- **Deskribapen irakurgarriak** — erakargarriak eta informatiboak
- **Prezio koherenteak** — moneta eta formatua argi
- **Argazki profesionalak** — kalitate handiko janari-irudiak
- **Zuriunea** — ez pilatu gehiegi orria

### Edukia

- **Deskribapen zehatzak** — deskribatu elementuak zehaztasunez
- **Bereziak nabarmendu** — egin bereziak nabarmentzeko moduan
- **Alergenoak sartu** — zerrendatu beti alergenoak
- **Aldizka eguneratu** — mantendu prezioak eta elementuak eguneratuta
- **Erabili hizkera erakargarria** — egin elementuak gozo entzuteko moduan

### Irisgarritasuna

- **Letra-tipo irakurgarriak** — erabili letra-mota argiak eta irakurgarriak
- **Kontraste nahikoa** — ziurtatu testua irakurgarria dela
- **Dieta-etiketak** — markatu argi dieta-aukerak
- **Alergeno-ohartarazpenak** — bistaratu alergenoak nabarmen
- **Mugikorretarako egokia** — probatu gailu guztietan

## Adibideak

### Jatetxe-menuaren egitura

```
Hasierakoak
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese entsalada

Pasta platerak
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Plater nagusiak
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Postreak
├── Tiramisu
├── Panna Cotta
└── Gelato aukeraketa
```

### Kafetegiko menuaren egitura

```
Kafea
├── Espresso
├── Cappuccino
└── Latte

Opilak
├── Croissantak
├── Muffinak
└── Sconeak

Ogitartekoak
├── Caprese Panini
├── Indioilar ketuaren Club
└── Wrap begetarianoa
```

## Lotutako eginbideak

- [Sortu menua](../abilities/create-menu.md) — sortu nabigazio-menuak
- [Diseinuaren norabidea](./design-direction.md) — pertsonalizatu zure gunearen diseinua
- [Aurkikuntza-elkarrizketa](./discovery-interview.md) — planifikatu zure gunearen egitura
