---
title: 'पाठ 5: अपने प्लान डिज़ाइन करना'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# पाठ 5: अपनी योजनाएं डिज़ाइन करना

आपके प्लान टियर (plan tiers) सिर्फ़ कीमत के स्तर नहीं हैं—वे इस बात का प्रतिबिंब हैं कि आपके विशिष्ट ग्राहक वास्तव में कैसे काम करते हैं। इस पाठ में, आप ऐसे प्रोडक्ट टियर डिज़ाइन करेंगे जो विभिन्न चरणों में फ़िटनेस व्यवसायों की वास्तविक ज़रूरतों से मेल खाते हों।

## हमने कहाँ छोड़ा था

FitSite के लिए तीन टेम्पलेट तैयार हैं (Studio Essential, Gym Pro, Fitness Chain)। अब हम उन प्लान्स का निर्माण करेंगे जो यह तय करेंगे कि ग्राहकों को क्या एक्सेस मिलेगा और उन्हें कितना भुगतान करना होगा।

## ग्राहक सेगमेंट के आधार पर सोचना

ज़्यादातर लोग जो गलती करते हैं, वह है प्लान्स को तकनीकी सुविधाओं (स्टोरेज, बैंडविड्थ, पेजों की संख्या) के आसपास डिज़ाइन करना। आपके विशिष्ट ग्राहक इन शब्दों में नहीं सोचते। एक जिम मालिक इस बारे में सोचता है कि उसे अपना व्यवसाय चलाने के लिए क्या चाहिए।

फ़िटनेस स्टूडियो के लिए, तीन प्राकृतिक सेगमेंट मौजूद हैं:

| सेगमेंट | वे कौन हैं | उन्हें क्या चाहिए |
|---------|-------------|----------------|
| **सोलो ट्रेनर / छोटे स्टूडियो** | 1-3 स्टाफ, एक स्थान, शुरुआत कर रहे हैं | एक पेशेवर साइट, क्लास की जानकारी, संपर्क फ़ॉर्म |
| **स्थापित जिम** | 5-20 स्टाफ, एक स्थान, बढ़ रहे हैं | ऊपर सब कुछ प्लस बुकिंग, ब्लॉग, गैलरी, कस्टम डोमेन |
| **फ़िटनेस चेन** | कई स्थान, स्थापित ब्रांड | ऊपर सब कुछ प्लस मल्टी-साइट, लोकेशन पेज, स्टाफ डायरेक्टरी |

आपके प्लान्स को इन सेगमेंट से मैप होना चाहिए, न कि मनमाने फीचर बंडल्स से।

## FitSite प्लान बनाना

हर प्लान के लिए **Ultimate Multisite > Products > Add Product** पर जाएँ।

### प्लान 1: FitSite Starter -- $49/month

**लक्ष्य**: सोलो ट्रेनर और छोटे स्टूडियो

**Description tab**:
- Name: FitSite Starter
- Description: "हर उस पर्सनल ट्रेनर या छोटे स्टूडियो के लिए जो ऑनलाइन पेशेवर दिखना चाहता है।"

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### प्लान 2: FitSite Growth -- $99/month

**लक्ष्य**: स्थापित एकल-स्थान वाले जिम

**Description tab**:
- Name: FitSite Growth
- Description: "स्थापित जिम के लिए जो अपनी ऑनलाइन उपस्थिति बढ़ाना और नए सदस्यों को आकर्षित करना चाहते हैं।"

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter में सब कुछ, प्लस:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### प्लान 3: FitSite Pro -- $199/month

**लक्ष्य**: मल्टी-लोकेशन फ़िटनेस चेन

**Description tab**:
- Name: FitSite Pro
- Description: "कई स्थानों वाली फ़िटनेस ब्रांड्स के लिए संपूर्ण प्लेटफ़ॉर्म।"

**Site Templates tab**:
- Available templates: तीनों टेम्पलेट

**Limitations**:
- Sites: 5 (प्रत्येक स्थान के लिए एक)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth में सब कुछ, प्लस:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## प्लान ग्रुप सेट करना

प्लान ग्रुप यह सुनिश्चित करता है कि ग्राहक केवल FitSite प्लान परिवार के भीतर ही अपग्रेड या डाउनग्रेड कर सकें। प्रत्येक प्लान के **Up & Downgrades** टैब पर:

1. सभी तीन प्लान के लिए **Plan Group** को "FitSite Plans" पर सेट करें
2. **Product Order** को 1 (Starter), 2 (Growth), 3 (Pro) पर सेट करें

इससे एक स्पष्ट अपग्रेड पाथ बनता है: Starter → Growth → Pro।

## ऑर्डर बम्प्स जोड़ना

ऑर्डर बम्प्स चेकआउट के दौरान दिए जाने वाले ऐड-ऑन प्रोडक्ट्स होते हैं। FitSite के लिए, आप विचार कर सकते हैं:

- **Extra Storage Pack** ($19/month) -- अतिरिक्त 5 GB डिस्क स्पेस
- **Priority Support** ($29/month) -- तेज़ प्रतिक्रिया समय
- **Additional Site** ($39/month) -- उन ग्राहकों के लिए जिन्हें उनके प्लान द्वारा अनुमत से अधिक साइट्स की आवश्यकता है

इन्हें Ultimate Multisite में **Package** प्रकार के प्रोडक्ट्स के रूप में बनाएँ और उन्हें संबंधित प्लान्स से जोड़ें।

## यह संरचना क्यों काम करती है

- **Starter** प्रवेश की बाधाओं को हटाता है -- कम कीमत, सरल पेशकश, ट्रेनर को जल्दी ऑनलाइन लाता है
- **Growth** वे सुविधाएँ जोड़ता है जो जिम वास्तव में मांगते हैं -- बुकिंग, गैलरी, कस्टम डोमेन
- **Pro** उच्च-मूल्य वाले सेगमेंट को सेवा देता है जिसे मल्टी-लोकेशन सपोर्ट की आवश्यकता होती है
- **Order bumps** ग्राहकों को मुख्य प्लान्स को जटिल बनाए बिना कस्टमाइज़ करने देते हैं
- **स्पष्ट अपग्रेड पाथ** का मतलब है कि ग्राहक आपके साथ बढ़ते हैं, न कि छोड़कर चले जाते हैं

## अब तक का FitSite Network

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## इस पाठ में हमने क्या बनाया

- वास्तविक फ़िटनेस व्यवसाय सेगमेंट से मैप किए गए **तीन प्लान टियर**
- Ultimate Multisite के प्लगइन और टेम्पलेट नियंत्रण का उपयोग करके **फीचर गेटिंग**
- एक स्पष्ट अपग्रेड पाथ के साथ **एक प्लान ग्रुप**
- अतिरिक्त राजस्व के लिए **ऑर्डर बम्प प्रोडक्ट्स**
- ग्राहक मूल्य पर आधारित **एक मूल्य निर्धारण संरचना**, न कि तकनीकी विनिर्देशों पर

---

**अगला:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- हम एक चेकआउट फ़्लो बनाते हैं जो फ़िटनेस स्टूडियो मालिकों को भुगतान करने वाले ग्राहकों में बदल देता है।
