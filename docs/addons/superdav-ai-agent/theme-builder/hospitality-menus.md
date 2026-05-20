---
title: "Hospitality Menus"
sidebar_position: 3
---

# Hospitality Menus

The **Hospitality Menus** feature allows Theme Builder to generate and embed structured food and beverage menu pages directly into your WordPress site.

## Overview

Theme Builder can now create professional, structured menu pages for hospitality businesses including restaurants, cafes, bars, and catering services. These menus are fully integrated into your site's design and can be easily updated and managed.

## Supported Hospitality Types

- **Restaurants** — full-service dining menus
- **Cafes** — coffee and light fare menus
- **Bars and Lounges** — beverage and appetizer menus
- **Bakeries** — pastry and bread menus
- **Catering Services** — event menu options
- **Food Trucks** — mobile food service menus
- **Breweries and Wineries** — beverage menus with descriptions

## Menu Structure

### Menu Categories

Menus are organized into categories:

- **Appetizers** — starters and small plates
- **Entrees** — main courses
- **Sides** — accompaniments and vegetables
- **Desserts** — sweet treats
- **Beverages** — drinks (alcoholic and non-alcoholic)
- **Specials** — daily or seasonal specials

### Menu Item Format

Each menu item includes:

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

#### Item Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Dish or beverage name |
| `description` | string | Detailed description of the item |
| `price` | string | Price (formatted with currency) |
| `dietary_info` | array | Dietary attributes (Vegan, Gluten-Free, etc.) |
| `allergens` | array | Common allergens (Nuts, Shellfish, etc.) |
| `availability` | string | When available (Daily, Seasonal, etc.) |

## Creating Hospitality Menus

### Step 1: Provide Menu Information

Tell Theme Builder about your menu:

```
Create a restaurant menu for my Italian restaurant with appetizers, 
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Step 2: Theme Builder Generates Menu

Theme Builder:

1. Creates a structured menu page
2. Designs it to match your site's theme
3. Organizes items into categories
4. Formats prices and descriptions
5. Adds dietary and allergen information

### Step 3: Review and Customize

You can:

1. Edit menu items and prices
2. Add or remove categories
3. Reorder items within categories
4. Update descriptions and dietary info
5. Adjust styling and layout

## Menu Display Options

### Full Menu Page

A dedicated page displaying your complete menu:

- Organized by category
- Searchable and filterable
- Print-friendly layout
- Mobile-responsive design

### Menu Widget

Embed menu sections on other pages:

- Featured items on homepage
- Daily specials on sidebar
- Beverage menu on bar page
- Dessert showcase on footer

### Menu PDF

Generate a downloadable PDF menu:

- Professional formatting
- Print-ready quality
- Includes images and descriptions
- Easy to share and email

## Dietary and Allergen Information

### Dietary Attributes

Mark items with dietary information:

- **Vegan** — no animal products
- **Vegetarian** — no meat
- **Gluten-Free** — safe for celiac disease
- **Dairy-Free** — no milk products
- **Nut-Free** — no tree nuts or peanuts
- **Low-Carb** — reduced carbohydrates
- **High-Protein** — protein-rich

### Allergen Warnings

Include common allergens:

- **Nuts** — tree nuts and peanuts
- **Shellfish** — crustaceans and mollusks
- **Fish** — all fish species
- **Dairy** — milk and milk products
- **Eggs** — chicken eggs
- **Soy** — soy products
- **Gluten** — wheat and gluten-containing grains
- **Sesame** — sesame seeds and oil

## Menu Management

### Updating Prices

Easily update menu prices:

1. Navigate to the menu page
2. Click "Edit Menu"
3. Update prices for items
4. Save changes
5. Changes appear immediately on your site

### Adding Seasonal Items

Create seasonal menu variations:

1. Create a new menu version
2. Add seasonal items
3. Mark items as "Seasonal"
4. Schedule availability dates
5. Automatically display during season

### Managing Specials

Display daily or weekly specials:

1. Create a "Specials" category
2. Add items with availability dates
3. Highlight specials on homepage
4. Update daily or weekly
5. Archive old specials

## Integration with Theme Builder

When using Theme Builder for hospitality sites:

1. **Automatic menu detection** — identifies if you're a food/beverage business
2. **Menu page creation** — generates professional menu pages
3. **Design matching** — menus match your site's theme
4. **Mobile optimization** — menus display beautifully on phones
5. **SEO optimization** — menus are search-engine friendly

## Best Practices

### Menu Design

- **Clear organization** — logical category structure
- **Readable descriptions** — appetizing and informative
- **Consistent pricing** — clear currency and formatting
- **Professional photos** — high-quality food images
- **Whitespace** — don't overcrowd the page

### Content

- **Accurate descriptions** — describe items accurately
- **Highlight specials** — make specials stand out
- **Include allergens** — always list allergens
- **Update regularly** — keep prices and items current
- **Use appetizing language** — make items sound delicious

### Accessibility

- **Readable fonts** — use clear, legible typefaces
- **Sufficient contrast** — ensure text is readable
- **Dietary labels** — clearly mark dietary options
- **Allergen warnings** — prominently display allergens
- **Mobile-friendly** — test on all devices

## Examples

### Restaurant Menu Structure

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

### Cafe Menu Structure

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

## Related Features

- [Create Menu](../abilities/create-menu.md) — create navigation menus
- [Design Direction](./design-direction.md) — customize your site's design
- [Discovery Interview](./discovery-interview.md) — plan your site structure
