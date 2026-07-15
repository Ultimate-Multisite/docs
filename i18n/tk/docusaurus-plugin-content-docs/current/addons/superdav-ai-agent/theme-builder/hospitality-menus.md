---
title: Myhmansöýerlik menýulary
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Myhmanhanaçylyk menýulary

**Myhmanhanaçylyk menýulary** aýratynlygy Theme Builder-e gurluşly iýmit we içgi menýu sahypalaryny göni WordPress saýtyňyza döretmäge we ýerleşdirmäge mümkinçilik berýär.

## Gysgaça syn {#overview}

Theme Builder indi restoranlar, kafeler, barlar we keýtering hyzmatlary ýaly myhmanhanaçylyk kärhanalary üçin professional, gurluşly menýu sahypalaryny döredip bilýär. Bu menýular saýtyňyzyň dizaýnyna doly birleşdirilýär we aňsatlyk bilen täzelenip hem dolandyrylyp bilner.

## Goldanýan myhmanhanaçylyk görnüşleri {#supported-hospitality-types}

- **Restoranlar** — doly hyzmatly nahar menýulary
- **Kafeler** — kofe we ýeňil nahar menýulary
- **Barlar we lounge-lar** — içgi we işdäaçar menýulary
- **Çörekhanalar** — konditer önümleri we çörek menýulary
- **Keýtering hyzmatlary** — çäre menýu saýlawlary
- **Food Truck-lar** — göçme iýmit hyzmaty menýulary
- **Piwo we çakyr öndürijiler** — düşündirişli içgi menýulary

## Menýu gurluşy {#menu-structure}

### Menýu kategoriýalary {#menu-categories}

Menýular kategoriýalara bölünýär:

- **Işdäaçarlar** — başlangyç naharlar we kiçi tabaklar
- **Esasy naharlar** — esasy tagamlar
- **Goşundylar** — ýany bilen berilýänler we gök önümler
- **Desertler** — süýji tagamlar
- **Içgiler** — içgiler (alkogolly we alkogolsyz)
- **Ýörite teklipler** — gündelik ýa-da möwsümleýin ýörite teklipler

### Menýu elementiniň formaty {#menu-item-format}

Her menýu elementi şulary öz içine alýar:

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

#### Element meýdanlary {#item-fields}

| Meýdan | Görnüş | Düşündiriş |
|-------|------|-------------|
| `name` | string | Tagamyň ýa-da içginiň ady |
| `description` | string | Elementiň jikme-jik düşündirişi |
| `price` | string | Baha (walýuta bilen formatlanan) |
| `dietary_info` | array | Iýmitleniş aýratynlyklary (Vegan, Gluten-Free we ş.m.) |
| `allergens` | array | Umumy allergenler (Nuts, Shellfish we ş.m.) |
| `availability` | string | Haçan elýeterli (Daily, Seasonal we ş.m.) |

## Myhmanhanaçylyk menýularyny döretmek {#creating-hospitality-menus}

### 1-nji ädim: Menýu maglumatlaryny beriň {#step-1-provide-menu-information}

Theme Builder-e menýuňyz barada aýdyň:

```
Italýan restoranym üçin işdäaçarlar,
pasta tagamlary, esasy naharlar we desertler bilen restoran menýusyny döret. Bahalary we düşündirişleri goş.
```

### 2-nji ädim: Theme Builder menýuny döredýär {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Gurluşly menýu sahypasyny döredýär
2. Ony saýtyňyzyň temasyna laýyk dizaýn edýär
3. Elementleri kategoriýalara bölýär
4. Bahalary we düşündirişleri formatlaýar
5. Iýmitleniş we allergen maglumatlaryny goşýar

### 3-nji ädim: Gözden geçiriň we sazlaň {#step-3-review-and-customize}

Siz şulary edip bilersiňiz:

1. Menýu elementlerini we bahalary redaktirlemek
2. Kategoriýalary goşmak ýa-da aýyrmak
3. Kategoriýalaryň içinde elementleriň tertibini üýtgetmek
4. Düşündirişleri we iýmitleniş maglumatlaryny täzeläp durmak
5. Stil we ýerleşişi sazlamak

## Menýuny görkezmek saýlawlary {#menu-display-options}

### Doly menýu sahypasy {#full-menu-page}

Doly menýuňyzy görkezýän aýratyn sahypa:

- Kategoriýa boýunça tertiplenen
- Gözleg we süzgüç mümkinçiligi bolan
- Çap etmäge amatly ýerleşiş
- Mobil enjamlara uýgun dizaýn

### Menýu widjeti {#menu-widget}

Menýu bölümlerini beýleki sahypalara ýerleşdiriň:

- Baş sahypada aýratyn görkezilýän elementler
- Gapdal panelde gündelik ýörite teklipler
- Bar sahypasynda içgi menýusy
- Footer-de desert görkezilişi

### Menýu PDF {#menu-pdf}

Ýükläp alyp bolýan PDF menýu dörediň:

- Professional formatlama
- Çap etmäge taýýar hil
- Suratlary we düşündirişleri öz içine alýar
- Paýlaşmak we email bilen ibermek aňsat

## Iýmitleniş we allergen maglumatlary {#dietary-and-allergen-information}

### Iýmitleniş aýratynlyklary {#dietary-attributes}

Elementleri iýmitleniş maglumatlary bilen belläň:

- **Vegan** — haýwan önümleri ýok
- **Vegetarian** — et ýok
- **Gluten-Free** — çöliakiýa keseli üçin howpsuz
- **Dairy-Free** — süýt önümleri ýok
- **Nut-Free** — agaç hozlary ýa-da arahis ýok
- **Low-Carb** — azaldylan uglewodlar
- **High-Protein** — proteine baý

### Allergen duýduryşlary {#allergen-warnings}

Umumy allergenleri goşuň:

- **Nuts** — agaç hozlary we arahis
- **Shellfish** — leňňeç görnüşliler we molýuskalar
- **Fish** — balyklaryň ähli görnüşleri
- **Dairy** — süýt we süýt önümleri
- **Eggs** — towuk ýumurtgalary
- **Soy** — soýa önümleri
- **Gluten** — bugdaý we gluten saklaýan däneler
- **Sesame** — künji tohumlary we ýagy

## Menýu dolandyryşy {#menu-management}

### Bahalary täzeläp durmak {#updating-prices}

Menýu bahalaryny aňsatlyk bilen täzeläň:

1. Menýu sahypasyna geçiň
2. "Menýuny redaktirlemek" düwmesine basyň
3. Elementleriň bahalaryny täzeläň
4. Üýtgetmeleri saklaň
5. Üýtgetmeler saýtyňyzda dessine görünýär

### Möwsümleýin elementleri goşmak {#adding-seasonal-items}

Möwsümleýin menýu görnüşlerini dörediň:

1. Täze menýu wersiýasyny dörediň
2. Möwsümleýin elementleri goşuň
3. Elementleri "Möwsümleýin" diýip belläň
4. Elýeterlilik senelerini meýilleşdiriň
5. Möwsüm wagty awtomatik görkeziň

### Ýörite teklipleri dolandyrmak {#managing-specials}

Gündelik ýa-da hepdelik ýörite teklipleri görkeziň:

1. "Ýörite teklipler" kategoriýasyny dörediň
2. Elýeterlilik seneleri bolan elementleri goşuň
3. Baş sahypada ýörite teklipleri tapawutlandyryň
4. Gündelik ýa-da hepdelik täzeläň
5. Köne ýörite teklipleri arhiwläň

## Theme Builder bilen integrasiýa {#integration-with-theme-builder}

Myhmanhanaçylyk saýtlary üçin Theme Builder ulanylanda:

1. **Awtomatik menýu kesgitlemesi** — siziň iýmit/içgi kärhanaňyzdygyňyzy anyklaýar
2. **Menýu sahypasyny döretmek** — professional menýu sahypalaryny döredýär
3. **Dizaýny laýyk getirmek** — menýular saýtyňyzyň temasyna laýyk gelýär
4. **Mobil optimizasiýa** — menýular telefonlarda owadan görkezilýär
5. **SEO optimizasiýa** — menýular gözleg ulgamlaryna amatly bolýar

## Iň gowy tejribeler {#best-practices}

### Menýu dizaýny {#menu-design}

- **Aýdyň tertipleme** — logiki kategoriýa gurluşy
- **Okamaga amatly düşündirişler** — işdä açýan we maglumat berýän
- **Yzygiderli baha görkezilişi** — aýdyň walýuta we formatlama
- **Professional suratlar** — ýokary hilli iýmit suratlary
- **Boş giňişlik** — sahypany aşa dykyz etmäň

### Mazmun {#content}

- **Takyk düşündirişler** — elementleri takyk beýan ediň
- **Ýörite teklipleri tapawutlandyryň** — ýörite teklipleri göze ilýän ediň
- **Allergenleri goşuň** — allergenleri elmydama sanawlaň
- **Yzygiderli täzeläň** — bahalary we elementleri häzirki ýagdaýda saklaň
- **Işdä açýan dil ulanyň** — elementleriň tagamly eşidilmegini gazanyň

### Elýeterlilik {#accessibility}

- **Okamaga amatly şriftler** — aýdyň, okalýan şrift görnüşlerini ulanyň
- **Ýeterlik kontrast** — tekstiň okalýandygyna göz ýetiriň
- **Iýmitleniş bellikleri** — iýmitleniş saýlawlaryny aýdyň belläň
- **Allergen duýduryşlary** — allergenleri göze ilýän ýerde görkeziň
- **Mobil üçin amatly** — ähli enjamlarda synap görüň

## Mysallar {#examples}

### Restoran menýusynyň gurluşy {#restaurant-menu-structure}

```
Işdäaçarlar
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Makaron tagamlary
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Esasy tagamlar
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Süýjüler
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafe menýusynyň gurluşy {#cafe-menu-structure}

```
Kofe
├── Espresso
├── Cappuccino
└── Latte

Hamyr önümleri
├── Croissants
├── Muffins
└── Scones

Sandwiçler
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Baglanyşykly aýratynlyklar {#related-features}

- [Menýu döret](../abilities/create-menu.md) — nawigasiýa menýularyny dörediň
- [Dizaýn ugry](./design-direction.md) — saýtyňyzyň dizaýnyny sazlaň
- [Açyş söhbetdeşligi](./discovery-interview.md) — saýtyňyzyň gurluşyny meýilleşdiriň
