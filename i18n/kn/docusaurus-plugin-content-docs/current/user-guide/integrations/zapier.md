---
title: Zapier ಏಕೀಕರಣ
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ಅನ್ನು Zapier ಜೊತೆಗೆ ಏಕೀಕರಿಸುವುದು {#integrating-ultimate-multisite-with-zapier}

ಲೇಖನಗಳಲ್ಲಿೊಂದರಲ್ಲಿ, ನಾವು [Webhooks](webhooks.md) ಕುರಿತು ಮತ್ತು ಅವುಗಳನ್ನು 3ನೇ ಪಕ್ಷದ ಅಪ್ಲಿಕೇಶನ್‌ಗಳೊಂದಿಗೆ ಏಕೀಕರಿಸಲು ಹೇಗೆ ಬಳಸಬಹುದು ಎಂಬುದರ ಬಗ್ಗೆ ಚರ್ಚಿಸಿದ್ದೇವೆ.

Webhooks ಬಳಸುವುದು ಸ್ವಲ್ಪ ಸಂಕೀರ್ಣವಾಗಿದೆ. ಏಕೆಂದರೆ ಇದಕ್ಕೆ ಕೋಡಿಂಗ್ ಮತ್ತು ಪೇಲೋಡ್‌ಗಳನ್ನು ಹಿಡಿಯುವಲ್ಲಿ ಮುಂದುವರಿದ ಜ್ಞಾನ ಬೇಕಾಗುತ್ತದೆ. **Zapier** ಬಳಸುವುದು ಇದನ್ನು ಸುಲಭವಾಗಿ ನಿಭಾಯಿಸುವ ಒಂದು ಮಾರ್ಗ.

Zapier 5000+ ಕ್ಕಿಂತ ಹೆಚ್ಚು ಆಪ್‌ಗಳೊಂದಿಗೆ ಏಕೀಕರಣ ಹೊಂದಿದೆ. ಇದರಿಂದ ಬೇರೆ ಬೇರೆ ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ನಡುವೆ ಸಂವಹನ ಸುಲಭವಾಗುತ್ತದೆ.

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಘಟನೆಗಳು ನಡೆದಾಗ ಕಾರ್ಯಗತಗೊಳ್ಳುವ **ಟ್ರಿಗರ್‌ಗಳನ್ನು** ನೀವು ರಚಿಸಬಹುದು (ಉದಾ: account ರಚನೆಯಾಗಿ account_create event ಅನ್ನು ಟ್ರಿಗರ್ ಮಾಡುತ್ತದೆ) ಅಥವಾ ಹೊರಗಿನ ಘಟನೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ **ಕ್ರಿಯೆಗಳನ್ನು** ರಚಿಸಬಹುದು (ಉದಾ: ನಿಮ್ಮ Ultimate Multisite ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ account membership ರಚಿಸುವುದು).

ಇದು ಸಾಧ್ಯವಾಗುವುದಕ್ಕೆ ಕಾರಣ **Ultimate Multisite Zapier's triggers** ಮತ್ತು ಕ್ರಿಯೆಗಳು [REST API](https://developer.ultimatemultisite.com/api/docs/) ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.

## ಹೇಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು {#how-to-start}

ಮೊದಲು, Zapier app ಪಟ್ಟಿಯಲ್ಲಿ Ultimate Multisite ಅನ್ನು ಹುಡುಕಿ. ಪರ್ಯಾಯವಾಗಿ, ನೀವು [ಈ ಲಿಂಕ್](https://zapier.com/apps/wp-ultimo/integrations) ಕ್ಲಿಕ್ ಮಾಡಬಹುದು.

ಹೊಸ Zap ಅನ್ನು ಹೊಂದಿಸಲು ನಿಮ್ಮ Dashboard ಗೆ ಹೋಗಿ ಮತ್ತು ಎಡ sidebar ನಲ್ಲಿರುವ **+** **Zap ರಚಿಸಿ** ಬಟನ್ ಒತ್ತಿ.

![Zap ರಚಿಸಿ ಬಟನ್ ಇರುವ Zapier dashboard](/img/admin/webhooks-list.png)

ನಿಮ್ಮನ್ನು Zap ರಚನೆ ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.

ಹುಡುಕಾಟ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ "wp ultimo" ಎಂದು ಟೈಪ್ ಮಾಡಿ. **Beta** ಆವೃತ್ತಿ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ.

![Zapier app ಪಟ್ಟಿಯಲ್ಲಿ WP Ultimo ಹುಡುಕುವುದು](/img/admin/webhooks-list.png)

ನಮ್ಮ app ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ, ಲಭ್ಯವಿರುವ event ಆಯ್ಕೆ ಮಾಡಿ: **ಹೊಸ Ultimate Multisite Event**.

![ಹೊಸ Ultimate Multisite Event trigger ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

ಈಗ ನಾವು Zapier ಗೆ **ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್** ಪ್ರವೇಶ ನೀಡಬೇಕು. **ಸೈನ್ ಇನ್** ಕ್ಲಿಕ್ ಮಾಡಿದರೆ **API credentials** ಕೇಳುವ ಹೊಸ ವಿಂಡೋ ತೆರೆಯುತ್ತದೆ.

![API credentials ಗಾಗಿ Zapier Sign in prompt](/img/admin/webhooks-list.png)

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್ admin panel ಗೆ ಹೋಗಿ **Ultimate Multisite > Settings** > **API & Webhooks** ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ ಮತ್ತು API Settings ವಿಭಾಗವನ್ನು ಹುಡುಕಿ.

ಈ ಸಂಪರ್ಕ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಿರುವುದರಿಂದ **API ಸಕ್ರಿಯಗೊಳಿಸಿ** ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.

![API Settings ಮತ್ತು Enable API ಆಯ್ಕೆಗಳಿರುವ API and Webhooks settings](/img/admin/settings-api-webhooks.png)

API Key ಮತ್ತು API Secret field ಗಳಲ್ಲಿರುವ **Clipboard ಗೆ ನಕಲಿಸಿ** ಐಕಾನ್ ಬಳಸಿ, ಆ ಮೌಲ್ಯಗಳನ್ನು ಏಕೀಕರಣ ಪರದೆಯಲ್ಲಿ ಅಂಟಿಸಿ.

URL field ನಲ್ಲಿ, protocol (HTTP ಅಥವಾ HTTPS) ಸೇರಿಸಿ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನ ಸಂಪೂರ್ಣ URL ಹಾಕಿ.

![API Key, Secret, ಮತ್ತು URL field ಗಳಿರುವ Zapier integration screen](/img/admin/webhooks-list.png)

ಮುಂದಿನ ಹಂತಕ್ಕೆ ಸಾಗಲು **ಹೌದು, ಮುಂದುವರಿಸಿ** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಎಲ್ಲವೂ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಿದರೆ, ನಿಮ್ಮ ಹೊಸ ಸಂಪರ್ಕಿತ account ನಿಮಗೆ ಕಾಣಿಸುತ್ತದೆ! ಹೊಸ trigger ರಚಿಸಲು **ಮುಂದುವರಿಸಿ** ಕ್ಲಿಕ್ ಮಾಡಿ.

## ಹೊಸ Trigger ಅನ್ನು ಹೇಗೆ ರಚಿಸಬೇಕು {#how-to-create-a-new-trigger}

ಈಗ ನಿಮ್ಮ account ಸಂಪರ್ಕಗೊಂಡಿರುವುದರಿಂದ ಲಭ್ಯವಿರುವ events ಅನ್ನು ನೀವು ನೋಡಬಹುದು. ಈ ಟ್ಯುಟೋರಿಯಲ್‌ಗಾಗಿ **payment_received** event ಅನ್ನು ಆರಿಸೋಣ.

![Zapier trigger ನಲ್ಲಿ payment_received event ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

event ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ ನೀವು **ಮುಂದುವರಿಸಿ** ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ, **ಪರೀಕ್ಷಾ ಹಂತ** ಕಾಣಿಸುತ್ತದೆ.

![trigger ಗಾಗಿ Zapier test step](/img/admin/webhooks-list.png)

ಈ ಹಂತದಲ್ಲಿ, ನಿಮ್ಮ Zap **ಆ event ಗೆ ಸಂಬಂಧಿಸಿದ ನಿರ್ದಿಷ್ಟ payload ಅನ್ನು ಪಡೆಯಬಹುದೇ** ಎಂದು Zapier ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಅದೇ ಪ್ರಕಾರದ ಮುಂದಿನ events ನಲ್ಲಿ, ಇದೇ ರಚನೆಯ ಮಾಹಿತಿಯನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತದೆ.

![payload ಜೊತೆಗೆ Zapier trigger test ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ](/img/admin/webhooks-list.png)

ನಮ್ಮ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ ಪರೀಕ್ಷೆ **ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿತು** ಮತ್ತು payload ಉದಾಹರಣೆ ಮಾಹಿತಿಯನ್ನು ಮರಳಿಸಿತು. ಕ್ರಿಯೆಗಳನ್ನು ರಚಿಸುವಾಗ ಈ ಉದಾಹರಣೆ ಮಾಹಿತಿ ನಮಗೆ ಮಾರ್ಗದರ್ಶಿಯಾಗುತ್ತದೆ. ನಿಮ್ಮ trigger ಈಗ ರಚಿಸಲಾಗಿದೆ ಮತ್ತು ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.

## Actions ಅನ್ನು ಹೇಗೆ ರಚಿಸಬೇಕು {#how-to-create-actions}

Actions ಇತರ triggers ನಿಂದ ಮಾಹಿತಿಯನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ ನಮೂದುಗಳನ್ನು ರಚಿಸುತ್ತವೆ.

**ಕ್ರಿಯೆ ರಚಿಸುವ ಹಂತದಲ್ಲಿ** ನೀವು Ultimate Multisite **Beta** ಮತ್ತು **Ultimate Multisite ನಲ್ಲಿ Items ರಚಿಸಿ** ಆಯ್ಕೆಯನ್ನು ಆರಿಸುತ್ತೀರಿ.

![Ultimate Multisite ನಲ್ಲಿ Items ರಚಿಸಿ ಬಳಸಿ action ರಚಿಸುವುದು](/img/admin/webhooks-list.png)

ಮುಂದಿನ ಹಂತದಲ್ಲಿ, **ಹೇಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು** ನಲ್ಲಿ ಮಾಡಿದಂತೆ ನಿಮ್ಮ authentication ರಚಿಸಬಹುದು, ಅಥವಾ ಈಗಾಗಲೇ ರಚಿಸಿರುವ authentication ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಈ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ ನಾವು ಹಿಂದೆ ರಚಿಸಿದ ಅದೇ authentication ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ.

![Zapier action ಗಾಗಿ authentication ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

### Action ಹೊಂದಿಸುವುದು {#setting-up-the-action}

ಇದು **action ನ ಮುಖ್ಯ ಹಂತ** ಮತ್ತು ಇಲ್ಲಿ ವಿಷಯಗಳು ಸ್ವಲ್ಪ ವಿಭಿನ್ನವಾಗಿವೆ. ನೀವು ಮೊದಲು ಆರಿಸುವ ಮಾಹಿತಿ **Item** ಆಗಿದೆ. Item ಎಂದರೆ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನ **ಮಾಹಿತಿ ಮಾದರಿ**, ಉದಾಹರಣೆಗೆ **Customers, Payments, Sites, Emails** ಮತ್ತು ಇತರೆ.

![Zapier action ಗಾಗಿ Item ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

item ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ಆಯ್ಕೆ ಮಾಡಿದ item ಗಾಗಿ **ಅಗತ್ಯ ಮತ್ತು ಐಚ್ಛಿಕ field ಗಳನ್ನು ತರುವಂತೆ form ಮರುಹೊಂದಿಸಲಾಗುತ್ತದೆ**.

ಉದಾಹರಣೆಗೆ, **Customer** item ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ Customer ರಚಿಸಲು ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಎಲ್ಲವನ್ನೂ form fields ತರುತ್ತವೆ.

![Zapier action setup ನಲ್ಲಿ Customer item fields](/img/admin/webhooks-list.png)

**ಅಗತ್ಯ** ಎಂದು ಗುರುತಿಸಲಾದ ಎಲ್ಲಾ fields ಭರ್ತಿ ಮಾಡಿ continue ಕ್ಲಿಕ್ ಮಾಡಿದ ನಂತರ, ಕೊನೆಯ ಪರದೆ ಭರ್ತಿ ಮಾಡಿದ fields ಮತ್ತು ಖಾಲಿ ಉಳಿದ fields ತೋರಿಸುತ್ತದೆ.

![ಭರ್ತಿ ಮಾಡಿದ ಮತ್ತು ಖಾಲಿ ಉಳಿದ fields ತೋರಿಸುವ Zapier action test](/img/admin/webhooks-list.png)

ನಿಮ್ಮ test ಪೂರ್ಣಗೊಂಡು ಯಶಸ್ವಿಯಾದ ಕೂಡಲೇ ನಿಮ್ಮ action ಸಂರಚಿಸಲಾಗಿದೆ. ನಿಮ್ಮ action ಪರೀಕ್ಷೆಯೊಂದಿಗೆ item ರಚನೆಯಾಗಿದೆಯೇ ಎಂದು ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸುವುದೂ ಮುಖ್ಯ.
