---
title: Alan Adı Satıcısı Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Değişiklik Günlüğü

Sürüm 1.3.0 - 2026-06-02 tarihinde yayınlandı
- Yeni: HostAfrica reseller bakiyesi çok düştüğünde network-admin uyarısı eklendi
- Yeni: Yeni kaydedilen domain’lerin network sitesine otomatik eşlemesi eklendi
- Düzeltme: Kayıt sahibi alanı gereksinimleri yalnızca yeni domain kaydedilirken uygulandı
- Düzeltme: Bakiye izleme bildirimleri kapatılabilir yapıldı
- Düzeltme: WooCommerce kayıt sahibi fatura bilgilerinin korunması sağlandı
- Düzeltme: Kayıt sırasında kayıt sahibi iletişim gereksinimleri zorunlu kılındı
- Düzeltme: Domain kayıt ürünlerinin %0 markup ile oluşturulması engellendi
- Düzeltme: Domain seçimleri ve fiyatlandırma checkout oturumu akışı boyunca korundu
- Düzeltme: HostAfrica domain fiyatlandırma para birimi gösterimi iyileştirildi
- Düzeltme: WP-core query-var uyuşmazlıklarını önlemek için checkout form-action davranışı iyileştirildi
- İyileştirildi: Kurulum rehberliğinde HostAfrica reseller yapılandırma dokümantasyonuna bağlantı verildi

Sürüm 1.2.0 - 2026-05-25 tarihinde yayınlandı
- Yeni: HostAfrica, checkout, kurulum sihirbazı, arama, TLD/fiyatlandırma, kayıt, yenileme, transfer, nameserver, DNS, EPP code, registrar lock ve ID koruması desteğiyle domain satışı entegrasyonu olarak eklendi
- Yeni: Openprovider, reseller fiyatlandırması, kayıt, yenileme, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS gizliliği ve TLD senkronizasyonu desteğiyle domain satışı entegrasyonu olarak eklendi
- Yeni: Hostinger, uygunluk kontrolleri, kayıt, nameserver güncellemeleri, registrar lock ve WHOIS gizliliği için çekirdek entegrasyondan paylaşılan Hostinger API token kullanılarak domain satışı entegrasyonu olarak eklendi
- İyileştirildi: Geliştirici entegrasyon rehberliği için domain yaşam döngüsü action ve filter docblock’ları eklendi
- İyileştirildi: Addon readme içinde plugin uyumluluk metadata’sı WordPress 7.0’a güncellendi
- İyileştirildi: Yaklaşan sürüm koordinasyonu için kullanılan planlama şablonları güncellendi

Sürüm 1.1.0 - 2026-05-08 tarihinde yayınlandı
- Yeni: DNS kaydı oluşturma (add_dns_record), ResellerClub, Enom ve OpenSRS registrar’ları için uygulandı
- Düzeltme: Varsayılan DNS Kayıtları ayrıştırıcısı artık {DOMAIN} ve {SITE_URL} token’larını tolere ediyor
- Düzeltme: Domain seçimi checkout alanı slug’ları site_url ile çakışmayı önlemek için namespace’e alındı

Sürüm 1.0.8 - 2026-05-07 tarihinde yayınlandı
- Düzeltme: ResellerClub domain fiyatlandırması artık canlı maliyet fiyatlarını doğru API endpoint’inden alıyor

Sürüm 1.0.7 - 2026-05-06 tarihinde yayınlandı
* Düzeltme: ResellerClub test_connection gerekli tlds parametresini gönderir (#224)

Sürüm 1.0.6 - 2026-05-05 tarihinde yayınlandı
* Düzeltme: ResellerClub domain kaydı artık iyileştirilmiş API yanıt işleme ve registry odaklı provider yönlendirmesiyle doğru şekilde çalışıyor
* Düzeltme: Domain Kaydet admin sayfası UX iyileştirmeleri
* Kaldırıldı: CyberPanel registrar entegrasyonu

Sürüm 1.0.5 - 2026-04-02 tarihinde yayınlandı
* Yeni: Domain kaydı ve yönetimi için GoDaddy registrar entegrasyonu
* Yeni: NameSilo registrar entegrasyonu
* Yeni: ResellerClub registrar entegrasyonu
* Yeni: Domain satın alma ve eşleme sırasında SES gönderim domain’ini otomatik doğrulama
* Düzeltme: Test ortamında plugin sabitlerini yeniden tanımlamaya karşı koruma
* Düzeltme: MySQL flags, install-wp-tests.sh içinde doğru şekilde word-split edilir

Sürüm 1.0.4 - 2026-03-14 tarihinde yayınlandı
* **Düzeltme:** Bazı eksik css varlıkları
* **Düzeltme:** Kullanılamayan tld’lerle ilgili hata

Sürüm 1.0.3 - 2026-03-09 tarihinde yayınlandı
* **Düzeltme:** Checkout shortcode ile eski signup şablonu kullanılırken Vue reaktif property hataları (domain_option, selected_domain, domain_provider)
* **Düzeltme:** Domain seçimi checkout alanında subdomain giriş alanı hizalama bozukluğu ve aşırı büyük metin
* **Düzeltme:** Domain seçimi alanı mevcut olduğunda "URL’niz şu olacak" önizleme bloğunu gizleme

Sürüm 1.0.2 - 2026-03-01 tarihinde yayınlandı
* **İyileştirildi:** Global markup ayarları ayarlar sayfasından kaldırıldı — fiyatlandırma artık yalnızca ürün bazında
* **İyileştirildi:** Hızlı gezinme için ayarlar sayfasına "Domain Ürünlerini Yönet" bağlantısı eklendi
* **İyileştirildi:** Domain ürün ayarları için daha net alan açıklamaları ve ipuçları (catch-all vs TLD’ye özel, markup türleri, tanıtım fiyatlandırması)
* **İyileştirildi:** Ayarlar sayfası genelinde daha iyi açıklamalar (TLD’leri arama, yenilemeler, DNS, bildirimler)

Sürüm 1.0.1 - 2026-02-27 tarihinde yayınlandı

* **Yeni:** Toplu fiyatlandırma yönetimi için TLD içe aktarma aracı
* **Yeni:** Alan adı ürünleri için tanıtım fiyatlandırması desteği
* **Yeni:** Cypress ile E2E test paketi
* **Yeni:** Alan adı yaşam döngüsü bildirimleri için e-posta şablonları
* **Yeni:** Yönetici alan adı kayıt modalında, ayarlardan önceden doldurulmuş kayıt sahibi adres alanları
* **Yeni:** Kayıt ekleme, düzenleme ve silme desteğiyle müşteri DNS yönetim arayüzü
* **Yeni:** Otomatik alan adı eşlemesiyle "kendi alan adını getir" ödeme seçeneği
* **Yeni:** Ödeme sırasında alan adından site URL’sini otomatik oluşturma
* **Yeni:** Ayarlarda varsayılan nameserver ve DNS kaydı yapılandırması
* **Yeni:** Çekirdek alan adı düzenleme sayfasında alan adı kayıt ayrıntıları ve DNS yönetimi
* **Yeni:** Kurulum sihirbazı, makul varsayılanlarla varsayılan bir alan adı ürününü otomatik oluşturur
* **Yeni:** Yapılandırılmış tüm sağlayıcılarda cron aracılığıyla günlük otomatik TLD senkronizasyonu
* **Yeni:** Ürün bazında yapılandırmayla WHOIS gizlilik koruması (her zaman açık, müşteri seçimi veya devre dışı)
* **Yeni:** Fiyatlandırma gösterimi ve dark mode desteğiyle WHOIS gizliliği ödeme onay kutusu
* **Yeni:** Manuel alan adı kaydı için Alan Adı Kaydet yönetici sayfası
* **Yeni:** Ultimate Multisite güncelleme sunucusu üzerinden otomatik plugin güncellemeleri
* **Yeni:** Ürün listesi tablosunda mor rozet stiliyle alan adı ürün türü filtre sekmesi
* **Yeni:** Alan adı ödeme formunda kayıt sahibi iletişim alanları (ad, adres, şehir, eyalet, posta kodu, ülke, telefon)
* **Yeni:** Registrar API çağrılmadan önce net hata mesajlarıyla kayıt sahibi alan doğrulaması
* **Yeni:** Alan adı kayıt olayları için sağlayıcıya özel günlük kanalları (örn. domain-seller-namecheap.log)
* **Yeni:** Ana kayıt/kaydolma ödeme formunda kayıt sahibi iletişim alanları (alan adı kaydedilirken gösterilir)
* **İyileştirildi:** Alan Adı Arama ödeme alanı, alt alan adı, kayıt ve mevcut alan adı sekmelerini destekleyen birleşik Alan Adı Seçimi alanıyla değiştirildi
* **İyileştirildi:** Alan adı ürün ayarları, çekirdek widget sistemi aracılığıyla ürün düzenleme sayfasında satır içi işlenir
* **İyileştirildi:** Müşteri alan adı bilgileri, bağımsız metabox yerine çekirdek alan adı eşleme widget’ına bağlanır
* **İyileştirildi:** TLD içe aktarma sihirbazı, tüm sağlayıcılardan tek tıklamayla senkronizasyona basitleştirildi
* **İyileştirildi:** Namecheap alan adı uygunluğu, daha hızlı arama için toplu API çağrısı kullanır
* **İyileştirildi:** Namecheap fiyatlandırma API’si doğru parametreleri ve yanıt ayrıştırmasını kullanır
* **İyileştirildi:** TLD depolaması tek bir ağ seçeneğinde merkezileştirildi
* **İyileştirildi:** DNS değişiklikleri, transferler ve yapılandırma uygulaması için alan adı etkinlik günlüğü
* **İyileştirildi:** OpenSRS için IANA ana listesi kullanılarak toplu doğrulamayla tam TLD senkronizasyonu
* **İyileştirildi:** Sayfalandırılmış API istekleriyle Namecheap için tam TLD senkronizasyonu
* **İyileştirildi:** Eski sağlayıcı sınıfları Integration Registry deseniyle değiştirildi
* **İyileştirildi:** DNS ve transfer yapılandırmalı ayarlar paneli
* **İyileştirildi:** Telefon numaraları otomatik olarak +CC.NNN registrar biçimine formatlanır
* **İyileştirildi:** Telefon alanı doğrulaması, gönderimden önce formatlama karakterlerini kaldırır
* **İyileştirildi:** Sürüm gereksinimi, daha net bildirimle Ultimate Multisite 2.4.12’ye yükseltildi
* **İyileştirildi:** CI iş akışı hem addon hem de çekirdek plugin için doğru checkout kullanır
* **İyileştirildi:** prepare_registrant_info() ödeme sırasında kaydedilmiş kullanıcı metasından okur ve yedek olarak fatura adresini kullanır
* **Düzeltildi:** Ödeme sırasında giriş yapmamış kullanıcılar için alan adı arama AJAX hatası
* **Düzeltildi:** Ödeme sırasında giriş yapmamış kullanıcılar için alan adı fiyatlandırma AJAX hatası
* **Düzeltildi:** WP-CLI komutları çalıştırılırken Spyc sınıfının yeniden bildirilmesi kaynaklı ölümcül hata
* **Düzeltildi:** Namecheap sandbox API zaman aşımı çok kısaydı
* **Düzeltildi:** Alan adı arama Seç düğmesi metni yeşil arka planda görünmüyordu
* **Düzeltildi:** Eksik iletişim bilgisi nedeniyle "RegistrantFirstName is Missing" hatasıyla alan adı kaydı başarısız oluyordu
* **Düzeltildi:** Ödeme anında site henüz mevcut olmadığında alan adı kaydı blog_id=0 ile oluşturuluyordu
* **Düzeltildi:** Varsayılan TLD’ler ayarı ayrıştırılmış dizi yerine string olarak dönüyordu
* **Kaldırıldı:** Bağımsız Alan Adı Yönetimi yönetici sayfası — artık çekirdek alan adı sayfaları üzerinden yönetiliyor

Sürüm 1.0.0 - 2025-09-28 tarihinde yayınlandı

**Ultimate Multisite v2 için Büyük Yeniden Yazım**

* **Yeni:** Modern PHP 7.4+ mimarisiyle tamamen yeniden yazım
* **Yeni:** Ultimate Multisite v2 checkout sistemiyle sorunsuz entegrasyon
* **Yeni:** Esnek fiyatlandırma seçenekleriyle alan adı ürün yönetimi
* **Yeni:** Birden çok alan adı sağlayıcısı destek mimarisi
* **Yeni:** Otomatik yenileme ve abonelik entegrasyonu
* **Yeni:** Müşteri alan adı yönetim arayüzü
* **Yeni:** Yönetici alan adı izleme ve günlükler
* **Yeni:** Alan adı ürünleri için kupon desteği
* **Yeni:** Kapsamlı ayar yönetimi
* **Yeni:** Geliştirici dostu genişletilebilir kod tabanı
* **İyileştirildi:** Tam özellik desteğiyle OpenSRS sağlayıcısı güncellendi
* **İyileştirildi:** Ultimate Multisite v2 ile tutarlı modern UI
* **Düzeltildi:** Kullanımdan kaldırılmış tüm v1 kodları v2 standartlarına güncellendi
* **Kaldırıldı:** Eski v1 uyumluluğu (uyumluluğu bozan değişiklik)

### Önceki Sürümler (v1 Eski)

### Sürüm 0.0.3 - 20/08/2019

* Düzeltildi: Groundhogg CRM ile uyumsuzluk
* Not: Bu, v1 uyumlu son sürümdü

### Sürüm 0.0.2 - 07/12/2018

* Düzeltildi: License Key alanı kaldırıldı
* Düzeltildi: Özellik plugin’i etkinken plan sekmeleri eksikti
* İyileştirildi: Kayıt alanına atla düğmesi eklendi

### Sürüm 0.0.1 - İlk Sürüm

* WP Ultimo v1 için temel OpenSRS entegrasyonu
* Basit alan adı arama ve kayıt
* Plan tabanlı alan adı izinleri
