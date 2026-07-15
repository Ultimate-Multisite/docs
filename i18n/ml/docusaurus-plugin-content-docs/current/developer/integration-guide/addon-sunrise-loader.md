---
title: അഡോൺ സൺറൈസ് ഫയൽ ലോഡർ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0, add-ons-നുള്ളതും കസ്റ്റം MU-plugin ഇന്റഗ്രേഷനുകൾക്കുമുള്ള ഒരു sunrise extension loader ആണ് ചേർക്കുന്നത്. ഇത്, `wp-content/sunrise.php` എന്ന ഫയൽ എഡിറ്റ് ചെയ്യാതെ, WordPress sunrise bootstrapping സമയത്ത് പ്രവർത്തിക്കാൻ സഹായിക്കുന്നു.

## എപ്പോൾ ഉപയോഗിക്കണം {#when-to-use-it}

കസ്റ്റം ഡൊമെയ്ൻ റൂട്ടിംഗ്, ഹോസ്റ്റ്-സ്പെസിഫിക് റിക്വസ്റ്റ് ഹാൻഡിലിംഗ്, അല്ലെങ്കിൽ early network bootstrap ക്രമീകരണങ്ങൾ പോലുള്ള കാര്യങ്ങൾ സാധാരണ പ്ലഗിനുകൾ ലോഡ് ചെയ്യുന്നതിന് മുമ്പ് പ്രവർത്തിക്കേണ്ട ഒരു ഇന്റഗ്രേഷൻ ആണെങ്കിൽ, ഒരു sunrise extension ഉപയോഗിക്കുക.

സാധാരണ ഇന്റഗ്രേഷനുകൾക്ക്, സാധാരണ WordPress plugins, MU-plugins, കൂടാതെ ഡോക്യുമെന്റ് ചെയ്ത Ultimate Multisite hooks എന്നിവ ഉപയോഗിക്കുന്നതാണ് നല്ലത്. Sunrise കോഡ് വളരെ നേരത്തെ പ്രവർത്തിക്കുന്നതിനാൽ, അത് ചെറുതും, സുരക്ഷിതവും (defensive), മറ്റ് ഡിപൻഡൻസികളില്ലാത്തതുമായിരിക്കണം.

## ഫയൽ നാമകരണ രീതി (File naming convention) {#file-naming-convention}

`ultimate-multisite-` എന്ന പേരുകൊണ്ട് തുടങ്ങുന്ന ഒരു addon ഡയറക്‌ടറിയിൽ `sunrise.php` എന്ന് പേരുള്ള ഒരു PHP ഫയൽ ഉണ്ടാക്കുക:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ഈ പാറ്റേൺ ഉപയോഗിച്ച് plugins ഡയറക്‌ടറി സ്കാൻ ചെയ്യുകയാണ് loader ചെയ്യുന്നത്:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

മാച്ച് ചെയ്യുന്ന ഫയലുകൾ addon പാത്തിന്റെ അക്ഷരമാലാ ക്രമമനുസരിച്ച് (alphabetical order) ലോഡ് ചെയ്യും.

## ഫയൽ എവിടെ വെക്കണം {#where-to-place-the-file}

sunrise സ്വഭാവം (sunrise behaviour) ഉള്ള addon-ന്റെ റൂട്ട് ഡയറക്‌ടറിയിലാണ് ഫയൽ വെക്കേണ്ടത്:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ഈ സ്കാൻ ചെയ്യുന്നത് `WP_CONTENT_DIR` നെ ആശ്രയിച്ചാണ്, നിലവിലെ `WP_PLUGIN_DIR` നെ അല്ല. multi-tenancy പോലുള്ള സാഹചര്യങ്ങളിൽ അല്ലെങ്കിൽ മറ്റ് early bootstrap കോഡുകൾ sunrise സമയത്ത് plugin ഡയറക്‌ടറി കൺസ്റ്റന്റുകൾ മാറ്റുമ്പോൾ ഇത് സ്ഥിരതയോടെ നിലനിർത്താൻ ഇത് സഹായിക്കുന്നു.

ഉണ്ടാക്കിയ `wp-content/sunrise.php` ഫയൽ നേരിട്ട് എഡിറ്റ് ചെയ്യരുത്. Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുകയും അപ്ഡേറ്റ് ചെയ്യുകയും ചെയ്യുന്ന core sunrise ഫയൽ ഫോർക്ക് ചെയ്യാതെ, കസ്റ്റം കോഡ് ഉപയോഗിച്ച് sunrise സ്വഭാവം വികസിപ്പിക്കാൻ loader ഇത് അനുവദിക്കുന്നു.

## ലഭ്യമായ Hooks, Filters {#hooks-and-filters-available}

Addon sunrise ഫയലുകൾ Ultimate Multisite domain mapping ലോഡ് ചെയ്തതിന് ശേഷവും, WordPress `ms_loaded` വിടുകയും ചെയ്യുന്നതിന് മുമ്പുമാണ് പ്രവർത്തിക്കുന്നത്. ഈ സമയത്ത് ഒരു sunrise ഫയൽക്ക് ചെയ്യാൻ കഴിയുന്നത്:

- `$current_site` ഉം `$current_blog` ഉം വായിക്കുകയോ അല്ലെങ്കിൽ മാറ്റിസ്ഥാപിക്കുകയോ ചെയ്യാം;
- ഡാറ്റാബേസ് കോൺഫിഗറേഷൻ ലോഡ് ചെയ്ത ശേഷം `$wpdb` ആക്സസ് ചെയ്യാം;
- ആവശ്യമുള്ളപ്പോൾ `BLOG_ID_CURRENT_SITE` പോലുള്ള sunrise-സമയ കൺസ്റ്റന്റുകൾ നിർവചിക്കാം;
- multi-tenancy ഇന്റഗ്രേഷനുകൾ ഉപയോഗിക്കുന്ന റൂട്ടിംഗ് സ്റ്റേറ്റ് ഉൾപ്പെടെ Ultimate Multisite sunrise helper state വായിക്കാം.

sunrise loader പൂർത്തിയാക്കിയ ശേഷം Ultimate Multisite `wu_sunrise_loaded` വിടുന്നു. sunrise bootstrap പൂർത്തിയായതിന് ശേഷവും എന്നാൽ sunrise life cycle-ൽ തന്നെ ഉൾപ്പെടുന്ന കോഡിനായി ആ action ഉപയോഗിക്കുക.

sunrise ഘട്ടത്തിൽ ഇതിനകം ലോഡ് ചെയ്തിട്ടുള്ള ഫംഗ്ഷനുകൾ മാത്രമേ വിളിക്കാവൂ. ഡാറ്റാബേസ് ഉപയോഗം കൂടുതലുള്ള ജോലികൾ, template rendering, HTTP requests, സാധാരണ plugin load order പൂർത്തിയായി എന്ന് അനുമാനിക്കുന്ന കോഡ് എന്നിവ ഒഴിവാക്കുക.

## ഏറ്റവും ലളിതമായ ഉദാഹരണം (Minimal example) {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ഫയൽ ഡിപ്ലോയ് ചെയ്ത ശേഷം, രണ്ട് പാതകളും (paths) ശരിയായി bootstrap ചെയ്യുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കാൻ ഒരു മാപ്പ് ചെയ്ത ഡൊമെയ്നും (mapped domain) ഒരു മാപ്പ് ചെയ്യാത്ത main-site URL ഉം ലോഡ് ചെയ്യുക.
