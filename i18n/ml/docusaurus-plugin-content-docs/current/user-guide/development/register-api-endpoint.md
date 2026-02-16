---
title: API എൻഡ്‌പോയിന്റ് രജിസ്റ്റർ ചെയ്യുക
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API എൻഡ്‌പോയിന്റ്

ഈ ട്യൂട്ടോറിയലിൽ, നിങ്ങളുടെ നെറ്റ്‌വർക്കിലെ ഒരു പുതിയ കസ്റ്റമറുടെ മുഴുവൻ ഓൺബോർഡിംഗ് പ്രക്രിയ സൃഷ്ടിക്കാൻ Ultimate Multisite /register API എൻഡ്‌പോയിന്റ് എങ്ങനെ ഉപയോഗിക്കാമെന്നും Zapier ഉപയോഗിച്ച് ഇത് എങ്ങനെ ചെയ്യാമെന്നും നിങ്ങൾ പഠിക്കും.

ഈ എൻഡ്‌പോയിന്റ് POST മെത്തേഡ് ഉപയോഗിക്കുന്നു, _**https://yoursite.com/wp-json/wu/v2/register**_ എന്ന URL വഴി വിളിക്കപ്പെടുന്നു. ഈ കോളിൽ, നിങ്ങളുടെ നെറ്റ്‌വർക്കിനുള്ളിൽ 4 പ്രക്രിയകൾ നടപ്പിലാക്കും:

  * ഒരു പുതിയ WordPress യൂസർ അല്ലെങ്കിൽ യൂസർ ID വഴിയുള്ള തിരിച്ചറിയൽ സൃഷ്ടിക്കപ്പെടും.

  * Ultimate Multisite-ൽ ഒരു പുതിയ Customer അല്ലെങ്കിൽ കസ്റ്റമർ ID വഴിയുള്ള തിരിച്ചറിയൽ സൃഷ്ടിക്കപ്പെടും.

  * WordPress നെറ്റ്‌വർക്കിൽ ഒരു പുതിയ സൈറ്റ് സൃഷ്ടിക്കപ്പെടും.

  * അവസാനം, Ultimate Multisite-ൽ ഒരു പുതിയ Membership സൃഷ്ടിക്കപ്പെടും.

ഈ പ്രക്രിയയ്ക്ക്, നിങ്ങൾക്ക് API ക്രെഡൻഷ്യലുകൾ ആവശ്യമാണ്. അവ ലഭിക്കാൻ, നിങ്ങളുടെ നെറ്റ്‌വർക്ക് അഡ്മിൻ പാനലിലേക്ക് പോയി, **Ultimate Multisite > Settings** > **API & Webhooks** എന്നതിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക, API Settings വിഭാഗം കണ്ടെത്തുക.

![Ultimate Multisite-ലെ API Settings വിഭാഗം](/img/config/settings-api.png)  
**Enable API** തിരഞ്ഞെടുത്ത് നിങ്ങളുടെ API ക്രെഡൻഷ്യലുകൾ നേടുക.

ഇനി, എൻഡ്‌പോയിന്റ് പര്യവേക്ഷണം ചെയ്ത ശേഷം Zapier-ൽ ഒരു രജിസ്‌ട്രേഷൻ ആക്ഷൻ സൃഷ്ടിക്കാം.

## എൻഡ്‌പോയിന്റ് ബോഡി പാരാമീറ്ററുകൾ

എൻഡ്‌പോയിന്റിലേക്ക് അയയ്ക്കേണ്ട ഏറ്റവും കുറഞ്ഞ വിവരങ്ങളുടെ ഒരു അവലോകനം നോക്കാം. ഈ ലേഖനത്തിന്റെ അവസാനം, പൂർണ്ണമായ കോൾ നിങ്ങൾക്ക് കാണാം.

### Customer

User-ഉം Ultimate Multisite Customer-ഉം സൃഷ്ടിക്കുന്ന പ്രക്രിയയ്ക്ക് ആവശ്യമായ വിവരങ്ങൾ ഇതാണ്:

"customer_id" : integer

നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ സൃഷ്ടിച്ച കസ്റ്റമർ ID അയയ്ക്കാൻ സാധിക്കും. സമർപ്പിച്ചില്ലെങ്കിൽ, ഒരു പുതിയ കസ്റ്റമറും പുതിയ WordPress യൂസറും സൃഷ്ടിക്കാൻ താഴെയുള്ള വിവരങ്ങൾ ഉപയോഗിക്കും. കസ്റ്റമർ ID-യുടെ അതേ രീതിയിൽ യൂസർ ID-യും അയയ്ക്കാവുന്നതാണ്.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

ഈ ഒബ്‌ജക്റ്റിനുള്ളിൽ നമുക്ക് ആവശ്യമായ ഒരേയൊരു വിവരം Membership Status ആണ്.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" എന്നിവയിലൊന്ന് },

### **Products**

Products നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ നിന്നുള്ള 1 അല്ലെങ്കിൽ അതിലധികം product ID-കളുള്ള ഒരു array ആയി നൽകുന്നു. ശ്രദ്ധിക്കുക, ഈ എൻഡ്‌പോയിന്റ് products സൃഷ്ടിക്കുന്നില്ല. product creation എൻഡ്‌പോയിന്റ് നന്നായി മനസ്സിലാക്കാൻ Ultimate Multisite-ന്റെ ഡോക്യുമെന്റേഷൻ പരിശോധിക്കുക.

**"products" : [1,2],**

### Payment

Membership-ന്റെ കാര്യത്തിലെന്നപോലെ, നമുക്ക് status മാത്രം മതി.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" എന്നിവയിലൊന്ന് },**

### Site

ബോഡി പൂർത്തിയാക്കാൻ സൈറ്റിന്റെ URL-ഉം Title-ഉം ആവശ്യമാണ്, രണ്ടും Site ഒബ്‌ജക്റ്റിനുള്ളിൽ.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register എൻഡ്‌പോയിന്റിന്റെ റിട്ടേൺ പുതുതായി സൃഷ്ടിച്ച membership വിവരങ്ങളുള്ള ഒരു array ആയിരിക്കും.

## Zapier-ൽ ഒരു ആക്ഷൻ സൃഷ്ടിക്കൽ

ഈ പുതിയതും കൂടുതൽ കരുത്തുറ്റതുമായ അക്കൗണ്ട് ക്രിയേഷൻ എൻഡ്‌പോയിന്റിന്റെ അവതരണത്തോടെ, Zapier-ൽ ഒരു പുതിയ ആക്ഷനും നിങ്ങൾക്ക് ലഭ്യമാകും.

Zapier-ന്റെ പുതിയ പതിപ്പ് വാഗ്ദാനം ചെയ്യുന്ന എല്ലാ സൗകര്യങ്ങളും എങ്ങനെ ഉപയോഗിക്കാമെന്നും ആസ്വദിക്കാമെന്നും അറിയാമോ? ഇവിടെ കൂടുതലറിയുക. (link?)

### ഒരു ആക്ഷൻ സൃഷ്ടിക്കൽ

Zapier-മായി registration എൻഡ്‌പോയിന്റ് എങ്ങനെ ഉപയോഗിക്കാമെന്ന് നന്നായി വിശദീകരിക്കാൻ, Google Forms-മായി ഒരു ഇന്റഗ്രേഷൻ സൃഷ്ടിക്കാം. ഈ ഫോം പൂരിപ്പിച്ച് വിവരങ്ങൾ ഫോമിന്റെ ആൻസർ ഷീറ്റിൽ സേവ് ചെയ്യുമ്പോഴെല്ലാം, Ultimate Multisite നെറ്റ്‌വർക്കിൽ ഒരു പുതിയ membership സൃഷ്ടിക്കപ്പെടും.

Google Forms-ൽ, നെറ്റ്‌വർക്കിൽ ഒരു പുതിയ membership സൃഷ്ടിക്കാൻ ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ ഫീൽഡുകളോടെ ഒരു ഫോം ഉണ്ടാക്കുക.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ഇനി Zapier-ൽ, ഒരു പുതിയ Zap ഉണ്ടാക്കി ഡാറ്റ സേവ് ചെയ്തിരിക്കുന്ന സ്‌പ്രെഡ്‌ഷീറ്റ് വഴി Google-ൽ സൃഷ്ടിച്ച ഫോം കണക്റ്റ് ചെയ്യുക.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

ശരി! Google Forms ഫോം Zapier-മായി കണക്റ്റ് ചെയ്തു, നെറ്റ്‌വർക്കുമായി ഇന്റഗ്രേറ്റ് ചെയ്യാൻ തയ്യാറാണ്. ഇനി Google Forms പൂരിപ്പിക്കുമ്പോഴെല്ലാം ട്രിഗർ ചെയ്യുന്ന Action-ലേക്ക് നീങ്ങാം.

പുതിയ Ultimate Multisite ആപ്പ് കണ്ടെത്തി തിരഞ്ഞെടുക്കുക. ഇത്തരം Zap-ന് Register ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

ഈ ആദ്യ ഘട്ടത്തിന് ശേഷം, ഈ Zap-മായി കണക്റ്റ് ചെയ്യേണ്ട അക്കൗണ്ട് തിരഞ്ഞെടുക്കുക.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ഇത് മുഴുവൻ പ്രക്രിയയിലെയും ഏറ്റവും പ്രധാനപ്പെട്ട ഭാഗമാണ്. Google Forms-ൽ നിന്ന് വന്ന ഫീൽഡുകൾ register എൻഡ്‌പോയിന്റിന് ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ ഫീൽഡുകളുമായി പൊരുത്തപ്പെടുത്തണം, ഈ ലേഖനത്തിന്റെ മുൻ വിഭാഗത്തിൽ കാണിച്ചത് പോലെ.

ഈ ഉദാഹരണത്തിൽ, username, email, password, name, വെബ്‌സൈറ്റിന്റെ URL എന്നിവ മാത്രം കോൺഫിഗർ ചെയ്താൽ മതി. ഈ Google Forms-ൽ നിന്ന് ജനറേറ്റ് ചെയ്യുന്ന എല്ലാ memberships-ഉം ഒരേ product-ഉം status pattern-ഉം പിന്തുടരുന്നതിന് ബാക്കിയുള്ളവ മുൻകൂട്ടി നിശ്ചയിച്ചിട്ടുണ്ട്.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

വിവരങ്ങൾ സെറ്റപ്പ് ചെയ്തുകഴിഞ്ഞാൽ, അന്തിമ ടെസ്റ്റിലേക്ക് തുടരുക. അവസാന സ്‌ക്രീനിൽ എൻഡ്‌പോയിന്റിലേക്ക് അയയ്ക്കുന്ന എല്ലാ ഫീൽഡുകളും, അവയുടെ ബന്ധപ്പെട്ട വിവരങ്ങളും, ശൂന്യമായി അയയ്ക്കുന്ന ഫീൽഡുകളും കാണാം.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

നിങ്ങളുടെ പുതിയ Zap ടെസ്റ്റ് ചെയ്യുക, അത് വിജയകരമായി പൂർത്തിയാകണം. എന്തെങ്കിലും പിഴവ് സംഭവിച്ചാൽ, എല്ലാ ഫീൽഡുകളും ശരിയായി അയയ്ക്കുന്നുണ്ടോയെന്ന് പരിശോധിക്കുക. ധാരാളം വിവരങ്ങൾ ഉള്ളതിനാൽ, ചില കാര്യങ്ങൾ ശ്രദ്ധയിൽപ്പെടാതെ പോയേക്കാം.

### പൂർണ്ണമായ എൻഡ്‌പോയിന്റ് പാരാമീറ്ററുകൾ

ഇതാ പൂർണ്ണമായ കോളും അയയ്ക്കാവുന്ന എല്ലാ ഫീൽഡുകളുടെ സാധ്യതകളും.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" എന്നിവയിലൊന്ന് "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" എന്നിവയിലൊന്ന് }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
