---
id: wu_wp_config_reference_hook_line_patterns
title: ફિલ્ટર - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

અમે ક્યાં અમારા કોન્સ્ટન્ટ્સ દાખલ (inject) કરી શકીએ તે જાણવા માટે ત્રણ પૅટર્ન (patterns) તપાસીએ છીએ:

1. અમે `$table_prefix` વેરિએબલની વ્યાખ્યા (definition) શોધીએ છીએ; 2. અમે વધુ જટિલ `$table_prefix` વ્યાખ્યાઓ શોધીએ છીએ - જે એન્વાયર્નમેન્ટ વેરિએબલ્સ (env variables) નો ઉપયોગ કરે છે, ઉદાહરણ તરીકે; 3. જો તે ઉપલબ્ધ ન હોય, તો અમે 'Happy Publishing' કોમેન્ટ શોધીએ છીએ; 4. જો તે પણ ઉપલબ્ધ ન હોય, તો અમે ફાઇલની શરૂઆત શોધીએ છીએ. અહીં કી (key) પૅટર્ન દર્શાવે છે અને વેલ્યુ (value) ઉમેરવાની લાઈનોની સંખ્યા દર્શાવે છે. જો લાઈનોની સંખ્યા નકારાત્મક હોય, તો તે શોધેલી લાઈન પછી લખવાને બદલે, તે લાઈન પહેલા લખવા માટે આપી શકાય છે.

### Source {#source}

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
