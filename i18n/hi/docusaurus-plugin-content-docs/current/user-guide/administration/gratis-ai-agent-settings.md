---
title: निःशुल्क एआई एजेंट सेटिंग्स
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent में **Settings → Advanced** स्क्रीन v1.5.0 में पेश किए गए बैकएंड इंटीग्रेशन के लिए एडमिनिस्ट्रेटर-लेवल कॉन्फ़िगरेशन प्रदान करती है। यह पेज **Feedback Endpoint** फ़ील्ड और उनके अपेक्षित फॉर्मेट का दस्तावेज़ीकरण करता है।

## Settings तक पहुँचना

1. WordPress admin में, **Gratis AI Agent → Settings** पर जाएँ।
2. **Advanced** टैब पर क्लिक करें।

## Feedback Endpoint कॉन्फ़िगरेशन

फीडबैक एंडपॉइंट को AI एजेंट द्वारा POST रिक्वेस्ट प्राप्त होती है जब भी कोई उपयोगकर्ता थम्स-डाउन बटन, ऑटो-प्रॉम्प्ट बैनर, या `/report-issue` कमांड के माध्यम से फीडबैक सबमिट करता है।

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | वह URL जो JSON बॉडी के साथ HTTP POST रिक्वेस्ट के रूप में फीडबैक सबमिशन प्राप्त करता है। |
| **Feedback API Key** | प्रत्येक फीडबैक रिक्वेस्ट के `Authorization` हेडर में भेजा गया एक बियरर टोकन (bearer token)। यदि आपके एंडपॉइंट को प्रमाणीकरण (authentication) की आवश्यकता नहीं है, तो इसे खाली छोड़ दें। |

### अपेक्षित JSON Payload

आपके फीडबैक एंडपॉइंट को कम से कम निम्नलिखित फ़ील्ड वाला JSON बॉडी स्वीकार करना होगा:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

बातचीत के संदर्भ (conversation context) के आधार पर payload में अतिरिक्त फ़ील्ड मौजूद हो सकते हैं।

### `triage_category` Values

AI triage layer payload को आगे भेजने से पहले `triage_category` को निम्नलिखित में से एक मान असाइन करता है:

| Value | Meaning |
|---|---|
| `factual_error` | असिस्टेंट ने गलत तथ्यात्मक जानकारी प्रदान की। |
| `unhelpful_answer` | प्रतिक्रिया तकनीकी रूप से सही थी लेकिन उपयोगी नहीं थी। |
| `inappropriate_content` | प्रतिक्रिया में ऐसी सामग्री थी जिसे उपयोगकर्ताओं को नहीं दिखाना चाहिए। |
| `other` | फीडबैक किसी ज्ञात श्रेणी से मेल नहीं खाता। |

### Authentication

यदि आपके एंडपॉइंट को प्रमाणीकरण की आवश्यकता है, तो **Feedback API Key** फ़ील्ड में अपना बियरर टोकन सेट करें। एजेंट निम्नलिखित भेजता है:

```
Authorization: Bearer <your-api-key>
```

यदि **Feedback API Key** फ़ील्ड खाली है, तो कोई `Authorization` हेडर नहीं भेजा जाता है।

### Feedback Collection को अक्षम करना

**Feedback Endpoint URL** और **Feedback API Key** दोनों फ़ील्ड को खाली छोड़ दें। थम्स-डाउन बटन और फीडबैक UI उपयोगकर्ताओं के लिए दिखाई देते रहते हैं, लेकिन सबमिशन किसी बाहरी सेवा को आगे नहीं भेजे जाते हैं।

## Brave Search API Key

**Advanced** टैब पर, **Brave Search API Key** फ़ील्ड [Internet Search](../configuration/internet-search) क्षमता को सक्षम करता है।

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard से आपकी API key। AI असिस्टेंट में इंटरनेट सर्च को सक्षम करने के लिए आवश्यक। |

फ़ील्ड लेबल में Brave Search API साइन-अप पेज का एक क्लिक करने योग्य लिंक शामिल है। इंटरनेट सर्च को अक्षम करने के लिए इसे खाली छोड़ दें।

इस सुविधा पर एंड-यूज़र दस्तावेज़ीकरण के लिए [Internet Search](../configuration/internet-search) देखें।

## Feature Flags

v1.9.0 में भी पेश किया गया, **Settings → Feature Flags** टैब वैकल्पिक कार्यक्षमता के लिए टॉगल स्विच प्रदान करता है। प्रत्येक फ़्लैग नेटवर्क-व्यापी रूप से या तो सक्षम (enabled) होता है या अक्षम (disabled); इस समय कोई प्रति-साइट ओवरराइड नहीं है।

### Feature Flags तक पहुँचना

1. WordPress admin में, **Gratis AI Agent → Settings** पर जाएँ।
2. **Feature Flags** टैब पर क्लिक करें।

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | सक्षम होने पर, केवल `administrator` रोल वाले उपयोगकर्ता ही AI Agent चैट पैनल खोल सकते हैं। अन्य सभी रोल को इसके बजाय "Contact your administrator" संदेश दिखाई देगा। |
| **Restrict to Network Admins** | Off | मल्टीसाइट नेटवर्क पर सक्षम होने पर, केवल सुपर एडमिन ही एजेंट का उपयोग कर सकते हैं। व्यक्तिगत साइट एडमिन ब्लॉक हो जाते हैं। यदि दोनों सक्षम हैं तो यह "Restrict to Administrators" पर प्राथमिकता लेता है। |
| **Allow Subscriber Access** | Off | सक्षम होने पर, `subscriber` रोल वाले उपयोगकर्ता चैट इंटरफ़ेस का उपयोग कर सकते हैं लेकिन वे केवल रीड-ओनली क्षमताओं तक सीमित हैं (कोई पोस्ट बनाना या सेटिंग्स बदलना नहीं)। |
| **Disable for Non-Members** | Off | Ultimate Multisite सदस्यता स्थिति के साथ इंटीग्रेट होता है। सक्षम होने पर, उन साइटों के लिए चैट छिपा दिया जाता है जिनके पास सक्रिय सदस्यता नहीं है। |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | चैट विजेट के निचले भाग में दिखाई देने वाली ब्रांडिंग एट्रीब्यूशन लाइन को हटाता है। व्हाइट-लेबल डिप्लॉयमेंट के लिए अनुशंसित। |
| **Custom Agent Name** | *(blank)* | चैट हेडर और एडमिन मेनू में डिफ़ॉल्ट "Gratis AI Agent" लेबल को आपके अपने उत्पाद नाम से बदलता है। डिफ़ॉल्ट का उपयोग करने के लिए खाली छोड़ दें। |
| **Hide Agent Picker** | Off | सक्षम होने पर, उपयोगकर्ता पाँच इनबिल्ट एजेंटों के बीच स्विच नहीं कर सकते। वर्तमान एजेंट को Settings → General में डिफ़ॉल्ट के रूप में कॉन्फ़िगर किए गए एजेंट पर स्थिर कर दिया जाता है। |
| **Use Site Icon as Chat Avatar** | Off | चैट विजेट हेडर में डिफ़ॉल्ट AI आइकन को वर्डप्रेस साइट आइकन (Appearance → Customize → Site Identity के तहत सेट) से बदलता है। |

### Changes लागू करना

किसी भी फ़्लैग को टॉगल करने के बाद **Save Settings** पर क्लिक करें। परिवर्तन तुरंत प्रभावी हो जाते हैं — इसके लिए कोई कैश फ्लश या प्लगइन रीएक्टिवेशन आवश्यक नहीं है।
