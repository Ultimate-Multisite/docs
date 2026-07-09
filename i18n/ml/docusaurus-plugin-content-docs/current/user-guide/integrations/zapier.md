---
title: Zapier സംയോജനം
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-നെ Zapier-ുമായി സംയോജിപ്പിക്കൽ {#integrating-ultimate-multisite-with-zapier}

ഒരു ലേഖനത്തിൽ, [Webhooks](webhooks.md) കുറിച്ചും 3rd party അപ്ലിക്കേഷനുകളുമായി സംയോജിപ്പിക്കാൻ അവ എങ്ങനെ ഉപയോഗിക്കാമെന്നും ഞങ്ങൾ ചർച്ച ചെയ്തിരുന്നു.

webhooks ഉപയോഗിക്കുന്നത് കുറച്ച് സങ്കീർണ്ണമാണ്. അതിന് കോഡിംഗിലും payloads പിടിക്കുന്നതിലും മികച്ച അറിവ് വേണം. അതിനെ മറികടക്കാനുള്ള ഒരു മാർഗമാണ് **Zapier** ഉപയോഗിക്കുന്നത്.

Zapier-ന് 5000+ ആപ്പുകളുമായി integration ഉണ്ട്. അതിലൂടെ വ്യത്യസ്ത അപ്ലിക്കേഷനുകൾ തമ്മിലുള്ള ആശയവിനിമയം എളുപ്പമാകുന്നു.

നിങ്ങളുടെ network-ൽ ഇവന്റുകൾ സംഭവിക്കുമ്പോൾ പ്രവർത്തിക്കുന്ന **Triggers** സൃഷ്ടിക്കാം (ഉദാ., ഒരു account സൃഷ്ടിക്കപ്പെടുകയും account_create event പ്രവർത്തിപ്പിക്കുകയും ചെയ്യുന്നു). അല്ലെങ്കിൽ പുറത്തെ ഇവന്റുകൾക്ക് പ്രതികരിച്ച് നിങ്ങളുടെ network-ൽ **Actions** സൃഷ്ടിക്കാം (ഉദാ., നിങ്ങളുടെ Ultimate Multisite network-ൽ ഒരു പുതിയ account membership സൃഷ്ടിക്കുക).

ഇത് സാധ്യമാകുന്നത് **Ultimate Multisite Zapier's triggers** ഉം actions ഉം [REST API](https://developer.ultimatemultisite.com/api/docs/) ഉപയോഗിച്ച് പ്രവർത്തിക്കുന്നതിനാലാണ്.

## എങ്ങനെ തുടങ്ങാം {#how-to-start}

ആദ്യം, Zapier app list-ൽ Ultimate Multisite തിരയുക. അല്ലെങ്കിൽ, നിങ്ങൾക്ക് [ഈ ലിങ്ക്](https://zapier.com/apps/wp-ultimo/integrations) ക്ലിക്ക് ചെയ്യാം.

നിങ്ങളുടെ dashboard-ിലേക്ക് പോയി പുതിയ Zap സജ്ജീകരിക്കാൻ ഇടത് sidebar-ൽ ഉള്ള **+** **Create Zap** ബട്ടൺ അമർത്തുക.

![Create Zap ബട്ടണോടുകൂടിയ Zapier dashboard](/img/admin/webhooks-list.png)

നിങ്ങളെ Zap creation page-ലേക്ക് തിരിച്ചു വിടും.

search box-ൽ "wp ultimo" എന്ന് ടൈപ്പ് ചെയ്യുക. **Beta** version option തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക.

![Zapier app list-ൽ WP Ultimo തിരയുന്നു](/img/admin/webhooks-list.png)

ഞങ്ങളുടെ app തിരഞ്ഞെടുത്തതിന് ശേഷം, ലഭ്യമായ event തിരഞ്ഞെടുക്കുക: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

ഇപ്പോൾ Zapier-ന് **നിങ്ങളുടെ network**-ലേക്ക് access നൽകണം. **Sign in** ക്ലിക്ക് ചെയ്താൽ **API credentials** ആവശ്യപ്പെടുന്ന ഒരു പുതിയ window തുറക്കും.

![API credentials-നുള്ള Zapier Sign in prompt](/img/admin/webhooks-list.png)

നിങ്ങളുടെ network admin panel-ലേക്ക് പോയി **Ultimate Multisite > Settings** > **API & Webhooks** എന്നതിലേക്ക് navigate ചെയ്ത് API Settings section കണ്ടെത്തുക.

ഈ connection പ്രവർത്തിക്കാൻ അത് ആവശ്യമായതിനാൽ **Enable API** option തിരഞ്ഞെടുക്കുക.

![API Settings, Enable API options എന്നിവയോടുകൂടിയ API and Webhooks settings](/img/admin/settings-api-webhooks.png)

API Key, API Secret fields-ലുള്ള **Copy to Clipboard** icon ഉപയോഗിച്ച് ആ values integration screen-ൽ paste ചെയ്യുക.

URL field-ൽ, protocol (HTTP അല്ലെങ്കിൽ HTTPS) ഉൾപ്പെടെ നിങ്ങളുടെ network-ന്റെ full URL നൽകുക.

![API Key, Secret, URL fields ഉള്ള Zapier integration screen](/img/admin/webhooks-list.png)

അടുത്ത ഘട്ടത്തിലേക്ക് പോകാൻ **Yes, Continue** button ക്ലിക്ക് ചെയ്യുക. എല്ലാം ശരിയായി പ്രവർത്തിച്ചാൽ, പുതുതായി connected account നിങ്ങൾക്ക് കാണാം! പുതിയ trigger സൃഷ്ടിക്കാൻ **Continue** ക്ലിക്ക് ചെയ്യുക.

## പുതിയ Trigger എങ്ങനെ സൃഷ്ടിക്കാം {#how-to-create-a-new-trigger}

ഇപ്പോൾ നിങ്ങളുടെ account connected ആയതിനാൽ ലഭ്യമായ events കാണാം. ഈ tutorial-ിനായി **payment_received** event തിരഞ്ഞെടുക്കാം.

![Zapier trigger-ൽ payment_received event തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

event തിരഞ്ഞെടുത്ത് **continue** ക്ലിക്ക് ചെയ്താൽ, ഒരു **test step** ദൃശ്യമാകും.

![trigger-ിനുള്ള Zapier test step](/img/admin/webhooks-list.png)

ഈ ഘട്ടത്തിൽ, നിങ്ങളുടെ Zap-ന് **ആ event-നുള്ള specific payload fetch ചെയ്യാൻ** കഴിയുമോ എന്ന് Zapier test ചെയ്യും. അതേ തരത്തിലുള്ള future events-ൽ, ഇതേ structure ഉള്ള information അയയ്ക്കും.

![payload സഹിതം Zapier trigger test വിജയകരമായി പൂർത്തിയായി](/img/admin/webhooks-list.png)

ഞങ്ങളുടെ tutorial-ൽ test **വിജയകരമായി പൂർത്തിയായി** കൂടാതെ payload example information മടക്കി നൽകി. actions സൃഷ്ടിക്കുമ്പോൾ നമ്മെ നയിക്കാൻ ഈ example information ഉപയോഗപ്രദമായിരിക്കും. നിങ്ങളുടെ trigger ഇപ്പോൾ സൃഷ്ടിച്ചിരിക്കുന്നു, മറ്റ് applications-ുമായി ബന്ധിപ്പിക്കാൻ തയ്യാറാണ്.

## Actions എങ്ങനെ സൃഷ്ടിക്കാം {#how-to-create-actions}

Actions, മറ്റ് triggers-ൽ നിന്നുള്ള information ഉപയോഗിച്ച് നിങ്ങളുടെ network-ൽ പുതിയ entries സൃഷ്ടിക്കുന്നു.

**action step സൃഷ്ടിക്കുന്നതിൽ** നിങ്ങൾ Ultimate Multisite **Beta**യും **Create Items on Ultimate Multisite** option-യും തിരഞ്ഞെടുക്കും.

![Create Items on Ultimate Multisite ഉപയോഗിച്ച് action സൃഷ്ടിക്കുന്നു](/img/admin/webhooks-list.png)

അടുത്ത ഘട്ടത്തിൽ, **How to start**-ൽ ചെയ്തതുപോലെ നിങ്ങൾ authentication സൃഷ്ടിക്കുകയോ, സൃഷ്ടിച്ച authentication തിരഞ്ഞെടുക്കുകയോ ചെയ്യും. ഈ tutorial-ൽ മുമ്പ് സൃഷ്ടിച്ച അതേ authentication തിരഞ്ഞെടുക്കും.

![Zapier action-നുള്ള authentication തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

### Action സജ്ജീകരിക്കൽ {#setting-up-the-action}

ഇതാണ് **action-ന്റെ main step**. ഇവിടെ കാര്യങ്ങൾ അല്പം വ്യത്യസ്തമാണ്. നിങ്ങൾ ആദ്യം തിരഞ്ഞെടുക്കുന്ന information **Item** ആണ്. Item എന്നത് നിങ്ങളുടെ network-ന്റെ **information model** ആണ്, ഉദാഹരണത്തിന് **Customers, Payments, Sites, Emails** എന്നിവയും മറ്റുള്ളവയും.

![Zapier action-നായി Item type തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

ഒരു item തിരഞ്ഞെടുക്കുമ്പോൾ, തിരഞ്ഞെടുത്ത item-നുള്ള **required and optional fields കൊണ്ടുവരാൻ form rearrange ചെയ്യും**.

ഉദാഹരണത്തിന്, **Customer** item തിരഞ്ഞെടുക്കുമ്പോൾ, network-ൽ പുതിയ Customer സൃഷ്ടിക്കാൻ പൂരിപ്പിക്കേണ്ടതെല്ലാം form fields കൊണ്ടുവരും.

![Zapier action setup-ലെ Customer item fields](/img/admin/webhooks-list.png)

**required** എന്ന് അടയാളപ്പെടുത്തിയ എല്ലാ fields-ഉം പൂരിപ്പിച്ച് continue ക്ലിക്ക് ചെയ്തതിന് ശേഷം, അവസാന screen പൂരിപ്പിച്ച fields-ഉം പൂരിപ്പിക്കാതെ വിട്ട fields-ഉം കാണിക്കും.

![പൂരിപ്പിച്ചും പൂരിപ്പിക്കാതെയും ഉള്ള fields കാണിക്കുന്ന Zapier action test](/img/admin/webhooks-list.png)

നിങ്ങളുടെ test പൂർത്തിയായി വിജയകരമായ ഉടൻ നിങ്ങളുടെ action configured ആകുന്നു. നിങ്ങളുടെ action-ന്റെ test ഉപയോഗിച്ച് item സൃഷ്ടിച്ചിട്ടുണ്ടോ എന്ന് നിങ്ങളുടെ network-ൽ പരിശോധിക്കുന്നതും പ്രധാനമാണ്.
