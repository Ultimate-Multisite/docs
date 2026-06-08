---
title: सेटअप आणि प्रदाता कॉन्फिगरेशन
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: सेटअप आणि प्रदाता कॉन्फिगरेशन

Domain Seller addon सोबत एक मार्गदर्शित सेटअप विझार्ड (guided setup wizard) येतो, जो तुम्हाला प्रत्येक आवश्यक टप्प्यावरून घेऊन जातो. हा पान विझार्डचा प्रवाह (wizard flow) आणि नंतर प्रदाता (providers) कसे कॉन्फिगर किंवा री-कॉन्फिगर करायचे, याबद्दल माहिती देतो.

## आवश्यकता (Requirements)

- **Multisite Ultimate** v2.4.12 किंवा त्याहून अधिक, नेटवर्क-ॲक्टिव्हेट केलेले
- **PHP** 7.4+
- किमान एका समर्थित रजिस्ट्रारसाठी API क्रेडेन्शियल्स (API credentials)

## पहिल्यांदा सेटअप विझार्ड (First-run setup wizard)

हा सेटअप विझार्ड पहिल्यांदा तुम्ही प्लगइन नेटवर्क-ॲक्टिव्हेट केल्यावर आपोआप सुरू होतो. तो कधीही **Network Admin › Ultimate Multisite › Domain Seller Setup** येथून उपलब्ध आहे.

### पायरी १ — प्रदाता निवडा (Step 1 — Choose a provider)

तुम्हाला कोणता रजिस्ट्रार (registrar) कनेक्ट करायचा आहे, तो निवडा. समर्थित पर्याय:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### पायरी २ — क्रेडेन्शियल्स प्रविष्ट करा (Step 2 — Enter credentials)

प्रत्येक प्रदात्यासाठी (provider) वेगवेगळे क्रेडेन्शियल फील्ड्स (credential fields) असतात:

**OpenSRS** — युजरनेम (Username) आणि प्रायव्हेट की (private key) (OpenSRS Reseller Control Panel मधून)

**Namecheap** — युजरनेम (Username) आणि API की (API key) (Account › Tools › API Access मधून)

**GoDaddy** — API की (API key) आणि सीक्रेट (secret) (developer.godaddy.com मधून)

**ResellerClub** — रिसेलर आयडी (Reseller ID) आणि API की (API key) (ResellerClub control panel मधून)

**NameSilo** — API की (API key) (namesilo.com › Account › API Manager मधून)

**Enom** — अकाउंट आयडी (Account ID) आणि API टोकन (API token)

लाइव्ह जाण्यापूर्वी प्रदात्याच्या चाचणी वातावरणावर (test environment) चाचणी करण्यासाठी, जिथे उपलब्ध आहे तिथे **Sandbox mode** तपासा.

### पायरी ३ — कनेक्शनची चाचणी घ्या (Step 3 — Test the connection)

**Test Connection** वर क्लिक करा. विझार्ड क्रेडेन्शियल्स आणि कनेक्टिव्हिटी सत्यापित करण्यासाठी एक हलका API कॉल (lightweight API call) पाठवतो. पुढे जाण्यापूर्वी कोणतेही क्रेडेन्शियल समस्या निश्चित करा.

### पायरी ४ — TLDs आयात करा (Step 4 — Import TLDs)

कनेक्ट केलेल्या प्रदात्याकडून सर्व उपलब्ध TLDs आणि होलसेल किंमत (wholesale pricing) आणण्यासाठी **Import TLDs** वर क्लिक करा. यामुळे डोमेन उत्पादनांमध्ये वापरली जाणारी TLD सूची (list) तयार होते. मोठ्या TLD कॅटलॉग असलेल्या प्रदात्यांसाठी या आयात प्रक्रियेला ३०–६० सेकंद लागू शकतात.

TLDs दररोज एकदा शेड्यूल केलेल्या क्रॉन जॉब (scheduled cron job) द्वारे आपोआप री-सिंक (re-synced) होतात.

### पायरी ५ — डोमेन उत्पादन तयार करा (Step 5 — Create a domain product)

विझार्ड १०% मार्कअपसह एक डीफॉल्ट कॅच-ऑल डोमेन उत्पादन (catch-all domain product) तयार करतो. तुम्ही हे उत्पादन त्वरित संपादित करू शकता किंवा वगळून **Ultimate Multisite › Products** अंतर्गत उत्पादने मॅन्युअली (manually) तयार करू शकता.

संपूर्ण उत्पादन कॉन्फिगरेशन मार्गदर्शकासाठी [Domain Products and Pricing](./domain-products) पहा.

---

## प्रदाता री-कॉन्फिगर करणे (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** येथे जा (किंवा प्लगइन लिस्टमध्ये **Settings** वर क्लिक करा).

सेटिंग्ज पेजवर खालील गोष्टी उपलब्ध आहेत:

- **Enable domain selling** — संपूर्ण फीचर ऑन/ऑफ करण्यासाठी टॉगल करा
- **Default provider** — डोमेन शोध आणि नवीन उत्पादनांसाठी वापरला जाणारा प्रदाता
- **Max TLDs per search** — जेव्हा ग्राहक शोध घेतो तेव्हा किती TLDs तपासले जातील; जास्त मूल्ये अधिक पर्याय दाखवतात पण हळू असतात
- **Availability cache duration** — उपलब्धता आणि किंमत परिणाम (results) किती काळ कॅश करायचे; कमी मूल्ये अधिक अचूक असतात पण API कॉल वाढवतात
- **Manage domain products** — उत्पादनांच्या यादीसाठी त्वरित लिंक
- **Configure providers** — प्रदाता जोडण्यासाठी किंवा री-कॉन्फिगर करण्यासाठी इंटिग्रेशन विझार्ड (Integration Wizard) उघडतो

### दुसरा प्रदाता जोडणे (Adding a second provider)

**Configure providers** वर क्लिक करा आणि नवीन रजिस्ट्रारसाठी विझार्ड पुन्हा चालवा. तुम्ही एकाच वेळी अनेक प्रदाता कॉन्फिगर करू शकता. प्रत्येक डोमेन उत्पादनासाठी विशिष्ट प्रदाता नियुक्त करा, किंवा ते डीफॉल्टवरच ठेवा.

### TLDs मॅन्युअली सिंक करणे (Syncing TLDs manually)

सेटिंग्ज पेजवर, कोणत्याही कॉन्फिगर केलेल्या प्रदात्याच्या बाजूला **Sync TLDs** वर क्लिक करा जेणेकरून नवीनतम किंमत (latest pricing) आणता येईल. जेव्हा एखादा प्रदाता होलसेल किंमत अपडेट करतो किंवा नवीन TLDs जोडतो, तेव्हा हे उपयुक्त ठरते.

---

## लॉग्स (Logs)

प्रत्येक प्रदाता स्वतःच्या लॉग चॅनेलमध्ये (log channel) लिहितो. लॉग्स **Network Admin › Ultimate Multisite › Logs** अंतर्गत पाहता येतात:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | सर्व रजिस्ट्रेशन प्रयत्न (यश आणि अपयश) |
| `domain-seller-renewal` | रिन्यूअल जॉबचे परिणाम |
| `domain-seller-opensrs` | कच्चा OpenSRS API ॲक्टिव्हिटी |
| `domain-seller-namecheap` | कच्चा Namecheap API ॲक्टिव्हिटी |
| `domain-seller-godaddy` | कच्चा GoDaddy API ॲक्टिव्हिटी |
| `domain-seller-resellerclub` | कच्चा ResellerClub API ॲक्टिव्हिटी |
| `domain-seller-namesilo` | कच्चा NameSilo API ॲक्टिव्हिटी |
| `domain-seller-enom` | कच्चा Enom API ॲक्टिव्हिटी |
