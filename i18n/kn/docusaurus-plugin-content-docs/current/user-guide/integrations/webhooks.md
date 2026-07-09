---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) ಕುರಿತು ಮೊದಲ ನೋಟ

_**ಗಮನಿಸಿ: ಈ ವೈಶಿಷ್ಟ್ಯ ಅಥವಾ ಲೇಖನವು ಮುಂದುವರಿದ ಬಳಕೆದಾರರಿಗಾಗಿ ಎಂಬುದನ್ನು ಗಮನಿಸಿ.**_

**webhook** ಎಂದರೆ Ultimate Multisite ನಂತಹ app ಅಥವಾ software ಇತರ application‌ಗಳಿಗೆ ನೈಜ-ಸಮಯದ ಮಾಹಿತಿಯನ್ನು ನೀಡುವ ವಿಧಾನ. webhook ಡೇಟಾ ಅಥವಾ payload‌ಗಳನ್ನು ಘಟನೆ ನಡೆಯುತ್ತಿದ್ದಂತೆಯೇ ಇತರ application‌ಗಳಿಗೆ ಕಳುಹಿಸುತ್ತದೆ. ಅಂದರೆ ನೀವು **ಡೇಟಾವನ್ನು ತಕ್ಷಣ ಪಡೆಯುತ್ತೀರಿ.**

Ultimate Multisite ನಿಂದ ಇನ್ನೊಂದು CRM ಅಥವಾ system ಗೆ ನಿರ್ದಿಷ್ಟ ಡೇಟಾವನ್ನು ಸಂಯೋಜಿಸಬೇಕಾದರೆ ಅಥವಾ ಕಳುಹಿಸಬೇಕಾದರೆ, ಪ್ರತಿ ಬಾರಿ event trigger ಆದಾಗ ಇದು ಸಹಾಯಕ. ಉದಾಹರಣೆಗೆ, ಹೊಸ ಬಳಕೆದಾರ Account ಸೃಷ್ಟಿಯಾದ ಪ್ರತಿ ಬಾರಿ ಬಳಕೆದಾರರ ಹೆಸರು ಮತ್ತು email address ಅನ್ನು mailing list ಗೆ ಕಳುಹಿಸಬೇಕು.

## webhook ಅನ್ನು ಹೇಗೆ ರಚಿಸುವುದು

webhook ರಚಿಸಲು, ನಿಮ್ಮ network admin dashboard ಗೆ ಹೋಗಿ. **Ultimate Multisite > Webhooks > Add New Webhook** ಮೇಲೆ click ಮಾಡಿ.

![Add New Webhook button ಇರುವ ಖಾಲಿ Webhooks ಪಟ್ಟಿಯ ಪುಟ](/img/admin/webhooks-list-empty.png)

ನಂತರ ನೀವು webhook configuration ಅನ್ನು ಸಂಪಾದಿಸಬಹುದು:

![Name, Event, ಮತ್ತು URL fields ಇರುವ Add New Webhook form](/img/admin/webhook-add-modal.png)

ಹೊಸ webhook ರಚಿಸುವಾಗ **Name, URL,** ಮತ್ತು **Event** ಮುಂತಾದ ಮಾಹಿತಿಯನ್ನು ಕೇಳಲಾಗುತ್ತದೆ. ನಿಮ್ಮ webhook ಗೆ ನೀವು ಬಯಸುವ ಯಾವುದೇ ಹೆಸರನ್ನು ಬಳಸಬಹುದು. ಅತ್ಯಂತ ಮುಖ್ಯ fields ಎಂದರೆ URL ಮತ್ತು Event.

![URL field ಮತ್ತು payload preview ತೋರಿಸುವ webhook edit interface](/img/admin/webhook-url-field.png)

URL ಎಂದರೆ Ultimate Multisite **payload ಅಥವಾ data** ಅನ್ನು ಕಳುಹಿಸುವ **endpoint ಅಥವಾ destination**. ಇದೇ data ಸ್ವೀಕರಿಸುವ application.

3rd party application ಜೊತೆ integration ಅನ್ನು ಸುಲಭಗೊಳಿಸಲು ಬಳಕೆದಾರರು ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸುವ ಪರಿಹಾರ Zapier. Zapier ನಂತಹ platform ಇಲ್ಲದೆ, data ಅನ್ನು ಹಿಡಿದು process ಮಾಡುವ custom function ಅನ್ನು ನೀವು ಕೈಯಾರೆ ರಚಿಸಬೇಕು. **Ultimate Multisite webhook ಅನ್ನು Zapier ಜೊತೆ ಹೇಗೆ ಬಳಸುವುದು** ಎಂಬ ಈ ಲೇಖನವನ್ನು ನೋಡಿ.

ಈ ಲೇಖನದಲ್ಲಿ, webhook ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು Ultimate Multisite ನಲ್ಲಿ ಲಭ್ಯವಿರುವ events ಯಾವುವು ಎಂಬ ಮೂಲಭೂತ ಕಲ್ಪನೆಯನ್ನು ನೋಡುತ್ತೇವೆ. ನಾವು [requestbin.com](https://requestbin.com/) ಎಂಬ 3rd party site ಅನ್ನು ಬಳಸುತ್ತೇವೆ. ಯಾವುದೇ coding ಮಾಡದೆ endpoint ರಚಿಸಲು ಮತ್ತು payload ಹಿಡಿಯಲು ಈ site ನಮಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ. _**Disclaimer: ಇದು ಮಾಡುವುದೆಲ್ಲ data ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ನಮಗೆ ತೋರಿಸುವುದು ಮಾತ್ರ.**_ payload ಮೇಲೆ ಯಾವುದೇ processing ಅಥವಾ ಯಾವುದೇ ರೀತಿಯ action ನಡೆಯುವುದಿಲ್ಲ.

[requestbin.com](https://requestbin.com/) ಗೆ ಹೋಗಿ Create Request Bin ಮೇಲೆ click ಮಾಡಿ.

ಆ button ಅನ್ನು click ಮಾಡಿದ ನಂತರ, ನಿಮಗೆ ಈಗಾಗಲೇ Account ಇದ್ದರೆ log in ಮಾಡಲು ಅಥವಾ sign up ಮಾಡಲು ಅದು ಕೇಳುತ್ತದೆ. ನಿಮಗೆ ಈಗಾಗಲೇ Account ಇದ್ದರೆ ಅದು ನಿಮ್ಮನ್ನು ನೇರವಾಗಿ ಅವರ dashboard ಗೆ ಕರೆದೊಯ್ಯುತ್ತದೆ. ಅವರ dashboard ನಲ್ಲಿ, ನಿಮ್ಮ Ultimate Multisite webhook ರಚಿಸಲು ಬಳಸಬಹುದಾದ endpoint ಅಥವಾ URL ಅನ್ನು ನೀವು ತಕ್ಷಣ ನೋಡುತ್ತೀರಿ.

ಮುಂದುವರಿದು URL ಅನ್ನು copy ಮಾಡಿ ಮತ್ತು Ultimate Multisite ಗೆ ಹಿಂತಿರುಗಿ. endpoint ಅನ್ನು URL field ನಲ್ಲಿ ಇಟ್ಟು, dropdown ನಿಂದ event ಆಯ್ಕೆಮಾಡಿ. ಈ ಉದಾಹರಣೆಯಲ್ಲಿ, ನಾವು **Payment Received** ಆಯ್ಕೆಮಾಡುತ್ತೇವೆ.

ಬಳಕೆದಾರನು payment ಮಾಡಿದಾಗಲೆಲ್ಲ ಈ event trigger ಆಗುತ್ತದೆ. ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ events, ಅವುಗಳ ವಿವರಣೆ, ಮತ್ತು payload‌ಗಳನ್ನು ಪುಟದ ಕೆಳಭಾಗದಲ್ಲಿ ಪಟ್ಟಿಮಾಡಲಾಗಿದೆ. webhook ಉಳಿಸಲು **Add New Webhook** button ಮೇಲೆ click ಮಾಡಿ.

![Payment Received ಆಯ್ಕೆಮಾಡಿರುವ webhook event dropdown](/img/admin/webhook-event-picker.png)

ನಾವು ರಚಿಸಿದ webhook ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ನೋಡಲು ಈಗ endpoint ಗೆ test event ಕಳುಹಿಸಬಹುದು. ನಾವು ರಚಿಸಿದ webhook ಅಡಿಯಲ್ಲಿ **Send Test Event** ಮೇಲೆ click ಮಾಡುವ ಮೂಲಕ ಇದನ್ನು ಮಾಡಬಹುದು.

![ಒಂದು configured webhook ಮತ್ತು Send Test action ತೋರಿಸುವ Webhooks list](/img/admin/webhooks-list-populated.png)

ಇದು test ಯಶಸ್ವಿಯಾಗಿದೆ ಎಂದು ಹೇಳುವ confirmation window ತೋರಿಸುತ್ತದೆ.

![test payload ಕಳುಹಿಸಿದ ನಂತರದ webhook test event result](/img/admin/webhook-test-result.png)

ಈಗ ನಾವು _Requestbin_ site ಗೆ ಹಿಂತಿರುಗಿದರೆ, ಕೆಲವು test data ಹೊಂದಿರುವ payload ಸ್ವೀಕರಿಸಲಾಗಿದೆ ಎಂದು ನೋಡುತ್ತೇವೆ.

webhook ಮತ್ತು endpoints ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಎಂಬುದರ ಮೂಲ ತತ್ವ ಇದು. ನೀವು custom endpoint ರಚಿಸಬೇಕಾದರೆ, Ultimate Multisite ನಿಂದ ನೀವು ಸ್ವೀಕರಿಸುವ data ಅನ್ನು process ಮಾಡಲು custom function ರಚಿಸಬೇಕು.
