---
title: Dimenu tsa Kamohelo
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Dimenu tsa Hospitality

Sebopeho sa **Hospitality Menus** se dumella Theme Builder ho hlahisa le ho kenya maqephe a dimenu tsa dijo le dino tse hlophisitsweng ka kotloloho kahara sebaka sa hao sa WordPress.

## Kakaretso

Theme Builder jwale e ka bopa maqephe a dimenu a profeshenale, a hlophisitsweng bakeng sa dikgwebo tsa kamohelo tse kenyeletsang direschorente, dikhefi, dibara, le ditshebeletso tsa catering. Dimenu tsena di kopantswe ka botlalo le moralo wa sebaka sa hao mme di ka ntlafatswa le ho laolwa ha bonolo.

## Mefuta ya Hospitality e Tshehetswang

- **Direschorente** — dimenu tsa dijo tsa tshebeletso e felletseng
- **Dikhefi** — dimenu tsa kofi le dijo tse bobebe
- **Dibara le Lounges** — dimenu tsa dino le dijo tse qalang
- **Dibakery** — dimenu tsa dipastry le bohobe
- **Ditshebeletso tsa Catering** — dikgetho tsa menu ya diketsahalo
- **Food Trucks** — dimenu tsa tshebeletso ya dijo e tsamayang
- **Breweries le Wineries** — dimenu tsa dino tse nang le ditlhaloso

## Sebopeho sa Menu

### Dihlopha tsa Menu

Dimenu di hlophiswa ka dihlopha:

- **Dijo tse Qalang** — di-starter le dipoleiti tse nyane
- **Dijo tse Kgolo** — dikhoso tse kgolo
- **Dijo tse Lehlakoreng** — tse tsamaisanang le meroho
- **Dijo tse Monate** — dikgonamontho tse monate
- **Dino** — dino (tse nang le tai le tse se nang tai)
- **Tse Ikgethileng** — tse ikgethileng tsa letsatsi le letsatsi kapa tsa sehla

### Sebopeho sa Ntho ya Menu

Ntho ka nngwe ya menu e kenyeletsa:

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

#### Dikgoro tsa Ntho

| Kgoro | Mofuta | Tlhaloso |
|-------|------|-------------|
| `name` | string | Lebitso la sejana kapa seno |
| `description` | string | Tlhaloso e qaqileng ya ntho eo |
| `price` | string | Theko (e hlophisitswe ka tjhelete) |
| `dietary_info` | array | Dintlha tsa dijo (Vegan, Gluten-Free, jj.) |
| `allergens` | array | Dintho tse tlwaelehileng tse bakang allergy (Manate, Shellfish, jj.) |
| `availability` | string | Ha e fumaneha (Letsatsi le letsatsi, Ka sehla, jj.) |

## Ho Bopa Dimenu tsa Hospitality

### Mohato wa 1: Fana ka Tlhahisoleseding ya Menu

Bolella Theme Builder ka menu ya hao:

```
Bopa menu ya reschorente bakeng sa reschorente ya ka ya Italy e nang le dijo tse qalang,
dijana tsa pasta, dikhoso tse kgolo, le dijo tse monate. Kenyeletsa ditheko le ditlhaloso.
```

### Mohato wa 2: Theme Builder e Hlahisa Menu

Theme Builder:

1. E bopa leqephe la menu le hlophisitsweng
2. E le rala hore le tshwane le theme ya sebaka sa hao
3. E hlophisa dintho ka dihlopha
4. E fomata ditheko le ditlhaloso
5. E eketsa tlhahisoleseding ya dijo le ya dintho tse bakang allergy

### Mohato wa 3: Lekola mme o Iketsetse

O ka:

1. Fetola dintho tsa menu le ditheko
2. Eketsa kapa tlosa dihlopha
3. Hlophisa hape dintho kahara dihlopha
4. Ntlafatsa ditlhaloso le tlhahisoleseding ya dijo
5. Fetola setaele le peakanyo

## Dikgetho tsa Pontsho ya Menu

### Leqephe le Feletseng la Menu

Leqephe le inehetseng le bontshang menu ya hao e felletseng:

- E hlophisitswe ka sehlopha
- E ka batlwa le ho filthara
- Peakanyo e loketseng ho hatiswa
- Moralo o arabelang disebedisweng tsa mobile

### Menu Widget

Kenya dikarolo tsa menu maqepheng a mang:

- Dintho tse hlahelletseng leqepheng la lapeng
- Tse ikgethileng tsa letsatsi le letsatsi sidebar
- Menu ya dino leqepheng la bara
- Pontsho ya dijo tse monate footer

### Menu PDF

Hlahisa menu ya PDF e ka jarollwang:

- Ho fomata ha profeshenale
- Boleng bo loketseng ho hatiswa
- E kenyeletsa ditshwantsho le ditlhaloso
- Ho bonolo ho e arolelana le ho e romela ka email

## Tlhahisoleseding ya Dijo le Dintho tse Bakang Allergy

### Dintlha tsa Dijo

Tshwaya dintho ka tlhahisoleseding ya dijo:

- **Vegan** — ha ho dihlahiswa tsa diphoofolo
- **Vegetarian** — ha ho nama
- **Gluten-Free** — e bolokehile bakeng sa bolwetse ba celiac
- **Dairy-Free** — ha ho dihlahiswa tsa lebese
- **Nut-Free** — ha ho manate a difate kapa peanuts
- **Low-Carb** — dikarbohaedreite tse fokoditsweng
- **High-Protein** — e nang le proteine e ngata

### Ditemoso tsa Allergen

Kenyeletsa dintho tse tlwaelehileng tse bakang allergy:

- **Manate** — manate a difate le peanuts
- **Shellfish** — crustaceans le mollusks
- **Ditlhapi** — mefuta yohle ya ditlhapi
- **Dairy** — lebese le dihlahiswa tsa lebese
- **Mahe** — mahe a kgogo
- **Soy** — dihlahiswa tsa soy
- **Gluten** — koro le dithollo tse nang le gluten
- **Sesame** — peo ya sesame le oli

## Taolo ya Menu

### Ho Ntlafatsa Ditheko

Ntlafatsa ditheko tsa menu ha bonolo:

1. Eya leqepheng la menu
2. Tobetsa "Fetola Menu"
3. Ntlafatsa ditheko tsa dintho
4. Boloka diphetoho
5. Diphetoho di hlaha hanghang sebakeng sa hao

### Ho Eketsa Dintho tsa Sehla

Bopa diphetolelo tsa menu tsa sehla:

1. Bopa mofuta o motjha wa menu
2. Eketsa dintho tsa sehla
3. Tshwaya dintho e le "Ka sehla"
4. Rala matsatsi a phumaneho
5. Di bontshwa ka boiketsetso nakong ya sehla

### Ho Laola Tse Ikgethileng

Bontsha tse ikgethileng tsa letsatsi le letsatsi kapa tsa beke le beke:

1. Bopa sehlopha sa "Tse Ikgethileng"
2. Eketsa dintho tse nang le matsatsi a phumaneho
3. Totobatsa tse ikgethileng leqepheng la lapeng
4. Ntlafatsa letsatsi le letsatsi kapa beke le beke
5. Boloka tse ikgethileng tsa kgale polokelong

## Kopanyo le Theme Builder

Ha o sebedisa Theme Builder bakeng sa dibaka tsa hospitality:

1. **Ho lemoha menu ka boiketsetso** — e tseba hore na o kgwebo ya dijo/dino
2. **Ho bopa leqephe la menu** — e hlahisa maqephe a dimenu a profeshenale
3. **Ho tsamaisana le moralo** — dimenu di tshwana le theme ya sebaka sa hao
4. **Ntlafatso ya mobile** — dimenu di bontsha hantle haholo difonong
5. **Ntlafatso ya SEO** — dimenu di loketse dienjine tsa patlo

## Mekgwa e Molemo ka ho Fetisisa

### Moralo wa Menu

- **Tlhophiso e hlakileng** — sebopeho sa dihlopha se utlwahalang
- **Ditlhaloso tse balehang** — tse hohelang takatso ya dijo le tse fanang ka lesedi
- **Ditjeho tse tsitsitseng** — tjhelete le ho fomata tse hlakileng
- **Ditshwantsho tsa profeshenale** — ditshwantsho tsa dijo tsa boleng bo hodimo
- **Sebaka se se nang mongolo** — o se ke wa petetsanya leqephe

### Dikahare

- **Ditlhaloso tse nepahetseng** — hlalosa dintho ka nepo
- **Totobatsa tse ikgethileng** — etsa hore tse ikgethileng di hlahelle
- **Kenyeletsa allergens** — kamehla thathamisa allergens
- **Ntlafatsa kgafetsa** — boloka ditheko le dintho di le nakong
- **Sebedisa puo e tsosang takatso ya dijo** — etsa hore dintho di utlwahale di le monate

### Phihlelleho

- **Mefuta ya mongolo e balehang** — sebedisa mefuta ya mongolo e hlakileng, e balehang
- **Phapang e lekaneng** — netefatsa hore mongolo wa baleha
- **Matshwao a dijo** — tshwaya dikgetho tsa dijo ka ho hlaka
- **Ditemoso tsa allergen** — bontsha allergens ka ho hlahella
- **E loketse mobile** — leka disebedisweng tsohle

## Mehlala

### Sebopeho sa Menu ya Reschorente

```
Dijana tsa ho qala
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salate ya Caprese

Dijana tsa pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Dijana tse ka sehloohong
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Dijo tse tswekere
├── Tiramisu
├── Panna Cotta
└── Kgetho ya Gelato
```

### Sebopeho sa Menu ya Khefi

```
Kofi
├── Espresso
├── Cappuccino
└── Latte

Dikuku tse bakilweng
├── Croissants
├── Muffins
└── Scones

Disementjhisi
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Dikarolo tse Amanang

- [Bopa Menu](../abilities/create-menu.md) — bopa dimenu tsa ho tsamaya
- [Tataiso ya Moralo](./design-direction.md) — iketsetse moralo wa sebaka sa hao sa webo
- [Puisano ya Phuputso](./discovery-interview.md) — rera sebopeho sa sebaka sa hao sa webo
