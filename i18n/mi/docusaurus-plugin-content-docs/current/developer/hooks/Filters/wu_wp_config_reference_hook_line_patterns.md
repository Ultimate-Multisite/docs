---
id: wu_wp_config_reference_hook_line_patterns
title: Tātari - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Tātari: wu_wp_config_reference_hook_line_patterns

Ka tirohia e mātou ngā tauira e toru i a mātou e ngana ana ki te kimi i te wāhi ka taea e mātou te whakauru i ā mātou pūmau:

1. We search for the $table_prefix variable definition; 2. We search for more complex $table_prefix definitions - the ones that    use env variables, for example; 3. If that's not available, we look for the 'Happy Publishing' comment; 4. If that's also not available, we look for the beginning of the file. The key represents the pattern and the value the number of lines to add. A negative number of lines can be passed to write before the found line, instead of writing after it.

### Pūtake {#source}

Kua tautuhia i [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) i te rārangi 143
