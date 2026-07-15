---
title: तृतीय-पक्ष मोड स्थलांतरण
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# थर्ड-पार्टी मोड स्थलांतरण

Superdav AI Agent v1.12.0 ने थर्ड-पार्टी क्षमता (abilities) कशा हाताळल्या जातात यात बदल केला आहे. **थर्ड-पार्टी मोड आता आपोआप 'auto' वर सेट होतो**, ज्यामुळे मॅन्युअल कॉन्फिगरेशनशिवाय WordPress 7.0+ वर native WordPress Abilities API इंटिग्रेशन शक्य होते.

## काय बदलले? {#what-changed}

### v1.12.0 पूर्वी {#before-v1120}

थर्ड-पार्टी क्षमतांसाठी मॅन्युअल कॉन्फिगरेशनची आवश्यकता होती:

- तुम्हाला स्पष्टपणे "third-party mode" सक्षम (enable) करावा लागत होता.
- क्षमता एका कस्टम रजिस्ट्रीमधून लोड केल्या जात होत्या.
- WordPress Abilities API सोबत इंटिग्रेशन ऐच्छिक (optional) होते.
- डिफॉल्ट मोड 'Legacy' (जुना) होता.

### v1.12.0 नंतर {#after-v1120}

थर्ड-पार्टी क्षमता आपोआप काम करतात:

- थर्ड-पार्टी मोड आपोआप "auto" वर सेट होतो.
- क्षमता WordPress Abilities API सोबत natively इंटिग्रेट होतात.
- WordPress 7.0+ वर कोणत्याही मॅन्युअल कॉन्फिगरेशनची गरज नाही.
- जुन्या WordPress आवृत्त्यांसाठी Legacy मोड अजूनही उपलब्ध आहे.

## कोणावर परिणाम होईल? {#who-is-affected}

### नवीन इन्स्टॉलेशन (WordPress 7.0+) {#new-installations-wordpress-70}

**काही कृती करण्याची गरज नाही.** थर्ड-पार्टी मोड आपोआप "auto" वर सेट होतो आणि क्षमता लगेच काम करण्यास तयार असतात.

### विद्यमान इन्स्टॉलेशन {#existing-installations}

**तुमची सेटिंग्ज जपली जातील.** जर तुम्ही वापरत असाल:

- **Legacy mode**: तुम्ही Legacy मोडमध्येच राहाल (बदल नाही)
- **Manual third-party mode**: तुम्ही मॅन्युअल मोडमध्येच राहाल (बदल नाही)
- **Auto mode**: तुम्ही auto मोडमध्येच राहाल (बदल नाही)

### 7.0 पूर्वीच्या WordPress आवृत्त्या {#wordpress-versions-before-70}

**Legacy मोड अजूनही उपलब्ध आहे.** जर तुम्ही WordPress 6.x किंवा त्यापूर्वीच्या आवृत्तीवर असाल:

- थर्ड-पार्टी मोड आपोआप "legacy" वर सेट होतो.
- तुम्हाला हवे असल्यास तुम्ही थर्ड-पार्टी मोड मॅन्युअली सक्षम करू शकता.
- native Abilities API वापरण्यासाठी WordPress 7.0+ वर अपग्रेड करा.

## मोड समजून घेणे {#understanding-the-modes}

### Auto Mode (नवीन डिफॉल्ट) {#auto-mode-new-default}

**Auto mode** native WordPress Abilities API इंटिग्रेशन वापरतो:

- क्षमता WordPress hooks द्वारे नोंदणीकृत (registered) होतात.
- WordPress 7.0+ Abilities API सोबत पूर्ण सुसंगतता (compatibility).
- थर्ड-पार्टी क्षमता आपोआप शोधल्या जातात (Automatic discovery).
- कोणत्याही मॅन्युअल कॉन्फिगरेशनची गरज नाही.

**कधी वापरावा**: WordPress 7.0+ सह थर्ड-पार्टी क्षमता.

### Manual Mode {#manual-mode}

**Manual mode** साठी स्पष्ट कॉन्फिगरेशनची आवश्यकता असते:

- तुम्हाला कोणत्या थर्ड-पार्टी क्षमता लोड करायच्या आहेत हे तुम्ही निश्चित करता.
- चाचणी (testing) किंवा निवडक क्षमता लोड करण्यासाठी उपयुक्त.
- कॉन्फिगरेशन फाईल्समध्ये संपादन (editing) करणे आवश्यक आहे.
- जास्त नियंत्रण मिळते, पण जास्त सेटअप लागतो.

**कधी वापरावा**: चाचणी, निवडक क्षमता लोड करणे किंवा कस्टम कॉन्फिगरेशन.

### Legacy Mode {#legacy-mode}

**Legacy mode** जुन्या थर्ड-पार्टी क्षमता प्रणालीचा वापर करतो:

- कस्टम क्षमता रजिस्ट्री (WordPress Abilities API नाही).
- जुन्या WordPress आवृत्त्यांशी मागे सुसंगत (Backward compatible).
- native WordPress इंटिग्रेशन नाही.
- अप्रचलित (Deprecated) पण अजूनही समर्थित.

**कधी वापरावा**: WordPress 6.x किंवा त्यापूर्वी, किंवा जेव्हा तुम्हाला legacy सुसंगतता आवश्यक असेल.

## तुमचा सध्याचा मोड तपासणे {#checking-your-current-mode}

### ॲडमिन पॅनेलद्वारे {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** वर जा.
2. **Third-Party Mode** सेटिंग शोधा.
3. तुम्हाला तुमचा सध्याचा मोड आणि तो बदलण्याचे पर्याय दिसतील.

### कोडद्वारे {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', किंवा 'legacy'
```

## तुमचा मोड बदलणे {#changing-your-mode}

### Auto Mode वर स्विच करणे {#switch-to-auto-mode}

जर तुम्ही WordPress 7.0+ वर असाल आणि auto मोड वापरू इच्छित असाल:

1. **Superdav AI Agent** → **Settings** वर जा.
2. **Third-Party Mode** शोधा.
3. **Auto (WordPress Abilities API)** निवडा.
4. **Save** वर क्लिक करा.

Superdav AI Agent आपोआप थर्ड-पार्टी क्षमता शोधून त्यांची नोंदणी करेल.

### Manual Mode वर स्विच करणे {#switch-to-manual-mode}

जर तुम्हाला कोणत्या क्षमता लोड करायच्या आहेत त्यावर मॅन्युअली नियंत्रण हवे असेल:

1. **Superdav AI Agent** → **Settings** वर जा.
2. **Third-Party Mode** शोधा.
3. **Manual** निवडा.
4. **Save** वर क्लिक करा.
5. कोणत्या क्षमता लोड करायच्या आहेत हे निश्चित करण्यासाठी तुमच्या कॉन्फिगरेशन फाईलमध्ये संपादन करा.

### Legacy Mode वर स्विच करणे {#switch-to-legacy-mode}

जर तुम्हाला legacy सुसंगतता (compatibility) हवी असेल:

1. **Superdav AI Agent** → **Settings** वर जा.
2. **Third-Party Mode** शोधा.
3. **Legacy** निवडा.
4. **Save** वर क्लिक करा.

## Auto Mode चे फायदे {#benefits-of-auto-mode}

### स्वयंचलित शोध (Automatic Discovery) {#automatic-discovery}

क्षमता खालील ठिकाणांहून आपोआप शोधल्या जातात:

- स्थापित प्लगइन्स (Installed plugins)
- सक्रिय थीम (Active theme)
- 'Must-use' प्लगइन्स
- ड्रॉप-इन प्लगइन्स

मॅन्युअल नोंदणी करण्याची गरज नाही.

### native इंटिग्रेशन {#native-integration}

क्षमता WordPress Abilities API सोबत इंटिग्रेट होतात:

- WordPress core सोबत सुसंगत.
- WordPress admin सोबत काम करते.
- Abilities API वापरणाऱ्या इतर प्लगइन्सशी सुसंगत.
- WordPress विकसित होत असताना भविष्यासाठी तयार (Future-proof).

### सोपे व्यवस्थापन (Simplified Management) {#simplified-management}

- संपादित करण्यासाठी कोणतेही कॉन्फिगरेशन फाईल्स नाहीत.
- मॅन्युअल क्षमता नोंदणी नाही.
- Ability Visibility नियंत्रणे आपोआप काम करतात.
- ॲडमिन सूचना तुम्हाला वर्गीकृत नसलेल्या क्षमतांबद्दल सतर्क करतात.

### चांगले कार्यप्रदर्शन (Better Performance) {#better-performance}

- क्षमता कॅश (cached) केल्या जातात.
- मागणीनुसार (on demand) लोडेड होतात.
- WordPress 7.0+ साठी ऑप्टिमाइझ केलेले.

## स्थलांतरण मार्ग (Migration Path) {#migration-path}

### जर तुम्ही WordPress 6.x वर असाल {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ वर अपग्रेड करा** (जेव्हा तयार असाल).
2. **Superdav AI Agent** ला v1.12.0+ पर्यंत अपडेट करा.
3. **थर्ड-पार्टी मोड Auto वर बदला** (ऐच्छिक; legacy मोड अजूनही काम करतो).
4. योग्य ॲक्सेस कंट्रोल सुनिश्चित करण्यासाठी **ability visibility** तपासा.

### जर तुम्ही WordPress 7.0+ वर असाल {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** ला v1.12.0+ पर्यंत अपडेट करा.
2. **थर्ड-पार्टी मोड Auto वर सेट केला आहे की नाही हे तपासा** (तो डिफॉल्टनुसार असाच असावा).
3. योग्य ॲक्सेस कंट्रोल सुनिश्चित करण्यासाठी **ability visibility** तपासा.
4. ते काम करतात याची खात्री करण्यासाठी **थर्ड-पार्टी क्षमतांची चाचणी** करा.

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### auto मोडमध्ये क्षमता लोड होत नाहीत {#abilities-arent-loading-in-auto-mode}

- तुम्ही WordPress 7.0+ वर आहात याची खात्री करा.
- थर्ड-पार्टी मोड "Auto" वर सेट आहे की नाही हे तपासा.
- क्षमता प्रदान करणारा प्लगइन सक्रिय आहे की नाही हे तपासा.
- नोंदणी त्रुटींसाठी WordPress error logs तपासा.

### मला legacy मोड कायम ठेवायचा आहे {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** वर जा.
- **Legacy** निवडा.
- **Save** वर क्लिक करा.
- Legacy मोड काम करत राहील.

### माझ्या कस्टम क्षमता दिसत नाहीत {#my-custom-abilities-arent-showing}

- त्या WordPress hooks द्वारे नोंदणीकृत आहेत याची खात्री करा.
- त्यांनी Abilities API योग्यरित्या लागू केले आहे की नाही हे तपासा.
- WordPress error logs तपासा.
- सर्व नोंदणीकृत क्षमता पाहण्यासाठी **Ability Visibility** ॲडमिन पेज वापरा.

### मला "unclassified ability" सूचना मिळत आहेत {#im-getting-unclassified-ability-notices}

- हे नवीन थर्ड-पार्टी क्षमतांसाठी सामान्य आहे.
- ॲडमिन सूचनामध्ये त्यांचा पुनरावलोकन करा आणि वर्गीकरण करा.
- वर्गीकरणाबद्दल तपशील पाहण्यासाठी **Ability Visibility** पहा.

## मागे सुसंगतता (Backward Compatibility) {#backward-compatibility}

### विद्यमान कॉन्फिगरेशन्स {#existing-configurations}

जर तुमच्याकडे विद्यमान थर्ड-पार्टी क्षमता कॉन्फिगरेशन्स असतील:

- **Legacy mode**: तुमची कॉन्फिगरेशन काम करत राहील.
- **Manual mode**: तुमची कॉन्फिगरेशन काम करत राहील.
- **Auto mode**: तुमची कॉन्फिगरेशन दुर्लक्षित केली जाईल (auto मोड प्रभावी होईल).

तुमची कस्टम कॉन्फिगरेशन कायम ठेवण्यासाठी, Manual किंवा Legacy मोडमध्ये रहा.

### अप्रचलित होण्याची कालरेखा (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy आणि Manual मोड अजूनही पूर्णपणे समर्थित आहेत.
- **v1.13.0+**: Legacy मोडवर अप्रचलिततेच्या सूचना दिसू शकतात.
- **v2.0.0**: Legacy मोड काढून टाकला जाऊ शकतो (TBD).

## सर्वोत्तम पद्धती (Best Practices) {#best-practices}

### नवीन इन्स्टॉलेशनसाठी {#for-new-installations}

- Auto मोड वापरा (हा डिफॉल्ट आहे).
- Superdav AI Agent ला क्षमता आपोआप शोधू द्या.
- ॲक्सेस नियंत्रित करण्यासाठी Ability Visibility वापरा.

### विद्यमान इन्स्टॉलेशनसाठी {#for-existing-installations}

- शक्य असेल तेव्हा WordPress 7.0+ वर अपग्रेड करा.
- सोपे व्यवस्थापन करण्यासाठी Auto मोडवर स्विच करा.
- Ability Visibility वापरून क्षमतांचा पुनरावलोकन आणि वर्गीकरण करा.

### कस्टम क्षमतांसाठी {#for-custom-abilities}

- क्षमता WordPress hooks द्वारे नोंदणीकृत करा (Abilities API).
- कस्टम क्षमता रजिस्ट्री वापरणे टाळा.
- Auto मोडसह WordPress 7.0+ वर चाचणी करा.

## पुढील पाऊले {#next-steps}

1. **तुमची WordPress आवृत्ती तपासा**: Auto मोडसाठी तुम्ही 7.0+ वर आहात याची खात्री करा.
2. **तुमचा थर्ड-पार्टी मोड तपासा**: सेटिंग्जवर जा आणि तुमचा सध्याचा मोड तपासा.
3. **आवश्यक असल्यास अपडेट करा**: जर तुम्ही WordPress 7.0+ वर असाल तर Auto मोडवर स्विच करा.
4. **क्षमतांचे वर्गीकरण करा**: कोणतेही वर्गीकृत नसलेल्या क्षमतांचे पुनरावलोकन करा आणि वर्गीकरण करा.
5. **चाचणी करा**: तुमच्या थर्ड-पार्टी क्षमता योग्यरित्या काम करतात याची खात्री करा.

## संबंधित विषय {#related-topics}

- **Ability Visibility**: कोणत्या क्षमता कुठे प्रदर्शित करायच्या आहेत त्यावर नियंत्रण.
- **WordPress Abilities API**: native WordPress क्षमता नोंदणीबद्दल जाणून घ्या.
- **Third-Party Ability Development**: Auto मोडसह काम करणाऱ्या क्षमता तयार करा.
