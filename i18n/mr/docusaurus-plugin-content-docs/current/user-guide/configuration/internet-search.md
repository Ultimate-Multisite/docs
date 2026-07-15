---
title: इंटरनेट शोध
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# इंटरनेट सर्च (Internet Search)

Gratis AI Agent v1.5.0 मध्ये **इंटरनेट सर्च** ही क्षमता जोडली आहे, ज्यामुळे AI असिस्टंटला संभाषणादरम्यान वेबवरून अद्ययावत माहिती मिळवता येते. हे [Brave Search API](https://brave.com/search/api/) किंवा [Tavily API](https://tavily.com/) द्वारे कार्य करते.

## हे कसे कार्य करते (How It Works) {#how-it-works}

जेव्हा इंटरनेट सर्च सक्षम (enabled) केले जाते, तेव्हा असिस्टंटला आपोआप तुमच्या कॉन्फिगर केलेल्या सर्च प्रदात्याला (search provider) क्वेरी (query) करण्याची क्षमता मिळते. जेव्हा त्याला वाटते की प्रश्नासाठी सध्याची किंवा बाह्य माहिती आवश्यक आहे — उदाहरणार्थ, ताज्या बातम्या, थेट किंमत (live pricing), किंवा अशी दस्तऐवजीकरण (documentation) जी मॉडेलच्या ट्रेनिंग कटऑफनंतर बदलली असेल — तेव्हा हे होते.

परिणाम (Results) रिअल-टाइममध्ये मिळवले जातात आणि प्रतिसाद (response) तयार करण्यापूर्वी ते असिस्टंटच्या कॉन्टेक्स्टमध्ये (context) समाविष्ट केले जातात. असिस्टंटने प्रश्नाचे उत्तर देण्यासाठी सर्च निकालांचा वापर केला आहे, हे तो दर्शवतो.

## इंटरनेट सर्च सक्षम करणे (Enabling Internet Search) {#enabling-internet-search}

इंटरनेट सर्चसाठी तुमच्या निवडलेल्या सर्च प्रदात्याकडून API की (API key) आवश्यक आहे. ते कॉन्फिगर करण्यासाठी:

1. **Gratis AI Agent → Settings → Advanced** येथे जा.
2. **Internet Search Provider** ड्रॉपडाउन शोधा आणि **Brave Search** किंवा **Tavily** यापैकी एक निवडा.
3. संबंधित फील्डमध्ये तुमचा API की प्रविष्ट करा. प्रत्येक फील्डच्या बाजूला साइन-अप लिंक्स (Sign-up links) दिसतील.
4. **Save Settings** वर क्लिक करा.

की सेव्ह होताच, इंटरनेट सर्चची क्षमता आपोआप असिस्टंटसाठी उपलब्ध होते.

## Brave Search {#brave-search}

### Brave Search API की मिळवणे (Obtaining a Brave Search API Key) {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) ला भेट द्या.
2. एका प्लॅनसाठी साइन अप करा. मासिक विनंती मर्यादेसह (monthly request limit) एक मोफत टियर (free tier) उपलब्ध आहे.
3. Brave Search developer dashboard कडून तुमचा API की कॉपी करा.
4. तो Gratis AI Agent च्या सेटिंग्जमधील **Brave Search API Key** फील्डमध्ये पेस्ट करा.

### वापराच्या मर्यादा (Usage Limits) {#usage-limits}

Brave Search द्वारे केलेल्या क्वेरीच्या (queries) संख्येवर आधारित वापर बिल केला जातो. प्रत्येक AI प्रतिसाद जो सर्च ट्रिगर करतो, तो एक क्वेरी मानला जातो. अनपेक्षित शुल्क टाळण्यासाठी [Brave Search developer dashboard](https://brave.com/search/api/) मध्ये तुमचा वापर (usage) तपासा.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 मध्ये **Tavily** हा पर्यायी इंटरनेट सर्च प्रदाता जोडला गेला आहे, जो अधिक समृद्ध सर्च परिणाम आणि प्रगत संशोधन क्षमता (advanced research capabilities) देतो.

### Tavily API की मिळवणे (Obtaining a Tavily API Key) {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) ला भेट द्या.
2. एका खात्यासाठी साइन अप करा. मासिक विनंती मर्यादेसह (monthly request limit) एक मोफत टियर (free tier) उपलब्ध आहे.
3. Tavily dashboard कडून तुमचा API की कॉपी करा.
4. तो Gratis AI Agent च्या सेटिंग्जमधील **Tavily API Key** फील्डमध्ये पेस्ट करा.

### वापराच्या मर्यादा (Usage Limits) {#usage-limits-1}

Tavily द्वारे केलेल्या API कॉलच्या (API calls) संख्येवर आधारित वापर बिल केला जातो. प्रत्येक AI प्रतिसाद जो सर्च ट्रिगर करतो, तो एक कॉल मानला जातो. अनपेक्षित शुल्क टाळण्यासाठी [Tavily dashboard](https://tavily.com/) मध्ये तुमचा वापर तपासा.

## इंटरनेट सर्च अक्षम करणे (Disabling Internet Search) {#disabling-internet-search}

सक्रिय सर्च प्रदाता फील्डमधून API की काढून टाका आणि सेव्ह करा. इंटरनेट सर्चची क्षमता आता असिस्टंटला दिली जाणार नाही.

:::note
इंटरनेट सर्चमुळे प्रतिसादात (responses) विलंब (latency) होतो, कारण उत्तर तयार करण्यापूर्वी असिस्टंटला सर्च निकालांची प्रतीक्षा करावी लागते. वेळेवर संवेदनशील वापराच्या प्रकरणांसाठी (time-sensitive use cases), विचार करा की रिअल-टाइम सर्च आवश्यक आहे की असिस्टंटचे अंगभूत ज्ञान (built-in knowledge) पुरेसे आहे.
:::
