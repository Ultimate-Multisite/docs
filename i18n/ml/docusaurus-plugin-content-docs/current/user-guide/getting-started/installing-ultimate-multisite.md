---
title: Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുന്നു
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുന്ന വിധം

:::note
WordPress Multisite ഇതിനകം ഇൻസ്റ്റാൾ ചെയ്ത് കോൺഫിഗർ ചെയ്തിട്ടുണ്ടെന്ന് ഈ ട്യൂട്ടോറിയൽ കരുതുന്നു. ഇത് എങ്ങനെ ചെയ്യണമെന്ന് അറിയാൻ, WP Beginner-ന്റെ [ഈ ട്യൂട്ടോറിയൽ](https://www.wpbeginner.com/glossary/multisite/) കാണുക.
:::

## Plugin ഇൻസ്റ്റാൾ ചെയ്യുന്ന വിധം

Ultimate Multisite [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/)-ൽ സൗജന്യമായി ലഭ്യമാണ്.

നിങ്ങളുടെ **Network Admin Dashboard**-ൽ നിന്ന്, **Plugins → Add New Plugin**-ലേക്ക് പോകുക.

![Network Admin Add New Plugin പേജ്](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** എന്ന് സെർച്ച് ചെയ്യുക (കൃത്യമായ ഫലത്തിന് ഉദ്ധരണി ചിഹ്നങ്ങൾ ഉപയോഗിക്കുക), അത് ആദ്യ ഫലമായി കാണാം. **Install Now** ക്ലിക്ക് ചെയ്യുക.

![Ultimate Multisite കാണിക്കുന്ന സെർച്ച് ഫലങ്ങൾ](/img/installation/search-ultimate-multisite.png)

ഇൻസ്റ്റാൾ ചെയ്തുകഴിഞ്ഞാൽ, നിങ്ങളുടെ മുഴുവൻ നെറ്റ്‌വർക്കിലും plugin ആക്ടിവേറ്റ് ചെയ്യാൻ **Network Activate** ക്ലിക്ക് ചെയ്യുക.

![Network Activate ബട്ടണുള്ള ഇൻസ്റ്റാൾ ചെയ്ത Plugin](/img/installation/plugin-installed.png)

ആക്ടിവേഷൻ കഴിഞ്ഞാൽ, നിങ്ങൾ സ്വയമേവ Setup Wizard-ലേക്ക് റീഡയറക്ട് ചെയ്യപ്പെടും.

![Plugin ആക്ടിവേറ്റ് ചെയ്ത് wizard-ലേക്ക് റീഡയറക്ട് ചെയ്തു](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard ഏകദേശം 10 മിനിറ്റിനുള്ളിൽ Ultimate Multisite കോൺഫിഗർ ചെയ്യാൻ നിങ്ങളെ സഹായിക്കും.

### സ്വാഗതം

ആരംഭിക്കാൻ **Get Started** ക്ലിക്ക് ചെയ്യുക.

![Setup Wizard സ്വാഗത സ്ക്രീൻ](/img/installation/wizard-welcome.png)

### ഇൻസ്റ്റാളേഷന് മുമ്പുള്ള പരിശോധനകൾ

ഈ ഘട്ടം നിങ്ങളുടെ സിസ്റ്റം വിവരങ്ങളും WordPress ഇൻസ്റ്റാളേഷനും Ultimate Multisite-ന്റെ ആവശ്യകതകൾ പാലിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുന്നു. എല്ലാം ശരിയാണെങ്കിൽ, **Go to the Next Step** ക്ലിക്ക് ചെയ്യുക.

![സിസ്റ്റം ആവശ്യകതകൾ കാണിക്കുന്ന ഇൻസ്റ്റാളേഷന് മുമ്പുള്ള പരിശോധനകൾ](/img/installation/wizard-pre-install-checks.png)

### ഇൻസ്റ്റാളേഷൻ

Ultimate Multisite പ്രവർത്തിക്കാൻ ആവശ്യമായ ഡാറ്റാബേസ് ടേബിളുകളും `sunrise.php` ഫയലും ഇൻസ്റ്റാളർ സൃഷ്ടിക്കും. തുടരാൻ **Install** ക്ലിക്ക് ചെയ്യുക.

![ഡാറ്റാബേസ് ടേബിളുകളും sunrise.php-ഉം കാണിക്കുന്ന ഇൻസ്റ്റാളേഷൻ ഘട്ടം](/img/installation/wizard-installation.png)

### നിങ്ങളുടെ കമ്പനി

നിങ്ങളുടെ കമ്പനി വിവരങ്ങൾ പൂരിപ്പിച്ച് ഡിഫോൾട്ട് കറൻസി സെറ്റ് ചെയ്യുക. ഈ വിവരങ്ങൾ നിങ്ങളുടെ WaaS പ്ലാറ്റ്ഫോമിൽ ഉടനീളം ഉപയോഗിക്കും. പൂർത്തിയായാൽ **Continue** ക്ലിക്ക് ചെയ്യുക.

![Your Company കോൺഫിഗറേഷൻ ഘട്ടം](/img/installation/wizard-your-company.png)

### ഡിഫോൾട്ട് ഉള്ളടക്കം

മുൻകൂട്ടി നിർവചിച്ച ടെംപ്ലേറ്റുകൾ, ഉൽപ്പന്നങ്ങൾ, മറ്റ് സ്റ്റാർട്ടർ ഉള്ളടക്കം എന്നിവ ഇൻസ്റ്റാൾ ചെയ്യാൻ ഈ ഘട്ടം നിങ്ങളെ അനുവദിക്കുന്നു. Ultimate Multisite-ന്റെ ഫീച്ചറുകൾ പരിചയപ്പെടാൻ ഇത് മികച്ച മാർഗമാണ്. ഡിഫോൾട്ട് ഉള്ളടക്കം ചേർക്കാൻ **Install** ക്ലിക്ക് ചെയ്യുക, അല്ലെങ്കിൽ ആദ്യം മുതൽ ആരംഭിക്കാൻ ഈ ഘട്ടം ഒഴിവാക്കുക.

![ഡിഫോൾട്ട് ഉള്ളടക്ക ഇൻസ്റ്റാളേഷൻ ഘട്ടം](/img/installation/wizard-default-content.png)

### ശുപാർശ ചെയ്യുന്ന Plugins

ശുപാർശ ചെയ്യുന്ന companion plugins ഓപ്ഷണലായി ഇൻസ്റ്റാൾ ചെയ്യുക. അവ ചേർക്കാൻ **Install** ക്ലിക്ക് ചെയ്യുക അല്ലെങ്കിൽ തുടരാൻ skip ചെയ്യുക.

![ശുപാർശ ചെയ്യുന്ന plugins ഘട്ടം](/img/installation/wizard-recommended-plugins.png)

### തയ്യാറായി!

അത്രയേയുള്ളൂ! നിങ്ങളുടെ Ultimate Multisite ഇൻസ്റ്റാളേഷൻ പൂർത്തിയായി. ഇനി നിങ്ങൾക്ക് **Network Admin Dashboard**-ൽ നിന്ന് നിങ്ങളുടെ Website as a Service പ്ലാറ്റ്ഫോം നിർമ്മിക്കാൻ തുടങ്ങാം.

![സെറ്റപ്പ് പൂർത്തിയായി - Ready സ്ക്രീൻ](/img/installation/wizard-ready.png)

![Ultimate Multisite ആക്ടീവായ Network Admin Dashboard](/img/installation/network-dashboard.png)

ആസ്വദിച്ച് ആരംഭിക്കൂ!
