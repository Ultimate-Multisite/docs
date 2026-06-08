---
title: ምናሌ ፍጠር
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# ምናሌ ይፍጠሩ (Create Menu)

የ**ምናሌ መፍጠር** ችሎታ የWordPress የ navigation ምናሌዎችን የመፍጠር አቅም ሲሆን፣ ከየገጽ ርዕሶች የተለየ የ navigation መለያዎችን (navigation labels) ድጋፍ ይሰጣል።

## አጠቃላይ እይታ (Overview)

ይህ ችሎታ መደበኛውን የምናሌ መፍጠር ተግባር በማስፋት፣ `navigation_label` የሚባል መለኪያ (parameter) የመስጠት አቅም ይጨምራል። ይህ ደግሞ በምናሌው ውስጥ የሚታየው መለያ ከገጹ ርዕስ የተለየ እንዲሆን ያስችላል። ይህም በየድረ-ገጹ አወቃቀር እና በተጠቃሚ ተሞክሮ (user experience) የበለጠ ተጣጣፊነትን ይሰጣል።

## መለኪያዎች (Parameters)

| መለኪያ (Parameter) | ዓይነት (Type) | አስፈላጊ ነው? (Required) | መግለጫ (Description) |
|-----------|------|----------|-------------|
| `name` | string | አዎ (Yes) | የምናሌ ስም፣ ለምሳሌ፡ `Primary Navigation` |
| `location` | string | አይ (No) | ምናሌውን ለማስመደብ የሚፈለገው የTheme location፣ ለምሳሌ፡ `primary` |
| `navigation_label` | string | አይ (No) | በ navigation ውስጥ የሚታየው መለያ (ከየገጽ ርዕስ የተለየ) |

## የመመለስ እሴት (Return Value)

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## የ navigation መለያ ከየገጽ ርዕስ ጋር ያለው ልዩነት (Navigation Label vs Page Title)

የ`navigation_label` መለኪያ የውስጥ የምናሌ ስም (internal menu name) ከተጠቃሚዎች የሚያዩት መለያ (label) መለያየትን ያስችላል።

- **`name`** — በWordPress የሚያገለግል የውስጥ የምናሌ መለያ (ለምሳሌ፡ "Primary Navigation")
- **`navigation_label`** — በድረ-ገጹ ጎብኝዎች በnavigation ውስጥ የሚታየው መለያ (ለምሳሌ፡ "Main Menu")

ይህ የሚጠቅመው በሚከተሉት ጊዜያት ነው፦
- የውስጥ ስያሜያችን ከተጠቃሚዎች የሚያዩት መለያ የተለየ ከሆነ
- በnavigation ውስጥ ከሚታዩት መለያዎች አጭር ስሪት ከሚፈለገው የadmin panel ስሪት አጭር መሆን ከፈለጉ
- በተለያዩ የቋንቋ ስሪቶች በተለያየ የቅጥያ ርዝመት መደገፍ ካለብዎ
- ለተወሰኑ ክልሎች ወይም ለተጠቃሚ ቡድኖች ምናሌዎችን እየገነቡ ከሆነ

## የአጠቃቀም ምሳሌዎች (Usage Examples)

### ምሳሌ 1፡ በ navigation መለያ ያለው ቀላል ምናሌ (Simple Menu with Navigation Label)

**ጥያቄ (Prompt):**
```
"Main Navigation" የሚል ስም ያለው እና "Menu" የሚል navigation መለያ ያለው ዋና navigation ምናሌ ይፍጠሩ።
```

**ውጤት (Result):**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### ምሳሌ 2፡ ለተወሰነ Theme Location ምናሌ (Menu for Specific Theme Location)

**ጥያቄ (Prompt):**
```
"Footer Links" የሚል ስም ያለው እና "Quick Links" የሚል navigation መለያ ያለው የfooter ምናሌ ይፍጠሩ እና ወደ footer location ያስቀምጡት።
```

**ውጤት (Result):**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## ከTheme Builder ጋር ውህደት (Integration with Theme Builder)

Theme Builder ሲጠቀሙ፣ የCreate Menu ችሎታው የሚከተሉትን ያደርጋል፦

1. ያሉትን የtheme ምናሌ ቦታዎች በራስ-ሰር ይለያል (Automatically detects available theme menu locations)
2. ለንድፍዎ ተገቢ የnavigation መለያዎች ያላቸው ምናሌዎችን ይፈጥራል
3. ምናሌዎችን ወደ ትክክለኛ የtheme ቦታዎች ያስቀምጣል
4. ምናሌዎችን ከፈጠሩ በኋላ የምናሌ አባላትን (menu items) መጨመርን ይደግፋል

## ተዛማጅ ችሎታዎች (Related Abilities)

- **`add_menu_item`** — በአንድ existing menu ውስጥ አባላትን ይጨምራል
- **`update_menu`** — ምናሌን ስም መቀየር ወይም ወደ ሌላ የtheme location ማስቀመጥ
- **`delete_menu`** — ምናሌን ከsiteዎ ማስወገድ

## ምርጥ ልምዶች (Best Practices)

- **ግልጽ የnavigation መለያዎችን ይጠቀሙ** — መለያዎቹ ለአጠቃቀም ቀላል እና መግለጫ ሰጪ እንዲሆኑ ያድርጉ።
- **የtheme ቦታዎችን ያጣጥሙ** — ትክክለኛ አሳልፎ ለማሳየት ምናሌዎችን ወደ ትክክለኛው የtheme location ያስቀምጡ።
- **የምናሌ አወቃቀርን ያቅዱ** — አባላትን ከመፍጠርዎ በፊት የምናሌውን ደረጃ (hierarchy) ይወስኑ።
- **ተجاበራትን ይፈትሹ (Test responsiveness)** — ምናሌዎቹ በሞባይል ስልኮች ላይ በትክክል መታየታቸውን ያረጋግጡ።
- **መለያዎችን በአካባቢው ያቅዱ (Localize labels)** — ለተለያዩ የቋንቋ ስሪቶች የተለያዩ የnavigation መለያዎችን ይጠቀሙ።

## ገደቦች (Limitations)

- የnavigation መለያዎች ለaffichage ብቻ ናቸው፤ የውስጥ `name` ለWordPress መለያ አሁንም ጥቅም ላይ ይውላል።
- የTheme ድጋፍ ይለያያል፤ ሁሉም themes ሁሉንም የምናሌ ቦታዎች አይደግፉም።
- የምናሌ አባላትን ከምናሌው መፍጠር በኋላ በየራሳቸው መጨመር አለባቸው።
- የnavigation መለያን መቀየር ምናሌውን መዘመን ይጠይቃል።

## ተዛማጅ ችሎታዎች (Related Abilities)

- [Generate Logo SVG](./generate-logo-svg.md) — ለየsite headerዎ አርማዎችን ይፍጠሩ
- [Validate Palette Contrast](./validate-palette-contrast.md) — ተደራሽ የሆኑ የቀለም ስብስቦችን ያረጋግጡ
