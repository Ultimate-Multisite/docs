---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Verifichiamo tre schemi quando cerchiamo di capire dove possiamo iniettare le nostre costanti:

1. Cerchiamo la definizione della variabile $table_prefix;  
2. Cerchiamo definizioni più complesse di $table_prefix - quelle che, ad esempio, utilizzano variabili d'ambiente;  
3. Se non è disponibile, cerchiamo il commento 'Happy Publishing';  
4. Se anche questo non è disponibile, cerchiamo l'inizio del file.  

La chiave rappresenta il pattern e il valore il numero di righe da aggiungere. Un numero negativo di righe può essere passato per scrivere prima della riga trovata, invece di scriverla dopo.

### Source

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
