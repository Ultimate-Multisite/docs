---
title: Stripe സജ്ജീകരിക്കുന്നു
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe ഗേറ്റ്‌വേ സജ്ജീകരിക്കുന്ന വിധം (v2)

_**പ്രധാന കുറിപ്പ്: ഈ ലേഖനം Ultimate Multisite പതിപ്പ് 2.x-നെ കുറിച്ചാണ്.**_

ഞങ്ങളുടെ പേയ്‌മെന്റ് സെറ്റിംഗ്സ് പേജിൽ നാല് പേയ്‌മെന്റ് രീതികൾ വരെ നിങ്ങൾക്ക് സജീവമാക്കാം: Stripe, Stripe Checkout, PayPal, Manual എന്നിവ. ഈ ലേഖനത്തിൽ, **Stripe**-മായി എങ്ങനെ ഇന്റഗ്രേറ്റ് ചെയ്യാമെന്ന് നമുക്ക് നോക്കാം.

## Stripe സജീവമാക്കുന്ന വിധം

നിങ്ങളുടെ നെറ്റ്‌വർക്കിൽ Stripe ഒരു പേയ്‌മെന്റ് ഗേറ്റ്‌വേയായി സജീവമാക്കാൻ, **Ultimate Multisite > Settings > Payments** എന്നതിലേക്ക് പോയി Active Payment Gateways വിഭാഗത്തിൽ **Stripe** അല്ലെങ്കിൽ **Stripe Checkout**-ന് അടുത്തുള്ള ടോഗിൾ ടിക്ക് ചെയ്യുക.

![Active payment gateways-ൽ Stripe സജീവമാക്കുന്നു](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** ഈ രീതി checkout സമയത്ത് ക്രെഡിറ്റ് കാർഡ് നമ്പർ നൽകാനുള്ള ഒരു സ്ഥലം കാണിക്കും.

![Checkout സമയത്ത് Stripe inline ക്രെഡിറ്റ് കാർഡ് ഫീൽഡ്](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ഈ രീതി checkout സമയത്ത് ഉപഭോക്താവിനെ ഒരു Stripe Checkout പേജിലേക്ക് റീഡയറക്ട് ചെയ്യും.

![Checkout സമയത്ത് Stripe Checkout റീഡയറക്ട് പേജ്](/img/config/settings-payment-gateways.png)

നിങ്ങളുടെ Stripe API കീകൾ ലഭിക്കുന്ന വിധം

Stripe ഒരു പേയ്‌മെന്റ് ഗേറ്റ്‌വേയായി സജീവമാക്കിക്കഴിഞ്ഞാൽ, **Stripe Publishable Key**, **Stripe Secret Key** എന്നീ ഫീൽഡുകൾ പൂരിപ്പിക്കേണ്ടതുണ്ട്. നിങ്ങളുടെ Stripe അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്ത് ഇത് ലഭിക്കും.

_**കുറിപ്പ്:** പേയ്‌മെന്റ് രീതി പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കാൻ **Sandbox mode** സജീവമാക്കാം._

![Stripe API key ഫീൽഡുകളും sandbox mode ടോഗിളും](/img/config/settings-payment-gateways.png)

നിങ്ങളുടെ Stripe dashboard-ൽ, മുകളിൽ വലതുവശത്തുള്ള **Developers** ക്ലിക്ക് ചെയ്യുക, തുടർന്ന് ഇടത് മെനുവിൽ **API Keys** ക്ലിക്ക് ചെയ്യുക.

![API Keys ഉള്ള Stripe dashboard Developers വിഭാഗം](/img/config/settings-payment-gateways.png)

നിങ്ങൾക്ക് **Test Data** ഉപയോഗിക്കാം (നിങ്ങളുടെ production സൈറ്റിൽ ഇന്റഗ്രേഷൻ പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കാൻ) അല്ലെങ്കിൽ വേണ്ട. ഇത് മാറ്റാൻ, **Viewing test data** ടോഗിൾ മാറ്റുക.

![Stripe Viewing test data ടോഗിൾ](/img/config/settings-payment-gateways.png)

**Token** കോളത്തിൽ നിന്ന് **Publishable key**, **Secret key** എന്നിവയുടെ മൂല്യം പകർത്തി Ultimate Multisite Stripe Gateway ഫീൽഡുകളിൽ പേസ്റ്റ് ചെയ്യുക. തുടർന്ന് **Save Changes** ക്ലിക്ക് ചെയ്യുക.

![Stripe publishable, secret key മൂല്യങ്ങൾ](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings-ൽ Stripe keys പേസ്റ്റ് ചെയ്യുന്നു](/img/config/settings-payment-gateways.png)

## Stripe Webhook സജ്ജീകരിക്കുന്ന വിധം

**നിങ്ങളുടെ stripe അക്കൗണ്ടിൽ** എന്തെങ്കിലും സംഭവിക്കുമ്പോഴെല്ലാം Ultimate Multisite-നെ അറിയിക്കുന്ന webhook ഇവന്റുകൾ Stripe അയയ്ക്കുന്നു.

**Developers** ക്ലിക്ക് ചെയ്ത് ഇടത് മെനുവിൽ **Webhooks** ഐറ്റം തിരഞ്ഞെടുക്കുക. തുടർന്ന് വലതുവശത്ത് **Add endpoint** ക്ലിക്ക് ചെയ്യുക.

![Add endpoint ബട്ടൺ ഉള്ള Stripe Webhooks പേജ്](/img/config/settings-payment-gateways.png)

നിങ്ങൾക്ക് ഒരു **Endpoint URL** ആവശ്യമാണ്. Ultimate Multisite endpoint URL സ്വയം ജനറേറ്റ് ചെയ്യുന്നു, ഇത് **Ultimate Multisite Stripe Gateway** വിഭാഗത്തിലെ **Webhook Listener URL** ഫീൽഡിന് തൊട്ടുതാഴെ കാണാം.

![Stripe gateway settings-ലെ Webhook Listener URL ഫീൽഡ്](/img/config/settings-payment-gateways.png)

endpoint URL **പകർത്തി** Stripe **Endpoint URL** ഫീൽഡിൽ **പേസ്റ്റ്** ചെയ്യുക.

![Stripe webhook setup-ൽ endpoint URL പേസ്റ്റ് ചെയ്യുന്നു](/img/config/settings-payment-gateways.png)

അടുത്തത് ഒരു **Event** തിരഞ്ഞെടുക്കുക എന്നതാണ്. ഈ ഓപ്ഷന് കീഴിൽ, **Select all events** ബോക്സ് ചെക്ക് ചെയ്ത് **Add events** ക്ലിക്ക് ചെയ്താൽ മതി. അതിനുശേഷം മാറ്റങ്ങൾ സേവ് ചെയ്യാൻ **Add Endpoint** ക്ലിക്ക് ചെയ്യുക.

![എല്ലാ ഇവന്റുകളും തിരഞ്ഞെടുത്ത് Stripe endpoint ചേർക്കുന്നു](/img/config/settings-payment-gateways.png)

അത്രമാത്രം, നിങ്ങളുടെ Stripe പേയ്‌മെന്റ് ഇന്റഗ്രേഷൻ പൂർത്തിയായി!
