---
title: സൈറ്റ് ടെംപ്ലേറ്റുകൾ
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# സൈറ്റ് ടെംപ്ലേറ്റുകൾ (v2)

_**ശ്രദ്ധിക്കുക: ഈ ലേഖനം Ultimate Multisite version 2.x-നെക്കുറിച്ചാണ്. നിങ്ങൾ version 1.x ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ,**_ **ഈ ലേഖനം കാണുക** _**.**_

Ultimate Multisite ഉപയോഗിച്ച് ഒരു premium network സൃഷ്ടിക്കുമ്പോൾ, ഉപഭോക്താക്കൾക്ക് വെബ്‌സൈറ്റുകൾ നിർമ്മിക്കുമ്പോൾ വഴക്കവും വ്യത്യസ്ത ഓപ്ഷനുകളും നൽകുന്നതിനൊപ്പം കഴിയുന്നത്ര പ്രക്രിയകൾ ഓട്ടോമേറ്റ് ചെയ്യുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം. Ultimate Multisite Site Templates ഫീച്ചർ ഉപയോഗിക്കുന്നത് ഈ സന്തുലനം കൈവരിക്കാനുള്ള ഒരു എളുപ്പവഴിയാണ്.

## Site Template എന്താണ്?

പേര് സൂചിപ്പിക്കുന്നതുപോലെ, നിങ്ങളുടെ network-ൽ പുതിയ സൈറ്റുകൾ സൃഷ്ടിക്കുമ്പോൾ അടിസ്ഥാനമായി ഉപയോഗിക്കാവുന്ന ഒരു boilerplate സൈറ്റാണ് Site Template.

ഇതിനർത്ഥം നിങ്ങൾക്ക് ഒരു base site സൃഷ്ടിച്ച്, വിവിധ plugins activate ചെയ്ത്, ഒരു active theme സെറ്റ് ചെയ്ത്, നിങ്ങൾക്ക് ഇഷ്ടമുള്ള രീതിയിൽ customize ചെയ്യാം. അപ്പോൾ, നിങ്ങളുടെ ഉപഭോക്താവ് ഒരു പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കുമ്പോൾ, അർത്ഥവത്തായ ഉള്ളടക്കമില്ലാത്ത ഒരു default WordPress സൈറ്റ് ലഭിക്കുന്നതിനു പകരം, എല്ലാ customizations-ഉം contents-ഉം ഇതിനകം തയ്യാറായ നിങ്ങളുടെ base site-ന്റെ ഒരു പകർപ്പ് അവർക്ക് ലഭിക്കും.

അത് മികച്ചതാണ്, പക്ഷേ ഒരു പുതിയ site template എങ്ങനെ സൃഷ്ടിക്കും? അത് കഴിയുന്നത്ര ലളിതമാണ്.

## പുതിയ Site Template സൃഷ്ടിക്കലും എഡിറ്റ് ചെയ്യലും

Site Templates നിങ്ങളുടെ network-ലെ സാധാരണ സൈറ്റുകൾ മാത്രമാണ്. ഒരു പുതിയ template സൃഷ്ടിക്കാൻ **Network Admin > Ultimate Multisite > Sites > Add Site**-ലേക്ക് പോകുക.

**![Sites list page-ലെ Add site ബട്ടൺ](/img/config/site-templates-list.png)**

ഇത് **Site title, Site Domain/path,** കൂടാതെ **Site type** എന്നിവ ചോദിക്കുന്ന ഒരു modal window തുറക്കും. **Site Type** drop-down field-ൽ **Site Template** തിരഞ്ഞെടുത്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക *.*

_![Site type dropdown ഉള്ള Add site template modal](/img/config/site-templates-list.png)_

Form-ന്റെ ചുവടെ, ഒരു **Copy Site** toggle switch ശ്രദ്ധിക്കുക. തുടക്കം മുതൽ ഒരു site template സൃഷ്ടിക്കുന്നതിനു പകരം സമയം ലാഭിക്കാൻ നിലവിലുള്ള ഒരു site template അടിസ്ഥാനമാക്കി പുതിയ site template സൃഷ്ടിക്കാൻ ഇത് നിങ്ങളെ അനുവദിക്കും.

![Copy site toggle ഉള്ള Add site template modal](/img/config/site-templates-list.png)

### Site Template-ന്റെ ഉള്ളടക്കം Customize ചെയ്യുന്നു

നിങ്ങളുടെ site template customize ചെയ്യാൻ, അതിന്റെ dashboard panel-ലേക്ക് navigate ചെയ്ത് ആവശ്യമായ മാറ്റങ്ങൾ വരുത്തുക. നിങ്ങൾക്ക് പുതിയ posts, pages സൃഷ്ടിക്കാം, plugins activate ചെയ്യാം, active theme മാറ്റാം. Customizer-ലേക്ക് പോയി എല്ലാത്തരം customization options-ഉം മാറ്റാൻ പോലും കഴിയും.

ആ Site Template അടിസ്ഥാനമാക്കി ഒരു ഉപഭോക്താവ് പുതിയ സൈറ്റ് സൃഷ്ടിക്കുമ്പോൾ ആ എല്ലാ data-യും copy ചെയ്യപ്പെടും.

### Advanced Options

Custom coding-ൽ അറിവുണ്ടെങ്കിൽ, പുതിയ സൈറ്റ് സൃഷ്ടിച്ചതിനുശേഷം അതിലെ വിവരങ്ങൾ സ്വയമേവ replace ചെയ്യാൻ ഞങ്ങളുടെ Search and Replace API ഉപയോഗിക്കാം. About page-ലെ company names replace ചെയ്യുക, Contact page-ലെ contact email replace ചെയ്യുക തുടങ്ങിയ കാര്യങ്ങൾക്ക് ഇത് ഉപയോഗപ്രദമാണ്.

### Site Templates ഉപയോഗിക്കുന്നു

ശരി, വ്യത്യസ്ത designs, themes, settings എന്നിവയുള്ള നിരവധി Site Templates നിങ്ങൾ സൃഷ്ടിച്ചു. ഇപ്പോൾ നിങ്ങളുടെ network-ൽ അവ എങ്ങനെ ഉപയോഗപ്രദമാക്കും?

അടിസ്ഥാനപരമായി, ഇപ്പോൾ നിങ്ങൾക്ക് രണ്ട് സമീപനങ്ങൾ ഉപയോഗിക്കാം (ഒരേസമയം അല്ല):

  * ഓരോ Plan-നും ഒരു Site Template അറ്റാച്ച് ചെയ്യുക

**അല്ലെങ്കിൽ**

  * Sign-up സമയത്ത് site templates സ്വയം തിരഞ്ഞെടുക്കാൻ ഉപഭോക്താക്കളെ അനുവദിക്കുക.

#### Mode 1: Site Template Assign ചെയ്യുക

ഈ mode-ൽ, ഉപഭോക്താക്കൾക്ക് അക്കൗണ്ട് സൃഷ്ടിക്കുമ്പോൾ template തിരഞ്ഞെടുക്കാൻ കഴിയില്ല, പകരം ഓരോ Plan-ലും ഏത് template ഉപയോഗിക്കണമെന്ന് നിങ്ങൾ നിർണ്ണയിക്കും.

ഇത് ചെയ്യാൻ, **Ultimate Multisite > Products > Edit**-ലേക്ക് പോകണം.

![Site template assign ചെയ്യാൻ product edit ചെയ്യുക](/img/config/product-site-templates.png)

ഇത് **Edit Product** page-ലേക്ക് കൊണ്ടുപോകും. **Product Options** section-ന് കീഴിൽ, **Site template** tab കണ്ടെത്തി drop-down field-ൽ നിന്ന് **Assign Site Template** option തിരഞ്ഞെടുക്കുക. ഇത് ലഭ്യമായ site templates-ന്റെ ലിസ്റ്റ് കാണിക്കും, product-ന് dedicated ആയി ഒരു site template മാത്രം തിരഞ്ഞെടുക്കാൻ അനുവദിക്കും.

![Assign site template option ഉള്ള Product site template tab](/img/config/product-site-templates.png)

#### Mode 2: Available Site Template തിരഞ്ഞെടുക്കുക

ഈ mode-ൽ, sign-up process-ൽ ഉപഭോക്താക്കൾക്ക് ഒരു choice നൽകും. Product settings-ന് കീഴിൽ നിങ്ങൾ define ചെയ്യുന്ന വിവിധ site templates-ൽ നിന്ന് അവർക്ക് തിരഞ്ഞെടുക്കാൻ കഴിയും. തിരഞ്ഞെടുത്ത product-ന് കീഴിൽ അവർക്ക് തിരഞ്ഞെടുക്കാവുന്ന site templates പരിമിതപ്പെടുത്താനുള്ള option നിങ്ങൾക്കുണ്ട്. ഉയർന്ന വിലയുള്ള product-ന് വ്യത്യസ്ത functions-ഉം features-ഉം highlight ചെയ്യാൻ ഓരോ product-ന് കീഴിലും വ്യത്യസ്ത site templates സെറ്റുകൾ ഉണ്ടാക്കാൻ ഇത് ideal ആണ്.

**Edit Product** page-ൽ, **Product Options** section-ന് കീഴിൽ, **Site template** tab കണ്ടെത്തി drop-down field-ൽ നിന്ന് **Choose Available Site Template** option തിരഞ്ഞെടുക്കുക. ഇത് ലഭ്യമായ site templates-ന്റെ ലിസ്റ്റ് കാണിക്കും, ലഭ്യമാക്കേണ്ട site template തിരഞ്ഞെടുക്കാൻ അനുവദിക്കും. അതിന്റെ Behavior തിരഞ്ഞെടുത്ത് ഇത് ചെയ്യാം: ലിസ്റ്റിൽ site template ഉൾപ്പെടുത്തണമെങ്കിൽ **Available**. Site template ഒരു option ആയി കാണിക്കേണ്ടെങ്കിൽ _**Not Available**_. ലിസ്റ്റ് ചെയ്തിരിക്കുന്ന site templates-ൽ ഒന്ന് default selected ആയിരിക്കണമെങ്കിൽ **Pre-selected**.

![Behavior options ഉള്ള Choose available site templates](/img/config/product-site-templates.png)

### Default Mode: Checkout form-ൽ Site template selection

എല്ലാ site templates-ഉം registration സമയത്ത് ലഭ്യമാക്കണമെങ്കിൽ, അല്ലെങ്കിൽ നിങ്ങൾ സൃഷ്ടിക്കുന്ന ഓരോ product-ന് കീഴിലും site templates assign ചെയ്യുകയോ specify ചെയ്യുകയോ ചെയ്യുന്ന extra work ഇഷ്ടപ്പെടുന്നില്ലെങ്കിൽ, **Checkout Form**-ന് കീഴിൽ site template selection സെറ്റ് ചെയ്യാം. ഇത് ചെയ്യാൻ, **Ultimate Multisite > Checkout Forms**-ലേക്ക് പോകുക. തുടർന്ന് configure ചെയ്യേണ്ട form-ന് കീഴിൽ **Edit** ക്ലിക്ക് ചെയ്യുക.

![Checkout forms list page](/img/config/checkout-forms-list.png)

ഇത് **Edit Checkout Form** page കാണിക്കും. **Template Selection** field കണ്ടെത്തി അതിന് കീഴിൽ **Edit** ക്ലിക്ക് ചെയ്യുക.

![Template selection field ഉള്ള Checkout form editor](/img/config/checkout-form-editor.png)

ഒരു modal window ദൃശ്യമാകും. **Template Sites** field-ന് കീഴിൽ registration സമയത്ത് ലഭ്യമാക്കേണ്ട എല്ലാ site templates-ഉം select ചെയ്ത് list ചെയ്യാം. user ഏത് product തിരഞ്ഞെടുത്താലും ഇവിടെ നിന്ന് specify ചെയ്യുന്ന site templates ലഭ്യമാകും.

![Checkout form editor-ലെ Template sites field](/img/config/checkout-form-step.png)

### Site Template Options

Ultimate Multisite settings-ന് കീഴിൽ on അല്ലെങ്കിൽ off ചെയ്യാവുന്ന മറ്റ് site template functions ലഭ്യമാണ്.

![Ultimate Multisite settings-ലെ Site template options](/img/config/settings-sites.png)

#### Template Switching അനുവദിക്കുക

ഈ option enable ചെയ്താൽ, sign-up process-ൽ തിരഞ്ഞെടുത്ത template, account-ഉം site-ഉം സൃഷ്ടിച്ചതിനുശേഷം മാറ്റാൻ ഉപഭോക്താക്കളെ അനുവദിക്കും. ഉപഭോക്താവിന്റെ കാഴ്ചപ്പാടിൽ ഇത് ഉപയോഗപ്രദമാണ്, കാരണം അവരുടെ യഥാർത്ഥ തിരഞ്ഞെടുപ്പ് അവരുടെ പ്രത്യേക ആവശ്യങ്ങൾക്ക് മികച്ചതല്ലെന്ന് പിന്നീട് കണ്ടെത്തിയാൽ template വീണ്ടും തിരഞ്ഞെടുക്കാൻ ഇത് അനുവദിക്കുന്നു.

#### Users-നെ അവരുടെ Site templates ആയി ഉപയോഗിക്കാൻ അനുവദിക്കുക

Subsite users അവരുടെ സ്വന്തം site build ചെയ്യാനും design ചെയ്യാനും സമയം ചെലവഴിച്ചതിനാൽ, നിങ്ങളുടെ network-ൽ മറ്റൊരു subsite സൃഷ്ടിക്കുമ്പോൾ ലഭ്യമായ site templates-ൽ ഒന്നായി അത് clone ചെയ്ത് ഉപയോഗിക്കാൻ അവർ ആഗ്രഹിച്ചേക്കാം. ഈ option അവരെ അത് കൈവരിക്കാൻ അനുവദിക്കും.

#### Template Duplication-ൽ Media Copy ചെയ്യുക

ഈ option check ചെയ്താൽ template site-ൽ upload ചെയ്ത media പുതുതായി സൃഷ്ടിച്ച site-ലേക്ക് copy ചെയ്യും. ഓരോ plans-ലും ഇത് override ചെയ്യാം.

#### **Search Engines Site Templates index ചെയ്യുന്നത് തടയുക**

ഈ ലേഖനത്തിൽ ചർച്ച ചെയ്തതുപോലെ Site templates boilerplate ആണ്, പക്ഷേ ഇപ്പോഴും നിങ്ങളുടെ network-ന്റെ ഭാഗമാണ്, അതിനർത്ഥം search engines-ന് കണ്ടെത്താൻ ഇപ്പോഴും ലഭ്യമാണ് എന്നാണ്. Search engines അവ index ചെയ്യാതിരിക്കാൻ site templates മറയ്ക്കാൻ ഈ option അനുവദിക്കും.

## Auto search-and-replace ഉപയോഗിച്ച് Site Templates Pre-populate ചെയ്യുന്നു

Registration form-ൽ arbitrary text, color, select fields എന്നിവ add ചെയ്യാനുള്ള കഴിവാണ് Ultimate Multisite-ന്റെ ഏറ്റവും ശക്തമായ features-ൽ ഒന്ന്. ആ data capture ചെയ്തുകഴിഞ്ഞാൽ, തിരഞ്ഞെടുത്ത site template-ന്റെ ചില ഭാഗങ്ങളിൽ content pre-populate ചെയ്യാൻ ഇത് ഉപയോഗിക്കാം. അപ്പോൾ, പുതിയ site publish ചെയ്യുമ്പോൾ, Ultimate Multisite placeholders-നെ registration സമയത്ത് enter ചെയ്ത യഥാർത്ഥ വിവരങ്ങൾ കൊണ്ട് replace ചെയ്യും.

ഉദാഹരണത്തിന്, registration സമയത്ത് end-user-ന്റെ company name ലഭിച്ച് home page-ൽ company name സ്വയമേവ ചേർക്കണമെങ്കിൽ, നിങ്ങളുടെ template site home page-ൽ placeholders add ചെയ്യണം, താഴെയുള്ള image-ൽ കാണിച്ചിരിക്കുന്നതുപോലെ (placeholders double curly braces-ൽ ചുറ്റപ്പെട്ട് add ചെയ്യണം - {{placeholder_name}}).

![Curly braces-ൽ placeholder text ഉള്ള Homepage](/img/config/site-templates-list.png)

തുടർന്ന്, ആ data capture ചെയ്യാൻ checkout form-ൽ matching registration field add ചെയ്യാം:

![Matching registration field ഉള്ള Checkout form](/img/config/checkout-form-editor.png)

Registration സമയത്ത് ഉപഭോക്താവിന് ആ field fill ചെയ്യാൻ കഴിയും.

![ഉപഭോക്താവ് fill ചെയ്ത Registration field](/img/config/checkout-form-step.png)

![Registration form-ന്റെ Preview](/img/config/checkout-form-editor.png)

Ultimate Multisite പിന്നീട് ഉപഭോക്താവ് നൽകിയ data കൊണ്ട് placeholders സ്വയമേവ replace ചെയ്യും.

![Site-ൽ customer data കൊണ്ട് replace ചെയ്ത Placeholders](/img/config/site-templates-list.png)

### "Template full of placeholders" പ്രശ്നം പരിഹരിക്കുന്നു

ഇതെല്ലാം മികച്ചതാണ്, പക്ഷേ ഒരു ugly problem നേരിടേണ്ടിവരുന്നു: ഇപ്പോൾ ഉപഭോക്താക്കൾക്ക് visit ചെയ്യാവുന്ന നമ്മുടെ site templates, അധികം വിവരങ്ങൾ നൽകാത്ത ugly placeholders-ൽ നിറഞ്ഞിരിക്കുന്നു.

ഇത് പരിഹരിക്കാൻ, placeholders-ന് fake values സെറ്റ് ചെയ്യാനുള്ള option ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു, ഉപഭോക്താക്കൾ visit ചെയ്യുമ്പോൾ template sites-ൽ അവയുടെ contents search ചെയ്ത് replace ചെയ്യാൻ ആ values ഉപയോഗിക്കുന്നു.

**Ultimate Multisite > Settings > Sites**-ലേക്ക് പോയി, sidebar-ൽ **Edit Placeholders** link ക്ലിക്ക് ചെയ്ത് template placeholders editor access ചെയ്യാം.

![Sites settings page-ന് കീഴിലുള്ള Placeholder settings](/img/config/settings-sites.png)

ഇത് placeholders content editor-ലേക്ക് കൊണ്ടുപോകും, അവിടെ placeholders-ഉം അവയുടെ respective content-ഉം add ചെയ്യാം.

![Template placeholders content editor](/img/config/settings-sites.png)
