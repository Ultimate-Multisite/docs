---
title: Mga Menu ng Hospitality
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality Menus {#hospitality-menus}

Ang feature na **Hospitality Menus** ay nagpapahintulot sa Theme Builder na bumuo at mag-embed ng nakaayos na mga pahina ng menu ng pagkain at inumin nang direkta sa iyong WordPress site.

## Pangkalahatang-ideya {#overview}

Maaari na ngayong gumawa ang Theme Builder ng propesyonal at nakaayos na mga pahina ng menu para sa mga negosyo sa hospitality kabilang ang mga restaurant, cafe, bar, at catering services. Ang mga menu na ito ay ganap na integrated sa disenyo ng iyong site at madaling ma-update at mapamahalaan.

## Mga Sinusuportahang Uri ng Hospitality {#supported-hospitality-types}

- **Mga Restaurant** — mga menu para sa full-service na kainan
- **Mga Cafe** — mga menu para sa kape at magagaan na pagkain
- **Mga Bar at Lounge** — mga menu para sa inumin at appetizer
- **Mga Bakery** — mga menu para sa pastry at tinapay
- **Mga Catering Service** — mga opsyon sa menu para sa event
- **Mga Food Truck** — mga menu para sa mobile food service
- **Mga Brewery at Winery** — mga menu ng inumin na may mga paglalarawan

## Istruktura ng Menu {#menu-structure}

### Mga Kategorya ng Menu {#menu-categories}

Ang mga menu ay nakaayos sa mga kategorya:

- **Mga Appetizer** — panimula at maliliit na putahe
- **Mga Entree** — pangunahing putahe
- **Mga Side** — mga kasabay na pagkain at gulay
- **Mga Dessert** — matatamis na pagkain
- **Mga Inumin** — mga inumin (may alak at walang alak)
- **Mga Special** — pang-araw-araw o pana-panahong special

### Format ng Item sa Menu {#menu-item-format}

Kasama sa bawat item sa menu ang:

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

#### Mga Field ng Item {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Pangalan ng putahe o inumin |
| `description` | string | Detalyadong paglalarawan ng item |
| `price` | string | Presyo (naka-format na may currency) |
| `dietary_info` | array | Mga katangiang pandiyeta (Vegan, Gluten-Free, atbp.) |
| `allergens` | array | Mga karaniwang allergen (Nuts, Shellfish, atbp.) |
| `availability` | string | Kung kailan available (Araw-araw, Pana-panahon, atbp.) |

## Paggawa ng Hospitality Menus {#creating-hospitality-menus}

### Hakbang 1: Magbigay ng Impormasyon ng Menu {#step-1-provide-menu-information}

Sabihin sa Theme Builder ang tungkol sa iyong menu:

```
Gumawa ng restaurant menu para sa aking Italian restaurant na may mga appetizer,
mga pasta dish, pangunahing putahe, at dessert. Isama ang mga presyo at paglalarawan.
```

### Hakbang 2: Binubuo ng Theme Builder ang Menu {#step-2-theme-builder-generates-menu}

Ang Theme Builder ay:

1. Gumagawa ng nakaayos na pahina ng menu
2. Dinidisenyo ito para tumugma sa theme ng iyong site
3. Inaayos ang mga item sa mga kategorya
4. Ifo-format ang mga presyo at paglalarawan
5. Nagdaragdag ng impormasyong pandiyeta at allergen

### Hakbang 3: Suriin at I-customize {#step-3-review-and-customize}

Maaari mong:

1. I-edit ang mga item sa menu at mga presyo
2. Magdagdag o mag-alis ng mga kategorya
3. Muling ayusin ang mga item sa loob ng mga kategorya
4. I-update ang mga paglalarawan at impormasyong pandiyeta
5. Ayusin ang styling at layout

## Mga Opsyon sa Pagpapakita ng Menu {#menu-display-options}

### Buong Pahina ng Menu {#full-menu-page}

Isang nakalaang pahina na nagpapakita ng iyong kumpletong menu:

- Nakaayos ayon sa kategorya
- Maaaring hanapin at i-filter
- Layout na angkop sa pag-print
- Disenyong mobile-responsive

### Menu Widget {#menu-widget}

Mag-embed ng mga seksyon ng menu sa ibang mga pahina:

- Mga featured item sa homepage
- Mga pang-araw-araw na special sa sidebar
- Menu ng inumin sa pahina ng bar
- Showcase ng dessert sa footer

### Menu PDF {#menu-pdf}

Bumuo ng nada-download na PDF menu:

- Propesyonal na formatting
- Kalidad na handa para sa pag-print
- May kasamang mga larawan at paglalarawan
- Madaling ibahagi at i-email

## Impormasyong Pandiyeta at Allergen {#dietary-and-allergen-information}

### Mga Katangiang Pandiyeta {#dietary-attributes}

Markahan ang mga item ng impormasyong pandiyeta:

- **Vegan** — walang produktong galing sa hayop
- **Vegetarian** — walang karne
- **Gluten-Free** — ligtas para sa celiac disease
- **Dairy-Free** — walang produktong gatas
- **Nut-Free** — walang tree nuts o peanuts
- **Low-Carb** — binawasang carbohydrates
- **High-Protein** — mayaman sa protina

### Mga Babala sa Allergen {#allergen-warnings}

Isama ang mga karaniwang allergen:

- **Nuts** — tree nuts at peanuts
- **Shellfish** — crustaceans at mollusks
- **Fish** — lahat ng uri ng isda
- **Dairy** — gatas at mga produktong gatas
- **Eggs** — itlog ng manok
- **Soy** — mga produktong soy
- **Gluten** — trigo at mga butil na may gluten
- **Sesame** — sesame seeds at langis

## Pamamahala ng Menu {#menu-management}

### Pag-update ng Mga Presyo {#updating-prices}

Madaling i-update ang mga presyo sa menu:

1. Pumunta sa pahina ng menu
2. I-click ang "I-edit ang Menu"
3. I-update ang mga presyo para sa mga item
4. I-save ang mga pagbabago
5. Agad na lalabas ang mga pagbabago sa iyong site

### Pagdaragdag ng Mga Pana-panahong Item {#adding-seasonal-items}

Gumawa ng mga pana-panahong variation ng menu:

1. Gumawa ng bagong bersyon ng menu
2. Magdagdag ng mga pana-panahong item
3. Markahan ang mga item bilang "Pana-panahon"
4. I-schedule ang mga petsa ng availability
5. Awtomatikong ipakita sa panahon ng season

### Pamamahala ng Mga Special {#managing-specials}

Magpakita ng pang-araw-araw o lingguhang special:

1. Gumawa ng kategoryang "Mga Special"
2. Magdagdag ng mga item na may mga petsa ng availability
3. I-highlight ang mga special sa homepage
4. I-update araw-araw o lingguhan
5. I-archive ang mga lumang special

## Integrasyon sa Theme Builder {#integration-with-theme-builder}

Kapag ginagamit ang Theme Builder para sa mga hospitality site:

1. **Awtomatikong pagtukoy ng menu** — tinutukoy kung ikaw ay negosyong pagkain/inumin
2. **Paggawa ng pahina ng menu** — bumubuo ng propesyonal na mga pahina ng menu
3. **Pagtutugma ng disenyo** — tumutugma ang mga menu sa theme ng iyong site
4. **Mobile optimization** — maganda ang pagpapakita ng mga menu sa mga telepono
5. **SEO optimization** — search-engine friendly ang mga menu

## Pinakamahuhusay na Kasanayan {#best-practices}

### Disenyo ng Menu {#menu-design}

- **Malinaw na pagkakaayos** — lohikal na istruktura ng kategorya
- **Nababasang mga paglalarawan** — katakam-takam at nagbibigay-impormasyon
- **Pare-parehong pagpepresyo** — malinaw na currency at formatting
- **Propesyonal na mga larawan** — mataas na kalidad na mga larawan ng pagkain
- **Whitespace** — huwag siksikan ang pahina

### Nilalaman {#content}

- **Tumpak na mga paglalarawan** — ilarawan nang tumpak ang mga item
- **I-highlight ang mga special** — gawing kapansin-pansin ang mga special
- **Isama ang mga allergen** — palaging ilista ang mga allergen
- **Regular na mag-update** — panatilihing napapanahon ang mga presyo at item
- **Gumamit ng katakam-takam na wika** — gawing masarap pakinggan ang mga item

### Accessibility {#accessibility}

- **Nababasang mga font** — gumamit ng malinaw at madaling basahing typeface
- **Sapat na contrast** — tiyaking nababasa ang teksto
- **Mga dietary label** — malinaw na markahan ang mga opsyong pandiyeta
- **Mga babala sa allergen** — kitang-kitang ipakita ang mga allergen
- **Mobile-friendly** — subukan sa lahat ng device

## Mga Halimbawa {#examples}

### Istruktura ng Restaurant Menu {#restaurant-menu-structure}

```
Mga Pampagana
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Mga Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Mga Pangunahing Ulam
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Mga Panghimagas
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Estruktura ng Menu ng Cafe {#cafe-menu-structure}

```
Kape
├── Espresso
├── Cappuccino
└── Latte

Mga Patiserya
├── Croissants
├── Muffins
└── Scones

Mga Sandwich
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Mga Kaugnay na Feature {#related-features}

- [Gumawa ng Menu](../abilities/create-menu.md) — gumawa ng mga menu ng nabigasyon
- [Direksyon ng Disenyo](./design-direction.md) — i-customize ang disenyo ng iyong website
- [Panayam sa Pagtuklas](./discovery-interview.md) — planuhin ang estruktura ng iyong website
