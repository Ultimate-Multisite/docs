---
title: Release Notes
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Yayın Notları

## Version 2.12.0 — Yayınlanma Tarihi 2026-05-15

- Yeni: Domain eşleştirme entegrasyonu ile birlikte Hostinger (hPanel) desteklenen bir barındırma sağlayıcısı olarak eklendi.
- Yeni: Site Exporter, ağ genelinde site kurtarma işlemlerini kolaylaştırmak için artık ağ içe aktarma paketlerini yönetiyor.
- Düzeltme: BCC ile gönderilen toplu e-postalarda, alıcı adreslerinin görünmesini engellemek için artık `undisclosed-recipients` başlığı kullanılıyor.
- Düzeltme: Üyelik bitiş tarihi, bir tarih değeri yerine başka bir değerle kaydedildiğinde artık bozulmuyor.
- Düzeltme: Stripe üyelik güncellemeleri, artık kullanımdan kaldırılmış `deleteDiscount` API'sini çağırmadan indirimleri doğru bir şekilde temizliyor.
- Düzeltme: Domain eşleştirilmiş sitelerdeki SSO yönlendirmeleri, sonsuz yönlendirme döngülerini önlemek için artık sınırlandırıldı.
- Düzeltme: Kurulum sihirbazı görsel seçimi, artık temel veri modelini doğru şekilde güncelliyor.
- Düzeltme: Site Exporter CLI, artık doğru varsayılan ağ site seçimini koruyor.
- İyileştirme: Eklenti paketinden toplu `wp-cli` kaldırıldı, bu da eklenti boyutunu küçülttü.

## Version 2.11.0 — Yayınlanma Tarihi 2026-05-11

- Yeni: Site dışa aktarımları artık kendi kendini başlatan bir `index.php` paketi içeriyor, böylece ZIP dosyası ayrı bir eklenti kurulumu olmadan yeni bir barındırıcısına kurulabilir.
- Yeni: Ağ dışa aktarma özelliği, yöneticilerin Site Export admin sayfasından tüm alt siteleri tek bir arşivde dışa aktarmasına olanak tanıyor.
- Yeni: Site Şablonları planı açma/kapama düğmesi, artık bir yedekleme zinciri üzerinden zorunlu kılınıyor ve plan limitleri için şablon kullanılabilirliğini doğru şekilde kısıtlıyor.
- Yeni: Ödeme formu düzenleyicisi, zorunlu bir alan yapılandırılmadan ürün eklenirse uyarı veriyor.
- Yeni: İçe/Dışa Aktarma ayarları sekmesi, kapsamını net bir şekilde açıklıyor ve doğrudan Site Export aracına bağlantı veriyor.

## Version 2.10.0 — Yayınlanma Tarihi 2026-05-05

- Yeni: PayPal için manuel kimlik bilgisi girişi yapabilen rehberli kurulum sihirbazı, sorunsuz ağ geçidi yapılandırması için OAuth bayrak kapısı ile birlikte eklendi.
- Yeni: Şablon değiştirme müşteri paneli, güncel şablon kartı, kalıcı ızgara ve **Mevcut şablonu sıfırla** düğmesi ile yeniden tasarlandı.
- Düzeltme: Şablon değiştirme, AJAX hatası durumunda artık kullanıcı arayüzünü (UI) dondurmuyor.
- Düzeltme: Şablon değiştirme izin durumları, yetkisiz erişime karşı güvence altına alındı.
- Düzeltme: Site geçersiz kılma (override) girişleri, kaydedilmeden önce doğrulanıyor.
- Düzeltme: Faturalandırma adresi istemi, adres boş olduğunda gösteriliyor.
- Düzeltme: PHP 8.1 null-to-string kullanımdan kaldırma bildirimleri çözüldü.
- Düzeltme: Currents, zamanlama sorunlarını önlemek için artık `init` hook'undan önce tembel yükleniyor.
- Düzeltme: Filtrelenmiş SSO yolu, tüm giriş akışlarında dikkate alınıyor.
- Düzeltme: Boş site kimlik seçenekleri, kaydedildiğinde korunuyor.

## Version 2.9.0 — Yayınlanma Tarihi 2026-04-30

- Yeni: Tek site dışa aktarma ve içe aktarma, **Araçlar > Dışa Aktarma ve İçe Aktarma** altına eklendi.
- Düzeltme: Dışa aktarma ZIP dosyaları, artık kimlik doğrulamalı bir indirme uç noktası üzerinden sunuluyor.
- Düzeltme: Bekleyen dışa/içe aktarma sorgularındaki SQL enjeksiyon riski ve sorgu sorunları düzeltildi.
- Düzeltme: Yönetici, müşteri e-postasını manuel olarak doğruladığında bekleyen site yayınlanmıyordu.
- Düzeltme: Üyelik eksik olduğunda, yetim `pending_site` kayıtları temizleniyor.
- Düzeltme: Ayarlar navigasyon dolgusu ve arama bağlantı navigasyonu düzeltildi.
- Düzeltme: Bekleyen siteler, artık Tüm Siteler görünümünde ilk sırada gösteriliyor.
- Düzeltme: Ekran görüntüsü sağlayıcısı (mShots) için 403 hatalarını önlemek amacıyla User-Agent başlığı eklendi.
- Düzeltme: İçe aktarma cron zamanlaması döngüsel bağımlılığı çözüldü.
- Düzeltme: Tur ID'leri, kullanıcı ayarları anahtarlarında alt çizgiye normalize edildi.
- İyileştirme: Daha iyi uyumluluk için Alchemy/Zippy yerine artık ZipArchive kullanılıyor.

## Version 2.8.0 — Yayınlanma Tarihi 2026-04-29

- Yeni: Diğer Seçenekler ayarları arayüzüne Jumper açma/kapama düğmesi eklendi.
- Yeni: Ödeme formları list tablosuna Durum sütunu eklendi.
- Yeni: Özel MU-plugin sunrise uzantıları için Addon sunrise dosya yükleyici eklendi.
- İyileştirme: Ayarlar sayfasındaki hata raporlama seçeneği kaldırıldı.
- Düzeltme: Teşekkür sayfası site kartı — görsel artık sınırlandırıldı ve bağlantılar doğru şekilde stilize edildi.
- Düzeltme: Ekran görüntüsü sağlayıcısı thum.io'dan WordPress.com mShots'a geçirildi.
- Düzeltme: Etkinleştirme ve Varsayılan Rol, yeni kurulumda doğru varsayılan değerleri alıyor.
- Düzeltme: `get_site_url()` artık domain bir port içerdiğinde boş değer döndürmüyor.
- Düzeltme: `copy_media` ayarı boş olduğunda medya dosyaları artık doğru kopyalanıyor.
- Düzeltme: Ağ-aktifleştirme sitemeta yazıldıktan sonra nesne önbelleği doğru şekilde geçersiz kılınıyor.
- Düzeltme: 3 parçalı domainler için DNS doğrulaması yapıldığında özel domain birincil olarak yükseltiliyor.
- Düzeltme: Süresi dolmuş ödeme temizlendiğinde bekleyen üyelik iptal ediliyor.
- Düzeltme: Parola gücü kontrolcüsü, satır içi giriş istemi kapatıldıktan sonra yeniden bağlandı.
- Düzeltme: Site zaten oluşturulmuşsa, teşekkür sayfasında sonsuz sayfa yenilemesi durduruldu.
- Düzeltme: WP çekirdek kayıt seçeneği, eklenti etkinleştirildiğinde ve ayarlar kaydedildiğinde senkronize ediliyor.
- Düzeltme: PHP 8.4 uyumluluğu için `calculate_expiration` içinde null bitiş koruması eklendi.
- Düzeltme: Müşteri zaten aktif bir üyeliğe sahipse, yinelenen kayıtlar engelleniyor.
- Düzeltme: Ödeme sırasında `date_expiration` için null kontrolü eklendi.
- Düzeltme: Site sağlama (provisioning) güçlendirildi — limitler, üyelik çıkarımı, domain yükseltme.
- Düzeltme: Ön-kurulum kontrol durumu etiketi, kontrol başarısız olduğunda NOT Activated olarak düzeltildi.
- Düzeltme: E-posta doğrulama URL'leri için ödeme domaini kullanılıyor.
- Düzeltme: Ödeme sonrası, parola alanı mevcut değilse otomatik giriş yapılıyor.
- Düzeltme: Ücretsiz üyelikler artık süresi dolmuyor — ömür boyu kabul ediliyor.
- Düzeltme: E-posta doğrulama kapısı, müşteri e-postasını doğrulayana kadar site yayınını durduruyor.
- Düzeltme: SES v2 API uç noktası temel yolu ve kimlik yolu düzeltildi.
- Düzeltme: `wu_inline_login_error` hook'u, ön-gönderim yakalama bloğunda yayınlanıyor.
