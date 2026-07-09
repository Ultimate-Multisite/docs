---
title: മൂന്നാം കക്ഷി മോഡ് മൈഗ്രേഷൻ
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode Migration (മൂന്നാം കക്ഷി മോഡ് മൈഗ്രേഷൻ) {#third-party-mode-migration}

Superdav AI Agent v1.12.0, മൂന്നാം കക്ഷി കഴിവുകൾ (third-party abilities) കൈകാര്യം ചെയ്യുന്ന രീതിയിൽ മാറ്റങ്ങൾ വരുത്തിയിരിക്കുന്നു. **മൂന്നാം കക്ഷി മോഡ് ഇപ്പോൾ ഓട്ടോ (auto) ആയി ഡിഫോൾട്ട് ചെയ്യും**, ഇത് മാനുവൽ കോൺഫിഗറേഷൻ ഇല്ലാതെ തന്നെ WordPress 7.0+ ൽ നാറ്റീവ് WordPress Abilities API സംയോജനം സാധ്യമാക്കുന്നു.

## എന്താണ് മാറ്റിയത്? (What Changed?) {#what-changed}

### v1.12.0-ന് മുമ്പ് (Before v1.12.0) {#before-v1120}

മൂന്നാം കക്ഷി കഴിവുകൾക്ക് മാനുവൽ കോൺഫിഗറേഷൻ ആവശ്യമായിരുന്നു:

- നിങ്ങൾ "third-party mode" എക്ലിസിറ്റായി ഓണാക്കേണ്ടതുണ്ടായിരുന്നു.
- കഴിവുകൾ ഒരു കസ്റ്റം രജിസ്ട്രിയിൽ നിന്ന് ലോഡ് ചെയ്യുമായിരുന്നു.
- WordPress Abilities API യുമായി സംയോജനം ഓപ്ഷണലായിരുന്നു.
- ലെഗസി മോഡ് (Legacy mode) ആണ് ഡിഫോൾട്ട് ആയിരുന്നത്.

### v1.12.0-ന് ശേഷം (After v1.12.0) {#after-v1120}

മൂന്നാം കക്ഷി കഴിവുകൾ സ്വയമേവ പ്രവർത്തിക്കുന്നു:

- third-party mode "auto" ആയി ഡിഫോൾട്ട് ചെയ്യും.
- കഴിവുകൾ WordPress Abilities API യുമായി നാറ്റീവായി സംയോജിക്കുന്നു.
- WordPress 7.0+ ൽ മാനുവൽ കോൺഫിഗറേഷൻ ആവശ്യമില്ല.
- പഴയ WordPress പതിപ്പുകൾക്കായി ലെഗസി മോഡ് ഇപ്പോഴും ലഭ്യമാണ്.

## ആരെയാണ് ഇത് ബാധിക്കുന്നത്? (Who Is Affected?) {#who-is-affected}

### പുതിയ ഇൻസ്റ്റാളേഷനുകൾ (WordPress 7.0+) {#new-installations-wordpress-70}

**പ്രവർത്തനങ്ങൾ ആവശ്യമില്ല.** third-party mode ഓട്ടോ ആയി ഓട്ടോമാറ്റിക്കായി സജ്ജമാക്കപ്പെട്ടിരിക്കുന്നു, കൂടാതെ കഴിവുകൾ പെട്ടെന്ന് ഉപയോഗിക്കാൻ തയ്യാറാണ് (out of the box).

### നിലവിലുള്ള ഇൻസ്റ്റാളേഷനുകൾ (Existing Installations) {#existing-installations}

**നിങ്ങളുടെ സെറ്റിംഗുകൾ സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു.** നിങ്ങൾ ഉപയോഗിച്ചിരുന്ന രീതി അനുസരിച്ച്:

- **Legacy mode**: നിങ്ങൾ ലെഗസി മോഡിൽ തുടരും (മാറ്റമൊന്നുമില്ല).
- **Manual third-party mode**: നിങ്ങൾ മാനുവൽ മോഡിൽ തുടരും (മാറ്റമൊന്നുമില്ല).
- **Auto mode**: നിങ്ങൾ ഓട്ടോ മോഡിൽ തുടരും (മാറ്റമൊന്നുമില്ല).

### 7.0-ന് മുമ്പുള്ള WordPress പതിപ്പുകൾ (WordPress Versions Before 7.0) {#wordpress-versions-before-70}

**ലെഗസി മോഡ് ഇപ്പോഴും ലഭ്യമാണ്.** നിങ്ങൾ WordPress 6.x അല്ലെങ്കിൽ അതിനുമുമ്പുള്ള പതിപ്പിലാണ് ഉപയോഗിക്കുന്നതെങ്കിൽ:

- third-party mode "legacy" ആയി ഡിഫോൾട്ട് ചെയ്യും.
- ആവശ്യമെങ്കിൽ നിങ്ങൾക്ക് third-party mode മാനുവലായി ഓണാക്കാൻ കഴിയും.
- നാറ്റീവ് Abilities API ഉപയോഗിക്കാൻ WordPress 7.0+ ലേക്ക് അപ്ഗ്രേഡ് ചെയ്യുക.

## മോഡുകൾ മനസ്സിലാക്കൽ (Understanding the Modes) {#understanding-the-modes}

### Auto Mode (പുതിയ ഡിഫോൾട്ട്) {#auto-mode-new-default}

**Auto mode** നാറ്റീവ് WordPress Abilities API സംയോജനം ഉപയോഗിക്കുന്നു:

- കഴിവുകൾ WordPress hooks വഴി രജിസ്റ്റർ ചെയ്യപ്പെടുന്നു.
- WordPress 7.0+ Abilities API യുമായി പൂർണ്ണമായ അനുയോജ്യത.
- third-party കഴിവുകൾ ഓട്ടോമാറ്റിക്കായി കണ്ടെത്തുന്നു (Automatic discovery).
- മാനുവൽ കോൺഫിഗറേഷൻ ആവശ്യമില്ല.

**എപ്പോൾ ഉപയോഗിക്കണം**: third-party കഴിവുകളുള്ള WordPress 7.0+

### Manual Mode {#manual-mode}

**Manual mode** എക്ലിസിറ്റ കോൺഫിഗറേഷൻ ആവശ്യപ്പെടുന്നു:

- ഏത് third-party കഴിവുകൾ ലോഡ് ചെയ്യണമെന്ന് നിങ്ങൾ വ്യക്തമാക്കുന്നു.
- ടെസ്റ്റിംഗിനോ അല്ലെങ്കിൽ പ്രത്യേക കഴിവുകൾ മാത്രം ലോഡ് ചെയ്യുന്നതിനോ ഇത് ഉപയോഗപ്രദമാണ്.
- കോൺഫിഗറേഷൻ ഫയലുകൾ എഡിറ്റ് ചെയ്യേണ്ടതുണ്ട്.
- കൂടുതൽ നിയന്ത്രണം ലഭിക്കുന്നു, പക്ഷേ കൂടുതൽ സജ്ജീകരണം ആവശ്യമാണ്.

**എപ്പോൾ ഉപയോഗിക്കണം**: ടെസ്റ്റിംഗ്, പ്രത്യേക കഴിവുകൾ ലോഡ് ചെയ്യൽ, അല്ലെങ്കിൽ കസ്റ്റം കോൺഫിഗറേഷനുകൾ.

### Legacy Mode {#legacy-mode}

**Legacy mode** പഴയ third-party കഴിവുകളുടെ സിസ്റ്റം ഉപയോഗിക്കുന്നു:

- കസ്റ്റം കഴിവ് രജിസ്ട്രി (WordPress Abilities API അല്ല).
- പഴയ WordPress പതിപ്പുകളുമായി പിന്നോട്ട് പൊരുത്തപ്പെടുന്നു (Backward compatible).
- നാറ്റീവ് WordPress സംയോജനം ഇല്ല.
- നിർത്തലാക്കിയിരിക്കുന്നു (Deprecated) എങ്കിലും പിന്തുണയ്ക്കുന്നു.

**എപ്പോൾ ഉപയോഗിക്കണം**: WordPress 6.x അല്ലെങ്കിൽ അതിനുമുമ്പ്, അല്ലെങ്കിൽ ലെഗസി അനുയോജ്യത ആവശ്യമായി വരുമ്പോൾ.

## നിങ്ങളുടെ നിലവിലെ മോഡ് പരിശോധിക്കൽ (Checking Your Current Mode) {#checking-your-current-mode}

### അഡ്മിൻ പാനലിലൂടെ (Via Admin Panel) {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** ലേക്ക് പോകുക.
2. **Third-Party Mode** എന്ന സെറ്റിംഗ് കണ്ടെത്തുക.
3. നിങ്ങളുടെ നിലവിലെ മോഡും അത് മാറ്റാനുള്ള ഓപ്ഷനുകളും നിങ്ങൾക്ക് കാണാം.

### കോഡിനവഴി (Via Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', അല്ലെങ്കിൽ 'legacy'
```

## നിങ്ങളുടെ മോഡ് മാറ്റുന്നത് എങ്ങനെ (Changing Your Mode) {#changing-your-mode}

### Auto Mode-ലേക്ക് മാറാൻ (Switch to Auto Mode) {#switch-to-auto-mode}

നിങ്ങൾ WordPress 7.0+ ൽ ആണ് ഉപയോഗിക്കുന്നതെങ്കിൽ, ഓട്ടോ മോഡ് ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ:

1. **Superdav AI Agent** → **Settings** ലേക്ക് പോകുക.
2. **Third-Party Mode** കണ്ടെത്തുക.
3. **Auto (WordPress Abilities API)** തിരഞ്ഞെടുക്കുക.
4. **Save** ക്ലിക്ക് ചെയ്യുക.

Superdav AI Agent സ്വയമേവ third-party കഴിവുകൾ കണ്ടെത്തി രജിസ്റ്റർ ചെയ്യും.

### Manual Mode-ലേക്ക് മാറാൻ (Switch to Manual Mode) {#switch-to-manual-mode}

ഏത് കഴിവുകൾ ലോഡ് ചെയ്യണമെന്ന് നിങ്ങൾക്ക് മാനുവലായി നിയന്ത്രിക്കണമെങ്കിൽ:

1. **Superdav AI Agent** → **Settings** ലേക്ക് പോകുക.
2. **Third-Party Mode** കണ്ടെത്തുക.
3. **Manual** തിരഞ്ഞെടുക്കുക.
4. **Save** ക്ലിക്ക് ചെയ്യുക.
5. ഏത് കഴിവുകൾ ലോഡ് ചെയ്യണമെന്ന് വ്യക്തമാക്കാൻ നിങ്ങളുടെ കോൺഫിഗറേഷൻ ഫയൽ എഡിറ്റ് ചെയ്യുക.

### Legacy Mode-ലേക്ക് മാറാൻ (Switch to Legacy Mode) {#switch-to-legacy-mode}

നിങ്ങൾക്ക് ലെഗസി അനുയോജ്യത ആവശ്യമുണ്ടെങ്കിൽ:

1. **Superdav AI Agent** → **Settings** ലേക്ക് പോകുക.
2. **Third-Party Mode** കണ്ടെത്തുക.
3. **Legacy** തിരഞ്ഞെടുക്കുക.
4. **Save** ക്ലിക്ക് ചെയ്യുക.

## Auto Mode-ൻ്റെ ഗുണങ്ങൾ (Benefits of Auto Mode) {#benefits-of-auto-mode}

### ഓട്ടോമാറ്റിക് കണ്ടെത്തൽ (Automatic Discovery) {#automatic-discovery}

കഴിവുകൾ സ്വയമേവ കണ്ടെത്തുന്നത്:

- ഇൻസ്റ്റാൾ ചെയ്ത plugins-ൽ നിന്ന്.
- സജീവമായ theme-ൽ നിന്ന്.
- must-use plugins-ൽ നിന്ന്.
- drop-in plugins-ൽ നിന്ന്.

മാനുവൽ രജിസ്ട്രേഷൻ ആവശ്യമില്ല.

### നാറ്റീവ് സംയോജനം (Native Integration) {#native-integration}

കഴിവുകൾ WordPress Abilities API യുമായി സംയോജിക്കുന്നു:

- WordPress core-മായി സ്ഥിരതയുള്ളത്.
- WordPress അഡ്മിൻ ഉപയോഗിക്കുമ്പോൾ പ്രവർത്തിക്കുന്നു.
- Abilities API ഉപയോഗിക്കുന്ന മറ്റ് plugins-ഉമായി പൊരുത്തപ്പെടുന്നു.
- WordPress വികസിക്കുമ്പോൾ ഭാവിയിലേക്ക് തയ്യാറാണ് (Future-proof).

### ലളിതമായ മാനേജ്മെന്റ് (Simplified Management) {#simplified-management}

- എഡിറ്റ് ചെയ്യേണ്ട കോൺഫിഗറേഷൻ ഫയലുകൾ ഇല്ല.
- മാനുവൽ കഴിവ് രജിസ്ട്രേഷൻ ആവശ്യമില്ല.
- Ability Visibility നിയന്ത്രണങ്ങൾ ഓട്ടോമാറ്റിക്കായി പ്രവർത്തിക്കുന്നു.
- വർഗ്ഗീകരിക്കാത്ത കഴിവുകളെക്കുറിച്ച് അഡ്മിൻ നോട്ടീസുകൾ മുന്നറിയിപ്പ് നൽകുന്നു.

### മികച്ച പ്രകടനം (Better Performance) {#better-performance}

- കഴിവുകൾ കാഷെ ചെയ്യുന്നു (cached).
- ആവശ്യാനുസരണം ലേസി-ലോഡ് ചെയ്യുന്നു (Lazy-loaded on demand).
- WordPress 7.0+ ന് വേണ്ടി ഒപ്റ്റിമൈസ് ചെയ്തിരിക്കുന്നു.

## മൈഗ്രേഷൻ പാത (Migration Path) {#migration-path}

### നിങ്ങൾ WordPress 6.x-ൽ ആണെങ്കിൽ (If You're on WordPress 6.x) {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ ലേക്ക് അപ്ഗ്രേഡ് ചെയ്യുക** (സജ്ജമാകുമ്പോൾ).
2. **Superdav AI Agent** v1.12.0+ ലേക്ക് അപ്ഡേറ്റ് ചെയ്യുക.
3. **third-party mode Auto ആക്കി മാറ്റുക** (ഓപ്ഷണൽ; ലെഗസി മോഡ് ഇപ്പോഴും പ്രവർത്തിക്കും).
4. ശരിയായ ആക്‌സസ് നിയന്ത്രണങ്ങൾ ഉറപ്പാക്കാൻ **ability visibility** അവലോകനം ചെയ്യുക.

### നിങ്ങൾ WordPress 7.0+ ൽ ആണെങ്കിൽ (If You're on WordPress 7.0+) {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** v1.12.0+ ലേക്ക് അപ്ഡേറ്റ് ചെയ്യുക.
2. **third-party mode Auto ആയി സജ്ജമാണോ എന്ന് പരിശോധിക്കുക** (ഇത് ഡിഫോൾട്ടായിരിക്കണം).
3. ശരിയായ ആക്‌സസ് നിയന്ത്രണങ്ങൾ ഉറപ്പാക്കാൻ **ability visibility** അവലോകനം ചെയ്യുക.
4. പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കാൻ **third-party കഴിവുകൾ ടെസ്റ്റ് ചെയ്യുക**.

## ട്രബിൾഷൂട്ടിംഗ് (Troubleshooting) {#troubleshooting}

### ഓട്ടോ മോഡിൽ കഴിവുകൾ ലോഡ് ആകുന്നില്ല (Abilities aren't loading in auto mode) {#abilities-arent-loading-in-auto-mode}

- നിങ്ങൾ WordPress 7.0+ ൽ ആണോ എന്ന് പരിശോധിക്കുക.
- third-party mode "Auto" ആയി സജ്ജമാണോ എന്ന് പരിശോധിക്കുക.
- കഴിവ് നൽകുന്ന plugin സജീവമാണോ എന്ന് പരിശോധിക്കുക.
- രജിസ്ട്രേഷൻ പിശകുകൾക്കായി WordPress error logs പരിശോധിക്കുക.

### എനിക്ക് ലെഗസി മോഡ് നിലനിർത്തണം (I want to keep legacy mode) {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** ലേക്ക് പോകുക.
- **Legacy** തിരഞ്ഞെടുക്കുക.
- **Save** ക്ലിക്ക് ചെയ്യുക.
- ലെഗസി മോഡ് പ്രവർത്തിക്കുന്നത് തുടരും.

### എൻ്റെ കസ്റ്റം കഴിവുകൾ കാണിക്കുന്നില്ല (My custom abilities aren't showing) {#my-custom-abilities-arent-showing}

- അവ WordPress hooks വഴി രജിസ്റ്റർ ചെയ്തിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക.
- അവ Abilities API ശരിയായി നടപ്പിലാക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക.
- WordPress error logs അവലോകനം ചെയ്യുക.
- രജിസ്റ്റർ ചെയ്ത എല്ലാ കഴിവുകളും കാണാൻ **Ability Visibility** അഡ്മിൻ പേജ് ഉപയോഗിക്കുക.

### "unclassified ability" നോട്ടീസുകൾ ലഭിക്കുന്നു (I'm getting "unclassified ability" notices) {#im-getting-unclassified-ability-notices}

- ഇത് പുതിയ third-party കഴിവുകൾക്ക് സാധാരണമാണ്.
- അഡ്മിൻ നോട്ടീസിൽ അവ അവലോകനം ചെയ്യുകയും വർഗ്ഗീകരിക്കുകയും ചെയ്യുക.
- വർഗ്ഗീകരണത്തെക്കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ അറിയാൻ **Ability Visibility** കാണുക.

## പിന്നോട്ട് പൊരുത്തത (Backward Compatibility) {#backward-compatibility}

### നിലവിലുള്ള കോൺഫിഗറേഷനുകൾ (Existing Configurations) {#existing-configurations}

നിങ്ങൾക്ക് നിലവിലുള്ള third-party കഴിവ് കോൺഫിഗറേഷനുകൾ ഉണ്ടെങ്കിൽ:

- **Legacy mode**: നിങ്ങളുടെ കോൺഫിഗറേഷൻ പ്രവർത്തിക്കുന്നത് തുടരും.
- **Manual mode**: നിങ്ങളുടെ കോൺഫിഗറേഷൻ പ്രവർത്തിക്കുന്നത് തുടരും.
- **Auto mode**: നിങ്ങളുടെ കോൺഫിഗറേഷൻ അവഗണിക്കപ്പെടുന്നു (auto mode ആണ് നിയന്ത്രിക്കുന്നത്).

നിങ്ങളുടെ കസ്റ്റം കോൺഫിഗറേഷൻ നിലനിർത്താൻ, Manual അല്ലെങ്കിൽ Legacy മോഡിൽ തുടരുക.

### നിർത്തലാക്കൽ ടൈംലൈൻ (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: ലെഗസി, മാനുവൽ മോഡുകൾ പൂർണ്ണമായി പിന്തുണയ്ക്കുന്നു.
- **v1.13.0+**: ലെഗസി മോഡിൽ നിർത്തലാക്കൽ നോട്ടീസുകൾ കാണിച്ചേക്കാം.
- **v2.0.0**: ലെഗസി മോഡ് നീക്കം ചെയ്യപ്പെട്ടേക്കാം (TBD).

## മികച്ച രീതികൾ (Best Practices) {#best-practices}

### പുതിയ ഇൻസ്റ്റാളേഷനുകൾക്ക് (For New Installations) {#for-new-installations}

- Auto mode ഉപയോഗിക്കുക (ഇതാണ് ഡിഫോൾട്ട്).
- Superdav AI Agent-നെ കഴിവുകൾ ഓട്ടോമാറ്റിക്കായി കണ്ടെത്താൻ അനുവദിക്കുക.
- ആക്‌സസ് നിയന്ത്രിക്കാൻ Ability Visibility ഉപയോഗിക്കുക.

### നിലവിലുള്ള ഇൻസ്റ്റാളേഷനുകൾക്ക് (For Existing Installations) {#for-existing-installations}

- കഴിയുമ്പോൾ WordPress 7.0+ ലേക്ക് അപ്ഗ്രേഡ് ചെയ്യുക.
- ലളിതമായ മാനേജ്മെന്റിനായി Auto mode-ലേക്ക് മാറുക.
- Ability Visibility ഉപയോഗിച്ച് കഴിവുകൾ അവലോകനം ചെയ്യുകയും വർഗ്ഗീകരിക്കുകയും ചെയ്യുക.

### കസ്റ്റം കഴിവുകൾക്ക് (For Custom Abilities) {#for-custom-abilities}

- WordPress hooks വഴി കഴിവുകൾ രജിസ്റ്റർ ചെയ്യുക (Abilities API).
- കസ്റ്റം കഴിവ് രജിസ്ട്രികൾ ഒഴിവാക്കുക.
- Auto mode-ൽ WordPress 7.0+ ൽ ടെസ്റ്റ് ചെയ്യുക.

## അടുത്ത ഘട്ടങ്ങൾ (Next Steps) {#next-steps}

1. **നിങ്ങളുടെ WordPress പതിപ്പ് പരിശോധിക്കുക**: Auto mode-ന് വേണ്ടി നിങ്ങൾ 7.0+ ൽ ആണോ എന്ന് ഉറപ്പാക്കുക.
2. **നിങ്ങളുടെ third-party mode അവലോകനം ചെയ്യുക**: Settings-ലേക്ക് പോയി നിങ്ങളുടെ നിലവിലെ മോഡ് പരിശോധിക്കുക.
3. **ആവശ്യമെങ്കിൽ അപ്ഡേറ്റ് ചെയ്യുക**: നിങ്ങൾ WordPress 7.0+ ൽ ആണെങ്കിൽ Auto mode-ലേക്ക് മാറുക.
4. **കഴിവുകൾ വർഗ്ഗീകരിക്കുക**: വർഗ്ഗീകരിക്കാത്ത ഏതെങ്കിലും കഴിവുകൾ അവലോകനം ചെയ്യുകയും വർഗ്ഗീകരിക്കുകയും ചെയ്യുക.
5. **ടെസ്റ്റ് ചെയ്യുക**: നിങ്ങളുടെ third-party കഴിവുകൾ ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കുക.

## ബന്ധപ്പെട്ട വിഷയങ്ങൾ (Related Topics) {#related-topics}

- **Ability Visibility**: ഏത് കഴിവുകൾ എവിടെയെല്ലാം പ്രദർശിപ്പിക്കണമെന്ന് നിയന്ത്രിക്കുക.
- **WordPress Abilities API**: നാറ്റീവ് WordPress കഴിവ് രജിസ്ട്രേഷനെക്കുറിച്ച് പഠിക്കുക.
- **Third-Party Ability Development**: Auto mode-മായി പ്രവർത്തിക്കുന്ന കഴിവുകൾ സൃഷ്ടിക്കുക.
