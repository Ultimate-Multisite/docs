---
title: सेटअप आणि प्रदाता कॉन्फिगरेशन
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: सेटअप आणि प्रदाता कॉन्फिगरेशन {#domain-seller-setup-and-provider-configuration}

Domain Seller addon एका मार्गदर्शित सेटअप विझार्डसह येतो, जो तुम्हाला प्रत्येक आवश्यक टप्प्यातून नेतो. हे पृष्ठ विझार्ड प्रवाह आणि नंतर प्रदाते कसे कॉन्फिगर किंवा पुन्हा कॉन्फिगर करायचे हे समाविष्ट करते.

## आवश्यकता {#requirements}

- **Multisite Ultimate** v2.4.12 किंवा उच्च, नेटवर्क-सक्रिय
- **PHP** 7.4+
- किमान एका समर्थित रजिस्ट्रारसाठी API क्रेडेन्शियल्स

## पहिल्यांदा चालणारा सेटअप विझार्ड {#first-run-setup-wizard}

तुम्ही plugin नेटवर्क-सक्रिय करता तेव्हा सेटअप विझार्ड पहिल्यांदा आपोआप सुरू होतो. तो **Network Admin › Ultimate Multisite › Domain Seller Setup** येथून कोणत्याही वेळी उपलब्ध आहे.

### टप्पा 1 — प्रदाता निवडा {#step-1--choose-a-provider}

तुम्हाला जोडायचा असलेला रजिस्ट्रार निवडा. समर्थित पर्याय:

| प्रदाता | DNS व्यवस्थापन | WHOIS गोपनीयता |
|---|---|---|
| OpenSRS | होय | होय |
| Namecheap | नाही | होय (WhoisGuard, मोफत) |
| HostAfrica | होय | होय (ID संरक्षण) |
| Openprovider | होय | होय |
| Hostinger | होस्ट केलेल्या डोमेन्ससाठी कोर Hostinger डोमेन मॅपिंगद्वारे | होय |
| GoDaddy | नाही | नाही |
| ResellerClub | होय | नाही |
| NameSilo | नाही | नाही |
| Enom | होय | नाही |

### टप्पा 2 — क्रेडेन्शियल्स प्रविष्ट करा {#step-2--enter-credentials}

प्रत्येक प्रदात्याकडे वेगवेगळी क्रेडेन्शियल फील्ड्स असतात:

**OpenSRS** — Username आणि private key (OpenSRS Reseller Control Panel मधून)

**Namecheap** — Username आणि API key (Account › Tools › API Access मधून)

**HostAfrica** — HostAfrica reseller मॉड्यूलमधून Domains Reseller API endpoint आणि क्रेडेन्शियल्स. स्वतंत्र sandbox endpoint सध्या दस्तऐवजीकृत नाही; live नोंदणी चालवण्यापूर्वी सुरक्षित read-only तपासण्यांनी चाचणी करा.

**Openprovider** — API access सक्षम असलेले username आणि password. ऐच्छिक sandbox mode Openprovider sandbox API वापरतो, आणि नोंदणीसाठी ऐच्छिक default customer handle पुन्हा वापरता येतो.

**Hostinger** — कोर Hostinger इंटिग्रेशनमधील शेअर्ड Hostinger hPanel API token. तोच token कोर डोमेन मॅपिंग आणि Domain Seller नोंदणी क्रिया चालवतो.

**GoDaddy** — API key आणि secret (developer.godaddy.com मधून)

**ResellerClub** — Reseller ID आणि API key (ResellerClub control panel मधून)

**NameSilo** — API key (namesilo.com › Account › API Manager मधून)

**Enom** — Account ID आणि API token

live होण्यापूर्वी प्रदात्याच्या चाचणी वातावरणाविरुद्ध चाचणी करण्यासाठी उपलब्ध असल्यास **Sandbox mode** निवडा.

### टप्पा 3 — कनेक्शनची चाचणी करा {#step-3--test-the-connection}

**Test Connection** क्लिक करा. विझार्ड क्रेडेन्शियल्स आणि कनेक्टिव्हिटी पडताळण्यासाठी हलका API कॉल पाठवतो. पुढे जाण्यापूर्वी कोणत्याही क्रेडेन्शियल समस्यांचे निराकरण करा.

### टप्पा 4 — TLDs आयात करा {#step-4--import-tlds}

जोडलेल्या प्रदात्याकडून सर्व उपलब्ध TLDs आणि wholesale pricing खेचण्यासाठी **Import TLDs** क्लिक करा. यामुळे डोमेन उत्पादनांद्वारे वापरली जाणारी TLD यादी भरली जाते. मोठे TLD कॅटलॉग असलेल्या प्रदात्यांसाठी आयात 30–60 सेकंद घेऊ शकते.

TLDs दररोज एकदा scheduled cron job द्वारे आपोआप पुन्हा समक्रमित केले जातात.

### टप्पा 5 — डोमेन उत्पादन तयार करा {#step-5--create-a-domain-product}

विझार्ड 10% markup सह default catch-all domain product तयार करतो. तुम्ही हे उत्पादन लगेच संपादित करू शकता किंवा वगळून **Ultimate Multisite › Products** अंतर्गत उत्पादने हाताने तयार करू शकता.

संपूर्ण उत्पादन कॉन्फिगरेशन मार्गदर्शकासाठी [Domain Products and Pricing](./domain-products) पहा.

---

## प्रदाता पुन्हा कॉन्फिगर करणे {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller** येथे जा (किंवा plugin यादीतील **Settings** क्लिक करा).

सेटिंग्ज पृष्ठात हे असते:

- **डोमेन विक्री सक्षम करा** — संपूर्ण सुविधा चालू/बंद करा
- **Default provider** — डोमेन शोध आणि नवीन उत्पादनांसाठी वापरला जाणारा प्रदाता
- **प्रति शोध कमाल TLDs** — customer शोध घेताना किती TLDs तपासायचे; जास्त मूल्ये अधिक पर्याय दाखवतात पण धीमे असतात
- **Availability cache duration** — उपलब्धता आणि pricing परिणाम किती काळ cache करायचे; कमी मूल्ये अधिक अचूक असतात पण API कॉल वाढवतात
- **डोमेन उत्पादने व्यवस्थापित करा** — Products यादीकडे द्रुत लिंक
- **प्रदाते कॉन्फिगर करा** — प्रदाते जोडण्यासाठी किंवा पुन्हा कॉन्फिगर करण्यासाठी Integration Wizard उघडतो

### दुसरा प्रदाता जोडणे {#adding-a-second-provider}

**प्रदाते कॉन्फिगर करा** क्लिक करा आणि नवीन रजिस्ट्रारसाठी विझार्ड पुन्हा चालवा. तुमच्याकडे एकाच वेळी अनेक प्रदाते कॉन्फिगर केलेले असू शकतात. प्रत्येक डोमेन उत्पादन विशिष्ट प्रदात्याला नियुक्त करा किंवा default वर सोडा.

### TLDs हाताने समक्रमित करणे {#syncing-tlds-manually}

सेटिंग्ज पृष्ठात, नवीनतम pricing खेचण्यासाठी कोणत्याही कॉन्फिगर केलेल्या प्रदात्याजवळ **Sync TLDs** क्लिक करा. प्रदाता wholesale pricing अपडेट करतो किंवा नवीन TLDs जोडतो तेव्हा हे उपयुक्त असते.

---

## लॉग्स {#logs}

प्रत्येक प्रदाता स्वतःच्या log channel मध्ये लिहितो. लॉग्स **Network Admin › Ultimate Multisite › Logs** अंतर्गत पाहता येतात:

| Log channel | मजकूर |
|---|---|
| `domain-seller-registration` | सर्व नोंदणी प्रयत्न (यशस्वी आणि अयशस्वी) |
| `domain-seller-renewal` | नूतनीकरण job परिणाम |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-hostafrica` | Raw HostAfrica API activity |
| `domain-seller-openprovider` | Raw Openprovider API activity |
| `domain-seller-hostinger` | Raw Hostinger API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |

---

## प्रदाता क्षमता टिपा {#provider-capability-notes}

प्रत्येक रजिस्ट्रार API समान क्रिया उपलब्ध करून देत नाही. addon शांतपणे अयशस्वी होण्याऐवजी असमर्थित क्रिया स्पष्ट admin-facing त्रुटींसह दाखवतो.

- **HostAfrica** सर्वात व्यापक थेट पुनर्विक्रेता कार्यप्रवाहाला समर्थन देते, ज्यामध्ये lookup, TLD/किंमत समक्रमण, नोंदणी, नूतनीकरण, हस्तांतरण, nameserver अद्यतने, DNS रेकॉर्ड, EPP कोड, registrar lock आणि ID संरक्षण यांचा समावेश आहे.
- **Openprovider** पुनर्विक्रेता-किंमतीचे TLD समक्रमण, नोंदणी, नूतनीकरण, हस्तांतरण, nameserver अद्यतने, DNS झोन, EPP कोड, registrar lock आणि WHOIS गोपनीयता यांना समर्थन देते. हे अल्पकाळ टिकणाऱ्या bearer token ने प्रमाणीकरण करते, जो addon स्वयंचलितपणे refresh करतो.
- **Hostinger** शेअर केलेल्या hPanel API token द्वारे उपलब्धता शोध, नोंदणी, portfolio lookup, nameserver अद्यतने, registrar lock आणि WHOIS गोपनीयता यांना समर्थन देते. Hostinger चे सार्वजनिक Domains API पुनर्विक्रेता/घाऊक किंमत, inbound transfer, स्पष्ट नूतनीकरण किंवा EPP-code retrieval उघड करत नाही; नूतनीकरणे केवळ auto-renew असतात.
