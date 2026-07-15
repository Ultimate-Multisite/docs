---
title: साइट बिल्डर मोड काढण्याची सूचना
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode काढून टाकण्याची सूचना

**Superdav AI Agent v1.12.0 मध्ये Site Builder mode काढून टाकण्यात आले आहे.** जर तुम्ही Site Builder mode वापरत असाल, तर थीम तयार करण्यासाठी आणि साइट सेटअप करण्यासाठी तुम्ही **Setup Assistant agent** वापरण्याकडे वळले पाहिजे.

## काय झाले? {#what-happened}

### Site Builder Mode (जुना) {#site-builder-mode-legacy}

Site Builder mode हा खालील गोष्टींसाठी एक सोप्या टप्प्यांमध्ये (wizard-based) इंटरफेस होता:

- टेम्पलेट्समधून साइट तयार करणे
- मूलभूत सेटिंग्ज कॉन्फिगर करणे
- थीम निवडणे
- प्रारंभिक सामग्री सेट करणे

### त्याऐवजी काय आले? {#what-replaced-it}

आता **Setup Assistant agent** याने Site Builder ची सर्व कार्यक्षमता हाताळली आहे, ज्यात खालील गोष्टींचा समावेश आहे:

- अधिक लवचिक, agent-guided सेटअप
- थीम कस्टमायझेशनचे चांगले पर्याय
- Theme Builder ऑनबोर्डिंगशी एकत्रीकरण (Integration)
- भविष्यातील सत्रांसाठी कायमस्वरूपी site_brief मेमरी

## जर तुम्ही Site Builder Mode वापरत असाल {#if-you-were-using-site-builder-mode}

### तुमच्या साइट्स सुरक्षित आहेत {#your-sites-are-safe}

- Site Builder mode ने तयार केलेल्या विद्यमान साइट्स कार्य करत राहतील
- कोणताही डेटा लॉस किंवा साइटमध्ये अडथळा नाही
- तुम्ही तुमच्या साइट्सचे सामान्यपणे व्यवस्थापन करू शकता

### Setup Assistant Agent वर स्थलांतर करा {#migrate-to-setup-assistant-agent}

नवीन साइट सेटअप किंवा थीम बदलांसाठी, Setup Assistant agent वापरा:

```
"Help me set up a new site"
```

किंवा

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent अधिक लवचिकतेसह तीच कार्यक्षमता प्रदान करतो.

## तुलना: Site Builder विरुद्ध Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (काढले) | Setup Assistant (नवीन) |
|---------|----------------------|----------------------|
| Setup method | जादूच्या क्रमाने आधारित फॉर्म | Agent संवाद (Conversation) |
| Theme selection | पूर्वनिर्धारित टेम्पलेट्स | कस्टमायझेशनद्वारे निर्मिती |
| Customization | मर्यादित पर्याय | पूर्ण डिझाइन सिस्टीम |
| Site brief | साठवला जात नाही | कायमस्वरूपी मेमरी |
| Future sessions | सेटअप पुन्हा करावा लागतो | साठवलेला site_brief वापरता येतो |
| Flexibility | निश्चित कार्यप्रवाह | अनुकूल संवाद (Adaptive conversation) |

## Setup Assistant Agent वर स्थलांतर करणे {#migrating-to-setup-assistant-agent}

### नवीन साइटसाठी {#for-new-sites}

Site Builder mode वापरण्याऐवजी:

1. विनंती करा: "Help me set up a new site"
2. Setup Assistant agent तुम्हाला खालील गोष्टींमध्ये मार्गदर्शन करेल:
   - साइटचा उद्देश आणि लक्ष्ये
   - लक्ष्यित प्रेक्षक (Target audience)
   - ब्रँड ओळख (Brand identity)
   - थीम निर्मिती
   - प्रारंभिक कॉन्फिगरेशन

### विद्यमान साइटसाठी {#for-existing-sites}

जर तुमच्याकडे Site Builder mode मधून असलेली विद्यमान साइट असेल:

1. तुम्ही ती जशी आहे तशी वापरणे सुरू ठेवू शकता
2. थीम अपडेट करण्यासाठी, विनंती करा: "Redesign my site"
3. Setup Assistant agent तुम्हाला नवीन थीम तयार करण्यात मदत करेल
4. तुमच्या साइटचा डेटा बदलणार नाही

### थीम बदलांसाठी {#for-theme-changes}

Site Builder mode च्या थीम निवडीऐवजी:

1. विनंती करा: "Change my theme"
2. Setup Assistant agent खालील गोष्टी करेल:
   - तुमच्या डिझाइन प्राधान्यांबद्दल विचारणा करेल
   - कस्टमायझ्ड थीम तयार करेल
   - ती तुमच्या साइटवर सक्रिय करेल

## मुख्य फरक {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. एक टेम्पलेट निवडा
2. एक थीम निवडा
3. मूलभूत सेटिंग्ज कॉन्फिगर करा
4. पूर्ण
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. तुमच्या साइटचा उद्देश सांगा
2. तुमचे लक्ष्यित प्रेक्षक निश्चित करा
3. डिझाइन प्राधान्ये निवडा
4. Agent कस्टमायझ्ड थीम तयार करतो
5. Agent थीम सक्रिय करतो
6. भविष्यातील सत्रांसाठी site_brief साठवला जातो
```

## Setup Assistant Agent चे फायदे {#benefits-of-setup-assistant-agent}

### अधिक लवचिक {#more-flexible}

- तुम्ही नैसर्गिक भाषेत तुमच्या साइटचे वर्णन करू शकता
- कस्टमायझ्ड शिफारसी मिळतात
- तुमच्या विशिष्ट गरजांशी जुळवून घेते

### चांगली कस्टमायझेशन {#better-customization}

- कस्टमायझ्ड थीम निर्मिती
- डिझाइन सिस्टीमचे निर्णय
- कायमस्वरूपी डिझाइन टोकन्स

### कायमस्वरूपी मेमरी {#persistent-memory}

- तुमचा site_brief साठवला जातो
- भविष्यातील agents ला तुमच्या साइटची माहिती असते
- सेटअप माहिती पुन्हा देण्याची गरज नाही

### एकत्रित कार्यप्रवाह {#integrated-workflow}

- Theme Builder ऑनबोर्डिंग
- Design System Aesthetics skill
- Ability Visibility controls
- सर्व काही अखंडपणे एकत्र काम करते

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### मला Site Builder mode सापडत नाही {#i-cant-find-site-builder-mode}

Site Builder mode काढून टाकण्यात आले आहे. त्याऐवजी Setup Assistant agent वापरा:

```
"Help me set up a new site"
```

### मला Site Builder मधून साइट पुन्हा तयार करायची आहे {#i-want-to-recreate-a-site-from-site-builder}

तुम्ही Setup Assistant agent वापरून ती पुन्हा तयार करू शकता:

1. विनंती करा: "Help me set up a new site"
2. तुमच्या मूळ साइटचा उद्देश आणि डिझाइनचे वर्णन करा
3. agent एक तत्सम थीम तयार करेल
4. तुमचा site_brief भविष्यातील संदर्भासाठी साठवला जाईल

### माझी विद्यमान Site Builder साइट काम करत नाहीये {#my-existing-site-builder-site-isnt-working}

Site Builder mode ने तयार केलेल्या विद्यमान साइट्स कार्य करत राहतील. जर तुम्हाला काही समस्या येत असतील:

1. तपासा की तुमची थीम अजूनही सक्रिय आहे की नाही
2. तपासा की तुमचे प्लगइन्स (plugins) सक्षम (enabled) आहेत की नाही
3. WordPress error logs तपासा
4. समस्या कायम राहिल्यास सपोर्टशी संपर्क साधा

### मी अजूनही माझ्या जुन्या Site Builder टेम्पलेट्स वापरू शकतो का? {#can-i-still-use-my-old-site-builder-templates}

Site Builder टेम्पलेट्स आता उपलब्ध नाहीत. तथापि:

- तुमच्या विद्यमान साइट्स कार्य करत राहतील
- तुम्ही Setup Assistant agent वापरून अशाच साइट्स पुन्हा तयार करू शकता
- Setup Assistant agent अधिक कस्टमायझेशन पर्याय प्रदान करतो

## पुढील पाऊले {#next-steps}

1. **नवीन साइटसाठी**: Setup Assistant agent वापरा
2. **विद्यमान साइटसाठी**: जशा आहेत तशा वापरणे सुरू ठेवा
3. **थीम बदलांसाठी**: Setup Assistant agent कडून मदत मागा
4. **डिझाइन सुधारणांसाठी**: Design System Aesthetics skill वापरा

## संबंधित विषय {#related-topics}

- **Theme Builder Onboarding**: कस्टमायझ्ड थीम्ससाठी मार्गदर्शन केलेला सेटअप
- **Setup Assistant Agent**: agent-guided साइट सेटअप
- **Site Specification Skill**: तुमच्या साइटचे लक्ष्य आणि प्रेक्षक परिभाषित करा
- **Design System Aesthetics Skill**: तुमच्या साइटची व्हिज्युअल ओळख सुधारित करा
