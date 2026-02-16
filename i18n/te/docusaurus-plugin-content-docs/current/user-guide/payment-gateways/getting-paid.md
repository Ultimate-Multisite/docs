---
title: చెల్లింపు పొందడం
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# చెల్లింపులు అందుకోవడం (v2)

_**ముఖ్యమైన గమనిక: ఈ ఆర్టికల్ Ultimate Multisite వెర్షన్ 2.x గురించి చెప్తుంది.**_

Ultimate Multisite లో మెంబర్‌షిప్ మరియు బిల్లింగ్ సిస్టమ్ అంతర్నిర్మితంగా ఉంటుంది. మా బిల్లింగ్ సిస్టమ్ పని చేయడానికి, e-commerce లో అత్యంత సాధారణంగా వాడే payment gateways ను ఇంటిగ్రేట్ చేసాము. Ultimate Multisite లో డిఫాల్ట్ payment gateways _Stripe_, _PayPal_ మరియు Manual Payment. మీరు _WooCommerce_, _GoCardless_ మరియు _Payfast_ ను కూడా వాటి add-ons ఇన్‌స్టాల్ చేసి చెల్లింపులు అందుకోవచ్చు.

## ప్రాథమిక సెట్టింగ్స్

ఈ payment gateways లో ఏదైనా Ultimate Multisite payment settings లో కాన్ఫిగర్ చేయవచ్చు. **Ultimate Multisite menu > Settings > Payments** కు వెళ్ళడం ద్వారా మీరు దీన్ని కనుగొనవచ్చు.

![Ultimate Multisite లో Payment settings పేజీ](/img/config/settings-payment-gateways.png)

మీ payment gateway సెటప్ చేయడానికి ముందు, మీరు కాన్ఫిగర్ చేయగల ప్రాథమిక payment settings చూడండి:

**Force auto-renew:** యూజర్ ఎంచుకున్న billing frequency ప్రకారం ప్రతి billing cycle చివరలో చెల్లింపు ఆటోమేటిక్‌గా పునరావృతమవుతుందని ఇది నిర్ధారిస్తుంది.

![Force auto-renew టోగుల్ సెట్టింగ్](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** ఈ ఆప్షన్ ఎనేబుల్ చేస్తే మీ క్లయింట్ రిజిస్ట్రేషన్ ప్రాసెస్ సమయంలో ఎటువంటి ఆర్థిక సమాచారం జోడించాల్సిన అవసరం లేదు. ట్రయల్ పీరియడ్ ముగిసిన తర్వాత మాత్రమే ఇది అవసరమవుతుంది.

![Allow trials without payment method టోగుల్](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** చెల్లింపు తర్వాత ఇన్వాయిస్ పంపాలా వద్దా అనే ఆప్షన్ ఇది మీకు ఇస్తుంది. యూజర్లు తమ subsite dashboard లో తమ చెల్లింపు హిస్టరీ చూడగలరని గమనించండి. ఈ ఆప్షన్ Manual Gateway కు వర్తించదు.

![Send invoice on payment confirmation టోగుల్](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ఇక్కడ, మీరు payment reference code లేదా sequential number scheme ఎంచుకోవచ్చు. మీ ఇన్వాయిస్‌లకు payment reference code వాడాలని ఎంచుకుంటే, మీరు ఏమీ కాన్ఫిగర్ చేయాల్సిన అవసరం లేదు. Sequential number scheme వాడాలని ఎంచుకుంటే, మీరు **next invoice number** (సిస్టమ్‌లో తదుపరి ఇన్వాయిస్‌కు ఈ నంబర్ ఇన్వాయిస్ నంబర్‌గా వాడబడుతుంది. కొత్త ఇన్వాయిస్ క్రియేట్ అయిన ప్రతిసారి ఇది ఒకటి పెరుగుతుంది. ఇన్వాయిస్ sequential number ను నిర్దిష్ట విలువకు రీసెట్ చేయడానికి మీరు దీన్ని మార్చి సేవ్ చేయవచ్చు) మరియు **invoice number prefix** కాన్ఫిగర్ చేయాలి.

![Invoice numbering scheme ఎంపిక](/img/config/settings-payment-gateways.png)

![Sequential invoice number మరియు prefix సెట్టింగ్స్](/img/config/settings-payment-gateways.png)

## గేట్‌వేలు ఎక్కడ కనుగొనాలి:

అదే పేజీలో (**Ultimate Multisite > Settings > Payments**) payment gateways సెటప్ చేయవచ్చు. **active payment gateways** కింద, మీరు చూడగలరు: _Stripe_, _Stripe Checkout_, _PayPal_ మరియు _Manual_.

![యాక్టివ్ payment gateways జాబితా](/img/config/settings-payment-gateways.png)

ప్రతి payment gateway ను సెటప్ చేయడంలో మీకు మార్గదర్శకత్వం చేసే ప్రత్యేక ఆర్టికల్ ఉంది, దాన్ని కింద ఉన్న లింక్‌లలో చూడవచ్చు.

**Stripe gateway సెటప్ చేయడం**

**PayPal gateway సెటప్ చేయడం**

**Manual payments సెటప్ చేయడం**

ఇప్పుడు, మీరు _WooCommerce_, _GoCardless_ లేదా _Payfast_ ను మీ payment gateway గా వాడాలనుకుంటే, మీరు **వాటి add-ons ఇన్‌స్టాల్ చేసి కాన్ఫిగర్ చేయాలి**.

### WooCommerce add-on ఎలా ఇన్‌స్టాల్ చేయాలి:

_Stripe_ మరియు _PayPal_ కొన్ని దేశాల్లో అందుబాటులో లేవని మాకు తెలుసు, ఇది Ultimate Multisite యూజర్లు మా plugin ను సమర్థవంతంగా వాడటాన్ని పరిమితం చేస్తుంది లేదా అడ్డుకుంటుంది. కాబట్టి చాలా పాపులర్ e-commerce plugin అయిన _WooCommerce_ ను ఇంటిగ్రేట్ చేయడానికి add-on క్రియేట్ చేసాము. ప్రపంచవ్యాప్తంగా డెవలపర్లు వివిధ payment gateways ను దానికి ఇంటిగ్రేట్ చేయడానికి add-ons క్రియేట్ చేసారు. Ultimate Multisite billing system తో మీరు వాడగల payment gateways ను విస్తరించడానికి మేము దీన్ని ఉపయోగించుకున్నాము.

_**ముఖ్యమైనది:** Ultimate Multisite: WooCommerce Integration కు కనీసం మీ మెయిన్ సైట్‌లో WooCommerce యాక్టివేట్ కావాలి._

మొదట, దయచేసి add-ons పేజీకి వెళ్ళండి. **Ultimate Multisite > Settings** కు వెళ్ళడం ద్వారా మీరు దీన్ని కనుగొనవచ్చు. మీరు **Add-ons** టేబుల్ చూడాలి. **Check our Add-ons** పై క్లిక్ చేయండి.

![Add-ons సెక్షన్‌తో Settings పేజీ](/img/config/settings-general.png)

**Check our Add-ons** పై క్లిక్ చేసిన తర్వాత, మీరు add-ons పేజీకి రీడైరెక్ట్ అవుతారు. ఇక్కడ మీరు అన్ని Ultimate Multisite add-ons కనుగొనవచ్చు. **Ultimate Multisite: WooCommerce Integration** add-on పై క్లిక్ చేయండి.

![అందుబాటులో ఉన్న add-ons జాబితా చేసే Add-ons పేజీ](/img/config/settings-general.png)

add-on వివరాలతో ఒక విండో పాప్ అప్ అవుతుంది. **Install Now** పై క్లిక్ చేయండి.

![WooCommerce add-on ఇన్‌స్టాల్ డైలాగ్](/img/config/settings-general.png)

ఇన్‌స్టాలేషన్ పూర్తయిన తర్వాత, మీరు plugins పేజీకి రీడైరెక్ట్ అవుతారు. ఇక్కడ, **Network Activate** పై క్లిక్ చేయండి మరియు WooCommerce add-on మీ నెట్‌వర్క్‌లో యాక్టివేట్ అవుతుంది.

![WooCommerce add-on Network Activate చేయండి](/img/config/settings-general.png)

దీన్ని యాక్టివేట్ చేసిన తర్వాత, మీ వెబ్‌సైట్‌లో WooCommerce plugin ఇన్‌స్టాల్ చేసి యాక్టివేట్ చేయకపోతే, మీకు రిమైండర్ వస్తుంది.

![WooCommerce యాక్టివేషన్ రిమైండర్ నోటీస్](/img/config/settings-general.png)

WooCommerce Integration add-on గురించి మరింత చదవడానికి, **ఇక్కడ క్లిక్ చేయండి**.

### GoCardless add-on ఎలా ఇన్‌స్టాల్ చేయాలి:

_GoCardless_ add-on ఇన్‌స్టాల్ చేసే స్టెప్స్ _WooCommerce_ add-on లాగానే ఉంటాయి. దయచేసి add-ons పేజీకి వెళ్ళి **Ultimate Multisite: GoCardless Gateway** add-on ఎంచుకోండి.

![అందుబాటులో ఉన్న add-ons జాబితా చేసే Add-ons పేజీ](/img/config/settings-general.png)

add-on విండో పాప్ అప్ అవుతుంది. **Install Now** పై క్లిక్ చేయండి.

![GoCardless add-on ఇన్‌స్టాల్ డైలాగ్](/img/config/settings-general.png)

ఇన్‌స్టాలేషన్ పూర్తయిన తర్వాత, మీరు plugins పేజీకి రీడైరెక్ట్ అవుతారు. ఇక్కడ, **Network Activate** పై క్లిక్ చేయండి మరియు _GoCardless_ add-on మీ నెట్‌వర్క్‌లో యాక్టివేట్ అవుతుంది.

![GoCardless add-on Network Activate చేయండి](/img/config/settings-general.png)

_GoCardless_ gateway తో ప్రారంభించడం ఎలాగో తెలుసుకోవడానికి, **ఈ ఆర్టికల్ చదవండి**.

### Payfast add-on ఎలా ఇన్‌స్టాల్ చేయాలి:

add-ons పేజీకి వెళ్ళి **Ultimate Multisite: Payfast Gateway** add-on ఎంచుకోండి.

![అందుబాటులో ఉన్న add-ons జాబితా చేసే Add-ons పేజీ](/img/config/settings-general.png)

add-on విండో పాప్ అప్ అవుతుంది. **Install Now** పై క్లిక్ చేయండి.

![Payfast add-on ఇన్‌స్టాల్ డైలాగ్](/img/config/settings-general.png)

ఇన్‌స్టాలేషన్ పూర్తయిన తర్వాత, మీరు plugins పేజీకి రీడైరెక్ట్ అవుతారు. ఇక్కడ, **Network Activate** పై క్లిక్ చేయండి మరియు _Payfast_ add-on మీ నెట్‌వర్క్‌లో యాక్టివేట్ అవుతుంది.

![Payfast add-on Network Activate చేయండి](/img/config/settings-general.png)
