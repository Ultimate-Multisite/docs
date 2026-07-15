---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Szűrő: wu_wp_config_reference_hook_line_patterns

Négy mintát ellenőrzünk, hogy megtaláljuk, hogy hol tudjuk beilleszteni a konstanstinkat:

1.  Kereszük a `$table_prefix` változó definícióját; 2. Kereszünk összetettebb `$table_prefix` definíciókat – például azokat, amelyek környezeti (env) változókat használnak; 3. Ha ez nem található, akkor a 'Happy Publishing' kommentet keresjük; 4. Ha ez sem elérhető, akkor a fájl elejét nézzük. A kulcs a mintát jelöli, a hozzá tartozó érték pedig azt a sorok számát, amit hozzá kell adni. Negatív sor számot is átadhatunk, ha azt szeretnénk, hogy a megtalált sor előtt írja, és nem az után.

### Forrás {#source}

Definálva a [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) fájlban, 143-án.
