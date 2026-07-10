---
title: ਮਹਿਮਾਨ-ਨਵਾਜ਼ੀ ਦੇ ਮੈਨੂਸ
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality Menus {#hospitality-menus}

**Hospitality Menus** feature Theme Builder nu madad karda hai ki tusi apne WordPress site 'te vyavasthit khane aur peene (food and beverage) de menu pages bana sako aur unhe embed kar sako.

## Overview {#overview}

Theme Builder hun hospitality businesses, jismein restaurants, cafes, bars, aur catering services shamil hain, layi professional, vyavasthit menu pages bana sakda hai. Ye menu tusi apni site de design vich poori tarah se integrate kar sakde ho, aur innu update karna ya manage karna bahut aasan hai.

## Supported Hospitality Types {#supported-hospitality-types}

- **Restaurants** — poore service de dining menu
- **Cafes** — coffee aur halka khana (light fare) de menu
- **Bars and Lounges** — pey (beverage) aur appetizer de menu
- **Bakeries** — pastry aur roti de menu
- **Catering Services** — event menu options
- **Food Trucks** — mobile food service menu
- **Breweries and Wineries** — description naal pey de menu

## Menu Structure {#menu-structure}

### Menu Categories {#menu-categories}

Menu categories vich organize kiye gaye hunde hain:

- **Appetizers** — shuruaati snacks aur chote plates
- **Entrees** — mukhya vyanjan (main courses)
- **Sides** — saath khane wale items aur sabziyan
- **Desserts** — meethe items
- **Beverages** — pey (alcoholic aur non-alcoholic)
- **Specials** — roz ya mausam ke hisaab naal khaas items

### Menu Item Format {#menu-item-format}

Har menu item vich yeh cheezein shamil hundiyan hain:

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
| `name` | string | Dish ya pey da naam |
| `description` | string | Item da vistarit vivaran |
| `price` | string | Daam (currency naal format kita gaya) |
| `dietary_info` | array | Khane de attributes (Vegan, Gluten-Free, etc.) |
| `allergens` | array | Saamaanya allergens (Nuts, Shellfish, etc.) |
| `availability` | string | Kab uplabdh hai (Daily, Seasonal, etc.) |

## Creating Hospitality Menus {#creating-hospitality-menus}

### Step 1: Menu Information Dena {#step-1-provide-menu-information}

Theme Builder nu apne menu baare mein dasso:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Step 2: Theme Builder Menu Banaunda Hai {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Ek vyavasthit menu page banaunda hai
2. Ise tuhanu site de theme naal match karke design karda hai
3. Items nu categories vich organize karda hai
4. Daam aur descriptions nu format karda hai
5. Dietary aur allergen information jodda hai

### Step 3: Review aur Customize Karna {#step-3-review-and-customize}

Tusi kar sakde ho:

1. Menu items aur daam edit karna
2. Categories add ya remove karna
3. Categories vich items nu reorder karna
4. Descriptions aur dietary info update karna
5. Styling aur layout adjust karna

## Menu Display Options {#menu-display-options}

### Full Menu Page {#full-menu-page}

Ek khaas page jo tuhanu poora menu dikhaye:

- Category hisaab naal organize
- Search aur filter karna mumkin
- Print karne layi aasan layout
- Mobile 'te chalne wala design

### Menu Widget {#menu-widget}

Menu sections nu doosre pages 'te embed karna:

- Homepage 'te featured items
- Sidebar 'te daily specials
- Bar page 'te beverage menu
- Footer 'te dessert showcase

### Menu PDF {#menu-pdf}

Ek download karne wala PDF menu generate karna:

- Professional formatting
- Print karne layi taiyar quality
- Images aur descriptions shamil
- Share aur email karna aasan

## Dietary and Allergen Information {#dietary-and-allergen-information}

### Dietary Attributes {#dietary-attributes}

Items nu dietary information naal mark karna:

- **Vegan** — kisi bhi janwar de products nahi
- **Vegetarian** — maans nahi
- **Gluten-Free** — celiac disease layi surakshit
- **Dairy-Free** — doodh de products nahi
- **Nut-Free** — koi tree nuts ya peanuts nahi
- **Low-Carb** — kam carbohydrates
- **High-Protein** — protein se bharpoor

### Allergen Warnings {#allergen-warnings}

Saamaanya allergens shamil karna:

- **Nuts** — tree nuts aur peanuts
- **Shellfish** — crustaceans aur mollusks
- **Fish** — saare machhli de prajatiyan
- **Dairy** — doodh aur doodh de products
- **Eggs** — murghi de ande
- **Soy** — soy products
- **Gluten** — gehun aur gluten wale anaaj
- **Sesame** — til ke beej aur tel

## Menu Management {#menu-management}

### Updating Prices {#updating-prices}

Menu de daam aasaani naal update karna:

1. Menu page te jaana
2. "Edit Menu" par click karna
3. Items de daam update karna
4. Changes save karna
5. Changes turant tuhanu site 'te dikhange

### Adding Seasonal Items {#adding-seasonal-items}

Mausam ke hisaab naal menu variations banana:

1. Ek naya menu version banana
2. Seasonal items add karna
3. Items nu "Seasonal" mark karna
4. Uplabdh hone de dates schedule karna
5. Season da daura vich automatic display hona

### Managing Specials {#managing-specials}

Roz ya hafte ke hisaab naal specials dikhana:

1. Ek "Specials" category banana
2. Uplabdh hone de dates naal items add karna
3. Homepage 'te specials highlight karna
4. Roz ya hafte ke hisaab naal update karna
5. Purane specials archive karna

## Integration with Theme Builder {#integration-with-theme-builder}

Jab tusi hospitality sites layi Theme Builder istemal karde ho:

1. **Automatic menu detection** — pata lagaunda hai ki tusi khana/peena wala business ho
2. **Menu page creation** — professional menu pages generate karda hai
3. **Design matching** — menu tuhanu site de theme naal match karde ne
4. **Mobile optimization** — menu phones 'te khoobsurat dikhde ne
5. **SEO optimization** — menu search-engine friendly hunde ne

## Best Practices {#best-practices}

### Menu Design {#menu-design}

- **Clear organization** — vyavasthit category structure
- **Readable descriptions** — bhook laagne wale aur jaankari dene wale
- **Consistent pricing** — saaf currency aur formatting
- **Professional photos** — high-quality khane di tasveerein
- **Whitespace** — page nu zyada bhare nahi

### Content {#content}

- **Accurate descriptions** — items nu sahi tarah se describe karna
- **Highlight specials** — specials nu alag dikhana
- **Include allergens** — hamesha allergens list karna
- **Update regularly** — daam aur items nu hamesha taaza rakhna
- **Use appetizing language** — items nu swadisht lagane wali bhasha istemal karna

### Accessibility {#accessibility}

- **Readable fonts** — saaf, padhne yogya typefaces istemal karna
- **Sufficient contrast** — yakeen karna ki text padhne yogya hai
- **Dietary labels** — dietary options nu saaf taur te mark karna
- **Allergen warnings** — allergens nu bade taur te dikhana
- **Mobile-friendly** — saare devices 'te test karna

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

- [Create Menu](../abilities/create-menu.md) — navigation menus banana
- [Design Direction](./design-direction.md) — apni site da design customize karna
- [Discovery Interview](./discovery-interview.md) — apni site structure plan karna
