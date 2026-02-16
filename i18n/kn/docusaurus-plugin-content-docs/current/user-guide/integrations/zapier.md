---
title: Zapier ಸಂಯೋಜನೆ
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite ಅನ್ನು Zapier ನೊಂದಿಗೆ ಸಂಯೋಜಿಸುವುದು

ಹಿಂದಿನ ಲೇಖನಗಳಲ್ಲಿ ಒಂದರಲ್ಲಿ, ನಾವು [Webhooks](webhooks.md) ಬಗ್ಗೆ ಮತ್ತು ಅವುಗಳನ್ನು ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಅಪ್ಲಿಕೇಶನ್‌ಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸಲು ಹೇಗೆ ಬಳಸಬಹುದು ಎಂಬುದನ್ನು ಚರ್ಚಿಸಿದ್ದೇವೆ.

Webhooks ಬಳಸುವುದು ಸ್ವಲ್ಪ ಸಂಕೀರ್ಣವಾಗಿದೆ ಏಕೆಂದರೆ ಇದಕ್ಕೆ ಕೋಡಿಂಗ್ ಮತ್ತು payload ಗಳನ್ನು ಹಿಡಿಯುವ ಸುಧಾರಿತ ಜ್ಞಾನ ಬೇಕಾಗುತ್ತದೆ. **Zapier** ಬಳಸುವುದು ಈ ಸಮಸ್ಯೆಯನ್ನು ಸುಲಭವಾಗಿ ಪರಿಹರಿಸುವ ಮಾರ್ಗವಾಗಿದೆ.

Zapier 5000+ ಕ್ಕೂ ಹೆಚ್ಚು ಅಪ್ಲಿಕೇಶನ್‌ಗಳೊಂದಿಗೆ ಸಂಯೋಜನೆಯನ್ನು ಹೊಂದಿದೆ, ಇದು ವಿವಿಧ ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ನಡುವಿನ ಸಂವಹನವನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಘಟನೆಗಳು ಸಂಭವಿಸಿದಾಗ ಪ್ರಚೋದಿಸಲ್ಪಡುವ **Triggers** ಅನ್ನು ನೀವು ರಚಿಸಬಹುದು (ಉದಾ: ಖಾತೆ ರಚಿಸಲಾಗಿದೆ ಮತ್ತು account_create event ಪ್ರಚೋದಿಸುತ್ತದೆ) ಅಥವಾ ಬಾಹ್ಯ ಘಟನೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ **Actions** ಅನ್ನು ಉತ್ಪಾದಿಸಬಹುದು (ಉದಾ: ನಿಮ್ಮ Ultimate Multisite ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ ಖಾತೆ ಸದಸ್ಯತ್ವವನ್ನು ರಚಿಸಿ).

ಇದು ಸಾಧ್ಯವಾಗಿದೆ ಏಕೆಂದರೆ **Ultimate Multisite Zapier ನ triggers** ಮತ್ತು actions ಗಳು [REST API](https://developer.ultimatemultisite.com/api/docs/) ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.

## ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ

ಮೊದಲು, Zapier ಅಪ್ಲಿಕೇಶನ್ ಪಟ್ಟಿಯಲ್ಲಿ Ultimate Multisite ಅನ್ನು ಹುಡುಕಿ. ಪರ್ಯಾಯವಾಗಿ, ನೀವು [ಈ ಲಿಂಕ್](https://zapier.com/apps/wp-ultimo/integrations) ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬಹುದು.

ನಿಮ್ಮ dashboard ಗೆ ಹೋಗಿ ಮತ್ತು ಹೊಸ Zap ಅನ್ನು ಸೆಟಪ್ ಮಾಡಲು ಎಡ sidebar ನಲ್ಲಿರುವ **+** **Create Zap** ಬಟನ್ ಒತ್ತಿ.

![Create Zap ಬಟನ್ ಹೊಂದಿರುವ Zapier dashboard](/img/admin/webhooks-list.png)

ನಿಮ್ಮನ್ನು Zap ರಚನೆ ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತದೆ.

ಹುಡುಕಾಟ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ "wp ultimo" ಎಂದು ಟೈಪ್ ಮಾಡಿ. **Beta** ಆವೃತ್ತಿ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ.

![Zapier ಅಪ್ಲಿಕೇಶನ್ ಪಟ್ಟಿಯಲ್ಲಿ WP Ultimo ಅನ್ನು ಹುಡುಕುವುದು](/img/admin/webhooks-list.png)

ನಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ, ಲಭ್ಯವಿರುವ event ಅನ್ನು ಆರಿಸಿ: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

ಈಗ ನಾವು Zapier ಗೆ **ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ಗೆ** ಪ್ರವೇಶ ನೀಡಬೇಕಾಗಿದೆ. **Sign in** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿದರೆ **API credentials** ಅಗತ್ಯವಿರುವ ಹೊಸ ವಿಂಡೋ ತೆರೆಯುತ್ತದೆ.

![API credentials ಗಾಗಿ Zapier Sign in ಪ್ರಾಂಪ್ಟ್](/img/admin/webhooks-list.png)

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್ ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್‌ಗೆ ಹೋಗಿ ಮತ್ತು **Ultimate Multisite > Settings** > **API & Webhooks** ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ ಮತ್ತು API Settings ವಿಭಾಗವನ್ನು ಹುಡುಕಿ.

ಈ ಸಂಪರ್ಕ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಾದ **Enable API** ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.

![Ultimate Multisite ನಲ್ಲಿ Enable API ಆಯ್ಕೆ ಹೊಂದಿರುವ API Settings](/img/admin/webhooks-list.png)

API Key ಮತ್ತು API Secret ಕ್ಷೇತ್ರಗಳಲ್ಲಿ **Copy to Clipboard** ಐಕಾನ್ ಬಳಸಿ ಮತ್ತು ಆ ಮೌಲ್ಯಗಳನ್ನು integration ಪರದೆಯಲ್ಲಿ ಅಂಟಿಸಿ.

URL ಕ್ಷೇತ್ರದಲ್ಲಿ, ಪ್ರೋಟೋಕಾಲ್ (HTTP ಅಥವಾ HTTPS) ಸೇರಿದಂತೆ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನ ಪೂರ್ಣ URL ಅನ್ನು ಹಾಕಿ.

![API Key, Secret, ಮತ್ತು URL ಕ್ಷೇತ್ರಗಳೊಂದಿಗೆ Zapier integration ಪರದೆ](/img/admin/webhooks-list.png)

ಮುಂದಿನ ಹಂತಕ್ಕೆ ಮುಂದುವರಿಯಲು **Yes, Continue** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಎಲ್ಲವೂ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಿದರೆ, ನಿಮ್ಮ ಹೊಸ ಸಂಪರ್ಕಿತ ಖಾತೆಯನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ! ಹೊಸ trigger ರಚಿಸಲು **Continue** ಕ್ಲಿಕ್ ಮಾಡಿ.

## ಹೊಸ Trigger ರಚಿಸುವುದು ಹೇಗೆ

ಈಗ ನಿಮ್ಮ ಖಾತೆ ಸಂಪರ್ಕಿತವಾಗಿದೆ, ನೀವು ಲಭ್ಯವಿರುವ events ಅನ್ನು ನೋಡಬಹುದು. ಈ ಟ್ಯುಟೋರಿಯಲ್‌ಗಾಗಿ **payment_received** event ಅನ್ನು ಆರಿಸೋಣ.

![Zapier trigger ನಲ್ಲಿ payment_received event ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

Event ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ ಮತ್ತು ನೀವು **continue** ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ, **test step** ಕಾಣಿಸುತ್ತದೆ.

![Trigger ಗಾಗಿ Zapier test step](/img/admin/webhooks-list.png)

ಈ ಹಂತದಲ್ಲಿ, ನಿಮ್ಮ Zap **ಆ event ಗೆ ನಿರ್ದಿಷ್ಟ payload ಅನ್ನು ಪಡೆಯಬಹುದೇ** ಎಂದು Zapier ಪರೀಕ್ಷಿಸುತ್ತದೆ. ಅದೇ ರೀತಿಯ ಭವಿಷ್ಯದ events ನಲ್ಲಿ, ಈ ರಚನೆಯೊಂದಿಗೆ ಮಾಹಿತಿಯನ್ನು ಕಳುಹಿಸಲಾಗುತ್ತದೆ.

![Payload ನೊಂದಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡ Zapier trigger test](/img/admin/webhooks-list.png)

ನಮ್ಮ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ ಪರೀಕ್ಷೆಯು **ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ** ಮತ್ತು ಉದಾಹರಣೆ payload ಮಾಹಿತಿಯನ್ನು ಹಿಂತಿರುಗಿಸಿತು. ಈ ಉದಾಹರಣೆ ಮಾಹಿತಿಯು actions ರಚಿಸುವಾಗ ನಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಉಪಯುಕ್ತವಾಗಿರುತ್ತದೆ. ನಿಮ್ಮ trigger ಈಗ ರಚಿಸಲಾಗಿದೆ ಮತ್ತು ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.

## Actions ರಚಿಸುವುದು ಹೇಗೆ

Actions ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ ನಮೂದುಗಳನ್ನು ರಚಿಸಲು ಇತರ triggers ನಿಂದ ಮಾಹಿತಿಯನ್ನು ಬಳಸುತ್ತವೆ.

**action ರಚಿಸುವ ಹಂತದಲ್ಲಿ** ನೀವು Ultimate Multisite **Beta** ಮತ್ತು **Create Items on Ultimate Multisite** ಆಯ್ಕೆಯನ್ನು ಆರಿಸುತ್ತೀರಿ.

![Create Items on Ultimate Multisite ನೊಂದಿಗೆ action ರಚಿಸುವುದು](/img/admin/webhooks-list.png)

ಮುಂದಿನ ಹಂತದಲ್ಲಿ ನೀವು **ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ** ವಿಭಾಗದಲ್ಲಿ ಮಾಡಿದಂತೆ ನಿಮ್ಮ authentication ರಚಿಸುತ್ತೀರಿ, ಅಥವಾ ಮೊದಲೇ ರಚಿಸಿದ authentication ಅನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತೀರಿ. ಈ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ ನಾವು ಮೊದಲು ರಚಿಸಿದ authentication ಅನ್ನೇ ಆಯ್ಕೆ ಮಾಡುತ್ತೇವೆ.

![Zapier action ಗಾಗಿ authentication ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

### Action ಅನ್ನು ಸೆಟಪ್ ಮಾಡುವುದು

ಇದು **action ನ ಮುಖ್ಯ ಹಂತ** ಮತ್ತು ಇಲ್ಲಿ ವಿಷಯಗಳು ಸ್ವಲ್ಪ ವಿಭಿನ್ನವಾಗಿವೆ. ನೀವು ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲ ಮಾಹಿತಿ **Item** ಆಗಿದೆ. Item ಎಂದರೆ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನ **ಮಾಹಿತಿ ಮಾದರಿ**, ಉದಾಹರಣೆಗೆ **Customers, Payments, Sites, Emails** ಮತ್ತು ಇತರವುಗಳು.

![Zapier action ಗಾಗಿ Item ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

Item ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ಆಯ್ಕೆ ಮಾಡಿದ item ಗಾಗಿ **ಅಗತ್ಯ ಮತ್ತು ಐಚ್ಛಿಕ ಕ್ಷೇತ್ರಗಳನ್ನು ತರಲು** ಫಾರ್ಮ್ ಮರುವ್ಯವಸ್ಥೆಗೊಳ್ಳುತ್ತದೆ.

ಉದಾಹರಣೆಗೆ, **Customer** item ಆಯ್ಕೆ ಮಾಡಿದಾಗ, ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ Customer ರಚಿಸಲು ಭರ್ತಿ ಮಾಡಬೇಕಾದ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಫಾರ್ಮ್ ಕ್ಷೇತ್ರಗಳು ತರುತ್ತವೆ.

![Zapier action ಸೆಟಪ್‌ನಲ್ಲಿ Customer item ಕ್ಷೇತ್ರಗಳು](/img/admin/webhooks-list.png)

**required** ಎಂದು ಗುರುತಿಸಲಾದ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿದ ನಂತರ ಮತ್ತು continue ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ, ಕೊನೆಯ ಪರದೆಯು ಭರ್ತಿ ಮಾಡಿದ ಕ್ಷೇತ್ರಗಳು ಮತ್ತು ಭರ್ತಿ ಮಾಡದೆ ಬಿಟ್ಟ ಕ್ಷೇತ್ರಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.

![ಭರ್ತಿ ಮಾಡಿದ ಮತ್ತು ಭರ್ತಿ ಮಾಡದ ಕ್ಷೇತ್ರಗಳನ್ನು ತೋರಿಸುವ Zapier action test](/img/admin/webhooks-list.png)

ನಿಮ್ಮ ಪರೀಕ್ಷೆ ಪೂರ್ಣಗೊಂಡು ಯಶಸ್ವಿಯಾದ ತಕ್ಷಣ ನಿಮ್ಮ action ಕಾನ್ಫಿಗರ್ ಆಗಿದೆ. ನಿಮ್ಮ action ನ ಪರೀಕ್ಷೆಯೊಂದಿಗೆ item ರಚಿಸಲಾಗಿದೆಯೇ ಎಂದು ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸುವುದು ಕೂಡ ಮುಖ್ಯವಾಗಿದೆ.
