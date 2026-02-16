---
title: നിങ്ങളുടെ ആദ്യ സബ്‌സ്‌ക്രിപ്ഷൻ ഉൽപ്പന്നം സൃഷ്ടിക്കുന്നു
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# നിങ്ങളുടെ ആദ്യ Subscription ഉൽപ്പന്നം സൃഷ്ടിക്കുന്നത് (v2)

_**പ്രധാന കുറിപ്പ്: ഈ ലേഖനം Ultimate Multisite വേർഷൻ 2.x ഉപയോക്താക്കൾക്ക് മാത്രമുള്ളതാണ്. നിങ്ങൾ വേർഷൻ 1.x ഉപയോഗിക്കുകയാണെങ്കിൽ,**_ **_**ഈ ലേഖനം കാണുക**_**.

നിങ്ങളുടെ network പ്രവർത്തിപ്പിക്കാനും സാധ്യതയുള്ള ഉപയോക്താക്കൾക്ക് നിങ്ങളുടെ സേവനങ്ങൾ വിൽക്കാൻ തുടങ്ങാനും, നിങ്ങൾക്ക് വ്യത്യസ്ത subscription ഓപ്ഷനുകൾ ആവശ്യമാണ്. ഈ ഉൽപ്പന്നങ്ങൾ എങ്ങനെ സൃഷ്ടിക്കാം? നിങ്ങൾക്ക് ഏതൊക്കെ തരം ഉൽപ്പന്നങ്ങൾ നൽകാം? ഈ ലേഖനത്തിൽ, ഉൽപ്പന്നങ്ങളെക്കുറിച്ച് നിങ്ങൾ അറിയേണ്ട എല്ലാ കാര്യങ്ങളും ഞങ്ങൾ വിശദീകരിക്കും.

## ഉൽപ്പന്ന തരം

Ultimate Multisite ഉപയോഗിച്ച് നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് രണ്ട് വിഭാഗം ഉൽപ്പന്നങ്ങൾ നൽകാം: **പ്ലാനുകൾ** കൂടാതെ **add-ons** **(Order Bump)**. Add-ons രണ്ട് തരമായി വിഭജിക്കാം:**packages** കൂടാതെ **services**. അവയുടെ വ്യത്യാസങ്ങളും സവിശേഷതകളും നമുക്ക് അടുത്തതായി കാണാം.

  * **Plans** : Ultimate Multisite-ന്റെ അടിസ്ഥാന ഉൽപ്പന്നം. നിങ്ങളുടെ ഉപഭോക്താവിന് ഒരു membership ലഭിക്കണമെങ്കിൽ അത് ഒരു plan-ുമായി ബന്ധിപ്പിച്ചിരിക്കണം. ഒരു plan നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് ഒന്നോ അതിലധികമോ സൈറ്റുകൾ നൽകുന്നു (അത് നിങ്ങളുടെ plan-ന്റെ settings അനുസരിച്ചിരിക്കും), നിങ്ങളുടെ product editing page-ൽ നിശ്ചയിച്ച പരിധികളോടെ.

  * **Packages** : Ultimate Multisite plans-ന്റെ പ്രവർത്തനങ്ങളെ നേരിട്ട് ബാധിക്കുന്ന add-ons. നിങ്ങളുടെ ഉപഭോക്താവ് വാങ്ങിയ യഥാർത്ഥ plan-ലേക്ക് പരിധികൾ മാറ്റുകയോ പുതിയ resources, plugins അല്ലെങ്കിൽ themes കൂട്ടിച്ചേർക്കുകയോ ചെയ്യുന്നു. ഉദാഹരണത്തിന്, ഒരു basic plan പ്രതിമാസം 1,000 visits അനുവദിച്ചേക്കാം, ഈ എണ്ണം 10,000 ആയി വർദ്ധിപ്പിക്കുന്ന ഒരു package നിങ്ങൾക്ക് ലഭ്യമാക്കാം.

  * **Services:** Ultimate Multisite-ന്റെ പ്രവർത്തനങ്ങളെ മാറ്റാത്ത add-ons. നിങ്ങളുടെ ഉപഭോക്താവ് വാങ്ങിയ plan-ന് പുറമെ നിങ്ങൾ ചെയ്തുകൊടുക്കുന്ന ജോലികളാണിവ. ഉദാഹരണത്തിന്, നിങ്ങളുടെ ഉപഭോക്താവ് ഒരു സൈറ്റ് മാത്രം അനുവദിക്കുന്ന ഒരു plan വാങ്ങുകയും ആ സൈറ്റിന്റെ design ചെയ്യുന്ന ഒരു extra service-നും പണം നൽകുകയും ചെയ്‌തേക്കാം.

## ഉൽപ്പന്നങ്ങൾ കൈകാര്യം ചെയ്യൽ

പലർക്കും Ultimate Multisite-ലെ **Products** tab **(Ultimate Multisite > Products)** പരമ്പരാഗത hosting environment-ലെ plans-മായി തുല്യമാക്കാം.

Ultimate Multisite-ൽ Products tab ഒരു നിർദ്ദിഷ്ട ഉൽപ്പന്നത്തിനോ സേവനത്തിനോ ബാധകമായ ഘടനയും പരിധികളും നിർവചിക്കുന്നു. ഉൽപ്പന്നം അല്ലെങ്കിൽ സേവന വിവരണം, വില, നികുതികൾ, അനുമതികൾ എന്നിവയിലേക്ക് ഇത്തരം ഘടനകൾ വ്യാപിക്കുന്നു.

Ultimate Multisite-ന്റെ ഈ അവശ്യ അടിത്തറ മനസ്സിലാക്കാൻ ഈ വിഭാഗം നിങ്ങളെ സഹായിക്കും.

![Products list page](/img/config/products-list.png)

## ഉൽപ്പന്നങ്ങൾ ചേർക്കൽ

plan, package, അല്ലെങ്കിൽ service എന്തായാലും, ഒരു പുതിയ item നിർവചിക്കുന്നതിനുള്ള entry point **Ultimate Multisite > Products > Add Product** വഴിയാണ്.

![Add Product button](/img/config/product-add-button.png)

ഇന്റർഫേസിൽ രണ്ട് പ്രധാന വിഭാഗങ്ങളുണ്ട്. ഇടതുവശത്ത് ഉൽപ്പന്നം നിർവചിക്കാൻ സഹായിക്കുന്ന നിരവധി tabs ഉണ്ട്, വലതുവശത്ത് ഉൽപ്പന്നത്തിന്റെ അടിസ്ഥാന വില, അതിന്റെ active state, ഉൽപ്പന്ന image എന്നിവ നിർവചിക്കാനുള്ള ചില വിഭാഗങ്ങളുണ്ട്.

![Product edit page overview](/img/config/product-edit-full.png)

### വിവരണം

ഉൽപ്പന്നത്തിന്റെ പേരും വിവരണവും നൽകി അടിസ്ഥാന ഉൽപ്പന്ന വിവരങ്ങൾ നിർവചിക്കാം. plan, pricing selection, invoices, upgrades തുടങ്ങി ഉൽപ്പന്ന വിവരങ്ങൾ ആവശ്യമുള്ള എല്ലായിടത്തും ഈ identifiers പ്രദർശിപ്പിക്കപ്പെടുന്നു.

![Product description section](/img/config/product-description.png)

### വിലനിർണ്ണയ തരം

ഇന്റർഫേസിന്റെ വലതുവശത്ത്, അടിസ്ഥാന pricing നിർവചിക്കാം.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite മൂന്ന് വ്യത്യസ്ത pricing types-നെ പിന്തുണയ്ക്കുന്നു. **paid** ഓപ്ഷൻ, ഉൽപ്പന്നത്തിന്റെ വിലയും billing frequency-യും സംബന്ധിച്ച വിവരങ്ങൾ network administrator-നോട് ആവശ്യപ്പെടുന്നു.

### വിലനിർണ്ണയം

price component അടിസ്ഥാന ഉൽപ്പന്ന വിലയും billing interval-ഉം നിർവചിക്കുന്നു.

![Pricing and save section](/img/config/product-pricing-save.png)

അതിനാൽ 1 മാസത്തെ setting-ഉള്ള $29.99 എന്ന ഉദാഹരണ വില ഓരോ മാസവും $29.99 ബിൽ ചെയ്യും. സമാനമായി, 3 മാസത്തെ setting-ഉള്ള $89.97 വില ഓരോ ക്വാർട്ടറിലും ആ തുക ബിൽ ചെയ്യും.

### Billing Cycles

billing cycles വിഭാഗം മുൻപറഞ്ഞ billing interval-ന്റെ ആവൃത്തി വ്യക്തമാക്കുന്നു, ഇത് സാധാരണയായി contracts അല്ലെങ്കിൽ fixed terms-ന്റെ പശ്ചാത്തലത്തിൽ മനസ്സിലാക്കുന്നു.

![Pricing and save section](/img/config/product-pricing-save.png)

ഉദാഹരണത്തിന്, 1 മാസത്തെ interval-ഉം 12 billing cycles-ഉം ഉള്ള $29.99 ഉൽപ്പന്ന വില, തുടർന്നുള്ള 12 മാസങ്ങളിൽ ഉൽപ്പന്നത്തിന് പ്രതിമാസം $29.99 ബിൽ ചെയ്യും. മറ്റൊരു വിധത്തിൽ പറഞ്ഞാൽ, അത്തരമൊരു setting 12 മാസത്തേക്ക് പ്രതിമാസം $29.99 എന്ന fixed-price term സ്ഥാപിക്കുകയും പിന്നീട് billing നിർത്തുകയും ചെയ്യും.

### Trial കാലാവധി

offer trial toggle enable ചെയ്യുന്നത് network administrator-ന് ഉൽപ്പന്നത്തിന് ഒരു trial കാലാവധി നിർവചിക്കാൻ അനുവദിക്കുന്നു.

![Pricing and save section](/img/config/product-pricing-save.png)

trial കാലാവധിയിൽ, ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നം സൗജന്യമായി ഉപയോഗിക്കാം, trial കാലാവധി തീരുന്നതുവരെ ബിൽ ചെയ്യില്ല.

### Setup Fee

നിങ്ങളുടെ plan-ന് ഒരു setup fee-യും ചേർക്കാം.

![Pricing and save section](/img/config/product-pricing-save.png)

ഇതിനർത്ഥം നിങ്ങളുടെ ഉപഭോക്താവ് ആദ്യ charge-ൽ (price plan-ന് പുറമെ) ഈ വിഭാഗത്തിൽ നിങ്ങൾ നിർവചിച്ച fee-ക്ക് അനുസൃതമായ ഒരു അധിക തുക നൽകും.

### Active

active toggle ഫലപ്രദമായി നിർവചിക്കുന്നത് ഉൽപ്പന്നം പുതിയ sign-ups-ക്ക് ഉപഭോക്താക്കൾക്ക് ലഭ്യമാണോ എന്നാണ്.

![Active toggle](/img/config/product-active.png)

ഈ plan-ൽ നിലവിലുള്ള ഉപഭോക്താക്കൾ ഉണ്ടെങ്കിൽ, toggle അതിന്റെ disabled state-ലേക്ക് സജ്ജമാക്കുന്നത് ഫലപ്രദമായി plan-നെ grandfather ചെയ്ത് ഭാവി sign-ups-ൽ നിന്ന് നീക്കം ചെയ്യുന്നു. **plan-ൽ നിലവിലുള്ള ഉപഭോക്താക്കൾക്ക് billing തുടരും** അവർ ഒരു പുതിയ plan-ലേക്ക് മാറ്റുകയോ plan-ൽ നിന്ന് നീക്കം ചെയ്യുകയോ ചെയ്യുന്നതുവരെ.

### ഉൽപ്പന്ന Image

**Upload Image** ബട്ടൺ network administrator-ന് ഒരു product image തിരഞ്ഞെടുക്കാനോ upload ചെയ്യാനോ media library ഉപയോഗിക്കാൻ അനുവദിക്കുന്നു.

![Product image section](/img/config/product-image.png)

### Delete

**Delete Product** ബട്ടൺ സിസ്റ്റത്തിൽ നിന്ന് ഉൽപ്പന്നം ഇല്ലാതാക്കുന്നു. ഉൽപ്പന്നം publish ചെയ്ത ശേഷമാണ് ഇത് പ്രത്യക്ഷപ്പെടുന്നത്.

![Delete product section](/img/config/product-delete.png)

മറ്റ് deletions-ൽ നിന്ന് വ്യത്യസ്തമായി, ഉൽപ്പന്നം ഒരു trash state-ലും സ്ഥാപിക്കുന്നില്ല. അതിനാൽ ഒരിക്കൽ delete ചെയ്താൽ ആ action തിരിച്ചെടുക്കാനാവില്ല.

### ഉൽപ്പന്ന Options

അടിസ്ഥാന-തല ഉൽപ്പന്ന വിവരങ്ങൾ നിർവചിച്ചുകഴിഞ്ഞാൽ, product options ഉൽപ്പന്നത്തിന്റെ നിർദ്ദിഷ്ട attributes കൂടുതൽ നിർവചിക്കാൻ network administrator-നെ സഹായിക്കുന്നു.

#### General

**General** tab, മറ്റ് product-specific tabs-ന് ബാധകമല്ലാത്ത ഉൽപ്പന്നത്തിന്റെ general attributes നിർവചിക്കുന്നു.

![General tab](/img/config/product-general-tab.png)

സ്വയം വിശദീകരണാത്മകമായ **product slug** URLs-ലും Ultimate Multisite-ന്റെ മറ്റ് മേഖലകളിലും ഉൽപ്പന്നം തിരിച്ചറിയപ്പെടുന്ന slug നിർവചിക്കുന്നു.

Ultimate Multisite നിരവധി product types-നെ പിന്തുണയ്ക്കുന്നു, അതായത് Plan, Package, Service. വ്യക്തമാക്കിയ product type അനുസരിച്ച് **Product Options** tabs dynamically ക്രമീകരിക്കപ്പെടുന്നു.

**Customer Role** സൈറ്റ് സൃഷ്ടിക്കുമ്പോൾ ഉപഭോക്താവിന് നിയോഗിക്കപ്പെടുന്ന role വ്യക്തമാക്കുന്നു. സാധാരണയായി മിക്ക network administrators-നും ഇത് Ultimate Multisite default അല്ലെങ്കിൽ Administrator ആയിരിക്കും. Ultimate Multisite default role **Ultimate Multisite > Settings > Login & Registration**-ൽ സജ്ജമാക്കാം.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Up & Downgrades

ഈ tab ഒരു ഉപഭോക്താവിന് അവരുടെ നിർദ്ദിഷ്ട tier-ൽ ലഭ്യമായ upgrade, downgrade paths വ്യക്തമാക്കുന്നു.

ഈ ആശയം മനസ്സിലാക്കാൻ, ഒരു niche Ultimate Multisite installation അതിന്റെ ഉപഭോക്താക്കൾക്ക് learning management solutions നൽകുന്ന ഒരു ഉദാഹരണം പരിഗണിക്കുക. ഇത് നേടാൻ മൂന്ന് plans (Basic, Plus, Premium) നിർവചിക്കുകയും ഓരോ plan-നും നിർദ്ദിഷ്ട plugins activate ചെയ്യുകയും ചെയ്യുന്നു (plugins എങ്ങനെ activate ചെയ്യാമെന്നതിന് ഈ വിഭാഗത്തിൽ പിന്നീട് നിർദ്ദേശങ്ങൾ കാണുക).

Ultimate Multisite installation business websites അല്ലെങ്കിൽ eCommerce websites-നും സേവനം നൽകുന്നുണ്ടെങ്കിൽ, ആ plans-ന് വ്യത്യസ്ത plugins install ചെയ്ത് activate ചെയ്യേണ്ടി വന്നേക്കാം.

ഈ സാഹചര്യത്തിൽ, eLearning ഉപഭോക്താക്കളെ eCommerce plans-ലേക്ക് മാറാൻ അനുവദിക്കുന്നത് അഭികാമ്യമല്ലാത്തതും പ്രശ്‌നകരവുമായിരിക്കും, കാരണം ഈ plans, pricing, limitations അനുയോജ്യമല്ലായിരിക്കാം.

അതിനാൽ ഉപഭോക്താവിന്റെ path നിയന്ത്രിക്കാനും സംഭവങ്ങൾ തടയാനും network administrator-ന് ഒരു plan group നിർവചിക്കാനും ആ group-ൽ ഉപഭോക്താവിന് മാറാവുന്ന plans വ്യക്തമാക്കാനും കഴിയും.

![Up and Downgrades tab](/img/config/product-upgrades.png)

ഒരു plan group നിർവചിക്കാൻ **plan group** list-ൽ അനുയോജ്യ plans വ്യക്തമാക്കുക. **product order** plans ഏറ്റവും താഴ്ന്നതിൽ നിന്ന് ഏറ്റവും ഉയർന്നതിലേക്ക് എങ്ങനെ ക്രമീകരിക്കുകയും പ്രദർശിപ്പിക്കുകയും ചെയ്യുന്നുവെന്ന് നിർണ്ണയിക്കുന്നു.

Ultimate Multisite-ൽ ഒരു **order bump** feature-ഉം ഉൾപ്പെടുന്നു, ഇതിൽ അനുയോജ്യമായ add-on products, services plans-ലേക്ക് ചേർക്കാം. checkout-ൽ അല്ലെങ്കിൽ upgrade സമയത്ത് plans-ലേക്ക് ചേർക്കാവുന്ന അധിക items ആയി ഇവ ഉപഭോക്താവിന് വാഗ്ദാനം ചെയ്യുന്നു.

#### Price Variations

Price variations, ദൈർഘ്യം അനുസരിച്ച് ബദൽ pricing tiers വ്യക്തമാക്കാൻ network administrator-നെ അനുവദിക്കുന്നു. ഈ setting 3 മാസം, 6 മാസം, അല്ലെങ്കിൽ വാർഷിക pricing tiers അല്ലെങ്കിൽ use case അനുസരിച്ച് നിർണ്ണയിക്കുന്ന മറ്റേതെങ്കിലും ദൈർഘ്യവും ആവൃത്തിയും സ്ഥാപിക്കാൻ സാധ്യമാക്കുന്നു.

![Price Variations tab](/img/config/product-price-variations.png)

Price variations സ്ഥാപിക്കാൻ, **enable price variations** toggle active ആയി സജ്ജമാക്കി **Add new Price Variation** ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.

ഒരു variation നൽകാൻ, variation-ന്റെ duration, period, price എന്നിവ സജ്ജമാക്കുക. ബട്ടൺ വീണ്ടും ക്ലിക്ക് ചെയ്ത് അധിക variations നൽകാം.

![Price Variations tab](/img/config/product-price-variations.png)

#### Taxes

**Taxes** tab, **Ultimate Multisite > Settings > Taxes**-ൽ വ്യക്തമാക്കിയ tax settings-മായും കൂടുതൽ നിർദ്ദിഷ്ടമായി നിർവചിച്ച tax rates-മായും യോജിക്കുന്നു. Taxes enable ചെയ്യാനും ബാധകമായ tax rates നിർവചിക്കാനും ദയവായി **Ultimate Multisite: Settings**-ലെ documentation കാണുക

![Taxes tab](/img/config/product-taxes.png)

മുമ്പത്തെ ഒരു ഉദാഹരണത്തിൽ, California (United States of America)-ലെ ഉപഭോക്താക്കൾക്ക് ബാധകമായ 7.25% local tax rate ഞങ്ങൾ നിർവചിച്ചു.

**Ultimate Multisite > Settings > Manage Tax Rates**-ൽ tax rate നിർവചിച്ചുകഴിഞ്ഞാൽ, ഉൽപ്പന്ന തലത്തിൽ അത് തിരഞ്ഞെടുക്കാവുന്നതാണ്.

![Taxes tab](/img/config/product-taxes.png)

ഒരു ഉൽപ്പന്നം taxable item ആണെന്ന് സൂചിപ്പിക്കാൻ, **Is Taxable** toggle active ആയി സജ്ജമാക്കി Tax Category dropdown-ൽ നിന്ന് ബാധകമായ tax rate തിരഞ്ഞെടുക്കുക.

#### Site Templates

അടിസ്ഥാനപരമായി, site templates എന്നത് ഒരു ഉപഭോക്താവിന്റെ subscription ആരംഭിക്കുമ്പോൾ അവരുടെ സൈറ്റിലേക്ക് clone ചെയ്യപ്പെടുന്ന പൂർണ്ണ WordPress websites ആണ്.

![Site Templates tab](/img/config/product-site-templates.png)

Network administrator, activate ചെയ്തതും configure ചെയ്തതുമായ themes, plugins, content എന്നിവയോടെ template site ഒരു സാധാരണ WordPress site ആയി സൃഷ്ടിക്കുകയും configure ചെയ്യുകയും ചെയ്യുന്നു. Template site ഉപഭോക്താവിലേക്ക് അതേപടി clone ചെയ്യപ്പെടുന്നു.

ഒരു പുതിയ subscription-ൽ site templates-ന്റെ behavior വ്യക്തമാക്കാൻ ഈ tab network administrator-നെ അനുവദിക്കുന്നു. Site templates ഉപയോഗിക്കാൻ, **allow site templates** toggle അതിന്റെ active state-ലേക്ക് സജ്ജമാക്കുക.

**site template selection mode** subscription process-ൽ site templates-ന്റെ behavior നിർവചിക്കുന്നു.

**Default** setting checkout form-ലെ steps പിന്തുടരുന്നു. Network administrator checkout process-ൽ ഒരു template selection step നിർവചിക്കുകയും step templates-മായി നിർവചിക്കപ്പെടുകയും ചെയ്തിട്ടുണ്ടെങ്കിൽ, ഈ setting checkout step-ൽ സ്ഥാപിച്ച directives മാനിക്കും.

**Assign Site Template** വ്യക്തമാക്കുന്നത് specified template-ന്റെ selection നിർബന്ധമാക്കുന്നു. തൽഫലമായി, checkout process-ലെ ഏതെങ്കിലും template selection steps നീക്കം ചെയ്യപ്പെടുന്നു.

അവസാനമായി, **Choose Available Site Templates** checkout step-ൽ വ്യക്തമാക്കിയ templates ഈ setting-ൽ തിരഞ്ഞെടുത്ത templates കൊണ്ട് override ചെയ്യുന്നു. ഉപഭോക്താവിനെ തിരഞ്ഞെടുപ്പിൽ സഹായിക്കാൻ ഒരു pre-selected template-ഉം നിർവചിക്കാം.

Network administrator checkout steps-ൽ template selection നടക്കണമെന്ന് ആഗ്രഹിക്കുന്നുവെങ്കിൽ '_default_' എന്ന setting മതിയാകും. പകരം template selection നീക്കം ചെയ്ത് lock ചെയ്യാനും selection plan settings-ലേക്ക് delegate ചെയ്യാനും '_assign new template_' അല്ലെങ്കിൽ '_choose available site templates_' options അഭികാമ്യമായിരിക്കാം.

#### Sites

**Sites** tab Ultimate Multisite-ന്റെ limitations functionality-യുടെ ഭാഗമാണ്.

![Sites tab](/img/config/product-sites.png)

ഒരു ഉപഭോക്താവിന് അവരുടെ membership-ന് കീഴിൽ സൃഷ്ടിക്കാവുന്ന പരമാവധി സൈറ്റുകളുടെ എണ്ണം ഈ setting വ്യക്തമാക്കുന്നു.

Limitation enable ചെയ്യാൻ, **limit sites** toggle അതിന്റെ active state-ലേക്ക് സജ്ജമാക്കി **site allowance** field-ൽ പരമാവധി സൈറ്റുകളുടെ എണ്ണം വ്യക്തമാക്കുക.

#### Visits

**Visits** tab Ultimate Multisite-ന്റെ limitations system-ന്റെ ഒരു കൂടുതൽ ഭാഗമാണ്. ഒരു ഉപഭോക്താവിന്റെ സൈറ്റിലേക്കുള്ള unique visitors-ന്റെ accounting-ഉം തുടർന്നുള്ള throttling-ഉം ഈ setting അനുവദിക്കുന്നു.

![Visits tab](/img/config/product-visits.png)

Marketing വീക്ഷണകോണിൽ, limits എത്തിക്കഴിഞ്ഞാൽ ഉപഭോക്താക്കളെ അവരുടെ plan upgrade ചെയ്യാൻ പ്രോത്സാഹിപ്പിക്കുന്നതിനുള്ള ഒരു മാർഗമായി network administrators-ന് ഈ setting ഉപയോഗിക്കാം. System resources സംരക്ഷിക്കാൻ സൈറ്റുകളിലേക്കുള്ള അമിത traffic നിയന്ത്രിക്കാനും തടയാനും ഈ setting network administrator-നെ സഹായിക്കും.

ഈ feature ഉപയോഗിക്കാൻ, **limit unique visits** toggle അതിന്റെ active state-ലേക്ക് സജ്ജമാക്കി **unique visits quota** field-ൽ unique visitors-ന്റെ പരമാവധി എണ്ണം വ്യക്തമാക്കുക.

ഈ limit-ൽ എത്തിക്കഴിഞ്ഞാൽ, limits കവിഞ്ഞുവെന്ന് സൂചിപ്പിക്കുന്ന ഒരു message പ്രദർശിപ്പിക്കുന്നതിന് പകരം Ultimate Multisite ഉപഭോക്താവിന്റെ സൈറ്റ് serve ചെയ്യുന്നത് നിർത്തും.

#### Users

Ultimate Multisite-ന്റെ 'Users' limitations, സൃഷ്ടിക്കാവുന്നതും roles-ലേക്ക് assign ചെയ്യാവുന്നതുമായ users-ന്റെ എണ്ണത്തിൽ limits ചുമത്താൻ network administrator-നെ അനുവദിക്കുന്നു.

![Users tab](/img/config/product-users.png)

Limitations feature enable ചെയ്യാൻ, **limit user** toggle അതിന്റെ active state-ലേക്ക് വലത്തോട്ട് slide ചെയ്യുക.

അടുത്തതായി, limit ചെയ്യേണ്ട ഓരോ role-നും, അതിന്റെ അടുത്തുള്ള toggle active state-ലേക്ക് സജ്ജമാക്കി ഉചിതമായ field-ൽ പരമാവധി upper limit നിർവചിക്കുക.

#### Post Types

**Post Types** tab, WordPress-നുള്ളിലെ post types-ന്റെ വിപുലമായ array-യിൽ granular limits ചുമത്താൻ network administrator-നെ അനുവദിക്കുന്നു.

![Post Types tab](/img/config/product-post-types.png)

WordPress-ന്റെ നിർമ്മാണം കാരണം, posts, post types അതിന്റെ core functionality-യുടെ ഒരു പ്രധാന ഘടകമാണ്, അതിനാൽ Ultimate Multisite-ന്റെ limitations system limits സ്ഥാപിക്കാനും പരിപാലിക്കാനും network administrator-നെ സഹായിക്കാൻ രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു.

ഈ limits subsystem enable ചെയ്യാൻ, **limit post types** toggle അതിന്റെ active state-ലേക്ക് വലത്തോട്ട് slide ചെയ്യുക.

അടുത്തതായി, limit ചെയ്യേണ്ട ഓരോ post type-നും, വലത്തോട്ട് slide ചെയ്ത് toggle on ചെയ്യുകയും ഉചിതമായ field-ൽ പരമാവധി upper limit വ്യക്തമാക്കുകയും ചെയ്യുക.

#### Disk Space

**Disk Space** tab, ഉപഭോക്താക്കൾ ഉപയോഗിക്കുന്ന space നിയന്ത്രിക്കാൻ network administrators-നെ അനുവദിക്കുന്നു.

![Disk Space tab](/img/config/product-disk-space.png)

സാധാരണയായി ഒരു WordPress multisite-ൽ core files എല്ലാ sites-ക്കിടയിലും share ചെയ്യപ്പെടുകയും media files, uploads എന്നിവയ്ക്കായി individual directories സൃഷ്ടിക്കപ്പെടുകയും ചെയ്യുന്നു, ഇവയ്ക്കാണ് ഈ settings, limitations ബാധകമാകുന്നത്.

Disk usage limitation enable ചെയ്യാൻ, **limit disk size per site** toggle അതിന്റെ active state-ലേക്ക് വലത്തോട്ട് slide ചെയ്യുക.

അടുത്തതായി, **disk space allowance** field-ൽ megabytes-ൽ പരമാവധി upper limit വ്യക്തമാക്കുക.

#### Custom Domain

ഈ option toggle ചെയ്യുന്നതിലൂടെ ഈ plan-ൽ പ്രത്യേകമായി custom domains അനുവദിക്കാം.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Product options-നുള്ളിലെ **Themes** tab, ഉപഭോക്താക്കൾക്ക് selection-നായി themes ലഭ്യമാക്കാനും ഓപ്ഷണലായി theme-ന്റെ state force ചെയ്യാനും network administrator-നെ അനുവദിക്കുന്നു.

![Themes tab](/img/config/product-themes.png)

_**കുറിപ്പ്: ഉപഭോക്താക്കൾക്ക് themes ലഭ്യമാക്കുന്നതിന് അവ network administrator network enable ചെയ്തിരിക്കണം.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**visibility** option, അവരുടെ സൈറ്റിനുള്ളിലെ **Appearance > Themes** tab കാണുമ്പോൾ ഈ theme ഉപഭോക്താവിന് visible ആണോ അല്ലയോ എന്ന് നിർവചിക്കുന്നു. ഈ option **Hidden** ആയി സജ്ജമാക്കുന്നത് theme view-യിൽ നിന്ന് നീക്കം ചെയ്യുകയും അങ്ങനെ select ചെയ്യാനും activate ചെയ്യാനുമുള്ള കഴിവ് നിയന്ത്രിക്കുകയും ചെയ്യുന്നു.

![Themes tab](/img/config/product-themes.png)

**behavior** selection, ഉപഭോക്തൃ സൈറ്റ് creation-ൽ theme-ന്റെ state നിർവചിക്കാൻ network administrator-നെ അനുവദിക്കുന്നു.

**Available** state-ൽ theme self-activation-നായി ഉപഭോക്താവിന് ലഭ്യമാക്കുന്നു. വിപരീതമായി, **Not Available** state theme activate ചെയ്യാനുള്ള കഴിവ് ഉപഭോക്താവിൽ നിന്ന് നീക്കം ചെയ്യുന്നു. അവസാനമായി, **Force Activate** option, site creation-ൽ theme-ന്റെ selection, activation എന്നിവ force ചെയ്യുകയും അങ്ങനെ default ആയി സജ്ജമാക്കുകയും ചെയ്യുന്നു.

#### Plugins

Themes tab-ന് സമാനമായി, Ultimate Multisite ഉപഭോക്താക്കൾക്ക് plugins-ന്റെ visibility-യും ഒരു പുതിയ സൈറ്റ് creation-ൽ അവയുടെ state-ഉം നിർവചിക്കാൻ network administrator-നെ അനുവദിക്കുന്നു.

![Plugins tab](/img/config/product-plugins.png)

**visibility** drop-down, Plugins menu option വഴി അവരുടെ സൈറ്റിൽ കാണുമ്പോൾ plugin ഉപഭോക്താവിൽ നിന്ന് visible ആയിരിക്കുമോ hidden ആയിരിക്കുമോ എന്ന് അനുവദിക്കുന്നു.

behavior drop-down-ലെ options ഉപയോഗിച്ച് network administrator-ന് plugins-ന്റെ behavior കൂടുതൽ manipulate ചെയ്യാം.

![Plugins tab](/img/config/product-plugins.png)

**Default** selection ഉപഭോക്താവ് തിരഞ്ഞെടുത്ത site template-ൽ നിർവചിച്ച plugin state മാനിക്കുന്നു. അതിനാൽ template-നുള്ളിൽ activated ചെയ്ത plugins, template ഉപഭോക്താവിന്റെ സൈറ്റിലേക്ക് clone ചെയ്യുമ്പോൾ activated ആയി തുടരും.

**Force Activate** site creation-ൽ plugin-നെ active state-ൽ സ്ഥാപിക്കുന്നു, വിപരീതമായി **Force Inactivate** site creation-ൽ plugin deactivate ചെയ്യുന്നു. ഈ രണ്ട് സാഹചര്യങ്ങളിലും, plugin-ന്റെ state ഉപഭോക്താവിന് അവരുടെ WordPress Plugins menu വഴി manually മാറ്റാം.

**Force Activate & Lock** setting സമാനമായി പ്രവർത്തിക്കുന്നു, പക്ഷേ ഉപഭോക്താവ് plugin state മാറ്റുന്നത് തടയുന്നു. അതിനാൽ Force Activate and Lock-ന്റെ ഒരു setting plugin-നെ അതിന്റെ active state-ലേക്ക് force ചെയ്യുകയും ഉപഭോക്താവ് അത് deactivate ചെയ്യുന്നത് തടയുകയും ചെയ്യും. സമാനമായി, **Force Inactivate & Lock** setting plugin-നെ അതിന്റെ inactive state-ലേക്ക് force ചെയ്യുകയും user plugin activate ചെയ്യുന്നത് തടയുകയും ചെയ്യും.

Network administrator Force Activate & Lock, Force Inactivate & Lock settings site templates-മായി ചേർത്ത് പരിഗണിക്കാൻ ആഗ്രഹിച്ചേക്കാം, കാരണം ഈ settings തിരഞ്ഞെടുത്താൽ templates-ലെ plugins, plugin states എന്നിവ ബാധിച്ചേക്കാം.

#### Reset Limitations

**Reset Limitations** tab, ഉൽപ്പന്നത്തിൽ നിർവചിച്ച എല്ലാ custom limits-ഉം reset ചെയ്യുന്നു. Limitations reset ചെയ്യാൻ **reset limitations** ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Action confirm ചെയ്യാൻ **confirm reset** toggle വലത്തോട്ട് അതിന്റെ active state-ലേക്ക് slide ചെയ്ത് **reset limitations** ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## ഉൽപ്പന്നം Edit, Duplicate, അല്ലെങ്കിൽ Delete ചെയ്യൽ

നിലവിലുള്ള ഉൽപ്പന്നങ്ങൾ **Ultimate Multisite > Products**-ലേക്ക് navigate ചെയ്ത് നിലവിലുള്ള product name-ന് മുകളിൽ hover ചെയ്ത് edit, duplicate അല്ലെങ്കിൽ delete ചെയ്യാം.

![Product hover actions](/img/config/product-hover-actions.png)
