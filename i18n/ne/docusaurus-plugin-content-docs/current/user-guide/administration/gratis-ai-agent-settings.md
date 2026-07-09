---
title: Gratis AI Agent सेटिङहरू
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent सेटिङहरू {#gratis-ai-agent-settings}

Gratis AI Agent मा **सेटिङहरू → उन्नत** स्क्रिनले backend एकीकरणहरूका लागि प्रशासक-स्तरको कन्फिगरेसन प्रदान गर्छ। यस पृष्ठले feedback forwarding, खोज प्रदायक keyहरू, व्यवस्थित Superdav सेवा सेटअप, Google Calendar नियन्त्रणहरू, TextBee SMS सेटिङहरू, र नेटवर्क-व्यापी सुविधा फ्ल्यागहरू दस्तावेज गर्छ।

## सेटिङहरू पहुँच गर्ने {#accessing-settings}

1. WordPress admin मा, **Gratis AI Agent → सेटिङहरू** मा जानुहोस्।
2. **उन्नत** ट्याबमा क्लिक गर्नुहोस्।

## Feedback Endpoint कन्फिगरेसन {#feedback-endpoint-configuration}

feedback endpoint ले thumbs-down बटन, auto-prompt banner, वा `/report-issue` command मार्फत प्रयोगकर्ताले feedback पेश गर्दा AI agent बाट POST अनुरोधहरू प्राप्त गर्छ।

| फिल्ड | विवरण |
|---|---|
| **Feedback Endpoint URL** | JSON body सहित HTTP POST अनुरोधहरूका रूपमा feedback submission हरू प्राप्त गर्ने URL। |
| **Feedback API Key** | प्रत्येक feedback अनुरोधको `Authorization` header मा पठाइने bearer token। तपाईंको endpoint लाई प्रमाणीकरण आवश्यक पर्दैन भने खाली छोड्नुहोस्। |

### अपेक्षित JSON Payload {#expected-json-payload}

तपाईंको feedback endpoint ले कम्तीमा निम्न फिल्डहरू भएको JSON body स्वीकार गर्नुपर्छ:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

conversation context का आधारमा payload मा थप फिल्डहरू हुन सक्छन्।

### `triage_category` मानहरू {#triagecategory-values}

AI triage तहले payload forwarding गर्नु अघि `triage_category` मा निम्नमध्ये एउटा मान तोक्छ:

| मान | अर्थ |
|---|---|
| `factual_error` | assistant ले गलत तथ्यात्मक जानकारी प्रदान गर्‍यो। |
| `unhelpful_answer` | प्रतिक्रिया प्राविधिक रूपमा सही थियो तर उपयोगी थिएन। |
| `inappropriate_content` | प्रतिक्रियामा प्रयोगकर्ताहरूलाई देखाउन नहुने सामग्री थियो। |
| `other` | feedback कुनै ज्ञात वर्गसँग मेल खाएन। |

### प्रमाणीकरण {#authentication}

तपाईंको endpoint लाई प्रमाणीकरण आवश्यक छ भने, **Feedback API Key** फिल्डलाई तपाईंको bearer token मा सेट गर्नुहोस्। agent ले पठाउँछ:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** फिल्ड खाली छ भने, कुनै `Authorization` header पठाइँदैन।

### Feedback सङ्कलन निष्क्रिय गर्ने {#disabling-feedback-collection}

**Feedback Endpoint URL** र **Feedback API Key** दुवै फिल्ड खाली छोड्नुहोस्। thumbs-down बटन र feedback UI प्रयोगकर्ताहरूलाई देखिने नै रहन्छ, तर submission हरू कुनै बाह्य सेवामा forwarding गरिँदैनन्।

## Brave Search API Key {#brave-search-api-key}

**उन्नत** ट्याबमा पनि, **Brave Search API Key** फिल्डले [इन्टरनेट खोज](../configuration/internet-search) क्षमता सक्षम गर्छ।

| फिल्ड | विवरण |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard बाट तपाईंको API key। AI assistant मा internet search सक्षम गर्न आवश्यक। |

फिल्ड label मा Brave Search API sign-up पृष्ठमा जाने क्लिक गर्न मिल्ने link समावेश छ। internet search निष्क्रिय गर्न खाली छोड्नुहोस्।

यस सुविधाका लागि end-user दस्तावेजका लागि [इन्टरनेट खोज](../configuration/internet-search) हेर्नुहोस्।

## व्यवस्थित Superdav सेवा {#managed-superdav-service}

Superdav AI Agent v1.18.0 ले समर्थित साइटहरूका लागि व्यवस्थित Superdav सेवा endpoint हरू र स्वचालित connection provisioning थप्छ। तपाईंको साइटले manually configured service endpoint को सट्टा hosted provider सँग जोडिनुपर्छ भने यी नियन्त्रणहरू प्रयोग गर्नुहोस्।

| फिल्ड | विवरण |
|---|---|
| **व्यवस्थित Superdav सेवा** | समर्थित साइटहरूका लागि hosted Superdav सेवा connection सक्षम गर्छ। |
| **Connection Provision गर्नुहोस्** | स्वचालित endpoint र credential provisioning सुरु गर्छ। साइटले managed provider प्रयोग गर्नुपर्छ भन्ने पुष्टि गरेपछि यो प्रयोग गर्नुहोस्। |
| **Service Endpoint / Connection Status** | provisioning पछि हालको endpoint वा connection state देखाउँछ। |

provisioning पछि, सेटिङहरू सुरक्षित गर्नुहोस् र managed-service workflow हरूमा निर्भर हुनु अघि connection status प्रमाणित गर्नुहोस्। provisioning असफल भएमा, देखाइएको retry guidance समीक्षा गर्नुहोस् र साइटलाई hosted provider प्रयोग गर्ने अनुमति छ भन्ने पुष्टि गर्नुहोस्।

## Google Calendar कन्फिगरेसन {#google-calendar-configuration}

Superdav AI Agent v1.18.0 calendar सुविधाहरू सक्षम हुँदा, agent ले configured calendar हरू र event detail हरू पढ्न सक्छ। Calendar tool हरू read-oriented छन् र schedule-aware reminder, attendee follow-up, र contact matching का लागि उपयोगी छन्।

| फिल्ड | विवरण |
|---|---|
| **Google Calendar Credentials** | calendar data पढ्न आवश्यक credential वा token connection भण्डारण गर्छ। |
| **Calendar Selection** | agent ले निरीक्षण गर्न सक्ने configured calendar हरू सीमित गर्छ। |
| **Calendar Connection Status** | हालका credential ले calendar र event हरू पढ्न सक्छन् कि सक्दैनन् पुष्टि गर्छ। |

calendar credential हरू agent लाई आवश्यक calendar हरूमा मात्र सीमित राख्नुहोस्। status ले expired token जनाएमा credential हरू पुन: connect वा rotate गर्नुहोस्।

## TextBee SMS सूचनाहरू {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 ले configured notification workflow हरूका लागि SMS provider का रूपमा TextBee थप्छ। SMS notification हरू संवेदनशील वा user-facing सन्देशहरूका लागि human approval gate हरूसँग जोडिनुपर्छ।

| फिल्ड | विवरण |
|---|---|
| **TextBee API Key** | TextBee SMS provider मा अनुरोधहरू प्रमाणीकरण गर्छ। |
| **TextBee Device / Sender** | provider ले आवश्यक गर्दा outgoing message हरूका लागि प्रयोग हुने TextBee sender वा device चयन गर्छ। |
| **SMS Notifications Enabled** | approved workflow हरूलाई text-message notification हरू पठाउन अनुमति दिन्छ। SMS पठाउन रोक्न disabled नै छोड्नुहोस्। |

test message प्रशासक-स्वामित्वको नम्बरमा मात्र पठाउनुहोस्, त्यसपछि scheduled वा attendee-facing reminder हरू सक्षम गर्नु अघि approval-gate व्यवहार पुष्टि गर्नुहोस्।

## सुविधा फ्ल्यागहरू {#feature-flags}

v1.9.0 मा पनि परिचय गराइएको, **सेटिङहरू → सुविधा फ्ल्यागहरू** ट्याबले optional functionality का लागि toggle switch हरू प्रदान गर्छ। प्रत्येक flag नेटवर्क-व्यापी रूपमा enabled वा disabled हुन्छ; यस समयमा per-site override छैन।

### सुविधा फ्ल्यागहरू पहुँच गर्ने {#accessing-feature-flags}

1. WordPress admin मा, **Gratis AI Agent → सेटिङहरू** मा जानुहोस्।
2. **सुविधा फ्ल्यागहरू** ट्याबमा क्लिक गर्नुहोस्।

### पहुँच नियन्त्रण फ्ल्यागहरू {#access-control-flags}

| फ्ल्याग | पूर्वनिर्धारित | विवरण |
|---|---|---|
| **Administrators मा सीमित गर्नुहोस्** | बन्द | सक्षम गर्दा, `administrator` भूमिका भएका प्रयोगकर्ताहरूले मात्र AI Agent च्याट प्यानल खोल्न सक्छन्। अन्य सबै भूमिकाले यसको सट्टा "आफ्नो administrator लाई सम्पर्क गर्नुहोस्" सन्देश देख्छन्। |
| **Network Admins मा सीमित गर्नुहोस्** | बन्द | multisite नेटवर्कमा सक्षम गर्दा, Super Admins ले मात्र agent प्रयोग गर्न सक्छन्। व्यक्तिगत site admins रोकिएका हुन्छन्। दुवै सक्षम भएमा "Administrators मा सीमित गर्नुहोस्" भन्दा प्राथमिकता लिन्छ। |
| **Subscriber पहुँच अनुमति दिनुहोस्** | बन्द | सक्षम गर्दा, `subscriber` भूमिका भएका प्रयोगकर्ताहरूले च्याट interface प्रयोग गर्न सक्छन् तर read-only क्षमतामा सीमित हुन्छन् (post सिर्जना वा settings परिवर्तन छैन)। |
| **Non-Members का लागि असक्षम गर्नुहोस्** | बन्द | Ultimate Multisite membership स्थितिसँग एकीकृत हुन्छ। सक्षम गर्दा, सक्रिय membership नभएका साइटहरूका लागि च्याट लुकाइन्छ। |

### ब्रान्डिङ फ्ल्यागहरू {#branding-flags}

| फ्ल्याग | पूर्वनिर्धारित | विवरण |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer लुकाउनुहोस्** | बन्द | च्याट widget को तल देखाइने ब्रान्डिङ attribution line हटाउँछ। white-label deployments का लागि सिफारिस गरिएको। |
| **कस्टम Agent नाम** | *(खाली)* | च्याट header र admin menu मा रहेको पूर्वनिर्धारित "Gratis AI Agent" label लाई तपाईंको आफ्नै product नामले प्रतिस्थापन गर्छ। पूर्वनिर्धारित प्रयोग गर्न खाली छोड्नुहोस्। |
| **Agent Picker लुकाउनुहोस्** | बन्द | सक्षम गर्दा, प्रयोगकर्ताहरूले पाँच built-in agents बीच स्विच गर्न सक्दैनन्। हालको agent Settings → General मा पूर्वनिर्धारित रूपमा configured गरिएको कुरामै स्थिर हुन्छ। |
| **च्याट Avatar का रूपमा साइट Icon प्रयोग गर्नुहोस्** | बन्द | च्याट widget header मा रहेको पूर्वनिर्धारित AI icon लाई WordPress साइट icon (Appearance → Customize → Site Identity अन्तर्गत सेट गरिएको) ले प्रतिस्थापन गर्छ। |

### स्वचालन सुरक्षा फ्ल्यागहरू {#automation-safety-flags}

Superdav AI Agent v1.18.0 ले अझ सुरक्षित स्वचालन चलानका लागि human approval gates र reminder records प्रस्तुत गर्छ। यी नियन्त्रणहरू installed package अनुसार feature flags वा advanced automation settings मा देखिन सक्छन्।

| फ्ल्याग | पूर्वनिर्धारित | विवरण |
|---|---|---|
| **मानवीय स्वीकृति आवश्यक** | सक्रिय राख्न सिफारिस | संवेदनशील स्वचालनहरूलाई authorised प्रयोगकर्ताले प्रस्तावित कार्य समीक्षा र पुष्टि नगरेसम्म रोक्छ। |
| **Reminder Deduplication** | सक्रिय | पठाइएका reminders रेकर्ड गर्छ ताकि retries वा scheduled runs ले duplicate notifications नपठाऊन्। |
| **Calendar Tools सक्षम गर्नुहोस्** | configure नभएसम्म बन्द | agent लाई configured Google calendars र events पढ्न अनुमति दिन्छ। |
| **SMS Notifications सक्षम गर्नुहोस्** | configure नभएसम्म बन्द | credentials सुरक्षित भएपछि approved workflows लाई TextBee SMS notifications पठाउन अनुमति दिन्छ। |

### परिवर्तनहरू लागू गर्दै {#applying-changes}

कुनै पनि फ्ल्याग toggle गरेपछि **Settings सुरक्षित गर्नुहोस्** क्लिक गर्नुहोस्। परिवर्तनहरू तुरुन्तै प्रभावकारी हुन्छन् — cache flush वा plugin reactivation आवश्यक छैन।
