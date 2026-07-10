---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: VIES SOAP service-യിലെ MS_MAX_CONCURRENT_REQ പിശകുകൾ കാരണം ജർമ്മൻ (DE) VAT നമ്പറുകൾ സാധൂകരണം (validation) ചെയ്യുന്നതിൽ പരാജയപ്പെട്ടിരുന്നു. കൂടുതൽ വിശ്വസനീയമായ സാധൂകരണത്തിനായി പഴയ SOAP API-യിൽ നിന്ന് ഔദ്യോഗിക EU VIES REST API-യിലേക്ക് മാറ്റി.
* Fix: VIES service താൽക്കാലികമായി ലഭ്യമല്ലാത്തപ്പോൾ, VAT നമ്പറുകൾ തെറ്റായി നിരസിക്കപ്പെടുന്നതിന് പകരം ഇപ്പോൾ സ്വീകാര്യമാണ്. പിന്നീട് അവലോകനം ചെയ്യുന്നതിനായി ഒരു log entry സൃഷ്ടിക്കപ്പെടുന്നു.
* Fix: VAT/Tax ID field ഇപ്പോൾ എല്ലാ രാജ്യങ്ങൾക്കുമായി കാണാവുന്നതാണ്, യൂറോപ്യൻ യൂണിയൻ അംഗരാജ്യങ്ങൾക്കല്ല മാത്രം. Non-EU tax ID-കൾ (ഉദാഹരണത്തിന്, സ്വിസ് CHE നമ്പറുകൾ) VIES സാധൂകരണം ഇല്ലാതെ ഇൻവോയ്സ് പ്രദർശിപ്പിക്കുന്നതിനായി സംഭരിക്കുന്നു.
* Fix: തെറ്റായ array lookup logic കാരണം ഗ്രീസ് (GR), മോണക്കോ (MC), ഇല ഓഫ് മാൻ (IM) എന്നിവയുടെ VAT prefix lookup തകരാറിലായിരുന്നു.
* Improvement: Site Exporter addon-മായി ഉപയോഗിക്കുമ്പോൾ fatal errors ഉണ്ടാക്കാൻ സാധ്യതയുള്ള അനാവശ്യ wp-cli-bundle dev dependency നീക്കം ചെയ്തു.
* Improvement: സമഗ്രമായ യൂണിറ്റ് ടെസ്റ്റ് സ്യൂട്ട് (53 ടെസ്റ്റുകൾ) ചേർത്തു.

Version 1.0.6 - Released on 2026-01-25

* Fix: ആഭ്യന്തര B2B ഇടപാടുകൾക്ക് (Domestic B2B transactions) ഇപ്പോൾ ശരിയായ രീതിയിൽ VAT ഈടാക്കുന്നു. EU VAT നിയമമനുസരിച്ച്, ഉപഭോക്താവിന്റെ രാജ്യവും കമ്പനിയുടെ രാജ്യവും ഒത്തുപോകുമ്പോൾ, അതിർത്തി കടന്നുള്ള B2B ഇടപാടുകൾക്ക് മാത്രമേ റിവേഴ്സ് ചാർജ് (reverse charge) ബാധകമാകൂ.

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon ലോഡ് ആകുന്നില്ല അല്ലെങ്കിൽ ശരിയായി പ്രവർത്തിക്കുന്നില്ല.
* Change: കൂടുതൽ വിശ്വസനീയവും സജീവമായി പരിപാലിക്കപ്പെടുന്നതുമായ ഡാറ്റയ്ക്കായി VAT നിരക്ക് ഡാറ്റാ സ്രോതസ്സ് euvatrates.com-ൽ നിന്ന് ibericode/vat-rates repository ലേക്ക് മാറ്റി.
* Fix: super_reduced_rates ഓപ്ഷൻ മൂല്യത്തിലെ ടൈപ്പ് പിശക് (typo) തിരുത്തി.
* Improvement: പിശകുകൾ തടയാൻ country code കൈകാര്യം ചെയ്യുന്നതിന് null checks ചേർത്തു.
* Change: Traduttore വഴി ഓട്ടോമാറ്റിക് അപ്ഡേറ്റുകൾക്ക് പ്രാധാന്യം നൽകിക്കൊണ്ട് ബണ്ടിൽ ചെയ്ത ട്രാൻസ്ലേഷൻ ഫയലുകൾ നീക്കം ചെയ്തു.

Version: 1.0.3 - Released on 2025-09-28

* Prefix ultimate-multisite എന്ന് മാറ്റിച്ചു; ടെക്സ്റ്റ് ഡൊമെയ്ൻ അപ്ഡേറ്റ് ചെയ്തു; വേർഷൻ ബമ്പ് ചെയ്തു.

Version 1.0.0-beta.4 - 2021-09-24

* Added: mu-plugins based setups-നുള്ള filter wp_ultimo_skip_network_active_check;

Version 1.0.0 - 05/08/2021 - Initial Release
