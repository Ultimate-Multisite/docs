---
title: Domain Satıcı Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Değişiklik Günlüğü

Sürüm 1.1.0 - Yayınlanma Tarihi: 2026-05-08
- Yeni: ResellerClub, Enom ve OpenSRS kayıt kuruluşları için DNS kayıt oluşturma (add_dns_record) eklendi.
- Düzeltme: Varsayılan DNS Kayıtları ayrıştırıcısı artık {DOMAIN} ve {SITE_URL} token'larını tolere ediyor.
- Düzeltme: Alan adı seçimi ödeme alanı slug'ları, site_url ile çakışmasını önlemek için ad alanına ayrıldı (namespaced).

Sürüm 1.0.8 - Yayınlanma Tarihi: 2026-05-07
- Düzeltme: ResellerClub alan adı fiyatlandırması artık doğru API uç noktasından canlı maliyet fiyatlarını çekiyor.

Sürüm 1.0.7 - Yayınlanma Tarihi: 2026-05-06
* Düzeltme: ResellerClub test_connection, gerekli tlds parametresini (#224) gönderiyor.

Sürüm 1.0.6 - Yayınlanma Tarihi: 2026-05-05
* Düzeltme: ResellerClub alan adı kaydı, geliştirilmiş API yanıt işleme ve kayıt kuruluşu odaklı sağlayıcı yönlendirmesi ile artık doğru çalışıyor.
* Düzeltme: Register Domain yönetici sayfası kullanıcı deneyimi (UX) iyileştirmeleri yapıldı.
* Kaldırıldı: CyberPanel kayıt kuruluşu entegrasyonu.

Sürüm 1.0.5 - Yayınlanma Tarihi: 2026-04-02
* Yeni: Alan adı kaydı ve yönetimi için GoDaddy kayıt kuruluşu entegrasyonu.
* Yeni: NameSilo kayıt kuruluşu entegrasyonu.
* Yeni: ResellerClub kayıt kuruluşu entegrasyonu.
* Yeni: Alan adı satın alınması ve eşlenmesi sırasında SES gönderen alan adını otomatik doğrulama.
* Düzeltme: Test ortamında Guard eklentisi sabitleri yeniden tanımlanmaya karşı korundu.
* Düzeltme: MySQL, install-wp-tests.sh dosyasında kelime ayrımını doğru yapıyor.

Sürüm 1.0.4 - Yayınlanma Tarihi: 2026-03-14
* **Düzeltme:** Eksik CSS varlıkları.
* **Düzeltme:** Kullanılamayan tlds ile ilgili hata.

Sürüm 1.0.3 - Yayınlanma Tarihi: 2026-03-09
* **Düzeltme:** Vue reaktif özellik hataları (domain_option, selected_domain, domain_provider) ödeme kısa kodu ile eski kayıt forması kullanılırken düzeltildi.
* **Düzeltme:** Alt alan adı giriş alanı hizalama sorunu ve alan adı seçimi ödeme alanındaki büyük metin düzeltildi.
* **Düzeltme:** Alan adı seçimi alanı mevcut olduğunda "URL'niz şu olacak" önizleme bloğunu gizler.

Sürüm 1.0.2 - Yayınlanma Tarihi: 2026-03-01
* **Geliştirme:** Ayarlar sayfasından global işaretleme ayarları kaldırıldı — fiyatlandırma artık yalnızca ürün bazında yapılıyor.
* **Geliştirme:** Ayarlar sayfasında hızlı gezinme için "Alan Adı Ürünlerini Yönet" bağlantısı eklendi.
* **Geliştirme:** Alan adı ürün ayarları için daha net alan açıklamaları ve ipuçları (catch-all vs TLD'ye özel, işaretleme türleri, tanıtım fiyatlandırması).
* **Geliştirme:** Ayarlar sayfası genelinde daha iyi açıklamalar (TLD'leri arama, yenilemeler, DNS, bildirimler).

Sürüm 1.0.1 - Yayınlanma Tarihi: 2026-02-27

* **Yeni:** Toplu fiyatlandırma yönetimi için TLD içe aktarma aracı.
* **Yeni:** Alan adı ürünleri için tanıtım fiyatlandırma desteği.
* **Yeni:** Cypress ile uçtan uca (E2E) test paketi.
* **Yeni:** Alan adı yaşam döngüsü bildirimleri için e-posta şablonları.
* **Yeni:** Yönetici alan adı kayıt modalı üzerinde, ayarlar'dan önceden doldurulan kayıt sahibi adresi alanları.
* **Yeni:** Ekleme, düzenleme ve silme kayıt desteği ile müşteri DNS yönetim arayüzü.
* **Yeni:** Otomatik alan adı eşlemesi ile "Kendi alan adınızı getirin" ödeme seçeneği.
* **Yeni:** Ödeme sırasında alan adından site URL'sinin otomatik oluşturulması.
* **Yeni:** Ayarlarda varsayılan nameserver ve DNS kayıt yapılandırması.
* **Yeni:** Çekirdek alan adı düzenleme sayfasında alan adı kayıt detayları ve DNS yönetimi.
* **Yeni:** Kurulum sihirbazı, mantıklı varsayılanlarla varsayılan bir alan adı ürünü oluşturur.
* **Yeni:** Yapılandırılan tüm sağlayıcılar arasında cron aracılığıyla günlük otomatik TLD senkronizasyonu.
* **Yeni:** Ürün bazında yapılandırma ile WHOIS gizlilik koruması (her zaman açık, müşteri seçimi veya devre dışı).
* **Yeni:** Fiyat gösterimi ve karanlık mod desteği ile WHOIS gizlilik ödeme kutucuğu.
* **Yeni:** Manuel alan adı kaydı için Register Domain yönetici sayfası.
* **Yeni:** Ultimate Multisite güncelleme sunucusu aracılığıyla otomatik eklenti güncellemeleri.
* **Yeni:** Ürün listesi tablosunda alan adı ürün tipi filtre sekmesi ve mor rozet stili.
* **Yeni:** Alan adı ödeme formunda kayıt sahibi iletişim alanları (ad, adres, şehir, eyalet, posta kodu, ülke, telefon).
* **Yeni:** Kayıt kuruluşu API'sini çağırmadan önce kayıt sahibi alan doğrulama ve net hata mesajları.
* **Yeni:** Alan adı kayıt olayları için sağlayıcıya özel log kanalları (örneğin, domain-seller-namecheap.log).
* **Yeni:** Ana kayıt/kayıt olma ödeme formunda kayıt sahibi iletişim alanları (alan adı kaydedilirken gösterilir).
* **Geliştirme:** Alan Adı Arama ödeme alanı, alt alan adı, kayıt ve mevcut alan adı sekmelerini destekleyen birleşik Alan Adı Seçimi alanı ile değiştirildi.
* **Geliştirme:** Alan adı ürün ayarları, çekirdek widget sistemi aracılığıyla ürün düzenleme sayfasında satır içi olarak gösterilir.
* **Geliştirme:** Müşteri alan adı bilgisi, bağımsız bir metabox yerine çekirdek alan adı eşleme widget'ına entegre edildi.
* **Geliştirme:** TLD içe aktarma sihirbazı, tüm sağlayıcılardan tek tıkla senkronizasyona basitleştirildi.
* **Geliştirme:** Namecheap alan adı uygunluğu, daha hızlı arama için toplu API çağrısı kullanır.
* **Geliştirme:** Namecheap fiyatlandırma API'si doğru parametreleri ve yanıt ayrıştırmayı kullanır.
* **Geliştirme:** TLD depolama merkezi tek bir ağ seçeneğinde toplandı.
* **Geliştirme:** DNS değişiklikleri, transferler ve yapılandırma uygulamaları için alan adı aktivite günlüklemesi.
* **Geliştirme:** OpenSRS için IANA ana listesini kullanarak toplu doğrulama ile tam TLD senkronizasyonu.
* **Geliştirme:** Namecheap için sayfalama yapılmış API istekleriyle tam TLD senkronizasyonu.
* **Geliştirme:** Eski sağlayıcı sınıfları, Entegrasyon Kayıt Deseni (Integration Registry pattern) ile değiştirildi.
* **Geliştirme:** DNS ve transfer yapılandırması ile ayarlar paneli.
* **Geliştirme:** Telefon numaraları otomatik olarak +CC.NNN kayıt kuruluşu formatına dönüştürülür.
* **Geliştirme:** Telefon alanı doğrulaması, göndermeden önce biçimlendirme karakterlerini temizler.
* **Geliştirme:** Versiyon gereksinimi, daha net bir bildirimle Ultimate Multisite 2.4.12'ye yükseltildi.
* **Geliştirme:** CI iş akışı, hem eklenti hem de çekirdek eklenti için uygun ödemeyi kullanır.
* **Geliştirme:** prepare_registrant_info() ödeme-kaydedilmiş kullanıcı meta verisinden ve fatura adresi yedeklemesinden okur.
* **Düzeltildi:** Ödeme sırasında giriş yapmamış kullanıcılar için Alan Adı arama AJAX'ı başarısız oluyordu.
* **Düzeltildi:** Ödeme sırasında giriş yapmamış kullanıcılar için Alan Adı fiyatlandırma AJAX'ı başarısız oluyordu.
* **Düzeltildi:** WP-CLI komutları çalıştırılırken Spyc sınıfı yeniden tanımlama ölümcül hatası.
* **Düzeltildi:** Namecheap sandbox API zaman aşımı çok kısaydı.
* **Düzeltildi:** Alan adı arama Seç buton metni yeşil arka planda görünmüyordu.
* **Düzeltildi:** Eksik iletişim bilgisi nedeniyle alan adı kaydı "RegistrantFirstName is Missing" hatasıyla başarısız oluyordu.
* **Düzeltildi:** Site henüz mevcut değilken ödeme anında alan adı oluşturulduğunda blog_id=0 ile alan adı oluşturuluyordu.
* **Düzeltildi:** Varsayılan TLD'ler ayarı, ayrıştırılmış bir dizi yerine dize olarak dönüyordu.
* **Kaldırıldı:** Bağımsız Alan Adı Yönetimi yönetici sayfası — artık çekirdek alan adı sayfaları üzerinden yönetiliyor.

Sürüm 1.0.0 - Yayınlanma Tarihi: 2025-09-28

**Ultimate Multisite v2 için Büyük Yeniden Yazım**

* **Yeni:** Modern PHP 7.4+ mimarisi ile komple yeniden yazım.
* **Yeni:** Ultimate Multisite v2 ödeme sistemi ile sorunsuz entegrasyon.
* **Yeni:** Esnek fiyatlandırma seçenekleriyle alan adı ürün yönetimi.
* **Yeni:** Çoklu alan adı sağlayıcısı destek mimarisi.
* **Yeni:** Otomatik yenileme ve abonelik entegrasyonu.
* **Yeni:** Müşteri alan adı yönetim arayüzü.
* **Yeni:** Yönetici alan adı izleme ve günlükler.
* **Yeni:** Alan adı ürünleri için kupon desteği.
* **Yeni:** Kapsamlı ayarlar yönetimi.
* **Yeni:** Geliştirici dostu genişletilebilir kod tabanı.
* **Geliştirme:** Tüm kullanılmış v1 kodu, v2 standartlarına güncellendi.
* **Kaldırıldı:** Eski v1 uyumluluğu (bozulma değişikliği).

### Önceki Sürümler (v1 Legacy)

### Sürüm 0.0.3 - 20/08/2019

* Düzeltme: Groundhogg CRM ile uyumsuzluk.
* Not: Bu, son v1 uyumlu sürüm oldu.

### Sürüm 0.0.2 - 07/12/2018

* Düzeltme: Lisans Anahtarı alanı kaldırıldı.
* Düzeltme: Özellik eklentisi aktif olduğunda Plan sekmeleri eksikti.
* Geliştirme: Kayıt alanına atlama butonu eklendi.

### Sürüm 0.0.1 - İlk Yayın

* WP Ultimo v1 için temel OpenSRS entegrasyonu.
* Basit alan adı arama ve kayıt.
* Plan tabanlı alan adı izinleri.
