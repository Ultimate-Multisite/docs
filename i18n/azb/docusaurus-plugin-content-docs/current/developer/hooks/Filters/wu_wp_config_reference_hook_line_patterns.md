---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Sabit değerlerimizi nereye ekleyebileceğimizi bulmaya çalışırken üç farklı kalıp (pattern) kontrol ediyoruz:

1. `$table_prefix` değişkeninin tanımlamasını arıyoruz; 2. Daha karmaşık `$table_prefix` tanımlamalarını arıyoruz — örneğin, ortam değişkenleri (env variables) kullananları; 3. Bu da yoksa, 'Happy Publishing' yorumunu arıyoruz; 4. Bu da yoksa, dosyanın başlangıcına bakıyoruz. Anahtar, kalıbı temsil eder ve değer, eklenecek satır sayısını belirtir. Negatif bir satır sayısı, bulunan satırdan sonra yazmak yerine, öncesine yazılmasını sağlar.

### Kaynak {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) dosyasında 143. satırda tanımlanmıştır.
