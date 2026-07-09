---
title: जापियर एकीकरण
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# अल्टीमेट मल्टिसिटलाई Zapier सँग एकीकृत गर्ने {#integrating-ultimate-multisite-with-zapier}

एउटा लेखमा, हामीले [Webhooks](webhooks.md) को बारेमा छलफल गरेका थियौं र तिनीहरूलाई तेस्रो पक्षका एपहरूसँग कसरी प्रयोग गर्न सकिन्छ भन्नेबारे पनि कुरा गरेका थियौं।

वेबहूक (webhooks) प्रयोग गर्नु अलि जटिल हुन्छ किनभने यसको लागि कोडिंग र पेलोड (payloads) समात्ने उन्नत ज्ञान चाहिन्छ। **Zapier** प्रयोग गर्नु त्यसलाई सजिलो बनाउने एउटा तरिका हो।

Zapier मा ५००० भन्दा बढी एपहरूसँग एकीकरण उपलब्ध छ जसले विभिन्न एपहरू बीचको सञ्चारलाई सजिलो बनाउँछ।

तपाईंले **Triggers** बनाउन सक्नुहुन्छ जुन तपाईंको नेटवर्कमा घटनाहरू हुँदा सक्रिय हुन्छन् (जस्तै खाता सिर्जना भएपछि `account_create` घटना ट्रिगर गर्दछ) वा बाह्य घटनाहरूको प्रतिक्रियामा आफ्नो नेटवर्कमा **Actions** उत्पन्न गर्न सक्नुहुन्छ (जस्तै तपाईंको Ultimate Multisite नेटवर्कमा नयाँ खाता सदस्यता सिर्जना गर्ने)।

यो सम्भव छ किनभने **Ultimate Multisite Zapier का triggers र actions** [REST API](https://developer.ultimatemultisite.com/api/docs/) द्वारा संचालित हुन्छन्।

## कसरी सुरु गर्ने {#how-to-start}

सबैभन्दा पहिले, Zapier एप सूचीमा Ultimate Multisite खोज्नुहोस्। वैकल्पिक रूपमा, तपाईं [यस लिंक](https://zapier.com/apps/wp-ultimo/integrations) मा क्लिक गर्न सक्नुहुन्छ।

तपाईंको ड्यासबोर्डमा जानुहोस् र नयाँ Zap सेट गर्न बायाँ साइडबारमा **+** **Create Zap** बटन थिच्नुहोस्।

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

तपाईंलाई Zap सिर्जना पृष्ठमा पुनर्निर्देशित गरिनेछ।

खोज बक्समा "wp ultimo" टाइप गर्नुहोस्। **Beta** संस्करण विकल्प छान्ने गरी क्लिक गर्नुहोस्।

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

हाम्रो एप चयन गरेपछि, उपलब्ध घटना छान्नुहोस्: **New Ultimate Multisite Event**।

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

अब हामीले Zapier लाई **तपाईंको नेटवर्कमा** पहुँच दिनुपर्छ। **Sign in** मा क्लिक गर्दा **API credentials** आवश्यक पर्ने नयाँ विन्डो खुल्नेछ।

![API credentials को साइन इन करने का ज़ैपियर प्रॉम्प्ट](/img/admin/webhooks-list.png)

तपाईंको नेटवर्क एडमिन प्यानलमा जानुहोस् र **Ultimate Multisite > Settings** > **API & Webhooks** मा जानुहोस् र API सेटिङ्स सेक्सन हेर्नुहोस्।

यो कनेक्शन काम गर्न आवश्यक भएकोले, **Enable API** विकल्प चयन गर्नुहोस्।

![API र वेबहुक्स सेटिङहरू, API सेटिङ र Enable API विकल्प सहित](/img/admin/settings-api-webhooks.png)

API Key र API Secret फिल्डमा रहेको **Copy to Clipboard** आइकन प्रयोग गरेर ती मानहरू कपि गर्नुहोस् र त्यसलाई इन्टिग्रेशन स्क्रिनमा पेस्ट गर्नुहोस्।

URL फिल्डमा, प्रोटोकल (HTTP वा HTTPS) सहित आफ्नो नेटवर्कको पूरा URL राख्नुहोस्।

![API Key, Secret र URL फिल्ड भएको ज़ैपियर इन्टिग्रेशन स्क्रिन](/img/admin/webhooks-list.png)

अर्को चरणमा जानको लागि **Yes, Continue** बटन क्लिक गर्नुहोस्। यदि सबै ठीक भयो भने, तपाईंले आफ्नो नयाँ कनेक्टेड खाता देख्नुहुनेछ! नयाँ ट्रिगर बनाउन **Continue** मा क्लिक गर्नुहोस्।

## नयाँ Trigger कसरी बनाउने {#how-to-create-a-new-trigger}

अब तपाईंको खाता कनेक्ट भएकोले तपाईंले उपलब्ध घटनाहरू हेर्न सक्नुहुन्छ। यस ट्यूटोरियलका लागि हामी **payment_received** घटना रोजौं।

![ज़ैपियर ट्रिगरमा payment_received घटना चयन गर्दै](/img/admin/webhooks-list.png)

एक पटक घटना चयन भएपछि र तपाईंले **continue** मा क्लिक गरेपछि, एउटा **test step** देखिनेछ।

![ट्रिगरको लागि ज़ैपियर टेस्ट स्टेप](/img/admin/webhooks-list.png)

यस चरणमा, Zapier ले आफ्नो Zap ले त्यो घटनाको लागि **विशिष्ट payload फेला पार्न सक्ने** परीक्षण गर्छ। एउटै प्रकारका भविष्यका घटनाहरूमा पनि यो संरचना भएको जानकारी पठाइनेछ।

![payload सहित ज़ैपियर ट्रिगर टेस्ट सफलतापूर्वक पूरा भयो](/img/admin/webhooks-list.png)

हा हाम्रो ट्युटोरियलमा टेस्ट सफलतापूर्वक पूरा भयो र पेलोडको उदाहरण जानकारी फिर्ता आयो। यो उदाहरण जानकारीले हामीलाई कुनै पनि action बनाउँदा मार्गदर्शन गर्न उपयोगी हुनेछ। तपाईंको trigger अब सिर्जना भइसकेको छ र अन्य applications सँग जोड्न तयार छ।

## Actions कसरी बनाउने {#how-to-create-actions}

Actions ले आफ्ना network मा नयाँ प्रविष्टिहरू सिर्जना गर्नका लागि अन्य triggers बाट जानकारी प्रयोग गर्दछ।

**action step बनाउँदा**, तपाईंले Ultimate Multisite **Beta** र **Create Items on Ultimate Multisite** को विकल्प रोज्नुहुनेछ।

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

अर्को चरणमा, तपाईंले **How to start** मा हामीले गरेको जस्तै आफ्नो authentication बनाउन सक्नुहुन्छ वा पहिले नै बनाएको authentication चयन गर्न सक्नुहुन्छ। यस ट्युटोरियलमा हामी पहिले नै बनाएको authentication रोज्नेछौं।

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action सेटअप गर्ने {#setting-up-the-action}

यो **action को मुख्य चरण** हो र यहाँ कुराहरू अलि फरक छन्। तपाईंले पहिलो जानकारीको रूपमा **Item** छान्नुहुनेछ। Item भनेको तपाईंको network को **जानकारीको ढाँचा (information model)** हो जस्तै **Customers, Payments, Sites, Emails** र अरू।

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

कुनै पनि item चयन गर्दा, form ले चयनित item का लागि आवश्यक र वैकल्पिक फिल्डहरू ल्याउनका लागि आफूलाई मिलाउँछ।

उदाहरणका लागि, **Customer** item चयन गर्दा, form फिल्डहरूले network मा नयाँ Customer बनाउनको लागि भर्न आवश्यक सबै कुरा ल्याउनेछ।

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

सबै **required** चिन्ह लगाइएका फिल्डहरू भर्ने र continue मा क्लिक गरेपछि, अन्तिम स्क्रिनले तपाईंलाई भरेका फिल्डहरू र खाली रहेका फिल्डहरू देखाउनेछ।

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

जतिबेला तपाईंको परीक्षण पूरा हुन्छ र सफल हुन्छ, तपाईंको कार्य (action) सेट भइसकेको हुन्छ। तपाईंले आफ्नो नेटवर्कमा पनि जाँच गर्नु महत्त्वपूर्ण छ कि त्यो आइटम तपाईंको कार्यको परीक्षणबाट सिर्जना गरिएको हो कि होइन।
