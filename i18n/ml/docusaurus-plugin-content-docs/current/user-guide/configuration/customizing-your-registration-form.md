---
title: നിങ്ങളുടെ രജിസ്ട്രേഷൻ ഫോം ഇഷ്ടാനുസൃതമാക്കുന്നു
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# നിങ്ങളുടെ രജിസ്ട്രേഷൻ ഫോം കസ്റ്റമൈസ് ചെയ്യാം

WordPress പ്ലാറ്റ്‌ഫോമിൽ നിർമ്മിച്ച മറ്റ് SaaS-കളിൽ നിന്ന് നിങ്ങളുടെ നെറ്റ്‌വർക്കിനെ വ്യത്യസ്തമാക്കാൻ, Ultimate Multisite-ന്റെ **Checkout Forms** ഫീച്ചർ ഉപയോഗിച്ച് നിങ്ങളുടെ രജിസ്ട്രേഷൻ, ലോഗിൻ പേജുകൾ കസ്റ്റമൈസ് ചെയ്യാം.

പുതിയ ഉപഭോക്താക്കളെ ആകർഷിക്കാൻ വ്യത്യസ്ത രീതികൾ പരീക്ഷിക്കാനുള്ള എളുപ്പവും വഴക്കമുള്ളതുമായ മാർഗമാണിത്. എന്നാൽ പ്രധാനമായും ഇത് വ്യക്തിഗതമാക്കിയ രജിസ്ട്രേഷൻ ഫോമുകൾ സൃഷ്ടിക്കാനാണ് ഉപയോഗിക്കുന്നത്. ഇത് എങ്ങനെ ചെയ്യാമെന്ന് ഈ ലേഖനത്തിൽ കാണിച്ചുതരാം.

## ലോഗിൻ, രജിസ്ട്രേഷൻ പേജുകൾ:

Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ, നിങ്ങളുടെ മെയിൻ സൈറ്റിൽ കസ്റ്റം ലോഗിൻ, രജിസ്ട്രേഷൻ പേജുകൾ സ്വയം സൃഷ്ടിക്കപ്പെടും. ഈ ഡിഫോൾട്ട് പേജുകൾ എപ്പോൾ വേണമെങ്കിലും **Ultimate Multisite > Settings > Login & Registration** പേജിൽ പോയി മാറ്റാം.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** പേജിൽ കസ്റ്റമൈസ് ചെയ്യാവുന്ന ഓരോ ഓപ്ഷനും നോക്കാം:

  * **Enable registration:** ഈ ഓപ്ഷൻ നിങ്ങളുടെ നെറ്റ്‌വർക്കിലെ രജിസ്ട്രേഷൻ ഓണാക്കുകയോ ഓഫാക്കുകയോ ചെയ്യും. ഇത് ഓഫാണെങ്കിൽ, ഉപഭോക്താക്കൾക്ക് രജിസ്റ്റർ ചെയ്യാനോ നിങ്ങളുടെ ഉൽപ്പന്നങ്ങൾക്ക് സബ്‌സ്‌ക്രൈബ് ചെയ്യാനോ കഴിയില്ല.

  * **Enable email verification:** ഈ ഓപ്ഷൻ ഓണാണെങ്കിൽ, ഫ്രീ പ്ലാനിനോ ട്രയൽ പിരീഡുള്ള പെയ്ഡ് പ്ലാനിനോ സബ്‌സ്‌ക്രൈബ് ചെയ്യുന്ന ഉപഭോക്താക്കൾക്ക് ഒരു വെരിഫിക്കേഷൻ ഇമെയിൽ ലഭിക്കും. അവരുടെ വെബ്‌സൈറ്റുകൾ സൃഷ്ടിക്കപ്പെടാൻ അവർ വെരിഫിക്കേഷൻ ലിങ്കിൽ ക്ലിക്ക് ചെയ്യണം.

  * **Default registration page:** ഇത് രജിസ്ട്രേഷനുള്ള ഡിഫോൾട്ട് പേജാണ്. ഈ പേജ് നിങ്ങളുടെ വെബ്‌സൈറ്റിൽ പബ്ലിഷ് ചെയ്തിരിക്കണം, കൂടാതെ ഒരു രജിസ്ട്രേഷൻ ഫോം (checkout form എന്നും അറിയപ്പെടുന്നു) ഉണ്ടായിരിക്കണം - ഇവിടെയാണ് നിങ്ങളുടെ ക്ലയന്റുകൾ ഉൽപ്പന്നങ്ങൾക്ക് സബ്‌സ്‌ക്രൈബ് ചെയ്യുന്നത്. നിങ്ങൾക്ക് എത്ര വേണമെങ്കിലും രജിസ്ട്രേഷൻ പേജുകളും checkout forms-ഉം സൃഷ്ടിക്കാം. checkout form shortcode രജിസ്ട്രേഷൻ പേജിൽ ചേർക്കാൻ മറക്കരുത്, ഇല്ലെങ്കിൽ അത് കാണില്ല.

  * **Use custom login page:** ഡിഫോൾട്ട് wp-login.php പേജിന് പകരം ഒരു കസ്റ്റമൈസ്ഡ് ലോഗിൻ പേജ് ഉപയോഗിക്കാൻ ഈ ഓപ്ഷൻ അനുവദിക്കുന്നു. ഈ ഓപ്ഷൻ ഓണാണെങ്കിൽ, **Default login page** ഓപ്ഷനിൽ (താഴെ കാണുന്നത്) ലോഗിനായി ഏത് പേജ് ഉപയോഗിക്കണമെന്ന് തിരഞ്ഞെടുക്കാം.

  * **Obfuscate the original login url (wp-login.php)** : ഒറിജിനൽ ലോഗിൻ URL മറയ്ക്കണമെങ്കിൽ ഈ ഓപ്ഷൻ ഓണാക്കാം. brute-force ആക്രമണങ്ങൾ തടയാൻ ഇത് ഉപയോഗപ്രദമാണ്. ഈ ഓപ്ഷൻ ഓണാണെങ്കിൽ, ഒരു ഉപയോക്താവ് ഒറിജിനൽ wp-login.php ലിങ്ക് ആക്‌സസ് ചെയ്യാൻ ശ്രമിക്കുമ്പോൾ Ultimate Multisite ഒരു 404 error കാണിക്കും.

  * **Force synchronous site publication:** ഒരു ഉപഭോക്താവ് നെറ്റ്‌വർക്കിലെ ഒരു ഉൽപ്പന്നത്തിന് സബ്‌സ്‌ക്രൈബ് ചെയ്തതിന് ശേഷം, പുതിയ pending സൈറ്റ് ഒരു യഥാർത്ഥ നെറ്റ്‌വർക്ക് സൈറ്റാക്കി മാറ്റണം. പബ്ലിഷിംഗ് പ്രക്രിയ Job Queue വഴി asynchronously നടക്കുന്നു. signup-ന്റെ അതേ request-ൽ തന്നെ പബ്ലിക്കേഷൻ നടക്കാൻ ഈ ഓപ്ഷൻ ഓണാക്കുക.

ഇനി, ലോഗിൻ, രജിസ്ട്രേഷൻ പ്രക്രിയയുമായി ബന്ധപ്പെട്ട മറ്റ് ഓപ്ഷനുകൾ നോക്കാം. അതേ Login & registration പേജിലെ **Other options**-ന് താഴെയാണ് ഇവ:

  * **Default role:** signup പ്രക്രിയയ്ക്ക് ശേഷം നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് അവരുടെ വെബ്‌സൈറ്റിൽ ഉണ്ടാകുന്ന role ആണിത്.

  * **Add users to the main site as well:** signup പ്രക്രിയയ്ക്ക് ശേഷം ഉപയോക്താവിനെ നിങ്ങളുടെ നെറ്റ്‌വർക്കിന്റെ മെയിൻ സൈറ്റിലേക്കും ചേർക്കും. ഈ ഓപ്ഷൻ ഓണാക്കിയാൽ, നിങ്ങളുടെ വെബ്‌സൈറ്റിൽ ഈ ഉപയോക്താക്കളുടെ **default role** സെറ്റ് ചെയ്യാനുള്ള ഓപ്ഷനും താഴെ കാണാം.

  * **Enable multiple accounts:** ഒരേ ഇമെയിൽ വിലാസം ഉപയോഗിച്ച് നിങ്ങളുടെ നെറ്റ്‌വർക്കിലെ വിവിധ സൈറ്റുകളിൽ അക്കൗണ്ടുകൾ ഉണ്ടാക്കാൻ ഉപയോക്താക്കളെ അനുവദിക്കുന്നു. ഈ ഓപ്ഷൻ ഓഫാണെങ്കിൽ, നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് അതേ ഇമെയിൽ വിലാസം ഉപയോഗിച്ച് നിങ്ങളുടെ നെറ്റ്‌വർക്കിലെ മറ്റ് വെബ്‌സൈറ്റുകളിൽ അക്കൗണ്ട് സൃഷ്ടിക്കാൻ കഴിയില്ല.

ലോഗിൻ, രജിസ്ട്രേഷൻ സംബന്ധിച്ച കസ്റ്റമൈസ് ചെയ്യാവുന്ന എല്ലാ ഓപ്ഷനുകളും ഇവയാണ്! എഡിറ്റിംഗ് കഴിഞ്ഞ ശേഷം സെറ്റിംഗ്സ് സേവ് ചെയ്യാൻ മറക്കരുത്.

## ഒന്നിലധികം രജിസ്ട്രേഷൻ ഫോമുകൾ ഉപയോഗിക്കാം:

Ultimate Multisite 2.0 ഒരു checkout form editor നൽകുന്നു. വ്യത്യസ്ത ഫീൽഡുകളും ഉൽപ്പന്നങ്ങളും ഉൾപ്പെടുത്തി നിങ്ങൾക്ക് ആവശ്യമുള്ളത്ര ഫോമുകൾ സൃഷ്ടിക്കാം.

ലോഗിൻ, രജിസ്ട്രേഷൻ പേജുകൾ shortcodes ഉപയോഗിച്ചാണ് embed ചെയ്തിരിക്കുന്നത്: ലോഗിൻ പേജിൽ **[wu_login_form]**, രജിസ്ട്രേഷൻ പേജിൽ **[wu_checkout]**. checkout forms നിർമ്മിച്ചോ സൃഷ്ടിച്ചോ രജിസ്ട്രേഷൻ പേജ് കൂടുതൽ കസ്റ്റമൈസ് ചെയ്യാം.

ഈ ഫീച്ചർ ആക്‌സസ് ചെയ്യാൻ, ഇടത് സൈഡ്-ബാറിലെ **Checkout Forms** മെനുവിൽ പോകുക.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

ഈ പേജിൽ നിങ്ങളുടെ എല്ലാ checkout forms-ഉം കാണാം.

പുതിയൊരെണ്ണം സൃഷ്ടിക്കാൻ, പേജിന്റെ മുകളിലുള്ള **Add Checkout Form** ക്ലിക്ക് ചെയ്യുക.

ആരംഭ പോയിന്റായി ഈ മൂന്ന് ഓപ്ഷനുകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കാം: single step, multi-step അല്ലെങ്കിൽ blank. എന്നിട്ട് **Go to the Editor** ക്ലിക്ക് ചെയ്യുക.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

അല്ലെങ്കിൽ, നിലവിലുള്ള ഫോമുകളുടെ പേരിന് താഴെയുള്ള ഓപ്ഷനുകളിൽ ക്ലിക്ക് ചെയ്ത് എഡിറ്റ് ചെയ്യുകയോ duplicate ചെയ്യുകയോ ആവാം. ഫോമിന്റെ shortcode കോപ്പി ചെയ്യാനോ ഫോം ഡിലീറ്റ് ചെയ്യാനുമുള്ള ഓപ്ഷനുകളും അവിടെ കാണാം.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

single step അല്ലെങ്കിൽ multi-step തിരഞ്ഞെടുത്താൽ, checkout form പ്രവർത്തിക്കാൻ ആവശ്യമായ അടിസ്ഥാന steps മുൻകൂട്ടി ചേർത്തിട്ടുണ്ടാകും. വേണമെങ്കിൽ കൂടുതൽ steps ചേർക്കാം.

### Checkout Form എഡിറ്റ് ചെയ്യാം:

മുമ്പ് പറഞ്ഞതുപോലെ, വിവിധ ആവശ്യങ്ങൾക്കായി checkout forms സൃഷ്ടിക്കാം. ഈ ഉദാഹരണത്തിൽ നമ്മൾ ഒരു രജിസ്ട്രേഷൻ ഫോമിൽ പ്രവർത്തിക്കും.

checkout form editor-ലേക്ക് പോയ ശേഷം, ഫോമിന് ഒരു പേര് (ആന്തരിക റഫറൻസിന് മാത്രം ഉപയോഗിക്കും), ഒരു slug (shortcodes സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്നു) എന്നിവ നൽകുക.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms steps-ഉം fields-ഉം ചേർന്നതാണ്. **Add New Checkout Step** ക്ലിക്ക് ചെയ്ത് പുതിയ step ചേർക്കാം.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window-ന്റെ ആദ്യ ടാബിൽ, നിങ്ങളുടെ ഫോമിന്റെ step-ന്റെ content പൂരിപ്പിക്കുക. ഒരു ID, പേര്, വിവരണം എന്നിവ നൽകുക. ഇവ പ്രധാനമായും ആന്തരിക ഉപയോഗത്തിനാണ്.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

അടുത്തതായി, step-ന്റെ visibility സെറ്റ് ചെയ്യുക. **Always show**, **Only show for logged in users** അല്ലെങ്കിൽ **Only show for guests** എന്നിവയിൽ നിന്ന് തിരഞ്ഞെടുക്കാം.

![Checkout step visibility options](/img/config/checkout-form-step.png)

അവസാനമായി, step style കോൺഫിഗർ ചെയ്യുക. ഇവ optional fields ആണ്.

![Checkout step style configuration](/img/config/checkout-form-step.png)

ഇനി, ആദ്യ step-ലേക്ക് fields ചേർക്കാം. **Add New Field** ക്ലിക്ക് ചെയ്ത് നിങ്ങൾക്ക് വേണ്ട section type തിരഞ്ഞെടുക്കുക.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

ഓരോ field-നും വ്യത്യസ്ത parameters പൂരിപ്പിക്കേണ്ടതുണ്ട്. ഈ ആദ്യ ഉദാഹരണത്തിൽ, **Username** field തിരഞ്ഞെടുക്കാം.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

ആവശ്യമുള്ളത്ര steps-ഉം fields-ഉം ചേർക്കാം. ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നങ്ങൾ കാണിക്കാൻ Pricing Table field ഉപയോഗിക്കുക. ക്ലയന്റുകൾക്ക് ഒരു template തിരഞ്ഞെടുക്കാൻ അനുവദിക്കണമെങ്കിൽ, Template Selection field ചേർക്കുക. അങ്ങനെ തുടരുക.

_**കുറിപ്പ്:** checkout form സൃഷ്ടിച്ചതിന് ശേഷം ഒരു product സൃഷ്ടിച്ചാൽ, Pricing table section-ൽ ആ product ചേർക്കണം. ചേർത്തില്ലെങ്കിൽ, രജിസ്ട്രേഷൻ പേജിൽ ഉപഭോക്താക്കൾക്ക് ആ product കാണില്ല._

_**കുറിപ്പ് 2:** username, email, password, site title, site URL, order summary, payment, submit button എന്നിവ checkout form സൃഷ്ടിക്കാൻ നിർബന്ധമായും വേണ്ട fields ആണ്._

checkout form-ൽ പ്രവർത്തിക്കുമ്പോൾ, ക്ലയന്റുകൾ ഫോം എങ്ങനെ കാണുമെന്ന് Preview button ഉപയോഗിച്ച് എപ്പോഴും നോക്കാം. existing user അല്ലെങ്കിൽ visitor ആയി കാണുന്നത് മാറ്റാനും കഴിയും.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

അവസാനമായി, **Advanced Options**-ൽ **Thank You** പേജിനുള്ള message കോൺഫിഗർ ചെയ്യാം, conversions track ചെയ്യാൻ snippets ചേർക്കാം, checkout form-ലേക്ക് custom CSS ചേർക്കാം അല്ലെങ്കിൽ ചില രാജ്യങ്ങളിലേക്ക് മാത്രം restrict ചെയ്യാം.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

വലത് column-ലെ ഓപ്ഷൻ toggle ചെയ്ത് checkout form manually enable അല്ലെങ്കിൽ disable ചെയ്യാം, അല്ലെങ്കിൽ ഫോം permanently delete ചെയ്യാം.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

checkout form സേവ് ചെയ്യാൻ മറക്കരുത്!

![Save Checkout Form button](/img/config/checkout-form-save.png)

ഫോമിന്റെ shortcode ലഭിക്കാൻ **Generate Shortcode** ക്ലിക്ക് ചെയ്ത് modal window-ൽ കാണുന്ന result കോപ്പി ചെയ്യുക.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**കുറിപ്പ്:** ഈ checkout form രജിസ്ട്രേഷൻ പേജിൽ ചേർക്കാൻ ഈ shortcode നിങ്ങളുടെ രജിസ്ട്രേഷൻ പേജിൽ add ചെയ്യണം._

## URL parameters വഴി products-ഉം templates-ഉം pre-select ചെയ്യാം:

നിങ്ങളുടെ ഉൽപ്പന്നങ്ങൾക്കായി customized pricing tables സൃഷ്ടിക്കുകയും, pricing table-ൽ നിന്നോ templates പേജിൽ നിന്നോ ഉപഭോക്താവ് തിരഞ്ഞെടുക്കുന്ന product അല്ലെങ്കിൽ template checkout form-ൽ pre-select ചെയ്യുകയും ചെയ്യണമെങ്കിൽ, URL parameters ഉപയോഗിക്കാം.

### **Plans-നായി:**

**Ultimate Multisite > Products > Select a plan**-ലേക്ക് പോകുക. പേജിന്റെ മുകളിൽ **Click to copy Shareable Link** ബട്ടൺ കാണാം. നിങ്ങളുടെ checkout form-ൽ ഈ specific plan pre-select ചെയ്യാൻ ഈ ലിങ്ക് ഉപയോഗിക്കാം.

![Product page with shareable link button](/img/config/products-list.png)

ഈ shareable link **Plans**-ന് മാത്രമേ സാധുതയുള്ളൂ എന്ന് ശ്രദ്ധിക്കുക. packages അല്ലെങ്കിൽ services-ന് shareable links ഉപയോഗിക്കാൻ കഴിയില്ല.

### Templates-നായി:

checkout form-ൽ site templates pre-select ചെയ്യണമെങ്കിൽ, രജിസ്ട്രേഷൻ പേജ് URL-ൽ **?template_id=X** parameter ഉപയോഗിക്കാം. "X" എന്നത് **site template ID number** ഉപയോഗിച്ച് മാറ്റണം. ഈ number ലഭിക്കാൻ, **Ultimate Multisite > Sites**-ലേക്ക് പോകുക.

ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന site template-ന്റെ താഴെയുള്ള **Manage** ക്ലിക്ക് ചെയ്യുക. SITE ID number കാണാം. ഈ specific site template checkout form-ൽ pre-select ചെയ്യാൻ ഈ number ഉപയോഗിക്കുക. ഇവിടെ നമ്മുടെ കാര്യത്തിൽ, URL parameter **?template_id=2** ആയിരിക്കും.

![Sites list showing site template ID](/img/config/site-templates-list.png)

നമ്മുടെ network website [**www.mynetwork.com**](http://www.mynetwork.com) ആണെന്നും checkout form ഉള്ള രജിസ്ട്രേഷൻ പേജ് **/register** പേജിലാണെന്നും കരുതുക. ഈ site template pre-select ചെയ്ത മുഴുവൻ URL ഇങ്ങനെയായിരിക്കും: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

വേണമെങ്കിൽ, checkout form-ൽ products-ഉം templates-ഉം ഒരുമിച്ച് pre-select ചെയ്യാം. plan-ന്റെ shareable link കോപ്പി ചെയ്ത് അവസാനം template parameter ചേർത്താൽ മതി. ഇത് ഇങ്ങനെ കാണപ്പെടും: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
