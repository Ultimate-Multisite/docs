---
title: API இறுதிப்புள்ளியைப் பதிவு செய்
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API endpoint

இந்த வழிகாட்டியில், Ultimate Multisite /register API endpoint-ஐப் பயன்படுத்தி உங்கள் நெட்வொர்க்கில் புதிய வாடிக்கையாளருக்கான முழு onboarding செயல்முறையை எவ்வாறு உருவாக்குவது என்பதையும், Zapier மூலம் இதை எப்படி செய்வது என்பதையும் கற்றுக்கொள்வீர்கள்.

இந்த endpoint POST method-ஐப் பயன்படுத்துகிறது, மேலும் _**https://yoursite.com/wp-json/wu/v2/register**_ என்ற URL மூலம் அழைக்கப்படுகிறது. இந்த அழைப்பில், உங்கள் நெட்வொர்க்கில் 4 செயல்முறைகள் இயக்கப்படும்:

  * புதிய WordPress பயனர் உருவாக்கப்படும் அல்லது user ID மூலம் அடையாளம் காணப்படும்.

  * Ultimate Multisite-ல் புதிய வாடிக்கையாளர் உருவாக்கப்படும் அல்லது customer ID மூலம் அடையாளம் காணப்படும்.

  * WordPress நெட்வொர்க்கில் புதிய தளம் உருவாக்கப்படும்.

  * இறுதியாக, Ultimate Multisite-ல் புதிய Membership உருவாக்கப்படும்.

இந்த செயல்முறைக்கு, உங்கள் API credentials தேவைப்படும். அவற்றைப் பெற, உங்கள் network admin panel-க்குச் சென்று, **Ultimate Multisite > Settings** > **API & Webhooks** என்பதற்குச் செல்லுங்கள், பின்னர் API Settings பகுதியைக் கண்டறியுங்கள்.

![Ultimate Multisite-ல் API Settings பகுதி](/img/config/settings-api.png)  
**Enable API**-ஐத் தேர்ந்தெடுத்து உங்கள் API credentials-ஐப் பெறுங்கள்.

இப்போது, endpoint-ஐ ஆராய்வோம், பின்னர் Zapier-ல் ஒரு registration action உருவாக்குவோம்.

## Endpoint body parameters

Endpoint-க்கு அனுப்ப வேண்டிய குறைந்தபட்ச தகவல்களைப் பார்ப்போம். இந்தக் கட்டுரையின் இறுதியில் முழுமையான அழைப்பைக் காணலாம்.

### Customer

User மற்றும் Ultimate Multisite Customer உருவாக்கும் செயல்முறைக்கு தேவையான தகவல்கள் இவை:

"customer_id" : integer

உங்கள் நெட்வொர்க்கில் ஏற்கனவே உருவாக்கப்பட்ட customer ID-ஐ அனுப்பலாம். அனுப்பவில்லை என்றால், கீழே உள்ள தகவல்கள் புதிய வாடிக்கையாளர் மற்றும் புதிய WordPress பயனரை உருவாக்கப் பயன்படும். customer ID போலவே user ID-ஐயும் அனுப்பலாம்.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

இந்த object-க்குள் நமக்குத் தேவையான ஒரே தகவல் Membership Status மட்டுமே.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" இவற்றில் ஒன்று },

### **Products**

Products என்பது உங்கள் நெட்வொர்க்கிலிருந்து 1 அல்லது அதற்கு மேற்பட்ட product ID-களைக் கொண்ட array ஆகும். கவனம்: இந்த endpoint products-ஐ உருவாக்காது. product creation endpoint பற்றி நன்கு புரிந்துகொள்ள Ultimate Multisite ஆவணங்களைப் பாருங்கள்.

**"products" : [1,2],**

### Payment

Membership போலவே, இங்கும் status மட்டுமே தேவை.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" இவற்றில் ஒன்று },**

### Site

இறுதியாக, body-ஐ முடிக்க Site object-க்குள் தளத்தின் URL மற்றும் Title தேவை.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint-ன் return மதிப்பு புதிதாக உருவாக்கப்பட்ட membership தகவல்களைக் கொண்ட array ஆக இருக்கும்.

## Zapier-ல் action உருவாக்குதல்

இந்த புதிய மற்றும் வலுவான account creation endpoint அறிமுகத்துடன், Zapier-ல் புதிய action-ஐயும் பயன்படுத்தலாம்.

Zapier-ன் புதிய பதிப்பு வழங்கும் அனைத்து வசதிகளையும் எப்படிப் பயன்படுத்துவது என்று தெரியுமா? இங்கே மேலும் அறியுங்கள். (link?)

### Action உருவாக்குதல்

Registration endpoint-ஐ Zapier-உடன் எப்படிப் பயன்படுத்துவது என்பதை நன்கு விளக்க, Google Forms-உடன் ஒரு integration உருவாக்குவோம். இந்த படிவம் நிரப்பப்பட்டு, தகவல்கள் படிவத்தின் பதில் sheet-ல் சேமிக்கப்படும் ஒவ்வொரு முறையும், Ultimate Multisite நெட்வொர்க்கில் புதிய membership உருவாக்கப்படும்.

Google Forms-ல், நெட்வொர்க்கில் புதிய membership உருவாக்கத் தேவையான குறைந்தபட்ச fields-உடன் ஒரு படிவம் உருவாக்குங்கள்.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

இப்போது Zapier-ல், புதிய Zap உருவாக்கி, தரவு சேமிக்கப்படும் spreadsheet மூலம் Google-ல் உருவாக்கிய படிவத்தை இணைக்கவும்.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

முடிந்தது! Google Forms படிவம் Zapier-உடன் இணைக்கப்பட்டு, நெட்வொர்க்குடன் integrate செய்யத் தயாராக உள்ளது. இப்போது Google Forms நிரப்பப்படும் ஒவ்வொரு முறையும் trigger செய்யும் Action-க்குச் செல்வோம்.

புதிய Ultimate Multisite app-ஐக் கண்டறிந்து தேர்ந்தெடுக்கவும். இந்த வகை Zap-க்கு Register option-ஐத் தேர்ந்தெடுக்கவும்.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

இந்த முதல் படிக்குப் பிறகு, இந்த Zap-உடன் இணைக்கப்படும் account-ஐத் தேர்ந்தெடுக்கவும்.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

இது முழு செயல்முறையின் மிக முக்கியமான பகுதி. இந்தக் கட்டுரையின் முந்தைய பகுதியில் காட்டியபடி, Google Forms-இலிருந்து வந்த fields-ஐ register endpoint-க்குத் தேவையான குறைந்தபட்ச fields-உடன் பொருத்த வேண்டும்.

இந்த எடுத்துக்காட்டில், username, email, password, பெயர் மற்றும் இணையதளத்தின் URL மட்டுமே அமைக்க வேண்டும். மற்றவை முன்னமைக்கப்பட்டதாக விடப்படுகின்றன, இதனால் இந்த Google Forms மூலம் உருவாக்கப்படும் அனைத்து memberships-ம் ஒரே product மற்றும் status pattern-ஐப் பின்பற்றும்.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

தகவல்கள் அமைக்கப்பட்டவுடன், இறுதி சோதனைக்குச் செல்லுங்கள். கடைசி திரையில் endpoint-க்கு அனுப்பப்படும் அனைத்து fields, அவற்றின் தகவல்கள் மற்றும் காலியாக அனுப்பப்படும் fields ஆகியவற்றைக் காணலாம்.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

உங்கள் புதிய Zap-ஐ சோதித்துப் பாருங்கள், அது வெற்றிகரமாக முடிவடைய வேண்டும். ஏதேனும் பிழை ஏற்பட்டால், அனைத்து fields-ஐயும் சரியாக அனுப்பப்படுகிறதா என்று சரிபாருங்கள். நிறைய தகவல்கள் இருப்பதால், சில விஷயங்கள் கவனிக்காமல் போகலாம்.

### முழுமையான endpoint parameters

இதோ முழுமையான அழைப்பும் அனுப்பக்கூடிய அனைத்து fields-ன் சாத்தியக்கூறுகளும்.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" இவற்றில் ஒன்று "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" இவற்றில் ஒன்று }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
