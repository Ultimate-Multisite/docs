---
title: PayPal ಹೊಂದಿಸುವುದು
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway (v2) ಸೆಟ್ ಅಪ್ ಮಾಡುವುದು {#setting-up-the-paypal-gateway-v2}

_**ಪ್ರಮುಖ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಕುರಿತು ಹೇಳುತ್ತದೆ.**_

ನಮ್ಮ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಪುಟದಲ್ಲಿ ನೀವು ನಾಲ್ಕು ಪಾವತಿ ವಿಧಾನಗಳವರೆಗೆ ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು: Stripe, Stripe Checkout, PayPal ಮತ್ತು Manual. ಈ ಲೇಖನದಲ್ಲಿ, **PayPal** ಜೊತೆಗೆ ಹೇಗೆ ಏಕೀಕರಿಸುವುದು ಎಂದು ನೋಡೋಣ.

Stripe ನಂತೆಯೇ, PayPal ಆನ್‌ಲೈನ್ ಪಾವತಿಗಳಿಗೆ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ, ವಿಶೇಷವಾಗಿ WordPress ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ. ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಪಾವತಿ ವಿಧಾನವಾಗಿ PayPal ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಎಂಬುದನ್ನು ಈ ಲೇಖನ ಮಾರ್ಗದರ್ಶಿಸುತ್ತದೆ.

ಈ ಏಕೀಕರಣಕ್ಕೆ ಬೇಕಾದ API ರುಜುವಾತು ಪಡೆಯಲು ನಿಮ್ಮ ಬಳಿ **PayPal Business account** ಇರಬೇಕು ಎಂಬುದನ್ನು ಗಮನಿಸಿ.

## ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ PayPal ಸಕ್ರಿಯಗೊಳಿಸುವುದು {#enabling-paypal-on-your-network}

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಪಾವತಿ ವಿಧಾನವಾಗಿ PayPal ಸಕ್ರಿಯಗೊಳಿಸಲು, **Ultimate Multisite > Settings > Payments** ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ PayPal ಪಕ್ಕದ ಬಾಕ್ಸ್ ಅನ್ನು ಗುರುತಿಸಿ.

![ಸಕ್ರಿಯ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳಲ್ಲಿ PayPal ಸಕ್ರಿಯಗೊಳಿಸುವುದು](/img/config/settings-payment-gateways.png)

## ಮಾರ್ಗದರ್ಶಿತ ಸೆಟ್‌ಅಪ್ ವಿಜಾರ್ಡ್ ಬಳಸುವುದು {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ಪಾವತಿ ಗೇಟ್‌ವೇ ಸೆಟ್ಟಿಂಗ್‌ಗಳಿಗೆ ಮಾರ್ಗದರ್ಶಿತ PayPal ಸೆಟ್‌ಅಪ್ ವಿಜಾರ್ಡ್ ಅನ್ನು ಸೇರಿಸುತ್ತದೆ. ನೀವು PayPal ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ, ಗೇಟ್‌ವೇ ಅನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸಬೇಕೆಂದು ಆಯ್ಕೆಮಾಡಲು ಮತ್ತು ಉಳಿಸುವ ಮೊದಲು ಇನ್ನೂ ಯಾವ ರುಜುವಾತುಗಳು ಬೇಕಿವೆ ಎಂದು ದೃಢೀಕರಿಸಲು **Ultimate Multisite > Settings > Payments** ನಲ್ಲಿ ವಿಜಾರ್ಡ್ ಬಳಸಿ.

ವಿಜಾರ್ಡ್ ಎರಡು ಸೆಟ್‌ಅಪ್ ಮಾರ್ಗಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ:

* **ರುಜುವಾತುಗಳನ್ನು ಕೈಯಾರೆ ನಮೂದಿಸುವುದು**: ನಿಮ್ಮ ಬಳಿ ಈಗಾಗಲೇ PayPal API ರುಜುವಾತುಗಳಿದ್ದಾಗ, ನಿಮ್ಮ Account‌ಗೆ OAuth ಸೆಟ್‌ಅಪ್ ಲಭ್ಯವಿಲ್ಲದಾಗ, ಅಥವಾ PayPal ನಿಂದ ನೀವೇ ರುಜುವಾತುಗಳನ್ನು ನಕಲಿಸಲು ಬಯಸಿದಾಗ ಈ ಮಾರ್ಗವನ್ನು ಬಳಸಿ. PayPal ಕ್ಷೇತ್ರಗಳಲ್ಲಿ API Username, API Password, ಮತ್ತು API Signature ನಮೂದಿಸಿ, ನಂತರ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ.
* **OAuth ಸಂಪರ್ಕ ಗೇಟ್**: OAuth ಆಯ್ಕೆ ನಿಮ್ಮ ಸ್ಥಾಪನೆಗೆ ಲಭ್ಯವಿದ್ದು ಸಕ್ರಿಯವಾಗಿದ್ದಾಗ ಮಾತ್ರ ಈ ಮಾರ್ಗವನ್ನು ಬಳಸಿ. ವಿಜಾರ್ಡ್ OAuth ಹರಿವನ್ನು feature flag ಹಿಂದೆ ತೋರಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ flag ಇಲ್ಲದ ನೆಟ್‌ವರ್ಕ್‌ಗಳು ಕೈಯಾರೆ ರುಜುವಾತು ನಮೂದಿಸುವ ಕ್ಷೇತ್ರಗಳನ್ನೇ ಬಳಸುತ್ತವೆ.

ವಿಜಾರ್ಡ್‌ನಲ್ಲಿ OAuth ಆಯ್ಕೆ ಕಾಣಿಸದಿದ್ದರೆ, ಕೆಳಗಿನ ಕೈಯಾರೆ ರುಜುವಾತು ನಮೂದಿಸುವ ಹರಿವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ. ಗೇಟ್‌ವೇ ಹಿಂದಿನ Ultimate Multisite 2.x ಬಿಡುಗಡೆಗಳಂತೆಯೇ ಅದೇ PayPal Business API ರುಜುವಾತುಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ.

## PayPal API ರುಜುವಾತುಗಳನ್ನು ಪಡೆಯುವುದು {#getting-the-paypal-api-credentials}

PayPal ಅನ್ನು ಪಾವತಿ ಗೇಟ್‌ವೇ ಆಗಿ ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ, PayPal API **Username** , PayPal API **Password** ಮತ್ತು PayPal API **Signature** ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಬೇಕು.

ನಿಮ್ಮ PayPal [Live](https://www.paypal.com/home) ಅಥವಾ [Sandbox](https://www.sandbox.paypal.com/home) Account‌ಗೆ ಲಾಗಿನ್ ಮಾಡುವ ಮೂಲಕ ನೀವು ಇದನ್ನು ಪಡೆಯಬಹುದು.

(ಪಾವತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಗೇಟ್‌ವೇ ಸರಿಯಾಗಿ ಸೆಟ್ ಅಪ್ ಆಗಿದೆಯೇ ಎಂದು ನೋಡಲು ನೀವು **sandbox mode** ಬಳಸಬಹುದು ಎಂಬುದನ್ನು ನೆನಪಿಡಿ. ಸಂಬಂಧಿತ ವಿಭಾಗವನ್ನು ಆನ್ ಮಾಡಿ.)

![PayPal API ರುಜುವಾತುಗಳ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು sandbox mode ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

ನಿಮ್ಮ PayPal Accountಗಾಗಿ API Signature ಅಥವಾ Certificate ರುಜುವಾತುಗಳನ್ನು ವಿನಂತಿಸಲು:

  1. ನಿಮ್ಮ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ಗೆ ಹೋಗಿ.

  2. **API access** ವಿಭಾಗದಲ್ಲಿ, **Update** ಕ್ಲಿಕ್ ಮಾಡಿ.
![API access ವಿಭಾಗದೊಂದಿಗೆ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** ಅಡಿಯಲ್ಲಿ, **Manage API credentials** ಕ್ಲಿಕ್ ಮಾಡಿ.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ನೀವು ಈಗಾಗಲೇ API Signature ಅಥವಾ Certificate ರಚಿಸಿದ್ದರೆ, ನಿಮ್ಮ ರುಜುವಾತುಗಳನ್ನು ಕಾಣಬಹುದಾದ ಪುಟಕ್ಕೆ ನಿಮ್ಮನ್ನು ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.

     * _**ಗಮನಿಸಿ:** ನಿಮ್ಮ PayPal Account ಪರಿಶೀಲಿಸಲು ಕೇಳಿದರೆ, ಪರದೆಯ ಮೇಲಿನ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ._

  4. ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ _ಒಂದು_ ಆಯ್ಕೆಮಾಡಿ, ನಂತರ **Agree and Submit** ಕ್ಲಿಕ್ ಮಾಡಿ.

     * **Request API Signature** – API Signature ದೃಢೀಕರಣಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ.

     * **Request API Certificate** – API Certificate ದೃಢೀಕರಣಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ.

  5. PayPal ನಿಮ್ಮ API ರುಜುವಾತುಗಳನ್ನು ಕೆಳಗಿನಂತೆ ರಚಿಸುತ್ತದೆ:
![PayPal ರಚಿಸಿದ API ರುಜುವಾತುಗಳು](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** API Username, API Password, ಮತ್ತು Signature ಅನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ; ಇವು ಅವಧಿ ಮುಗಿಯುವುದಿಲ್ಲ. ಹೆಚ್ಚುವರಿ ಭದ್ರತೆಗೆ ಈ ಮೌಲ್ಯಗಳನ್ನು ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಮರೆಮಾಡಲಾಗಿರುತ್ತದೆ. ಅವನ್ನು ಆನ್ ಮತ್ತು ಆಫ್ ಮಾಡಲು **Show/Hide** ಕ್ಲಿಕ್ ಮಾಡಿ. ಮುಗಿದ ನಂತರ, **Done** ಕ್ಲಿಕ್ ಮಾಡಿ.

     * **API Certificate credentials** API Username, API Password, ಮತ್ತು Certificate ಅನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ; ಇದು ಮೂರು ವರ್ಷಗಳ ನಂತರ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ. API Certificate ಅನ್ನು ನಿಮ್ಮ ಡೆಸ್ಕ್‌ಟಾಪ್‌ಗೆ ಉಳಿಸಲು **Download Certificate** ಕ್ಲಿಕ್ ಮಾಡಿ.

ಇಷ್ಟೇ, ನಿಮ್ಮ PayPal ಪಾವತಿ ಏಕೀಕರಣ ಪೂರ್ಣಗೊಂಡಿದೆ!

PayPal ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಕುರಿತು ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, PayPal ನ [ಸಹಾಯ ಕೇಂದ್ರ](https://www.paypal.com/br/smarthelp/home) ಅನ್ನು ನೋಡಬಹುದು.
