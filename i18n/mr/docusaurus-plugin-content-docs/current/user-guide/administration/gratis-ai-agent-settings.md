---
title: मोफत AI एजंट सेटिंग्ज
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent मधील **Settings → Advanced** स्क्रीनवर v1.5.0 मध्ये जोडलेले बॅकएंड इंटिग्रेशन्ससाठी ॲडमिनिस्ट्रेटर-लेव्हल कॉन्फिगरेशन मिळते. हा पेज **Feedback Endpoint** फील्ड्स आणि त्यांच्या अपेक्षित फॉरमॅटचे वर्णन करतो.

## Settings कसे ॲक्सेस करावे

1. WordPress admin मध्ये, **Gratis AI Agent → Settings** वर जा.
2. **Advanced** टॅबवर क्लिक करा.

## Feedback Endpoint Configuration

जेव्हा वापरकर्ता थम्स-डाऊन बटण, ऑटो-प्रॉम्प्ट बॅनर किंवा `/report-issue` कमांडद्वारे फीडबॅक सबमिट करतो, तेव्हा फीडबॅक एंडपॉईंटला AI एजंटकडून POST रिक्वेस्ट मिळतात.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | ही URL आहे जी JSON बॉडीसह HTTP POST रिक्वेस्ट म्हणून फीडबॅक सबमिशन स्वीकारते. |
| **Feedback API Key** | प्रत्येक फीडबॅक रिक्वेस्टच्या `Authorization` हेडरमध्ये पाठवला जाणारा bearer token. जर तुमच्या एंडपॉईंटला प्रमाणीकरण (authentication) आवश्यक नसेल, तर हे रिकामे सोडा. |

### Expected JSON Payload

तुमच्या फीडबॅक एंडपॉईंटला कमीत कमी खालील फील्ड्ससह JSON बॉडी स्वीकारणे आवश्यक आहे:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

संभाषणाच्या (conversation) संदर्भावर अवलंबून, payload मध्ये अतिरिक्त फील्ड्स असू शकतात.

### `triage_category` Values

payload फॉरवर्ड करण्यापूर्वी AI triage layer खालीलपैकी एक मूल्य `triage_category` ला नियुक्त करतो:

| Value | Meaning |
|---|---|
| `factual_error` | असिस्टंटने चुकीची तथ्यात्मक माहिती दिली. |
| `unhelpful_answer` | प्रतिसाद तांत्रिकदृष्ट्या बरोबर होता, पण उपयुक्त नव्हता. |
| `inappropriate_content` | प्रतिसादात असा मजकूर होता जो वापरकर्त्यांना दाखवला जाऊ नये. |
| `other` | फीडबॅक कोणत्याही ज्ञात श्रेणीशी जुळत नाही. |

### Authentication

जर तुमच्या एंडपॉईंटला प्रमाणीकरण (authentication) आवश्यक असेल, तर **Feedback API Key** फील्डमध्ये तुमचा bearer token सेट करा. एजंट खालीलप्रमाणे पाठवतो:

```
Authorization: Bearer <your-api-key>
```

जर **Feedback API Key** फील्ड रिकामे असेल, तर कोणताही `Authorization` हेडर पाठवला जात नाही.

### Feedback Collection अक्षम करणे (Disabling Feedback Collection)

**Feedback Endpoint URL** आणि **Feedback API Key** दोन्ही फील्ड रिकामे सोडा. थम्स-डाऊन बटण आणि फीडबॅक UI वापरकर्त्यांसाठी दृश्यमान राहतील, परंतु सबमिशन कोणत्याही बाह्य सेवेकडे फॉरवर्ड केले जाणार नाहीत.

## Brave Search API Key

**Advanced** टॅबवर, **Brave Search API Key** फील्ड [Internet Search](../configuration/internet-search) क्षमता सक्षम करते.

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard मधून मिळालेला तुमचा API key. AI असिस्टंटमध्ये इंटरनेट सर्च सक्षम करण्यासाठी आवश्यक. |

या फील्डच्या लेबलमध्ये Brave Search API साइन-अप पेजची क्लिक करण्यायोग्य लिंक समाविष्ट आहे. इंटरनेट सर्च अक्षम करण्यासाठी हे रिकामे सोडा.

या फीचरवरील end-user document साठी [Internet Search](../configuration/internet-search) पहा.

## Feature Flags

v1.9.0 मध्ये देखील जोडलेले, **Settings → Feature Flags** टॅब पर्यायी कार्यक्षमतेसाठी टॉगल स्विचेस (toggle switches) प्रदान करतो. प्रत्येक फ्लॅग नेटवर्क-व्यापी (network-wide) सक्षम किंवा अक्षम असतो; सध्या याला साइटनुसार (per-site) ओव्हरराईड करण्याची सोय नाही.

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | सक्षम केल्यास, केवळ `administrator` रोल असलेले वापरकर्तेच AI Agent chat panel उघडू शकतात. इतर सर्व भूमिकांना त्याऐवजी "Contact your administrator" असा संदेश दिसतो. |
| **Restrict to Network Admins** | Off | मल्टीसाइट नेटवर्कवर सक्षम केल्यास, केवळ Super Admins एजंट वापरू शकतात. वैयक्तिक साइट ॲडमिन ब्लॉक केले जातात. जर दोन्ही सक्षम असतील, तर हे "Restrict to Administrators" पेक्षा जास्त प्राधान्य घेते. |
| **Allow Subscriber Access** | Off | सक्षम केल्यास, `subscriber` रोल असलेले वापरकर्ते चॅट इंटरफेस वापरू शकतात, परंतु ते केवळ वाचण्यासाठी (read-only) मर्यादित असतात (पोस्ट तयार करणे किंवा सेटिंग्ज बदलणे नाही). |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status सोबत इंटिग्रेट होते. सक्षम केल्यास, ज्या साइट्समध्ये सक्रिय सदस्यत्व (active membership) नाही, त्यांच्यासाठी चॅट लपवला जातो. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | चॅट विजेटच्या तळाशी दिसणारी ब्रँडिंग ॲट्रिब्यूशन लाईन काढून टाकते. व्हाईट-लेबल डिप्लॉयमेंटसाठी (white-label deployments) शिफारस केलेले. |
| **Custom Agent Name** | *(blank)* | चॅट हेडर आणि ॲडमिन मेनूमध्ये डिफॉल्ट "Gratis AI Agent" लेबल तुमच्या स्वतःच्या उत्पादनाच्या नावाने बदलते. डिफॉल्ट वापरण्यासाठी रिकामे सोडा. |
| **Hide Agent Picker** | Off | सक्षम केल्यास, वापरकर्ते पाच बिल्ट-इन एजंट्समध्ये स्विच करू शकत नाहीत. सध्याचा एजंट Settings → General मध्ये डिफॉल्ट म्हणून कॉन्फिगर केलेला तोच राहतो. |
| **Use Site Icon as Chat Avatar** | Off | चॅट विजेटच्या हेडरमधील डिफॉल्ट AI आयकॉन, WordPress साइट आयकॉनने (Appearance → Customize → Site Identity अंतर्गत सेट केलेला) बदलतो. |

### Applying Changes

कोणताही फ्लॅग टॉगल केल्यानंतर **Save Settings** वर क्लिक करा. बदल त्वरित लागू होतात — यासाठी cache flush किंवा plugin reactivation करण्याची आवश्यकता नाही.
