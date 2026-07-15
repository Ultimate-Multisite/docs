---
id: wu_wp_config_reference_hook_line_patterns
title: Filtre - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filtr: wu_wp_config_reference_hook_line_patterns

Revisem tres patrons quan intentem determinar on podem injectar les nostres constants:

1. Busquem la definició de la variable `$table_prefix`; 2. Busquem definicions més complexes de `$table_prefix` —aquelles que utilitzen variables d'entorn, per exemple; 3. Si això no està disponible, busquem el comentari 'Happy Publishing'; 4. Si això tampoc està disponible, busquem l'inici del fitxer. La clau representa el patron i el valor, el nombre de línies a afegir. Es pot passar un nombre negatiu de línies per escriure abans de la línia trobada, en lloc d'escriure després.

### Font {#source}

Definit in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) a la línia 143
