---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filtre: wu_wp_config_reference_hook_line_patterns

Sabitlerimizi nereye enjekte edebileceğimizi anlamaya çalışırken üç farklı kalıp kontrol ediyoruz:

1. `$table_prefix` değişkeni tanımını arıyoruz; 2. Daha karmaşık `$table_prefix` tanımlarını arıyoruz – örneğin, ortam değişkenleri kullananları; 3. Bu mevcut değilse, 'Happy Publishing' yorumunu arıyoruz; 4. Bu da mevcut değilse, dosyanın başlangıcını arıyoruz. Anahtar, kalıbı, değer ise eklenecek satır sayısını temsil eder. Negatif bir satır sayısı, bulunan satırdan sonra yazmak yerine, ondan önce yazılmasını sağlayabilir.

### Kaynak

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) dosyasının 143. satırında tanımlanmıştır.
