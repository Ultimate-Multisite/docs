---
title: ഡൊമെയ്ൻ സെല്ലർ മാറ്റങ്ങളുടെ രേഖ
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - Released on 2026-05-08
- New: ResellerClub, Enom, and OpenSRS രജിസ്ട്രാർമാർക്കായി DNS record ഉണ്ടാക്കാനുള്ള സൗകര്യം (add_dns_record) ചേർത്തു
- Fix: Default DNS Records parser ഇപ്പോൾ {DOMAIN} ഉം {SITE_URL} ഉം ടോക്കണുകൾ സഹിക്കുമെന്ന് (tolerates) ഉറപ്പുവരുത്തി
- Fix: site_url-മായി കൂട്ടിമുട്ടുന്നത് ഒഴിവാക്കാൻ Domain selection checkout field-ന്റെ slug-കൾ namespaced ചെയ്തു

Version 1.0.8 - Released on 2026-05-07
- Fix: ResellerClub ഡൊമെയ്ൻ വിലനിർണ്ണയം ഇപ്പോൾ ശരിയായ API എൻഡ്‌പോയിന്റിൽ നിന്ന് ലൈവ് കോസ്റ്റ് വിലകൾ എടുക്കുന്നു

Version 1.0.7 - Released on 2026-05-06
* Fix: ResellerClub test_connection ആവശ്യമായ tlds parameter (#224) അയയ്ക്കുന്നു

Version 1.0.6 - Released on 2026-05-05
* Fix: ResellerClub ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ ഇപ്പോൾ മെച്ചപ്പെടുത്തിയ API response handling-ഉം registry-driven provider routing-ഉം ഉപയോഗിച്ച് ശരിയായി പ്രവർത്തിക്കുന്നു
* Fix: Register Domain admin പേജിലെ യൂസർ എക്സ്പീരിയൻസ് (UX) മെച്ചപ്പെടുത്തലുകൾ
* Removed: CyberPanel രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ

Version 1.0.5 - Released on 2026-04-02
* New: ഡൊമെയ്ൻ രജിസ്ട്രേഷനും മാനേജ്മെന്റിനുമായി GoDaddy രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ
* New: NameSilo രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ
* New: ResellerClub രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ
* New: ഡൊമെയ്ൻ വാങ്ങുമ്പോഴും മാപ്പിംഗിനുമായി ഓട്ടോ-വെരിഫൈ SES അയക്കുന്ന ഡൊമെയ്ൻ
* Fix: test environment-ൽ redefinition ആകുന്നതിൽ നിന്ന് Guard plugin constants-നെ സംരക്ഷിച്ചു
* Fix: MySQL flags word-split ചെയ്യുമ്പോൾ install-wp-tests.sh-ൽ ശരിയായി പ്രവർത്തിക്കുന്നു

Version 1.0.4 - Released on 2026-03-14
* **Fix:** ചില നഷ്ടപ്പെട്ട css assets
* **Fix:** ലഭ്യമല്ലാത്ത tlds സംബന്ധിച്ച പിശക്

Version 1.0.3 - Released on 2026-03-09
* **Fix:** checkout shortcode ഉപയോഗിക്കുമ്പോൾ legacy signup template-ൽ (domain_option, selected_domain, domain_provider) Vue reactive property errors എന്നിവ പരിഹരിച്ചു
* **Fix:** ഡൊമെയ്ൻ selection checkout field-ൽ സബ്ഡൊമെയ്ൻ ഇൻപുട്ട് ഫീൽഡ് അലയടിക്കുന്നത് (misalignment) ഉം വലിയ ടെക്സ്റ്റ് കാണിക്കുന്നതും പരിഹരിച്ചു
* **Fix:** ഡൊമെയ്ൻ selection field ഉള്ളപ്പോൾ "Your URL will be" preview block മറയ്ക്കുന്നു

Version 1.0.2 - Released on 2026-03-01
* **Improved:** സെറ്റിംഗ്സ് പേജിൽ നിന്ന് global markup settings നീക്കം ചെയ്തു — ഇപ്പോൾ വിലനിർണ്ണയം ഉൽപ്പന്നത്തിന് മാത്രമായി പരിമിതപ്പെടുത്തിയിരിക്കുന്നു
* **Improved:** വേഗത്തിലുള്ള നാവിഗേഷനായി സെറ്റിംഗ്സ് പേജിൽ "Manage Domain Products" ലിങ്ക് ചേർത്തു
* **Improved:** ഡൊമെയ്ൻ ഉൽപ്പന്ന ക്രമീകരണങ്ങൾക്കായി കൂടുതൽ വ്യക്തമായ field descriptions ഉം tooltips ഉം (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improved:** സെറ്റിംഗ്സ് പേജിലുടനീളം മെച്ചപ്പെടുത്തിയ വിവരണങ്ങൾ (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Released on 2026-02-27

* **New:** ബൾക്ക് വിലനിർണ്ണയ മാനേജ്മെന്റിനായുള്ള TLD import tool
* **New:** ഡൊമെയ്ൻ ഉൽപ്പന്നങ്ങൾക്കായി introductory pricing സപ്പോർട്ട്
* **New:** Cypress ഉപയോഗിച്ചുള്ള E2E test suite
* **New:** ഡൊമെയ്ൻ ലൈഫ്സൈക്കിൾ അറിയിപ്പുകൾക്കായുള്ള ഇമെയിൽ ടെംപ്ലേറ്റുകൾ
* **New:** അഡ്മിൻ ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ മോഡലിൽ രജിസ്ട്രന്റ് വിലാസ field-കൾ, സെറ്റിംഗ്സിൽ നിന്ന് ഓട്ടോമാറ്റിക്കായി പൂരിപ്പിക്കുന്നു
* **New:** add, edit, delete record സപ്പോർട്ടുള്ള കസ്റ്റമർ DNS management interface
* **New:** ഓട്ടോമാറ്റിക് ഡൊമെയ്ൻ മാപ്പിംഗോടുകൂടിയ "Bring your own domain" checkout ഓപ്ഷൻ
* **New:** checkout സമയത്ത് ഡൊമെയ്ൻ പേരിൽ നിന്ന് site URL ഓട്ടോമാറ്റിക് ആയി ജനറേറ്റ് ചെയ്യുന്നു
* **New:** സെറ്റിംഗ്സിൽ default nameserver ഉം DNS record configuration ഉം
* **New:** core domain edit പേജിൽ ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ വിശദാംശങ്ങളും DNS മാനേജ്മെന്റും
* **New:** സെറ്റപ്പ് വിസാർഡ് അനുയോജ്യമായ default values സഹിതം ഒരു default domain product ഓട്ടോമാറ്റിക് ആയി സൃഷ്ടിക്കുന്നു
* **New:** എല്ലാ കോൺഫിഗർ ചെയ്ത പ്രൊവൈഡർമാർ വഴിയും cron വഴി ദിവസേനയുള്ള ഓട്ടോമാറ്റിക് TLD sync
* **New:** ഉൽപ്പന്നമനുസരിച്ചുള്ള കോൺഫിഗറേഷനോടെ WHOIS privacy protection (always on, customer choice, or disabled)
* **New:** വിലനിർണ്ണയ പ്രദർശനത്തോടും dark mode സപ്പോർട്ടോടും കൂടിയ WHOIS privacy checkout checkbox
* **New:** മാനുവൽ ഡൊമെയ്ൻ രജിസ്ട്രേഷനായുള്ള Register Domain admin page
* **New:** Ultimate Multisite update server വഴി ഓട്ടോമാറ്റിക് plugin updates
* **New:** product list table-ലെ domain product type filter tab-ൽ purple badge styling
* **New:** ഡൊമെയ്ൻ checkout ഫോമിലെ രജിസ്ട്രന്റ് കോൺടാക്റ്റ് field-കൾ (name, address, city, state, postal code, country, phone)
* **New:** രജിസ്ട്രാർ API വിളിക്കുന്നതിന് മുമ്പ് രജിസ്ട്രന്റ് field validation, വ്യക്തമായ error സന്ദേശങ്ങളോടെ
* **New:** ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ ഇവന്റുകൾക്കായുള്ള പ്രൊവൈഡർ-specific log channels (ഉദാഹരണത്തിന്, domain-seller-namecheap.log)
* **New:** പ്രധാന രജിസ്ട്രേഷൻ/സൈൻഅപ്പ് checkout ഫോമിലെ രജിസ്ട്രന്റ് കോൺടാക്റ്റ് field-കൾ (ഡൊമെയ്ൻ രജിസ്റ്റർ ചെയ്യുമ്പോൾ കാണിക്കുന്നു)
* **Improved:** Domain Search checkout field മാറ്റി, സബ്ഡൊമെയ്ൻ, രജിസ്റ്റർ, നിലവിലുള്ള ഡൊമെയ്ൻ ടാബുകൾ സപ്പോർട്ട് ചെയ്യുന്ന unified Domain Selection field ഉപയോഗിച്ചു
* **Improved:** ഡൊമെയ്ൻ ഉൽപ്പന്ന ക്രമീകരണങ്ങൾ core widget system വഴി product edit page-ൽ inline ആയി റെൻഡർ ചെയ്യുന്നു
* **Improved:** കസ്റ്റമർ ഡൊമെയ്ൻ ഇൻഫോ core domain mapping widget-ലേക്ക് ബന്ധിപ്പിച്ചു, ഒറ്റപ്പെട്ട metabox ആയിരുന്നില്ല
* **Improved:** TLD import wizard എല്ലാ പ്രൊവൈഡർമാർからも ഒറ്റക്ലിക്കിൽ sync ചെയ്യാൻ ലളിതമാക്കി
* **Improved:** Namecheap ഡൊമെയ്ൻ ലഭ്യത വേഗത്തിലുള്ള തിരയലിനായി batch API call ഉപയോഗിക്കുന്നു
* **Improved:** Namecheap pricing API ശരിയായ പാരാമീറ്ററുകളും response parsing-ഉം ഉപയോഗിക്കുന്നു
* **Improved:** TLD സ്റ്റോറേജ് ഒരു single network option-ൽ കേന്ദ്രീകരിച്ചു
* **Improved:** DNS മാറ്റങ്ങൾ, ട്രാൻസ്ഫറുകൾ, കോൺഫിഗറേഷൻ ആപ്ലിക്കേഷൻ എന്നിവയ്ക്കായി ഡൊമെയ്ൻ ആക്ടിവിറ്റി ലോഗിംഗ്
* **Improved:** IANA master list ഉപയോഗിച്ച് batch validation വഴി OpenSRS-ന് മുഴുവൻ TLD sync
* **Improved:** പേജിനേറ്റഡ് API requests ഉപയോഗിച്ച് Namecheap-ന് മുഴുവൻ TLD sync
* **Improved:** പഴയ പ്രൊവൈഡർ ക്ലാസുകൾ Integration Registry pattern ഉപയോഗിച്ച് മാറ്റി
* **Improved:** DNS, transfer കോൺഫിഗറേഷൻ സഹിതം സെറ്റിംഗ്സ് പാനൽ
* **Improved:** ഫോൺ നമ്പറുകൾ ഓട്ടോമാറ്റിക്കായി +CC.NNN രജിസ്ട്രാർ ഫോർമാറ്റിലേക്ക് മാറ്റുന്നു
* **Improved:** ഫോൺ field validation submission ചെയ്യുന്നതിന് മുമ്പ് formatting characters നീക്കം ചെയ്യുന്നു
* **Improved:** Version requirement Ultimate Multisite 2.4.12 ലേക്ക് ഉയർത്തി, കൂടുതൽ വ്യക്തമായ അറിയിപ്പ് നൽകി
* **Improved:** CI workflow addon ഉം core plugin ഉം രണ്ടിനും ശരിയായ checkout ഉപയോഗിക്കുന്നു
* **Improved:** prepare_registrant_info() checkout-ൽ സേവ് ചെയ്ത user meta-യിൽ നിന്ന് വായിക്കുന്നു, ബില്ലിംഗ് വിലാസം fallback ആയി ഉപയോഗിക്കുന്നു
* **Fixed:** checkout സമയത്ത് non-logged-in users-ന് വേണ്ടി Domain search AJAX പരാജയപ്പെടുന്നത്
* **Fixed:** checkout സമയത്ത് non-logged-in users-ന് വേണ്ടി Domain pricing AJAX പരാജയപ്പെടുന്നത്
* **Fixed:** WP-CLI കമാൻഡുകൾ പ്രവർത്തിപ്പിക്കുമ്പോൾ Spyc class redeclaration fatal error
* **Fixed:** Namecheap sandbox API timeout വളരെ കുറവായിരുന്നു
* **Fixed:** പച്ച പശ്ചാത്തലത്തിൽ Domain search Select ബട്ടൺ ടെക്സ്റ്റ് കാണുന്നില്ലായിരുന്നു
* **Fixed:** കോൺടാക്റ്റ് വിവരങ്ങൾ നഷ്ടമായതിനാൽ "RegistrantFirstName is Missing" എന്ന പിശക് സഹിതം ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ പരാജയപ്പെടുന്നു
* **Fixed:** site checkout സമയത്ത് site ഇല്ലാത്തപ്പോൾ ഡൊമെയ്ൻ record blog_id=0 സഹിതം സൃഷ്ടിക്കപ്പെടുന്നു
* **Fixed:** Default TLDs setting ഒരു parsed array-മായിരിക്കേണ്ടതിന് പകരം string ആയി നൽകുന്നു
* **Removed:** ഒറ്റപ്പെട്ട Domain Management admin page — ഇപ്പോൾ core domain pages വഴി കൈകാര്യം ചെയ്യുന്നു

Version 1.0.0 - Released on 2025-09-28

**Ultimate Multisite v2-നുള്ള പ്രധാന പുനഃക്രമീകരണം (Major Rewrite)**

* **New:** ആധുനിക PHP 7.4+ ആർക്കിടെക്ച്ചർ ഉപയോഗിച്ച് പൂർണ്ണമായ പുനഃക്രമീകരണം
* **New:** Ultimate Multisite v2 checkout system-മായി തടസ്സമില്ലാത്ത ഇന്റഗ്രേഷൻ
* **New:** വഴക്കമുള്ള വിലനിർണ്ണയ ഓപ്ഷനുകളോടുകൂടിയ ഡൊമെയ്ൻ ഉൽപ്പന്ന മാനേജ്മെന്റ്
* **New:** ഒന്നിലധികം ഡൊമെയ്ൻ പ്രൊവൈഡർ സപ്പോർട്ട് ആർക്കിടെക്ചർ
* **New:** ഓട്ടോ-റിന്യൂവൽ, സബ്‌സ്‌ക്രിപ്ഷൻ ഇന്റഗ്രേഷൻ
* **New:** കസ്റ്റമർ ഡൊമെയ്ൻ മാനേജ്മെന്റ് ഇന്റർഫേസ്
* **New:** അഡ്മിൻ ഡൊമെയ്ൻ മോണിറ്ററിംഗും ലോഗുകളും
* **New:** ഡൊമെയ്ൻ ഉൽപ്പന്നങ്ങൾക്കായി കൂപ്പൺ സപ്പോർട്ട്
* **New:** സമഗ്രമായ സെറ്റിംഗ്സ് മാനേജ്മെന്റ്
* **New:** ഡെവലപ്പർ-friendly എക്സ്റ്റensible codebase
* **Improved:** എല്ലാ ഫീച്ചർ സപ്പോർട്ടോടുകൂടി OpenSRS പ്രൊവൈഡർ അപ്ഡേറ്റ് ചെയ്തു
* **Improved:** Ultimate Multisite v2 യുമായി പൊരുത്തപ്പെടുന്ന ആധുനിക UI
* **Fixed:** എല്ലാ ഉപയോഗിക്കാത്ത v1 കോഡുകളും v2 സ്റ്റാൻഡേർഡുകളിലേക്ക് അപ്ഡേറ്റ് ചെയ്തു
* **Removed:** പഴയ v1 സഹിഷ്ണുത (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM-മായി പൊരുത്തക്കേട്
* Note: ഇത് v1-മായി പൊരുത്തപ്പെടുന്ന അവസാന റിലീസായിരുന്നു

### Version 0.0.2 - 07/12/2018

* Fixed: License Key field നീക്കം ചെയ്തു
* Fixed: ഫീച്ചർ plugin സജീവമാകുമ്പോൾ Plan tabs കാണുന്നില്ലായിരുന്നു
* Improved: രജിസ്ട്രേഷൻ field-ൽ ഒരു skip ബട്ടൺ ചേർത്തു

### Version 0.0.1 - Initial Release

* WP Ultimo v1-നുള്ള അടിസ്ഥാന OpenSRS ഇന്റഗ്രേഷൻ
* ലളിതമായ ഡൊമെയ്ൻ തിരയലും രജിസ്ട്രേഷനും
* Plan-അടിസ്ഥാനത്തിലുള്ള ഡൊമെയ്ൻ പെർമിഷനുകൾ
