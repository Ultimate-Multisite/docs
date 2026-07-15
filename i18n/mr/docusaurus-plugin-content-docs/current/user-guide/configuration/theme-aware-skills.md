---
title: थीम-जागरूक कौशल्ये
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills (थीम-जागरूक कौशल्ये)

Superdav AI Agent v1.10.0 मध्ये चार नवीन थीम-जागरूक (theme-aware) बिल्ट-इन कौशल्ये (built-in skills) समाविष्ट केली आहेत, जी आपोआप तुमच्या सक्रिय WordPress थीमशी जुळवून घेतात. ही कौशल्ये तुमच्या थीमच्या आर्किटेक्चर आणि वैशिष्ट्यांशी (features) जुळणारे विशेष मार्गदर्शन आणि क्षमता (capabilities) प्रदान करतात.

## What Are Theme-Aware Skills? (थीम-जागरूक कौशल्ये म्हणजे काय?) {#what-are-theme-aware-skills}

थीम-जागरूक कौशल्ये म्हणजे पूर्व-कॉन्फिगर केलेले ज्ञानकोष (knowledge bases) आणि टूलसेट (tool sets) जे AI असिस्टंट आपोआप तुमच्या साइटवर सध्या सक्रिय असलेल्या WordPress थीमच्या आधारावर निवडतो. जेव्हा तुम्ही थीम बदलता, तेव्हा असिस्टंटची उपलब्ध कौशल्ये आपोआप अपडेट होतात — यासाठी कोणत्याही मॅन्युअल कॉन्फिगरेशनची गरज नाही.

प्रत्येक कौशल्यात खालील गोष्टींचा समावेश असतो:

- **Theme-specific documentation** — थीम वापरणे आणि कस्टमाइझ करण्याबद्दल मार्गदर्शन
- **Block and pattern references** — उपलब्ध ब्लॉक्स, पॅटर्न आणि डिझाइन पर्याय
- **Customization examples** — सामान्य कामांसाठी कोड स्निपेट्स आणि कॉन्फिगरेशन पॅटर्न
- **Best practices** — थीमच्या आर्किटेक्चर आणि कार्यप्रवाहाला (workflow) सर्वोत्तम शिफारसी

## Available Theme-Aware Skills (उपलब्ध थीम-जागरूक कौशल्ये) {#available-theme-aware-skills}

### Block Themes (ब्लॉक थीम्स) {#block-themes}

**Applies to:** जी थीम्स WordPress च्या ब्लॉक-आधारित (Full Site Editing) आर्किटेक्चरचा वापर करतात.

Block Themes कौशल्य खालील गोष्टींवर मार्गदर्शन करते:

- ब्लॉक एडिटर वापरून टेम्पलेट्स तयार करणे आणि संपादित करणे
- ब्लॉक पॅटर्न आणि रियुझेबल ब्लॉक्ससोबत काम करणे
- ग्लोबल स्टाईल्स आणि theme.json सेटिंग्ज कस्टमाइझ करणे
- थीम ब्लॉक्स आणि व्हेरिएशन वापरणे
- तुमच्या साइटसाठी कस्टम ब्लॉक पॅटर्न तयार करणे

**Automatically activated when:** जेव्हा तुमची सक्रिय थीम एक ब्लॉक थीम असते (जी `block-templates` फीचरला सपोर्ट करते).

### Classic Themes (क्लासिक थीम्स) {#classic-themes}

**Applies to:** पारंपारिक WordPress थीम्स जी PHP टेम्पलेट्स आणि क्लासिक एडिटर वापरतात.

Classic Themes कौशल्य खालील गोष्टींवर मार्गदर्शन करते:

- PHP टेम्पलेट फाइल्स आणि हुक्स (hooks) सोबत काम करणे
- कस्टमाइझर (Customizer) द्वारे थीमचा देखावा कस्टमाइझ करणे
- विजेट एरिया आणि साइडबार वापरणे
- CSS मध्ये बदल करणे आणि चाइल्ड थीम डेव्हलपमेंट
- थीम हायरार्की (hierarchy) आणि टेम्पलेट टॅग्स समजून घेणे

**Automatically activated when:** जेव्हा तुमची सक्रिय थीम एक क्लासिक (non-block) थीम असते.

### Kadence Blocks (कॅडन्स ब्लॉक्स) {#kadence-blocks}

**Applies to:** जी साइट्स ॲडव्हान्स ब्लॉक-आधारित डिझाइनसाठी Kadence Blocks plugin वापरतात.

Kadence Blocks कौशल्य खालील गोष्टींवर मार्गदर्शन करते:

- Kadence ची ॲडव्हान्स ब्लॉक लायब्ररी वापरणे (Hero, Testimonials, Pricing, इत्यादी.)
- Kadence ब्लॉक सेटिंग्ज आणि रिस्पॉन्सिव्ह पर्याय कॉन्फिगर करणे
- Kadence च्या ग्रिड आणि कंटेनर ब्लॉक्ससह कस्टम लेआउट तयार करणे
- तुमच्या थीमसोबत Kadence ब्लॉक्सचे इंटिग्रेशन करणे
- Kadence च्या डिझाइन सिस्टीम आणि प्रीसेटचा फायदा घेणे

**Automatically activated when:** जेव्हा तुमच्या साइटवर Kadence Blocks plugin सक्रिय असते.

### Kadence Theme (कॅडन्स थीम) {#kadence-theme}

**Applies to:** जी साइट्स ब्लॉक-आधारित डिझाइन आणि कस्टमायझेशनसाठी Kadence theme वापरतात.

Kadence Theme कौशल्य खालील गोष्टींवर मार्गदर्शन करते:

- ग्लोबल स्टाईल्स आणि theme.json द्वारे Kadence थीम कस्टमाइझ करणे
- Kadence चे बिल्ट-इन ब्लॉक पॅटर्न आणि टेम्पलेट्स वापरणे
- Kadence थीम सेटिंग्ज आणि पर्याय कॉन्फिगर करणे
- Kadence च्या डिझाइन सिस्टीमसह कस्टम डिझाइन तयार करणे
- लोकप्रिय प्लगइन्स आणि टूल्ससोबत Kadence चे इंटिग्रेशन करणे

**Automatically activated when:** जेव्हा Kadence theme तुमची सक्रिय थीम असते.

## How Skills Are Selected (कौशल्ये कशी निवडली जातात) {#how-skills-are-selected}

असिस्टंट प्रत्येक मेसेजवर तुमची सक्रिय थीम आणि स्थापित प्लगइन्स आपोआप ओळखतो. जर कोणतेही जुळणारे थीम-जागरूक कौशल्य उपलब्ध असेल, तर ते आपोआप असिस्टंटच्या कॉन्टेक्स्टमध्ये लोड केले जाते. तुम्हाला कौशल्ये मॅन्युअली सक्षम (enable) करण्याची किंवा बदलण्याची गरज नाही.

### Multiple Skills (अनेक कौशल्ये) {#multiple-skills}

जर तुमच्या साइटसाठी अनेक कौशल्ये लागू होत असतील (उदाहरणार्थ, जर तुमच्याकडे Kadence Blocks आणि Kadence Theme दोन्ही सक्रिय असतील), तर असिस्टंटला सर्व लागू कौशल्ये वापरता येतात आणि प्रत्येक ठिकाणाहून मार्गदर्शन घेता येते.

### Switching Themes (थीम बदलणे) {#switching-themes}

जेव्हा तुम्ही तुमची सक्रिय थीम बदलता, तेव्हा पुढील मेसेजवर असिस्टंटची उपलब्ध कौशल्ये आपोआप अपडेट होतात. उदाहरणार्थ:

1. तुम्ही **Block Themes** कौशल्य सक्रिय असलेल्या ब्लॉक थीमचा वापर करत आहात.
2. तुम्ही क्लासिक थीमवर स्विच करता.
3. तुमच्या पुढील मेसेजवर, **Classic Themes** कौशल्य आपोआप लोड होते आणि **Block Themes** कौशल्य उपलब्ध नसते.

## Using Theme-Aware Skills (थीम-जागरूक कौशल्ये वापरणे) {#using-theme-aware-skills}

थीम-जागरूक कौशल्य वापरण्यासाठी, तुम्हाला फक्त चॅट इंटरफेसमध्ये काय करायचे आहे याचे वर्णन करावे लागते. असिस्टंट आपोआप योग्य कौशल्याचे मार्गदर्शन संदर्भ देईल.

### Example Prompts (उदाहरण प्रॉम्प्ट्स) {#example-prompts}

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling."

असिस्टंट तुमच्या सक्रिय थीम आणि प्लगइन्सनुसार थीम-विशिष्ट मार्गदर्शन आणि कोड उदाहरणे प्रदान करेल.

:::note
Theme-aware skills Superdav AI Agent v1.10.0 आणि त्यानंतर आपोआप उपलब्ध आहेत. यासाठी कोणतेही अतिरिक्त सेटअप किंवा कॉन्फिगरेशन आवश्यक नाही.
:::
