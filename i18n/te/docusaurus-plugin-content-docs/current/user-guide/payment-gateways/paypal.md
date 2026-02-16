---
title: PayPal సెటప్ చేయడం
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway సెటప్ చేయడం (v2)

_**ముఖ్యమైన గమనిక: ఈ ఆర్టికల్ Ultimate Multisite వెర్షన్ 2.x గురించి వివరిస్తుంది.**_

మా payment settings పేజీలో మీరు నాలుగు చెల్లింపు పద్ధతులను యాక్టివేట్ చేయవచ్చు: Stripe, Stripe Checkout, PayPal మరియు Manual. ఈ ఆర్టికల్‌లో, **PayPal** తో ఎలా ఇంటిగ్రేట్ చేయాలో చూద్దాం.

Stripe లాగానే, PayPal కూడా ఆన్‌లైన్ చెల్లింపులకు విస్తృతంగా ఉపయోగించబడుతుంది, ముఖ్యంగా WordPress వెబ్‌సైట్లలో. మీ నెట్‌వర్క్‌లో PayPal ని చెల్లింపు పద్ధతిగా ఎలా ఉపయోగించాలో ఈ ఆర్టికల్ మీకు గైడ్ చేస్తుంది.

ఈ ఇంటిగ్రేషన్ కోసం అవసరమైన API credential పొందడానికి మీకు **PayPal Business account** ఉండాలని గమనించండి.

## మీ నెట్‌వర్క్‌లో PayPal ని ఎనేబుల్ చేయడం

మీ నెట్‌వర్క్‌లో PayPal ని అందుబాటులో ఉన్న చెల్లింపు పద్ధతిగా ఎనేబుల్ చేయడానికి, **Ultimate Multisite > Settings > Payments** ట్యాబ్‌కు వెళ్లి PayPal పక్కన ఉన్న బాక్స్‌ను టిక్ చేయండి.

![Active payment gateways లో PayPal ని ఎనేబుల్ చేయడం](/img/config/settings-payment-gateways.png)

## PayPal API credentials పొందడం

PayPal ని payment gateway గా ఎనేబుల్ చేసిన తర్వాత, PayPal API **Username**, PayPal API **Password** మరియు PayPal API **Signature** ఫీల్డ్‌లను నింపాలి.

మీ PayPal [Live](https://www.paypal.com/home) లేదా [Sandbox](https://www.sandbox.paypal.com/home) అకౌంట్‌లోకి లాగిన్ అవడం ద్వారా మీరు వీటిని పొందవచ్చు.

(చెల్లింపులను టెస్ట్ చేయడానికి మరియు gateway సరిగ్గా సెటప్ అయిందో చూడటానికి మీరు **sandbox mode** ని ఉపయోగించవచ్చని గుర్తుంచుకోండి. సంబంధిత సెక్షన్‌ను టోగుల్ ఆన్ చేయండి.)

![PayPal API credentials ఫీల్డ్‌లు మరియు sandbox mode టోగుల్](/img/config/settings-payment-gateways.png)

మీ PayPal అకౌంట్ కోసం API Signature లేదా Certificate credentials రిక్వెస్ట్ చేయడానికి:

  1. మీ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) కు వెళ్లండి.

  2. **API access** సెక్షన్‌లో, **Update** క్లిక్ చేయండి.  
![API access సెక్షన్ తో PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** కింద, **Manage API credentials** క్లిక్ చేయండి.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * మీరు ఇప్పటికే API Signature లేదా Certificate జనరేట్ చేసి ఉంటే, మీ credentials కనుగొనగల పేజీకి మీరు redirect అవుతారు.

     * _**గమనిక:** మీ PayPal అకౌంట్‌ను వెరిఫై చేయమని ప్రాంప్ట్ వస్తే, స్క్రీన్‌పై ఉన్న సూచనలను అనుసరించండి._

  4. కింది ఆప్షన్లలో _ఒకటి_ ఎంచుకుని, **Agree and Submit** క్లిక్ చేయండి.

     * **Request API Signature** – API Signature authentication కోసం ఎంచుకోండి.

     * **Request API Certificate** – API Certificate authentication కోసం ఎంచుకోండి.

  5. PayPal మీ API credentials ను ఈ విధంగా జనరేట్ చేస్తుంది:  
![PayPal జనరేట్ చేసిన API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** లో API Username, API Password మరియు Signature ఉంటాయి, ఇవి ఎక్స్‌పైర్ అవ్వవు. అదనపు భద్రత కోసం ఈ విలువలు డిఫాల్ట్‌గా దాచబడి ఉంటాయి. వాటిని ఆన్ మరియు ఆఫ్ చేయడానికి **Show/Hide** క్లిక్ చేయండి. పూర్తయినప్పుడు, **Done** క్లిక్ చేయండి.

     * **API Certificate credentials** లో API Username, API Password మరియు Certificate ఉంటాయి, ఇవి మూడు సంవత్సరాల తర్వాత ఆటోమేటిక్‌గా ఎక్స్‌పైర్ అవుతాయి. API Certificate ను మీ డెస్క్‌టాప్‌కు సేవ్ చేయడానికి **Download Certificate** క్లిక్ చేయండి.

అంతే, మీ PayPal payment integration పూర్తయింది!

PayPal settings గురించి మీకు ఏవైనా ప్రశ్నలు ఉంటే, PayPal యొక్క [Help Center](https://www.paypal.com/br/smarthelp/home) ను చూడవచ్చు.
