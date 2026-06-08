---
title: പ്ലഗിൻ ബിൽഡറും സാൻഡ്‌ബോക്സും
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 അവതരിപ്പിക്കുന്നത് **Plugin Builder & Sandbox System** ആണ്. ഇത് AI assistant-നെ ഉപയോഗിച്ച് നിങ്ങളുടെ network-ൽ WordPress plugins ഉണ്ടാക്കാനും, activate ചെയ്യാനും, manage ചെയ്യാനും അനുവദിക്കുന്നു — എല്ലാം ഒരു സുരക്ഷിതവും ഒറ്റപ്പെട്ടതുമായ sandbox environment-ലൂടെ.

## Overview

Plugin Builder, natural language requests-ന് മറുപടിയായി custom WordPress plugins എഴുതാൻ AI assistant-നെ പ്രാപ്തനാക്കുന്നു. ഉണ്ടാക്കിയ plugins, live site functionality-യെ ബാധിക്കുന്നതിന് മുമ്പ്, validation ചെയ്യുകയും, store ചെയ്യുകയും, ഒരു sandbox layer-നുള്ളിൽ activate ചെയ്യുകയും ചെയ്യുന്നു.

ഇതിന്റെ ഉപയോഗങ്ങൾ ഇവയാണ്:

- ഡെവലപ്പർമാരുടെ ഇടപെടൽ ഇല്ലാതെ ലഘുവായ utility plugins ഉണ്ടാക്കുക.
- WordPress hooks അല്ലെങ്കിൽ custom post types ആവശ്യമുള്ള ഫീച്ചറുകൾ പ്രോട്ടോടൈപ്പ് ചെയ്യുക.
- ബാച്ച് ഓപ്പറേഷനുകൾക്കായി കുറഞ്ഞ കാലയളവിലുള്ള automation scripts ഉണ്ടാക്കുക.

## AI വഴി ഒരു Plugin ഉണ്ടാക്കൽ (Generating a Plugin via AI)

ഒരു plugin ഉണ്ടാക്കാൻ, Gratis AI Agent chat interface തുറന്ന് നിങ്ങൾക്ക് എന്ത് വേണമെന്ന് വിവരിക്കുക. ഉദാഹരണത്തിന്:

> "dashboard-ൽ ഒരു custom admin notice එක ചേർക്കുന്ന ഒരു plugin ഉണ്ടാക്കുക."

AI ചെയ്യുന്നത് ഇതാണ്:

1. structured code generation ഉപയോഗിച്ച് plugin-ന്റെ PHP കോഡ് നൽകുന്നു.
2. സിന്റാക്സ് പിശകുകൾ (syntax errors) അല്ലെങ്കിൽ സുരക്ഷിതമല്ലാത്ത പാറ്റേണുകൾ (unsafe patterns) എന്നിവയ്ക്കായി ഔട്ട്പുട്ട് validate ചെയ്യുന്നു.
3. ഉണ്ടാക്കിയ plugin, sandbox store-ൽ save ചെയ്യുന്നു.
4. plugin-ന്റെ slug-ഉം, ഒരു **Activate in Sandbox** ബട്ടണും സഹിതം ഒരു confirmation നൽകുന്നു.

activate ചെയ്യുന്നതിന് മുമ്പ്, അതേ conversation thread-ൽ follow up ചെയ്ത് നിങ്ങൾക്ക് ഫലം മെച്ചപ്പെടുത്താൻ കഴിയും.

## Sandbox Activation

sandbox-ൽ ഒരു plugin activate ചെയ്യുന്നത്, അത് live network-ൽ activate ചെയ്യുന്നതിൽ നിന്ന് വ്യത്യസ്തമാണ്. sandbox:

- plugin-നെ ഒരു ഒറ്റപ്പെട്ട WordPress environment-ൽ (wp-env) പ്രവർത്തിപ്പിക്കുന്നു.
- ഏതെങ്കിലും PHP errors, warnings, അല്ലെങ്കിൽ hook conflicts എന്നിവ capture ചെയ്യുന്നു.
- activation ഫലം chat interface-ൽ റിപ്പോർട്ട് ചെയ്യുന്നു.

sandbox-ൽ ഒരു plugin activate ചെയ്യാൻ, AI chat response-ലെ **Activate in Sandbox** ബട്ടൺ ക്ലിക്ക് ചെയ്യുക, അല്ലെങ്കിൽ ഈ slash command ഉപയോഗിക്കുക:

```
/activate-plugin <plugin-slug>
```

activation വിജയിച്ചോ പരാജയപ്പെട്ടോ എന്ന് ഒരു status message സ്ഥിരീകരിക്കുന്നു. പരാജയപ്പെട്ടാൽ, error log chat thread-ൽ കാണിക്കും.

## Generated Plugins കൈകാര്യം ചെയ്യൽ (Managing Generated Plugins)

ഉണ്ടാക്കിയ plugins **Gratis AI Agent → Plugin Builder → Manage Plugins** എന്നതിൽ ലിസ്റ്റ് ചെയ്തിരിക്കുന്നു. ഈ സ്ക്രീനിൽ നിന്ന് നിങ്ങൾക്ക്:

| Action | Description |
|---|---|
| **View source** | മുഴുവൻ plugin PHP കോഡും പരിശോധിക്കുക. |
| **Re-activate in sandbox** | sandbox activation പരിശോധന വീണ്ടും പ്രവർത്തിപ്പിക്കുക. |
| **Install on network** | plugin live network-ലേക്ക് deploy ചെയ്യുക (മാനുവൽ confirmation ആവശ്യമാണ്). |
| **Update** | AI വഴി ഒരു പുതിയ version നൽകി, നിലവിലുള്ള കോഡിന് പകരമായി ഇത് ഉപയോഗിക്കുക. |
| **Delete** | plugin-നെ sandbox store-ൽ നിന്ന് നീക്കം ചെയ്യുക. ആദ്യം എല്ലാ സൈറ്റുകളിൽ നിന്നും ഇത് deactivate ചെയ്യും. |

:::warning
**Install on network** എന്നത് ഉണ്ടാക്കിയ plugin നിങ്ങളുടെ live WordPress multisite-ലേക്ക് deploy ചെയ്യുന്നു. മുന്നോട്ട് പോകുന്നതിന് മുമ്പ് plugin കോഡ് പരിശോധിക്കുക. live install പൂർത്തിയാക്കുന്നതിന് മുമ്പ് Gratis AI Agent confirmation ചോദിക്കും.
:::

## Network-ൽ ഒരു Generated Plugin ഇൻസ്റ്റാൾ ചെയ്യൽ (Installing a Generated Plugin on the Network)

ഒരു sandboxed plugin-ൽ നിങ്ങൾക്ക് സംതൃപ്തരാണെങ്കിൽ, അത് live network-ൽ ഇൻസ്റ്റാൾ ചെയ്യാൻ കഴിയും:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** എന്നതിലേക്ക് പോകുക.
2. deploy ചെയ്യാൻ ആഗ്രഹിക്കുന്ന plugin-ന്റെ അടുത്തുള്ള **Install on Network** ക്ലിക്ക് ചെയ്യുക.
3. ഡയലോഗ് സ്ഥിരീകരിക്കുക. plugin `wp-content/plugins/` ലേക്ക് ഇൻസ്റ്റാൾ ചെയ്യുകയും network-ൽ activate ചെയ്യുകയും ചെയ്യും.

വേറെ മാർഗ്ഗമായി, chat interface-ൽ ഈ slash command ഉപയോഗിക്കാം:

```
/install-plugin <plugin-slug>
```

## Plugin Updates

ഒരു generated plugin update ചെയ്യാൻ, ഒരു പുതിയ conversation-ൽ AI assistant-നെ മാറ്റത്തെക്കുറിച്ച് വിവരിക്കുക:

> "dashboard-notice plugin-നെ അഡ്മിനിസ്ട്രേറ്റർമാർക്ക് മാത്രമേ notice കാണിക്കൂ എന്ന് update ചെയ്യുക."

AI ഒരു പുതിയ version ഉണ്ടാക്കുകയും, അത് നിലവിലെ version-നൊപ്പം sandbox-ൽ പ്രത്യക്ഷപ്പെടുകയും ചെയ്യും. update ചെയ്യുന്നതിന് മുമ്പ് നിങ്ങൾ diff പരിശോധിച്ച് confirmation നൽകണം.

## HookScanner Integration

Plugin Builder, ഓരോ generated plugin-ഉം register ചെയ്യുന്ന hooks, filters എന്നിവ വിശകലനം ചെയ്യാൻ ഒരു സംയോജിത **HookScanner** ഉപയോഗിക്കുന്നു. HookScanner-ന്റെ ഔട്ട്പുട്ട് chat response-ൽ കാണിക്കുകയും ഇതിൽ ഉൾപ്പെടുന്നു:

- action hooks register ചെയ്തവ (`add_action` calls).
- filter hooks register ചെയ്തവ (`add_filter` calls).
- plugin dependencies-ൽ കണ്ടെത്തിയ ഏതെങ്കിലും hooks (ഇതിൽ `vendor/` ഉം `node_modules/` ഡയറക്‌ടറികളും ഒഴിവാക്കുന്നു).

ഇത് plugin activate ചെയ്യുന്നതിന് മുമ്പ് അതിന്റെ പെരുമാറ്റം മനസ്സിലാക്കാൻ നിങ്ങളെ സഹായിക്കുന്നു.

## Security Considerations

- Generated plugins, manully install ചെയ്ത plugins-ൽ നിന്ന് വേർതിരിച്ച് store ചെയ്യപ്പെടുന്നു. അവ network-ൽ explicit ആയി ഇൻസ്റ്റാൾ ചെയ്യുന്നതുവരെ standard WordPress plugin management screen വഴി ആക്സസ് ചെയ്യാൻ കഴിയില്ല.
- plugin ഫയലുകൾ എഴുതുമ്പോൾ directory traversal തടയാൻ sandbox path validation ഉപയോഗിക്കുന്നു.
- അപകടകരമായ function calls (ഉദാഹരണത്തിന്, `eval`, `exec`, `system`) ഉള്ള plugins validation സമയത്ത് flag ചെയ്യപ്പെടും, അതിനാൽ അവ activate ചെയ്യില്ല.
