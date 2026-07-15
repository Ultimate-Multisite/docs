---
title: 'पाठ ९: नाफाका लागि मूल्य निर्धारण'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# पाठ ९: नाफाका लागि मूल्य निर्धारण

पाठ ५ मा हामीले FitSite योजनाहरूका लागि प्रारम्भिक मूल्यहरू सेट गरेका थियौँ। अब हामी राजस्व बढाउने, अपग्रेडलाई प्रोत्साहन गर्ने, र churn घटाउने प्रविधिहरूसहित मूल्य निर्धारण रणनीतिलाई परिष्कृत गर्छौँ।

## हामी कहाँ रोकिएका थियौँ {#where-we-left-off}

FitSite मा योजनाहरू, टेम्प्लेटहरू, checkout, branding, र onboarding तयार छन्। प्रारम्भिक मूल्य प्रति महिना $49/$99/$199 थियो। अब हामी त्यो मूल्य निर्धारणलाई अझ प्रभावकारी बनाउँछौँ।

## निच प्लेटफर्महरूका लागि मूल्य निर्धारणका सिद्धान्तहरू {#pricing-principles-for-niche-platforms}

### लागतमा होइन, मूल्यमा मूल्य निर्धारण गर्नुहोस् {#price-on-value-not-cost}

तपाईंको hosting लागत प्रति ग्राहक साइट $5-$15 हुन सक्छ। यसको अर्थ तपाईंको मूल्य $20 हुनुपर्छ भन्ने होइन। तपाईं hosting बेचिरहनुभएको छैन। तपाईं बेचिरहनुभएको छ:

- अनुकूल रूपमा बनाउन $2,000-$5,000 लाग्ने व्यावसायिक fitness वेबसाइट
- उनीहरूले सोच्न नपर्ने निरन्तर maintenance, updates, र security
- generic builders ले नदिने niche-specific features
- उनीहरूको industry का लागि बनेको प्लेटफर्मको विश्वसनीयता

यसलाई उपलब्ध गराउने लागतका आधारमा होइन, तपाईंले दिने मूल्यका आधारमा मूल्य निर्धारण गर्नुहोस्।

### विकल्पहरूसँग तुलना गराउनुहोस् {#anchor-to-alternatives}

जब fitness studio owner ले FitSite मूल्याङ्कन गर्छ, उनीहरूले यसलाई यीसँग तुलना गर्छन्:

- **वेब developer नियुक्त गर्नु**: सुरुमा $2,000-$5,000 + $50-$100/महिना maintenance
- **Wix/Squarespace**: $16-$45/महिना तर fitness-specific features छैनन्, उनीहरूले आफैँ बनाउँछन्
- **केही नगर्नु**: online भेट्न नसक्ने हराएका members

$49-$199/महिनामा, FitSite developer भन्दा सस्तो, generic builders भन्दा सक्षम, र वेबसाइट नै नहुनुभन्दा असीमित रूपमा राम्रो छ।

## मूल्य विविधताहरू कार्यान्वयन {#implementing-price-variations}

वार्षिक मूल्य निर्धारणले प्रतिबद्धता प्रोत्साहित गर्छ र churn घटाउँछ। प्रत्येक योजनाको **Price Variations** ट्याबमा जानुहोस् र वार्षिक विकल्पहरू थप्नुहोस्:

| योजना | मासिक | वार्षिक (प्रति महिना) | वार्षिक कुल | बचत |
|------|---------|-------------------|--------------|---------|
| Starter | $49/महिना | $39/महिना | $468/वर्ष | 20% छुट |
| Growth | $99/महिना | $79/महिना | $948/वर्ष | 20% छुट |
| Pro | $199/महिना | $159/महिना | $1,908/वर्ष | 20% छुट |

तपाईंको checkout form मा **Period Selection** field थप्नुहोस् ताकि ग्राहकहरूले मासिक र वार्षिक billing बीच toggle गर्न सकून्। [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) हेर्नुहोस्।

### वार्षिक मूल्य निर्धारण किन काम गर्छ {#why-annual-pricing-works}

- **तपाईंका लागि**: upfront cash, कम churn (वार्षिक रूपमा भुक्तानी गर्ने ग्राहकहरूले बीच अवधिमा cancel गर्ने सम्भावना कम हुन्छ)
- **उनीहरूका लागि**: वास्तविक बचत, budget predictability

## Setup Fees {#setup-fees}

hands-on configuration समावेश भएका योजनाहरूका लागि एकपटकको setup fee विचार गर्नुहोस्:

- **Starter**: setup fee छैन (प्रवेशका बाधाहरू हटाउनुहोस्)
- **Growth**: $99 setup fee (custom domain configuration र प्रारम्भिक consultation समेट्छ)
- **Pro**: $299 setup fee (multi-location setup र onboarding call समेट्छ)

प्रत्येक योजनाको pricing section मा setup fees configure गर्नुहोस्। विवरणका लागि [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) हेर्नुहोस्।

## Trial Periods {#trial-periods}

trial प्रस्ताव गर्दा signup friction घट्छ तर non-conversion को जोखिम आउँछ। FitSite का लागि:

- Starter plan मा मात्र **7-day free trial**
- Growth र Pro मा trial छैन (यी ग्राहकहरू बढी प्रतिबद्ध हुन्छन् र भुक्तानी गर्ने अपेक्षा राख्छन्)

Starter plan को pricing section मा **Offer Trial** toggle enable गरेर र duration 7 days सेट गरेर trial configure गर्नुहोस्।

### Trials लाई convert गराउने {#making-trials-convert}

trial तब मात्र काम गर्छ जब ग्राहकले trial period भित्र मूल्य अनुभव गर्छ। तपाईंको onboarding sequence (पाठ ८) यहाँ महत्वपूर्ण छ -- welcome emails 7-day window भित्र engagement बढाउने गरी समय मिलाइएका हुनुपर्छ।

## Discount Codes {#discount-codes}

विशिष्ट उद्देश्यहरूका लागि रणनीतिक discount codes बनाउनुहोस्:

- **FITLAUNCH** -- पहिलो 3 महिनामा 30% छुट (launch promotion का लागि)
- **ANNUAL20** -- annual plans मा 20% छुट (पहिले नै discounted नभएमा)
- **REFERRAL** -- 1 महिना निःशुल्क (customer referrals का लागि)

यी बनाउन **Ultimate Multisite > Discount Codes** मा जानुहोस्। पूर्ण guide का लागि [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) हेर्नुहोस्।

:::tip Default रूपमा discount नगर्नुहोस्
Discounts रणनीतिक tools हुनुपर्छ, स्थायी fixtures होइन। यदि सबैले discount पाउँछन् भने, त्यो discount होइन -- त्यो तपाईंको वास्तविक मूल्य हो। तिनलाई specific campaigns, referrals, र time-limited promotions का लागि प्रयोग गर्नुहोस्।
:::

## Tax Handling {#tax-handling}

यदि तपाईं tax collection आवश्यक पर्ने jurisdiction मा सञ्चालन गर्नुहुन्छ भने:

1. **Ultimate Multisite > Settings > Taxes** मा tax rates configure गर्नुहोस्
2. तपाईंका योजनाहरूमा tax categories apply गर्नुहोस्
3. invoices ले tax सही रूपमा देखाउँछन् भन्ने सुनिश्चित गर्नुहोस्

विस्तृत configuration का लागि [Tax Handling](/user-guide/payment-gateways/tax-handling) हेर्नुहोस्। यदि तपाईं अन्तर्राष्ट्रिय रूपमा ग्राहकहरूलाई सेवा दिनुहुन्छ भने, EU compliance का लागि [VAT addon](/addons/vat) विचार गर्नुहोस्।

## तपाईंको मूल्य निर्धारण समीक्षा {#reviewing-your-pricing}

launch पछि, प्रत्येक quarter मा pricing पुनः हेर्नुहोस्। यी कुराहरू हेर्नुहोस्:

- **योजनाअनुसार conversion rate**: यदि Starter राम्रो convert हुन्छ तर Growth हुँदैन भने, तिनीहरूबीचको gap धेरै ठूलो हुन सक्छ
- **Upgrade rate**: यदि थोरै ग्राहक मात्र Starter बाट Growth मा upgrade गर्छन् भने, Growth plan ले पर्याप्त अतिरिक्त मूल्य नदिएको हुन सक्छ
- **योजनाअनुसार churn**: यदि annual customers कम churn हुन्छन् भने, annual pricing लाई अझ जोड दिनुहोस्
- **Competitor pricing**: विकल्पहरूले कति charge गरिरहेका छन्? तपाईं सही रूपमा positioned हुनुहुन्छ?

## अहिलेसम्मको FitSite Network {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## यो पाठमा हामीले के निर्माण गर्‍यौँ {#what-we-built-this-lesson}

- प्रतिबद्धतालाई प्रोत्साहन गर्न २०% छुटसहित **वार्षिक मूल्य निर्धारण**
- प्रारम्भिक व्यवस्था प्रयास समेट्न उच्च तहहरूमा **सेटअप शुल्कहरू**
- दर्ताको अवरोध घटाउन प्रवेश-स्तर योजनामा **परीक्षण अवधि**
- सुरुवात, सिफारिसहरू, र अभियानहरूका लागि **रणनीतिक छुट कोडहरू**
- नियमअनुसार बिलिङका लागि **कर कन्फिगरेसन**
- निरन्तर अनुकूलनका लागि **मूल्य निर्धारण समीक्षा ढाँचा**

---

**अर्को:** [पाठ १०: सुरुवात दिवस](lesson-10-launch) -- सुरुवातअघि जाँचसूची र प्रत्यक्ष सञ्चालनमा जाने।
