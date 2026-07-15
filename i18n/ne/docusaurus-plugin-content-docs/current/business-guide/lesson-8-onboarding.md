---
title: 'पाठ ८: ग्राहक अभिमुखीकरण'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# पाठ ८: ग्राहक Onboarding

ग्राहकलाई साइन अप गराउनु कामको आधा भाग मात्र हो। यदि उनीहरू लग इन गर्छन्, अलमलिन्छन्, र कहिल्यै फर्कँदैनन् भने, तपाईंले उनीहरूलाई गुमाउनुभयो। यो पाठले नयाँ साइनअपलाई सक्रिय, संलग्न ग्राहकमा बदल्ने अनुभव डिजाइन गर्छ।

## हामी कहाँ रोकिएका थियौँ {#where-we-left-off}

FitSite काम गर्ने checkout प्रवाहसहित पूर्ण रूपमा branded छ। अब हामी fitness studio मालिकले साइनअप पूरा गरेपछि र पहिलो पटक आफ्नो नयाँ साइटमा पुगेपछि के हुन्छ भन्नेमा ध्यान दिन्छौँ।

## Onboarding किन महत्त्वपूर्ण छ {#why-onboarding-matters}

साइनअपपछि पहिलो ३० मिनेटले ग्राहक रहन्छ कि छोड्छ भन्ने निर्धारण गर्छ। यस्तो fitness studio मालिक जो:

- लग इन गर्छ र पहिले नै fitness website जस्तो देखिने साइट देख्छ → रहन्छ
- अब के गर्ने भनेर ठ्याक्कै जान्दछ → रहन्छ
- सामान्य WordPress dashboard मा हराएको महसुस गर्छ → छोड्छ

तपाईंका niche templates (पाठ ४) ले पहिलो बुँदा सम्हाल्छन्। यो पाठले दोस्रो बुँदा सम्हाल्छ।

## पहिलो Login अनुभव {#the-first-login-experience}

### स्वागत Dashboard Widget {#welcome-dashboard-widget}

नयाँ ग्राहकहरूलाई अभिवादन गर्ने र setup मार्फत मार्गदर्शन गर्ने custom dashboard widget बनाउनुहोस्। उनीहरूले पहिलो पटक लग इन गर्दा यो प्रमुख रूपमा देखिनुपर्छ।

**FitSite Quick Start:**

1. **आफ्नो studio नाम र logo थप्नुहोस्** -- Customizer वा Site Identity settings मा लिंक
2. **आफ्नो class schedule अपडेट गर्नुहोस्** -- Classes page editor मा सिधै लिंक
3. **आफ्ना trainers थप्नुहोस्** -- Trainers page editor मा लिंक
4. **आफ्ना contact details सेट गर्नुहोस्** -- Contact page editor मा लिंक
5. **आफ्नो साइट preview गर्नुहोस्** -- frontend मा लिंक

हरेक चरण सम्बन्धित page वा setting मा सिधै लिंक हुन्छ। menu हरूमा खोजिरहनु पर्दैन।

### Dashboard सरल बनाउनुहोस् {#simplify-the-dashboard}

नयाँ ग्राहकहरूले हरेक WordPress menu item देख्न आवश्यक छैन। विचार गर्नुहोस्:

- fitness site management सँग सम्बन्धित नभएका menu items लुकाउने (जस्तै, प्रयोग नगरिएमा Comments)
- धेरै प्रयोग हुने items पहिलो राख्न menu पुनःक्रमबद्ध गर्ने
- niche का लागि अर्थ लाग्ने custom menu labels थप्ने ("Appearance" को सट्टा "Your Studio")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon ले ग्राहकहरूले के देख्छन् नियन्त्रण गर्न मद्दत गर्न सक्छ।

## स्वागत Email Sequence {#welcome-email-sequence}

एउटा मात्र स्वागत email पर्याप्त हुँदैन। ग्राहकहरूलाई उनीहरूको पहिलो हप्ताभरि मार्गदर्शन गर्ने sequence सेट अप गर्नुहोस्:

### Email 1: स्वागत (साइनअपपछि तुरुन्तै) {#email-1-welcome-immediately-after-signup}

- Subject: "FitSite मा स्वागत छ -- तपाईंको studio website live छ"
- Content: Login link, quick start steps, help resources को link
- Tone: उत्साहित, प्रोत्साहनपूर्ण, fitness-specific

### Email 2: Quick Wins (दिन १) {#email-2-quick-wins-day-1}

- Subject: "आफ्नो FitSite मा पहिले गर्नुपर्ने ३ कुरा"
- Content: आफ्नो logo थप्नुहोस्, homepage hero image अपडेट गर्नुहोस्, आफ्नो class schedule थप्नुहोस्
- कहाँ click गर्ने भनेर ठ्याक्कै देखाउने screenshots समावेश गर्नुहोस्

### Email 3: Make It Yours (दिन ३) {#email-3-make-it-yours-day-3}

- Subject: "आफ्नो fitness site अलग देखाउनुहोस्"
- Content: colors customize गर्नुहोस्, trainer photos थप्नुहोस्, आफ्नो studio story लेख्नुहोस्
- platform मा रहेका उत्कृष्ट fitness sites का examples मा link

### Email 4: Go Live (दिन ७) {#email-4-go-live-day-7}

- Subject: "आफ्नो FitSite संसारसँग share गर्न तयार हुनुहुन्छ?"
- Content: share गर्नु अघि verify गर्नुपर्ने कुराहरूको checklist, custom domain कसरी connect गर्ने (Growth/Pro मा भएमा), social sharing tips

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## सहायता Resources {#help-resources}

fitness studio मालिकहरूले वास्तवमै सोध्ने प्रश्नहरूको उत्तर दिने niche-specific help content बनाउनुहोस्:

### Knowledge Base Articles {#knowledge-base-articles}

- "आफ्नो class schedule कसरी अपडेट गर्ने"
- "trainer profiles थप्ने र edit गर्ने"
- "आफ्नो studio को logo र colors परिवर्तन गर्ने"
- "आफ्नो domain name connect गर्ने" (Growth/Pro ग्राहकहरूका लागि)
- "आफ्नो साइटमा booking widget थप्ने"

यी non-technical users का लागि लेख्नुहोस्। screenshots प्रयोग गर्नुहोस्। WordPress jargon नचलाउनुहोस्।

### Video Walkthroughs {#video-walkthroughs}

देखाउने छोटा (२-३ मिनेट) screen recordings:

- पहिलो login र orientation
- homepage edit गर्ने
- class schedule अपडेट गर्ने
- नयाँ trainer थप्ने

यी अत्यन्त polished productions हुनुपर्दैन। स्पष्ट, सहयोगी, र niche-specific हुनु नै महत्त्वपूर्ण हो।

## Account Page {#the-account-page}

Ultimate Multisite मा ग्राहक-facing [Account Page](/user-guide/client-management/account-page) समावेश छ जहाँ ग्राहकहरूले आफ्नो subscription manage गर्छन्। यसलाई customize गर्नुहोस् ताकि:

- उनीहरूको हालको FitSite plan देखियोस्
- fitness-specific benefits सहित upgrade options देखियोस्
- billing history र invoice downloads उपलब्ध होस्
- help resources मा link होस्

## Onboarding सफलता मापन {#measuring-onboarding-success}

तपाईंको onboarding काम गरिरहेको छ कि छैन जान्न यी indicators track गर्नुहोस्:

- **Activation rate**: पहिलो हप्ताभित्र कति प्रतिशत signups ले वास्तवमै आफ्नो साइट customize गर्छन्?
- **First-week logins**: नयाँ ग्राहकले आफ्नो पहिलो हप्तामा कति पटक लग इन गर्छ?
- **नयाँ ग्राहकहरूबाट support tickets**: उच्च मात्रा भनेको तपाईंको onboarding मा gaps छन्
- **Trial-to-paid conversion**: यदि तपाईं trials offer गर्नुहुन्छ भने, कति प्रतिशत convert हुन्छन्?

## अहिलेसम्मको FitSite Network {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## यो पाठमा हामीले बनायौँ {#what-we-built-this-lesson}

- Quick Start widget सहित **मार्गदर्शित first-login अनुभव**
- fitness site management tasks मा केन्द्रित **सरल dashboard**
- ग्राहकहरूलाई उनीहरूको पहिलो हप्ताभरि मार्गदर्शन गर्ने **स्वागत email sequence**
- non-technical fitness studio मालिकहरूका लागि लेखिएका **niche-specific help resources**
- अनुभव track र improve गर्न **Onboarding metrics**

---

**अर्को:** [पाठ ९: नाफाका लागि मूल्य निर्धारण](lesson-9-pricing) -- हामी आम्दानी अधिकतम बनाउन र churn न्यूनतम गर्न मूल्य निर्धारण रणनीतिलाई परिष्कृत गर्छौँ।
