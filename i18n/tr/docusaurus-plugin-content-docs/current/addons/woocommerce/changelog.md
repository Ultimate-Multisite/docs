---
title: WooCommerce Entegrasyon Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Entegrasyonu Değişiklik Günlüğü

Version 2.0.6 - Yayınlanma Tarihi: 2026-01-16
* Geliştirme: Temel abonelikler eklentiye dahil edildi. Artık Woocommerce Subscriptions uzantısına gerek kalmadı.

Version 2.0.5 - Yayınlanma Tarihi: 2026-01-09
* Geliştirme: Çeviriler glotpress API'sinden yükleniyor.
* Düzeltme: Bazı sayfa oluşturucularda kritik hata düzeltildi.
* Düzeltme: Müşteri ana sitede üye olduğunda sonsuz yönlendirme sorunu giderildi.

Version 2.0.4 - Yayınlanma Tarihi: 2025-11-14
* Eklendi: Daha fazla dil için çeviriler.
* Değiştirildi: Adı Ultimate Multisite: Woocommerce Integration olarak değiştirildi.
* Eklendi: Woocommerce 10.2.1 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 7.7.0 ile uyumluluk.
* Düzeltme: PHP 8.4 ile uyumluluk.
* Düzeltme: WC hesabı sayfası mevcut değilken yönlendirme yapılması sorunu giderildi.

Version 2.0.3 - Yayınlanma Tarihi: 2025-08-13
* Değiştirildi: Yeni pazar yeri ile otomatik güncellemeler etkinleştirildi.

Version 2.0.2 - Yayınlanma Tarihi: 2025-07-05
* Değiştirildi: Adı Multisite Ultimate: Woocommerce Integration olarak değiştirildi.
* Eklendi: Woocommerce 9.8.1 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 7.3.0 ile uyumluluk.
* Düzeltme: Müşteri tarafından abonelik iptal edilebilir.
* Düzeltme: Ödeme (checkout) bloğu kullanılırken kritik hata düzeltildi.
* Geliştirme: Artık Woocommerce'in yüksek performanslı özel sipariş tablolarıyla uyumlu.
* Düzeltme: WooCommerce ödeme sayfasında iptal işlemi yapılmasına rağmen üyelik yükseltilebiliyor olması sorunu giderildi.

Version 2.0.1 - Yayınlanma Tarihi: 2023-08-09

* Eklendi: Woocommerce 7.9.0 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 5.3.0 ile uyumluluk.
* Eklendi: Üyelik güncellemeleri desteği.
* Eklendi: Woocommerce'de deneme ve kurulum ücretleri hakkında bildirimler.
* Eklendi: Ultimate Multisite Woocommerce ürünlerinin meta değeri ile tanımlanması.
* Eklendi: Tüm Ultimate Multisite ile ilgili Woocommerce ürünlerini işaretlemek için tek seferlik bir düzeltme eklendi.
* Eklendi: Ultimate Multisite tarafından oluşturulan ürünler Woocommerce listesinden çıkarıldı.
* Geliştirme: Sepete uygulanacak tek seferlik bir Woocommerce indirimi oluşturuldu.
* Geliştirme: Tekrarlayan indirim Woocommerce ürününe geri yüklendi.
* Geliştirme: Woocommerce ürününe tekrarlayan indirim etiketi eklendi.
* Geliştirme: Ödeme sayfasında ürün tipi güvence altına alındı.
* Düzeltme: Düşürme (downgrade) işlemi sırasında üyelik durumu korundu.
* Düzeltme: İptal işlemi sırasında hataları önlemek için bir abonelik olup olmadığı kontrol edildi.
* Düzeltme: Woocommerce aboneliklerinde kullanılmak üzere başlangıç abonelik tarihi eklendi.
* Dahili: Yeni bir PHP 8.1 derleme süreci uygulandı.

Version 2.0.0 - Tamamen yeniden yazıldı.

* Eklendi: Ödeme ağ geçidini değiştirirken veya üyeliği iptal ederken woo aboneliğini kaldırma yöntemi;
* Eklendi: Üyelikleri düşürme ve yükseltme işleyicisi;
* Geliştirme: Hesap güncellemesine izin vermek için alt sitelerdeki müşteri güncelleme formunda woocommerce bağımlılıkları yükleniyor;
* Geliştirme: Woocommerce sepeti mevcut değilse doğru yüklenmesi sağlanıyor;
* Geliştirme: Ödeme işlemi yapılırken ana site tablolarında olduğumuzdan emin olunuyor;
* Geliştirme: Ultimo yenileme siparişinin, son ödemeden değil, Woocommerce abonelik sipariş değerine göre yapılması sağlanıyor;
* Düzeltme: WU Membership buton bağlantısına gidiliyor;
* Düzeltme: Woocommerce abonelik yenilemesi ödeme almışsa Ultimo siparişi ödenmiş olarak ayarlanıyor;
* Yapılandırma: MPB, oluşturucu olarak eklendi;

Version 2.0.0-beta-5 - Yayınlanma Tarihi: 2022-01-21

* Dahili: Hooks ve filtre oluşturucu eklendi;
* Dahili: Geliştirici yaşam kalitesi için Ultimate Multisite stub'ları eklendi;
* Düzeltildi: Gereksiz yere birden fazla ürün oluşturulması engellendi;

Version 2.0.0-beta.4 - 2021-09-23

* Düzeltme: WooCommerce'in sadece ana sitede değil, ağ genelinde aktif olmasını gerektirme;
* Geliştirme: Eklentinin mu-plugin olarak kullanılmasına izin veren filtre eklendi;

Version 2.0.0-beta.3 - 2021-05-28

* Düzeltme: Dashboard erişim kontrolü çok agresifti;
* Geliştirme: Ultimate Multisite üst menüsüne WooCommerce yardım bağlantıları eklendi;

Version 2.0.0-beta.2 - 2021-05-04

* Geliştirme: WCS yenileme siparişi oluşturulurken Ultimo'da bekleyen ödemeler oluşturuluyor;
* Geliştirme: Faturalandırma alanları Ultimate Multisite müşteri verileriyle önceden dolduruluyor;
* Geliştirme: Ağ geçitleri için faturalandırma alanları geri eklendi;

Version 2.0.0-beta.1 - 2021-05-04

* İlk beta sürümü

-- Eski Sürümler --

Version 1.2.6 - 26/03/2020

* Düzeltildi: Daha yeni Woocommerce Subscriptions sürümleriyle küçük uyumsuzluk.

Version 1.2.5 - 26/08/2019

* Düzeltildi: Önceki sürümdeki hata;

Version 1.2.4 - 22/08/2019

* Geliştirildi: Entegrasyondan hemen sonra WooCommerce ödeme ekranına yönlendirme seçeneği eklendi;

Version 1.2.3 - 26/05/2019

* Düzeltildi: WooCommerce için ödeme e-postası bazı uç durumlarda kayboluyordu;

Version 1.2.2 - 27/02/2019

* Eklendi: WooCommerce Subscription entegrasyonunda kurulum ücretleri desteği;

Version 1.2.1 - 17/11/2018

* Düzeltildi: Ultimate Multisite sürüm 1.9.0 ile uyumluluk sorunları;

Version 1.2.0 - 10/09/2018

* Geliştirildi: Eklentiler için yeni güncellemeler URL'si;
* Eklendi: WooCommerce Subscription için beta desteği;

Version 1.1.2 - 11/02/2018

* Düzeltildi: Ödeme (Pay) bağlantısı, WooCommerce uç noktalarındaki değişikliklere yanıt vermek için dinamik olarak oluşturuluyor;
* Geliştirildi: Ödeme_tamamlandı çağrıldığında, yenileme hook'larımızın çalışmasını sağlamak için siparişlerimizin tamamlandı durumunu zorluyoruz;

Version 1.1.1 - 24/01/2018

* Düzeltildi: Artık WooCommerce'in sadece ana sitede etkinleştirilip etkinleştirilmediğini de kontrol ediyor;
* Düzeltildi: Sipariş oluşturmasına vergileri dahil etmeye izin vermek için aşırı yüklemeler eklendi;

Version 1.1.0 - 04/11/2017

* Düzeltildi: Entegrasyon butonunun etiketi, ayarlara göre gerçekten değişiyor. Ultimate Multisite 1.5.0 gerektirir;
* Düzeltildi: WooCommerce, ağ genelinde aktif olmasa ve yalnızca ana sitede etkinleştirilmiş olsa bile WooCommerce Entegrasyonu çalışıyor;

1.0.0 - İlk Yayın
