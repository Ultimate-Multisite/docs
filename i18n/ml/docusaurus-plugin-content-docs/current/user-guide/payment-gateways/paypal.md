---
title: PayPal സജ്ജീകരിക്കുന്നു
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway സജ്ജമാക്കൽ (v2)

_**പ്രധാന കുറിപ്പ്: ഈ ലേഖനം Ultimate Multisite പതിപ്പ് 2.x-നെ കുറിച്ചാണ്.**_

ഞങ്ങളുടെ പേയ്‌മെന്റ് സെറ്റിംഗ്‌സ് പേജിൽ നാല് പേയ്‌മെന്റ് രീതികൾ വരെ നിങ്ങൾക്ക് സജീവമാക്കാം: Stripe, Stripe Checkout, PayPal, Manual. ഈ ലേഖനത്തിൽ, **PayPal**-മായി എങ്ങനെ സംയോജിപ്പിക്കാമെന്ന് നമ്മൾ കാണും.

Stripe പോലെ തന്നെ, PayPal ഓൺലൈൻ പേയ്‌മെന്റുകൾക്കായി വ്യാപകമായി ഉപയോഗിക്കുന്നു, പ്രത്യേകിച്ച് WordPress വെബ്‌സൈറ്റുകളിൽ. നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ ലഭ്യമായ ഒരു പേയ്‌മെന്റ് രീതിയായി PayPal എങ്ങനെ ഉപയോഗിക്കാമെന്ന് ഈ ലേഖനം നിങ്ങളെ വഴികാട്ടും.

ഈ സംയോജനത്തിന് ആവശ്യമായ API ക്രെഡൻഷ്യൽ ലഭിക്കാൻ നിങ്ങൾക്ക് ഒരു **PayPal Business അക്കൗണ്ട്** ഉണ്ടായിരിക്കണമെന്ന് ശ്രദ്ധിക്കുക.

## നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ PayPal പ്രവർത്തനക്ഷമമാക്കുന്നു

നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ ലഭ്യമായ ഒരു പേയ്‌മെന്റ് രീതിയായി PayPal പ്രവർത്തനക്ഷമമാക്കാൻ, **Ultimate Multisite > Settings > Payments** ടാബിലേക്ക് പോയി PayPal-ന് അടുത്തുള്ള ബോക്‌സ് ടിക്ക് ചെയ്യുക.

![സജീവ പേയ്‌മെന്റ് ഗേറ്റ്‌വേകളിൽ PayPal പ്രവർത്തനക്ഷമമാക്കുന്നു](/img/config/settings-payment-gateways.png)

## PayPal API ക്രെഡൻഷ്യലുകൾ ലഭ്യമാക്കുന്നു

PayPal ഒരു പേയ്‌മെന്റ് ഗേറ്റ്‌വേയായി പ്രവർത്തനക്ഷമമാക്കിയാൽ, PayPal API **Username**, PayPal API **Password**, PayPal API **Signature** എന്നിവയ്ക്കുള്ള ഫീൽഡുകൾ നിങ്ങൾ പൂരിപ്പിക്കേണ്ടതുണ്ട്.

നിങ്ങളുടെ PayPal [Live](https://www.paypal.com/home) അല്ലെങ്കിൽ [Sandbox](https://www.sandbox.paypal.com/home) അക്കൗണ്ടിലേക്ക് ലോഗിൻ ചെയ്ത് ഇത് ലഭ്യമാക്കാം.

(പേയ്‌മെന്റുകൾ പരീക്ഷിക്കാനും ഗേറ്റ്‌വേ ശരിയായി സജ്ജമാക്കിയിട്ടുണ്ടോയെന്ന് കാണാനും നിങ്ങൾക്ക് **sandbox mode** ഉപയോഗിക്കാമെന്ന് ഓർക്കുക. അനുബന്ധ വിഭാഗം ടോഗിൾ ഓൺ ചെയ്താൽ മതി.)

![PayPal API ക്രെഡൻഷ്യൽ ഫീൽഡുകളും sandbox mode ടോഗിളും](/img/config/settings-payment-gateways.png)

നിങ്ങളുടെ PayPal അക്കൗണ്ടിനായി API Signature അല്ലെങ്കിൽ Certificate ക്രെഡൻഷ്യലുകൾ അഭ്യർത്ഥിക്കാൻ:

  1. നിങ്ങളുടെ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)-ലേക്ക് പോകുക.

  2. **API access** വിഭാഗത്തിൽ, **Update** ക്ലിക്ക് ചെയ്യുക.  
![API access വിഭാഗമുള്ള PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** എന്നതിന് കീഴിൽ, **Manage API credentials** ക്ലിക്ക് ചെയ്യുക.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * നിങ്ങൾ ഇതിനകം ഒരു API Signature അല്ലെങ്കിൽ Certificate ജനറേറ്റ് ചെയ്തിട്ടുണ്ടെങ്കിൽ, നിങ്ങളുടെ ക്രെഡൻഷ്യലുകൾ കണ്ടെത്താൻ കഴിയുന്ന ഒരു പേജിലേക്ക് നിങ്ങളെ റീഡയറക്ട് ചെയ്യും.

     * _**കുറിപ്പ്:** നിങ്ങളുടെ PayPal അക്കൗണ്ട് വെരിഫൈ ചെയ്യാൻ ആവശ്യപ്പെട്ടാൽ, സ്‌ക്രീനിലെ നിർദ്ദേശങ്ങൾ പാലിക്കുക._

  4. താഴെ പറയുന്ന ഓപ്ഷനുകളിൽ _ഒന്ന്_ തിരഞ്ഞെടുക്കുക, തുടർന്ന് **Agree and Submit** ക്ലിക്ക് ചെയ്യുക.

     * **Request API Signature** – API Signature ഓതന്റിക്കേഷനായി തിരഞ്ഞെടുക്കുക.

     * **Request API Certificate** – API Certificate ഓതന്റിക്കേഷനായി തിരഞ്ഞെടുക്കുക.

  5. PayPal നിങ്ങളുടെ API ക്രെഡൻഷ്യലുകൾ ഇനിപ്പറയുന്ന രീതിയിൽ ജനറേറ്റ് ചെയ്യുന്നു:  
![PayPal ജനറേറ്റ് ചെയ്ത API ക്രെഡൻഷ്യലുകൾ](/img/config/settings-payment-gateways.png)

     * **API Signature ക്രെഡൻഷ്യലുകളിൽ** API Username, API Password, Signature എന്നിവ ഉൾപ്പെടുന്നു, ഇവ കാലഹരണപ്പെടില്ല. കൂടുതൽ സുരക്ഷയ്ക്കായി ഈ മൂല്യങ്ങൾ ഡിഫോൾട്ടായി മറഞ്ഞിരിക്കുന്നു. അവ ഓണും ഓഫും ചെയ്യാൻ **Show/Hide** ക്ലിക്ക് ചെയ്യുക. പൂർത്തിയാകുമ്പോൾ, **Done** ക്ലിക്ക് ചെയ്യുക.

     * **API Certificate ക്രെഡൻഷ്യലുകളിൽ** API Username, API Password, Certificate എന്നിവ ഉൾപ്പെടുന്നു, ഇത് മൂന്ന് വർഷത്തിന് ശേഷം സ്വയമേവ കാലഹരണപ്പെടും. API Certificate നിങ്ങളുടെ ഡെസ്‌ക്‌ടോപ്പിലേക്ക് സേവ് ചെയ്യാൻ **Download Certificate** ക്ലിക്ക് ചെയ്യുക.

അത്രമാത്രം, നിങ്ങളുടെ PayPal പേയ്‌മെന്റ് സംയോജനം പൂർത്തിയായി!

PayPal സെറ്റിംഗ്‌സിനെ കുറിച്ച് എന്തെങ്കിലും ചോദ്യങ്ങളുണ്ടെങ്കിൽ, PayPal-ന്റെ [Help Center](https://www.paypal.com/br/smarthelp/home) പരിശോധിക്കാം.
