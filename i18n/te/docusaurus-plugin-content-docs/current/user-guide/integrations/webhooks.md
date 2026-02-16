---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) పై మొదటి పరిచయం

_**గమనిక: ఈ ఫీచర్ లేదా ఆర్టికల్ అధునాతన వినియోగదారుల కోసం.**_

**Webhook** అనేది Ultimate Multisite వంటి యాప్ లేదా సాఫ్ట్‌వేర్ ఇతర అప్లికేషన్‌లకు నిజ-సమయ సమాచారాన్ని అందించే మార్గం. Webhook డేటా లేదా payloads ను ఇతర అప్లికేషన్‌లకు జరిగినప్పుడే అందిస్తుంది, అంటే మీకు **డేటా వెంటనే అందుతుంది.**

ఒక ఈవెంట్ ట్రిగ్గర్ అయినప్పుడల్లా Ultimate Multisite నుండి మరొక CRM లేదా సిస్టమ్‌కు నిర్దిష్ట డేటాను ఇంటిగ్రేట్ చేయడానికి లేదా పంపడానికి ఇది సహాయపడుతుంది. ఉదాహరణకు, కొత్త యూజర్ అకౌంట్ సృష్టించబడినప్పుడల్లా యూజర్ పేరు మరియు ఇమెయిల్ అడ్రస్‌ను మెయిలింగ్ లిస్ట్‌కు పంపాలి.

## Webhook ఎలా సృష్టించాలి

Webhook సృష్టించడానికి, మీ network admin dashboard కు వెళ్ళండి. **Ultimate Multisite > Webhooks > Add New Webhook** పై క్లిక్ చేయండి.

![Add New Webhook బటన్‌తో Webhooks లిస్ట్ పేజీ](/img/admin/webhooks-list.png)

కొత్త webhook సృష్టించేటప్పుడు **Name, URL,** మరియు **Event** వంటి సమాచారం అడగబడుతుంది. మీ webhook కోసం మీకు నచ్చిన ఏ పేరైనా ఉపయోగించవచ్చు. అత్యంత ముఖ్యమైన ఫీల్డ్‌లు URL మరియు Event.

![Name, URL మరియు Event ఫీల్డ్‌లతో కొత్త webhook ఫారమ్](/img/admin/webhooks-list.png)

URL అనేది Ultimate Multisite **payload లేదా డేటా** పంపే **endpoint లేదా గమ్యస్థానం**. ఇది డేటాను స్వీకరించే అప్లికేషన్.

3rd party అప్లికేషన్‌లతో ఇంటిగ్రేషన్‌ను సులభతరం చేయడానికి వినియోగదారులు ఎక్కువగా ఉపయోగించే పరిష్కారం Zapier. Zapier వంటి ప్లాట్‌ఫామ్ లేకుండా, డేటాను క్యాచ్ చేసి ప్రాసెస్ చేసే కస్టమ్ ఫంక్షన్‌ను మీరు మాన్యువల్‌గా సృష్టించాలి. **Zapier తో Ultimate Multisite webhook ఎలా ఉపయోగించాలో** ఈ ఆర్టికల్ చూడండి.

ఈ ఆర్టికల్‌లో, webhook ఎలా పని చేస్తుందనే ప్రాథమిక భావన మరియు Ultimate Multisite లో అందుబాటులో ఉన్న ఈవెంట్‌లను చూద్దాం. [requestbin.com](https://requestbin.com/) అనే 3rd party సైట్‌ను ఉపయోగిస్తాము. ఈ సైట్ ఎటువంటి కోడింగ్ చేయకుండానే endpoint సృష్టించి payload ను క్యాచ్ చేయడానికి అనుమతిస్తుంది. _**నిరాకరణ: ఇది డేటా స్వీకరించబడిందని మాత్రమే చూపిస్తుంది.**_ Payload పై ఎటువంటి ప్రాసెసింగ్ లేదా చర్య జరగదు.

[requestbin.com](https://requestbin.com/) కు వెళ్లి Create Request Bin పై క్లిక్ చేయండి.

![RequestBin వెబ్‌సైట్ Create Request Bin బటన్](/img/admin/webhooks-list.png)

ఆ బటన్ క్లిక్ చేసిన తర్వాత, మీకు ఇప్పటికే అకౌంట్ ఉంటే లాగిన్ చేయమని లేదా సైన్ అప్ చేయమని అడుగుతుంది. మీకు ఇప్పటికే అకౌంట్ ఉంటే నేరుగా వారి dashboard కు తీసుకెళ్తుంది. వారి dashboard లో, మీ Ultimate Multisite webhook సృష్టించడంలో ఉపయోగించగల endpoint లేదా URL వెంటనే కనిపిస్తుంది.

![Endpoint URL చూపిస్తున్న RequestBin dashboard](/img/admin/webhooks-list.png)

URL కాపీ చేసి Ultimate Multisite కు తిరిగి వెళ్ళండి. URL ఫీల్డ్‌లో endpoint పెట్టి dropdown నుండి ఒక event ఎంచుకోండి. ఈ ఉదాహరణలో, మేము **Payment Received** ఎంచుకుంటాము.

యూజర్ పేమెంట్ చేసినప్పుడల్లా ఈ event ట్రిగ్గర్ అవుతుంది. అందుబాటులో ఉన్న అన్ని events, వాటి వివరణ మరియు payloads పేజీ దిగువన జాబితా చేయబడ్డాయి. Webhook సేవ్ చేయడానికి **Add New Webhook** బటన్ క్లిక్ చేయండి.

![Payment Received event తో కాన్ఫిగర్ చేయబడిన Webhook](/img/admin/webhooks-list.png)

మనం సృష్టించిన webhook పని చేస్తుందో లేదో చూడటానికి ఇప్పుడు endpoint కు టెస్ట్ event పంపవచ్చు. మనం సృష్టించిన webhook కింద **Send Test Event** క్లిక్ చేయడం ద్వారా ఇది చేయవచ్చు.

![Webhook కింద Send Test Event ఆప్షన్](/img/admin/webhooks-list.png)

టెస్ట్ విజయవంతమైందని చెప్పే నిర్ధారణ విండో కనిపిస్తుంది.

![Webhook టెస్ట్ event విజయవంతమైన నిర్ధారణ](/img/admin/webhooks-list.png)

ఇప్పుడు _Requestbin_ సైట్‌కు తిరిగి వెళ్తే, కొంత టెస్ట్ డేటా కలిగిన payload స్వీకరించబడిందని చూస్తాము.

![స్వీకరించిన webhook payload డేటా చూపిస్తున్న RequestBin](/img/admin/webhooks-list.png)

Webhook మరియు endpoints ఎలా పని చేస్తాయనే ప్రాథమిక సూత్రం ఇది. మీరు కస్టమ్ endpoint సృష్టించాలనుకుంటే, Ultimate Multisite నుండి మీరు స్వీకరించే డేటాను ప్రాసెస్ చేయడానికి కస్టమ్ ఫంక్షన్ సృష్టించాలి.
