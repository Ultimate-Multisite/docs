---
title: Setting the Sunrise Constant on Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte'da Sunrise sabitini (constant) true olarak ayarlama {#setting-the-sunrise-constant-to-true-on-closte}

Bazı hosting sağlayıcıları güvenlik nedeniyle `wp-config.php` dosyasını kilitler. Bu, Ultimate Multisite'ın alan eşlemesi (domain mapping) ve diğer özelliklerin çalışması için gerekli sabitleri otomatik olarak düzenleyemeyeceği anlamına gelir. Closte de bu sağlayıcılardan biridir.

Ancak, Closte bu sabitleri güvenli bir şekilde `wp-config.php` dosyasına eklemenize olanak tanıyan bir yöntem sunuyor. Yapmanız gereken tek şey aşağıdaki adımları takip etmek:

## Closte paneli üzerinden {#on-the-closte-dashboard}

Öncelikle, [Closte hesabınıza giriş yapın](https://app.closte.com/), Sites menü öğesine tıklayın, ardından üzerinde çalıştığınız siteye ait Dashboard bağlantısına tıklayın:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranın sol tarafında bir dizi yeni menü öğesi göreceksiniz. Bu menüden **Ayarlar** sayfasına gidin:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ardından, **Ayarlar** sayfasında WP-Config sekmesini bulun ve bu sekmedeki "Additional wp-config.php content" alanına bakın:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite'ı kurma bağlamında, sunrise sabitini bu alana eklemeniz gerekecek. Yeni bir satır ekleyip aşağıdaki satırı yapıştırın. Ardından **Save All** düğmesine tıklayın.

define('SUNRISE', true);

Bu kadar, hazırsınız. Ultimate Multisite kurulum sihirbazına geri dönün ve işlemi sürdürmek için sayfayı yenileyin.
