---
title: Menûyên Mêvanperweriyê
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menûyên Mêvanperweriyê {#hospitality-menus}

Taybetmendiya **Menûyên Mêvanperweriyê** dihêle Theme Builder rûpelên menûyên xwarin û vexwarinê yên bi avahiyek rêkûpêk rasterast di malpera te ya WordPress de çêbike û têxe navê.

## Nêrîna Giştî {#overview}

Theme Builder êdî dikare ji bo karsaziyên mêvanperweriyê, wek xwaringeh, kafe, bar, û xizmetên cateringê, rûpelên menûyê yên profesyonel û bi avahiyek rêkûpêk çêbike. Ev menû bi temamî bi sêwirana malpera te re yekgirtî ne û bi hêsanî tên nûkirin û birêvebirin.

## Cureyên Mêvanperweriyê yên Piştgirîkirî {#supported-hospitality-types}

- **Xwaringeh** — menûyên xwarinê yên xizmeta temam
- **Kafe** — menûyên qehwe û xwarinên sivik
- **Bar û Lounge** — menûyên vexwarin û pêşxwarinan
- **Nanpêjxane** — menûyên şîrînî û nan
- **Xizmetên Cateringê** — vebijarkên menûyê ji bo bûyeran
- **Erebeyên Xwarinê** — menûyên xizmeta xwarinê ya mobîl
- **Bîrgeh û Şerabgeh** — menûyên vexwarinan bi danasînan

## Avahiya Menûyê {#menu-structure}

### Kategoriyên Menûyê {#menu-categories}

Menû di kategoriyan de tên rêxistin:

- **Pêşxwarin** — destpêk û tepsiyên biçûk
- **Xwarinên Sereke** — xwarinên sereke
- **Li Kêleka Xwarinê** — hevra û sebze
- **Şîrînî** — xwarinên şîrîn
- **Vexwarin** — vexwarin (alkolî û bê-alkol)
- **Taybetî** — taybetiyên rojane an demsalî

### Forma Hêmana Menûyê {#menu-item-format}

Her hêmaneke menûyê ev tiştan dihewîne:

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

#### Qadên Hêmanê {#item-fields}

| Qad | Cure | Danasîn |
|-------|------|-------------|
| `name` | string | Navê xwarin an vexwarinê |
| `description` | string | Danasîna berfireh a hêmanê |
| `price` | string | Biha (bi diravê formatkirî) |
| `dietary_info` | array | Taybetmendiyên xwarinê (Vegan, Bê-gluten, hwd.) |
| `allergens` | array | Alerjenên hevpar (gûz, heywanên deryayî yên qalikdar, hwd.) |
| `availability` | string | Kengê berdest e (rojane, demsalî, hwd.) |

## Çêkirina Menûyên Mêvanperweriyê {#creating-hospitality-menus}

### Gav 1: Agahiyên Menûyê Bide {#step-1-provide-menu-information}

Ji Theme Builder re derbarê menûya xwe de bibêje:

```
Ji bo xwaringeha min a Îtalî menûyeke xwaringehê çêke bi pêşxwarin,
xwarinên pasta, xwarinên sereke, û şîrînî. Biha û danasînan jî tê de bike.
```

### Gav 2: Theme Builder Menûyê Çêdike {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Rûpelek menûyê ya bi avahiyek rêkûpêk çêdike
2. Wê li gorî tema ya malpera te disêwirîne
3. Hêmanan di kategoriyan de rêx dike
4. Biha û danasînan format dike
5. Agahiyên xwarinê û alerjenan lê zêde dike

### Gav 3: Binêre û Taybet Bike {#step-3-review-and-customize}

Tu dikarî:

1. Hêmanên menûyê û bihayan biguherînî
2. Kategoriyan zêde bikî an jê bibî
3. Hêmanan di nav kategoriyan de ji nû ve rêz bikî
4. Danasîn û agahiyên xwarinê nû bikî
5. Şêwe û rêzkirinê sererast bikî

## Vebijarkên Nîşandana Menûyê {#menu-display-options}

### Rûpela Menûyê ya Temam {#full-menu-page}

Rûpelek taybet ku menûya te ya temam nîşan dide:

- Li gorî kategoriyan rêxistî
- Dikare lê bê gerîn û parzûnkirin
- Rêzkirina guncan ji bo çapê
- Sêwirana bersivdar ji bo mobîlê

### Widget-a Menûyê {#menu-widget}

Beşên menûyê di rûpelên din de bicih bike:

- Hêmanên hilbijartî li ser rûpela malê
- Taybetiyên rojane li ser sidebar
- Menûya vexwarinan li ser rûpela barê
- Pêşandana şîrîniyan li ser footer

### PDF-a Menûyê {#menu-pdf}

Menûyeke PDF ya daxistinê çêbike:

- Formatkirina profesyonel
- Kalîteya amade ji bo çapê
- Wêne û danasîn tê de hene
- Hêsan e ji bo parvekirin û şandin bi emailê

## Agahiyên Xwarinê û Alerjenan {#dietary-and-allergen-information}

### Taybetmendiyên Xwarinê {#dietary-attributes}

Hêmanan bi agahiyên xwarinê nîşan bike:

- **Vegan** — bê ti hilberên heywanî
- **Vegetarî** — bê goşt
- **Bê-gluten** — ewle ji bo nexweşiya celiacê
- **Bê-şîr** — bê hilberên şîrê
- **Bê-gûz** — bê gûzên daran an fistiq
- **Kêm-karbohîdrat** — karbohîdrat kêmkirî
- **Proteîn-zêde** — dewlemend bi proteînê

### Hişyariyên Alerjenan {#allergen-warnings}

Alerjenên hevpar tê de bike:

- **Gûz** — gûzên daran û fistiq
- **Heywanên deryayî yên qalikdar** — crustacean û mollusk
- **Masî** — hemû cureyên masiyan
- **Şîr** — şîr û hilberên şîrê
- **Hêk** — hêkên mirîşkan
- **Soy** — hilberên soyê
- **Gluten** — genim û daneyên ku gluten dihewînin
- **Kuncî** — tov û rûnê kuncî

## Birêvebirina Menûyê {#menu-management}

### Nûkirina Bihayan {#updating-prices}

Bi hêsanî bihayên menûyê nû bike:

1. Biçe rûpela menûyê
2. Li "Menûyê Biguherîne" bitikîne
3. Bihayên hêmanan nû bike
4. Guhertinan tomar bike
5. Guhertin tavilê li ser malpera te xuya dibin

### Zêdekirina Hêmanên Demsalî {#adding-seasonal-items}

Guhertoyên menûyê yên demsalî çêbike:

1. Guhertoyeke nû ya menûyê çêbike
2. Hêmanên demsalî zêde bike
3. Hêmanan wek "Demsalî" nîşan bike
4. Dîrokên berdestbûnê plansaz bike
5. Di demsalê de bixweber nîşan bide

### Birêvebirina Taybetiyan {#managing-specials}

Taybetiyên rojane an heftane nîşan bide:

1. Kategoriyeke "Taybetî" çêbike
2. Hêmanan bi dîrokên berdestbûnê zêde bike
3. Taybetiyan li ser rûpela malê derxe pêş
4. Rojane an heftane nû bike
5. Taybetiyên kevn arşîv bike

## Yekgirtin bi Theme Builder re {#integration-with-theme-builder}

Dema Theme Builder ji bo malperên mêvanperweriyê tê bikaranîn:

1. **Dîtina menûyê ya bixweber** — nas dike ka tu karsaziyeke xwarin/vexwarinê yî an na
2. **Çêkirina rûpela menûyê** — rûpelên menûyê yên profesyonel çêdike
3. **Lihevhatina sêwiranê** — menû bi tema ya malpera te re li hev tê
4. **Başkirina mobîlê** — menû li ser telefonan bi xweşikî tên nîşandan
5. **Başkirina SEO** — menû ji bo motora gerînê guncan in

## Rêbazên Herî Baş {#best-practices}

### Sêwirana Menûyê {#menu-design}

- **Rêxistina zelal** — avahiya kategoriyan a mentiqî
- **Danasînên xwendbar** — bi çêj û agahîdar
- **Bihayên hevgirtî** — dirav û formatkirina zelal
- **Wêneyên profesyonel** — wêneyên xwarinê yên bi kalîteya bilind
- **Cihê vala** — rûpelê pir tije neke

### Naverok {#content}

- **Danasînên rast** — hêmanan bi rastî danasîn bike
- **Taybetiyan derxe pêş** — taybetiyan balkêş bike
- **Alerjenan tê de bike** — her dem alerjenan navnîş bike
- **Bi rêkûpêk nû bike** — biha û hêmanan nû bigire
- **Zimanê bi çêj bi kar bîne** — hêmanan xweş û lezzetdar bidengîne

### Gihîştinbarî {#accessibility}

- **Fontên xwendbar** — curetîpên zelal û xwendbar bi kar bîne
- **Kontrasta têr** — piştrast bike ku nivîs xwendbar e
- **Etîketên xwarinê** — vebijarkên xwarinê bi zelalî nîşan bike
- **Hişyariyên alerjenan** — alerjenan bi awayekî berbiçav nîşan bide
- **Guncan ji bo mobîlê** — li ser hemû amûran biceribîne

## Mînak {#examples}

### Avahiya Menûya Xwaringehê {#restaurant-menu-structure}

```
Xwarinên destpêkê
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salata Caprese

Xwarinên pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Xwarinên sereke
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Şîrînî
├── Tiramisu
├── Panna Cotta
└── Hilbijartina Gelato
```

### Avahiya menuya kafeyê {#cafe-menu-structure}

```
Qehwe
├── Espresso
├── Cappuccino
└── Latte

Şîrînîyên firinê
├── Croissant
├── Muffin
└── Scone

Sandwîç
├── Panini Caprese
├── Klûba tirkiyê ya dûmanî
└── Pêçeka zebzeyan
```

## Taybetmendiyên têkildar {#related-features}

- [Menu biafirîne](../abilities/create-menu.md) — menuên navigasyonê biafirîne
- [Arasteya dîzaynê](./design-direction.md) — dîzayna malpera xwe takekesî bike
- [Hevpeyvîna keşfê](./discovery-interview.md) — avahiya malpera xwe plan bike
