---
title: تھیم بلڊر آن بورڊنگ فلو
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 ۾ هڪ گائیڊيڊ **Theme Builder onboarding flow** شامل ڪيو آهي جيڪو توهان کي شروع ۾ set up دوران هڪ ڪسما تصميم (custom block theme) ٺاهڻ ۾ مدد ڪري ٿو. اهو پراني Site Builder mode جي جاءِ تي وڌيڪ لچڪدار، agent-assisted طريقو جو استعمال ڪري ٿو.

## Theme Builder Onboarding Flow ڇا آهي؟ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow هڪ interactive setup wizard آهي جيڪا:

- توهان کي تصميم (رنگن، typography، layout) بابت رهنمائي ڪندي
- توهان جي سائيٽ جي بصري شناخت پسندن کي محفوظ ڪري ٿي
- توهان جي ضرورتن مطابق هڪ custom block theme ٺاهي ٿي
- جڏهن اهو پورو ٿي ويندو تڏهن theme خود بخود فعال ٿي ويندي آهي

هي flow **Setup Assistant agent** پاران چلائي ويندي آهي، جيڪا وضاحت طلب سوال وڌيڪ نهچو ۽ توهان جي theme کي حصو حصو ٺاهندي آهي.

## Theme Builder Onboarding شروع ڪرڻ {#starting-the-theme-builder-onboarding}

### پهرين بار استعمال (First-Run Setup) {#first-run-setup}

جڏهن توهان پنهنجي نوي WordPress installation تي Superdav AI Agent جو پهرين بار لانچ ڪندا، ته توهان ڏسندا رهندا:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow ۾ داخل ٿيڻ لاءِ **"Build a custom theme"** چونڊيو.

### Manual Activation {#manual-activation}

توهان ڪڏهن به Theme Builder onboarding شروع ڪري سگهو ٿا ان سان گهرجي:

```
"Start the Theme Builder onboarding"
```

يا

```
"Help me create a custom theme"
```

## Onboarding جا قدم (The Onboarding Steps) {#the-onboarding-steps}

### قدم 1: Mode Selection {#step-1-mode-selection}

Setup Assistant agent توهان جي پسند بابت پڇندو آهي:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** انهن تمام استعمال ڪندڙن لاءِ سفارش ڪئي ويندي آهي ته agent توهان جي صنعت ۽ مقصدن جي بنياد تي design جو مشورو ڏيندو.

### قدم 2: Site Specification {#step-2-site-specification}

توهان پنهنجي سائيٽ بابت سوال ڪندو ٿو:

- **वेबसाइटको उद्देश्य**: ई-कमर्स, ब्लग, पोर्टफोलियो, SaaS आदि।
- **लक्ष्य दर्शक**: तपाईंका आगन्तुक को हुन्?
- **ब्राण्डका रंग**: प्राथमिक र द्वितीयक रंग (वा "मलाई थाहा छैन")
- **स्वर (Tone)**: व्यावसायिक, रचनात्मक, चञ्चल, न्यूनतम, आदि।

यो जानकारी तपाईंको **site_brief** मेमोरीमा भण्डारण गरिएको हुन्छ, जसलाई भविष्यका सत्रहरूमा एजेन्टहरूले सन्दर्भ गर्छन्।

### चरण ३: डिजाइन प्रणाली निर्णयहरू (Design System Decisions) {#step-3-design-system-decisions}

एजेन्टले तपाईंलाई डिजाइन टोकनहरूको छनोट प्रक्रियामा मार्गदर्शन गर्छ:

- **टाइपोग्राफी**: फन्ट परिवार (सेरिफ, सान्स-सेरिफ, मोनोस्पेस) र साइजको क्रम
- **रंग योजना**: प्राथमिक, द्वितीयक, उच्चारण (accent), र तटस्थ रंगहरू
- **स्पेसिंग (Spacing)**: संकुचित (compact), सामान्य (normal), वा प्रशस्त (spacious) लेआउटहरू
- **मोशन (Motion)**: एनिमेसन र ट्रान्जिशनहरू (यदि चाहनुहुन्छ भने)

### चरण ४: थीम निर्माण (Theme Generation) {#step-4-theme-generation}

सेटअप असिस्टेन्ट एजेन्टले तपाईंको कस्टम ब्लक थीमलाई निम्न कुराहरूसँग ढाँचा (scaffold) दिन्छ:

- सबै डिजाइन टोकनहरू समावेश भएको `theme.json`
- सामान्य लेआउटहरूको लागि ब्लक टेम्प्लेट (होमपेज, ब्लग, सम्पर्क)
- तपाईंको डिजाइन प्रणालीसँग मेल खाने कस्टम ब्लक शैलीहरू
- थीम मेटाडेटा र वर्डप्रेस समर्थन घोषणाहरू

### चरण ५: सक्रियता र प्रमाणीकरण (Activation and Verification) {#step-5-activation-and-verification}

थीम स्वचालित रूपमा सक्रिय हुन्छ, र तपाईंले निम्न कुराहरू देख्नुहुनेछ:

```
✓ तपाईंको कस्टम थीम अब चल्दैछ!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  नयाँ डिजाइन हेर्न आफ्नो साइटमा जानुहोस्।
```

त्यसपछि, तपाईंले थीम सही तरिकाले प्रदर्शन गरिरहेको छ कि छैन भनेर पुष्टि गर्न आफ्नो साइटमा जान सक्नुहुन्छ।

## साइट विनिर्देश र site_brief मेमोरी (Site Specification and site_brief Memory) {#site-specification-and-sitebrief-memory}

ऑनबोर्डिङको समयमा, एजेन्टले तपाईंको साइटको विवरणलाई **site_brief** मेमोरी श्रेणीमा लिन्छ। यसमा निम्न कुराहरू समावेश हुन्छन्:

- साइटको उद्देश्य र लक्ष्यहरू
- लक्षित दर्शक
- ब्राण्डका रंग र स्वर
- डिजाइन प्राथमिकताहरू
- सामग्री संरचना (Content structure)

### site_brief किन महत्त्वपूर्ण छ? {#why-sitebrief-matters}

भविष्यका सत्रहरूमा, एजेन्टहरूले तपाईंको site_brief लाई निम्न कुराहरूको लागि सन्दर्भ गर्छन्:

### आफ्नो साइटको संक्षिप्त जानकारी हेर्नुहोस् (Viewing Your site_brief) {#viewing-your-sitebrief}

तपाईं एजेन्टलाई यसो सोध्न सक्नुहुन्छ:

```
"Show me my site brief"
```

वा

```
"What do you know about my site?"
```

एजेन्टले तपाईंको भण्डार गरिएको साइट स्पेसिफिकेसन देखाउनेछ।

## सेटअप पछि कसरी परिवर्तन गर्ने (Customizing After Onboarding) {#customizing-after-onboarding}

Theme Builder को सेटअप पूरा भएपछि, तपाईं निम्न कुराहरू गर्न सक्नुहुन्छ:

### डिजाइन सिस्टम एस्थेटिक्स स्किल प्रयोग गर्नुहोस् (Use the Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

डिजाइन सुधारका लागि अनुरोध गर्नुहोस्:

```
"Refine the typography to be more modern"
```

वा

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ले तपाईंलाई लक्षित डिजाइन अपडेटहरूमा मार्गदर्शन गर्छ।

### theme.json लाई सिधै सम्पादन गर्नुहोस् (Edit theme.json Directly) {#edit-themejson-directly}

अत्याधुनिक प्रयोगकर्ताहरूको लागि, रंग टोकनहरू, टाइपोग्राफी स्केलहरू, स्पेसिसङ मानहरू, र बर्डर तथा शैडो परिभाषाहरू मिलाउन `/wp-content/themes/[theme-name]/theme.json` मा सम्पादन गर्नुहोस्।

### कस्टम ब्लक टेम्प्लेटहरू बनाउनुहोस् (Create Custom Block Templates) {#create-custom-block-templates}

WordPress block editor प्रयोग गरेर निम्नका लागि कस्टम टेम्प्लेटहरू बनाउनुहोस्:

- होमपेज लेआउटहरू
- ब्लग पोस्ट पेजहरू
- उत्पादन पेजहरू
- सम्पर्क फारमहरू

## तुलना: पुरानो बनाम नयाँ सेटअप (Comparison: Old vs. New Onboarding) {#comparison-old-vs-new-onboarding}

| विशेषता | साइट बिल्डर (पुरानो) | थीम बिल्डर (नयाँ) |
|---------|----------------------|-------------------|
| सेटअप विधि | विजार्ड-आधारित फारम | एजेन्ट-निर्देशित कुराकानी |
| थीम निर्माण | सीमित टेम्प्लेटहरू | कस्टम स्क्याफोल्डिङ |
| डिजाइन टोकनहरू | म्यानुअल प्रविष्टि | निर्देशित निर्णयहरू |
| लचिलोपन | निश्चित विकल्पहरू | अनुकूलन गर्न सकिने |
| भविष्यका अपडेटहरू | सन्दर्भ गरिएनन् | site_brief मा भण्डार गरिएको |

## समस्या समाधान (Troubleshooting) {#troubleshooting}

**सेटअप प्रवाह पूरा भएन (The onboarding flow didn't complete)**
- प्रवाह पुनः सुरु गर्नुहोस्: "Start the Theme Builder onboarding"
- तपाईंको WordPress इन्स्टलेसन अद्यावधिक छ कि छैन जाँच गर्नुहोस्।
- सेटअप असिस्टेन्ट एजेन्ट सक्रिय छ वा छैन पुष्टि गर्नुहोस्।

**मेरो site_brief استعمال नै भइरहेको छ**
- पुष्टि गर्नुहोस् कि एजेन्टलाई मेमोरीमा पहुँच छ।
- एजेन्टलाई "मेरो साइट ब्रीफ सम्झनुहोस्" (recall my site brief) भनेर सोध्नुहोस्।
- तपाईंको सेटिङहरूमा मेमोरी सक्रिय छ वा छैन, त्यो जाँच गर्नुहोस्।

**उत्पन्न भएको थीम मेरो प्राथमिकताहरूसँग मेल खाँदैन**
- त्यसलाई परिष्कृत गर्न Design System Aesthetics skill प्रयोग गर्नुहोस्।
- एजेन्टलाई "[विशिष्ट परिवर्तनहरू] सहित थीम पुनः उत्पन्न गर्नुहोस्" (regenerate the theme with [specific changes]) भनेर सोध्नुहोस्।
- सटीक नियन्त्रणका लागि theme.json लाई सिधै सम्पादन गर्नुहोस्।

## अर्को कदमहरू {#next-steps}

Theme Builder को सेटअप पूरा गरेपछि:

1. **तपाईंको साइट प्रमाणित गर्नुहोस्**: नयाँ थीम हेर्न आफ्नो साइटमा जानुहोस्।
2. **डिजाign परिष्कृत गर्नुहोस्**: समायोजन गर्न Design System Aesthetics skill प्रयोग गर्नुहोस्।
3. **सामग्री थप्नुहोस्**: आफ्नो साइटको सामग्री बनाउन सुरु गर्नुहोस्।
4. **क्षमताहरू अन्वेषण गर्नुहोस्**: scaffold-block-theme र activate-theme जस्ता अन्य एजेन्ट क्षमताहरूको बारेमा सिक्नुहोस्।
