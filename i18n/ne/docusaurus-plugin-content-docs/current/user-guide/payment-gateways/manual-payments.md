---
title: म्यानुअल भुक्तानी सेट अप गर्दै
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Payments सेटअप गर्ने (v2) {#setting-up-manual-payments-v2}

_**महत्त्वपूर्ण नोट: यो लेख Ultimate Multisite version 2.x सँग सम्बन्धित छ।**_

Manual payments तपाईंका प्रयोगकर्ताहरूका लागि **Stripe** वा **PayPal** उपलब्ध नभएमा अन्य भुक्तानी विधिहरू प्रस्ताव गर्ने तरिका हो। यो वायर वा बैंक ट्रान्सफर, वा तपाईंका प्रयोगकर्ताहरूलाई स्थानीय रूपमा उपलब्ध कुनै पनि अन्य भुक्तानी विधि हुन सक्छ।

## Manual Payments सक्षम गर्ने तरिका {#how-to-enable-manual-payments}

Manual payment सेटअप गर्न धेरै सजिलो छ। तपाईंले यसलाई payment gateways अन्तर्गत सक्षम गर्नुपर्छ र प्रयोगकर्ताले भुक्तानी कसरी पठाउनुपर्छ भन्ने विस्तृत निर्देशनहरू राख्नुपर्छ।

पहिले, **Ultimate Multisite > Settings > Payments** मा जानुहोस्। **Payment Gateways** तल, **Manual** अन गर्नुहोस्। तपाईंले आफ्नो लागि **Payment Instructions** बाकस देखा पर्ने देख्नुहुनेछ।

यस बाकसमा तपाईंको ग्राहकले भुक्तानी गर्न आवश्यक पर्ने जानकारी थप्नुहोस्। उदाहरणका लागि, यो तपाईंको बैंक खाता विवरण र तपाईंको इमेल हुन सक्छ, ताकि ग्राहकले तपाईंलाई भुक्तानी पुष्टि पठाउन सकून्।

![Payment Instructions टेक्स्ट क्षेत्रसहित Manual payment gateway टगल](/img/config/manual-gateway-expanded.png)

यहाँ manual gateway settings इन्टरफेस छ:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

सेटअप गरेपछि, **Save Settings** मा क्लिक गर्नुहोस् र काम सकिन्छ। प्रयोगकर्ताहरू तपाईंको network मा दर्ता हुँदा, उनीहरूले खरिद पूरा गर्न तपाईंका निर्देशनहरू प्राप्त गर्नेछन् भन्ने सन्देश देख्नेछन्।

![प्रयोगकर्ताले भुक्तानी निर्देशनहरू प्राप्त गर्नेछन् भनेर बताउने दर्ता पुष्टि सन्देश](/img/frontend/registration-manual-notice.png)

र उनीहरूले तपाईंको **Thank You** पृष्ठमा पनि तपाईंका भुक्तानी निर्देशनहरूसहितको सन्देश प्राप्त गर्नेछन्।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## manual payments पुष्टि गर्ने {#confirming-manual-payments}

Manual payment पुष्टि गर्न, बायाँ बारमा रहेको **Payments** मेनुमा जानुहोस्। त्यहाँ तपाईंले आफ्नो network का सबै भुक्तानीहरू र तिनका विवरणहरू, तिनको **status** सहित, देख्न सक्नुहुन्छ। Manual payment मा तपाईंले आफैं परिवर्तन नगरेसम्म सधैं **Pending** status रहनेछ।

![Pending manual payment देखाउने भुक्तानी सूची](/img/admin/payments-list.png)

**reference code** क्लिक गरेर भुक्तानी पृष्ठमा प्रवेश गर्नुहोस्। यस पृष्ठमा pending भुक्तानीका सबै विवरणहरू छन्, जस्तै reference ID, products, timestamps र थप।

![reference code, products, र totals देखाउने भुक्तानी विवरण पृष्ठ](/img/admin/payment-edit.png)

दायाँ स्तम्भमा, तपाईंले भुक्तानीको status परिवर्तन गर्न सक्नुहुन्छ। यसलाई **Completed** मा परिवर्तन गर्दा र **Activate Membership** विकल्प टगल गर्दा तपाईंको ग्राहकको site सक्षम हुनेछ र उनीहरूको membership सक्रिय हुनेछ।

![Status Completed मा सेट गरिएको र Activate Membership टगल भएको भुक्तानी सम्पादन पृष्ठ](/img/admin/payment-activate-membership.png)
