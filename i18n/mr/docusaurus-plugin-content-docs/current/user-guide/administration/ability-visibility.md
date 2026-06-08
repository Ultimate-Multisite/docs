---
title: क्षमता दृश्यता
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility (क्षमता दृश्यमानता)

Superdav AI Agent v1.12.0 मध्ये **Ability Visibility** नियंत्रणे (controls) जोडली आहेत, जी ठरवतात की कोणकोणत्या इंटरफेसवर कोणती क्षमता (ability) उपलब्ध होईल. यामुळे प्रशासकांना (administrators) हे बारीकपणे सेट करता येते की कोणत्या agent क्षमता REST APIs, MCP servers, WooCommerce integrations आणि इतर इंटरफेसद्वारे उपलब्ध असतील.

## What is Ability Visibility? (Ability Visibility म्हणजे काय?)

Ability Visibility हे एक परमिशन सिस्टीम आहे जे खालील गोष्टी नियंत्रित करते:

- **कोणत्या क्षमता** agent साठी उपलब्ध आहेत
- **त्या कुठे उपलब्ध होतील** (REST API, MCP, WooCommerce, इत्यादी)
- **कोणाला ॲक्सेस करता येईल** (partner allow-lists द्वारे)
- **त्या कशा प्रकारे वर्गीकृत आहेत** (recognized vs. unclassified)

प्रत्येक क्षमतेसोबत एक visibility level जोडलेला असतो, जो वेगवेगळ्या इंटरफेसवर त्याची उपलब्धता ठरवतो.

## Visibility Levels (दृश्यमानता स्तर)

### Public (सार्वजनिक)

**Public abilities** सर्वत्र उपलब्ध असतात:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- सर्व user roles (योग्य परवानग्यांसह)

उदाहरणार्थ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (अंतर्गत)

**Internal abilities** फक्त तुमच्या WordPress installation मध्ये उपलब्ध असतात:

- Chat interfaces
- Admin panels
- फक्त लॉग-इन केलेल्या वापरकर्त्यांसाठी
- REST API किंवा बाह्य integrations द्वारे उपलब्ध नसतात

उदाहरणार्थ: `manage-settings`, `view-analytics`, `export-data`

### Partner (भागीदार)

**Partner abilities** फक्त whitelisted (यादीत असलेल्या) भागीदारांसाठी उपलब्ध असतात:

- यासाठी स्पष्ट partner allow-list entry आवश्यक आहे
- partner credentials सह REST API द्वारे उपलब्ध
- partner authentication सह MCP द्वारे उपलब्ध
- सामान्य वापरकर्त्यांसाठी उपलब्ध नाहीत

उदाहरणार्थ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (निष्क्रिय)

**Disabled abilities** कुठेही उपलब्ध नसतात:

- कोणत्याही इंटरफेसद्वारे उपलब्ध नाहीत
- chat मध्ये उपलब्ध नाहीत
- admin panels मध्ये उपलब्ध नाहीत
- जुन्या किंवा प्रायोगिक (experimental) क्षमतांसाठी उपयुक्त

## Managing Ability Visibility (Ability Visibility व्यवस्थापित करणे)

### Accessing Ability Visibility Settings (Ability Visibility सेटिंग्जमध्ये प्रवेश करणे)

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** वर जा.
2. **Abilities** टॅबवर क्लिक करा.
3. तुम्हाला सर्व स्थापित (installed) क्षमतांची यादी आणि त्यांचे visibility levels दिसतील.

### Viewing Ability Details (Ability तपशील पाहणे)

कोणत्याही क्षमतेवर क्लिक करून तुम्ही खालील गोष्टी पाहू शकता:

- **Name**: क्षमतेचा आयडेंटिफायर (identifier)
- **Description**: ही क्षमता काय करते
- **Current visibility**: Public, Internal, Partner, किंवा Disabled
- **Partner allow-list**: कोणत्या भागीदारांना ॲक्सेस करता येईल (जर Partner visibility असेल तर)
- **Last updated**: शेवटचे कधी बदलले गेले
- **Status**: Recognized (ओळखली गेली) की Unclassified (वर्गीकृत नाही)

### Changing Visibility Levels (visibility स्तर बदलणे)

एखाद्या क्षमतेची visibility बदलायची असल्यास:

1. यादीतील क्षमतेवर क्लिक करा.
2. ड्रॉपडाउनमधून नवीन visibility level निवडा.
3. जर "Partner" निवडले असेल, तर allow-list मध्ये भागीदार आयडेंटिफायर्स (partner identifiers) जोडा.
4. **Save** वर क्लिक करा.

उदाहरणार्थ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (सामूहिक कार्ये)

अनेक क्षमतांची visibility बदलायची असल्यास:

1. क्षमतांच्या बाजूला असलेल्या बॉक्सवर टिक करा.
2. bulk action ड्रॉपडाउनमधून नवीन visibility level निवडा.
3. **Apply** वर क्लिक करा.

## Partner Allow-List (भागीदार अनुमती यादी)

**partner allow-list** हे नियंत्रित करते की कोणत्या बाह्य भागीदारांना Partner-level abilities ॲक्सेस करता येतील.

### Adding Partners (भागीदार जोडणे)

1. **Superdav AI Agent** → **Settings** → **Partners** वर जा.
2. **Add Partner** वर क्लिक करा.
3. भागीदार आयडेंटिफायर (सामान्यतः API key किंवा organization ID) प्रविष्ट करा.
4. पर्यायीरित्या भागीदाराचे नाव आणि वर्णन जोडा.
5. **Save** वर क्लिक करा.

### Assigning Abilities to Partners (भागीदारांना क्षमता नियुक्त करणे)

भागीदार जोडल्यानंतर:

1. **Abilities** टॅबवर जा.
2. Partner visibility असलेली एखादी क्षमता शोधा.
3. एडिट करण्यासाठी क्लिक करा.
4. "Partner allow-list" विभागात, ज्या भागीदारांना ॲक्सेस हवा आहे, त्यांच्या बॉक्सवर टिक करा.
5. **Save** वर क्लिक करा.

### Revoking Partner Access (भागीदाराचा ॲक्सेस रद्द करणे)

भागीदाराचा ॲक्सेस काढून टाकायचा असल्यास:

1. क्षमतेमध्ये एडिट करा.
2. allow-list मधील भागीदाराच्या बॉक्समधून टिक काढा.
3. **Save** वर क्लिक करा.

भागीदाराचा त्या क्षमतेवरील ॲक्सेस त्वरित काढून घेतला जाईल.

## Unclassified Abilities (वर्गीकृत नसलेल्या क्षमता)

जेव्हा तुम्ही एखादी third-party ability install करता जी Superdav AI Agent ला ओळखता येत नाही, तेव्हा तिला **Unclassified** म्हणून मार्क केले जाते.

### Admin Notice for Unclassified Abilities (Unclassified Abilities साठी Admin सूचना)

तुम्हाला एक admin notice दिसेल:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Reviewing Unclassified Abilities (Unclassified Abilities तपासणे)

1. सूचनांमधील **Review Abilities** वर क्लिक करा.
2. प्रत्येक unclassified ability साठी, तुम्हाला खालील गोष्टी दिसतील:
   - Ability name and description
   - Source (कोणत्या plugin/addon ने install केले)
   - Suggested visibility level
   - Security assessment

3. visibility level निवडा:
   - **Public**: या क्षमतेवर विश्वास आहे; ती सर्वत्र उपलब्ध करा
   - **Internal**: फक्त अंतर्गत वापरासाठी मर्यादित करा
   - **Partner**: विशिष्ट भागीदारांसाठी मर्यादित करा
   - **Disabled**: ही क्षमता वापरू नका

4. तुमचा निर्णय सेव्ह करण्यासाठी **Classify** वर क्लिक करा.

### Why Classify Unclassified Abilities? (Unclassified Abilities का वर्गीकृत करावे?)

क्षमता वर्गीकृत करण्याचे फायदे:

- **Improves security**: तुम्ही काय उपलब्ध करायचे आहे, यावर स्पष्टपणे मंजुरी देता.
- **Prevents accidents**: Unclassified abilities डीफॉल्टनुसार निष्क्रिय (disabled) असतात.
- **Enables features**: एकदा वर्गीकृत झाल्यावर, ती क्षमता उपलब्ध होते.
- **Documents decisions**: तुमच्या निवडी ऑडिट उद्देशांसाठी लॉग केल्या जातात.

## Visibility in Different Surfaces (वेगवेगळ्या इंटरफेसवर दृश्यमानता)

### REST API

**Public abilities** REST endpoints द्वारे उपलब्ध असतात:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal and Partner abilities** REST API द्वारे उपलब्ध नसतात.

### MCP Servers

**Public abilities** MCP द्वारे उपलब्ध असतात:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP द्वारे एक्सपोज (exposed) होत नाहीत.

**Partner abilities** फक्त partner credentials सह उपलब्ध असतात.

### WooCommerce Integration (WooCommerce एकत्रीकरण)

WooCommerce शी संबंधित **Public abilities** उपलब्ध असतात:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce ला एक्सपोज होत नाहीत.

### Chat Interface (चॅट इंटरफेस)

**सर्व abilities** (Public, Internal, Partner) वापरकर्त्याच्या परवानग्यांवर अवलंबून चॅटमध्ये उपलब्ध असतात:

- Administrators सर्व abilities पाहू शकतात.
- Regular users फक्त Public abilities पाहू शकतात.
- Partners Public + Partner abilities पाहू शकतात (जर whitelisted असतील).

## Security Best Practices (सुरक्षा सर्वोत्तम पद्धती)

### Principle of Least Privilege (सर्वात कमी विशेषाधिकार तत्त्व)

- क्षमता अशा सर्वात प्रतिबंधात्मक (restrictive) visibility वर सेट करा जी त्यांच्या वापरास परवानगी देते.
- संवेदनशील कार्यांसाठी Partner visibility वापरा.
- जी क्षमता वापरत नाही, ती निष्क्रिय करा.

### Regular Audits (नियमित ऑडिट)

- दर महिन्याला ability visibility तपासा.
- unclassified abilities तपासा.
- न वापरलेल्या भागीदारांचा ॲक्सेस काढून टाका.

### Logging and Monitoring (लॉगिंग आणि निरीक्षण)

- कोणत्या abilities चा सर्वाधिक वापर होतो, याचे निरीक्षण करा.
- भागीदारांच्या ॲक्सेस पॅटर्नचा मागोवा घ्या.
- असामान्य ability वापरासाठी अलर्ट सेट करा.

### Third-Party Abilities (तृतीय-पक्ष क्षमता)

- सक्षम करण्यापूर्वी third-party abilities तपासा.
- त्यांना स्पष्टपणे वर्गीकृत करा.
- Internal किंवा Partner visibility ने सुरुवात करा.
- फक्त तपासणीनंतर Public मध्ये वाढ करा.

## Troubleshooting (समस्या निवारण)

**Ability यादीत दिसत नाही**
- तपासा की ability install आणि active आहे की नाही.
- तपासा की plugin/addon सक्षम (enabled) आहे की नाही.
- पेज रिफ्रेश करा.

**मी ability ची visibility बदलू शकत नाही**
- तपासा की तुमच्याकडे administrator permissions आहेत की नाही.
- तपासा की ability एखाद्या plugin द्वारे लॉक (locked) झालेली नाही.
- conflicting plugins निष्क्रिय करण्याचा प्रयत्न करा.

**भागीदाराला ability ॲक्सेस करता येत नाही**
- तपासा की भागीदार allow-list मध्ये आहे की नाही.
- तपासा की ability ची visibility Partner वर सेट केली आहे की नाही.
- तपासा की भागीदाराचे credentials बरोबर आहेत की नाही.
- authentication errors साठी API logs तपासा.

**Unclassified abilities सतत दिसतात**
- admin notice मध्ये त्यांचा review करा आणि classify करा.
- तपासा की तुमचे वर्गीकरण सेव्ह झाले आहे की नाही.
- तपासा की ability देणारे plugin अपडेटेड आहे की नाही.

## Migration from Legacy Mode (Legacy Mode मधून स्थलांतर)

जर तुम्ही Superdav AI Agent च्या जुन्या आवृत्तीमधून अपग्रेड करत असाल:

- सर्व विद्यमान abilities आपोआप Public म्हणून वर्गीकृत केल्या जातात.
- आवश्यकतेनुसार visibility तपासा आणि समायोजित करा.
- ॲक्सेस प्रतिबंधित करण्याची इच्छा नसल्यास कोणतेही कार्य करण्याची गरज नाही.

Native Abilities API integration कडे संक्रमण (transition) करण्यासाठी अधिक तपशीलांसाठी **Third-Party Mode Migration** पहा.

## Next Steps (पुढील पाऊले)

ability visibility कॉन्फिगर केल्यानंतर:

1. **तुमच्या abilities चा आढावा घ्या**: सर्व स्थापित abilities चे ऑडिट करा.
2. **unclassified abilities वर्गीकृत करा**: admin notices ला प्रतिसाद द्या.
3. **partners सेट करा**: जर Partner visibility वापरत असाल तर भागीदार जोडा.
4. **वापर लक्ष ठेवा**: कोणत्या abilities चा सर्वाधिक वापर होतो, याचा मागोवा घ्या.
5. **निर्णय दस्तऐवजीकरण करा**: तुम्ही प्रत्येक visibility level का निवडले याबद्दल नोट्स ठेवा.
