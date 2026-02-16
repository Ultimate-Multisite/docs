---
title: ചെക്ക്ഔട്ട് ഫോമുകൾ
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

പുതിയ ഉപഭോക്താക്കളെ ആകർഷിക്കാൻ വിവിധ രീതികൾ പരീക്ഷിക്കുന്നതിനുള്ള എളുപ്പവും വഴക്കമുള്ളതുമായ മാർഗമാണ് Checkout Forms.

Ultimate Multisite 2.0-ൽ ഒരു Checkout Form editor ലഭ്യമാണ്, ഇത് ഉപയോഗിച്ച് നിങ്ങൾക്ക് വ്യത്യസ്ത ഫീൽഡുകളും ഉൽപ്പന്നങ്ങളും ഉൾപ്പെടുത്തി എത്ര ഫോമുകൾ വേണമെങ്കിലും സൃഷ്ടിക്കാം.

ഈ സവിശേഷത ഉപയോഗിക്കാൻ, ഇടത് വശത്തെ സൈഡ്ബാറിലെ Checkout Forms മെനുവിലേക്ക് പോകുക.

![Checkout Forms list](/img/config/checkout-forms-list.png)

ഈ പേജിൽ നിങ്ങളുടെ എല്ലാ checkout forms കാണാം.

പുതിയൊരെണ്ണം സൃഷ്ടിക്കാൻ, പേജിന്റെ മുകളിലുള്ള Add Checkout Form ക്ലിക്ക് ചെയ്യുക.

തുടക്കമായി ഈ മൂന്ന് ഓപ്ഷനുകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കാം: single step, multi-step അല്ലെങ്കിൽ blank. തുടർന്ന്, Go to the Editor ക്ലിക്ക് ചെയ്യുക.

![Checkout Form editor](/img/config/checkout-form-editor.png)

അല്ലെങ്കിൽ, നിലവിലുള്ള ഫോമുകളുടെ പേരിന് താഴെയുള്ള ഓപ്ഷനുകൾ ക്ലിക്ക് ചെയ്ത് എഡിറ്റ് ചെയ്യാനോ ഡ്യൂപ്ലിക്കേറ്റ് ചെയ്യാനോ കഴിയും. അവിടെ ഫോമിന്റെ shortcode പകർത്താനും ഫോം ഡിലീറ്റ് ചെയ്യാനുമുള്ള ഓപ്ഷനുകളും കാണാം.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Checkout Form എഡിറ്റ് ചെയ്യൽ

വ്യത്യസ്ത ആവശ്യങ്ങൾക്കായി checkout forms സൃഷ്ടിക്കാം. ഈ ഉദാഹരണത്തിൽ നമ്മൾ ഒരു registration form ഉണ്ടാക്കാം.

Checkout form editor-ലേക്ക് പോയ ശേഷം, നിങ്ങളുടെ ഫോമിന് ഒരു പേര് (ആന്തരിക റഫറൻസിനായി മാത്രം ഉപയോഗിക്കും) നൽകുക, കൂടാതെ ഒരു slug-ഉം (shortcode സൃഷ്ടിക്കാൻ ഉപയോഗിക്കുന്നത്) നൽകുക.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ഫോമുകൾ steps-ഉം fields-ഉം ചേർന്നതാണ്. Add New Checkout Step ക്ലിക്ക് ചെയ്ത് പുതിയ സ്റ്റെപ്പ് ചേർക്കാം.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

മോഡൽ വിൻഡോയുടെ ആദ്യ ടാബിൽ, ഫോം സ്റ്റെപ്പിന്റെ ഉള്ളടക്കം പൂരിപ്പിക്കുക. ഒരു ID, പേര്, വിവരണം എന്നിവ നൽകുക. ഇവ കൂടുതലും ആന്തരിക ഉപയോഗത്തിനാണ്.

![Checkout form step](/img/config/checkout-form-step.png)

അടുത്തതായി, സ്റ്റെപ്പിന്റെ visibility സജ്ജീകരിക്കുക. "Always show", "Only show for logged in users" അല്ലെങ്കിൽ "Only show for guests" എന്നിവയിൽ നിന്ന് തിരഞ്ഞെടുക്കാം.

![Checkout form step](/img/config/checkout-form-step.png)

അവസാനമായി, സ്റ്റെപ്പ് സ്റ്റൈൽ കോൺഫിഗർ ചെയ്യുക. ഇവ ഓപ്ഷണൽ ഫീൽഡുകളാണ്.

![Checkout form step](/img/config/checkout-form-step.png)

ഇനി, ആദ്യ സ്റ്റെപ്പിലേക്ക് ഫീൽഡുകൾ ചേർക്കാം. Add New Field ക്ലിക്ക് ചെയ്ത് ആവശ്യമുള്ള സെക്ഷൻ തരം തിരഞ്ഞെടുക്കുക.

![Checkout form step with fields](/img/config/checkout-form-step.png)

ഓരോ ഫീൽഡിനും വ്യത്യസ്ത പാരാമീറ്ററുകൾ പൂരിപ്പിക്കേണ്ടതുണ്ട്. ആദ്യമായി, നമ്മൾ "Username" ഫീൽഡ് തിരഞ്ഞെടുക്കാം.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

ആവശ്യമുള്ളത്ര steps-ഉം fields-ഉം ചേർക്കാം. ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നങ്ങൾ കാണിച്ച് തിരഞ്ഞെടുക്കാൻ സഹായിക്കാൻ Pricing Table ഫീൽഡ് ഉപയോഗിക്കുക. ക്ലയന്റുകൾക്ക് ഒരു template തിരഞ്ഞെടുക്കാൻ അനുവദിക്കണമെങ്കിൽ, Template Selection ഫീൽഡ് ചേർക്കുക. ഇങ്ങനെ തുടരാം.

_**കുറിപ്പ്:** checkout form സൃഷ്ടിക്കാൻ username, email, password, site title, site URL, order summary, payment, submit button എന്നിവ നിർബന്ധമായ ഫീൽഡുകളാണ്._

Checkout form-ൽ പണിയെടുക്കുമ്പോൾ, ക്ലയന്റുകൾ ഫോം എങ്ങനെ കാണുമെന്ന് അറിയാൻ Preview ബട്ടൺ ഉപയോഗിക്കാം. നിലവിലുള്ള ഉപയോക്താവായോ സന്ദർശകനായോ കാണുന്നത് മാറ്റാനും കഴിയും.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

അവസാനമായി, Advanced Options-ൽ "Thank You" പേജിന്റെ സന്ദേശം കോൺഫിഗർ ചെയ്യാം, conversions ട്രാക്ക് ചെയ്യാൻ snippets ചേർക്കാം, checkout form-ൽ custom CSS ചേർക്കാം, അല്ലെങ്കിൽ ചില രാജ്യങ്ങളിലേക്ക് മാത്രം നിയന്ത്രിക്കാം.

![Advanced Options](/img/config/checkout-form-advanced.png)

വലത് കോളത്തിലെ ഓപ്ഷൻ toggle ചെയ്ത് checkout form മാനുവലായി enable അല്ലെങ്കിൽ disable ചെയ്യാം, അല്ലെങ്കിൽ ഫോം ശാശ്വതമായി ഡിലീറ്റ് ചെയ്യാം.

![Active toggle](/img/config/checkout-form-active.png)

നിങ്ങളുടെ checkout form സേവ് ചെയ്യാൻ മറക്കരുത്!

![Save button](/img/config/checkout-form-save.png)

ഫോമിന്റെ shortcode ലഭിക്കാൻ Generate Shortcode ക്ലിക്ക് ചെയ്ത് മോഡൽ വിൻഡോയിൽ കാണുന്ന ഫലം പകർത്തുക.

![Save button with shortcode](/img/config/checkout-form-save.png)
