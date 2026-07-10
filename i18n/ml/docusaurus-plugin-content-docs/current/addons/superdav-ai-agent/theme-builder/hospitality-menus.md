---
title: ആതിഥേയ വിഭവങ്ങൾ
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# ഹോസ്പിറ്റാലിറ്റി മെനുകൾ {#hospitality-menus}

**Hospitality Menus** ഫീച്ചർ ഉപയോഗിച്ച്, നിങ്ങളുടെ WordPress സൈറ്റിലേക്ക് ഘടനാപരമായ ഭക്ഷണ, പാനീയ മെനു പേജുകൾ Theme Builder വഴി സൃഷ്ടിക്കാനും ഉൾപ്പെടുത്താനും സാധിക്കും.

## Overview {#overview}

റെസ്റ്റോറന്റുകൾ, കഫേകൾ, ബാറുകൾ, കാറ്ററിംഗ് സർവീസസ് എന്നിവ പോലുള്ള ഹോസ്പിറ്റാലിറ്റി ബിസിനസ്സുകൾക്കായി പ്രൊഫഷണൽ, ഘടനാപരമായ മെനു പേജുകൾ Theme Builder ഇപ്പോൾ സൃഷ്ടിക്കാൻ കഴിയും. ഈ മെനുകൾ നിങ്ങളുടെ സൈറ്റിന്റെ ഡിസൈനിലേക്ക് പൂർണ്ണമായി സംയോജിപ്പിക്കുകയും എളുപ്പത്തിൽ അപ്ഡേറ്റ് ചെയ്യാനും കൈകാര്യം ചെയ്യാനും കഴിയുകയും ചെയ്യും.

## Supported Hospitality Types {#supported-hospitality-types}

- **Restaurants** — പൂർണ്ണ സേവന വിരുന്നുകൾക്കുള്ള മെനുകൾ
- **Cafes** — കോഫി, ലഘുഭക്ഷണ മെനുകൾ
- **Bars and Lounges** — പാനീയ, സ്റ്റാർട്ടർ മെനുകൾ
- **Bakeries** — പേസ്ട്രി, ബ്രെഡ് മെനുകൾ
- **Catering Services** — ഇവന്റ് മെനു ഓപ്ഷനുകൾ
- **Food Trucks** — മൊബൈൽ ഭക്ഷണ സേവന മെനുകൾ
- **Breweries and Wineries** — വിവരണങ്ങളോടുകൂടിയ പാനീയ മെനുകൾ

## Menu Structure {#menu-structure}

### Menu Categories {#menu-categories}

മെനുകൾ വിഭാഗങ്ങളായി (Categories) ക്രമീകരിച്ചിരിക്കുന്നു:

- **Appetizers** — സ്റ്റാർട്ടറുകളും ചെറിയ വിഭവങ്ങളും
- **Entrees** — പ്രധാന വിഭവങ്ങൾ
- **Sides** — കൂട്ടിച്ചേർക്കലുകളും പച്ചക്കറികളും
- **Desserts** — മധുര പലഹാരങ്ങൾ
- **Beverages** — പാനീയങ്ങൾ (ആൽക്കഹോളിക്, നോൺ-ആൽക്കഹോളിക്)
- **Specials** — ദിവസേനയോ സീസണൽ ആയ പ്രത്യേക വിഭവങ്ങൾ

### Menu Item Format {#menu-item-format}

ഓരോ മെനു ഐറ്റത്തിനും താഴെ പറയുന്ന വിവരങ്ങൾ ഉൾപ്പെടുന്നു:

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
| `name` | string | വിഭവത്തിന്റെയോ പാനീയത്തിന്റെയോ പേര് |
| `description` | string | ഐറ്റത്തെക്കുറിച്ചുള്ള വിശദമായ വിവരണം |
| `price` | string | വില (കറൻസി ഉപയോഗിച്ച് ഫോർമാറ്റ് ചെയ്തത്) |
| `dietary_info` | array | ഭക്ഷണപരമായ പ്രത്യേകതകൾ (Vegan, Gluten-Free, etc.) |
| `allergens` | array | സാധാരണ അലർജിയുണ്ടാക്കുന്ന വസ്തുക്കൾ (Nuts, Shellfish, etc.) |
| `availability` | string | എപ്പോൾ ലഭ്യമാണ് (Daily, Seasonal, etc.) |

## Creating Hospitality Menus {#creating-hospitality-menus}

### Step 1: Provide Menu Information {#step-1-provide-menu-information}

നിങ്ങളുടെ മെനുവിനെക്കുറിച്ച് Theme Builder-നെ അറിയിക്കുക:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Step 2: Theme Builder Generates Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. ഒരു ഘടനാപരമായ മെനു പേജ് സൃഷ്ടിക്കുന്നു
2. നിങ്ങളുടെ സൈറ്റിന്റെ തീമിന് അനുയോജ്യമാകുന്ന രീതിയിൽ ഡിസൈൻ ചെയ്യുന്നു
3. ഐറ്റങ്ങളെ വിഭാഗങ്ങളായി ക്രമീകരിക്കുന്നു
4. വിലകളും വിവരണങ്ങളും ഫോർമാറ്റ് ചെയ്യുന്നു
5. ഭക്ഷണപരമായ വിവരങ്ങളും അലർജൻ വിവരങ്ങളും ചേർക്കുന്നു

### Step 3: Review and Customize {#step-3-review-and-customize}

നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്:

1. മെനു ഐറ്റങ്ങളും വിലകളും എഡിറ്റ് ചെയ്യുക
2. വിഭാഗങ്ങൾ ചേർക്കുകയോ നീക്കം ചെയ്യുകയോ ചെയ്യാം
3. വിഭാഗങ്ങൾക്കുള്ളിലെ ഐറ്റങ്ങളുടെ ക്രമം മാറ്റുക
4. വിവരണങ്ങളും ഭക്ഷണപരമായ വിവരങ്ങളും അപ്ഡേറ്റ് ചെയ്യുക
5. സ്റ്റൈലിംഗും ലേഔട്ടും ക്രമീകരിക്കുക

## Menu Display Options {#menu-display-options}

### Full Menu Page {#full-menu-page}

നിങ്ങളുടെ മുഴുവൻ മെനുവും പ്രദർശിപ്പിക്കുന്ന ഒരു പ്രത്യേക പേജ്:

- വിഭാഗമനുസരിച്ച് ക്രമീകരിച്ചിരിക്കുന്നു
- തിരയാനും ഫിൽട്ടർ ചെയ്യാനും സാധിക്കും
- പ്രിന്റ് ചെയ്യാൻ സൗകര്യപ്രദമായ ലേഔട്ട്
- മൊബൈലിൽ ഉപയോഗിക്കാൻ കഴിയുന്ന ഡിസൈൻ

### Menu Widget {#menu-widget}

മറ്റ് പേജുകളിൽ മെനു ഭാഗങ്ങൾ ഉൾപ്പെടുത്താൻ:

- ഹോംപേജിലെ പ്രധാനപ്പെട്ട ഐറ്റങ്ങൾ
- സൈഡ്ബാറിലെ ദിവസേനയുള്ള പ്രത്യേക വിഭവങ്ങൾ
- ബാർ പേജിലെ പാനീയ മെനു
- ഫൂട്ടറിലെ മധുര പലഹാരങ്ങളുടെ പ്രദർശനം

### Menu PDF {#menu-pdf}

ഡൗൺലോഡ് ചെയ്യാവുന്ന ഒരു PDF മെനു സൃഷ്ടിക്കുക:

- പ്രൊഫഷണൽ ഫോർമാറ്റിംഗ്
- പ്രിന്റിംഗിന് തയ്യാറായ ഗുണമേന്മ
- ചിത്രങ്ങളും വിവരണങ്ങളും ഉൾപ്പെടുന്നു
- പങ്കിടാനും ഇമെയിൽ ചെയ്യാനും എളുപ്പമാണ്

## Dietary and Allergen Information {#dietary-and-allergen-information}

### Dietary Attributes {#dietary-attributes}

ഐറ്റങ്ങൾക്ക് ഭക്ഷണപരമായ വിവരങ്ങൾ നൽകുക:

- **Vegan** — മൃഗ ഉൽപ്പന്നങ്ങൾ അടങ്ങിയിട്ടില്ല
- **Vegetarian** — മാംസം അടങ്ങിയിട്ടില്ല
- **Gluten-Free** — സിലിയാക് രോഗികൾക്ക് സുരക്ഷിതം
- **Dairy-Free** — പാൽ ഉൽപ്പന്നങ്ങൾ അടങ്ങിയിട്ടില്ല
- **Nut-Free** — മരത്തടി നട്സ് അല്ലെങ്കിൽ പീനട്ട്സ് ഇല്ല
- **Low-Carb** — കുറഞ്ഞ കാർബോഹൈഡ്രേറ്റുകൾ
- **High-Protein** — പ്രോട്ടീൻ സമ്പന്നം

### Allergen Warnings {#allergen-warnings}

സാധാരണ അലർജിയുണ്ടാക്കുന്ന വസ്തുക്കൾ ഉൾപ്പെടുത്തുക:

- **Nuts** — മരത്തടി നട്സ്, പീനട്ട്സ്
- **Shellfish** — ക്രസ്റ്റേഷ്യൻസ്, മോളിസ്ക്സ്
- **Fish** — എല്ലാ മത്സ്യ ഇനങ്ങളും
- **Dairy** — പാൽ, പാൽ ഉൽപ്പന്നങ്ങൾ
- **Eggs** — കോഴിമുട്ട
- **Soy** — സോയാ ഉൽപ്പന്നങ്ങൾ
- **Gluten** — ഗോതമ്പ്, ഗ്ലൂട്ടൻ അടങ്ങിയ ധാന്യങ്ങൾ
- **Sesame** — എസമി വിത്തുകൾ, എണ്ണ

## Menu Management {#menu-management}

### Updating Prices {#updating-prices}

മെനു വിലകൾ എളുപ്പത്തിൽ അപ്ഡേറ്റ് ചെയ്യുക:

1. മെനു പേജിലേക്ക് പോകുക
2. "Edit Menu" ക്ലിക്ക് ചെയ്യുക
3. ഐറ്റങ്ങൾക്കുള്ള വിലകൾ അപ്ഡേറ്റ് ചെയ്യുക
4. മാറ്റങ്ങൾ സേവ് ചെയ്യുക
5. മാറ്റങ്ങൾ ഉടൻ തന്നെ നിങ്ങളുടെ സൈറ്റിൽ കാണാം

### Adding Seasonal Items {#adding-seasonal-items}

സീസണൽ മെനു വേരിയേഷനുകൾ സൃഷ്ടിക്കുക:

1. ഒരു പുതിയ മെനു വേർഷൻ സൃഷ്ടിക്കുക
2. സീസണൽ ഐറ്റങ്ങൾ ചേർക്കുക
3. ഐറ്റങ്ങളെ "Seasonal" എന്ന് അടയാളപ്പെടുത്തുക
4. ലഭ്യത തീയതികൾ ഷെഡ്യൂൾ ചെയ്യുക
5. സീസണിൽ വേ自動മായി പ്രദർശിപ്പിക്കും

### Managing Specials {#managing-specials}

ദിവസേനയോ ആഴ്ചതോറുമോ പ്രത്യേക വിഭവങ്ങൾ പ്രദർശിപ്പിക്കുക:

1. ഒരു "Specials" വിഭാഗം സൃഷ്ടിക്കുക
2. ലഭ്യത തീയതികളോടുകൂടിയ ഐറ്റങ്ങൾ ചേർക്കുക
3. ഹോംപേജിൽ പ്രത്യേക വിഭവങ്ങൾ ഹൈലൈറ്റ് ചെയ്യുക
4. ദിവസേനയോ ആഴ്ചതോറുമോ അപ്ഡേറ്റ് ചെയ്യുക
5. പഴയ പ്രത്യേക വിഭവങ്ങൾ ആർക്കൈവ് ചെയ്യുക

## Integration with Theme Builder {#integration-with-theme-builder}

ഹോസ്പിറ്റാലിറ്റി സൈറ്റുകൾക്കായി Theme Builder ഉപയോഗിക്കുമ്പോൾ:

1. **Automatic menu detection** — നിങ്ങൾ ഒരു ഭക്ഷണ/പാനീയ ബിസിനസ് ആണോ എന്ന് തിരിച്ചറിയുന്നു
2. **Menu page creation** — പ്രൊഫഷണൽ മെനു പേജുകൾ സൃഷ്ടിക്കുന്നു
3. **Design matching** — മെനു നിങ്ങളുടെ സൈറ്റിന്റെ തീമിന് അനുയോജ്യമാവുന്നു
4. **Mobile optimization** — ഫോണുകളിൽ മെനു മനോഹരമായി കാണിക്കുന്നു
5. **SEO optimization** — മെനു സെർച്ച് എഞ്ചിൻ സൗഹൃദമാണ്

## Best Practices {#best-practices}

### Menu Design {#menu-design}

- **Clear organization** — യുക്തിപരമായ വിഭാഗ ഘടന
- **Readable descriptions** — വിശപ്പുണർത്തുന്നതും വിവരദായകവുമായ വിവരണം
- **Consistent pricing** — വ്യക്തമായ കറൻസി, ഫോർമാറ്റിംഗ്
- **Professional photos** — ഉയർന്ന നിലവാരമുള്ള ഭക്ഷണ ചിത്രങ്ങൾ
- **Whitespace** — പേജ് അമിതമായി നിറയ്ക്കാതിരിക്കുക

### Content {#content}

- **Accurate descriptions** — ഐറ്റങ്ങളെ കൃത്യമായി വിവരിക്കുക
- **Highlight specials** — പ്രത്യേക വിഭവങ്ങൾ എടുത്തു കാണിക്കുക
- **Include allergens** — അലർജൻ വിവരങ്ങൾ എപ്പോഴും ഉൾപ്പെടുത്തുക
- **Update regularly** — വിലകളും ഐറ്റങ്ങളും കാലികമായി നിലനിർത്തുക
- **Use appetizing language** — ഐറ്റങ്ങളെ രുചികരമായി തോന്നിക്കുന്ന ഭാഷ ഉപയോഗിക്കുക

### Accessibility {#accessibility}

- **Readable fonts** — വ്യക്തവും വായിക്കാൻ എളുപ്പമുള്ളതുമായ ഫോണ്ടുകൾ ഉപയോഗിക്കുക
- **Sufficient contrast** — ടെക്സ്റ്റ് വായിക്കാൻ കഴിയുമെന്ന് ഉറപ്പാക്കുക
- **Dietary labels** — ഭക്ഷണപരമായ ഓപ്ഷനുകൾ വ്യക്തമായി അടയാളപ്പെടുത്തുക
- **Allergen warnings** — അലർജൻ മുന്നറിയിപ്പുകൾ എടുത്തു കാണിക്കുക
- **Mobile-friendly** — എല്ലാ ഉപകരണങ്ങളിലും പരീക്ഷിക്കുക

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

- [Create Menu](../abilities/create-menu.md) — नेവിഗേഷൻ മെനുകൾ സൃഷ്ടിക്കുക
- [Design Direction](./design-direction.md) — നിങ്ങളുടെ സൈറ്റിന്റെ ഡിസൈൻ ഇഷ്ടാനുസൃതമാക്കുക
- [Discovery Interview](./discovery-interview.md) — നിങ്ങളുടെ സൈറ്റ് ഘടന ആസൂത്രണം ചെയ്യുക
