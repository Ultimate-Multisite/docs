---
title: म्यानुअल भुक्तानी सेट अप गर्ने
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# म्यानुअल भुक्तानी सेट अप गर्ने (v2)

_**महत्वपूर्ण नोट: यो लेख Ultimate Multisite संस्करण 2.x मा आधारित छ।**_

म्यानुअल भुक्तानी भनेको यदि तपाईंका प्रयोगकर्ताहरूका लागि **Stripe** वा **PayPal** उपलब्ध छैन भने तपाईंले अन्य भुक्तानी विधिहरू प्रदान गर्ने तरिका हो। यो कुनै तार (wire) वा बैंक ट्रान्सफर वा स्थानीय रूपमा प्रयोग गर्न सकिने कुनै पनि अन्य भुक्तानी विधि हुन सक्छ।

## म्यानुअल भुक्तानी कसरी सक्षम गर्ने

म्यानुअल भुक्तानी सेट अप गर्नु एकदमै सजिलो छ। तपाईंले यसलाई payment gateways अन्तर्गत सक्षम गर्न र प्रयोगकर्ताहरूले कसरी भुक्तानी पठाउने भन्ने बारे विस्तृत निर्देशनहरू राख्नु मात्र आवश्यक छ।

सबैभन्दा पहिले, **Ultimate Multisite > Settings > Payments** मा जानुहोस्। **Payment Gateways** को तल, **Manual** लाई अन गर्नुहोस्। तपाईंले एउटा **Payment Instructions** बक्स देख्नुहुनेछ।

यस बक्समा आफ्नो ग्राहकलाई भुक्तानी गर्न आवश्यक जानकारी थप्नुहोस्। यसमा तपाईंको बैंक खाता विवरण र तपाईंको इमेल समावेश हुन सक्छ ताकि ग्राहकले तपाईंलाई भुक्तानी पुष्टि पठाउन सकून्, उदाहरणका लागि।

![Payment Instructions text area with Manual payment gateway toggle](/img/config/manual-gateway-expanded.png)

यहाँ म्यानुअल गेटवे सेटिङ्स इन्टरफेस छ:

![Manual gateway settings interface](/img/config/manual-gateway-settings.png)

सेट अप गरेपछि, केवल **Save Settings** मा क्लिक गर्नुहोस् र काम सकियो। जब प्रयोगकर्ताहरू तपाईंको नेटवर्कमा दर्ता गर्छन्, उनीहरूले खरिद पूरा गर्नका लागि तपाईंको निर्देशनहरू प्राप्त हुनेछ भन्ने सन्देश देख्नेछन्।

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

र उनीहरूलाई तपाईंको **Thank You** पेजमा पनि तपाईंको भुक्तानी निर्देशनहरू सहित एउटा सन्देश प्राप्त हुनेछ।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## म्यानुअल भुक्तानी पुष्टि गर्ने

मैनुअल भुक्तानी कन्फर्म गर्न, बायाँ पट्टीमा रहेको **Payments** मेनुमा जानुहोस्। त्यहाँ तपाईंले आफ्नो नेटवर्कका सबै भुक्तानी र तिनीहरूको विवरणहरू, जसमा तिनीहरूको **status** पनि देख्न सक्नुहुन्छ। तपाईंले त्यसलाई आफैं परिवर्तन नगर्दासम्म कुनै पनि मैनुअल भुक्तानीको status सधैं **Pending** नै रहनेछ।

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** मा क्लिक गरेर भुक्तानी पेजमा जानुहोस्। यस पेजमा तपाईंले रेफरेंस ID, उत्पादनहरू, टाइमस्ट्याम्प र अरू जस्ता सबै जानकारी देख्न सक्नुहुन्छ जुन भुक्तानी पेंडिङ छ।

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

दायाँ स्तम्भमा, तपाईंले भुक्तानीको status परिवर्तन गर्न सक्नुहुन्छ। यसलाई **Completed** मा परिवर्तन गरेर र **Activate Membership** विकल्पलाई टोगल (toggle) गर्दा ग्राहकको साइट सक्रिय हुन्छ र उहाँको सदस्यता सक्रिय हुन्छ।

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
