---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Tinitingnan namin ang tatlong (3) pattern para malaman kung saan namin pwedeng i-inject ang aming mga constants:

1. Naghahanap kami ng pagkakadefine ng variable na `$table_prefix`; 2. Naghahanap kami ng mas kumplikadong pagkakadefine ng `$table_prefix` — yung mga gumagamit ng env variables, halimbawa; 3. Kung wala iyon, hahanapin namin ang comment na 'Happy Publishing'; 4. Kung wala pa rin iyon, hahanapin namin ang simula ng file. Ang key ay kumakatawan sa pattern at ang value naman ay ang bilang ng linya na idadagdag. Maaari ring ipasa ang negatibong bilang ng linya para magsulat bago ang nakitang linya, sa halip na pagkatapos nito.

### Source

Nakatakda sa [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) sa linya 143
