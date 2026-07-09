---
title: ಕೈಯಾರೆ ಪಾವತಿಗಳನ್ನು ಹೊಂದಿಸುವುದು
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Payments (v2) ಹೊಂದಿಸುವುದು {#setting-up-manual-payments-v2}

_**ಮುಖ್ಯ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ.**_

ನಿಮ್ಮ ಬಳಕೆದಾರರಿಗೆ **Stripe** ಅಥವಾ **PayPal** ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಇತರ ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ನೀಡಲು Manual payments ಒಂದು ಮಾರ್ಗವಾಗಿದೆ. ಇದು ವೈರ್ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಆಗಿರಬಹುದು, ಅಥವಾ ನಿಮ್ಮ ಬಳಕೆದಾರರಿಗೆ ಸ್ಥಳೀಯವಾಗಿ ಲಭ್ಯವಿರುವ ಬೇರೆ ಯಾವುದೇ ಪಾವತಿ ವಿಧಾನವಾಗಿರಬಹುದು.

## Manual Payments ಸಕ್ರಿಯಗೊಳಿಸುವುದು ಹೇಗೆ {#how-to-enable-manual-payments}

Manual payment ಹೊಂದಿಸುವುದು ತುಂಬಾ ಸುಲಭ. ನೀವು ಅದನ್ನು payment gateways ಅಡಿಯಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಿ, ಬಳಕೆದಾರರು ಪಾವತಿಯನ್ನು ಹೇಗೆ ಕಳುಹಿಸಬೇಕು ಎಂಬುದರ ಬಗ್ಗೆ ವಿವರವಾದ ಸೂಚನೆಗಳನ್ನು ನಮೂದಿಸಬೇಕು.

ಮೊದಲು, **Ultimate Multisite > Settings > Payments** ಗೆ ಹೋಗಿ. **Payment Gateways** ಕೆಳಗೆ, **Manual** ಅನ್ನು ಆನ್ ಮಾಡಿ. ನಿಮಗಾಗಿ **Payment Instructions** ಬಾಕ್ಸ್ ಕಾಣಿಸಿಕೊಳ್ಳುವುದನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ.

ಪಾವತಿ ಮಾಡಲು ನಿಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಬೇಕಾಗುವ ಮಾಹಿತಿಯನ್ನು ಈ ಬಾಕ್ಸ್‌ಗೆ ಸೇರಿಸಿ. ಉದಾಹರಣೆಗೆ, ಇದು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ Account ವಿವರಗಳು ಮತ್ತು ಗ್ರಾಹಕರು ಪಾವತಿ ದೃಢೀಕರಣವನ್ನು ನಿಮಗೆ ಕಳುಹಿಸಲು ನಿಮ್ಮ ಇಮೇಲ್ ಆಗಿರಬಹುದು.

![Payment Instructions ಪಠ್ಯ ಪ್ರದೇಶದೊಂದಿಗೆ Manual payment gateway toggle](/img/config/manual-gateway-expanded.png)

Manual gateway settings ಇಂಟರ್‌ಫೇಸ್ ಇಲ್ಲಿದೆ:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ಅದನ್ನು ಹೊಂದಿಸಿದ ನಂತರ, **Save Settings** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಅಷ್ಟೇ ಮುಗಿಯಿತು. ಬಳಕೆದಾರರು ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ನೋಂದಾಯಿಸಿದಾಗ, ಖರೀದಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ನಿಮ್ಮ ಸೂಚನೆಗಳನ್ನು ಅವರು ಸ್ವೀಕರಿಸುತ್ತಾರೆ ಎಂದು ತಿಳಿಸುವ ಸಂದೇಶವನ್ನು ನೋಡುತ್ತಾರೆ.

![ಬಳಕೆದಾರರು ಪಾವತಿ ಸೂಚನೆಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾರೆ ಎಂದು ತಿಳಿಸುವ ನೋಂದಣಿ ದೃಢೀಕರಣ ಸಂದೇಶ](/img/frontend/registration-manual-notice.png)

ಮತ್ತು ಅವರು ನಿಮ್ಮ ಪಾವತಿ ಸೂಚನೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ **Thank You** ಪುಟದಲ್ಲಿಯೂ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸುತ್ತಾರೆ.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual payments ದೃಢೀಕರಿಸುವುದು {#confirming-manual-payments}

Manual payment ದೃಢೀಕರಿಸಲು, ಎಡ ಬಾರ್‌ನಲ್ಲಿರುವ **Payments** ಮೆನುಗೆ ಹೋಗಿ. ಅಲ್ಲಿ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಪಾವತಿಗಳು ಮತ್ತು ಅವುಗಳ ವಿವರಗಳನ್ನು, ಅವುಗಳ **status** ಸೇರಿ, ನೋಡಬಹುದು. ನೀವು ಕೈಯಾರೆ ಬದಲಾಯಿಸುವವರೆಗೆ Manual payment ಯಾವಾಗಲೂ **Pending** status ಹೊಂದಿರುತ್ತದೆ.

![ಬಾಕಿ ಇರುವ Manual payment ತೋರಿಸುವ Payments ಪಟ್ಟಿ](/img/admin/payments-list.png)

**reference code** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ ಪಾವತಿ ಪುಟಕ್ಕೆ ಪ್ರವೇಶಿಸಿ. ಈ ಪುಟದಲ್ಲಿ pending payment‌ನ ಎಲ್ಲಾ ವಿವರಗಳು ಇರುತ್ತವೆ, ಉದಾಹರಣೆಗೆ reference ID, ಉತ್ಪನ್ನಗಳು, ಸಮಯ ಮುದ್ರೆಗಳು ಮತ್ತು ಇನ್ನಷ್ಟು.

![Reference code, ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಮೊತ್ತಗಳನ್ನು ತೋರಿಸುವ ಪಾವತಿ ವಿವರಗಳ ಪುಟ](/img/admin/payment-edit.png)

ಬಲ ಕಾಲಮ್‌ನಲ್ಲಿ, ನೀವು ಪಾವತಿಯ status ಅನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಅದನ್ನು **Completed** ಗೆ ಬದಲಾಯಿಸಿ ಮತ್ತು **Activate Membership** ಆಯ್ಕೆಯನ್ನು toggle ಮಾಡಿದರೆ, ನಿಮ್ಮ ಗ್ರಾಹಕರ ಸೈಟ್ ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತದೆ ಮತ್ತು ಅವರ membership ಸಕ್ರಿಯವಾಗಿರುತ್ತದೆ.

![Status ಅನ್ನು Completed ಗೆ ಹೊಂದಿಸಿ Activate Membership toggle ಹೊಂದಿರುವ Payment edit ಪುಟ](/img/admin/payment-activate-membership.png)
