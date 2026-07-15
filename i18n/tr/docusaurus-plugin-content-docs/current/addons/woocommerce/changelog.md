---
title: WooCommerce Entegrasyonu Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Entegrasyonu Değişiklik Günlüğü

Sürüm 2.2.0 - 2026-07-01 tarihinde yayınlandı
* Yeni: Ultimate Multisite vergi tutarları artık checkout sırasında ayrı WooCommerce ücret satırları olarak görünür; bu da ödeme öncesinde vergi toplamlarını daha net hale getirir.
* Yeni: WooCommerce Subscriptions yeniden deneme penceresi sırasında başarısız yenileme askıya almasını isteyen siteler için isteğe bağlı "Başarısız Yenilemelerde Üyelikleri Hemen Askıya Al" ayarı ve `wu_woo_suspend_on_payment_failure` filter eklendi.
* Düzeltme: Başarısız veya kurtarılan yenilemelerden sonra Ultimate Multisite üyelikleriyle senkronizasyon dışı kalabilen WooCommerce Subscription durumları uzlaştırıldı.
* Düzeltme: Eksik olduğunda WooCommerce mağaza para birimi Ultimate Multisite para birimi listesine eklendi.
* Düzeltme: Aboneler WooCommerce checkout’a yönlendirilirken müşteri fatura bilgileri korundu.
* İyileştirildi: Jetpack Autoloader 5 ile uyumluluk eklendi.
* İyileştirildi: GitHub ve marketplace zip dosyalarının iç içe hazırlık dizinlerinden ve geliştirme dosyalarından kaçınması için sürüm paketi oluşturma temizlendi.

Sürüm 2.0.6 - 2026-01-16 tarihinde yayınlandı
* İyileştirme: Çekirdek abonelikleri eklentiye dahil et. Artık Woocommerce Subscriptinos uzantısı gerektirmez.

Sürüm 2.0.5 - 2026-01-09 tarihinde yayınlandı
* İyileştirme: Çevirileri glotpress API’den yükle.
* Düzeltme: Bazı sayfa oluşturucularda fatal error.
* düzeltme: Müşteri ana sitenin bir üyesi olduğunda sonsuz yönlendirme.

Sürüm 2.0.4 - 2025-11-14 tarihinde yayınlandı
* Eklendi: Çok daha fazla dil için çeviriler.
* Değiştirildi: Ultimate Multisite: Woocommerce Integration olarak yeniden adlandırıldı.
* Eklendi: Woocommerce 10.2.1 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 7.7.0 ile uyumluluk.
* Düzeltme: PHP 8.4 ile uyumluluk
* Düzeltme: WC Account sayfası olmadığında yönlendirme hatası.

Sürüm 2.0.3 - 2025-08-13 tarihinde yayınlandı
* Değiştirildi: Yeni marketplace ile otomatik güncellemeler etkinleştirildi.

Sürüm 2.0.2 - 2025-07-05 tarihinde yayınlandı
* Değiştirildi: Multisite Ultimate: Woocommerce Integration olarak yeniden adlandırıldı.
* Eklendi: Woocommerce 9.8.1 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 7.3.0 ile uyumluluk.
* Düzeltme: Müşteri tarafından bir aboneliğin iptal edilmesi.
* Düzeltme: Checkout block kullanılırken fatal error.
* İyileştirme: Artık Woocommerce yüksek performanslı özel sipariş tablolarıyla uyumlu.
* Düzeltme: WooCommerce checkout’ta iptal etmek yine de bir üyeliği yükseltebiliyordu.

Sürüm 2.0.1 - 2023-08-09 tarihinde yayınlandı

* Eklendi: Woocommerce 7.9.0 ile uyumluluk.
* Eklendi: Woocommerce Subscriptions 5.3.0 ile uyumluluk.
* Eklendi: Üyelik güncellemeleri desteği.
* Eklendi: Woocommerce içinde denemeler ve kurulum ücretleri hakkında bildirimler.
* Eklendi: Ultimate Multisite Woocommerce ürünlerinin bir meta değeriyle tanımlanması.
* Eklendi: Ultimate Multisite ile ilgili tüm Woocommerce ürünlerini işaretlemek için tek seferlik bir düzeltme eklendi.
* Eklendi: Ultimate Multisite tarafından oluşturulan ürünler Woocommerce listesinden kaldırıldı.
* İyileştirme: Sepete uygulamak için yinelenmeyen bir Woocommerce indirimi oluşturuldu.
* İyileştirme: Yinelenen indirim Woocommerce ürününe geri yüklendi.
* İyileştirme: Woocommerce ürününe yinelenen indirim etiketi eklendi.
* İyileştirme: Checkout sırasında ürün türü sağlama alındı.
* Düzeltme: Düşürme süreci sırasında üyelik durumu korundu.
* Düzeltme: İptal süreci sırasında hataları önlemek için bir aboneliğin var olup olmadığı kontrol edildi.
* Düzeltme: Woocommerce aboneliklerinde kullanmak için abonelik başlangıç tarihi eklendi.
* Dahili: Yeni bir PHP 8.1 build süreci uygulandı.

Sürüm 2.0.0 - Tamamen yeniden yazıldı.

* Eklendi: Gateway değiştirirken veya üyeliği iptal ederken woo aboneliğini kaldırmak için iptal yöntemi işleme;
* Eklendi: Üyelikleri düşürmek ve yükseltmek için handler;
* İyileştirme: Account güncellemesine izin vermek için alt sitelerdeki müşteri güncelleme formunda woocommerce bağımlılıklarını yükle;
* İyileştirme: Yoksa Woocommerce sepetini doğru şekilde yükle;
* İyileştirme: Checkout işlenirken ana site tablolarında olduğumuzdan emin ol;
* İyileştirme: Ultimo yenileme siparişini son ödemeden değil, Woocommerce abonelik siparişi değerine dayandır;
* Düzeltme: WU Membership düğmesi bağlantısı;
* Düzeltme: Woocommerce subscriptions yenilemesi ödendiğinde Ultimo siparişini ödenmiş olarak ayarla;
* Build: MPB’yi builder olarak ekle;

Sürüm 2.0.0-beta-5 - 2022-01-21 tarihinde yayınlandı

* Dahili: Hooks ve filters oluşturucu eklendi;
* Dahili: Geliştirici yaşam kalitesi için Ultimate Multisite stubs eklendi;
* Düzeltildi: Gerekli olmadığında birden fazla ürün oluşturulması engellendi;

Sürüm 2.0.0-beta.4 - 2021-09-23

* Düzeltme: WooCommerce’in yalnızca ana sitede değil, network üzerinde etkin olmasının gerekmesi;
* İyileştirme: Eklentinin mu-plugin olarak kullanılmasına izin vermek için filter eklendi;

Sürüm 2.0.0-beta.3 - 2021-05-28

* Düzeltme: Dashboard erişim kontrolü çok agresifti;
* İyileştirme: Ultimate Multisite üst menüsüne WooCommerce yardım bağlantıları eklendi;

Sürüm 2.0.0-beta.2 - 2021-05-04

* İyileştirme: WCS yenileme siparişi oluşturulurken Ultimo üzerinde bekleyen ödemeler oluşturur;
* İyileştirme: Fatura alanlarını Ultimate Multisite müşteri verileriyle önceden doldurur;
* İyileştirme: Gateway’ler için fatura alanlarını geri ekler;

Sürüm 2.0.0-beta.1 - 2021-05-04

* İlk beta sürüm

-- Eski Sürümler --

Sürüm 1.2.6 - 26/03/2020

* Düzeltildi: WooCommerce Subscriptions’ın daha yeni sürümleriyle küçük uyumsuzluk;

Sürüm 1.2.5 - 26/08/2019

* Düzeltildi: Önceki sürümdeki hata;

Sürüm 1.2.4 - 22/08/2019

* İyileştirildi: Entegrasyondan hemen sonra WooCommerce checkout ekranına yönlendirme seçeneği eklendi;

Sürüm 1.2.3 - 26/05/2019

* Düzeltildi: WooCommerce için ödeme e-postası bazı uç durumlarda kayboluyordu;

Sürüm 1.2.2 - 27/02/2019

* Eklendi: WooCommerce Subscription entegrasyonunda kurulum ücretleri desteği;

Sürüm 1.2.1 - 17/11/2018

* Düzeltildi: Ultimate Multisite sürüm 1.9.0 ile uyumluluk sorunları;

Sürüm 1.2.0 - 10/09/2018

* İyileştirildi: Eklentiler için yeni güncelleme URL’si;
* Eklendi: WooCommerce Subscription için beta desteği;

Sürüm 1.1.2 - 11/02/2018

* Düzeltildi: WooCommerce endpoint’lerindeki değişikliklere yanıt vermek için dinamik olarak oluşturulan Ödeme bağlantısı;
* İyileştirildi: Yenileme hooks’larımızın gerektiğinde çalıştığından emin olmak için payment_completed çağrıldığında siparişlerimiz için artık tamamlandı durumunu zorunlu kılıyoruz;

Version 1.1.1 - 24/01/2018

* Düzeltildi: Artık WooCommerce’in yalnızca ana sitede etkinleştirilip etkinleştirilmediğini de kontrol ediyor;
* Düzeltildi: Sipariş oluşturmanın vergileri dahil etmesine izin vermek için aşırı yüklemeler eklendi;

Version 1.1.0 - 04/11/2017

* Düzeltildi: Entegrasyon düğmesinin etiketi artık ayarları yansıtacak şekilde gerçekten değişiyor. Ultimate Multisite 1.5.0 gerektirir;
* Düzeltildi: WooCommerce Integration artık WooCommerce ağ genelinde etkin olmasa ve yalnızca ana sitede etkinleştirilmiş olsa bile çalışıyor;

1.0.0 - İlk Sürüm
