---
title: Stripe ಅನ್ನು ಹೊಂದಿಸುವುದು
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe ಗೇಟ್‌ವೇ ಅನ್ನು ಸೆಟಪ್ ಮಾಡುವುದು (v2)

_**ಮುಖ್ಯ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಗೆ ಸಂಬಂಧಿಸಿದೆ.**_

ನಮ್ಮ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್ಸ್ ಪುಟದಲ್ಲಿ ನೀವು ನಾಲ್ಕು ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು: Stripe, Stripe Checkout, PayPal ಮತ್ತು Manual. ಈ ಲೇಖನದಲ್ಲಿ, **Stripe** ಜೊತೆ ಹೇಗೆ ಇಂಟಿಗ್ರೇಟ್ ಮಾಡುವುದು ಎಂದು ನೋಡೋಣ.

## Stripe ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದು

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ Stripe ಅನ್ನು ಲಭ್ಯವಿರುವ ಪಾವತಿ ಗೇಟ್‌ವೇ ಆಗಿ ಸಕ್ರಿಯಗೊಳಿಸಲು, **Ultimate Multisite > Settings > Payments** ಗೆ ಹೋಗಿ ಮತ್ತು Active Payment Gateways ವಿಭಾಗದಲ್ಲಿ **Stripe** ಅಥವಾ **Stripe Checkout** ಪಕ್ಕದ ಟಾಗಲ್ ಅನ್ನು ಟಿಕ್ ಮಾಡಿ.

![ಆಕ್ಟಿವ್ ಪೇಮೆಂಟ್ ಗೇಟ್‌ವೇಗಳಲ್ಲಿ Stripe ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದು](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** ಈ ವಿಧಾನವು ಚೆಕ್‌ಔಟ್ ಸಮಯದಲ್ಲಿ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಲು ಒಂದು ಜಾಗವನ್ನು ತೋರಿಸುತ್ತದೆ.

![ಚೆಕ್‌ಔಟ್ ಸಮಯದಲ್ಲಿ Stripe ಇನ್‌ಲೈನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಫೀಲ್ಡ್](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ಈ ವಿಧಾನವು ಚೆಕ್‌ಔಟ್ ಸಮಯದಲ್ಲಿ ಗ್ರಾಹಕರನ್ನು Stripe Checkout ಪುಟಕ್ಕೆ ರೀಡೈರೆಕ್ಟ್ ಮಾಡುತ್ತದೆ.

![ಚೆಕ್‌ಔಟ್ ಸಮಯದಲ್ಲಿ Stripe Checkout ರೀಡೈರೆಕ್ಟ್ ಪುಟ](/img/config/settings-payment-gateways.png)

ನಿಮ್ಮ Stripe API ಕೀಗಳನ್ನು ಪಡೆಯುವುದು

Stripe ಅನ್ನು ಪಾವತಿ ಗೇಟ್‌ವೇ ಆಗಿ ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ, ನೀವು **Stripe Publishable Key** ಮತ್ತು **Stripe Secret Key** ಫೀಲ್ಡ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಬೇಕಾಗುತ್ತದೆ. ನಿಮ್ಮ Stripe ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗುವ ಮೂಲಕ ಇದನ್ನು ಪಡೆಯಬಹುದು.

_**ಸೂಚನೆ:** ಪಾವತಿ ವಿಧಾನ ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಲು ನೀವು **Sandbox mode** ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು._

![Stripe API ಕೀ ಫೀಲ್ಡ್‌ಗಳು ಮತ್ತು sandbox mode ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

ನಿಮ್ಮ Stripe dashboard ನಲ್ಲಿ, ಮೇಲಿನ ಬಲ ಮೂಲೆಯಲ್ಲಿರುವ **Developers** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ ಎಡ ಮೆನುವಿನಲ್ಲಿ **API Keys** ಕ್ಲಿಕ್ ಮಾಡಿ.

![API Keys ಇರುವ Stripe dashboard Developers ವಿಭಾಗ](/img/config/settings-payment-gateways.png)

ನೀವು **Test Data** (ನಿಮ್ಮ ಪ್ರೊಡಕ್ಷನ್ ಸೈಟ್‌ನಲ್ಲಿ ಇಂಟಿಗ್ರೇಶನ್ ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಲು) ಬಳಸಬಹುದು ಅಥವಾ ಬಳಸದಿರಬಹುದು. ಇದನ್ನು ಬದಲಾಯಿಸಲು, **Viewing test data** ಟಾಗಲ್ ಅನ್ನು ಬದಲಿಸಿ.

![Stripe Viewing test data ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

**Token** ಕಾಲಂನಿಂದ **Publishable key** ಮತ್ತು **Secret key** ನ ಮೌಲ್ಯವನ್ನು ಕಾಪಿ ಮಾಡಿ ಮತ್ತು Ultimate Multisite Stripe Gateway ಫೀಲ್ಡ್‌ಗಳಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ. ನಂತರ **Save Changes** ಕ್ಲಿಕ್ ಮಾಡಿ.

![Stripe publishable ಮತ್ತು secret key ಮೌಲ್ಯಗಳು](/img/config/settings-payment-gateways.png)

![Ultimate Multisite ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಲ್ಲಿ Stripe keys ಪೇಸ್ಟ್ ಮಾಡುವುದು](/img/config/settings-payment-gateways.png)

## Stripe Webhook ಅನ್ನು ಸೆಟಪ್ ಮಾಡುವುದು

**ನಿಮ್ಮ Stripe ಖಾತೆಯಲ್ಲಿ** ಯಾವುದೇ ಈವೆಂಟ್ ಸಂಭವಿಸಿದಾಗ Ultimate Multisite ಗೆ ತಿಳಿಸುವ webhook ಈವೆಂಟ್‌ಗಳನ್ನು Stripe ಕಳುಹಿಸುತ್ತದೆ.

**Developers** ಕ್ಲಿಕ್ ಮಾಡಿ ನಂತರ ಎಡ ಮೆನುವಿನಲ್ಲಿ **Webhooks** ಐಟಂ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನಂತರ ಬಲ ಬದಿಯಲ್ಲಿ **Add endpoint** ಕ್ಲಿಕ್ ಮಾಡಿ *.*

![Add endpoint ಬಟನ್ ಇರುವ Stripe Webhooks ಪುಟ](/img/config/settings-payment-gateways.png)

ನಿಮಗೆ **Endpoint URL** ಬೇಕಾಗುತ್ತದೆ *.* **Ultimate Multisite Stripe Gateway** ವಿಭಾಗದಲ್ಲಿ **Webhook Listener URL** ಫೀಲ್ಡ್‌ನ ಕೆಳಗೆ Ultimate Multisite ಸ್ವಯಂಚಾಲಿತವಾಗಿ endpoint URL ಅನ್ನು ರಚಿಸುತ್ತದೆ_._

![Stripe gateway ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಲ್ಲಿ Webhook Listener URL ಫೀಲ್ಡ್](/img/config/settings-payment-gateways.png)

endpoint URL ಅನ್ನು **ಕಾಪಿ** ಮಾಡಿ ಮತ್ತು Stripe **Endpoint URL** ಫೀಲ್ಡ್‌ನಲ್ಲಿ **ಪೇಸ್ಟ್** ಮಾಡಿ.

![Stripe webhook ಸೆಟಪ್‌ನಲ್ಲಿ endpoint URL ಪೇಸ್ಟ್ ಮಾಡುವುದು](/img/config/settings-payment-gateways.png)

ಮುಂದಿನದು **Event** ಆಯ್ಕೆ ಮಾಡುವುದು *.* ಈ ಆಯ್ಕೆಯ ಅಡಿಯಲ್ಲಿ, ನೀವು ಸರಳವಾಗಿ **Select all events** ಬಾಕ್ಸ್ ಅನ್ನು ಚೆಕ್ ಮಾಡಿ **Add events** ಕ್ಲಿಕ್ ಮಾಡಬೇಕು. ಅದರ ನಂತರ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲು **Add Endpoint** ಕ್ಲಿಕ್ ಮಾಡಿ.

![ಎಲ್ಲಾ ಈವೆಂಟ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಮತ್ತು Stripe endpoint ಸೇರಿಸುವುದು](/img/config/settings-payment-gateways.png)

ಅಷ್ಟೇ, ನಿಮ್ಮ Stripe ಪಾವತಿ ಇಂಟಿಗ್ರೇಶನ್ ಪೂರ್ಣವಾಯಿತು!
