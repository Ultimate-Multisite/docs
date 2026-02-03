---
id: wu_wp_config_reference_hook_line_patterns
title: Filtro - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filtro: wu_wp_config_reference_hook_line_patterns

Verificamos tres patrones al intentar determinar dónde podemos inyectar nuestras constantes:

1. Buscamos la definición de la variable $table_prefix; 2. Buscamos definiciones más complejas de $table_prefix, las que usan variables de entorno, por ejemplo; 3. Si no está disponible, buscamos el comentario 'Happy Publishing'; 4. Si tampoco está disponible, buscamos el inicio del archivo. La clave representa el patrón y el valor el número de líneas a añadir. Se puede pasar un número negativo de líneas para escribir antes de la línea encontrada, en lugar de después.

### Fuente

Definido en [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) en la línea 143
