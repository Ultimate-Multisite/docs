---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Wir prüfen drei Muster, wenn wir herausfinden wollen, wo wir unsere Konstanten einfügen können:

1. Wir suchen nach der Definition der Variable $table_prefix; 2. Wir suchen nach komplexeren $table_prefix-Definitionen – denjenigen, die Umgebungsvariablen verwenden, zum Beispiel; 3. Falls dies nicht verfügbar ist, suchen wir nach dem Kommentar 'Happy Publishing'; 4. Falls auch dieser nicht verfügbar ist, suchen wir nach dem Anfang der Datei. Der Schlüssel repräsentiert das Muster und der Wert die Anzahl der Zeilen, die hinzugefügt werden sollen. Eine negative Zeilenzahl kann übergeben werden, um vor der gefundenen Zeile zu schreiben, anstatt danach.

### Quelle

Definiert in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) bei Zeile 143
