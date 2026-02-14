---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

We check for three patterns when trying to figure our where we can inject our constants:

We controleren op drie patronen om te bepalen waar we onze constanten kunnen injecteren:

1. We search for the $table_prefix variable definition;  
   We zoeken naar de definitie van de $table_prefix-variabele;

2. We search for more complex $table_prefix definitions - the ones that use env variables, for example;  
   We zoeken naar complexere $table_prefix-definities – de die env‑variabelen gebruiken, bijvoorbeeld;

3. If that's not available, we look for the 'Happy Publishing' comment;  
   Als die niet beschikbaar is, zoeken we naar de 'Happy Publishing'-opmerking;

4. If that's also not available, we look for the beginning of the file.  
   Als die ook niet beschikbaar is, zoeken we naar het begin van het bestand.

The key represents the pattern and the value the number of lines to add. A negative number of lines can be passed to write before the found line, instead of writing after it.  
De sleutel vertegenwoordigt het patroon en de waarde het aantal regels dat moet worden toegevoegd. Een negatief aantal regels kan worden doorgegeven om vóór de gevonden regel te schrijven, in plaats van erna.

### Source

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
