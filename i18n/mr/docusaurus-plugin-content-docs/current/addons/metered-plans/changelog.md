---
title: वापर आधारित योजना बदलांचा इतिहास
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans Changelog

Version 1.1.0 - Released on 2026-05-05
- New: मल्टीसाइट सबसाइट्ससाठी AI टोकन बिलिंग — ग्राहकांच्या साइट्सवर AI टोकनचा वापर ट्रॅक करा आणि बिल करा, ज्यासाठी प्रति-टोकन दर (per-token rates) सेट करता येतात.
- New: कनेक्टर एन्फोर्समेंट (Connector enforcement) डायनॅमिक लिमिट डिस्कव्हरी (dynamic limit discovery) आणि write-through सह पुन्हा तयार केले आहे, ज्यामुळे सर्व कनेक्टरवर रिअल-टाइम अचूकता (real-time accuracy) राखली जाते.
- Fix: डेटाबेस टेबल अपग्रेड्स आता BerlinDB स्कीमा (schema) व्याख्येनुसार योग्यरित्या जुळतात, ज्यामुळे नवीन इन्स्टॉलेशनवर अपग्रेड अयशस्वी होणे (failure) थांबते.
- Fix: डेटाबेस अपग्रेड कॉल बॅक्स (callbacks) योग्य स्वरूपात रूपांतरित केले आहेत, ज्यामुळे शांत (silent) अपग्रेड अयशस्वी होणे (failures) सोडवले आहे.
- Fix: AI Usage Overage Markup इनपुट फील्डमध्ये आता अपूर्णांक मूल्ये (fractional values) स्वीकारली जातात.
- Fix: प्लगइन लोड करताना येणारे घातक त्रुटी (fatal errors) आणि डबल-इनीशियलायझेशन (double-initialization) समस्या सोडवल्या आहेत.
- Improved: `check-env` npm स्क्रिप्ट जोडली आहे, ज्यामुळे डेव्हलपर एनव्हायरन्मेंट (developer environments) पहिल्यांदा चालवल्यावर आपोआप कॉन्फिगर होतात.

### 1.0.3
* Plugin Update Checker v5 मध्ये अपडेट केले
* आधुनिक WordPress प्लगइन हेडर (headers) जोडले
* नवीनतम WordPress आवृत्त्यांशी सुसंगतता (compatibility) सुधारली
* वापर ट्रॅकिंगची कार्यक्षमता (performance) वाढवली

### 1.0.2
* बग फिक्स आणि कार्यक्षमता सुधारणा
* वापर अहवाल (usage reporting) सुधारित

### 1.0.0
* प्रारंभिक रिलीज
* मुख्य मीटर बिलिंग कार्यक्षमता
* वापर ट्रॅकिंग आणि ओव्हरएज गणना (overage calculation)
* स्वयंचलित इनव्हॉइस निर्मिती (Automatic invoice generation)
