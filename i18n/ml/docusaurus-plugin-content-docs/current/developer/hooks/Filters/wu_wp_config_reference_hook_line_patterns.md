---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

നമ്മൾ നമ്മുടെ കോൺസ്റ്റന്റുകൾ എവിടെ ചേർക്കാൻ കഴിയുമെന്ന് മനസ്സിലാക്കാൻ മൂന്ന് പാറ്റേണുകൾ (patterns) പരിശോധിക്കുന്നു:

1.  നമ്മൾ `$table_prefix` എന്ന വേരിയബിൾ നിർവചനം (definition) തിരയുന്നു; 2.  കൂടുതൽ സങ്കീർണ്ണമായ `$table_prefix` നിർവചനങ്ങൾ — ഉദാഹരണത്തിന്, env വേരിയബിളുകൾ ഉപയോഗിക്കുന്നവ — എന്നിവ തിരയുന്നു; 3.  അത് ലഭ്യമല്ലെങ്കിൽ, നമ്മൾ 'Happy Publishing' എന്ന കമന്റ് തിരയുന്നു; 4.  അതും ലഭ്യമല്ലെങ്കിൽ, നമ്മൾ ഫയലിന്റെ തുടക്കം നോക്കുന്നു. ഇവിടെ കീ (key) എന്നത് പാറ്റേൺ ആണ്, മൂല്യം (value) എന്നത് ചേർക്കേണ്ട വരികളുടെ എണ്ണമാണ്. കണ്ടെത്തിയ വരിക്ക് ശേഷം എഴുതുന്നതിന് പകരം, അതിന് മുൻപ് എഴുതണമെങ്കിൽ നെഗറ്റീവ് വരികളുടെ എണ്ണം നൽകാവുന്നതാണ്.

### Source

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) എന്ന ഫയലിലെ 143-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
