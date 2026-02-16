---
title: API ಎಂಡ್‌ಪಾಯಿಂಟ್ ನೋಂದಾಯಿಸಿ
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API ಎಂಡ್‌ಪಾಯಿಂಟ್

ಈ ಟ್ಯುಟೋರಿಯಲ್‌ನಲ್ಲಿ, ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ ಗ್ರಾಹಕರಿಗಾಗಿ ಸಂಪೂರ್ಣ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ರಚಿಸಲು Ultimate Multisite /register API ಎಂಡ್‌ಪಾಯಿಂಟ್ ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಮತ್ತು Zapier ಮೂಲಕ ಇದನ್ನು ಹೇಗೆ ಮಾಡುವುದು ಎಂಬುದನ್ನು ನೀವು ಕಲಿಯುವಿರಿ.

ಈ ಎಂಡ್‌ಪಾಯಿಂಟ್ POST ವಿಧಾನವನ್ನು ಬಳಸುತ್ತದೆ ಮತ್ತು _**https://yoursite.com/wp-json/wu/v2/register**_ URL ಮೂಲಕ ಕರೆಯಲಾಗುತ್ತದೆ. ಈ ಕರೆಯಲ್ಲಿ, ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ 4 ಪ್ರಕ್ರಿಯೆಗಳು ನಡೆಯುತ್ತವೆ:

  * ಹೊಸ WordPress ಬಳಕೆದಾರರು ಅಥವಾ user ID ಮೂಲಕ ಅವರ ಗುರುತಿಸುವಿಕೆ ರಚಿಸಲಾಗುತ್ತದೆ.

  * Ultimate Multisite ನಲ್ಲಿ ಹೊಸ ಗ್ರಾಹಕ ಅಥವಾ customer ID ಮೂಲಕ ಅವರ ಗುರುತಿಸುವಿಕೆ ರಚಿಸಲಾಗುತ್ತದೆ.

  * WordPress ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ ಸೈಟ್ ರಚಿಸಲಾಗುತ್ತದೆ.

  * ಕೊನೆಯಲ್ಲಿ, Ultimate Multisite ನಲ್ಲಿ ಹೊಸ Membership ರಚಿಸಲಾಗುತ್ತದೆ.

ಈ ಪ್ರಕ್ರಿಯೆಗೆ, ನಿಮಗೆ ನಿಮ್ಮ API ಪ್ರಮಾಣಪತ್ರಗಳು ಬೇಕಾಗುತ್ತವೆ. ಅವುಗಳನ್ನು ಪಡೆಯಲು, ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್ ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್‌ಗೆ ಹೋಗಿ, **Ultimate Multisite > Settings** > **API & Webhooks** ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ, ಮತ್ತು API Settings ವಿಭಾಗವನ್ನು ಹುಡುಕಿ.

![Ultimate Multisite ನಲ್ಲಿ API Settings ವಿಭಾಗ](/img/config/settings-api.png)  
**Enable API** ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ API ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಪಡೆಯಿರಿ.

ಈಗ, ಎಂಡ್‌ಪಾಯಿಂಟ್ ಅನ್ನು ಅನ್ವೇಷಿಸೋಣ ಮತ್ತು ನಂತರ Zapier ನಲ್ಲಿ ರಿಜಿಸ್ಟ್ರೇಶನ್ ಆಕ್ಷನ್ ರಚಿಸೋಣ.

## ಎಂಡ್‌ಪಾಯಿಂಟ್ ಬಾಡಿ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು

ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗೆ ಕಳುಹಿಸಬೇಕಾದ ಕನಿಷ್ಠ ಮಾಹಿತಿಯ ಅವಲೋಕನವನ್ನು ನೋಡೋಣ. ಈ ಲೇಖನದ ಕೊನೆಯಲ್ಲಿ, ನೀವು ಸಂಪೂರ್ಣ ಕರೆಯನ್ನು ಕಾಣಬಹುದು.

### ಗ್ರಾಹಕ

ಬಳಕೆದಾರ ಮತ್ತು Ultimate Multisite ಗ್ರಾಹಕರನ್ನು ರಚಿಸುವ ಪ್ರಕ್ರಿಯೆಗೆ ಅಗತ್ಯವಾದ ಮಾಹಿತಿ ಇದು:

"customer_id" : integer

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ರಚಿಸಲಾದ customer ID ಅನ್ನು ಕಳುಹಿಸಲು ಸಾಧ್ಯವಿದೆ. ಸಲ್ಲಿಸದಿದ್ದರೆ, ಹೊಸ ಗ್ರಾಹಕ ಮತ್ತು ಹೊಸ WordPress ಬಳಕೆದಾರರನ್ನು ರಚಿಸಲು ಕೆಳಗಿನ ಮಾಹಿತಿಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. customer ID ಯಂತೆಯೇ user ID ಸಹ ಕಳುಹಿಸಬಹುದು.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

ಈ ಆಬ್ಜೆಕ್ಟ್‌ನಲ್ಲಿ ನಮಗೆ ಬೇಕಾದ ಏಕೈಕ ಮಾಹಿತಿ Membership Status.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" ನಲ್ಲಿ ಒಂದು },

### **Products**

Products ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ 1 ಅಥವಾ ಹೆಚ್ಚು product ID ಗಳನ್ನು ಹೊಂದಿರುವ ಒಂದು array ಆಗಿ ನೀಡಲಾಗುತ್ತದೆ. ಗಮನಿಸಿ, ಈ ಎಂಡ್‌ಪಾಯಿಂಟ್ products ರಚಿಸುವುದಿಲ್ಲ. product ರಚನೆ ಎಂಡ್‌ಪಾಯಿಂಟ್ ಅನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು Ultimate Multisite ಡಾಕ್ಯುಮೆಂಟೇಶನ್ ಪರಿಶೀಲಿಸಿ.

**"products" : [1,2],**

### Payment

Membership ನಂತೆಯೇ, ನಮಗೆ ಕೇವಲ status ಮಾತ್ರ ಬೇಕು.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" ನಲ್ಲಿ ಒಂದು },**

### Site

ಮತ್ತು ಬಾಡಿಯನ್ನು ಮುಗಿಸಲು ನಮಗೆ ಸೈಟ್‌ನ URL ಮತ್ತು Title ಬೇಕು, ಎರಡೂ Site ಆಬ್ಜೆಕ್ಟ್‌ನ ಒಳಗೆ.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register ಎಂಡ್‌ಪಾಯಿಂಟ್‌ನ ರಿಟರ್ನ್ ಹೊಸದಾಗಿ ರಚಿಸಲಾದ membership ಮಾಹಿತಿಯೊಂದಿಗೆ ಒಂದು array ಆಗಿರುತ್ತದೆ.

## Zapier ನಲ್ಲಿ ಆಕ್ಷನ್ ರಚಿಸುವುದು

ಈ ಹೊಸ ಮತ್ತು ಹೆಚ್ಚು ಸಮರ್ಥವಾದ ಖಾತೆ ರಚನೆ ಎಂಡ್‌ಪಾಯಿಂಟ್‌ನ ಪರಿಚಯದೊಂದಿಗೆ ನೀವು Zapier ನಲ್ಲಿ ಹೊಸ ಆಕ್ಷನ್ ಅನ್ನು ಸಹ ಪ್ರವೇಶಿಸಬಹುದು.

Zapier ನ ಹೊಸ ಆವೃತ್ತಿ ನೀಡುವ ಎಲ್ಲವನ್ನೂ ಹೇಗೆ ಬಳಸುವುದು ಮತ್ತು ಆನಂದಿಸುವುದು ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ? ಇಲ್ಲಿ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ. (link?)

### ಆಕ್ಷನ್ ರಚಿಸುವುದು

Zapier ಜೊತೆ ರಿಜಿಸ್ಟ್ರೇಶನ್ ಎಂಡ್‌ಪಾಯಿಂಟ್ ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಎಂಬುದನ್ನು ಚೆನ್ನಾಗಿ ವಿವರಿಸಲು, Google Forms ಜೊತೆ ಒಂದು ಇಂಟಿಗ್ರೇಶನ್ ರಚಿಸೋಣ. ಈ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮಾಹಿತಿಯನ್ನು ಫಾರ್ಮ್‌ನ ಉತ್ತರ ಶೀಟ್‌ನಲ್ಲಿ ಉಳಿಸಿದಾಗಲೆಲ್ಲಾ, Ultimate Multisite ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ membership ರಚಿಸಲಾಗುತ್ತದೆ.

Google Forms ನಲ್ಲಿ, ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಹೊಸ membership ರಚಿಸಲು ಅಗತ್ಯವಾದ ಕನಿಷ್ಠ ಫೀಲ್ಡ್‌ಗಳೊಂದಿಗೆ ಫಾರ್ಮ್ ಮಾಡಿ.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ಈಗ Zapier ನಲ್ಲಿ, ಹೊಸ Zap ಮಾಡಿ ಮತ್ತು ಡೇಟಾ ಉಳಿಸಲಾದ ಸ್ಪ್ರೆಡ್‌ಶೀಟ್ ಮೂಲಕ Google ನಲ್ಲಿ ರಚಿಸಿದ ಫಾರ್ಮ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

ಮುಗಿಯಿತು! Google Forms ಫಾರ್ಮ್ Zapier ಜೊತೆ ಸಂಪರ್ಕಗೊಂಡಿದೆ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್‌ನೊಂದಿಗೆ ಇಂಟಿಗ್ರೇಟ್ ಆಗಲು ಸಿದ್ಧವಾಗಿದೆ. ಈಗ Google Forms ಭರ್ತಿಯಾದಾಗಲೆಲ್ಲಾ ಟ್ರಿಗ್ಗರ್ ಆಗುವ Action ಗೆ ಹೋಗೋಣ.

ಹೊಸ Ultimate Multisite ಆಪ್ ಅನ್ನು ಹುಡುಕಿ ಮತ್ತು ಆಯ್ಕೆ ಮಾಡಿ. ಈ ರೀತಿಯ Zap ಗೆ Register ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

ಈ ಮೊದಲ ಹಂತದ ನಂತರ, ಈ Zap ನೊಂದಿಗೆ ಸಂಪರ್ಕಗೊಳ್ಳುವ ಖಾತೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ಇದು ಇಡೀ ಪ್ರಕ್ರಿಯೆಯ ಅತ್ಯಂತ ಸೂಕ್ಷ್ಮ ಭಾಗ. ಈ ಲೇಖನದ ಹಿಂದಿನ ವಿಭಾಗದಲ್ಲಿ ತೋರಿಸಿದಂತೆ, Google Forms ನಿಂದ ಬಂದ ಫೀಲ್ಡ್‌ಗಳನ್ನು register ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗೆ ಅಗತ್ಯವಾದ ಕನಿಷ್ಠ ಫೀಲ್ಡ್‌ಗಳೊಂದಿಗೆ ಹೊಂದಿಸಬೇಕು.

ಈ ಉದಾಹರಣೆಯಲ್ಲಿ, ನಾವು ಕೇವಲ username, email, password, ಹೆಸರು ಮತ್ತು ವೆಬ್‌ಸೈಟ್‌ನ URL ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕಾಗಿದೆ. ಈ Google Forms ನಲ್ಲಿ ರಚಿಸಲಾದ ಎಲ್ಲಾ memberships ಒಂದೇ product ಮತ್ತು status ಮಾದರಿಯನ್ನು ಅನುಸರಿಸುವಂತೆ ಉಳಿದವು ಮೊದಲೇ ನಿರ್ಧರಿಸಲಾಗಿದೆ.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

ಮಾಹಿತಿಯನ್ನು ಹೊಂದಿಸಿದ ನಂತರ, ಅಂತಿಮ ಪರೀಕ್ಷೆಗೆ ಮುಂದುವರಿಯಿರಿ. ಕೊನೆಯ ಪರದೆಯಲ್ಲಿ ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗೆ ಕಳುಹಿಸಲಾಗುವ ಎಲ್ಲಾ ಫೀಲ್ಡ್‌ಗಳು, ಅವುಗಳ ಸಂಬಂಧಿತ ಮಾಹಿತಿ ಮತ್ತು ಖಾಲಿಯಾಗಿ ಕಳುಹಿಸಲಾಗುವ ಫೀಲ್ಡ್‌ಗಳನ್ನು ನೀವು ನೋಡಬಹುದು.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

ನಿಮ್ಮ ಹೊಸ Zap ಅನ್ನು ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಅದು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಳ್ಳಬೇಕು. ಯಾವುದೇ ದೋಷ ಸಂಭವಿಸಿದರೆ, ಎಲ್ಲಾ ಫೀಲ್ಡ್‌ಗಳನ್ನು ಮತ್ತು ಅವು ಸರಿಯಾಗಿ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ. ಬಹಳಷ್ಟು ಮಾಹಿತಿ ಇರುವುದರಿಂದ, ಕೆಲವು ವಿಷಯಗಳು ಗಮನಕ್ಕೆ ಬರದೆ ಹೋಗಬಹುದು.

### ಸಂಪೂರ್ಣ ಎಂಡ್‌ಪಾಯಿಂಟ್ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು

ಸಂಪೂರ್ಣ ಕರೆ ಮತ್ತು ಕಳುಹಿಸಬಹುದಾದ ಫೀಲ್ಡ್‌ಗಳ ಎಲ್ಲಾ ಸಾಧ್ಯತೆಗಳು ಇಲ್ಲಿವೆ.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" ನಲ್ಲಿ ಒಂದು "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" ನಲ್ಲಿ ಒಂದು }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
