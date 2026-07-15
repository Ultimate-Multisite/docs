---
id: wu_wp_config_reference_hook_line_patterns
title: Filtrační - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Kontrolujeme tři vzorce, když se snažíme zjistit, kam můžeme vložit naše konstanty:

1. Hledáme definici proměnné `$table_prefix`; 2. Hledáme složitější definice `$table_prefix` – ty, které používají prostředí (env) proměnné, například; 3. Pokud to není k dispozici, hledáme komentář 'Happy Publishing'; 4. Pokud i to není k dispozici, hledáme začátek souboru. Klíč představuje vzorec a hodnota počet řádků, které mají být přidány. Negativní počet řádků lze předat, aby se psalo před nalezeným řádkem, namísto psaní po něm.

### Zdroj {#source}

Definováno v [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) na řádku 143
