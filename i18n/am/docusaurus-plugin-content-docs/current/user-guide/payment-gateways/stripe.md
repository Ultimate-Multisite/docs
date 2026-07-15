---
title: የStripe ዝግጅት
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# የStripe Gateway መቼት (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

በየክፍያ መቼት ገጽ ላይ እስከ አራት የክፍያ ዘዴዎችን ማብራት ይችላሉ፡ Stripe፣ Stripe Checkout፣ PayPal እና Manual። በዚህ ጽሑፍ ውስጥ፣ ከ**Stripe** ጋር እንዴት መዋሃድ እንደሚቻል እንመለከታለን።

## Stripeን ማብራት {#enabling-stripe}

በኔትዎ ላይ Stripeን እንደ ተገ disponible የክፍያ ዘዴ ለማብራት፣ ወደ **Ultimate Multisite > Settings > Payments** ይሂዱ እና በActive Payment Gateways ክፍል ውስጥ ባለው **Stripe** ወይም **Stripe Checkout** አጠገብ ባለው ማብሪያ (toggle) ምልክት ያድርጉ።

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe ከ Stripe Checkout ጋር ንጽጽር፡ {#stripe-vs-stripe-checkout}

**Stripe:** ይህ ዘዴ በቼክአውት ጊዜ የክሬዲት ካርድ ቁጥር ማስገቢያ ቦታ ያሳያል።

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ይህ ዘዴ በቼክአውት ጊዜ ደንበኛውን ወደ Stripe Checkout ገጽ ይመራዋል።

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

የStripe API ቁልፎችን ማግኘት

Stripe እንደ የክፍያ ዘዴ ከተበራረ በኋላ፣ ለ**Stripe Publishable Key** እና **Stripe Secret Key** መስኮቶችን መሙላት ያስፈልግዎታል። ይህንን በStripe አካውንትዎ በመግባት ማግኘት ይችላሉ።

_**ማሳሰቢያ፡** የክፍያ ዘዴው እየሰራ መሆኑን ለመፈተን **Sandbox mode**ን ማብራት ይችላሉ።_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

በStripe dashboardዎ ላይ፣ በላይኛው ቀኝ ጥግ ላይ **Developers** ላይ ይጫኑ፣ ከዚያም በግራ ሜኑ ውስጥ **API Keys** ላይ ይጫኑ።

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

**Test Data**ን (በፕሮዳክሽን ድረ-ገጽዎ ላይ ውህደቱ እየሰራ መሆኑን ለመፈተን) መጠቀም ወይም አለመጠቀም ይችላሉ። ይህንን ለመቀየር፣ **Viewing test data** ማብሪያውን ያንቀሳቅሱ።

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

ከ**Publishable key** እና **Secret key** እሴቶችን ከ**Token** ዓምድ ይቅዱ እና በUltimate Multisite Stripe Gateway መስኮቶች ላይ ይለጥፉ። ከዚያ **Save Changes** ላይ ይጫኑ።

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook መቼት {#setting-up-stripe-webhook}

Stripe በ**የእርስዎ stripe አካውንት** ላይ በማንኛውም ጊዜ ክስተት ሲከሰት Ultimate Multisite ለማሳወቅ የwebhook ክስተቶችን ይልካል።

**Developers** ላይ ይጫኑ እና በግራ ሜኑ ውስጥ **Webhooks** የሚለውን አማራጭ ይምረጡ። ከዚያ በቀኝ በኩል **Add endpoint** ላይ ይጫኑ።

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

የ**Endpoint URL** ያስፈልግዎታል። Ultimate Multisite የendpoint URL በራስ-ሰር ይፈጥራል፣ ይህም በ**Ultimate Multisite Stripe Gateway** ክፍል ውስጥ ከ**Webhook Listener URL** መስክ ስር ማግኘት ይችላሉ።

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

የendpoint URLን **ቅዱ** እና በStripe **Endpoint URL** መስክ ላይ **ለጥፍ**።

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

ቀጣዩ ደግሞ **Event** መምረጥ ነው። በዚህ አማራጭ ስር፣ በቀላሉ **Select all events** ቦክስ ላይ ምልክት ማድረግ እና **Add events** ላይ መጫን ብቻ ያስፈልግዎታል። ከዚያ ለውጥ ለማስቀመጥ **Add Endpoint** ላይ ይጫኑ።

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ይኸውልዎ፣ የStripe የክፍያ ውህደትዎ ተጠናቅቋል!
