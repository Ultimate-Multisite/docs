---
id: wu_wp_config_reference_hook_line_patterns
title: Nzacha - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Nzacha: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Anyị na-enyocha ụkpụrụ atọ mgbe anyị na-agbalị ịchọpụta ebe anyị nwere ike itinye constants anyị:

1. We search for the $table_prefix variable definition; 2. We search for more complex $table_prefix definitions - the ones that    use env variables, for example; 3. If that's not available, we look for the 'Happy Publishing' comment; 4. If that's also not available, we look for the beginning of the file. The key represents the pattern and the value the number of lines to add. A negative number of lines can be passed to write before the found line, instead of writing after it.

### Isi mmalite {#source}

A kọwara ya na [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) na ahịrị 143
