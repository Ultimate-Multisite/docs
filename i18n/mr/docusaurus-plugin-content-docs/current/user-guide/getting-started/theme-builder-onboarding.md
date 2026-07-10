---
title: थीम बिल्डर ऑनबोर्डिंग फ्लो
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 मध्ये एक निर्देशित **Theme Builder onboarding flow** सादर केला आहे, जो तुम्हाला तुमच्या सुरुवातीच्या सेटअप दरम्यान कस्टमाइज्ड ब्लॉक थीम तयार करण्यात मदत करतो. यामुळे जुन्या Site Builder मोडची जागा अधिक लवचिक, agent-assisted दृष्टिकोन घेतो.

## Theme Builder Onboarding Flow म्हणजे काय? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow हा एक इंटरॅक्टिव्ह सेटअप विझार्ड आहे जो खालील गोष्टी करतो:

- तुम्हाला डिझाइनच्या निर्णयांद्वारे मार्गदर्शन करतो (रंग, टायपोग्राफी, लेआउट)
- तुमच्या साइटच्या व्हिज्युअल ओळख (visual identity) च्या प्राधान्या गोळा करतो
- तुमच्या गरजेनुसार कस्टमाइज्ड ब्लॉक थीम तयार करतो
- पूर्ण झाल्यावर थीम आपोआप सक्रिय करतो

हा flow **Setup Assistant agent** द्वारे चालतो, जो स्पष्टीकरण देणारे प्रश्न विचारतो आणि तुमची थीम टप्प्याटप्प्याने तयार करतो.

## Theme Builder Onboarding सुरू करणे {#starting-the-theme-builder-onboarding}

### पहिल्यांदा सेटअप (First-Run Setup) {#first-run-setup}

जेव्हा तुम्ही Superdav AI Agent नवीन WordPress इंस्टॉलेशनवर पहिल्यांदा सुरू कराल, तेव्हा तुम्हाला हे दिसेल:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow मध्ये प्रवेश करण्यासाठी **"Build a custom theme"** निवडा.

### मॅन्युअल सक्रियण (Manual Activation) {#manual-activation}

तुम्ही कधीही Theme Builder onboarding सुरू करू शकता, फक्त खालीलपैकी एक कमांड देऊन:

```
"Start the Theme Builder onboarding"
```

किंवा

```
"Help me create a custom theme"
```

## Onboarding चे टप्पे {#the-onboarding-steps}

### टप्पा १: मोड निवड (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent तुम्हाला तुमचे प्राधान्य विचारतो:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

बहुतेक वापरकर्त्यांसाठी **Guided mode** शिफारसीय आहे; agent तुमच्या उद्योग आणि उद्दिष्टांवर आधारित डिझाइन शिफारसी करतो.

### टप्पा २: साइट तपशील (Site Specification) {#step-2-site-specification}

तुमच्या साइटबद्दल तुम्हाला विचारले जाईल:

- **Site purpose**: ई-कॉमर्स, ब्लॉग, पोर्टफोलिओ, SaaS, इत्यादी.
- **Target audience**: तुमचे अभ्यागत कोण आहेत?
- **Brand colors**: प्राथमिक आणि दुय्यम रंग (किंवा "मला खात्री नाही")
- **Tone**: व्यावसायिक, सर्जनशील, खेळकर, मिनिमल, इत्यादी.

ही माहिती तुमच्या **site_brief** मेमरीमध्ये साठवली जाते, ज्याचा agent पुढील सत्रांमध्ये संदर्भ घेतात.

### टप्पा ३: डिझाइन सिस्टीम निर्णय (Design System Decisions) {#step-3-design-system-decisions}

agent तुम्हाला डिझाइन टोकन (design token) निवडीतून मार्गदर्शन करतो:

- **Typography**: फॉन्ट फॅमिली (serif, sans-serif, monospace) आणि आकार श्रेणी (size scale)
- **Color palette**: प्राथमिक, दुय्यम, ॲक्सेंट आणि न्यूट्रल रंग
- **Spacing**: कॉम्पॅक्ट, नॉर्मल किंवा स्पेसी लेआउट्स
- **Motion**: ॲनिमेशन्स आणि ट्रान्झिशन्स (आवश्यक असल्यास)

### टप्पा ४: थीम निर्मिती (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent खालील गोष्टींसह तुमची कस्टमाइज्ड ब्लॉक थीम तयार करतो:

- `theme.json` ज्यामध्ये तुमचे सर्व डिझाइन टोकन असतात
- सामान्य लेआउटसाठी ब्लॉक टेम्पलेट्स (होमपेज, ब्लॉग, संपर्क)
- तुमच्या डिझाइन सिस्टीमशी जुळणारे कस्टमाइज्ड ब्लॉक स्टाईल्स
- थीम मेटाडेटा आणि WordPress सपोर्ट घोषणा

### टप्पा ५: सक्रियण आणि पडताळणी (Activation and Verification) {#step-5-activation-and-verification}

थीम आपोआप सक्रिय होते आणि तुम्हाला हे दिसेल:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

यानंतर, तुम्ही थीम योग्यरित्या प्रदर्शित होत आहे की नाही हे तपासण्यासाठी तुमच्या साइटला भेट देऊ शकता.

## Site Specification आणि site_brief मेमरी {#site-specification-and-sitebrief-memory}

ऑनबोर्डिंग दरम्यान, agent तुमच्या साइटचे तपशील **site_brief** मेमरी श्रेणीमध्ये कॅप्चर करतो. यामध्ये खालील गोष्टींचा समावेश आहे:

- साइटचा उद्देश आणि उद्दिष्टे
- लक्ष्यित प्रेक्षक (Target audience)
- ब्रँड रंग आणि टोन
- डिझाइन प्राधान्ये
- सामग्रीची रचना (Content structure)

### site_brief महत्त्वाचे का आहे {#why-sitebrief-matters}

भविष्यातील सत्रांमध्ये, agent तुमच्या site_brief चा संदर्भ घेतात:

- बदलांमध्ये डिझाइनची सातत्यता राखण्यासाठी
- तुमच्या साइटच्या उद्देशानुसार वैशिष्ट्ये सुचवण्यासाठी
- संदर्भ-जागरूक शिफारसी देण्यासाठी
- सेटअप प्रश्न पुन्हा विचारणे टाळण्यासाठी

### तुमचा site_brief पाहणे {#viewing-your-sitebrief}

तुम्ही agent ला विचारू शकता:

```
"Show me my site brief"
```

किंवा

```
"What do you know about my site?"
```

agent तुम्हाला तुमचा साठवलेला साइट तपशील प्रदर्शित करेल.

## Onboarding नंतर कस्टमायझेशन करणे {#customizing-after-onboarding}

Theme Builder onboarding पूर्ण झाल्यावर, तुम्ही खालील गोष्टी करू शकता:

### Design System Aesthetics Skill चा वापर करणे {#use-the-design-system-aesthetics-skill}

डिझाइन सुधारणांची विनंती करा:

```
"Refine the typography to be more modern"
```

किंवा

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** तुम्हाला लक्ष्यित डिझाइन अपडेट्समधून मार्गदर्शन करतो.

### theme.json मध्ये थेट संपादन करणे {#edit-themejson-directly}

प्रगत वापरकर्त्यांसाठी, रंग टोकन, टायपोग्राफी स्केल, स्पेसिंग व्हॅल्यूज, बॉर्डर आणि शॅडो परिभाषा (definitions) समायोजित करण्यासाठी `/wp-content/themes/[theme-name]/theme.json` संपादित करा.

### कस्टमाइज्ड ब्लॉक टेम्पलेट्स तयार करणे {#create-custom-block-templates}

खालील गोष्टींसाठी कस्टमाइज्ड टेम्पलेट्स तयार करण्यासाठी WordPress ब्लॉक एडिटर वापरा:

- होमपेज लेआउट्स
- ब्लॉग पोस्ट पेजेस
- उत्पादन पेजेस
- संपर्क फॉर्म्स

## तुलना: जुने विरुद्ध नवीन Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## समस्या निवारण (Troubleshooting) {#troubleshooting}

**onboarding flow पूर्ण झाला नाही**
- flow पुन्हा सुरू करा: "Start the Theme Builder onboarding"
- तपासा की तुमचे WordPress इंस्टॉलेशन अद्ययावत (up to date) आहे
- सत्यापित करा की Setup Assistant agent सक्षम (enabled) आहे

**माझा site_brief वापरला जात नाहीये**
- खात्री करा की agent कडे मेमरी ॲक्सेस आहे
- agent ला "recall my site brief" विचारण्यास सांगा
- तपासा की तुमच्या सेटिंग्जमध्ये मेमरी सक्षम (enabled) आहे

**तयार झालेली थीम माझ्या प्राधान्यांशी जुळत नाही**
- ती सुधारण्यासाठी Design System Aesthetics skill वापरा
- agent ला "regenerate the theme with [specific changes]" विचारण्यास सांगा
- अचूक नियंत्रणासाठी theme.json थेट संपादित करा

## पुढील पाऊले (Next Steps) {#next-steps}

Theme Builder onboarding पूर्ण केल्यानंतर:

1. **तुमची साइट तपासा**: नवीन थीम पाहण्यासाठी तुमच्या साइटला भेट द्या
2. **डिझाइन सुधारणा करा**: समायोजनांसाठी Design System Aesthetics skill वापरा
3. **सामग्री जोडा**: तुमच्या साइटची सामग्री तयार करण्यास सुरुवात करा
4. **क्षमता शोधा**: scaffold-block-theme आणि activate-theme सारख्या इतर agent क्षमतांबद्दल जाणून घ्या
