---
title: Gün doğumu dosyası hatası
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise Dosyasını Kurarken Hata Oluşması

sunrise.php dosyası, WordPress kendini başlatırken aradığı özel bir dosyadır. WordPress'in sunrise.php dosyasını algılayabilmesi için bu dosyanın **wp-content klasörü** içinde bulunması gerekir.

Ultimate Multisite'ı etkinleştirip ekran görüntüsündeki gibi kurulum sihirbazından geçtiğinizde, Ultimate Multisite bizim sunrise.php dosyamızı wp-content klasörüne kopyalamaya çalışır.

<!-- Ekran görüntüsü mevcut değil: sunrise.php kurulum adımını gösteren kurulum sihirbazı sayfası -->

Çoğu zaman dosyayı başarıyla kopyalayabiliyor ve her şey yolunda gidiyor. Ancak, bir şey doğru ayarlanmamışsa (örneğin klasör izinleri gibi), Ultimate Multisite'ın dosyayı kopyalamakta zorlandığı bir senaryoyla karşılaşabilirsiniz.

Ultimo size verdiği hata mesajını okuduğunuzda, burada tam olarak ne olduğunu göreceksiniz: **Sunrise kopyalama başarısız oldu**.

<!-- Ekran görüntüsü mevcut değil: Sunrise kopyalamasının başarısız olduğunu gösteren hata mesajı -->

Bunu düzeltmek için yapmanız gereken çok basit: wp-ultimo eklenti klasörünün içindeki sunrise.php dosyasını kopyalayın ve onu kendi wp-content klasörünüze yapıştırın. Bunu yaptıktan sonra sihirbaz sayfasını yeniden yükleyin ve kontrollerin geçmesi gerekir.

<!-- Ekran görüntüsü mevcut değil: wp-ultimo eklenti klasörü içinde sunrise.php'yi gösteren dosya yöneticisi --> Her durumda, gelecekte sorun yaşamamak için klasör izinlerinizi genel olarak kontrol etmeniz gerekebilir (sadece Ultimate Multisite ile değil, diğer eklentiler ve temalarla da).

WordPress'in bir parçası olan **Health Check aracı**nı (ana sitenizin **admin panel > Tools > Health Check** üzerinden erişebilirsiniz) klasör izinlerinin WordPress ile sorunlara neden olabilecek değerlere ayarlanıp ayarlanmadığını size söyleyebilir.

<!-- تصویر در دسترس نیست: وردپرس سلامت بررسی ابزار پوشه مجوز وضعیت را نشان می‌دهد -->
