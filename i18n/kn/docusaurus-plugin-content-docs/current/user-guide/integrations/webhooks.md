---
title: ವೆಬ್‌ಹುಕ್‌ಗಳು
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) ನ ಮೊದಲ ನೋಟ

_**ಗಮನಿಸಿ: ಈ ವೈಶಿಷ್ಟ್ಯ ಅಥವಾ ಲೇಖನವು ಮುಂದುವರಿದ ಬಳಕೆದಾರರಿಗಾಗಿ ಮಾತ್ರ.**_

**Webhook** ಎಂದರೆ Ultimate Multisite ನಂತಹ ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ಸಾಫ್ಟ್‌ವೇರ್ ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ತಕ್ಷಣದ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುವ ಒಂದು ವಿಧಾನ. Webhook ಘಟನೆ ನಡೆದ ತಕ್ಷಣವೇ ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ಡೇಟಾ ಅಥವಾ payload ಗಳನ್ನು ತಲುಪಿಸುತ್ತದೆ, ಅಂದರೆ ನೀವು **ಡೇಟಾವನ್ನು ತಕ್ಷಣವೇ ಪಡೆಯುತ್ತೀರಿ.**

ಯಾವುದೇ ಈವೆಂಟ್ ಟ್ರಿಗರ್ ಆದಾಗ Ultimate Multisite ನಿಂದ ಬೇರೊಂದು CRM ಅಥವಾ ಸಿಸ್ಟಮ್‌ಗೆ ನಿರ್ದಿಷ್ಟ ಡೇಟಾವನ್ನು ಸಂಯೋಜಿಸಬೇಕಾದರೆ ಅಥವಾ ರವಾನಿಸಬೇಕಾದರೆ ಇದು ಸಹಾಯಕವಾಗಿದೆ. ಉದಾಹರಣೆಗೆ, ಹೊಸ ಬಳಕೆದಾರ ಖಾತೆ ರಚನೆಯಾದಾಗಲೆಲ್ಲಾ ಬಳಕೆದಾರರ ಹೆಸರು ಮತ್ತು ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಮೇಲಿಂಗ್ ಪಟ್ಟಿಗೆ ಕಳುಹಿಸಬೇಕಾಗಿದೆ.

## Webhook ಅನ್ನು ಹೇಗೆ ರಚಿಸುವುದು

Webhook ರಚಿಸಲು, ನಿಮ್ಮ network admin dashboard ಗೆ ಹೋಗಿ. **Ultimate Multisite > Webhooks > Add New Webhook** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![Add New Webhook ಬಟನ್ ಇರುವ Webhooks ಪಟ್ಟಿ ಪುಟ](/img/admin/webhooks-list.png)

ಹೊಸ webhook ರಚಿಸುವಾಗ **Name, URL,** ಮತ್ತು **Event** ನಂತಹ ಮಾಹಿತಿಯನ್ನು ಕೇಳಲಾಗುತ್ತದೆ. ನಿಮ್ಮ webhook ಗೆ ನಿಮಗೆ ಬೇಕಾದ ಯಾವುದೇ ಹೆಸರನ್ನು ಬಳಸಬಹುದು. ಅತ್ಯಂತ ಮುಖ್ಯವಾದ ಕ್ಷೇತ್ರಗಳೆಂದರೆ URL ಮತ್ತು Event.

![Name, URL, ಮತ್ತು Event ಕ್ಷೇತ್ರಗಳಿರುವ ಹೊಸ webhook ಫಾರ್ಮ್](/img/admin/webhooks-list.png)

URL ಎಂದರೆ Ultimate Multisite **payload ಅಥವಾ ಡೇಟಾ** ಕಳುಹಿಸುವ **endpoint ಅಥವಾ ಗಮ್ಯಸ್ಥಾನ**. ಇದು ಡೇಟಾವನ್ನು ಸ್ವೀಕರಿಸುವ ಅಪ್ಲಿಕೇಶನ್ ಆಗಿದೆ.

ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಅಪ್ಲಿಕೇಶನ್‌ಗಳೊಂದಿಗೆ ಸಂಯೋಜನೆಯನ್ನು ಸುಲಭಗೊಳಿಸಲು ಬಳಕೆದಾರರು ಹೆಚ್ಚಾಗಿ ಬಳಸುವ ಸಾಮಾನ್ಯ ಪರಿಹಾರವೆಂದರೆ Zapier. Zapier ನಂತಹ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಇಲ್ಲದೆ, ಡೇಟಾವನ್ನು ಸ್ವೀಕರಿಸಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ನೀವು ಹಸ್ತಚಾಲಿತವಾಗಿ ಕಸ್ಟಮ್ ಫಂಕ್ಷನ್ ರಚಿಸಬೇಕಾಗುತ್ತದೆ. **Zapier ನೊಂದಿಗೆ Ultimate Multisite webhook ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು** ಎಂಬ ಈ ಲೇಖನವನ್ನು ನೋಡಿ.

ಈ ಲೇಖನದಲ್ಲಿ, webhook ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು Ultimate Multisite ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಈವೆಂಟ್‌ಗಳ ಮೂಲ ಪರಿಕಲ್ಪನೆಯನ್ನು ನೋಡೋಣ. ನಾವು [requestbin.com](https://requestbin.com/) ಎಂಬ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಸೈಟ್ ಬಳಸುತ್ತೇವೆ. ಈ ಸೈಟ್ ಯಾವುದೇ ಕೋಡಿಂಗ್ ಮಾಡದೆ endpoint ರಚಿಸಲು ಮತ್ತು payload ಅನ್ನು ಸ್ವೀಕರಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. _**ಹಕ್ಕು ನಿರಾಕರಣೆ: ಇದು ಡೇಟಾ ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ತೋರಿಸುವುದಷ್ಟೇ ಮಾಡುತ್ತದೆ.**_ payload ಗೆ ಯಾವುದೇ ಪ್ರಕ್ರಿಯೆ ಅಥವಾ ಕ್ರಿಯೆ ನಡೆಯುವುದಿಲ್ಲ.

[requestbin.com](https://requestbin.com/) ಗೆ ಹೋಗಿ ಮತ್ತು Create Request Bin ಕ್ಲಿಕ್ ಮಾಡಿ.

![RequestBin ವೆಬ್‌ಸೈಟ್ Create Request Bin ಬಟನ್](/img/admin/webhooks-list.png)

ಆ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದ ನಂತರ, ನಿಮಗೆ ಈಗಾಗಲೇ ಖಾತೆ ಇದ್ದರೆ ಲಾಗ್ ಇನ್ ಮಾಡಲು ಅಥವಾ ಸೈನ್ ಅಪ್ ಮಾಡಲು ಕೇಳಲಾಗುತ್ತದೆ. ಖಾತೆ ಈಗಾಗಲೇ ಇದ್ದರೆ ನೇರವಾಗಿ ಅವರ dashboard ಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ. ಅವರ dashboard ನಲ್ಲಿ, ನಿಮ್ಮ Ultimate Multisite webhook ರಚಿಸಲು ಬಳಸಬಹುದಾದ endpoint ಅಥವಾ URL ಅನ್ನು ತಕ್ಷಣವೇ ನೋಡುತ್ತೀರಿ.

![Endpoint URL ತೋರಿಸುವ RequestBin dashboard](/img/admin/webhooks-list.png)

URL ಅನ್ನು ನಕಲಿಸಿ ಮತ್ತು Ultimate Multisite ಗೆ ಹಿಂತಿರುಗಿ. URL ಕ್ಷೇತ್ರದಲ್ಲಿ endpoint ಹಾಕಿ ಮತ್ತು dropdown ನಿಂದ ಒಂದು event ಆಯ್ಕೆಮಾಡಿ. ಈ ಉದಾಹರಣೆಯಲ್ಲಿ, ನಾವು **Payment Received** ಆಯ್ಕೆಮಾಡುತ್ತೇವೆ.

ಬಳಕೆದಾರರು ಪಾವತಿ ಮಾಡಿದಾಗಲೆಲ್ಲಾ ಈ event ಟ್ರಿಗರ್ ಆಗುತ್ತದೆ. ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ event ಗಳು, ಅವುಗಳ ವಿವರಣೆ ಮತ್ತು payload ಗಳನ್ನು ಪುಟದ ಕೆಳಭಾಗದಲ್ಲಿ ಪಟ್ಟಿಮಾಡಲಾಗಿದೆ. Webhook ಉಳಿಸಲು **Add New Webhook** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

![Payment Received event ನೊಂದಿಗೆ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ Webhook](/img/admin/webhooks-list.png)

ನಾವು ರಚಿಸಿದ webhook ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ನೋಡಲು ಈಗ endpoint ಗೆ ಟೆಸ್ಟ್ event ಕಳುಹಿಸಬಹುದು. ನಾವು ರಚಿಸಿದ webhook ಕೆಳಗಿರುವ **Send Test Event** ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ ಇದನ್ನು ಮಾಡಬಹುದು.

![Webhook ಕೆಳಗೆ Send Test Event ಆಯ್ಕೆ](/img/admin/webhooks-list.png)

ಟೆಸ್ಟ್ ಯಶಸ್ವಿಯಾಗಿದೆ ಎಂದು ಹೇಳುವ ದೃಢೀಕರಣ ವಿಂಡೋ ತೋರಿಸುತ್ತದೆ.

![Webhook ಟೆಸ್ಟ್ event ಯಶಸ್ವಿ ದೃಢೀಕರಣ](/img/admin/webhooks-list.png)

ಈಗ ನಾವು _Requestbin_ ಸೈಟ್‌ಗೆ ಹಿಂತಿರುಗಿದರೆ, ಕೆಲವು ಟೆಸ್ಟ್ ಡೇಟಾ ಒಳಗೊಂಡ payload ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ನೋಡುತ್ತೇವೆ.

![ಸ್ವೀಕರಿಸಿದ webhook payload ಡೇಟಾ ತೋರಿಸುವ RequestBin](/img/admin/webhooks-list.png)

Webhook ಮತ್ತು endpoint ಗಳು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂಬುದರ ಮೂಲ ತತ್ವ ಇದು. ನೀವು ಕಸ್ಟಮ್ endpoint ರಚಿಸಬೇಕಾದರೆ, Ultimate Multisite ನಿಂದ ನೀವು ಸ್ವೀಕರಿಸುವ ಡೇಟಾವನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಕಸ್ಟಮ್ ಫಂಕ್ಷನ್ ರಚಿಸಬೇಕಾಗುತ್ತದೆ.
