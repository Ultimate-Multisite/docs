---
id: wu_wp_config_reference_hook_line_patterns
title: Filtro - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Verificamos três padrões ao tentar descobrir onde podemos injetar nossas constantes:

1. Procuramos pela definição da variável $table_prefix;
2. Procuramos por definições mais complexas de $table_prefix - as que usam variáveis de ambiente, por exemplo;
3. Se não houver, buscamos o comentário 'Happy Publishing';
4. Se isso também não estiver disponível, buscamos o início do arquivo. A chave representa o padrão e o valor o número de linhas a adicionar. Um número negativo de linhas pode ser passado para escrever antes da linha encontrada, em vez de depois.

### Source

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
