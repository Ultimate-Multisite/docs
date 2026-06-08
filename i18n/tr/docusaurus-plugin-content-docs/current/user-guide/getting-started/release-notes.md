---
title: Sürüm Notları
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Sürüm Notları

## Version 2.12.0 — Released on 2026-05-15

- Yeni: Hostinger (hPanel) desteklenen bir barındırma sağlayıcısı olarak eklendi ve alan adı eşleme entegrasyonu eklendi.
- Yeni: Site Exporter, ağ genelinde site kurtarma işlemini kolaylaştırmak için artık ağ içe aktarma paketlerini yönetiyor.
- Düzeltme: BCC yayın e-postaları, alıcı adreslerinin görünmesini engellemek için artık açıklanmayan alıcılar (undisclosed-recipients) başlığını kullanıyor.
- Düzeltme: Üyelik sona erme tarihi, bir tarih değeri yerine başka bir değerle kaydedildiğinde artık bozulmuyor.
- Düzeltme: Stripe üyelik güncellemeleri, kullanımdan kaldırılmış deleteDiscount API'sini çağırmadan indirimleri doğru bir şekilde temizliyor.
- Düzeltme: Alan adı eşlenmiş sitelerdeki SSO yönlendirmeleri, sonsuz yönlendirme döngülerini önlemek için artık sınırlandırılıyor.
- Düzeltme: Kurulum sihirbazı görsel seçimi, alttaki veri modelini doğru şekilde güncelliyor.
- Düzeltme: Site Exporter CLI, doğru varsayılan ağ site seçimini koruyor.
- Geliştirildi: Eklenti paketinden toplu wp-cli kaldırıldı, bu da eklenti boyutunu küçülttü.

## Version 2.11.0 — Released on 2026-05-11

- Yeni: Site dışa aktarımları artık kendi kendini başlatan bir `index.php` paketi içeriyor, böylece ZIP dosyası ayrı bir eklenti kurulumu olmadan yeni bir barındırma ortamına kurulabilir.
- Yeni: Ağ dışa aktarımı, yöneticilerin Site Export yönetici sayfasından tüm alt siteleri tek bir arşivde dışa aktarmasına olanak tanır.
- Yeni: Site Şablonları planı açma/kapama düğmesi artık bir yedekleme zinciri yoluyla zorunlu kılınıyor ve şablon kullanılabilirliğini plan limitleri için doğru şekilde kısıtlıyor.
- Yeni: Ödeme formu düzenleyicisi, gerekli bir alan yapılandırılmadan ürün eklendiğinde uyarı veriyor.
- Yeni: İçe/Dışa Aktarma ayarları sekmesi artık kapsamını açıkça tanımlıyor ve doğrudan Site Export aracına bağlantı veriyor.

## Version 2.10.0 — Released on 2026-05-05

- Yeni: Manuel kimlik bilgisi girişi için PayPal rehberli kurulum sihirbazı, sorunsuz ağ geçidi yapılandırması için OAuth bayrak kapısıyla birlikte eklendi.
- Yeni: Şablon değiştirme müşteri paneli, mevcut şablon kartı, kalıcı ızgara ve **Mevcut şablonu sıfırla** düğmesi ile yeniden tasarlandı.
- Düzeltme: Şablon değiştirme, AJAX hatası durumunda artık kullanıcı arayüzünü (UI) dondurmuyor.
- Düzeltme: Şablon değiştirme izin durumları, yetkisiz erişime karşı güvence altına alındı.
- Düzeltme: Site geçersiz kılma (Site override) girişleri, kaydedilmeden önce doğrulanıyor.
- Düzeltme: Faturalandırma adresi istemi, adres boş olduğunda gösteriliyor.
- Düzeltme: PHP 8.1 null'dan string'e geçişle ilgili kullanımdan kaldırma bildirimleri çözüldü.
- Düzeltme: Currents, zamanlama sorunlarını önlemek için artık init hook'undan önce tembel yükleniyor (lazy-loaded).
- Düzeltme: Filtrelenmiş SSO yolu, tüm giriş akışlarında dikkate alınıyor.
- Düzeltme: Boş site kimlik seçenekleri, kaydedildiğinde korunuyor.

## Version 2.9.0 — Released on 2026-04-30

- Yeni: Tek site dışa aktarma ve içe aktarma, **Araçlar > Dışa Aktarma ve İçe Aktarma** altına eklendi.
- Düzeltme: Dışa aktarma ZIP dosyaları artık kimlik doğrulamalı bir indirme uç noktası üzerinden sunuluyor.
- Düzeltme: Bekleyen dışa/içe aktarma sorgularındaki SQL enjeksiyon riski ve sorgu sorunları düzeltildi.
- Düzeltme: Yönetici müşteri e-postasını manuel olarak doğruladığında bekleyen site yayınlanmıyordu.
- Düzeltme: Üyelik eksik olduğunda yetim pending_site kayıtları temizleniyor.
- Düzeltme: Ayarlar navigasyon dolgusu ve arama bağlantı navigasyonu düzeltildi.
- Düzeltme: Bekleyen siteler, Tüm Siteler görünümünde artık ilk sırada gösteriliyor.
- Düzeltme: Ekran görüntüsü sağlayıcısı (mShots) User-Agent başlığı eklendi, bu da 403 hatalarını önlüyor.
- Düzeltme: İçe aktarma cron zamanlaması döngüsel bağımlılığı çözüldü.
- Düzeltme: Tur ID'leri, kullanıcı ayarları anahtarlarında alt çizgiye normalize edildi.
- Geliştirildi: Daha iyi uyumluluk için Alchemy/Zippy yerine ZipArchive kullanıldı.

## Version 2.8.0 — Released on 2026-04-29

- Yeni: Diğer Seçenekler ayarları arayüzüne Jumper açma/kapama düğmesi eklendi.
- Yeni: Ödeme formları list tablosuna Durum sütunu eklendi.
- Yeni: Özel MU-plugin sunrise uzantıları için Addon sunrise dosya yükleyici eklendi.
- Geliştirildi: Ayarlar sayfasındaki hata raporlama seçeneği kaldırıldı.
- Düzeltme: Teşekkür sayfası site kartı — görsel artık kısıtlandı ve bağlantılar doğru şekilde biçimlendirildi.
- Düzeltme: Ekran görüntüsü sağlayıcısı thum.io'dan WordPress.com mShots'a geçirildi.
- Düzeltme: Ekleme ve Varsayılan Rol etkinleştirme, yeni kurulumda doğru varsayılan değerleri alıyor.
- Düzeltme: `get_site_url()` artık alan adı bir port içerdiğinde boş değer döndürmüyor.
- Düzeltme: `copy_media` ayarı boş olduğunda medya dosyaları artık doğru şekilde kopyalanıyor.
- Düzeltme: Object cache, ağ-aktifleştirme sitemeta yazıldıktan sonra doğru şekilde geçersiz kılınıyor.
- Düzeltme: 3 parçalı alan adları için DNS doğrulaması yapıldığında özel alan adı birincil olarak yükseltiliyor.
- Düzeltme: Süresi dolmuş ödeme temizlendiğinde bekleyen üyelik iptal ediliyor.
- Düzeltme: Şifre gücü kontrolcüsü, satır içi giriş istemi kapatıldıktan sonra yeniden bağlanıyor.
- Düzeltme: Site zaten oluşturulmuşsa, teşekkür sayfasında sonsuz sayfa yenilemesi durduruldu.
- Düzeltme: WP çekirdek kayıt seçeneği, eklenti etkinleştirildiğinde ve ayarlar kaydedildiğinde senkronize ediliyor.
- Düzeltme: PHP 8.4 uyumluluğu için `calculate_expiration` içinde null sona erme koruması eklendi.
- Düzeltme: Müşteri zaten aktif bir üyeliğe sahipse, yinelenen kayıtlar engelleniyor.
- Düzeltme: Ödeme sırasında `date_expiration` için null kontrolü eklendi.
- Düzeltme: Site sağlama (Site provisioning) güçlendirildi — sınırlamalar, üyelik çıkarımı, alan adı yükseltme.
- Düzeltme: Ön-kurulum kontrol durumu etiketi, kontrol başarısız olduğunda NOT Aktif olarak düzeltildi.
- Düzeltme: Ödeme için kullanılan alan adı, e-posta doğrulama URL'leri için kullanılıyor.
- Düzeltme: Şifre alanı bulunmadığında ödeme sonrası otomatik giriş yapılıyor.
- Düzeltme: Ücretsiz üyelikler artık süresi dolmuyor — ömür boyu kabul ediliyor.
- Düzeltme: E-posta doğrulama kapısı, müşteri e-postasını doğrulayana kadar site yayınını durduruyor.
- Düzeltme: SES v2 API uç noktası temel yolu ve kimlik yolu düzeltildi.
- Düzeltme: `wu_inline_login_error` hook'u, pre-submit yakalama bloğunda yayımlanıyor.
