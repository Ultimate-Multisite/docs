---
title: 'धडा ६: नोंदणी अनुभव'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: The Signup Experience {#lesson-6-the-signup-experience}

चेकआउट फ्लो (checkout flow) हे ठिकाण आहे जिथे केवळ रुची (interest) महसुलात (revenue) बदलते. जर साइनअप प्रक्रिया गोंधळात टाकणारी किंवा सामान्य असेल, तर ग्राहक दूर जातात. जी प्रक्रिया विशिष्ट क्षेत्रासाठी (niche-specific) बनवलेली असेल आणि जी त्यांच्या भाषेत बोलावी व सहज वाटली पाहिजे, ती ग्राहक रूपांतरित (convert) करते.

## Where We Left Off {#where-we-left-off}

FitSite मध्ये टेम्पलेट्स आणि प्लॅन्स कॉन्फिगर केलेले आहेत. आता आपण नोंदणी (registration) आणि चेकआउट अनुभव तयार करूया, ज्यामुळे फिटनेस स्टुडिओचे मालक पैसे देणारे ग्राहक बनतील.

## Understanding the Registration Flow {#understanding-the-registration-flow}

Ultimate Multisite चे चेकआउट फॉर्म हे पूर्णपणे कस्टमाइजेबल (customizable) अनेक-टप्प्यांची फॉर्म आहेत. FitSite साठी, आम्हाला असा फ्लो हवा आहे जो:

1. फिटनेस व्यवसायासाठी बनवलेला वाटेल
2. फक्त आवश्यक माहिती गोळा करेल
3. ग्राहकाला शक्य तितक्या लवकर कार्यरत (working) साइटवर घेऊन जाईल

संपूर्ण तांत्रिक माहितीसाठी [The Registration Flow](/user-guide/configuration/the-registration-flow) पहा.

## Designing the FitSite Checkout {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** वर जा आणि एक नवीन फॉर्म तयार करा.

### Step 1: Plan Selection {#step-1-plan-selection}

फिटनेस स्टुडिओच्या मालकाला सर्वात आधी जे दिसावे, ते म्हणजे प्लॅन्स, जे अशा भाषेत सादर केले जावेत जी त्यांना समजेल.

- एक **Pricing Table** फील्ड जोडा
- ते सर्व तीन FitSite प्लॅन्स दाखवण्यासाठी कॉन्फिगर करा
- तुम्ही Lesson 5 मध्ये जे प्लॅनचे वर्णन लिहिले होते, ते येथे दिसतील — खात्री करा की ते तांत्रिक वैशिष्ट्यांबद्दल बोलत नाहीत, तर फिटनेस व्यवसायाच्या गरजांबद्दल बोलतात.

:::tip Niche Language Matters
"1 GB storage" म्हणजे जिम मालकाला काहीच कळणार नाही. "तुमच्या व्यावसायिक स्टुडिओ वेबसाइटसाठी आवश्यक सर्व काही" याचा अर्थ सर्व काही आहे. प्लॅनचे वर्णन तुमच्या ग्राहकांच्या भाषेत लिहा.
:::

### Step 2: Template Selection {#step-2-template-selection}

प्लॅन निवडल्यानंतर, ग्राहक त्यांचा सुरुवातीचा टेम्पलेट निवडतो.

- एक **Template Selection** फील्ड जोडा
- उपलब्ध टेम्पलेट्स, त्यांनी निवडलेल्या प्लॅननुसार फिल्टर होतील (Lesson 5 मध्ये कॉन्फिगर केलेले)
- प्रत्येक टेम्पलेटमध्ये फिटनेस-विशिष्ट डिझाइन दाखवणारे एक प्रीव्ह्यू इमेज असावे.

### Step 3: Account Creation {#step-3-account-creation}

हे अगदी कमी ठेवा. फक्त खालील गोष्टी गोळा करा:

- ईमेल ॲड्रेस
- पासवर्ड
- स्टुडिओ/व्यवसायाचे नाव (हे त्यांचे साइट नाव बनते)

साइनअप करताना तुम्हाला आवश्यक नसलेली कोणतीही माहिती विचारू नका. प्रत्येक अतिरिक्त फील्डमुळे कन्वर्जन कमी होते.

### Step 4: Site Setup {#step-4-site-setup}

- **Site title**: Step 3 मध्ये एंटर केलेल्या स्टुडिओच्या नावावरून आपोआप भरा (Pre-fill)
- **Site URL**: स्टुडिओच्या नावावरून आपोआप तयार करा (उदा. `ironworks.fitsite.com`)

### Step 5: Payment {#step-5-payment}

- **Payment** फील्ड जोडा
- तुमचे पेमेंट गेटवे कॉन्फिगर करा ([Stripe](/user-guide/payment-gateways/stripe) सबस्क्रिप्शन बिलिंगसाठी शिफारसित आहे)
- जर तुम्ही Lesson 5 मध्ये ऑर्डर बंप (order bumps) तयार केले असतील, तर पेमेंट स्टेपच्या आधी एक **Order Bump** फील्ड जोडा

### Step 6: Confirmation {#step-6-confirmation}

- फिटनेस-विशिष्ट भाषेत पुष्टीकरण संदेश (confirmation message) कस्टमाइझ करा
- उदाहरण: "तुमची फिटनेस स्टुडिओ वेबसाइट तयार केली जात आहे. काही सेकंदात तुम्हाला तुमच्या नवीन साइटवर रीडायरेक्ट केले जाईल."

## Adding a Period Selection Toggle {#adding-a-period-selection-toggle}

जर तुम्ही तुमच्या प्लॅन्समध्ये किंमत बदल (price variations) सेट केले असतील (मासिक वि. वार्षिक), तर चेकआउट फॉर्ममध्ये एक **Period Selection** फील्ड जोडा जेणेकरून ग्राहक बिलिंग कालावधीमध्ये टॉगल करू शकतील. सूचनांसाठी [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) पहा.

## Configuring Payment {#configuring-payment}

जर तुम्ही अजून पेमेंट गेटवे सेट केले नसेल:

1. **Ultimate Multisite > Settings > Payment Gateways** वर जा
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) किंवा तुमचे आवडते गेटवे फॉलो करा
3. टेस्ट पेमेंट वापरून संपूर्ण चेकआउट फ्लो तपासा

पैसे तुमच्या खात्यात कसे येतात याबद्दल तपशील हवा असल्यास [Getting Paid](/user-guide/payment-gateways/getting-paid) पहा.

## Testing the Flow {#testing-the-flow}

पुढे जाण्यापूर्वी, एक संपूर्ण टेस्ट साइनअप पूर्ण करा:

1. इनकॉग्निटो/प्रायव्हेट ब्राउझर विंडोमध्ये चेकआउट फॉर्म उघडा
2. एक प्लॅन निवडा
3. एक टेम्पलेट निवडा
4. खाते तयार करा
5. पेमेंट पूर्ण करा (टेस्ट मोड वापरा)
6. साइट योग्य टेम्पलेटसह तयार झाली आहे की नाही हे तपासा

हे तपासा की:

- [ ] प्लॅनचे वर्णन स्पष्ट आणि विशिष्ट क्षेत्रासाठी आहे
- [ ] टेम्पलेट प्रीव्ह्यू फिटनेस-योग्य डिझाइन दाखवतात
- [ ] साइट URL स्टुडिओच्या नावावरून योग्यरित्या तयार होते
- [ ] पेमेंट यशस्वीरित्या होते
- [ ] ग्राहक निवडलेल्या टेम्पलेटसह कार्यरत साइटवर पोहोचतो
- [ ] पुष्टीकरण ईमेलमध्ये फिटनेस-विशिष्ट भाषा वापरली जाते

## The FitSite Network So Far {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## What We Built This Lesson {#what-we-built-this-lesson}

- फिटनेस स्टुडिओच्या मालकांसाठी तयार केलेला **अनेक-टप्प्यांचा चेकआउट फॉर्म**
- साइनअप फ्लोमध्ये संपूर्ण **विशिष्ट क्षेत्रासाठी भाषा**
- **किमान अडथळा** -- फक्त आवश्यक फील्ड, कार्यरत साइटपर्यंतचा जलद मार्ग
- टेस्ट पडताळणीसह **पेमेंट इंटिग्रेशन**
- प्लॅन निवडण्यापासून कार्यरत साइटपर्यंतचा **चाचणी केलेला एंड-टू-एंड फ्लो**

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) -- आपण प्लॅटफॉर्मला व्हाईट-लेबल (white-label) करू आणि FitSite ला एक ब्रँड म्हणून स्थापित करू.
