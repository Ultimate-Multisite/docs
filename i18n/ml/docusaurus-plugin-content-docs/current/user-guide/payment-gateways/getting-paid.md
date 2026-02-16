---
title: പണം ലഭിക്കുന്നത്
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# പേയ്മെന്റ് സ്വീകരിക്കൽ (v2)

_**പ്രധാന കുറിപ്പ്: ഈ ലേഖനം Ultimate Multisite പതിപ്പ് 2.x-നെ കുറിച്ചുള്ളതാണ്.**_

Ultimate Multisite-ൽ ഒരു ബിൽറ്റ്-ഇൻ മെമ്പർഷിപ്പും ബില്ലിംഗ് സിസ്റ്റവും ഉണ്ട്. ഞങ്ങളുടെ ബില്ലിംഗ് സിസ്റ്റം പ്രവർത്തിക്കാൻ, ഇ-കൊമേഴ്‌സിൽ സാധാരണയായി ഉപയോഗിക്കുന്ന payment gateway-കൾ ഞങ്ങൾ സംയോജിപ്പിച്ചിട്ടുണ്ട്. Ultimate Multisite-ലെ ഡിഫോൾട്ട് payment gateway-കൾ _Stripe_, _PayPal_, Manual Payment എന്നിവയാണ്. അതാത് add-on-കൾ ഇൻസ്റ്റാൾ ചെയ്ത് _WooCommerce_, _GoCardless_, _Payfast_ എന്നിവയും പേയ്മെന്റുകൾ സ്വീകരിക്കാൻ നിങ്ങൾക്ക് ഉപയോഗിക്കാം.

## അടിസ്ഥാന സെറ്റിംഗുകൾ

Ultimate Multisite payment settings-ൽ ഈ payment gateway-കളിൽ ഏതും നിങ്ങൾക്ക് കോൺഫിഗർ ചെയ്യാം. **Ultimate Multisite menu > Settings > Payments** എന്നതിലേക്ക് പോയി നിങ്ങൾക്ക് ഇത് കണ്ടെത്താം.

![Ultimate Multisite-ലെ Payment settings പേജ്](/img/config/settings-payment-gateways.png)

നിങ്ങളുടെ payment gateway സെറ്റപ്പ് ചെയ്യുന്നതിന് മുമ്പ്, നിങ്ങൾക്ക് കോൺഫിഗർ ചെയ്യാവുന്ന അടിസ്ഥാന payment settings ഒന്ന് നോക്കുക:

**Force auto-renew:** ഉപയോക്താവ് തിരഞ്ഞെടുത്ത billing frequency അനുസരിച്ച് ഓരോ billing cycle-ന്റെയും അവസാനം പേയ്മെന്റ് സ്വയമേവ ആവർത്തിക്കുമെന്ന് ഇത് ഉറപ്പാക്കും.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** ഈ ഓപ്ഷൻ പ്രവർത്തനക്ഷമമാക്കിയാൽ, രജിസ്ട്രേഷൻ പ്രക്രിയയിൽ നിങ്ങളുടെ ക്ലയന്റിന് ഒരു സാമ്പത്തിക വിവരവും ചേർക്കേണ്ടി വരില്ല. trial കാലാവധി കഴിയുമ്പോൾ മാത്രമേ ഇത് ആവശ്യമാകൂ.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** പേയ്മെന്റിന് ശേഷം invoice അയയ്ക്കണോ വേണ്ടയോ എന്ന് തിരഞ്ഞെടുക്കാനുള്ള ഓപ്ഷനാണിത്. ഉപയോക്താക്കൾക്ക് അവരുടെ subsite dashboard-ൽ payment history ആക്സസ് ചെയ്യാൻ കഴിയുമെന്ന് ശ്രദ്ധിക്കുക. Manual Gateway-ന് ഈ ഓപ്ഷൻ ബാധകമല്ല.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ഇവിടെ, payment reference code അല്ലെങ്കിൽ sequential number scheme തിരഞ്ഞെടുക്കാം. നിങ്ങളുടെ invoice-കൾക്ക് payment reference code ഉപയോഗിക്കാൻ തീരുമാനിച്ചാൽ, ഒന്നും കോൺഫിഗർ ചെയ്യേണ്ടതില്ല. Sequential number scheme ഉപയോഗിക്കാൻ തീരുമാനിച്ചാൽ, **next invoice number** (സിസ്റ്റത്തിൽ അടുത്തതായി ജനറേറ്റ് ചെയ്യുന്ന invoice-ന് ഈ നമ്പർ ഉപയോഗിക്കും. ഓരോ പുതിയ invoice സൃഷ്ടിക്കുമ്പോഴും ഇത് ഒന്ന് വർദ്ധിക്കും. invoice sequential number ഒരു നിശ്ചിത മൂല്യത്തിലേക്ക് റീസെറ്റ് ചെയ്യാൻ നിങ്ങൾക്ക് ഇത് മാറ്റി സേവ് ചെയ്യാം), **invoice number prefix** എന്നിവ കോൺഫിഗർ ചെയ്യേണ്ടതുണ്ട്.

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number, prefix settings](/img/config/settings-payment-gateways.png)

## Gateway-കൾ എവിടെ കണ്ടെത്താം:

അതേ പേജിൽ തന്നെ (**Ultimate Multisite > Settings > Payments**) payment gateway-കൾ സെറ്റപ്പ് ചെയ്യാം. **active payment gateways**-ന് തൊട്ടുതാഴെ, നിങ്ങൾക്ക് ഇവ കാണാം: _Stripe_, _Stripe Checkout_, _PayPal_, _Manual_.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

ഓരോ payment gateway-യും സെറ്റപ്പ് ചെയ്യുന്നതിനുള്ള ഘട്ടങ്ങൾ വിശദീകരിക്കുന്ന ഒരു പ്രത്യേക ലേഖനം ഞങ്ങളുടെ പക്കലുണ്ട്. താഴെയുള്ള ലിങ്കുകളിൽ അവ കണ്ടെത്താം.

**Stripe gateway സെറ്റപ്പ് ചെയ്യൽ**

**PayPal gateway സെറ്റപ്പ് ചെയ്യൽ**

**Manual payments സെറ്റപ്പ് ചെയ്യൽ**

ഇനി, _WooCommerce_, _GoCardless_, _Payfast_ എന്നിവ നിങ്ങളുടെ payment gateway ആയി ഉപയോഗിക്കണമെങ്കിൽ, **അവയുടെ add-on-കൾ ഇൻസ്റ്റാൾ ചെയ്ത് കോൺഫിഗർ ചെയ്യേണ്ടതുണ്ട്**.

### WooCommerce add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നത് എങ്ങനെ:

_Stripe_-ഉം _PayPal_-ഉം ചില രാജ്യങ്ങളിൽ ലഭ്യമല്ലെന്ന് ഞങ്ങൾക്കറിയാം, ഇത് Ultimate Multisite ഉപയോക്താക്കൾക്ക് ഞങ്ങളുടെ plugin ഫലപ്രദമായി ഉപയോഗിക്കുന്നതിന് തടസ്സമാകുന്നു. അതിനാൽ, വളരെ ജനപ്രിയമായ ഒരു e-commerce plugin ആയ _WooCommerce_ സംയോജിപ്പിക്കാൻ ഞങ്ങൾ ഒരു add-on സൃഷ്ടിച്ചു. ലോകമെമ്പാടുമുള്ള ഡെവലപ്പർമാർ വിവിധ payment gateway-കൾ അതിലേക്ക് സംയോജിപ്പിക്കാൻ add-on-കൾ സൃഷ്ടിച്ചിട്ടുണ്ട്. Ultimate Multisite billing system-ൽ ഉപയോഗിക്കാവുന്ന payment gateway-കൾ വിപുലീകരിക്കാൻ ഞങ്ങൾ ഇത് പ്രയോജനപ്പെടുത്തി.

_**പ്രധാനം:** Ultimate Multisite: WooCommerce Integration-ന് കുറഞ്ഞത് നിങ്ങളുടെ main site-ൽ WooCommerce ആക്ടിവേറ്റ് ചെയ്തിരിക്കണം._

ആദ്യം, add-ons പേജിലേക്ക് പോകുക. **Ultimate Multisite > Settings** എന്നതിലേക്ക് പോയി നിങ്ങൾക്ക് ഇത് കണ്ടെത്താം. **Add-ons** ടേബിൾ കാണാം. **Check our Add-ons**-ൽ ക്ലിക്ക് ചെയ്യുക.

![Add-ons സെക്ഷനുള്ള Settings പേജ്](/img/config/settings-general.png)

**Check our Add-ons**-ൽ ക്ലിക്ക് ചെയ്തതിന് ശേഷം, add-ons പേജിലേക്ക് നിങ്ങളെ redirect ചെയ്യും. ഇവിടെ എല്ലാ Ultimate Multisite add-on-കളും കാണാം. **Ultimate Multisite: WooCommerce Integration** add-on-ൽ ക്ലിക്ക് ചെയ്യുക.

![ലഭ്യമായ add-on-കളുടെ ലിസ്റ്റ് കാണിക്കുന്ന Add-ons പേജ്](/img/config/settings-general.png)

Add-on വിശദാംശങ്ങളുള്ള ഒരു വിൻഡോ പോപ്പ് അപ്പ് ചെയ്യും. **Install Now**-ൽ ക്ലിക്ക് ചെയ്യുക.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

ഇൻസ്റ്റലേഷൻ പൂർത്തിയായതിന് ശേഷം, plugins പേജിലേക്ക് നിങ്ങളെ redirect ചെയ്യും. ഇവിടെ, **Network Activate**-ൽ ക്ലിക്ക് ചെയ്താൽ WooCommerce add-on നിങ്ങളുടെ network-ൽ ആക്ടിവേറ്റ് ആകും.

![WooCommerce add-on Network Activate ചെയ്യൽ](/img/config/settings-general.png)

ആക്ടിവേറ്റ് ചെയ്തതിന് ശേഷം, നിങ്ങളുടെ website-ൽ WooCommerce plugin ഇൻസ്റ്റാൾ ചെയ്ത് ആക്ടിവേറ്റ് ചെയ്തിട്ടില്ലെങ്കിൽ, ഒരു ഓർമ്മപ്പെടുത്തൽ ലഭിക്കും.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

WooCommerce Integration add-on-നെ കുറിച്ച് കൂടുതൽ വായിക്കാൻ, **ഇവിടെ ക്ലിക്ക് ചെയ്യുക**.

### GoCardless add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നത് എങ്ങനെ:

_GoCardless_ add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നതിനുള്ള ഘട്ടങ്ങൾ _WooCommerce_ add-on-ന്റേതിന് സമാനമാണ്. Add-ons പേജിലേക്ക് പോയി **Ultimate Multisite: GoCardless Gateway** add-on തിരഞ്ഞെടുക്കുക.

![ലഭ്യമായ add-on-കളുടെ ലിസ്റ്റ് കാണിക്കുന്ന Add-ons പേജ്](/img/config/settings-general.png)

Add-on വിൻഡോ പോപ്പ് അപ്പ് ചെയ്യും. **Install Now**-ൽ ക്ലിക്ക് ചെയ്യുക.

![GoCardless add-on install dialog](/img/config/settings-general.png)

ഇൻസ്റ്റലേഷൻ പൂർത്തിയായതിന് ശേഷം, plugins പേജിലേക്ക് നിങ്ങളെ redirect ചെയ്യും. ഇവിടെ, **Network Activate**-ൽ ക്ലിക്ക് ചെയ്താൽ _GoCardless_ add-on നിങ്ങളുടെ network-ൽ ആക്ടിവേറ്റ് ആകും.

![GoCardless add-on Network Activate ചെയ്യൽ](/img/config/settings-general.png)

_GoCardless_ gateway ഉപയോഗിച്ച് തുടങ്ങുന്നത് എങ്ങനെയെന്ന് അറിയാൻ, **ഈ ലേഖനം വായിക്കുക**.

### Payfast add-on ഇൻസ്റ്റാൾ ചെയ്യുന്നത് എങ്ങനെ:

Add-ons പേജിലേക്ക് പോയി **Ultimate Multisite: Payfast Gateway** add-on തിരഞ്ഞെടുക്കുക.

![ലഭ്യമായ add-on-കളുടെ ലിസ്റ്റ് കാണിക്കുന്ന Add-ons പേജ്](/img/config/settings-general.png)

Add-on വിൻഡോ പോപ്പ് അപ്പ് ചെയ്യും. **Install Now**-ൽ ക്ലിക്ക് ചെയ്യുക.

![Payfast add-on install dialog](/img/config/settings-general.png)

ഇൻസ്റ്റലേഷൻ പൂർത്തിയായതിന് ശേഷം, plugins പേജിലേക്ക് നിങ്ങളെ redirect ചെയ്യും. ഇവിടെ, **Network Activate**-ൽ ക്ലിക്ക് ചെയ്താൽ _Payfast_ add-on നിങ്ങളുടെ network-ൽ ആക്ടിവേറ്റ് ആകും.

![Payfast add-on Network Activate ചെയ്യൽ](/img/config/settings-general.png)
