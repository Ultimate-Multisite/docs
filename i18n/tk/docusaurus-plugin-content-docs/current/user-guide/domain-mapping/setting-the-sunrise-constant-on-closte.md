---
title: Closte-da Gün şeşdirme konstantasy goýmak
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise konstanta Closte-de true etmegi

Bazı hosting sağlayıcılar güvenlik sebäbiyle wp-config.php faylını bloklayarlar. Bu, Ultimate Multisite'ın alan adı eşleşmesi ve diğer özelliklerin çalışması için gerekli olan konstantaları eklemek üzere dosyayı avtomatik redaktə edeməməsi deməkdir. Closte bu tür bir hostdur.

Ancak, Closte wp-config.php-ye konstantalar əlavə etmək üçün təhlükəsiz bir yol təklif edir. Sadəcə aşağıdakı addımları izləməlisiniz:

## Closte paneli üzərində {#on-the-closte-dashboard}

Əvvəlcə, [Closte hesabınıza daxil olun](https://app.closte.com/), Sites menyusu iteminə klikləyin, sonra hazırda işlədiyiniz saytın Dashboard linkinə basın:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranın sol tarafında size bir sürü yeni menü öğesi sunulacak. Bu menüyü kullanarak **Settings** sayfasına gidin:

<!-- Ekran görüntüsü mevcut değil: Sol kenar çubuğu menüsünde Ayarlar seçeneği gösteriliyor -->

Ardından, **Settings** sayfasında WP-Config sekmesini bulun ve bu sekmeye ait "Additional wp-config.php content" alanına bakın:

<!-- Ekran görüntüsü mevcut değil: Settings sayfasında WP-Config sekmesi ve Additional wp-config.php content alanı gösteriliyor -->

Ultimate Multisite kurma bağlamında, o alana `SUNRISE` sabitini eklemeniz gerekecek. Sadece yeni bir satır ekleyin ve aşağıdaki satırı yapıştırın. Bundan sonra **Save All** düğmesine tıklayın.

define('SUNRISE', true);

Bu heçdir, siz hazarsyňyz. Prosesi dowam etdirmek üçin Ultimate Multisite kurmalap goýjunyňize geri dönsäniň we aşakdaky sahany tazalap (refresh) goýsun.
