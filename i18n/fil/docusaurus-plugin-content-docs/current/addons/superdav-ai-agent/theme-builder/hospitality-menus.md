---
title: Mga Menu sa Hospitality
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality Menus {#hospitality-menus}

Ang feature na **Hospitality Menus** ay nagpapahintulot sa Theme Builder na gumawa at mag-embed ng mga naka-istrukturang pahina ng menu ng pagkain at inumin nang direkta sa iyong WordPress site.

## Overview {#overview}

Kaya na ngayon ng Theme Builder na gumawa ng propesyonal at naka-istrukturang menu page para sa mga negosyo sa hospitality, kasama na ang mga restaurant, cafe, bar, at catering services. Ang mga menu na ito ay ganap na naka-integrate sa disenyo ng iyong site at madaling i-update at pamahalaan.

## Supported Hospitality Types {#supported-hospitality-types}

- **Restaurants** — mga menu para sa full-service dining
- **Cafes** — mga menu para sa kape at light fare
- **Bars and Lounges** — mga menu para sa inumin at appetizers
- **Bakeries** — mga menu para sa pastry at tinapay
- **Catering Services** — mga pagpipilian ng menu para sa mga event
- **Food Trucks** — mga menu para sa mobile food service
- **Breweries and Wineries** — mga menu ng inumin na may paglalarawan

## Menu Structure {#menu-structure}

### Menu Categories {#menu-categories}

Ang mga menu ay naka-organisa sa mga kategorya:

- **Appetizers** — mga starter at small plates
- **Entrees** — mga pangunahing ulam (main courses)
- **Sides** — mga kasama at gulay
- **Desserts** — matatamis na panghimagas
- **Beverages** — mga inumin (alcoholic at non-alcoholic)
- **Specials** — mga pang-araw-araw o seasonal na espesyal

### Menu Item Format {#menu-item-format}

Ang bawat menu item ay naglalaman ng:

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

#### Item Fields {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Pangalan ng ulam o inumin |
| `description` | string | Detalyadong paglalarawan ng item |
| `price` | string | Presyo (na naka-format kasama ang currency) |
| `dietary_info` | array | Mga katangian ng diyeta (Vegan, Gluten-Free, atbp.) |
| `allergens` | array | Mga karaniwang allergen (Nuts, Shellfish, atbp.) |
| `availability` | string | Kailan available (Daily, Seasonal, atbp.) |

## Creating Hospitality Menus {#creating-hospitality-menus}

### Step 1: Provide Menu Information {#step-1-provide-menu-information}

Ipaalam sa Theme Builder ang tungkol sa iyong menu:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Step 2: Theme Builder Generates Menu {#step-2-theme-builder-generates-menu}

Ang Theme Builder ay:

1. Gumagawa ng naka-istrukturang menu page
2. Dinisenyo ito para tumugma sa theme ng iyong site
3. Inaayos ang mga item sa mga kategorya
4. Ni-fo-format ang mga presyo at paglalarawan
5. Nagdaragdag ng impormasyon tungkol sa diyeta at allergen

### Step 3: Review and Customize {#step-3-review-and-customize}

Maaari mong:

1. I-edit ang mga menu item at presyo
2. Magdagdag o magtanggal ng mga kategorya
3. Ayusin ang pagkakaayos ng mga item sa loob ng kategorya
4. I-update ang mga paglalarawan at impormasyon sa diyeta
5. Ayusin ang styling at layout

## Menu Display Options {#menu-display-options}

### Full Menu Page {#full-menu-page}

Isang dedicated page na nagpapakita ng iyong kumpletong menu:

- Organisado ayon sa kategorya
- Maaaring hanapin at i-filter
- Print-friendly na layout
- Mobile-responsive na disenyo

### Menu Widget {#menu-widget}

I-embed ang mga seksyon ng menu sa ibang mga page:

- Mga featured items sa homepage
- Pang-araw-araw na espesyal sa sidebar
- Menu ng inumin sa bar page
- Dessert showcase sa footer

### Menu PDF {#menu-pdf}

Gumawa ng downloadable na PDF menu:

- Propesyonal na pag-fo-format
- Kalidad na handa para i-print
- Kasama ang mga larawan at paglalarawan
- Madaling i-share at i-email

## Dietary and Allergen Information {#dietary-and-allergen-information}

### Dietary Attributes {#dietary-attributes}

Markahan ang mga item gamit ang impormasyon sa diyeta:

- **Vegan** — walang produkto mula sa hayop
- **Vegetarian** — walang karne
- **Gluten-Free** — ligtas para sa celiac disease
- **Dairy-Free** — walang produkto mula sa gatas
- **Nut-Free** — walang tree nuts o peanuts
- **Low-Carb** — mababang carbohydrates
- **High-Protein** — mayaman sa protina

### Allergen Warnings {#allergen-warnings}

Isama ang mga karaniwang allergen:

- **Nuts** — tree nuts at peanuts
- **Shellfish** — crustaceans at mollusks
- **Fish** — lahat ng uri ng isda
- **Dairy** — gatas at mga produkto mula sa gatas
- **Eggs** — itlog ng manok
- **Soy** — mga produkto ng soy
- **Gluten** — trigo at mga butil na naglalaman ng gluten
- **Sesame** — buto at langis ng sesame

## Menu Management {#menu-management}

### Updating Prices {#updating-prices}

Madaling i-update ang mga presyo ng menu:

1. Pumunta sa menu page
2. I-click ang "Edit Menu"
3. I-update ang mga presyo para sa mga item
4. I-save ang mga pagbabago
5. Ang mga pagbabago ay agad na makikita sa iyong site

### Adding Seasonal Items {#adding-seasonal-items}

Gumawa ng mga seasonal na variation ng menu:

1. Gumawa ng bagong bersyon ng menu
2. Magdagdag ng mga seasonal items
3. Markahan ang mga item bilang "Seasonal"
4. Mag-iskedyul ng mga petsa ng availability
5. Awtomatikong magpapakita sa panahon ng season

### Managing Specials {#managing-specials}

Magpakita ng pang-araw-araw o lingguhang espesyal:

1. Gumawa ng "Specials" category
2. Magdagdag ng mga item na may petsa ng availability
3. I-highlight ang mga espesyal sa homepage
4. I-update araw-araw o linggu-linggo
5. I-archive ang mga lumang espesyal

## Integration with Theme Builder {#integration-with-theme-builder}

Kapag ginagamit ang Theme Builder para sa mga hospitality site:

1. **Automatic menu detection** — kinikilala kung ikaw ay isang food/beverage business
2. **Menu page creation** — gumagawa ng propesyonal na menu pages
3. **Design matching** — tumutugma ang mga menu sa theme ng iyong site
4. **Mobile optimization** — maganda ang pagpapakita ng menu sa mga telepono
5. **SEO optimization** — ang mga menu ay friendly sa search engine

## Best Practices {#best-practices}

### Menu Design {#menu-design}

- **Clear organization** — lohikal na istraktura ng kategorya
- **Readable descriptions** — kaakit-akit at nagbibigay-impormasyon
- **Consistent pricing** — malinaw na currency at pag-fo-format
- **Professional photos** — mataas na kalidad na larawan ng pagkain
- **Whitespace** — huwag masyadong siksikin ang page

### Content {#content}

- **Accurate descriptions** — ilarawan nang tama ang mga item
- **Highlight specials** — gawing kapansin-pansin ang mga espesyal
- **Include allergens** — laging ilista ang mga allergen
- **Update regularly** — panatilihing napapanahon ang mga presyo at item
- **Use appetizing language** — gawing masarap pakinggan ang mga item

### Accessibility {#accessibility}

- **Readable fonts** — gumamit ng malinaw at nababasang typeface
- **Sufficient contrast** — tiyakin na nababasa ang teksto
- **Dietary labels** — malinaw na markahan ang mga pagpipilian sa diyeta
- **Allergen warnings** — ipamalas nang kapansin-pansin ang mga allergen
- **Mobile-friendly** — subukan sa lahat ng device

## Examples {#examples}

### Restaurant Menu Structure {#restaurant-menu-structure}

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

### Cafe Menu Structure {#cafe-menu-structure}

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

## Related Features {#related-features}

- [Create Menu](../abilities/create-menu.md) — gumawa ng mga navigation menu
- [Design Direction](./design-direction.md) — i-customize ang disenyo ng iyong site
- [Discovery Interview](./discovery-interview.md) — planuhin ang istraktura ng iyong site
