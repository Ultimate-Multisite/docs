---
title: PayPal ಅನ್ನು ಹೊಂದಿಸುವುದು
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway ಹೊಂದಿಸುವುದು (v2)

_**ಮುಖ್ಯ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಗೆ ಸಂಬಂಧಿಸಿದೆ.**_

ನಮ್ಮ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್ಸ್ ಪುಟದಲ್ಲಿ ನೀವು ನಾಲ್ಕು ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು: Stripe, Stripe Checkout, PayPal ಮತ್ತು Manual. ಈ ಲೇಖನದಲ್ಲಿ, **PayPal** ಜೊತೆ ಹೇಗೆ ಸಂಯೋಜಿಸುವುದು ಎಂದು ನೋಡೋಣ.

Stripe ನಂತೆಯೇ, PayPal ಕೂಡ ಆನ್‌ಲೈನ್ ಪಾವತಿಗಳಿಗೆ ವ್ಯಾಪಕವಾಗಿ ಬಳಸಲ್ಪಡುತ್ತದೆ, ವಿಶೇಷವಾಗಿ WordPress ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ. ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ PayPal ಅನ್ನು ಪಾವತಿ ವಿಧಾನವಾಗಿ ಹೇಗೆ ಬಳಸುವುದು ಎಂಬುದನ್ನು ಈ ಲೇಖನವು ತಿಳಿಸುತ್ತದೆ.

ಈ ಸಂಯೋಜನೆಗೆ ಅಗತ್ಯವಾದ API ರುಜುವಾತುಗಳನ್ನು ಪಡೆಯಲು ನಿಮಗೆ **PayPal Business ಖಾತೆ** ಇರಬೇಕು ಎಂಬುದನ್ನು ಗಮನಿಸಿ.

## ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ PayPal ಸಕ್ರಿಯಗೊಳಿಸುವುದು

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ PayPal ಅನ್ನು ಲಭ್ಯವಿರುವ ಪಾವತಿ ವಿಧಾನವಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸಲು, **Ultimate Multisite > Settings > Payments** ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ ಮತ್ತು PayPal ಪಕ್ಕದ ಬಾಕ್ಸ್ ಅನ್ನು ಟಿಕ್ ಮಾಡಿ.

![ಸಕ್ರಿಯ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳಲ್ಲಿ PayPal ಸಕ್ರಿಯಗೊಳಿಸುವುದು](/img/config/settings-payment-gateways.png)

## PayPal API ರುಜುವಾತುಗಳನ್ನು ಪಡೆಯುವುದು

PayPal ಅನ್ನು ಪಾವತಿ ಗೇಟ್‌ವೇ ಆಗಿ ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ, PayPal API **Username**, PayPal API **Password** ಮತ್ತು PayPal API **Signature** ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಬೇಕಾಗುತ್ತದೆ.

ನಿಮ್ಮ PayPal [Live](https://www.paypal.com/home) ಅಥವಾ [Sandbox](https://www.sandbox.paypal.com/home) ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡುವ ಮೂಲಕ ಇದನ್ನು ಪಡೆಯಬಹುದು.

(ಪಾವತಿಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಗೇಟ್‌ವೇ ಸರಿಯಾಗಿ ಹೊಂದಿಸಲಾಗಿದೆಯೇ ಎಂದು ನೋಡಲು ನೀವು **sandbox mode** ಬಳಸಬಹುದು ಎಂಬುದನ್ನು ನೆನಪಿಡಿ. ಸಂಬಂಧಿತ ವಿಭಾಗವನ್ನು ಆನ್ ಮಾಡಿ.)

![PayPal API ರುಜುವಾತು ಕ್ಷೇತ್ರಗಳು ಮತ್ತು sandbox mode ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

ನಿಮ್ಮ PayPal ಖಾತೆಗೆ API Signature ಅಥವಾ Certificate ರುಜುವಾತುಗಳನ್ನು ವಿನಂತಿಸಲು:

  1. ನಿಮ್ಮ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ಗೆ ಹೋಗಿ.

  2. **API access** ವಿಭಾಗದಲ್ಲಿ, **Update** ಕ್ಲಿಕ್ ಮಾಡಿ.  
![API access ವಿಭಾಗದೊಂದಿಗೆ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** ಅಡಿಯಲ್ಲಿ, **Manage API credentials** ಕ್ಲಿಕ್ ಮಾಡಿ.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ನೀವು ಈಗಾಗಲೇ API Signature ಅಥವಾ Certificate ರಚಿಸಿದ್ದರೆ, ನಿಮ್ಮ ರುಜುವಾತುಗಳನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದಾದ ಪುಟಕ್ಕೆ ನಿಮ್ಮನ್ನು ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.

     * _**ಸೂಚನೆ:** ನಿಮ್ಮ PayPal ಖಾತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ಕೇಳಿದರೆ, ಪರದೆಯ ಮೇಲಿನ ಸೂಚನೆಗಳನ್ನು ಅನುಸರಿಸಿ._

  4. ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ _ಒಂದನ್ನು_ ಆಯ್ಕೆಮಾಡಿ, ನಂತರ **Agree and Submit** ಕ್ಲಿಕ್ ಮಾಡಿ.

     * **Request API Signature** – API Signature ದೃಢೀಕರಣಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ.

     * **Request API Certificate** – API Certificate ದೃಢೀಕರಣಕ್ಕಾಗಿ ಆಯ್ಕೆಮಾಡಿ.

  5. PayPal ನಿಮ್ಮ API ರುಜುವಾತುಗಳನ್ನು ಈ ರೀತಿ ರಚಿಸುತ್ತದೆ:  
![PayPal ರಚಿಸಿದ API ರುಜುವಾತುಗಳು](/img/config/settings-payment-gateways.png)

     * **API Signature ರುಜುವಾತುಗಳು** API Username, API Password, ಮತ್ತು Signature ಒಳಗೊಂಡಿರುತ್ತವೆ, ಇವು ಅವಧಿ ಮುಗಿಯುವುದಿಲ್ಲ. ಹೆಚ್ಚುವರಿ ಭದ್ರತೆಗಾಗಿ ಈ ಮೌಲ್ಯಗಳು ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಮರೆಮಾಡಲಾಗಿರುತ್ತವೆ. ಅವುಗಳನ್ನು ತೋರಿಸಲು ಮತ್ತು ಮರೆಮಾಡಲು **Show/Hide** ಕ್ಲಿಕ್ ಮಾಡಿ. ಮುಗಿದ ನಂತರ, **Done** ಕ್ಲಿಕ್ ಮಾಡಿ.

     * **API Certificate ರುಜುವಾತುಗಳು** API Username, API Password, ಮತ್ತು Certificate ಒಳಗೊಂಡಿರುತ್ತವೆ, ಇವು ಮೂರು ವರ್ಷಗಳ ನಂತರ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅವಧಿ ಮುಗಿಯುತ್ತವೆ. API Certificate ಅನ್ನು ನಿಮ್ಮ ಡೆಸ್ಕ್‌ಟಾಪ್‌ಗೆ ಉಳಿಸಲು **Download Certificate** ಕ್ಲಿಕ್ ಮಾಡಿ.

ಅಷ್ಟೇ, ನಿಮ್ಮ PayPal ಪಾವತಿ ಸಂಯೋಜನೆ ಪೂರ್ಣವಾಯಿತು!

PayPal ಸೆಟ್ಟಿಂಗ್ಸ್ ಬಗ್ಗೆ ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, PayPal ನ [Help Center](https://www.paypal.com/br/smarthelp/home) ಅನ್ನು ನೋಡಬಹುದು.
