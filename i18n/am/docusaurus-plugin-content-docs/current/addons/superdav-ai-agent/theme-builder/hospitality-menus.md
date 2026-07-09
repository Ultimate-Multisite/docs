---
title: የሆቴል የምሳ ሰሌዳዎች
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# የሆስፒታሊቲ ምናባዎች {#hospitality-menus}

የ**የሆስፒታሊቲ ምናባዎች** (Hospitality Menus) ባህሪ Theme Builder በWordPress ድረ-ገጽዎ ላይ የተደራጁ የምግብ እና የመጠጥ ምናባዎችን (menus) መፍጠር እና ማስገባት ያስችላል።

## አጠቃላይ እይታ {#overview}

Theme Builder አሁን ለሆስፒታሊቲ ንግዶች፣ በተለይም ለሬስቶራንቶች፣ ካፌዎች፣ 바ሮች እና ለምግብ አቅራቢ አገልግሎቶች (catering services) ሙያዊ እና የተደራጁ ምናባዎችን መፍጠር ይችላል። እነዚህ ምናባዎች በየድረ-ገጽዎ ዲዛይን ውስጥ ሙሉ በሙሉ ተዋህደዋል፣ እና በቀላሉ ሊሻሻሉ እና ሊተዳደሩ ይችላሉ።

## የሚደገፉ የሆስፒታሊቲ አይነቶች {#supported-hospitality-types}

- **ሬስቶራንቶች** — ሙሉ አገልግሎት የሚሰጡ የምግብ ምናባዎች
- **ካፌዎች** — የቡና እና ቀላል ምግቦች ምናባዎች
- **ባሮች እና ሳሎኖች** — የመጠጥ እና የመክሰስ ምናባዎች
- **ዳቦ መጋገሪያዎች** — የፓስቲ እና የዳቦ ምናባዎች
- **የምግብ አቅራቢ አገልግሎቶች** — ለዝግጅት (event) ምናባ አማራጮች
- **የምግብ ተሽከርካሪዎች** — ተንቀሳቃሽ የምግብ አገልግሎት ምናባዎች
- **የቢራ እና የወይን እርሻዎች** — መግለጫ ያላቸው የመጠጥ ምናባዎች

## የምናባው አወቃቀር {#menu-structure}

### የምናባብ ምድቦች (Menu Categories) {#menu-categories}

ምናባዎች በምድቦች ተደራጅተዋል፦

- **መክሰስ (Appetizers)** — መጀመሪያ የሚበሉ እና ትንሽ ምግቦች
- **ዋና ምግቦች (Entrees)** — ዋና ዋና ምግቦች
- **ጎን ምግቦች (Sides)** — አብሮ የሚቀርቡ እና አትክልቶች
- **የስłod (Desserts)** — ጣፋጮች
- **መጠጥ (Beverages)** — መጠጦች (አልኮል ያለ እና አልኮል የሌለው)
- **ልዩ ምናባዎች (Specials)** — ዕለታዊ ወይም ወቅታዊ ልዩ ምናባዎች

### የምናባብ አባል ቅርጸት (Menu Item Format) {#menu-item-format}

እያንዳንዱ የምናባብ አባል የሚከተሉትን ያካትታል፦

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

#### የአባል መስኮች (Item Fields) {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | የምግብ ወይም የመጠጥ ስም |
| `description` | string | ስለ አባሉ ዝርዝር መግለጫ |
| `price` | string | ዋጋ (በገንዘብ ምልክት የተደራጀ) |
| `dietary_info` | array | የአመጋገብ ባህሪያት (Vegan, Gluten-Free, ወዘተ.) |
| `allergens` | array | የተለመዱ የአለርጂ ነገሮች (Nuts, Shellfish, ወዘተ.) |
| `availability` | string | መቼ እንደሚገኝ (Daily, Seasonal, ወዘተ.) |

## የሆስፒታሊቲ ምናባዎችን መፍጠር {#creating-hospitality-menus}

### ደረጃ 1፡ የምናባብ መረጃን መስጠት {#step-1-provide-menu-information}

Theme Builderን ስለ ምናባዎ ያሳውቁት፦

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### ደረጃ 2፡ Theme Builder ምናባን ይፈጥራል {#step-2-theme-builder-generates-menu}

Theme Builder፦

1. የተደራጀ የምናባብ ገጽ ይፈጥራል
2. ከየድረ-ገጽዎ ንድፍ ጋር እንዲመሳሰል ዲዛይን ያደርገዋል
3. አባላትን በምድቦች ውስጥ ያደራጃል
4. ዋጋዎችን እና መግለጫዎችን ያቀርጻል
5. የአመጋገብ እና የአለርጂ መረጃን ይጨምራል

### ደረጃ 3፡ መገምገም እና ማበጀት {#step-3-review-and-customize}

እርስዎ ማድረግ የሚችሉት፦

1. የምናባብ አባላትን እና ዋጋዎችን ማርትዕ
2. ምድቦችን መጨመር ወይም ማስወገድ
3. ምድቦች ውስጥ ያሉ አባላትን እንደገና ማደራጀት
4. መግለጫዎችን እና የአመጋገብ መረጃዎችን ማዘመን
5. ዲዛይን እና አቀማመጥ ማስተካከል

## የምናባብ የማሳያ አማራጮች {#menu-display-options}

### ሙሉ የምናባብ ገጽ (Full Menu Page) {#full-menu-page}

ሙሉ ምናባዎን የሚያሳይ ልዩ ገጽ፦

- በምድብ የተደራጀ
- ሊፈለግ እና ሊጣራ የሚችል
- ለህትመት ተስማሚ አቀማመጥ
- ለሞባይል ተስማሚ ዲዛይን

### የምናባብ Widget (Menu Widget) {#menu-widget}

የምናባብ ክፍሎችን በሌሎች ገጾች ላይ ማስገባት፦

- በዋናው ገጽ ላይ የተመረጡ አባላት
- በጎን ባር ላይ ዕለታዊ ልዩ ምናባዎች
- በባር ገጽ ላይ የመጠጥ ምናባብ
- በግርጌ (footer) ላይ የጣፋጭ ማሳያ

### የምናባብ PDF (Menu PDF) {#menu-pdf}

ሊተላለፍ የሚችል የPDF ምናባብ መፍጠር፦

- ሙያዊ ቅርጸት
- ለህትመት ዝግጁ ጥራት
- ምስሎችን እና መግለጫዎችን ያካትታል
- ለማጋራት እና በኢሜል ለመላክ ቀላል

## የአመጋገብ እና የአለርጂ መረጃ {#dietary-and-allergen-information}

### የአመጋገብ ባህሪያት (Dietary Attributes) {#dietary-attributes}

አባላትን በአመጋገብ መረጃ ምልክት ማድረግ፦

- **Vegan** — የእንስሳት ምርቶች የሌለው
- **Vegetarian** — ሥጋ የሌለው
- **Gluten-Free** — ለሴሊያክ በሽታ ደህንነቱ የተጠበቀ
- **Dairy-Free** — የወተት ምርቶች የሌለው
- **Nut-Free** — የዛፍ ቅንጣቶች ወይም የኦቾሎኒ የሌለው
- **Low-Carb** — ካርቦሃይድሬት የተቀነሰ
- **High-Protein** — ፕሮቲን የበዛበት

### የአለርጂ ማስጠንቀቂያዎች (Allergen Warnings) {#allergen-warnings}

የተለመዱ የአለርጂ ነገሮችን ማካተት፦

- **Nuts** — የዛፍ ቅንጣቶች እና ኦቾሎኒ
- **Shellfish** — የባህር ፍጥረታት እና የባህር ወራሪ ጽዋዎች
- **Fish** — ሁሉም የዓሳ ዝርያዎች
- **Dairy** — ወተት እና የወተት ምርቶች
- **Eggs** — የየብ닭 እንቁላሎች
- **Soy** — የሶያ ምርቶች
- **Gluten** — ስንዴ እና 글루텐 የያዙ እህሎች
- **Sesame** — የቺዝም ዘሮች እና ዘይት

## የምናባብ አስተዳደር {#menu-management}

### ዋጋዎችን ማዘመን (Updating Prices) {#updating-prices}

የምናባብ ዋጋዎችን በቀላሉ ማዘመን፦

1. ወደ ምናባብ ገጹ መሄድ
2. "Edit Menu" ላይ መጫን
3. የአባላትን ዋጋዎች ማዘመን
4. ለውጦችን ማስቀመጥ
5. ለውጦቹ ወዲያውኑ በድረ-ገጽዎ ላይ ይታያሉ

### ወቅታዊ አባላትን መጨመር (Adding Seasonal Items) {#adding-seasonal-items}

ወቅታዊ የምናባብ ልዩነቶችን መፍጠር፦

1. አዲስ የምናባብ ስሪት መፍጠር
2. ወቅታዊ አባላትን መጨመር
3. አባላትን እንደ "Seasonal" ምልክት ማድረግ
4. የአገልግሎት ቀኖችን መቅዳጀት
5. በወቅቱ በራስ-ሰር ማሳየት

### ልዩ ምናባዎችን መቆጣጠር (Managing Specials) {#managing-specials}

ዕለታዊ ወይም ሳምንታዊ ልዩ ምናባዎችን ማሳየት፦

1. "Specials" ምድብ መፍጠር
2. የአገልግሎት ቀኖች ባላቸው አባላትን መጨመር
3. ልዩ ምናባዎችን በዋናው ገጽ ላይ ማጉላት
4. በየቀኑ ወይም በየሳምንቱ ማዘመን
5. የቆዩ ልዩ ምናባዎችን መቃኘት (Archive)

## ከTheme Builder ጋር ውህደት (Integration) {#integration-with-theme-builder}

በሆስፒታሊቲ ድረ-ገጾች Theme Builderን ሲጠቀሙ፦

1. **የምናባብ አውቶማቲክ መለየት** — እርስዎ የምግብ/የመጠጥ ንግድ መሆንዎን ይለያል
2. **የምናባብ ገጽ መፍጠር** — ሙያዊ የምናባብ ገጾችን ይፈጥራል
3. **ንድፍ መመሳሰል** — ምናባዎች ከየድረ-ገጽዎ ንድፍ ጋር ይጣጣማሉ
4. **ለሞባይል ማመቻቸት** — ምናባዎች በስልኮዎች ላይ በሚያምር ሁኔታ ይታያሉ
5. **SEO ማመቻቸት** — ምናባዎች ለፍለጋ ሞተሮች ተስማሚ ናቸው

## ምርጥ አሠራሮች (Best Practices) {#best-practices}

### የምናባብ ዲዛይን {#menu-design}

- **ግልጽ አደረጃጀት** — አመክንዮአዊ የምድብ አወቃቀር
- **ሊነበቡ መግለጫዎች** — የምግብ ፍላጎት የሚያሳዩ እና መረጃ ሰጪ
- **የተጣጣመ ዋጋ** — ግልጽ ምንዛሪ እና ቅርጸት
- **ሙያዊ ፎቶዎች** — ከፍተኛ ጥራት ያላቸው የምግብ ምስሎች
- **የఖాሊ ቦታ (Whitespace)** — ገጹን ከመጨናነቅ መቆጠብ

### ይዘት (Content) {#content}

- **ትክክለኛ መግለጫዎች** — አባላትን በትክክል መግለጽ
- **ልዩ ምናባዎችን ማጉላት** — ልዩ ምናባዎችን ጎልተው እንዲታዩ ማድረግ
- **አለርጂዎችን ማካተት** — ሁልጊዜ የአለርጂ ነገሮችን መዘርዘር
- **በመደበኛነት ማዘመን** — ዋጋዎችን እና አባላትን ወቅታዊ ማድረግ
- **የምግብ ፍላጎት የሚያሳዩ ቃላትን መጠቀም** — አባላትን ጣፋጭ እንዲሰሙ ማድረግ

### ተደራሽነት (Accessibility) {#accessibility}

- **ሊነበቡ ፊደላት** — ግልጽ እና በቀላሉ የሚነበቡ ፊደላትን መጠቀም
- **በቂ ንፅፅር** — ጽሑፉ ሊነበብ የሚችል መሆኑን ማረጋገጥ
- **የአመጋገብ መለያዎች** — የአመጋገብ አማራጮችን በግልጽ ምልክት ማድረግ
- **የአለርጂ ማስጠንቀቂያዎች** — የአለርጂ ነገሮችን በግልጽ ማሳየት
- **ለሞባይል ተስማሚ** — በሁሉም መሳሪያዎች ላይ መፈተሽ

## ምሳሌዎች {#examples}

### የሬስቶራንት ምናባብ አወቃቀር {#restaurant-menu-structure}

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

### የካፌ ምናባብ አወቃቀር {#cafe-menu-structure}

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

## ተዛማጅ ባህሪያት {#related-features}

- [Create Menu](../abilities/create-menu.md) — የአሰሳ ምናባዎችን መፍጠር
- [Design Direction](./design-direction.md) — የድረ-ገጽዎን ዲዛይን ማበጀት
- [Discovery Interview](./discovery-interview.md) — የድረ-ገጽ አወቃቀርዎን ማቀድ
