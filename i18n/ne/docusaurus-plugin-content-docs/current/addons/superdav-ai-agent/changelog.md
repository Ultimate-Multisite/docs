---
title: परिवर्तन लग
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# परिवर्तनलग

## 1.18.0 — २०२६-०६-२९ मा जारी

### नयाँ

- **Google Calendar उपकरणहरू** — तालिका-सचेत स्वचालनहरूका लागि कन्फिगर गरिएका क्यालेन्डरहरू र घटनाहरू पढ्नुहोस्
- **सम्पर्क म्यापिङ र सहभागी सहायकहरू** — क्यालेन्डर सहभागीहरूलाई साइटका प्रयोगकर्ता र सम्पर्कहरूसँग मिलाउनुहोस्
- **मानवीय अनुमोदन गेटहरू र रिमाइन्डर अभिलेखहरू** — समीक्षाका लागि स्वचालनहरू रोक्नुहोस् र दोहोरिएका सूचनाहरूबाट बच्नुहोस्
- **TextBee SMS प्रदायक** — TextBee मार्फत कन्फिगर गरिएका पाठ-सन्देश सूचनाहरू पठाउनुहोस्
- **उन्नत सहायक प्याकेज** — WordPress.org निर्माणबाट अलग रूपमा वितरित विश्वसनीय-विकासकर्ता फाइल प्रणाली, डाटाबेस, WP-CLI, REST डिस्प्याचर, plugin निर्माणकर्ता, git स्न्यापसट, प्रयोगकर्ता-व्यवस्थापन, र बेन्चमार्क उपकरणहरू थप्नुहोस्

### सुधारिएको

- **व्यवस्थित Superdav सेवा सेटअप** — समर्थित साइटहरूका लागि होस्ट गरिएका सेवा endpointहरू र स्वचालित जडान प्रावधान थप्नुहोस्
- **रिलिज प्याकेजिङ** — अलग core र उन्नत ZIPहरू निर्माण गर्नुहोस्, दुवै GitHub मा प्रकाशित गर्नुहोस्, र WordPress.org मा core प्याकेज मात्र पठाउनुहोस्

### सच्याइएको

- **AI अनुरोध विश्वसनीयता** — model चयन, अनुरोध timeoutहरू, पूर्वनिर्धारित सेटअप model, reasoning-text ह्यान्डलिङ, र अमान्य उपकरण कलहरूका लागि पुनःप्रयास मार्गदर्शन सुधार गर्नुहोस्
- **क्यालेन्डर र रिमाइन्डर सुदृढीकरण** — Google Calendar tokenहरू र रिमाइन्डर deduplication बलियो बनाउनुहोस्
- **Onboarding र अनुमोदन पुनःसुरुहरू** — frontend onboarding सुरुवातहरू र पुष्टि गरिएका ability पुनःसुरुहरू सच्याउनुहोस्
- **WordPress.org प्याकेजिङ समीक्षा समस्याहरू** — core रिलिजका लागि प्याकेजिङ समीक्षा प्रतिक्रियालाई सम्बोधन गर्नुहोस्

## 1.16.0 — २०२६-०५-२० मा जारी

### नयाँ

- **Logo SVG उत्पन्न गर्ने ability** — Theme Builder ले अब namespace-सुरक्षित sanitisation सहित custom logo SVGहरू उत्पन्न र embed गर्न सक्छ
- **खोज अन्तर्वार्तामा फोटो अपलोड** — Theme Builder खोज अन्तर्वार्तामा अब समृद्ध design सन्दर्भका लागि फोटो अपलोड चरण समावेश छ
- **Palette Contrast प्रमाणीकरण गर्ने ability** — theme मा लागू गर्नुअघि WCAG अनुपालनका लागि रङ जोडीहरू जाँच गर्नुहोस्
- **Hospitality मेनुहरू** — Theme Builder ले अब hospitality व्यवसायहरूका लागि संरचित खाना र पेय मेनु पृष्ठहरू उत्पन्न गर्न सक्छ
- **Desktop र mobile preview rendering** — design-direction चयनका क्रममा desktop र mobile यन्त्रहरूमा आफ्नो design preview गर्नुहोस्
- **Navigation label parameter** — Create Menu ability ले अब पृष्ठ शीर्षकबाट अलग छुट्टै `navigation_label` समर्थन गर्छ
- **Tier 1 उपकरण उपलब्धता** — sd-ai-agent/site-scrape अब Theme Builder मा पूर्वनिर्धारित रूपमा उपलब्ध Tier 1 उपकरण हो

### सच्याइएको

- **AI Client cache** — अब cross-request persistence का लागि transients द्वारा समर्थित छ, जसले लामो समय चल्ने agent कार्यहरूमा डेटा क्षति रोक्छ
- **Plugin पङ्क्ति action linkहरू** — स्पष्टताका लागि सच्याइयो र पुनःनामकरण गरियो

## 1.10.0 — २०२६-०५-०५ मा जारी

### नयाँ

- **Tavily internet खोज** — Brave Search सँगै अझ समृद्ध internet खोज नतिजाहरूका लागि Tavily लाई खोज प्रदायकका रूपमा थप्नुहोस्
- **Theme-सचेत built-in skillहरू** — Block Themes, Classic Themes, Kadence Blocks, र Kadence Theme skill मार्गदर्शिकाहरू अब plugin सँगै आउँछन्
- **Site builder सम्पर्क फारम ability** — chat interface बाटै कुनै पनि पृष्ठमा सम्पर्क फारम थप्नुहोस्

### सुधारिएको

- **WooCommerce एकीकरण पुनर्संरचित** — अब राम्रो विश्वसनीयता र अनुकूलताका लागि native WooCommerce APIs प्रयोग गर्छ
- **प्रदायक सूची स्वचालित रूपमा refresh हुन्छ** — कुनै पनि plugin सक्रिय वा निष्क्रिय हुँदा

### सच्याइएको

- **navigate-to ability** — केही admin पृष्ठहरूमा अनन्त reload loop सच्याइयो
- **list-posts ability** — अब category र tag नामहरूलाई slugहरूमा सही रूपमा resolve गर्छ
- **WP-CLI commandहरू** — अघिल्लो refactor पछि हराएका namespace aliasहरू पुनर्स्थापित गरियो
- **Event automation** — automation tableहरू अझै सिर्जना नभएका साइटहरूलाई सहज रूपमा ह्यान्डल गर्छ
- **memory-save ability** — अब system instruction builder मा सही namespace prefix प्रयोग गर्छ
- **Scalar tool results** — अब AI मा फर्काउनु अघि सही रूपमा wrapped गरिन्छ
- **Usage statistics** — अब पुराना संस्करणहरूबाट upgrade गर्दा legacy ability key format सही रूपमा ह्यान्डल गर्छ
