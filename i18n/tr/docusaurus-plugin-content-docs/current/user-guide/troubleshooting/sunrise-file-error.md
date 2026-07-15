---
title: Sunrise Dosyası Hatası
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise Dosyası Yüklenirken Oluşan Hata

sunrise.php dosyası, WordPress'in başlatma sürecinde aradığı özel bir dosyadır. WordPress'in sunrise.php dosyasını algılayabilmesi için bu dosyanın **wp-content klasörünün** içinde bulunması gerekir.

Ultimate Multisite'ı etkinleştirip aşağıdaki ekran görüntüsünde gördüğünüz kurulum sihirbazını takip ettiğinizde, Ultimate Multisite bizim sunrise.php dosyamızı wp-content klasörüne kopyalamaya çalışır.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Çoğu zaman dosyayı başarıyla kopyalayabiliriz ve her şey sorunsuz çalışır. Ancak bir şeyler düzgün ayarlanmamışsa (örneğin klasör izinleri), Ultimate Multisite'ın dosyayı kopyalayamadığı bir durumla karşılaşabilirsiniz.

Ultimo'nun verdiği hata mesajını okursanız, tam olarak burada ne olduğunu göreceksiniz: **Sunrise kopyalama başarısız oldu**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Bunu düzeltmek için wp-ultimo eklenti klasörünün içindeki sunrise.php dosyasını kopyalayıp wp-content klasörünüze yapıştırmanız yeterlidir. Bunu yaptıktan sonra sihirbaz sayfasını yenileyin, kontroller başarılı olmalıdır.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Her halükarda, ileride sorunlarla karşılaşmamak için (sadece Ultimate Multisite ile değil, diğer eklentiler ve temalarla da) klasör izinlerinizi genel olarak kontrol etmeniz faydalı olacaktır.

WordPress'in bir parçası olan **Site Sağlığı aracı** (ana sitenizin **yönetim paneli > Araçlar > Site Sağlığı** yolundan erişebilirsiniz), WordPress'te sorunlara yol açabilecek değerlere ayarlanmış klasör izinleriniz olup olmadığını size bildirebilir.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
