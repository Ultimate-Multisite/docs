---
title: 'धडा ५: तुमच्या योजनांची आखणी करणे'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# धडा ५: तुमच्या योजना डिझाइन करणे

तुमच्या प्लॅन टायर्स (plan tiers) केवळ किंमत पातळी नसतात—ते तुमच्या विशिष्ट (niche) ग्राहकांच्या प्रत्यक्ष कार्यपद्धतीचे प्रतिबिंब असतात. या धड्यात, तुम्ही फिटनेस व्यवसायाच्या वेगवेगळ्या टप्प्यांवर असलेल्या वास्तविक गरजांशी जुळणारे प्रॉडक्ट टायर्स डिझाइन कराल.

## आपण कुठे थांबलो होतो

FitSite मध्ये तीन टेम्पलेट्स तयार आहेत (Studio Essential, Gym Pro, Fitness Chain). आता आपण अशा योजना तयार करू ज्या ठरवतील की ग्राहकांना कशाचा ॲक्सेस मिळेल आणि त्यांना किती पैसे द्यावे लागतील.

## ग्राहक विभागांनुसार विचार करणे (Thinking in Customer Segments)

बहुतेक लोक जी चूक करतात ती म्हणजे योजना तांत्रिक वैशिष्ट्यांवर (storage, bandwidth, number of pages) आधारित डिझाइन करणे. तुमचे विशिष्ट ग्राहक अशा शब्दांमध्ये विचार करत नाहीत. एका जिम मालकाला त्याच्या व्यवसायाला चालवण्यासाठी कशाची गरज आहे, याचा विचार करतो.

फिटनेस स्टुडिओसाठी, तीन नैसर्गिक विभाग (segments) अस्तित्वात आहेत:

| Segment | ते कोण आहेत | त्यांना कशाची गरज आहे |
|---------|-------------|----------------|
| **Solo trainers / small studios** | १-३ कर्मचारी, एकच ठिकाण, सुरुवात करत आहेत | एक व्यावसायिक साइट, क्लासची माहिती, संपर्क फॉर्म |
| **Established gyms** | ५-२० कर्मचारी, एकच ठिकाण, वाढणारे | वरील सर्व गोष्टी + बुकिंग, ब्लॉग, गॅलरी, कस्टम डोमेन |
| **Fitness chains** | अनेक ठिकाणे, स्थापित ब्रँड | वरील सर्व गोष्टी + मल्टी-साइट, ठिकाणांचे पेज, कर्मचारी निर्देशिका (staff directory) |

तुमच्या योजना या विभागांशी जुळल्या पाहिजेत, केवळ मनमानी वैशिष्ट्यांच्या गुच्छांशी (arbitrary feature bundles) नाही.

## FitSite योजना तयार करणे

प्रत्येक योजनेसाठी **Ultimate Multisite > Products > Add Product** येथे जा.

### Plan 1: FitSite Starter -- $49/month

**लक्ष्य**: सोलो ट्रेनर्स आणि लहान स्टुडिओ

**Description tab**:
- Name: FitSite Starter
- Description: "प्रत्येक पर्सनल ट्रेनर किंवा लहान स्टुडिओला ऑनलाइन व्यावसायिक दिसण्यासाठी आवश्यक असलेली सर्वकाही."

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

### Plan 2: FitSite Growth -- $99/month

**लक्ष्य**: स्थापित एक-ठिकाणचे जिम

**Description tab**:
- Name: FitSite Growth
- Description: "ज्या स्थापित जिम आपली ऑनलाइन उपस्थिती वाढवण्यासाठी आणि नवीन सदस्य आकर्षित करण्यासाठी तयार आहेत त्यांच्यासाठी."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter मधील सर्व गोष्टी, याव्यतिरिक्त:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month

**लक्ष्य**: अनेक ठिकाणांचे फिटनेस चेन

**Description tab**:
- Name: FitSite Pro
- Description: "अनेक ठिकाणांसह फिटनेस ब्रँड्ससाठी संपूर्ण प्लॅटफॉर्म."

**Site Templates tab**:
- Available templates: सर्व तीन टेम्पलेट्स

**Limitations**:
- Sites: 5 (प्रत्येक ठिकाणासाठी एक)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth मधील सर्व गोष्टी, याव्यतिरिक्त:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## प्लॅन ग्रुप सेट करणे (Setting Up the Plan Group)

ही प्लॅन ग्रुप खात्री करते की ग्राहक फक्त FitSite प्लॅन कुटुंबातच अपग्रेड किंवा डाउनग्रेड करू शकतील. प्रत्येक योजनेच्या **Up & Downgrades** टॅबवर:

१. सर्व तीन योजनांसाठी **Plan Group** "FitSite Plans" सेट करा.
२. **Product Order** १ (Starter), २ (Growth), ३ (Pro) सेट करा.

यामुळे एक स्पष्ट अपग्रेड मार्ग तयार होतो: Starter → Growth → Pro.

## ऑर्डर बम्प्स जोडणे (Adding Order Bumps)

Order bumps म्हणजे चेकआउट दरम्यान देऊ केलेले अतिरिक्त (add-on) प्रॉडक्ट्स. FitSite साठी, खालील गोष्टींचा विचार करा:

- **Extra Storage Pack** ($19/month) -- अतिरिक्त ५ GB डिस्क स्पेस
- **Priority Support** ($29/month) -- जलद प्रतिसाद वेळ
- **Additional Site** ($39/month) -- ज्या ग्राहकांना त्यांच्या योजनेने परवानगी असलेल्यापेक्षा जास्त साइट्स लागतात त्यांच्यासाठी

यांना Ultimate Multisite मध्ये **Package** प्रकारच्या प्रॉडक्ट्स म्हणून तयार करा आणि त्यांना संबंधित योजनांशी जोडा.

## ही रचना का कार्य करते (Why This Structure Works)

- **Starter** प्रवेशातील अडथळे दूर करतो -- कमी किंमत, साधे ऑफरिंग, ट्रेनर्सना लवकर ऑनलाइन आणते.
- **Growth** जिमला खरोखर कशाची गरज आहे, ती वैशिष्ट्ये जोडते -- बुकिंग, गॅलरी, कस्टम डोमेन.
- **Pro** उच्च-मूल्य असलेल्या विभागाला सेवा देते ज्यांना मल्टी-लोकेशन सपोर्टची गरज आहे.
- **Order bumps** ग्राहकांना मुख्य योजना गुंतागुंतीशिवाय कस्टमाइझ करू देतात.
- **स्पष्ट अपग्रेड मार्ग** म्हणजे ग्राहक तुमच्यासोबत वाढतात, निघून जात नाहीत.

## FitSite नेटवर्क आतापर्यंत (The FitSite Network So Far)

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

## या धड्यात आपण काय तयार केले

- वास्तविक फिटनेस व्यवसायाच्या विभागांशी जोडलेले **तीन प्लॅन टायर्स**
- Ultimate Multisite च्या प्लगइन आणि टेम्पलेट नियंत्रणाद्वारे **फीचर गेटिंग**
- स्पष्ट अपग्रेड मार्गासह **एक प्लॅन ग्रुप**
- अतिरिक्त उत्पन्नासाठी **ऑर्डर बम्प प्रॉडक्ट्स**
- ग्राहक मूल्यावर आधारित **किंमत रचना**, तांत्रिक तपशीलांवर नाही

---

**पुढील:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- आपण एक चेकआउट फ्लो तयार करू जो फिटनेस स्टुडिओ मालकांना पैसे देणाऱ्या ग्राहकांमध्ये रूपांतरित करेल.
