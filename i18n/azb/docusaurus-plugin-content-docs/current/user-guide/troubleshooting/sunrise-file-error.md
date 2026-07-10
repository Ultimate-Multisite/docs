---
title: Sol-Aura Fayl Khafa
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise Dosyasının Kurulum Hatası {#error-installing-the-sunrise-file}

`sunrise.php` dosyası, WordPress'in kendisini başlatırken (bootstrapping) baktığı özel bir dosyadır. WordPress'in bu dosyayı algılayabilmesi için, **wp-content klasörü** içinde bulunması gerekir.

Ultimate Multisite'ı etkinleştirdiğinizde ve ekran görüntünüzdeki gibi kurulum sihirbazından geçtiğinizde, Ultimate Multisite bizim `sunrise.php` dosyamızı `wp-content` klasörüne kopyalamaya çalışır.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Çoğu zaman dosyayı başarıyla kopyalayabiliyor ve her şey düzgün çalışıyor. Ancak, eğer bir şey düzgün ayarlanmamışsa (örneğin, klasör izinleri), Ultimate Multisite'ın dosyayı kopyalayamadığı bir senaryo ile karşılaşabilirsiniz.

Ultimo'nun size verdiği hata mesajını okursanız, tam olarak burada ne olduğunu göreceksiniz: **Sunrise copy failed** (Sunrise kopyalama başarısız).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Bunu düzeltmek için, yapmanız gereken tek şey `sunrise.php` dosyasını `wp-ultimo` plugin klasörünün içine kopyalayıp, kendi `wp-content` klasörünüze yapıştırmaktır. Bunu yaptıktan sonra, sihirbaz sayfasını yeniden yükleyin ve kontrollerin geçmesi gerekir.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Her durumda, gelecekte sorun yaşamamak için (sadece Ultimate Multisite ile değil, diğer pluginler ve temalarla da) genel klasör izinlerinizi kontrol etmeniz faydalı olabilir.

WordPress'in bir parçası olan **Health Check tool** (ana site **admin panel > Tools > Health Check** üzerinden erişebilirsiniz), klasör izinlerinizin WordPress için sorun yaratabilecek değerlerde ayarlanıp ayarlanmadığını size söyleyebilir.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
