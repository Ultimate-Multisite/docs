---
id: wu_wp_config_reference_hook_line_patterns
title: Filtr - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filtr: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Sprawdzamy trzy wzorce, aby ustalić, gdzie możemy wstrzyknąć nasze stałe:

1. Szukamy definicji zmiennej `$table_prefix`; 2. Szukamy bardziej złożonych definicji `$table_prefix` – tych, które używają zmiennych środowiskowych, na przykład; 3. Jeśli to nie jest dostępne, szukamy komentarza 'Happy Publishing'; 4. Jeśli to również nie jest dostępne, szukamy początku pliku. Klucz reprezentuje wzorzec, a wartość liczbę linii do dodania. Można przekazać ujemną liczbę linii, aby zapisać treść przed znalezioną linią, zamiast po niej.

### Źródło {#source}

Zdefiniowane w [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) na linii 143
