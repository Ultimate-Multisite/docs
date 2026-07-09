---
title: Mga Menu sa Pag-abiabi
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Mga Menu sa Hospitality

Ang feature nga **Mga Menu sa Hospitality** nagtugot sa Theme Builder sa paghimo ug pag-embed og istrukturadong mga panid sa menu sa pagkaon ug ilimnon direkta sa imong WordPress nga website.

## Kinatibuk-ang Tan-aw

Ang Theme Builder karon makahimo na og propesyonal, istrukturadong mga panid sa menu para sa mga negosyo sa hospitality lakip ang mga restawran, cafe, bar, ug mga serbisyo sa catering. Kini nga mga menu hingpit nga na-integrate sa disenyo sa imong website ug dali ra ma-update ug madumala.

## Gisuportahang mga Uri sa Hospitality

- **Mga Restawran** — mga menu sa full-service nga pagkaon
- **Mga Cafe** — mga menu sa kape ug gaan nga pagkaon
- **Mga Bar ug Lounge** — mga menu sa ilimnon ug appetizer
- **Mga Panaderya** — mga menu sa pastry ug pan
- **Mga Serbisyo sa Catering** — mga opsyon sa menu sa event
- **Mga Food Truck** — mga menu sa mobile nga serbisyo sa pagkaon
- **Mga Brewery ug Winery** — mga menu sa ilimnon nga adunay mga deskripsyon

## Istruktura sa Menu

### Mga Kategoriya sa Menu

Ang mga menu gi-organisar ngadto sa mga kategoriya:

- **Mga Appetizer** — mga pang-abli ug gagmay nga plato
- **Mga Entree** — mga pangunang putahe
- **Mga Side** — mga kauban nga putahe ug utanon
- **Mga Dessert** — tam-is nga mga pagkaon
- **Mga Ilimnon** — mga ilimnon (alkoholiko ug dili alkoholiko)
- **Mga Espesyal** — adlaw-adlaw o panahonon nga mga espesyal

### Pormat sa Item sa Menu

Ang matag item sa menu naglakip sa:

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

#### Mga Natad sa Item

| Natad | Uri | Deskripsyon |
|-------|------|-------------|
| `name` | string | Ngalan sa putahe o ilimnon |
| `description` | string | Detalyadong deskripsyon sa item |
| `price` | string | Presyo (gi-format nga adunay currency) |
| `dietary_info` | array | Mga hiyas sa pagkaon (Vegan, Gluten-Free, ug uban pa) |
| `allergens` | array | Kasagarang mga allergen (mani, shellfish, ug uban pa) |
| `availability` | string | Kanus-a magamit (Adlaw-adlaw, Panahonon, ug uban pa) |

## Paghimo og mga Menu sa Hospitality

### Lakang 1: Ihatag ang Impormasyon sa Menu

Sultihi ang Theme Builder bahin sa imong menu:

```
Paghimo og menu sa restawran para sa akong Italyanong restawran nga adunay mga appetizer,
mga putahe sa pasta, mga pangunang putahe, ug mga dessert. Ilakip ang mga presyo ug deskripsyon.
```

### Lakang 2: Ang Theme Builder Maghimo og Menu

Ang Theme Builder:

1. Mohimo og istrukturadong panid sa menu
2. Modisenyo niini aron mohaom sa theme sa imong website
3. Mo-organisar sa mga item ngadto sa mga kategoriya
4. Mo-format sa mga presyo ug deskripsyon
5. Modugang og impormasyon sa dietary ug allergen

### Lakang 3: Ribyuha ug I-customize

Mahimo nimo:

1. I-edit ang mga item sa menu ug mga presyo
2. Modugang o motangtang og mga kategoriya
3. Usbon ang han-ay sa mga item sulod sa mga kategoriya
4. I-update ang mga deskripsyon ug dietary nga impormasyon
5. I-adjust ang estilo ug layout

## Mga Opsyon sa Pagpakita sa Menu

### Tibuok Panid sa Menu

Usa ka dedikadong panid nga nagpakita sa imong kompleto nga menu:

- Gi-organisar pinaagi sa kategoriya
- Mapangita ug ma-filter
- Layout nga angay i-print
- Disenyo nga responsive sa mobile

### Widget sa Menu

I-embed ang mga seksyon sa menu sa ubang mga panid:

- Gipili nga mga item sa homepage
- Adlaw-adlaw nga mga espesyal sa sidebar
- Menu sa ilimnon sa panid sa bar
- Pagpakita sa dessert sa footer

### Menu PDF

Paghimo og ma-download nga PDF nga menu:

- Propesyonal nga pag-format
- Kalidad nga andam i-print
- Naglakip og mga hulagway ug deskripsyon
- Sayon ipaambit ug i-email

## Impormasyon sa Dietary ug Allergen

### Mga Hiyas sa Dietary

Markahi ang mga item gamit ang impormasyon sa dietary:

- **Vegan** — walay produkto sa hayop
- **Vegetarian** — walay karne
- **Gluten-Free** — luwas para sa celiac disease
- **Dairy-Free** — walay mga produkto sa gatas
- **Nut-Free** — walay tree nuts o mani
- **Low-Carb** — gipakunhod nga carbohydrates
- **High-Protein** — daghan og protina

### Mga Pasidaan sa Allergen

Ilakip ang kasagarang mga allergen:

- **Mga Mani** — tree nuts ug mani
- **Shellfish** — mga crustacean ug mollusk
- **Isda** — tanang klase sa isda
- **Dairy** — gatas ug mga produkto sa gatas
- **Itlog** — itlog sa manok
- **Soy** — mga produkto sa soy
- **Gluten** — trigo ug mga lugas nga adunay gluten
- **Sesame** — mga liso ug lana sa sesame

## Pagdumala sa Menu

### Pag-update sa mga Presyo

Sayon nga i-update ang mga presyo sa menu:

1. Adto sa panid sa menu
2. I-klik ang "I-edit ang Menu"
3. I-update ang mga presyo para sa mga item
4. I-save ang mga kausaban
5. Ang mga kausaban makita dayon sa imong website

### Pagdugang og Panahonon nga mga Item

Paghimo og panahonon nga mga variation sa menu:

1. Paghimo og bag-ong bersyon sa menu
2. Pagdugang og panahonon nga mga item
3. Markahi ang mga item isip "Panahonon"
4. I-iskedyul ang mga petsa sa availability
5. Awtomatikong ipakita sulod sa panahon

### Pagdumala sa mga Espesyal

Ipakita ang adlaw-adlaw o sinemana nga mga espesyal:

1. Paghimo og kategoriya nga "Mga Espesyal"
2. Pagdugang og mga item nga adunay mga petsa sa availability
3. I-highlight ang mga espesyal sa homepage
4. I-update adlaw-adlaw o sinemana
5. I-archive ang daang mga espesyal

## Integrasyon sa Theme Builder

Kung mogamit og Theme Builder para sa mga website sa hospitality:

1. **Awtomatikong pag-ila sa menu** — mailhan kung negosyo ka sa pagkaon/ilimnon
2. **Paghimo og panid sa menu** — mohimo og propesyonal nga mga panid sa menu
3. **Pagpaangay sa disenyo** — ang mga menu mohaom sa theme sa imong website
4. **Pag-optimize sa mobile** — ang mga menu nindot tan-awon sa mga telepono
5. **Pag-optimize sa SEO** — ang mga menu friendly sa search engine

## Pinakamaayong mga Pamaagi

### Disenyo sa Menu

- **Tin-aw nga organisasyon** — lohikal nga istruktura sa kategoriya
- **Masabtan nga mga deskripsyon** — makapagana sa gana ug informativo
- **Konsistenteng presyo** — tin-aw nga currency ug pag-format
- **Propesyonal nga mga litrato** — taas og kalidad nga mga hulagway sa pagkaon
- **Whitespace** — ayaw paghuot sa panid

### Sulod

- **Sakto nga mga deskripsyon** — ihulagway ang mga item sa sakto nga paagi
- **I-highlight ang mga espesyal** — himoa nga molutaw ang mga espesyal
- **Ilakip ang mga allergen** — kanunay ilista ang mga allergen
- **Regular nga i-update** — panatilihing kasamtangan ang mga presyo ug item
- **Gamita ang makapagana sa gana nga pinulongan** — himoa nga lamian paminawon ang mga item

### Accessibility

- **Masabtan nga mga font** — gamita ang tin-aw ug dali basahon nga mga typeface
- **Igong contrast** — siguroa nga mabasa ang teksto
- **Mga label sa dietary** — klarong markahi ang mga opsyon sa dietary
- **Mga pasidaan sa allergen** — ipakita sa klarong lugar ang mga allergen
- **Mobile-friendly** — sulayi sa tanang device

## Mga Pananglitan

### Istruktura sa Menu sa Restawran

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Estruktura sa Menu sa Kapehan

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## May Kalabotang mga Bahin

- [Paghimo og Menu](../abilities/create-menu.md) — paghimo og mga menu sa nabigasyon
- [Direksyon sa Disenyo](./design-direction.md) — ipahiangay ang disenyo sa imong site
- [Interbyu sa Pagdiskobre](./discovery-interview.md) — planuha ang estruktura sa imong site
