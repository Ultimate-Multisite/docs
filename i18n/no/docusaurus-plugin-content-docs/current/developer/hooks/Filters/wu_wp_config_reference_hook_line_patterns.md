---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Vi sjekker etter tre mønstre når vi prøver å finne ut hvor vi kan injeksjonere konstantene våre:

1. Vi søker etter definisjonen av variabelen `$table_prefix`; 2. Vi søker etter mer komplekse `$table_prefix`-definisjoner – de som for eksempel bruker miljøvariabler (env variables); 3. Hvis dette ikke er tilgjengelig, ser vi etter kommentaren 'Happy Publishing'; 4. Hvis dette heller ikke er tilgjengelig, ser vi etter begynnelsen av filen. Nøkkelen representerer mønsteret, og verdien er antall linjer som skal legges til. Et negativt antall linjer kan sendes for å skrive før den funne linjen, i stedet for å skrive etter den.

### Kilde {#source}

Definert i [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) på linje 143
