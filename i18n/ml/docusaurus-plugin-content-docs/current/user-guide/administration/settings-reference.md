---
title: ക്രമീകരണങ്ങളുടെ റഫറൻസ്
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Settings റഫറൻസ് {#settings-reference}

ഈ പേജ് Ultimate Multisite-ലെ ദിവസേനയുള്ള ഭരണനിർവഹണത്തെ ബാധിക്കുന്ന ക്രമീകരണങ്ങളും അടുത്തകാലത്തെ പെരുമാറ്റ മാറ്റങ്ങളും രേഖപ്പെടുത്തുന്നു.

## മറ്റു ഓപ്ഷനുകൾ {#other-options}

**Other Options** മേഖല **Ultimate Multisite > Settings > Login & Registration** എന്നതിന് കീഴിൽ കാണാം.

| ക്രമീകരണം | വിവരണം |
|---|---|
| **Enable Jumper** | അഡ്മിൻ മേഖലയിൽ Jumper ദ്രുത നാവിഗേഷൻ ഉപകരണം കാണിക്കുന്നു. Ultimate Multisite സ്ക്രീനുകളിലേക്കും നെറ്റ്‌വർക്ക് ഒബ്ജക്റ്റുകളിലേക്കും പിന്തുണയുള്ള അഡ്മിൻ ലക്ഷ്യസ്ഥാനങ്ങളിലേക്കും നേരിട്ട് പോകാൻ ഇത് ഉപയോഗിക്കുക. ഈ കുറുക്കുവഴി കാണിക്കേണ്ടതില്ലെങ്കിൽ അത് പ്രവർത്തനരഹിതമാക്കുക. |

## പിശക് റിപ്പോർട്ടിംഗും ടെലിമെട്രിയും {#error-reporting-and-telemetry}

മുമ്പുണ്ടായിരുന്ന പിശക് റിപ്പോർട്ടിംഗ് opt-in ക്രമീകരണം ക്രമീകരണ പേജിൽ നിന്ന് നീക്കം ചെയ്തിട്ടുണ്ട്. അജ്ഞാത ടെലിമെട്രി പ്രവർത്തനരഹിതമാണ്, അത് പ്രവർത്തനക്ഷമമാക്കാൻ UI toggle ഇല്ല.

ക്രമീകരണ പേജിനായി നിങ്ങൾ ആന്തരിക runbooks അല്ലെങ്കിൽ സ്ക്രീൻഷോട്ടുകൾ പരിപാലിക്കുന്നുവെങ്കിൽ, പഴയ പിശക് റിപ്പോർട്ടിംഗ് opt-in field സംബന്ധിച്ച പരാമർശങ്ങൾ നീക്കം ചെയ്യുക. അതുവഴി ഇപ്പോൾ ഇല്ലാത്ത ഒരു ക്രമീകരണം അഡ്മിനിസ്ട്രേറ്റർമാർ അന്വേഷിക്കില്ല.

## Import/Export ക്രമീകരണങ്ങൾ {#importexport-settings}

**Import/Export** ക്രമീകരണ ടാബ് അത് ഏത് ക്രമീകരണങ്ങളെ നിയന്ത്രിക്കുന്നു എന്ന് വിവരിക്കുകയും, സൈറ്റ്, നെറ്റ്‌വർക്ക് ആർക്കൈവുകൾക്കായി **Ultimate Multisite > Site Export** എന്നതിലേക്ക് നേരിട്ട് ലിങ്ക് ചെയ്യുകയും ചെയ്യുന്നു. import/export കോൺഫിഗറേഷനായി ക്രമീകരണ ടാബ് ഉപയോഗിക്കുക, single-site export/import പ്രവർത്തനപ്രവാഹത്തിനായി **Tools > Export & Import** ഉപയോഗിക്കുക, പൂർണ്ണ Network Export archive ആവശ്യമുള്ളപ്പോൾ Site Export ഉപകരണം ഉപയോഗിക്കുക.

## Domain Seller HostAfrica ബാലൻസ് മുന്നറിയിപ്പ് {#domain-seller-hostafrica-balance-warning}

Domain Seller addon HostAfrica-യുമായി ബന്ധിപ്പിക്കുമ്പോൾ, വിശ്വസനീയമായ ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ അല്ലെങ്കിൽ പുതുക്കൽ പ്രോസസ്സിംഗിന് reseller Account ബാലൻസ് വളരെ കുറവായാൽ നെറ്റ്‌വർക്ക് അഡ്മിനിസ്ട്രേറ്റർമാർക്ക് dismissible ബാലൻസ്-കുറവ് മുന്നറിയിപ്പ് ഇപ്പോൾ കാണാം.

ഈ അറിയിപ്പ് പ്രവർത്തന മുന്നറിയിപ്പായി കാണുക: കൂടുതൽ പണമടച്ച ഡൊമെയ്ൻ രജിസ്ട്രേഷനുകൾ സ്വീകരിക്കുന്നതിന് മുമ്പ് HostAfrica reseller ബാലൻസ് top up ചെയ്യുക. തുടർന്ന് രജിസ്ട്രേഷനും പുതുക്കലുകളും സാധാരണ പോലെ തുടരാനാകുമെന്ന് സ്ഥിരീകരിക്കാൻ Domain Seller ക്രമീകരണങ്ങളിലേക്കോ ഡൊമെയ്ൻ-നിരീക്ഷണ സ്ക്രീനിലേക്കോ മടങ്ങുക.

## AI provider connector ക്രമീകരണങ്ങൾ {#ai-provider-connector-settings}

AI provider connector ക്രമീകരണങ്ങൾ ഇപ്പോൾ പിന്തുണയുള്ള OAuth Account pools മാത്രം കാണിക്കുന്നു:

| Provider | സജ്ജീകരണ പ്രവാഹം |
|---|---|
| **Anthropic Max** | OAuth ബട്ടൺ ഉപയോഗിച്ച് ഒരു അല്ലെങ്കിൽ കൂടുതൽ Anthropic Max Account-കൾ ബന്ധിപ്പിക്കുക. sandboxed browser redirect സ്വയമേവ പൂർത്തിയാക്കാൻ കഴിയാത്തപ്പോൾ manual OAuth fallback ഉപയോഗിക്കുക. |
| **OpenAI ChatGPT/Codex** | അതേ OAuth pool പ്രവർത്തനപ്രവാഹത്തിലൂടെ ChatGPT Account-കൾ ബന്ധിപ്പിക്കുക. Account ബന്ധിപ്പിച്ചതിന് ശേഷം connector പിന്തുണയുള്ള പ്രവർത്തനങ്ങൾക്ക് ChatGPT Codex tool calls ഉപയോഗിക്കാം. |
| **Google AI Pro** | OAuth വഴി Google AI Pro Account-കൾ ബന്ധിപ്പിക്കുക, തുടർന്ന് Account പട്ടിക ഉടൻ പുതുക്കാത്ത പക്ഷം connector refresh ചെയ്യുക. |

Cursor Pro ഇനി പിന്തുണയുള്ള provider അല്ല. Cursor Pro setup fields അല്ലെങ്കിൽ connector paths പരാമർശിക്കുന്ന പഴയ ആന്തരിക സ്ക്രീൻഷോട്ടുകൾ, runbooks, അല്ലെങ്കിൽ onboarding steps നീക്കം ചെയ്യുക.

provider Account-കൾ ചേർക്കുമ്പോഴോ നീക്കം ചെയ്യുമ്പോഴോ, refresh ചെയ്യുന്നതോ ഇല്ലാതാക്കുന്നതോ ആയ Account-ക്കായി സാധുവായ ഇമെയിൽ വിലാസം നൽകുക. connector-backed പ്രവർത്തനങ്ങൾ പരീക്ഷിക്കുന്നതിന് മുമ്പ് provider ക്രമീകരണങ്ങൾ save ചെയ്യുക.
