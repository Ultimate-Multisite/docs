---
title: 'धडा ७: आपलेसे करणे'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# धडा ७: स्वतःचे बनवणे (Making It Yours)

तुमच्या ग्राहकांना कधीही असे वाटू नये की ते "काहीतरी WordPress plugin" वापरत आहेत. त्यांना असे वाटले पाहिजे की ते FitSite वापरत आहेत—एक व्यासपीठ जे त्यांच्या उद्योगासाठी बनवले आहे. या धड्यात आम्ही ब्रँडिंग (branding), व्हाईट-लेबलिंग (white-labeling) आणि या प्लॅटफॉर्मला एका उत्पादनासारखे (product) कसे वाटेल, यावर लक्ष केंद्रित केले आहे.

## आपण कुठे थांबलो होतो

FitSite मध्ये एक कार्यरत चेकआउट फ्लो (checkout flow) आहे जो फिटनेस स्टुडिओ मालकांना प्लॅन निवडण्यापासून थेट लाइव्ह साइटपर्यंत घेऊन जातो. आता आपण संपूर्ण अनुभव एका सुसंगत, ब्रँडेड उत्पादनासारखा बनवणार आहोत.

## तुमचा प्लॅटफॉर्म डोमेन (Your Platform Domain)

तुमच्या ब्रँडचा पाया म्हणजे तुमचा डोमेन. FitSite साठी:

- **मुख्य डोमेन (Main domain)**: `fitsite.com` (तुमची मार्केटिंग साइट आणि नेटवर्क रूट)
- **ग्राहक साइट्स (Customer sites)**: `studioname.fitsite.com` (सबडोमेन)
- **कस्टम डोमेन (Custom domains)**: Growth आणि Pro प्लॅनवरील ग्राहक त्यांचा स्वतःचा डोमेन मॅप करू शकतात.

### तुमचा डोमेन सेट करणे

1. तुमचा प्लॅटफॉर्म डोमेन रजिस्टर करा
2. तो तुमच्या होस्टिंग प्रदात्याकडे (hosting provider) पॉइंट करा
3. ग्राहक सबडोमेनसाठी वाइल्डकार्ड DNS (`*.fitsite.com`) कॉन्फिगर करा
4. वाइल्डकार्ड SSL सक्रिय असल्याची खात्री करा

सविस्तर सूचनांसाठी [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) पहा.

## ॲडमिन अनुभवाचे व्हाईट-लेबलिंग (White-Labeling the Admin Experience)

जेव्हा एखादा फिटनेस स्टुडिओ मालक त्यांच्या साइटच्या डॅशबोर्डवर लॉग इन करतो, तेव्हा त्याला WordPress किंवा Ultimate Multisite चे ब्रँडिंग न दिसता, तुमचा ब्रँड दिसला पाहिजे.

### कस्टम लॉगिन पेज (Custom Login Page)

WordPress लॉगिन पेजमध्ये खालील गोष्टी दाखवण्यासाठी कस्टमायझेशन करा:

- तुमचा FitSite लोगो
- फिटनेस-योग्य बॅकग्राउंड इमेजिंग
- तुमच्या ब्रँडचे रंग

### डॅशबोर्ड ब्रँडिंग (Dashboard Branding)

खालील गोष्टी करण्यासाठी [Admin Page Creator](/addons/admin-page-creator) ॲडऑन किंवा कस्टम CSS वापरा:

- WordPress लोगोला तुमचा FitSite लोगोने बदला
- तुमच्या ब्रँडशी जुळण्यासाठी ॲडमिन कलर स्कीम कस्टमायझ करा
- फिटनेस-विशिष्ट क्विक लिंक्स आणि मदत संसाधने (help resources) असलेले कस्टम डॅशबोर्ड विजेट जोडा

### कस्टम ॲडमिन पेजेस (Custom Admin Pages)

फिटनेस स्टुडिओ मालकांसाठी सर्वात संबंधित कृती (actions) समोर आणण्यासाठी कस्टम ॲडमिन पेजेस तयार करण्याचा विचार करा:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

यामुळे मानक WordPress मेन्यूमध्ये या कृती लपवण्याऐवजी, त्या समोर आणल्यामुळे शिकण्याची प्रक्रिया (learning curve) कमी होते.

## तुमच्या संवादांचे ब्रँडिंग (Branding Your Communications)

प्रत्येक ईमेल, इनव्हॉइस आणि नोटिफिकेशनने तुमच्या ब्रँडला बळकटी दिली पाहिजे.

### सिस्टीम ईमेल (System Emails)

**Ultimate Multisite > Settings > Emails** येथे जा आणि सर्व सिस्टीम ईमेल कस्टमायझ करा:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: तुमच्या ब्रँडचे रंग आणि लोगो वापरा
- **Language**: संपूर्णपणे फिटनेस-विशिष्ट ठेवा

कस्टमायझ करण्यासाठी महत्त्वाचे ईमेल:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### इनव्हॉइस (Invoices)

खालील गोष्टींसह इनव्हॉइस टेम्पलेट्स कस्टमायझ करा:

- तुमचा FitSite लोगो आणि ब्रँडचे रंग
- तुमच्या व्यवसायाचे तपशील
- फिटनेस-विशिष्ट उत्पादनांची नावे (सामान्य प्लॅन आयडी नाहीत)

## ग्राहक-समोरची साइट (The Customer-Facing Site)

तुमच्या मुख्य डोमेन (`fitsite.com`) ला एक मार्केटिंग साइटची गरज आहे जी प्लॅटफॉर्म विकेल. हे Ultimate Multisite नेटवर्क ॲडमिनपेक्षा वेगळे आहे—हा तुमच्या व्यवसायाचा सार्वजनिक चेहरा आहे.

मुख्य पाने (Key pages):

- **Homepage**: फिटनेस व्यवसायांसाठी स्पष्ट व्हॅल्यू प्रपोझिशन (value proposition)
- **Features**: FitSite काय करते, फिटनेसच्या भाषेत
- **Pricing**: तुमच्या तीन प्लॅनची विशिष्ट वैशिष्ट्यांची तुलना
- **Examples**: प्लॅटफॉर्मवर बनवलेल्या साइट्सचे प्रदर्शन
- **Sign Up**: तुमच्या चेकआउट फॉर्मची लिंक

:::tip तुमचा मार्केटिंग साइट एक नेटवर्क साइट असू शकते
तुमची मार्केटिंग साइट तुमच्या स्वतःच्या नेटवर्कमधील एक साइट म्हणून तयार करा. यामुळे तुम्ही ते एकाच डॅशबोर्डवरून व्यवस्थापित करू शकता आणि तुमच्या स्वतःच्या प्लॅटफॉर्मची क्षमता दर्शवू शकता.
:::

## ग्राहकांसाठी कस्टम डोमेन (Custom Domain for Customers)

ज्या प्लॅनमध्ये कस्टम डोमेन समाविष्ट आहे, अशा ग्राहकांसाठी प्रक्रिया स्पष्टपणे दस्तऐवजीकरण करा:

1. ग्राहक त्यांचा डोमेन रजिस्टर करतो किंवा तो एखाद्या रजिस्ट्रारकडे ट्रान्सफर करतो.
2. ग्राहक तुमच्या प्लॅटफॉर्मकडे पॉइंट करण्यासाठी DNS अपडेट करतो (अचूक रेकॉर्ड्स द्या).
3. Ultimate Multisite डोमेन मॅपिंग आणि SSL हाताळते.

या प्रक्रियेसाठी, गैर-तांत्रिक फिटनेस स्टुडिओ मालकांसाठी लिहिलेला एक मदत लेख (help article) किंवा नॉलेज बेस एंट्री तयार करा.

## आतापर्यंतचे FitSite नेटवर्क (The FitSite Network So Far)

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## या धड्यात आम्ही काय तयार केले

- ब्रँडेड अनुभवासाठी कॉन्फिगर केलेले **प्लॅटफॉर्म डोमेन आणि DNS**
- FitSite ब्रँडिंगसह **व्हाईट-लेबल ॲडमिन**
- **कस्टमायझ केलेले कम्युनिकेशन** -- ईमेल, इनव्हॉइस आणि सूचना सर्व ब्रँडनुसार
- फिटनेस स्टुडिओ मालकांना FitSite विकणारी **मार्केटिंग साइट**
- स्वतःचा डोमेन असलेले ग्राहकांसाठी **कस्टम डोमेन दस्तऐवजीकरण**

---

**पुढील:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- आम्ही असा अनुभव डिझाइन करतो जो नवीन साइनअपला सक्रिय, आनंदी ग्राहकामध्ये रूपांतरित करतो.
