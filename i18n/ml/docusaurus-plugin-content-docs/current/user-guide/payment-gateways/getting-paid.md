---
title: പണം ലഭിക്കൽ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# പണമടയ്ക്കൽ (v2) {#getting-paid-v2}

_**പ്രധാന കുറിപ്പ്: ഈ ലേഖനം Ultimate Multisite പതിപ്പ് 2.x-നെ കുറിച്ചാണ്.**_

Ultimate Multisite-ൽ ഉൾനിർമ്മിത membership, billing സിസ്റ്റം ഉണ്ട്. നമ്മുടെ billing സിസ്റ്റം പ്രവർത്തിക്കാൻ, ഇ-കൊമേഴ്‌സിൽ സാധാരണയായി ഉപയോഗിക്കുന്ന പ്രധാന payment gateways ഞങ്ങൾ സംയോജിപ്പിച്ചിരിക്കുന്നു. Ultimate Multisite-യിലെ ഡിഫോൾട്ട് payment gateways _Stripe_ , _PayPal_ , മാനുവൽ പേയ്മെന്റ് എന്നിവയാണ്. ബന്ധപ്പെട്ട add-ons ഇൻസ്റ്റാൾ ചെയ്താൽ പേയ്മെന്റുകൾ സ്വീകരിക്കാൻ _WooCommerce_ , _GoCardless_ , _Payfast_ എന്നിവയും ഉപയോഗിക്കാം.

## അടിസ്ഥാന ക്രമീകരണങ്ങൾ {#basic-settings}

Ultimate Multisite payment settings-ൽ ഈ payment gateways ഏത് വേണമെങ്കിലും ക്രമീകരിക്കാം. ഇത് **Ultimate Multisite menu > Settings > Payments** എന്നിടത്ത് കാണാം.

![Payments പാനൽ കാണിക്കുന്ന Ultimate Multisite-യിലെ Payments settings പേജ്](/img/config/payments-settings-page.png)

നിങ്ങളുടെ payment gateway സജ്ജീകരിക്കുന്നതിന് മുമ്പ്, ക്രമീകരിക്കാനാകുന്ന അടിസ്ഥാന payment settings നോക്കുക:

**സ്വയം പുതുക്കൽ നിർബന്ധമാക്** **കുക:** ഉപയോക്താവ് തിരഞ്ഞെടുത്ത billing frequency അനുസരിച്ച് ഓരോ billing cycle-ന്റെ അവസാനം പേയ്മെന്റ് സ്വയമേവ ആവർത്തിക്കുമെന്ന് ഇത് ഉറപ്പാക്കും.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0, auto-renewal പ്രവർത്തനക്ഷമമാക്കിയ recurring membership സംരക്ഷിക്കുന്നതിന് മുമ്പ്, സജീവ gateway-ക്ക് വീണ്ടും ഉപയോഗിക്കാവുന്ന renewal credential ഉണ്ടോ എന്ന് പരിശോധിക്കുന്നു. renewal credential ഒരു gateway subscription, billing agreement, saved vault token, അല്ലെങ്കിൽ തുല്യമായ വീണ്ടും ഉപയോഗിക്കാവുന്ന payment method ആയിരിക്കാം. ഉപയോഗിക്കാവുന്ന credential ഒന്നുമില്ലെന്ന് gateway റിപ്പോർട്ട് ചെയ്താൽ, Ultimate Multisite membership സംരക്ഷിക്കും, പക്ഷേ auto-renewal ഓഫാക്കുകയും missing-credential നില രേഖപ്പെടുത്തുകയും ചെയ്യും. അങ്ങനെ renewal date-ന് മുമ്പ് പേയ്മെന്റ് വീണ്ടും അംഗീകരിക്കാൻ ഉപഭോക്താവിനോട് administrator അല്ലെങ്കിൽ support flow ആവശ്യപ്പെടാം.

gateway-ക്ക് one-time payments മാത്രം ശേഖരിക്കാനാകുമ്പോൾ membership auto-renew ചെയ്യുന്നതുപോലെ തോന്നുന്നത് ഇത് തടയുന്നു. gateway add-ons, recurring checkouts വീണ്ടും ഉപയോഗിക്കാവുന്ന credential സംരക്ഷിക്കുന്നുവെന്ന് ഉറപ്പാക്കണം, പ്രത്യേകിച്ച് gateway one-time capture, vaulted/subscription payment modes എന്നിവ രണ്ടും പിന്തുണയ്ക്കുമ്പോൾ.

**Payment** **method ഇല്ലാതെ trials അനുവദിക്കുക:** ഈ option പ്രവർത്തനക്ഷമമാക്കിയാൽ registration process സമയത്ത് നിങ്ങളുടെ client സാമ്പത്തിക വിവരങ്ങൾ ഒന്നും ചേർക്കേണ്ടതില്ല. trial period അവസാനിച്ചാൽ മാത്രമേ ഇത് ആവശ്യമായിരിക്കൂ.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**പേയ്മെന്റ് സ്ഥിരീകരണത്തിൽ invoice അയയ്ക്കുക:** പേയ്മെന്റിന് ശേഷം invoice അയയ്ക്കണോ വേണ്ടയോ എന്നത് തിരഞ്ഞെടുക്കാൻ ഇത് option നൽകുന്നു. ഉപയോക്താക്കൾക്ക് അവരുടെ subsite Dashboard-ൽ payment history ലഭ്യമാകുമെന്ന് ശ്രദ്ധിക്കുക. ഈ option Manual Gateway-ന് ബാധകമല്ല.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** ഇവിടെ, payment reference code അല്ലെങ്കിൽ sequential number scheme തിരഞ്ഞെടുക്കാം. നിങ്ങളുടെ invoices-നായി payment reference code ഉപയോഗിക്കാൻ തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ, ഒന്നും ക്രമീകരിക്കേണ്ടതില്ല. sequential number scheme ഉപയോഗിക്കാൻ തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ, **അടുത്ത invoice number** (സിസ്റ്റത്തിൽ അടുത്തതായി സൃഷ്ടിക്കുന്ന invoice-ന്റെ invoice number ആയി ഈ നമ്പർ ഉപയോഗിക്കും. ഓരോ പുതിയ invoice സൃഷ്ടിക്കുമ്പോഴും ഇത് ഒന്നായി വർധിക്കും. invoice sequential number ഒരു നിർദ്ദിഷ്ട മൂല്യത്തിലേക്ക് reset ചെയ്യാൻ ഇത് മാറ്റി save ചെയ്യാം) കൂടാതെ **invoice number prefix** ക്രമീകരിക്കണം.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gateways എവിടെ കണ്ടെത്താം: {#where-to-find-the-gateways}

അതേ പേജിൽ payment gateways സജ്ജീകരിക്കാം ( **Ultimate Multisite > Settings > Payments**). **active payment gateways**-ന്റെ തൊട്ടുതാഴെ, നിങ്ങൾക്ക് ഇവ കാണാം: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ , _Manual_.

![Stripe, Stripe Checkout, PayPal, Manual എന്നിവ പട്ടികപ്പെടുത്തുന്ന Active Payment Gateways വിഭാഗം](/img/config/payments-active-gateways.png)

ഓരോ payment gateway-യ്ക്കും അതിനെ സജ്ജീകരിക്കുന്ന ഘട്ടങ്ങളിലൂടെ നിങ്ങളെ നയിക്കുന്ന പ്രത്യേക ലേഖനം ഞങ്ങൾക്ക് ഉണ്ട്. താഴെയുള്ള links-ൽ അവ കണ്ടെത്താം.

Payment details കാണാനും edit ചെയ്യാനും കഴിയും:

![Payment edit ഇന്റർഫേസ്](/img/admin/payment-edit.png)

payment edit page-ന്റെ പൂർണ്ണ കാഴ്ച ഇതാ:

![Payment edit പൂർണ്ണ ഇന്റർഫേസ്](/img/admin/payment-edit-full.png)

payment gateways settings-ന്റെ പൂർണ്ണ കാഴ്ചയും ഇതാ:

![Payment gateways settings പൂർണ്ണ പേജ്](/img/config/settings-payments-gateways-full.png)

**Stripe gateway സജ്ജീകരിക്കൽ**

**PayPal gateway സജ്ജീകരിക്കൽ**** **

**manual payments സജ്ജീകരിക്കൽ**

ഇപ്പോൾ, നിങ്ങളുടെ payment gateway ആയി _WooCommerce_ , _GoCardless_ അല്ലെങ്കിൽ _Payfast_ ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ, **അവയുടെ add-ons ഇൻസ്റ്റാൾ ചെയ്ത് ക്രമീകരിക്കണം**.

### WooCommerce add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നത് എങ്ങനെ: {#how-to-install-the-woocommerce-add-on}

ചില രാജ്യങ്ങളിൽ _Stripe_ , _PayPal_ ലഭ്യമല്ലെന്ന് ഞങ്ങൾ മനസ്സിലാക്കുന്നു. ഇത് Ultimate Multisite ഉപയോക്താക്കൾക്ക് നമ്മുടെ plugin ഫലപ്രദമായി ഉപയോഗിക്കുന്നത് പരിമിതപ്പെടുത്തുകയോ തടസ്സപ്പെടുത്തുകയോ ചെയ്യുന്നു. അതിനാൽ വളരെ ജനപ്രിയമായ ഇ-കൊമേഴ്‌സ് plugin ആയ _WooCommerce,_ സംയോജിപ്പിക്കാൻ ഞങ്ങൾ ഒരു add-on സൃഷ്ടിച്ചു. ലോകമെമ്പാടുമുള്ള developers വ്യത്യസ്ത payment gateways അതിലേക്ക് സംയോജിപ്പിക്കാൻ add-ons സൃഷ്ടിച്ചിട്ടുണ്ട്. Ultimate Multisite billing സിസ്റ്റവുമായി ഉപയോഗിക്കാനാകുന്ന payment gateways വിപുലീകരിക്കാൻ ഞങ്ങൾ ഇത് പ്രയോജനപ്പെടുത്തി.

_**പ്രധാന കുറിപ്പ്:** Ultimate Multisite: WooCommerce Integration-ന് WooCommerce കുറഞ്ഞത് നിങ്ങളുടെ main site-ൽ സജീവമാക്കിയിരിക്കണം._

ആദ്യം, add-ons page-ലേക്ക് പോകുക. **Ultimate Multisite > Settings** എന്നിടത്ത് ഇത് കണ്ടെത്താം. നിങ്ങൾക്ക് **Add-ons** table കാണണം. **Check our Add-ons** ക്ലിക്ക് ചെയ്യുക.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** ക്ലിക്ക് ചെയ്ത ശേഷം, നിങ്ങളെ add-ons page-ലേക്ക് redirect ചെയ്യും. ഇവിടെ എല്ലാ Ultimate Multisite add-ons കണ്ടെത്താം. **Ultimate Multisite: WooCommerce Integration** add-on ക്ലിക്ക് ചെയ്യുക.

![WooCommerce Integration ഉൾപ്പെടെ Ultimate Multisite add-ons പട്ടികപ്പെടുത്തുന്ന Add-ons പേജ്](/img/addons/addons-page.png)

ഒരു വിൻഡോ add-on വിശദാംശങ്ങളോടെ തുറക്കും. **ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക** എന്നതിൽ ക്ലിക്ക് ചെയ്യുക.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Ultimate Multisite WooCommerce Integration add-on വിശദാംശ ഡയലോഗ്, ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക ബട്ടണോടുകൂടി -->

ഇൻസ്റ്റാളേഷൻ പൂർത്തിയായാൽ, നിങ്ങൾ plugins പേജിലേക്ക് തിരിച്ചുവിടപ്പെടും. ഇവിടെ, **നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക** എന്നതിൽ ക്ലിക്ക് ചെയ്താൽ WooCommerce add-on നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ സജീവമാകും.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: WooCommerce Integration add-on-നുള്ള നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക ലിങ്കുള്ള Plugins പേജ് -->

ഇത് സജീവമാക്കിയ ശേഷം, നിങ്ങളുടെ വെബ്‌സൈറ്റിൽ WooCommerce plugin ഇനിയും ഇൻസ്റ്റാൾ ചെയ്ത് സജീവമാക്കിയിട്ടില്ലെങ്കിൽ, നിങ്ങൾക്ക് ഒരു ഓർമ്മപ്പെടുത്തൽ ലഭിക്കും.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: WooCommerce plugin ഇൻസ്റ്റാൾ ചെയ്ത് സജീവമാക്കാൻ അഡ്മിനിസ്ട്രേറ്ററെ ഓർമ്മിപ്പിക്കുന്ന Admin അറിയിപ്പ് -->

WooCommerce Integration add-on-നെ കുറിച്ച് കൂടുതൽ വായിക്കാൻ, **ഇവിടെ ക്ലിക്ക് ചെയ്യുക**.

### GoCardless add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നതെങ്ങനെ: {#how-to-install-the-gocardless-add-on}

_GoCardless_ add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നതിനുള്ള ഘട്ടങ്ങൾ _WooCommerce_ add-on-നോടു വളരെ സമാനമാണ്. ദയവായി add-ons പേജിലേക്ക് പോയി **Ultimate Multisite: GoCardless Gateway** add-on തിരഞ്ഞെടുക്കുക.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Ultimate Multisite GoCardless Gateway add-on ഹൈലൈറ്റ് ചെയ്ത Add-ons പേജ് -->

add-on വിൻഡോ തുറക്കും. **ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക** എന്നതിൽ ക്ലിക്ക് ചെയ്യുക.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Ultimate Multisite GoCardless Gateway add-on വിശദാംശ ഡയലോഗ്, ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക ബട്ടണോടുകൂടി -->

ഇൻസ്റ്റാളേഷൻ പൂർത്തിയായാൽ, നിങ്ങൾ plugins പേജിലേക്ക് തിരിച്ചുവിടപ്പെടും. ഇവിടെ, **നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക** എന്നതിൽ ക്ലിക്ക് ചെയ്താൽ _GoCardless_ add-on നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ സജീവമാകും.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: GoCardless Gateway add-on-നുള്ള നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക ലിങ്കുള്ള Plugins പേജ് -->

_GoCardless_ gateway ഉപയോഗിച്ച് എങ്ങനെ തുടങ്ങാമെന്ന് അറിയാൻ, **ഈ ലേഖനം വായിക്കുക**.

### Payfast add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നതെങ്ങനെ: {#how-to-install-the-payfast-add-on}

add-ons പേജിലേക്ക് പോയി **Ultimate Multisite: Payfast Gateway** add-on തിരഞ്ഞെടുക്കുക.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Ultimate Multisite Payfast Gateway add-on ഹൈലൈറ്റ് ചെയ്ത Add-ons പേജ് -->

add-on വിൻഡോ തുറക്കും. **ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക** എന്നതിൽ ക്ലിക്ക് ചെയ്യുക.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Ultimate Multisite Payfast Gateway add-on വിശദാംശ ഡയലോഗ്, ഇപ്പോൾ ഇൻസ്റ്റാൾ ചെയ്യുക ബട്ടണോടുകൂടി -->

ഇൻസ്റ്റാളേഷൻ പൂർത്തിയായാൽ, നിങ്ങൾ plugins പേജിലേക്ക് തിരിച്ചുവിടപ്പെടും. ഇവിടെ, **നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക** എന്നതിൽ ക്ലിക്ക് ചെയ്താൽ _Payfast_ add-on നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ സജീവമാകും.

<!-- സ്ക്രീൻഷോട്ട് ലഭ്യമല്ല: Payfast Gateway add-on-നുള്ള നെറ്റ്‌വർക്കിൽ സജീവമാക്കുക ലിങ്കുള്ള Plugins പേജ് -->
