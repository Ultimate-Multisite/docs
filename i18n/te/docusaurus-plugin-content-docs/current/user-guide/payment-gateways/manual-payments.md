---
title: మాన్యువల్ చెల్లింపులను సెటప్ చేయడం
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# మాన్యువల్ పేమెంట్లను సెటప్ చేయడం (v2)

_**ముఖ్యమైన గమనిక: ఈ ఆర్టికల్ Ultimate Multisite వెర్షన్ 2.x గురించి చెప్తుంది.**_

మీ యూజర్లకు **Stripe** లేదా **PayPal** అందుబాటులో లేకపోతే, ఇతర పేమెంట్ మెథడ్స్ అందించడానికి మాన్యువల్ పేమెంట్లు ఒక మార్గం. ఇది వైర్ లేదా బ్యాంక్ ట్రాన్స్‌ఫర్ కావచ్చు, లేదా మీ యూజర్లకు స్థానికంగా అందుబాటులో ఉన్న ఏదైనా ఇతర పేమెంట్ మెథడ్ కావచ్చు.

## మాన్యువల్ పేమెంట్లను ఎనేబుల్ చేయడం ఎలా

మాన్యువల్ పేమెంట్ సెటప్ చేయడం చాలా సులభం. మీరు పేమెంట్ గేట్‌వేస్ కింద దీన్ని ఎనేబుల్ చేసి, యూజర్ పేమెంట్ ఎలా పంపాలో వివరమైన సూచనలు రాయాలి.

మొదట, **Ultimate Multisite > Settings > Payments** కి వెళ్ళండి. **Payment Gateways** కింద, **Manual** ను టోగుల్ చేసి ఆన్ చేయండి. మీకు **Payment Instructions** బాక్స్ కనిపిస్తుంది.

ఈ బాక్స్‌లో మీ కస్టమర్‌కు పేమెంట్ చేయడానికి అవసరమైన సమాచారం జోడించండి. ఉదాహరణకు, మీ బ్యాంక్ అకౌంట్ వివరాలు మరియు మీ ఇమెయిల్ ఇవ్వవచ్చు, తద్వారా కస్టమర్ మీకు పేమెంట్ కన్ఫర్మేషన్ పంపగలరు.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

సెటప్ చేసిన తర్వాత, **Save Settings** పై క్లిక్ చేయండి, అంతే! యూజర్లు మీ నెట్‌వర్క్‌లో రిజిస్టర్ అయినప్పుడు, పర్చేజ్ పూర్తి చేయడానికి మీ సూచనలు వారికి అందుతాయని చెప్పే మెసేజ్ వారికి కనిపిస్తుంది.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

అలాగే, మీ **Thank You** పేజీలో మీ పేమెంట్ ఇన్‌స్ట్రక్షన్లతో ఒక మెసేజ్ కూడా వారికి వస్తుంది.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## మాన్యువల్ పేమెంట్లను కన్ఫర్మ్ చేయడం

మాన్యువల్ పేమెంట్‌ను కన్ఫర్మ్ చేయడానికి, ఎడమ బార్‌లో ఉన్న **Payments** మెనూకి వెళ్ళండి. అక్కడ మీ నెట్‌వర్క్‌లోని అన్ని పేమెంట్లు మరియు వాటి వివరాలు చూడవచ్చు, వాటి **status** తో సహా. మీరు మాన్యువల్‌గా మార్చే వరకు మాన్యువల్ పేమెంట్ ఎల్లప్పుడూ **Pending** స్టేటస్‌లో ఉంటుంది.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** పై క్లిక్ చేసి పేమెంట్ పేజీలోకి ప్రవేశించండి. ఈ పేజీలో పెండింగ్ పేమెంట్ యొక్క అన్ని వివరాలు ఉంటాయి, అంటే reference ID, products, timestamps మరియు మరిన్ని.

![Payment details page with reference code and products](/img/admin/payments-list.png)

కుడి కాలమ్‌లో, మీరు పేమెంట్ స్టేటస్‌ను మార్చవచ్చు. దీన్ని **Completed** కు మార్చి, **Activate Membership** ఆప్షన్‌ను టోగుల్ చేస్తే మీ కస్టమర్ సైట్ ఎనేబుల్ అవుతుంది మరియు వారి membership యాక్టివ్ అవుతుంది.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
