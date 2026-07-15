---
title: बहु-टेनेन्सी एकीकरण
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# बहु-भाडेदारी एकीकरण

Ultimate Multisite: Multi-Tenancy 1.2.0 ले सार्वभौम भाडेदारहरू, माइग्रेसन प्रमाणीकरण, र भाडेदार जीवनचक्र स्वचालनका लागि धेरै एकीकरण सम्पर्क-बिन्दुहरू परिवर्तन गर्छ।

## भाडेदार बुटस्ट्र्याप प्रवाह {#tenant-bootstrap-flow}

भाडेदारहरू सिर्जना वा परिमार्जन गर्ने एकीकरणहरूले यो क्रम पालना गर्नुपर्छ:

1. भाडेदार रजिस्ट्री अभिलेख र आइसोलेसन मोडेल समाधान गर्नुहोस्।
2. भाडेदार डेटाबेस लेखक सिर्जना वा प्रमाणीकरण गर्नुहोस्।
3. भाडेदार स्किमा बुटस्ट्र्याप गर्नुहोस्।
4. भाडेदार प्रयोगकर्ताहरू प्रावधान गर्नुहोस्।
5. भाडेदार राउटिङ र फाइलसिस्टम पथहरू दर्ता गर्नुहोस्।
6. भाडेदारलाई सार्वजनिक गर्नु अघि माइग्रेसन प्रमाणीकरण चलाउनुहोस्।

सार्वभौम भाडेदारले नेटवर्क डेटाबेस जडान पुन: प्रयोग गर्न सक्छ भनेर अनुमान नगर्नुहोस्। एडअनले प्रदान गरेका भाडेदार रजिस्ट्री र लेखक abstraction हरू प्रयोग गर्नुहोस्।

## SSO र REST हुकहरू {#sso-and-rest-hooks}

स्टेटलेस भाडेदार अटोलगइनले purpose claim, JTI replay protection, expiry cap, र origin pinning सहित छोटो-आयुका token हरू प्रयोग गर्छ। लगइन बटनहरू वा टाढाको व्यवस्थापन लिंकहरू थप्ने एकीकरणहरूले भाडेदार लगइन URL हरू प्रत्यक्ष रूपमा निर्माण गर्नुको सट्टा समर्थित SSO प्रवाहमार्फत भाडेदार भ्रमणहरू उत्पन्न गर्नुपर्छ।

नेटवर्क-पक्ष API अडिट घटनाहरू र दैनिक सारांशहरू सार्वभौम भाडेदार गेटवेहरूका लागि उपलब्ध छन्। भाडेदार जीवनचक्र endpoint हरू बोलाउने बाह्य प्रणालीहरू डिबग गर्दा ती लगहरू प्रयोग गर्नुहोस्।

## सार्वभौम ग्राहक कार्य URL हरू {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 ले account, checkout, billing, invoice, साइट, template-switching, र domain-mapping प्रवाहहरूका लागि सार्वभौम-भाडेदार ग्राहक कार्यहरू मुख्य साइटतर्फ फिर्ता रुट गर्छ। भाडेदार-पक्ष व्यवस्थापन लिंकहरू रेन्डर गर्ने एकीकरणहरूले ती कार्यहरू मुख्य-साइट ग्राहक प्यानलतर्फ देखाउनुपर्छ र कार्य पूरा गरेपछि प्रयोगकर्ता भाडेदारमा फर्कन सक्षम हुनुपर्ने अवस्थामा प्रमाणीकरण गरिएको return target समावेश गर्नुपर्छ।

क्रस-डोमेन व्यवस्थापन लिंकहरूका लागि core SSO wrapper प्रयोग गर्नुहोस्:

```php
$url = wu_with_sso($main_site_customer_url);
```

उत्पन्न URL `wu_sso_url` मार्फत अझै filterable रहन्छ, जसले SSO URL, हालको प्रयोगकर्ता, लक्षित साइट ID, र redirect context प्राप्त गर्छ। एडअनहरूले Ultimate Multisite को token validation सुरक्षित राख्दै provider-specific context थप्न वा broker URL प्रतिस्थापन गर्न त्यो filter प्रयोग गर्न सक्छन्।

सार्वभौम भाडेदारभित्र membership, invoice, billing-address, template, वा domain-management state नक्कल नगर्नुहोस्। भाडेदार Dashboard लाई launcher र मुख्य-साइट ग्राहक प्यानललाई managed actions का लागि system of record का रूपमा व्यवहार गर्नुहोस्।

## माइग्रेसन प्रमाणीकरण {#migration-verification}

माइग्रेसन वा जीवनचक्र एकीकरणले भाडेदार डेटा परिवर्तन गरेपछि, प्रमाणीकरण गेटहरू चलाउनुहोस्:

- `wp tenant verify-no-legacy --site=<site-id>` ले भाडेदार अब legacy network-side paths मा निर्भर छैन भनेर पुष्टि गर्छ।
- `wp tenant verify-sovereign-push --site=<site-id>` ले sovereign push jobs प्रशोधन र drain हुन सक्छन् भनेर पुष्टि गर्छ।

एकीकरणहरूले असफल प्रमाणीकरणलाई deployment blocker का रूपमा लिनुपर्छ र असफलता समाधान नभएसम्म भाडेदारलाई live भनेर चिन्ह लगाउनबाट बच्नुपर्छ।

## भाडेदार मेटाउने {#tenant-deletion}

मेटाउने प्रवाहहरूले addon teardown path बोलाउनुपर्छ ताकि भाडेदार डेटाबेस credentials सफा गरिन्छन्। बाह्य एकीकरणहरूले teardown सफल भएपछि provider resources हटाउन सक्छन्, तर verification वा async push jobs अझै चलिरहेका बेला host databases वा folders मेटाउनु हुँदैन।

## Deprecated database router {#deprecated-database-router}

Legacy `Database_Router` लाई deprecation stub ले प्रतिस्थापन गरेको छ। नयाँ एकीकरणहरूले पुरानो router class मा निर्भर हुनुको सट्टा current site router र tenant registry APIs मार्फत भाडेदारहरू समाधान गर्नुपर्छ।
