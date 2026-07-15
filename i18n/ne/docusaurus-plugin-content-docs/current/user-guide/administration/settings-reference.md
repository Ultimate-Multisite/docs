---
title: सेटिङ्स सन्दर्भ
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# सेटिङ्स सन्दर्भ

यो पृष्ठले दैनिक प्रशासन र Ultimate Multisite मा हालैका व्यवहार परिवर्तनहरूलाई असर गर्ने सेटिङ्स ट्र्याक गर्छ।

## अन्य विकल्पहरू {#other-options}

**अन्य विकल्पहरू** क्षेत्र **Ultimate Multisite > Settings > Login & Registration** अन्तर्गत देखिन्छ।

| सेटिङ | वर्णन |
|---|---|
| **Jumper सक्षम गर्नुहोस्** | admin क्षेत्रमा Jumper द्रुत नेभिगेसन उपकरण देखाउँछ। यसलाई Ultimate Multisite स्क्रिनहरू, नेटवर्क वस्तुहरू, र समर्थित admin गन्तव्यहरूमा सिधै जान प्रयोग गर्नुहोस्। यदि तपाईं यो सर्टकट देखिन नचाहनुहुन्छ भने यसलाई असक्षम गर्नुहोस्। |

## त्रुटि रिपोर्टिङ र टेलिमेट्री {#error-reporting-and-telemetry}

अघिल्लो त्रुटि-रिपोर्टिङ opt-in सेटिङ सेटिङ्स पृष्ठबाट हटाइएको छ। गुमनाम टेलिमेट्री असक्षम छ र यसलाई सक्षम गर्ने कुनै UI toggle छैन।

यदि तपाईं सेटिङ्स पृष्ठका लागि आन्तरिक runbooks वा screenshots कायम राख्नुहुन्छ भने, पुरानो त्रुटि-रिपोर्टिङ opt-in field का सन्दर्भहरू हटाउनुहोस् ताकि प्रशासकहरूले अब उपस्थित नभएको सेटिङ नखोजून्।

## आयात/निर्यात सेटिङ्स {#importexport-settings}

**Import/Export** सेटिङ्स tab ले यसले नियन्त्रण गर्ने सेटिङ्स वर्णन गर्छ र site तथा network archives का लागि सिधै **Ultimate Multisite > Site Export** मा लिंक गर्छ। आयात/निर्यात कन्फिगरेसनका लागि सेटिङ्स tab प्रयोग गर्नुहोस्, single-site निर्यात/आयात workflow का लागि **Tools > Export & Import** प्रयोग गर्नुहोस्, र तपाईंलाई पूर्ण Network Export archive चाहिँदा Site Export उपकरण प्रयोग गर्नुहोस्।

## Domain Seller HostAfrica ब्यालेन्स चेतावनी {#domain-seller-hostafrica-balance-warning}

जब Domain Seller addon HostAfrica सँग जडान हुन्छ, network प्रशासकहरूले अब reseller account balance विश्वसनीय domain registration वा renewal processing का लागि धेरै कम हुँदा dismiss गर्न मिल्ने balance-low चेतावनी देख्छन्।

यो सूचनालाई सञ्चालनसम्बन्धी चेतावनीका रूपमा लिनुहोस्: थप paid domain registrations स्वीकार गर्नु अघि HostAfrica reseller balance top up गर्नुहोस्, त्यसपछि registrations र renewals सामान्य रूपमा जारी रहन सक्छन् भनेर पुष्टि गर्न Domain Seller सेटिङ्स वा domain-monitoring स्क्रिनमा फर्कनुहोस्।

## AI provider connector सेटिङ्स {#ai-provider-connector-settings}

AI provider connector सेटिङ्सले अब समर्थित OAuth account pools मात्र देखाउँछन्:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | OAuth button मार्फत एक वा बढी Anthropic Max accounts जडान गर्नुहोस्। sandboxed browser ले redirect स्वतः पूरा गर्न नसक्दा manual OAuth fallback प्रयोग गर्नुहोस्। |
| **OpenAI ChatGPT/Codex** | उही OAuth pool workflow मार्फत ChatGPT accounts जडान गर्नुहोस्। account जडान भएपछि Connector-supported operations ले ChatGPT Codex tool calls प्रयोग गर्न सक्छन्। |
| **Google AI Pro** | OAuth मार्फत Google AI Pro accounts जडान गर्नुहोस्, त्यसपछि account list तुरुन्तै update भएन भने connector refresh गर्नुहोस्। |

Cursor Pro अब समर्थित provider होइन। Cursor Pro setup fields वा connector paths उल्लेख गर्ने पुराना आन्तरिक screenshots, runbooks, वा onboarding steps हटाउनुहोस्।

provider accounts थप्दा वा हटाउँदा, refresh वा delete गरिने account का लागि मान्य email address प्रविष्ट गर्नुहोस् र connector-backed operations परीक्षण गर्नु अघि provider settings save गर्नुहोस्।
