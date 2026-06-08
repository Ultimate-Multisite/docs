---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Vi kontrollerar efter tre mönster när vi försöker ta reda på var vi kan infoga våra konstanter:

1. Vi söker efter definitionen av variabeln `$table_prefix`; 2. Vi söker efter mer komplexa definitioner av `$table_prefix` – de som använder miljövariabler, till exempel; 3. Om det inte finns tillgängligt, letar vi efter kommentaren 'Happy Publishing'; 4. Om det inte finns tillgängligt heller, letar vi efter början av filen. Nyckeln representerar mönstret och värdet representerar antalet rader som ska läggas till. Ett negativt antal rader kan skickas för att skriva före den hittade raden, istället för att skriva efter den.

### Källa

Definieras i [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) på rad 143
