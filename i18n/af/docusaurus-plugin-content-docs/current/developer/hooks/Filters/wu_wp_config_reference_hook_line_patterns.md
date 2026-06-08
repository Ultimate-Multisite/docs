---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Ons kyk na drie patrone wanneer ons probeer om uit te vind waar ons ons konstantes kan insit:

1. Ons soek na die `$table_prefix` veranderingsdefinisie;
2. Ons soek na meer komplekse `$table_prefix` definisies – dié wat omgewingsvariabels gebruik, byvoorbeeld;
3. As dit nie beskikbaar is nie, kyk ons na die 'Happy Publishing' kommentaar;
4. As dit ook nie beskikbaar is nie, kyk ons na die begin van die lêer. Die sleutel verteenwoordig die patroon en die waarde die aantal lyne wat bygevoeg moet word. 'n Negatiewe aantal lyne kan oorgedra word om te skryf *voor* die gevind lyn, in plaas daarvan om dit ná te skryf.

### Bron

Gedefinieer in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) by lyn 143
