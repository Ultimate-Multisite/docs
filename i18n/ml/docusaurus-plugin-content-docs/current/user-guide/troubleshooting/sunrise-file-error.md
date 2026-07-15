---
title: Sunrise ഫയൽ പിശക്
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ഫയൽ ഇൻസ്റ്റാൾ ചെയ്യുമ്പോഴുള്ള പിശക്

sunrise.php ഫയൽ WordPress ബൂട്ട്‌സ്ട്രാപ്പ് ചെയ്യുമ്പോൾ തിരയുന്ന ഒരു പ്രത്യേക ഫയലാണ്. WordPress-ന് sunrise.php ഫയൽ കണ്ടെത്താൻ കഴിയണമെങ്കിൽ, അത് **wp-content ഫോൾഡറിനുള്ളിൽ** സ്ഥിതി ചെയ്യണം.

Ultimate Multisite ആക്ടിവേറ്റ് ചെയ്ത് സ്ക്രീൻഷോട്ടിൽ കാണുന്നതുപോലുള്ള സെറ്റപ്പ് വിസാർഡിലൂടെ കടന്നുപോകുമ്പോൾ, Ultimate Multisite ഞങ്ങളുടെ sunrise.php ഫയൽ wp-content ഫോൾഡറിലേക്ക് കോപ്പി ചെയ്യാൻ ശ്രമിക്കും.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

മിക്കപ്പോഴും, ഫയൽ വിജയകരമായി കോപ്പി ചെയ്യാനും എല്ലാം ശരിയായി പ്രവർത്തിക്കാനും കഴിയാറുണ്ട്. എന്നിരുന്നാലും, എന്തെങ്കിലും ശരിയായി സജ്ജീകരിച്ചിട്ടില്ലെങ്കിൽ (ഉദാഹരണത്തിന്, ഫോൾഡർ പെർമിഷനുകൾ), Ultimate Multisite-ന് ഫയൽ കോപ്പി ചെയ്യാൻ കഴിയാത്ത സാഹചര്യം നേരിടേണ്ടി വന്നേക്കാം.

Ultimo നൽകുന്ന പിശക് സന്ദേശം വായിച്ചാൽ, ഇവിടെ എന്താണ് സംഭവിച്ചതെന്ന് കൃത്യമായി മനസ്സിലാകും: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ഇത് പരിഹരിക്കാൻ, wp-ultimo plugin ഫോൾഡറിനുള്ളിലെ sunrise.php ഫയൽ കോപ്പി ചെയ്ത് wp-content ഫോൾഡറിൽ പേസ്റ്റ് ചെയ്താൽ മതി. അത് ചെയ്ത ശേഷം, വിസാർഡ് പേജ് റീലോഡ് ചെയ്യുക, എല്ലാ പരിശോധനകളും പാസ്സാകും.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> എന്തായാലും, ഭാവിയിൽ പ്രശ്നങ്ങൾ ഒഴിവാക്കാൻ നിങ്ങളുടെ ഫോൾഡർ പെർമിഷനുകൾ ഒന്ന് പൊതുവായി പരിശോധിക്കുന്നത് നല്ലതാണ് (Ultimate Multisite-ന് മാത്രമല്ല, മറ്റ് plugins-നും themes-നും ഇത് ബാധകമാണ്).

WordPress-ന്റെ ഭാഗമായ **Health Check ടൂൾ** (നിങ്ങളുടെ മെയിൻ സൈറ്റ് **admin panel > Tools > Health Check** വഴി ആക്സസ് ചെയ്യാം) ഉപയോഗിച്ച്, WordPress-ൽ പ്രശ്നങ്ങൾ ഉണ്ടാക്കിയേക്കാവുന്ന ഫോൾഡർ പെർമിഷൻ മൂല്യങ്ങൾ ഉണ്ടോ എന്ന് അറിയാൻ കഴിയും.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
