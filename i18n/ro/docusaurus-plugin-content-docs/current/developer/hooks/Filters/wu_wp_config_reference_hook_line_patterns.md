---
id: wu_wp_config_reference_hook_line_patterns
title: Filtru - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Verificăm trei tipuri de pattern-uri pentru a determina unde putem injecta constantele noastre:

1. Căutăm definiția variabilei `$table_prefix`; 2. Căutăm definiții mai complexe ale variabilei `$table_prefix` — cele care folosesc variabile de mediu, de exemplu; 3. Dacă acestea nu sunt disponibile, căutăm comentariul 'Happy Publishing'; 4. Dacă nici acesta nu este disponibil, căutăm începutul fișierului. Cheia reprezintă pattern-ul, iar valoarea reprezintă numărul de linii de adăugat. Se poate transmite un număr negativ de linii pentru a scrie înainte de linia găsită, în loc să scrie după ea.

### Sursă

Definit în [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) la linia 143
