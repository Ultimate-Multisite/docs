---
title: हॉस्पिटॅलिटी मेनू
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# हॉस्पिटॅलिटी मेन्यू (Hospitality Menus)

**हॉस्पिटॅलिटी मेन्यू** वैशिष्ट्यामुळे Theme Builder ला तुमच्या WordPress साइटवर संरचित (structured) खाद्य आणि पेय मेन्यू पेज तयार करण्याची आणि समाविष्ट करण्याची क्षमता मिळते.

## विहंगावलोकन (Overview) {#overview}

Theme Builder आता हॉस्पिटॅलिटी व्यवसायांसाठी व्यावसायिक, संरचित मेन्यू पेज तयार करू शकतो. यामध्ये रेस्टॉरंट्स, कॅफे, बार आणि केटरिंग सेवांचा समावेश आहे. ही मेन्यू तुमच्या साइटच्या डिझाइनमध्ये पूर्णपणे समाविष्ट (integrated) होतात आणि त्यांना सहजपणे अपडेट आणि व्यवस्थापित (manage) करता येते.

## समर्थित हॉस्पिटॅलिटी प्रकार (Supported Hospitality Types) {#supported-hospitality-types}

- **रेस्टॉरंट्स (Restaurants)** — पूर्ण-सेवा डायनिंग मेन्यू
- **कॅफे (Cafes)** — कॉफी आणि हलके खाद्य मेन्यू
- **बार आणि लाउंज (Bars and Lounges)** — पेय आणि स्टार्टर मेन्यू
- **बेकरी (Bakeries)** — पेस्ट्री आणि ब्रेड मेन्यू
- **केटरिंग सेवा (Catering Services)** — कार्यक्रमासाठी मेन्यू पर्याय
- **फूड ट्रक्स (Food Trucks)** — मोबाइल फूड सर्व्हिस मेन्यू
- **ब्रूअरीज आणि वाईनरीज (Breweries and Wineries)** — वर्णनासह पेय मेन्यू

## मेन्यूची रचना (Menu Structure) {#menu-structure}

### मेन्यू श्रेणी (Menu Categories) {#menu-categories}

मेन्यू खालील श्रेणींमध्ये आयोजित केले जातात:

- **स्टार्टर्स (Appetizers)** — सुरुवात करणारे पदार्थ आणि लहान प्लेट्स
- **मुख्य पदार्थ (Entrees)** — मुख्य जेवण
- **साइड्स (Sides)** — सोबत खाण्यासाठी आणि भाज्या
- **मिठाई (Desserts)** — गोड पदार्थ
- **पेय (Beverages)** — पेय (मद्य आणि गैर-मद्य)
- **खास पदार्थ (Specials)** — दररोजचे किंवा हंगामी खास पदार्थ

### मेन्यू आयटम स्वरूप (Menu Item Format) {#menu-item-format}

प्रत्येक मेन्यू आयटममध्ये खालील गोष्टींचा समावेश असतो:

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

#### आयटम फील्ड्स (Item Fields) {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | पदार्थाचे किंवा पेयाचे नाव |
| `description` | string | आयटमचे तपशीलवार वर्णन |
| `price` | string | किंमत (करन्सीसह स्वरूपित) |
| `dietary_info` | array | आहारविषयक गुणधर्म (Vegan, Gluten-Free, इ.) |
| `allergens` | array | सामान्य ॲलर्जीक घटक (Nuts, Shellfish, इ.) |
| `availability` | string | कधी उपलब्ध आहे (Daily, Seasonal, इ.) |

## हॉस्पिटॅलिटी मेन्यू तयार करणे (Creating Hospitality Menus) {#creating-hospitality-menus}

### पायरी १: मेन्यू माहिती द्या (Step 1: Provide Menu Information) {#step-1-provide-menu-information}

Theme Builder ला तुमच्या मेन्यूबद्दल सांगा:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### पायरी २: Theme Builder मेन्यू तयार करतो (Step 2: Theme Builder Generates Menu) {#step-2-theme-builder-generates-menu}

Theme Builder:

१. एक संरचित मेन्यू पेज तयार करतो
२. ते तुमच्या साइटच्या थीमशी जुळेल अशा प्रकारे डिझाइन करतो
३. आयटम्सला श्रेणींमध्ये आयोजित करतो
४. किंमती आणि वर्णनांना स्वरूपित करतो
५. आहारविषयक आणि ॲलर्जीक माहिती जोडतो

### पायरी ३: पुनरावलोकन आणि सानुकूलित करा (Step 3: Review and Customize) {#step-3-review-and-customize}

तुम्ही करू शकता:

१. मेन्यू आयटम्स आणि किंमती संपादित (Edit) करणे
२. श्रेणी जोडणे किंवा काढणे
३. श्रेणींमधील आयटम्सची पुनर्रचना (Reorder) करणे
४. वर्णने आणि आहारविषयक माहिती अपडेट करणे
५. स्टायलिंग आणि लेआउट समायोजित करणे

## मेन्यू डिस्प्ले पर्याय (Menu Display Options) {#menu-display-options}

### पूर्ण मेन्यू पेज (Full Menu Page) {#full-menu-page}

तुमचे संपूर्ण मेन्यू प्रदर्शित करणारे एक समर्पित पेज:

- श्रेणीनुसार आयोजित
- शोधण्यायोग्य आणि फिल्टर करण्यायोग्य
- प्रिंट-फ्रेंडली लेआउट
- मोबाइल-रिस्पॉन्सिव्ह डिझाइन

### मेन्यू विजेट (Menu Widget) {#menu-widget}

इतर पानांवर मेन्यू विभाग समाविष्ट करा:

- होमपेजवर खास आयटम्स
- साइडबारवर दररोजचे खास पदार्थ
- बार पेजवर पेय मेन्यू
- फुटरवर मिठाईचे प्रदर्शन

### मेन्यू PDF (Menu PDF) {#menu-pdf}

डाउनलोड करण्यायोग्य PDF मेन्यू तयार करा:

- व्यावसायिक स्वरूपण (Professional formatting)
- प्रिंट-तयार गुणवत्ता
- प्रतिमा आणि वर्णनांचा समावेश
- शेअर करणे आणि ईमेल करणे सोपे

## आहारविषयक आणि ॲलर्जीक माहिती (Dietary and Allergen Information) {#dietary-and-allergen-information}

### आहारविषयक गुणधर्म (Dietary Attributes) {#dietary-attributes}

आयटम्सला आहारविषयक माहितीने चिन्हांकित करा:

- **Vegan** — कोणतेही प्राणी उत्पादने नाहीत
- **Vegetarian** — मांसाहार नाही
- **Gluten-Free** — सीलिएक रोगासाठी सुरक्षित
- **Dairy-Free** — दुग्धजन्य उत्पादने नाहीत
- **Nut-Free** — कोणतेही झाडाचे कठीण견 किंवा शेंगदाणे नाहीत
- **Low-Carb** — कमी कार्बोहायड्रेट्स
- **High-Protein** — प्रथिने-समृद्ध

### ॲलर्जीक चेतावणी (Allergen Warnings) {#allergen-warnings}

सामान्य ॲलर्जीक घटकांचा समावेश करा:

- **Nuts** — झाडाचे कठीण견 आणि शेंगदाणे
- **Shellfish** — क्रस्टेशियन आणि मोलस्क
- **Fish** — सर्व मासे प्रजाती
- **Dairy** — दूध आणि दुग्धजन्य उत्पादने
- **Eggs** — चिकन अंडी
- **Soy** — सोया उत्पादने
- **Gluten** — गहू आणि ग्लूटेनयुक्त धान्य
- **Sesame** — तूर आणि तेल

## मेन्यू व्यवस्थापन (Menu Management) {#menu-management}

### किंमती अपडेट करणे (Updating Prices) {#updating-prices}

मेन्यूच्या किमती सहजपणे अपडेट करा:

१. मेन्यू पेजवर जा
२. "Edit Menu" वर क्लिक करा
३. आयटम्ससाठी किंमती अपडेट करा
४. बदल सेव्ह करा
५. बदल त्वरित तुमच्या साइटवर दिसतील

### हंगामी आयटम्स जोडणे (Adding Seasonal Items) {#adding-seasonal-items}

हंगामी मेन्यू विविधता तयार करा:

१. नवीन मेन्यू आवृत्ती तयार करा
२. हंगामी आयटम्स जोडा
३. आयटम्सला "Seasonal" म्हणून चिन्हांकित करा
४. उपलब्धता तारखा निश्चित करा
५. हंगामात आपोआप प्रदर्शित होईल

### खास पदार्थांचे व्यवस्थापन (Managing Specials) {#managing-specials}

दररोजचे किंवा साप्ताहिक खास पदार्थ प्रदर्शित करा:

१. "Specials" श्रेणी तयार करा
२. उपलब्धता तारखांसह आयटम्स जोडा
३. होमपेजवर खास पदार्थांवर हायलाइट करा
४. दररोज किंवा साप्ताहिक अपडेट करा
५. जुने खास पदार्थ संग्रहित (Archive) करा

## Theme Builder सोबत एकत्रीकरण (Integration with Theme Builder) {#integration-with-theme-builder}

जेव्हा तुम्ही हॉस्पिटॅलिटी साइटसाठी Theme Builder वापरता:

१. **स्वयंचलित मेन्यू ओळख (Automatic menu detection)** — तुम्ही खाद्य/पेय व्यवसाय आहात की नाही हे ओळखते
२. **मेन्यू पेज निर्मिती (Menu page creation)** — व्यावसायिक मेन्यू पेज तयार करते
३. **डिझाइन जुळणे (Design matching)** — मेन्यू तुमच्या साइटच्या थीमशी जुळतात
४. **मोबाइल ऑप्टिमायझेशन (Mobile optimization)** — मेन्यू फोनवर सुंदर दिसतात
५. **SEO ऑप्टिमायझेशन (SEO optimization)** — मेन्यू सर्च-इंजिनसाठी अनुकूल असतात

## सर्वोत्तम पद्धती (Best Practices) {#best-practices}

### मेन्यू डिझाइन (Menu Design) {#menu-design}

- **स्पष्ट आयोजन (Clear organization)** — तार्किक श्रेणी रचना
- **वाचण्यास सोपे वर्णन (Readable descriptions)** — आकर्षक आणि माहितीपूर्ण
- **सुसंगत किंमत (Consistent pricing)** — स्पष्ट चलन आणि स्वरूपण
- **व्यावसायिक फोटो (Professional photos)** — उच्च-गुणवत्तेचे खाद्य प्रतिमा
- **व्हाइटस्पेस (Whitespace)** — पेजवर जास्त गर्दी करू नका

### सामग्री (Content) {#content}

- **अचूक वर्णन (Accurate descriptions)** — आयटम्सचे अचूक वर्णन करा
- **खास पदार्थांवर हायलाइट करा (Highlight specials)** — खास पदार्थ उठून दिसू द्या
- **ॲलर्जीक घटक समाविष्ट करा (Include allergens)** — नेहमी ॲलर्जीक घटकांची यादी करा
- **नियमित अपडेट करा (Update regularly)** — किंमती आणि आयटम्स अद्ययावत ठेवा
- **आकर्षक भाषा वापरा (Use appetizing language)** — आयटम्स स्वादिष्ट वाटायला लावा

### सुलभता (Accessibility) {#accessibility}

- **वाचण्यास सोपे फॉन्ट (Readable fonts)** — स्पष्ट, वाचता येतील असे फॉन्ट वापरा
- **पुरेसा कॉन्ट्रास्ट (Sufficient contrast)** — मजकूर वाचता येण्यासारखा असल्याची खात्री करा
- **आहारविषयक लेबल (Dietary labels)** — आहारविषयक पर्याय स्पष्टपणे चिन्हांकित करा
- **ॲलर्जीक चेतावणी (Allergen warnings)** — ॲलर्जीक घटक प्रमुखपणे प्रदर्शित करा
- **मोबाइल-फ्रेंडली (Mobile-friendly)** — सर्व उपकरणांवर चाचणी करा

## उदाहरणे (Examples) {#examples}

### रेस्टॉरंट मेन्यू रचना (Restaurant Menu Structure) {#restaurant-menu-structure}

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

### कॅफे मेन्यू रचना (Cafe Menu Structure) {#cafe-menu-structure}

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

## संबंधित वैशिष्ट्ये (Related Features) {#related-features}

- [Create Menu](../abilities/create-menu.md) — नेव्हिगेशन मेन्यू तयार करा
- [Design Direction](./design-direction.md) — तुमच्या साइटचे डिझाइन सानुकूलित करा
- [Discovery Interview](./discovery-interview.md) — तुमच्या साइटची रचना योजना करा
