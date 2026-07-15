---
title: Sürüm Notları
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Sürüm Notları

## Sürüm 2.13.0 — 2026-06-05 tarihinde yayınlandı {#version-2130--released-on-2026-06-05}

- Yeni: Tenant ağlarının yönetilen eylemler için müşterileri ana siteye geri yönlendirebilmesi amacıyla müşteri hesabı, checkout, faturalandırma, site, fatura, template değiştirme ve domain mapping akışları için sovereign-tenant desteği eklendi.
- Yeni: Kaydedilmiş bir faturalandırma anlaşması, subscription veya vault token eksik olduğunda gateways’in otomatik yenilemeyi devre dışı bırakabilmesi için yinelenen memberships’e renewal-credential kontrolleri eklendi.
- Yeni: Arka plan işlerinin geciktiği hostlarda checkout’tan site sağlamaya geçişi daha güvenilir hale getirmek için bekleyen site oluşturma için HMAC ile doğrulanmış loopback yayınlama eklendi.
- Yeni: SSO URL’leri, checkout formu temel domainleri ve otomatik domain kaydı oluşturma için geliştirici uzantı noktaları eklendi.
- Düzeltme: SSO artık mapped domainler, anonim broker ziyaretleri, çıkış ve pluginler arası bağımlılık çakışmaları genelinde daha güvenilir.
- Düzeltme: Bekleyen site oluşturma artık eski yayın bayraklarından kurtuluyor ve müşterilerin site oluşturma ekranında takılı kalmasını önlüyor.
- Düzeltme: Domain kayıtları artık paylaşılan checkout formu temel domainleri için oluşturulmuyor ve etkin entegrasyon yoksa kullanılmayan host sağlayıcı arka plan işleri atlanıyor.
- Düzeltme: Checkout, fatura adresi, parola sıfırlama, e-posta doğrulama, template değiştirme, turlar ve müşteri Dashboard uç durumları artık normal müşteri akışlarını engellemiyor.
- Düzeltme: Toplu e-postalar artık alıcı listeleri veya posta iletimleri başarısız olduğunda SMTP/plugin ölümcül hatalarından kaçınırken alıcıları gizli tutuyor.
- Düzeltme: Membership yenilemeleri, sona erme gösterimi ve ödeme tahsilatı uç durumları artık anında sona ermeleri, çökmeleri veya kaçırılan zorunlu ödemeleri önlüyor.
- İyileştirildi: WordPress uyumluluğu 7.0’a kadar test edildi, production Vue varlıkları npm kaynaklarından yeniden oluşturuldu ve Cypress uçtan uca kapsamı artık daha fazla checkout, kurulum, SSO ve gateway akışını çalıştırıyor.

## Sürüm 2.12.0 — 2026-05-15 tarihinde yayınlandı {#version-2120--released-on-2026-05-15}

- Yeni: Hostinger (hPanel), domain mapping entegrasyonuyla desteklenen bir host sağlayıcı olarak eklendi
- Yeni: Site Exporter artık ağ genelinde site geri yüklemeyi kolaylaştırmak için ağ içe aktarma paketlerini işliyor
- Düzeltme: BCC toplu e-postaları artık alıcı adreslerinin açığa çıkmasını önlemek için undisclosed-recipients header kullanıyor
- Düzeltme: Membership sona erme tarihi artık tarih olmayan bir değerle kaydederken bozulmuyor
- Düzeltme: Stripe membership güncellemeleri artık kullanımdan kaldırılmış deleteDiscount API’yi çağırmadan indirimleri doğru şekilde temizliyor
- Düzeltme: Domain-mapped sitelerde SSO yönlendirmeleri artık sonsuz yönlendirme döngülerini önlemek için sınırlandırılıyor
- Düzeltme: Kurulum sihirbazı görsel seçici seçimi artık alttaki veri modelini doğru şekilde güncelliyor
- Düzeltme: Site Exporter CLI artık doğru varsayılan ağ site seçimini koruyor
- İyileştirildi: Paketlenmiş wp-cli plugin paketinden kaldırıldı, plugin boyutu azaltıldı

## Sürüm 2.11.0 — 2026-05-11 tarihinde yayınlandı {#version-2110--released-on-2026-05-11}

- Yeni: Site dışa aktarımları artık kendi kendine önyüklenen bir `index.php` içeriyor; böylece ZIP, ayrı bir plugin kurulumu olmadan yeni bir hosta kurulabilir.
- Yeni: Ağ dışa aktarma, yöneticilerin Site Export yönetici sayfasından tüm alt siteleri tek bir arşivde dışa aktarmasına olanak tanır.
- Yeni: Site Templates plan değiştirme seçeneğine izin ver artık bir fallback zinciri aracılığıyla uygulanıyor ve plan sınırları için template kullanılabilirliğini doğru şekilde kısıtlıyor.
- Yeni: Checkout form düzenleyicisi, zorunlu alan yapılandırılmadan bir product eklendiğinde uyarır.
- Yeni: İçe/Dışa Aktarma ayarları sekmesi artık kapsamını açıkça tanımlıyor ve doğrudan Site Export aracına bağlantı veriyor.

## Sürüm 2.10.0 — 2026-05-05 tarihinde yayınlandı {#version-2100--released-on-2026-05-05}

- Yeni: Sorunsuz gateway yapılandırması için OAuth bayrak kapısıyla manuel kimlik bilgisi girişi için PayPal yönlendirmeli kurulum sihirbazı.
- Yeni: Template değiştirme müşteri paneli, mevcut-template kartı, kalıcı grid ve **Mevcut template’i sıfırla** düğmesiyle yeniden tasarlandı.
- Düzeltme: Template değiştirme artık AJAX hatasında UI’ı askıda bırakmıyor.
- Düzeltme: Template değiştirme izin durumları yetkisiz erişime karşı güvenceye alındı.
- Düzeltme: Site geçersiz kılma girişleri kaydetmeden önce doğrulandı.
- Düzeltme: Fatura adresi istemi artık adres boş olduğunda gösteriliyor.
- Düzeltme: PHP 8.1 null-to-string kullanımdan kaldırma bildirimleri çözüldü.
- Düzeltme: Zamanlama sorunlarını önlemek için Currents init hook’tan önce lazy-loaded yapıldı.
- Düzeltme: Filtrelenmiş SSO yolu tüm giriş akışlarında dikkate alındı.
- Düzeltme: Boş site kimliği seçenekleri kaydetmede korundu.

## Sürüm 2.9.0 — 2026-04-30 tarihinde yayınlandı {#version-290--released-on-2026-04-30}

- Yeni: Tek site dışa ve içe aktarma **Araçlar > Dışa ve İçe Aktar** altında eklendi.
- Düzeltme: Dışa aktarma ZIP dosyaları artık kimliği doğrulanmış bir indirme endpoint’i üzerinden sunuluyor.
- Düzeltme: Bekleyen dışa/içe aktarma sorgularında SQL injection riski ve sorgu sorunları düzeltildi.
- Düzeltme: Yönetici müşteri e-postasını manuel olarak doğruladığında bekleyen site yayınlanmıyordu.
- Düzeltme: Membership eksik olduğunda yetim pending_site kayıtları temizleniyor.
- Düzeltme: Ayarlar nav padding’i ve arama anchor navigasyonu düzeltildi.
- Düzeltme: Bekleyen siteler artık All Sites görünümünde ilk gösteriliyor.
- Düzeltme: 403 hatalarını önlemek için ekran görüntüsü sağlayıcısı (mShots) User-Agent header eklendi.
- Düzeltme: Import cron schedule döngüsel bağımlılığı çözüldü.
- Düzeltme: Tur ID’leri kullanıcı ayarları anahtarlarında alt çizgilere normalleştirildi.
- İyileştirildi: Daha iyi uyumluluk için Alchemy/Zippy yerine artık ZipArchive kullanılıyor.

## Sürüm 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- Yeni: Jumper'ı Etkinleştir geçişi Other Options ayarları UI'ına eklendi.
- Yeni: Checkout formları liste tablosuna durum sütunu eklendi.
- Yeni: Özel MU-plugin sunrise uzantıları için Addon sunrise dosya yükleyicisi.
- İyileştirildi: Ayarlar sayfasından hata raporlama katılım ayarı kaldırıldı.
- Düzeltme: Teşekkür sayfası site kartı — görsel artık sınırlandırıldı ve bağlantılar doğru şekilde stillendirildi.
- Düzeltme: Ekran görüntüsü sağlayıcısı thum.io'dan WordPress.com mShots'a geçirildi.
- Düzeltme: Kaydı Etkinleştir ve Default Role artık yeni kurulumda doğru varsayılanları ayarlıyor.
- Düzeltme: `get_site_url()` artık domain bir port içerdiğinde boş döndürmüyor.
- Düzeltme: `copy_media` ayarı boş olduğunda clone medya dosyaları artık doğru şekilde kopyalanıyor.
- Düzeltme: Network-activate sitemeta yazımından sonra nesne önbelleği doğru şekilde geçersiz kılındı.
- Düzeltme: 3 parçalı domainler için DNS doğrulamasında özel domain otomatik olarak birincil yapıldı.
- Düzeltme: Süresi dolmuş payment temizlendiğinde bekleyen membership iptal edildi.
- Düzeltme: Satır içi login istemi kapatıldıktan sonra parola gücü denetleyicisi yeniden bağlandı.
- Düzeltme: Site zaten oluşturulduğunda teşekkür sayfasında sonsuz sayfa yenilemesi durduruldu.
- Düzeltme: WP core kayıt seçeneği plugin etkinleştirmesinde ve ayar kaydında senkronize edildi.
- Düzeltme: PHP 8.4 uyumluluğu için `calculate_expiration` içinde null expiration koruması eklendi.
- Düzeltme: Müşterinin zaten aktif bir membership'ı olduğunda yinelenen signup'lar engellendi.
- Düzeltme: Checkout'ta `date_expiration` için null kontrolü eklendi.
- Düzeltme: Site sağlama güçlendirildi — sınırlamalar, membership çıkarımı, domain yükseltme.
- Düzeltme: Pre-install check durum etiketi, kontrol başarısız olduğunda NOT Activated olarak düzeltildi.
- Düzeltme: E-posta doğrulama URL'leri için checkout domaini kullanıldı.
- Düzeltme: Parola alanı bulunmadığında checkout sonrası otomatik login.
- Düzeltme: Ücretsiz membership'lar artık sona ermiyor — ömür boyu olarak ele alınıyor.
- Düzeltme: E-posta doğrulama kapısı, müşteri e-postayı doğrulayana kadar site yayınını bekletir.
- Düzeltme: SES v2 API endpoint temel yolu ve kimlik rotası düzeltildi.
- Düzeltme: `wu_inline_login_error` hook'u gönderim öncesi catch bloğunda yayımlandı.
