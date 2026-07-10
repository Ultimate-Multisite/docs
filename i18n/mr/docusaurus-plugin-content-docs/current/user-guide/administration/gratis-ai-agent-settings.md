---
title: Gratis AI Agent सेटिंग्ज
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent सेटिंग्ज {#gratis-ai-agent-settings}

Gratis AI Agent मधील **सेटिंग्ज → प्रगत** स्क्रीन backend एकत्रीकरणांसाठी प्रशासक-स्तरीय कॉन्फिगरेशन पुरवते. हे पृष्ठ feedback पुढे पाठवणे, शोध प्रदाता कळा, managed Superdav सेवा सेटअप, Google Calendar नियंत्रण, TextBee SMS सेटिंग्ज, आणि नेटवर्क-व्यापी वैशिष्ट्य ध्वज यांचे दस्तऐवजीकरण करते.

## सेटिंग्जमध्ये प्रवेश करणे {#accessing-settings}

1. WordPress admin मध्ये, **Gratis AI Agent → सेटिंग्ज** येथे जा.
2. **प्रगत** टॅबवर क्लिक करा.

## Feedback endpoint कॉन्फिगरेशन {#feedback-endpoint-configuration}

जेव्हा वापरकर्ता thumbs-down बटण, auto-prompt banner, किंवा `/report-issue` आदेशाद्वारे feedback सबमिट करतो, तेव्हा feedback endpoint AI agent कडून POST विनंत्या प्राप्त करतो.

| फील्ड | वर्णन |
|---|---|
| **Feedback Endpoint URL** | JSON body सह HTTP POST विनंत्या म्हणून feedback सबमिशन प्राप्त करणारा URL. |
| **Feedback API Key** | प्रत्येक feedback विनंतीच्या `Authorization` header मध्ये पाठवला जाणारा bearer token. तुमच्या endpoint ला प्रमाणीकरणाची गरज नसल्यास रिक्त ठेवा. |

### अपेक्षित JSON payload {#expected-json-payload}

तुमच्या feedback endpoint ने किमान खालील फील्ड्स असलेला JSON body स्वीकारला पाहिजे:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

संभाषणाच्या संदर्भानुसार payload मध्ये अतिरिक्त फील्ड्स असू शकतात.

### `triage_category` मूल्ये {#triagecategory-values}

AI triage स्तर payload पुढे पाठवण्यापूर्वी `triage_category` ला खालीलपैकी एक मूल्य नियुक्त करतो:

| मूल्य | अर्थ |
|---|---|
| `factual_error` | सहाय्यकाने चुकीची तथ्यात्मक माहिती दिली. |
| `unhelpful_answer` | प्रतिसाद तांत्रिकदृष्ट्या बरोबर होता पण उपयुक्त नव्हता. |
| `inappropriate_content` | प्रतिसादात वापरकर्त्यांना दाखवू नये अशी सामग्री होती. |
| `other` | feedback कोणत्याही ज्ञात वर्गाशी जुळला नाही. |

### प्रमाणीकरण {#authentication}

तुमच्या endpoint ला प्रमाणीकरणाची आवश्यकता असल्यास, **Feedback API Key** फील्ड तुमच्या bearer token वर सेट करा. agent पाठवतो:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** फील्ड रिक्त असल्यास, कोणताही `Authorization` header पाठवला जात नाही.

### Feedback संकलन अक्षम करणे {#disabling-feedback-collection}

**Feedback Endpoint URL** आणि **Feedback API Key** ही दोन्ही फील्ड्स रिक्त ठेवा. thumbs-down बटण आणि feedback UI वापरकर्त्यांना दिसत राहतात, पण सबमिशन्स कोणत्याही बाह्य सेवेकडे पुढे पाठवले जात नाहीत.

## Brave Search API Key {#brave-search-api-key}

**प्रगत** टॅबवरच, **Brave Search API Key** फील्ड [इंटरनेट शोध](../configuration/internet-search) क्षमता सक्षम करते.

| फील्ड | वर्णन |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard मधील तुमची API key. AI assistant मध्ये इंटरनेट शोध सक्षम करण्यासाठी आवश्यक. |

फील्ड लेबलमध्ये Brave Search API साइन-अप पृष्ठाची क्लिक करण्यायोग्य लिंक समाविष्ट आहे. इंटरनेट शोध अक्षम करण्यासाठी रिक्त ठेवा.

या वैशिष्ट्यावरील अंतिम वापरकर्ता दस्तऐवजीकरणासाठी [इंटरनेट शोध](../configuration/internet-search) पहा.

## Managed Superdav सेवा {#managed-superdav-service}

Superdav AI Agent v1.18.0 समर्थित site साठी managed Superdav सेवा endpoints आणि स्वयंचलित connection provisioning जोडते. तुमच्या site ने हाताने कॉन्फिगर केलेल्या service endpoint ऐवजी hosted provider शी connect व्हावे असे असल्यास ही नियंत्रणे वापरा.

| फील्ड | वर्णन |
|---|---|
| **Managed Superdav Service** | समर्थित sites साठी hosted Superdav सेवा connection सक्षम करते. |
| **Provision Connection** | स्वयंचलित endpoint आणि credential provisioning सुरू करते. site ने managed provider वापरावा याची खात्री केल्यानंतर हे वापरा. |
| **Service Endpoint / Connection Status** | provisioning नंतर सध्याचा endpoint किंवा connection स्थिती दाखवते. |

provisioning नंतर, सेटिंग्ज जतन करा आणि managed-service workflows वर अवलंबून राहण्यापूर्वी connection status पडताळा. provisioning अयशस्वी झाल्यास, दाखवलेले retry मार्गदर्शन पाहा आणि site ला hosted provider वापरण्याची परवानगी आहे याची खात्री करा.

## Google Calendar कॉन्फिगरेशन {#google-calendar-configuration}

Superdav AI Agent v1.18.0 calendar वैशिष्ट्ये सक्षम असताना, agent कॉन्फिगर केलेली calendars आणि event तपशील वाचू शकतो. Calendar tools वाचनाभिमुख आहेत आणि वेळापत्रक-जाणिव असलेले reminders, attendee follow-up, आणि contact matching साठी उपयुक्त आहेत.

| फील्ड | वर्णन |
|---|---|
| **Google Calendar Credentials** | calendar data वाचण्यासाठी आवश्यक credentials किंवा token connection संग्रहित करते. |
| **Calendar Selection** | agent कोणती कॉन्फिगर केलेली calendars तपासू शकतो हे मर्यादित करते. |
| **Calendar Connection Status** | सध्याची credentials calendars आणि events वाचू शकतात का याची पुष्टी करते. |

calendar credentials फक्त agent ला आवश्यक असलेल्या calendars पुरती मर्यादित ठेवा. status मध्ये expired token दर्शवला असल्यास credentials पुन्हा connect करा किंवा rotate करा.

## TextBee SMS सूचना {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 कॉन्फिगर केलेल्या notification workflows साठी SMS provider म्हणून TextBee जोडते. संवेदनशील किंवा वापरकर्ता-दृश्यमान संदेशांसाठी SMS सूचना मानवी मंजुरी gates सोबत जोडल्या पाहिजेत.

| फील्ड | वर्णन |
|---|---|
| **TextBee API Key** | TextBee SMS provider कडे जाणाऱ्या विनंत्यांचे प्रमाणीकरण करते. |
| **TextBee Device / Sender** | provider ने आवश्यक केल्यास, outgoing messages साठी वापरला जाणारा TextBee sender किंवा device निवडते. |
| **SMS Notifications Enabled** | मंजूर workflows ना text-message notifications पाठवण्याची परवानगी देते. SMS sends टाळण्यासाठी अक्षम ठेवा. |

फक्त administrator-मालकीच्या क्रमांकावर test message पाठवा, त्यानंतर scheduled किंवा attendee-facing reminders सक्षम करण्यापूर्वी approval-gate वर्तनाची पुष्टी करा.

## वैशिष्ट्य ध्वज {#feature-flags}

v1.9.0 मध्येही सादर केलेला, **सेटिंग्ज → वैशिष्ट्य ध्वज** टॅब ऐच्छिक कार्यक्षमतेसाठी toggle switches पुरवतो. प्रत्येक flag नेटवर्क-व्यापी सक्षम किंवा अक्षम असतो; सध्या प्रति-site override नाही.

### वैशिष्ट्य ध्वजांमध्ये प्रवेश करणे {#accessing-feature-flags}

1. WordPress admin मध्ये, **Gratis AI Agent → सेटिंग्ज** येथे जा.
2. **वैशिष्ट्य ध्वज** टॅबवर क्लिक करा.

### प्रवेश नियंत्रण ध्वज {#access-control-flags}

| ध्वज | डीफॉल्ट | वर्णन |
|---|---|---|
| **Administrators पर्यंत मर्यादित करा** | बंद | सक्षम केल्यावर, फक्त `administrator` भूमिका असलेले वापरकर्ते AI Agent चॅट पॅनेल उघडू शकतात. इतर सर्व भूमिका त्याऐवजी "आपल्या administrator शी संपर्क साधा" संदेश पाहतात. |
| **Network Admins पर्यंत मर्यादित करा** | बंद | multisite नेटवर्कवर सक्षम केल्यावर, फक्त Super Admins एजंट वापरू शकतात. स्वतंत्र साइट administrators अवरोधित केले जातात. दोन्ही सक्षम असल्यास "Administrators पर्यंत मर्यादित करा" यापेक्षा याला प्राधान्य मिळते. |
| **Subscriber प्रवेशाला अनुमती द्या** | बंद | सक्षम केल्यावर, `subscriber` भूमिका असलेले वापरकर्ते चॅट इंटरफेस वापरू शकतात, परंतु केवळ-वाचन क्षमतांपुरते मर्यादित असतात (पोस्ट तयार करणे किंवा सेटिंग्ज बदलणे नाही). |
| **Non-Members साठी अक्षम करा** | बंद | Ultimate Multisite सदस्यत्व स्थितीसह समाकलित होते. सक्षम केल्यावर, सक्रिय सदस्यत्व नसलेल्या साइट्ससाठी चॅट लपवले जाते. |

### ब्रँडिंग ध्वज {#branding-flags}

| ध्वज | डीफॉल्ट | वर्णन |
|---|---|---|
| **"Powered by Gratis AI Agent" तळटीप लपवा** | बंद | चॅट विजेटच्या तळाशी दाखवली जाणारी ब्रँडिंग श्रेय-ओळ काढून टाकते. व्हाइट-लेबल उपयोजनांसाठी शिफारस केलेले. |
| **सानुकूल एजंट नाव** | *(रिक्त)* | चॅट शीर्षलेख आणि admin मेनूमधील डीफॉल्ट "Gratis AI Agent" लेबल तुमच्या स्वतःच्या उत्पादन नावाने बदलते. डीफॉल्ट वापरण्यासाठी रिक्त ठेवा. |
| **एजंट निवडक लपवा** | बंद | सक्षम केल्यावर, वापरकर्ते पाच अंगभूत एजंट्सदरम्यान स्विच करू शकत नाहीत. सध्याचा एजंट Settings → General मध्ये डीफॉल्ट म्हणून जे कॉन्फिगर केले आहे त्यावर निश्चित असतो. |
| **चॅट अवतार म्हणून साइट आयकॉन वापरा** | बंद | चॅट विजेट शीर्षलेखातील डीफॉल्ट AI आयकॉन WordPress साइट आयकॉनने बदलते (Appearance → Customize → Site Identity अंतर्गत सेट केलेले). |

### ऑटोमेशन सुरक्षा ध्वज {#automation-safety-flags}

Superdav AI Agent v1.18.0 सुरक्षित ऑटोमेशन रनसाठी मानवी मंजुरी गेट्स आणि स्मरणपत्र नोंदी सादर करते. हे नियंत्रण स्थापित पॅकेजनुसार वैशिष्ट्य ध्वजांमध्ये किंवा प्रगत ऑटोमेशन सेटिंग्जमध्ये दिसू शकतात.

| ध्वज | डीफॉल्ट | वर्णन |
|---|---|---|
| **मानवी मंजुरी आवश्यक** | सुरू ठेवण्याची शिफारस | संवेदनशील ऑटोमेशन्स थांबवते जोपर्यंत अधिकृत वापरकर्ता प्रस्तावित कृतीचे पुनरावलोकन करून पुष्टी करत नाही. |
| **स्मरणपत्र डी-डुप्लिकेशन** | सुरू | पाठवलेल्या स्मरणपत्रांची नोंद ठेवते जेणेकरून पुन्हा प्रयत्न किंवा नियोजित रन डुप्लिकेट सूचना पाठवत नाहीत. |
| **Calendar साधने सक्षम करा** | कॉन्फिगर होईपर्यंत बंद | एजंटला कॉन्फिगर केलेली Google कॅलेंडर्स आणि इव्हेंट्स वाचण्याची अनुमती देते. |
| **SMS सूचना सक्षम करा** | कॉन्फिगर होईपर्यंत बंद | क्रेडेन्शियल्स जतन झाल्यानंतर मंजूर वर्कफ्लोजना TextBee SMS सूचना पाठवण्याची अनुमती देते. |

### बदल लागू करणे {#applying-changes}

कोणताही ध्वज टॉगल केल्यानंतर **सेटिंग्ज जतन करा** क्लिक करा. बदल त्वरित लागू होतात — कोणताही कॅशे फ्लश किंवा plugin पुनर्सक्रियकरण आवश्यक नाही.
