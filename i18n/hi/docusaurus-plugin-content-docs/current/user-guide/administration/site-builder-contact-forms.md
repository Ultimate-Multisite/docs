---
title: साइट बिल्डर संपर्क फ़ॉर्म
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms

Superdav AI Agent v1.10.0 Site Builder agent का उपयोग करके सीधे चैट इंटरफ़ेस से contact forms बनाने की सुविधा जोड़ता है। इससे आपको चैट छोड़े बिना किसी भी पेज पर पूरी तरह से काम करने वाले contact forms जोड़ने की अनुमति मिलती है।

## Overview {#overview}

Site Builder contact form ability (`create_contact_form`) स्वचालित रूप से आपके इंस्टॉल किए गए form plugin का पता लगाता है और उस plugin की native क्षमताओं का उपयोग करके एक contact form बनाता है। समर्थित form plugins में शामिल हैं:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

सहायक (assistant) स्वचालित रूप से आपकी साइट पर उपलब्ध सर्वश्रेष्ठ form plugin का चयन करता है और उस plugin के अनुसार एक contact form उत्पन्न करता है।

## Creating a Contact Form {#creating-a-contact-form}

Site Builder का उपयोग करके contact form बनाने के लिए:

1. WordPress admin में **Gratis AI Agent** चैट पैनल खोलें।
2. चैट हेडर में एजेंट आइकन पर क्लिक करके **Site Builder** एजेंट पर स्विच करें।
3. उस contact form का वर्णन करें जिसे आप बनाना चाहते हैं। उदाहरण के लिए:

   > "Contact page पर name, email, message, और phone number फ़ील्ड के साथ एक contact form जोड़ें।"

   या बस:

   > "Contact page के लिए एक contact form बनाएं।"

4. Site Builder contact form उत्पन्न करेगा और एम्बेड करने के लिए एक shortcode वापस करेगा।

## Using the Generated Shortcode {#using-the-generated-shortcode}

Site Builder द्वारा contact form बनाने के बाद, यह एक shortcode वापस करता है (उदाहरण के लिए, `[contact-form-7 id="123"]`)। आप यह कर सकते हैं:

1. **इसे किसी पेज या पोस्ट में एम्बेड करें** — shortcode को कॉपी करें और इसे ब्लॉक एडिटर या क्लासिक एडिटर का उपयोग करके किसी भी पेज या पोस्ट में पेस्ट करें।
2. **Site Builder के माध्यम से इसे जोड़ें** — Site Builder से कहें कि वह स्वचालित रूप से फॉर्म को किसी विशिष्ट पेज पर जोड़ दे:

   > "Contact page पर contact form जोड़ें।"

3. **इसे किसी टेम्पलेट में उपयोग करें** — यदि आप PHP से परिचित हैं, तो आप shortcode को एक थीम टेम्पलेट फ़ाइल में जोड़ सकते हैं।

## Customizing the Contact Form {#customizing-the-contact-form}

Site Builder द्वारा contact form बनाने के बाद, आप इसे और अधिक कस्टमाइज़ कर सकते हैं:

### Via the Chat Interface {#via-the-chat-interface}

Site Builder से फॉर्म को संशोधित करने के लिए कहें:

> "contact form को अपडेट करें ताकि एक subject फ़ील्ड जुड़ जाए और message फ़ील्ड को required बनाया जा सके।"

Site Builder फॉर्म को अपडेट करेगा और अपडेटेड shortcode वापस करेगा।

### Via the Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

आप अपने form plugin की सेटिंग्स में भी सीधे फॉर्म को कस्टमाइज़ कर सकते हैं:

1. WordPress admin में **Contact Form 7** (या आपके इंस्टॉल किए गए form plugin) पर जाएं।
2. Site Builder द्वारा बनाए गए फॉर्म को ढूंढें।
3. आवश्यकतानुसार फॉर्म फ़ील्ड, सत्यापन नियम (validation rules), और ईमेल सूचनाएं (email notifications) संपादित करें।

## Form Plugins and Compatibility {#form-plugins-and-compatibility}

Site Builder स्वचालित रूप से पता लगाता है कि आपकी साइट पर कौन सा form plugin इंस्टॉल है और contact form बनाने के लिए उसका उपयोग करता है। यदि कई form plugins इंस्टॉल हैं, तो Site Builder उन्हें इस क्रम में प्राथमिकता देता है:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

यदि इनमें से कोई भी plugin इंस्टॉल नहीं है, तो Site Builder contact form बनाने से पहले एक इंस्टॉल करने की सिफारिश करेगा।

## Email Notifications {#email-notifications}

Site Builder द्वारा बनाए गए contact forms डिफ़ॉल्ट रूप से साइट एडमिनिस्ट्रेटर को ईमेल सूचनाएं भेजने के लिए कॉन्फ़िगर किए जाते हैं। आप प्राप्तकर्ता ईमेल पते और सूचना संदेश को कस्टमाइज़ कर सकते हैं:

1. अपने form plugin के admin interface पर जाएं।
2. Site Builder द्वारा बनाए गए फॉर्म को ढूंढें।
3. ईमेल सूचना सेटिंग्स को संपादित करें।

विस्तृत निर्देशों के लिए, अपने form plugin के दस्तावेज़ीकरण (documentation) देखें:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases {#example-use-cases}

### Simple Contact Form {#simple-contact-form}

> "name, email, और message फ़ील्ड के साथ एक साधारण contact form बनाएं।"

### Multi-Step Form {#multi-step-form}

> "contact information के लिए पहले चरण और message और preferred contact method के लिए दूसरे चरण के साथ एक contact form बनाएं।"

### Form with Conditional Logic {#form-with-conditional-logic}

> "एक contact form बनाएं जो ड्रॉपडाउन में उपयोगकर्ता के चयन के आधार पर अलग-अलग फ़ील्ड दिखाए।"

### Form with File Upload {#form-with-file-upload}

> "एक contact form बनाएं जो उपयोगकर्ताओं को फ़ाइल या अटैचमेंट अपलोड करने की अनुमति दे।"

:::note
Contact form creation Superdav AI Agent v1.10.0 और उसके बाद उपलब्ध है। इस सुविधा का उपयोग करने के लिए Site Builder agent सक्रिय होना चाहिए।
:::
