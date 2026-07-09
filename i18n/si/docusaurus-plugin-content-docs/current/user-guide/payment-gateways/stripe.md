---
title: Stripe සැකසීම
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe ගේට්වේ එක සකස් කිරීම (v2) {#setting-up-the-stripe-gateway-v2}

_**වැදගත් සටහන: මෙම ලිපිය Ultimate Multisite version 2.x වෙත යොමු වේ.**_

අපගේ ගෙවීම් සැකසුම් පිටුවේ ඔබට ක්‍රම දෙකක් වන Stripe, Stripe Checkout, PayPal සහ Manual යන ගෙවීම් ක්‍රම හතරක් දක්වා සක්‍රීය කළ හැකියි. මෙම ලිපියේදී අපි **Stripe** සමඟ සම්බන්ධ කරගන්නේ කෙසේදැයි බලමු.

## Stripe සක්‍රීය කිරීම {#enabling-stripe}

ඔබේ ජාලයේ Stripe ප්‍රවේශ විය හැකි ගෙවීම් ගේට්වේ එකක් ලෙස ක්‍රියාත්මක කිරීමට, **Ultimate Multisite > Settings > Payments** වෙත යන්න. Active Payment Gateways කොටසේ ඇති **Stripe** හෝ **Stripe Checkout** අසල ඇති ස්විචය (toggle) තට්ටු කරන්න.

![Active payment gateways වල Stripe සක්‍රීය කිරීම](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** මෙම ක්‍රමය හරහා checkout කරන විට Credit Card අංකය ඇතුළත් කිරීමට ඉඩක් ලැබෙනවා.

![Checkout අතරතුර Stripe inline credit card field](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** මෙම ක්‍රමය හරහා checkout කරන විට පාරිභෝගිකයා Stripe Checkout පිටුවකට යොමු කරනු ලබනවා.

![Checkout අතරතුර Stripe Checkout රිඩයෙක්ට් පිටුව](/img/config/settings-payment-gateways.png)

ඔබේ Stripe API keys ලබා ගැනීම

Stripe ගෙවීම් ගේට්වේ එකක් ලෙස සක්‍රීය කළ පසු, ඔබට **Stripe Publishable Key** සහ **Stripe Secret Key** සඳහා වන ක්ෂේත්‍ර පුරවන්න (populate) අවශ්‍ය වනු ඇත. මෙය ඔබේ Stripe ගිණුමට ලොග් වීමෙන් ලබා ගත හැකියි.

_**සටහන:** ගෙවීම් ක්‍රමය නිවැරදි දැයි පරීක්ෂා කිරීමට ඔබට **Sandbox mode** සක්‍රීය කළ හැකිය._

![Stripe API key fields සහ sandbox mode ස්විචය](/img/config/settings-payment-gateways.png)

ඔබේ Stripe dashboard එකේ, ඉහළ දකුණු කෙළවරේ ඇති **Developers** වෙත ක්ලික් කර, පසුව වම් මෙනුවේ ඇති **API Keys** වෙත යන්න.

![Stripe dashboard Developers කොටස API Keys සමඟ](/img/config/settings-payment-gateways.png)

ඔබට **Test Data** භාවිතා කළ හැකිය (ඔබේ ප්‍රො덕션 වෙබ් අඩවියේ ඒකාබද්ධතාව ක්‍රියාත්මක වේදැයි පරීක්ෂා කිරීමට). මෙය වෙනස් කිරීමට, **Viewing test data** ස්විචය ක්ලික් කරන්න.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** සහ **Secret key** වලින් **Token** තීරුවෙන් අගය පිටපත් කර Ultimate Multisite Stripe Gateway ක්ෂේත්‍රවල අලවන්න. ඉන්පසු **Save Changes** ක්ලික් කරන්න.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook සැකසීම {#setting-up-stripe-webhook}

ඔබේ **stripe account** එකේ යම් සිදුවීමක් (event) ඇති වූ සෑම අවස්ථාවකම Ultimate Multisite වෙත දැනුම් දීමට Stripe webhook events යවයි.

**Developers** ක්ලික් කර පසුව වම් මෙනුවේ ඇති **Webhooks** අයිතමය තෝරන්න. ඉන්පසු දකුණු පසින් **Add endpoint** ක්ලික් කරන්න *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ඔබට **Endpoint URL** එකක් අවශ්‍ය වේ *.* Ultimate Multisite විසින් ස්වයංක්‍රීයව Endpoint URL එක ජනනය කරනු ඇත, එය **Ultimate Multisite Stripe Gateway** කොටසේ ඇති **Webhook Listener URL** ක්ෂේත්‍රයෙන් ngay පහළින් ඔබට දැකගත හැකිය._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL එක **Copy** කර Stripe **Endpoint URL** ක්ෂේත්‍රයට **paste** කරන්න.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

ඊළඟට, **Event** එකක් තෝරාගත යුතුය *.* මෙම විකල්පය යටතේ, ඔබට අවශ්‍ය වන්නේ **Select all events** කොටුව සලකුණු කර **Add events** ක්ලික් කිරීම සහ ඉන්පසු වෙනස්කම් සුරැකීමට **Add Endpoint** ක්ලික් කිරීම පමණි.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ඔබේ Stripe ගෙවීම් ඒකාබද්ධ කිරීම දැන් සම්පූර්ණයි!
