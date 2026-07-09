---
id: wu_wp_config_reference_hook_line_patterns
title: Фільтр - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Мы праверяем тры ўзоры, калі спрабуе выраніць, дзе мы можам ўвесці свае канстанты:

1. Мы шукаем вызначэнне пераменнай `$table_prefix`; 2. Мы шукаем больш складаныя вызначэнні `$table_prefix` — тыя, што выкарыстоўваюць пераменныя аकर्ताвання (env variables), напрыклад; 3. Калі гэта недаступна, мы шукаем каментар «Happy Publishing»; 4. Калі гэта таксама недаступна, мы шукаем пачатак файла. Ключ прадстаўляе ўзор, а значэнне — колькасць ryadkaў, якія трэба дадаць. Негатыўнае колькасць ryadkaў можна перадаць, каб напісаць да знайшоўскага ryadka, замест таго, каб напісаць пасля яго.

### Source {#source}

Вызначана ў [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) на 143 ryдку.
