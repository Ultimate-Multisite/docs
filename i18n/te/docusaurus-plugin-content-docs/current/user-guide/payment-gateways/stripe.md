---
title: Stripe సెటప్ చేయడం
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway సెటప్ చేయడం (v2)

_**ముఖ్యమైన గమనిక: ఈ ఆర్టికల్ Ultimate Multisite వెర్షన్ 2.x కి సంబంధించినది.**_

మా payment settings పేజీలో మీరు నాలుగు చెల్లింపు పద్ధతులను యాక్టివేట్ చేయవచ్చు: Stripe, Stripe Checkout, PayPal మరియు Manual. ఈ ఆర్టికల్‌లో, **Stripe**ని ఎలా ఇంటిగ్రేట్ చేయాలో చూద్దాం.

## Stripe ఎనేబుల్ చేయడం

మీ నెట్‌వర్క్‌లో Stripe ని అందుబాటులో ఉన్న payment gateway గా ఎనేబుల్ చేయడానికి, **Ultimate Multisite > Settings > Payments** కి వెళ్ళి, Active Payment Gateways సెక్షన్‌లో **Stripe** లేదా **Stripe Checkout** పక్కన ఉన్న toggle ని టిక్ చేయండి.

![Active payment gateways లో Stripe ని ఎనేబుల్ చేయడం](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** ఈ పద్ధతిలో checkout సమయంలో క్రెడిట్ కార్డ్ నంబర్ ఎంటర్ చేయడానికి ఒక స్థలం చూపిస్తుంది.

![Checkout సమయంలో Stripe inline క్రెడిట్ కార్డ్ ఫీల్డ్](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ఈ పద్ధతిలో checkout సమయంలో కస్టమర్‌ను Stripe Checkout పేజీకి redirect చేస్తుంది.

![Checkout సమయంలో Stripe Checkout redirect పేజీ](/img/config/settings-payment-gateways.png)

మీ Stripe API keys పొందడం

Stripe ని payment gateway గా ఎనేబుల్ చేసిన తర్వాత, మీరు **Stripe Publishable Key** మరియు **Stripe Secret Key** ఫీల్డ్‌లను నింపాలి. మీ Stripe అకౌంట్‌లో లాగిన్ అవ్వడం ద్వారా వీటిని పొందవచ్చు.

_**గమనిక:** payment method పని చేస్తుందో లేదో టెస్ట్ చేయడానికి మీరు **Sandbox mode** ని యాక్టివేట్ చేయవచ్చు._

![Stripe API key ఫీల్డ్‌లు మరియు sandbox mode toggle](/img/config/settings-payment-gateways.png)

మీ Stripe dashboard లో, కుడి-ఎగువ మూలలో **Developers** పై క్లిక్ చేసి, తర్వాత ఎడమ మెనూలో **API Keys** పై క్లిక్ చేయండి.

![API Keys తో Stripe dashboard Developers సెక్షన్](/img/config/settings-payment-gateways.png)

మీరు **Test Data** ఉపయోగించవచ్చు (మీ production site లో integration పని చేస్తుందో లేదో టెస్ట్ చేయడానికి) లేదా ఉపయోగించకపోవచ్చు. దీన్ని మార్చడానికి, **Viewing test data** toggle ని మార్చండి.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Token** కాలమ్ నుండి **Publishable key** మరియు **Secret key** విలువలను కాపీ చేసి, Ultimate Multisite Stripe Gateway ఫీల్డ్‌లలో పేస్ట్ చేయండి. తర్వాత **Save Changes** పై క్లిక్ చేయండి.

![Stripe publishable మరియు secret key విలువలు](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings లో Stripe keys పేస్ట్ చేయడం](/img/config/settings-payment-gateways.png)

## Stripe Webhook సెటప్ చేయడం

**మీ stripe అకౌంట్‌లో** ఏదైనా ఈవెంట్ జరిగినప్పుడు Ultimate Multisite కి తెలియజేసే webhook events ను Stripe పంపుతుంది.

**Developers** పై క్లిక్ చేసి, తర్వాత ఎడమ మెనూలో **Webhooks** ఐటెమ్‌ను ఎంచుకోండి. తర్వాత కుడి వైపున **Add endpoint** పై క్లిక్ చేయండి.

![Add endpoint బటన్ తో Stripe Webhooks పేజీ](/img/config/settings-payment-gateways.png)

మీకు **Endpoint URL** అవసరం. **Ultimate Multisite Stripe Gateway** సెక్షన్‌లోని **Webhook Listener URL** ఫీల్డ్ కింద Ultimate Multisite స్వయంచాలకంగా endpoint URL ని జనరేట్ చేస్తుంది.

![Stripe gateway settings లో Webhook Listener URL ఫీల్డ్](/img/config/settings-payment-gateways.png)

Endpoint URL ని **కాపీ** చేసి Stripe **Endpoint URL** ఫీల్డ్‌లో **పేస్ట్** చేయండి.

![Stripe webhook setup లో endpoint URL పేస్ట్ చేయడం](/img/config/settings-payment-gateways.png)

తర్వాత **Event** ఎంచుకోవాలి. ఈ ఆప్షన్ కింద, మీరు **Select all events** బాక్స్‌ను చెక్ చేసి **Add events** పై క్లిక్ చేయండి. ఆ తర్వాత మార్పులను సేవ్ చేయడానికి **Add Endpoint** పై క్లిక్ చేయండి.

![అన్ని events ఎంచుకోవడం మరియు Stripe endpoint యాడ్ చేయడం](/img/config/settings-payment-gateways.png)

అంతే, మీ Stripe payment integration పూర్తయింది!
