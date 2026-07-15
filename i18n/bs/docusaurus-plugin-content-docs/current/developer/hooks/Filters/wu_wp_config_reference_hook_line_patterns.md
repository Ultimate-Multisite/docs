---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Provjeravamo tri obrasca kada pokušavamo utvrditi gdje možemo ubaciti naše konstante:

1. Tražimo definiciju varijable `$table_prefix`; 2. Tražimo složenije definicije `$table_prefix` – one koje koriste env varijable, na primjer; 3. Ako to nije dostupno, tražimo komentar 'Happy Publishing'; 4. Ako to također nije dostupno, tražimo početak datoteke. Ključ predstavlja obrazac, a vrijednost broj linija koje treba dodati. Negativan broj linija može se proslijediti kako bi se napisalo prije pronađene linije, umjesto da se piše poslije nje.

### Izvor {#source}

Definisano je u [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) na liniji 143
