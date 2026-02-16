---
title: Closte-ൽ Sunrise Constant സജ്ജീകരിക്കൽ
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ൽ Sunrise constant true ആയി സെറ്റ് ചെയ്യുന്നത്

ചില ഹോസ്റ്റ് പ്രൊവൈഡർമാർ സുരക്ഷാ കാരണങ്ങളാൽ wp-config.php ഫയൽ ലോക്ക് ചെയ്തിരിക്കും. ഇതിനർത്ഥം, domain mapping-ഉം മറ്റ് ഫീച്ചറുകളും പ്രവർത്തിക്കാൻ ആവശ്യമായ constants ഉൾപ്പെടുത്തുന്നതിന് Ultimate Multisite-ന് ഫയൽ സ്വയം എഡിറ്റ് ചെയ്യാൻ കഴിയില്ല എന്നാണ്. Closte അത്തരത്തിലുള്ള ഒരു ഹോസ്റ്റാണ്.

എന്നിരുന്നാലും, wp-config.php-ലേക്ക് constants സുരക്ഷിതമായി ചേർക്കാൻ Closte ഒരു മാർഗം നൽകുന്നുണ്ട്. താഴെ പറയുന്ന ഘട്ടങ്ങൾ പിന്തുടരുക:

## Closte ഡാഷ്‌ബോർഡിൽ

ആദ്യം, [നിങ്ങളുടെ Closte അക്കൗണ്ടിലേക്ക് ലോഗിൻ ചെയ്യുക](https://app.closte.com/), Sites മെനു ഐറ്റത്തിൽ ക്ലിക്ക് ചെയ്യുക, തുടർന്ന് നിങ്ങൾ ഇപ്പോൾ പ്രവർത്തിക്കുന്ന സൈറ്റിലെ Dashboard ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

സ്ക്രീനിന്റെ ഇടതുവശത്ത് നിരവധി പുതിയ മെനു ഐറ്റങ്ങൾ കാണാം. ആ മെനു ഉപയോഗിച്ച് **Settings** പേജിലേക്ക് പോകുക:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

തുടർന്ന്, **Settings**-ൽ, WP-Config ടാബ് കണ്ടെത്തുക, അതിലെ "Additional wp-config.php content" ഫീൽഡ് കണ്ടെത്തുക:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ഇൻസ്റ്റാൾ ചെയ്യുന്ന സന്ദർഭത്തിൽ, നിങ്ങൾ ആ ഫീൽഡിൽ sunrise constant ചേർക്കേണ്ടതുണ്ട്. ഒരു പുതിയ വരി ചേർത്ത് താഴെയുള്ള കോഡ് പേസ്റ്റ് ചെയ്യുക. അതിനുശേഷം, **Save All** ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.

define('SUNRISE', true);

അത്രമാത്രം, നിങ്ങൾ തയ്യാറാണ്. Ultimate Multisite ഇൻസ്റ്റാൾ വിസാർഡിലേക്ക് മടങ്ങുക, പ്രോസസ് തുടരാൻ പേജ് റിഫ്രഷ് ചെയ്യുക.
