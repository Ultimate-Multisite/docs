---
title: Closte'de Sunrise Sabitini Ayarlama
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte'ta Sunrise Sabitini True Olarak Ayarlama

Bazı hosting sağlayıcıları güvenlik nedeniyle wp-config.php dosyasını kilitli tutar. Bu durum, Ultimate Multisite'ın alan adı eşleme ve diğer özelliklerin çalışması için gerekli sabitleri otomatik olarak dosyaya ekleyememesi anlamına gelir. Closte de bu tür sağlayıcılardan biridir.

Ancak Closte, wp-config.php dosyasına güvenli bir şekilde sabit eklemenize olanak tanır. Tek yapmanız gereken aşağıdaki adımları izlemek:

## Closte kontrol panelinde

Öncelikle [Closte hesabınıza giriş yapın](https://app.closte.com/), Sites menü öğesine tıklayın, ardından üzerinde çalıştığınız sitenin Dashboard bağlantısına tıklayın:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranın sol tarafında bir dizi yeni menü öğesi göreceksiniz. Bu menüyü kullanarak **Settings** sayfasına gidin:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ardından **Settings** sayfasında WP-Config sekmesini bulun ve bu sekmedeki "Additional wp-config.php content" alanını bulun:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite kurulumu bağlamında, sunrise sabitini bu alana eklemeniz gerekiyor. Yeni bir satır ekleyin ve aşağıdaki satırı yapıştırın. Ardından **Save All** butonuna tıklayın.

define('SUNRISE', true);

Hepsi bu kadar, artık hazırsınız. Ultimate Multisite kurulum sihirbazına dönün ve işleme devam etmek için sayfayı yenileyin.
